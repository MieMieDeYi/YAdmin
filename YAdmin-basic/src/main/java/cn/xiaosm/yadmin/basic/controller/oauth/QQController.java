/**
 * Copyright: 2019-2020
 * FileName: QQController
 * Author:   Young
 * Date:     2020/12/3 15:31
 * Description:
 * History:
 * <author>          <time>          <version>          <desc>
 * Young         修改时间           版本号             描述
 */
package cn.xiaosm.yadmin.basic.controller.oauth;

import cn.hutool.core.util.StrUtil;
import cn.hutool.extra.servlet.ServletUtil;
import cn.hutool.json.JSONUtil;
import cn.xiaosm.yadmin.basic.config.security.service.TokenService;
import cn.xiaosm.yadmin.basic.config.security.service.UserDetailsServiceImpl;
import cn.xiaosm.yadmin.basic.entity.LoginUser;
import cn.xiaosm.yadmin.basic.entity.ResponseBody;
import cn.xiaosm.yadmin.basic.entity.enums.ResponseStatus;
import cn.xiaosm.yadmin.basic.entity.oauth.QQAuth;
import cn.xiaosm.yadmin.basic.exception.CanShowException;
import cn.xiaosm.yadmin.basic.service.UserService;
import me.zhyd.oauth.config.AuthConfig;
import me.zhyd.oauth.model.AuthCallback;
import me.zhyd.oauth.model.AuthResponse;
import me.zhyd.oauth.model.AuthUser;
import me.zhyd.oauth.request.AuthQqRequest;
import me.zhyd.oauth.request.AuthRequest;
import me.zhyd.oauth.utils.AuthStateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Objects;

/**
 * 〈一句话功能简述〉
 * 〈〉
 *
 * @author Young
 * @create 2020/12/3
 * @since 1.0.0
 */
@RestController
@RequestMapping("/oauth")
public class QQController implements AuthLoginHandler {

    @Autowired
    UserService userService;
    @Autowired
    UserDetailsServiceImpl userDetailsService;
    @Autowired
    TokenService tokenService;
    @Autowired
    private QQAuth qqAuth;

    /**
     * 跳转到快捷登录的平台网址
     * @param response
     * @throws IOException
     */
    @Override
    @RequestMapping("/render/qq")
    public void renderAuth(HttpServletResponse response) throws IOException {
        AuthRequest authRequest = getAuthRequest();
        response.sendRedirect(authRequest.authorize(AuthStateUtils.createState()));
    }

    /**
     * 平台的回调地址
     * @param callback 包装了平台用于登录的key
     * @param request
     * @return
     */
    @Override
    @RequestMapping("/callback/qq")
    public String login(AuthCallback callback, HttpServletRequest request) {
        Object body = null;
        try {
            AuthRequest authRequest = getAuthRequest();
            // 获取平台的用户信息
            AuthResponse login = authRequest.login(callback);
            if (login.ok()) {
                String openId = ((AuthUser) login.getData()).getToken().getOpenId();
                // 通过 openID 获取在当前系统内的用户信息
                LoginUser loginUser = (LoginUser) userDetailsService
                    .loadUserByOpenId(openId, "qq");
                // 如果能够查到用户登录信息
                if (Objects.nonNull(loginUser)) {
                    // 设置登录用户信息（用户的权限和菜单列表）
                    userDetailsService.loadUserInfo(loginUser);
                    // 记录登录足迹
                    userService.addLoginTrack(loginUser.getId(), ServletUtil.getClientIP(request));
                    // 返回 token
                    body = new HashMap<String, Object>(){{
                        put("code", ResponseStatus.SUCCESS.getCode());
                        put("msg", "登录成功");
                        // 根据认证创建 Token
                        put("token", tokenService.createToken(loginUser));
                    }};
                } else {
                    // 该账号未绑定此快捷登录方式
                    throw new CanShowException("当前QQ暂未绑定平台账户，请先绑定");
                }
            } else {
                throw new CanShowException("快捷登录当前不可用");
            }
        } catch (CanShowException e) {
            body = new ResponseBody(ResponseStatus.OAUTH_UNBIND, e.getMessage());
        } catch (Exception e) {
            body = new ResponseBody(ResponseStatus.OAUTH_UNBIND, "快捷登录失败，请联系管理员");
        } finally {
            String script = "<script>window.opener.postMessage('{}', '{}');window.close();</script>";
            script = StrUtil.format(script, JSONUtil.toJsonStr(body), "http://localhost:8999");
            return script;
        }
    }

    private AuthRequest getAuthRequest() {
        return new AuthQqRequest(AuthConfig.builder()
                .clientId(qqAuth.getAppid())
                .clientSecret(qqAuth.getAppkey())
                .redirectUri(qqAuth.getCallback())
                .build());
    }

}