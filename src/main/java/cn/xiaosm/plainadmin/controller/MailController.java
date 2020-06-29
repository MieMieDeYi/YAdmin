/**
 * Copyright: 2019-2020
 * FileName: MailController
 * Author:   Young
 * Date:     2020/6/29 8:19
 * Description:
 * History:
 * <author>          <time>          <version>          <desc>
 * Young         修改时间           版本号             描述
 */
package cn.xiaosm.plainadmin.controller;

import cn.hutool.core.util.StrUtil;
import cn.xiaosm.plainadmin.annotation.LogRecord;
import cn.xiaosm.plainadmin.entity.ResponseBody;
import cn.xiaosm.plainadmin.entity.vo.MailVO;
import cn.xiaosm.plainadmin.utils.MailUtils;
import cn.xiaosm.plainadmin.utils.ResponseUtils;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;
import java.util.Objects;

/**
 * 〈一句话功能简述〉
 * 〈〉
 *
 * @author Young
 * @create 2020/6/29
 * @since 1.0.0
 */
@RestController
@RequestMapping("/api/mail")
public class MailController {


    @PostMapping
    @LogRecord("邮件发送")
    @PreAuthorize("hasAuthority('email:send') or hasRole('admin')")
    public ResponseBody sendMail(MailVO mailVO) throws IOException {
        if (StrUtil.isNotBlank(mailVO.getTemplate())) {
            InputStream in = this.getClass().getResourceAsStream("/template/" + mailVO.getTemplate());
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            PrintStream ps = new PrintStream(out);
            byte[] size = new byte[2048];
            int length = 0;
            try {
                while ((length = in.read(size)) != -1) {
                    ps.write(size, 0, length);
                }
                System.out.println(out.toString());
                mailVO.setContent(out.toString());
                mailVO.setIsHtml(true);
            } catch (IOException e) {

            } finally {
                ps.close();
                out.close();
            }
        }
        MailUtils.sendMail(mailVO.getTo(), mailVO.getSubject(), mailVO.getContent(), mailVO.getIsHtml());
        return ResponseUtils.buildSuccess("邮件发送成功，请查看收件箱");
    }

}