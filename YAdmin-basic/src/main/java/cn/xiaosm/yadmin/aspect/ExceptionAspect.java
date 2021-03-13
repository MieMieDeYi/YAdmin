package cn.xiaosm.yadmin.aspect;

import cn.hutool.extra.servlet.ServletUtil;
import cn.xiaosm.yadmin.config.security.service.TokenService;
import cn.xiaosm.yadmin.entity.Log;
import cn.xiaosm.yadmin.service.LogService;
import cn.xiaosm.yadmin.util.ServletUtils;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PrintStream;

@Aspect
@Component
public class ExceptionAspect {

    @Autowired
    TokenService tokenService;
    @Autowired
    LogService logService;

    //定义切点 @Pointcut
    //在注解的位置切入代码
    @Pointcut("execution(public * cn.xiaosm.yadmin.config.GlobalExceptionHandler.catchException(..))")
    public void logPointCut() { }

    //切面 后置通知
    @AfterReturning("logPointCut()")
    public void after(JoinPoint joinPoint) {
        Log log = new Log();

        log.setError(this.getStackTrace((Exception) joinPoint.getArgs()[0]));
        log.setTitle(this.getFirstLine((Exception) joinPoint.getArgs()[0]));
        log.setType("ERROR");

        log.setIp(ServletUtil.getClientIP(ServletUtils.getRequest()));
        logService.addEntity(log);
    }

    public String getFirstLine(Exception e) {
        return e.getMessage().length() > 30 ?
                e.getMessage().substring(0, 30) : e.getMessage();
    }

    public String getStackTrace(Exception e) {
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        PrintStream ps = new PrintStream(out);
        e.printStackTrace(ps);
        try {
            out.close();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        ps.close();
        return out.toString();
    }

}
