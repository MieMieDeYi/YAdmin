/**
 * Copyright: 2019-2020，小树苗(www.xiaosm.cn)
 * FileName: Task
 * Author:   Young
 * Date:     2020/6/18 15:58
 * Description:
 * History:
 * <author>          <time>          <version>          <desc>
 * Young         修改时间           版本号             描述
 */
package cn.xiaosm.plainadmin.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;
import lombok.experimental.Accessors;

/**
 * 〈一句话功能简述〉
 * 〈〉
 *
 * @author Young
 * @create 2020/6/18
 * @since 1.0.0
 */
@Data
@Accessors(chain = true)
public class Task extends BaseEntity {

    @TableId(type = IdType.AUTO)
    private Integer id;
    private String name;
    private String cron;
    @TableField(value = "`desc`")
    private String desc;
    private String className;
    private String methodName;
    private Integer userId;
    private Integer status;

}