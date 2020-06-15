/**
 * Copyright: 2019-2020，小树苗(www.xiaosm.cn)
 * FileName: Menu
 * Author:   Young
 * Date:     2020/6/14 14:28
 * Description:
 * History:
 * <author>          <time>          <version>          <desc>
 * Young         修改时间           版本号             描述
 */
package cn.xiaosm.plainadmin.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.util.List;

/**
 * 〈一句话功能简述〉
 * 〈〉
 *
 * @author Young
 * @create 2020/6/14
 * @since 1.0.0
 */
@Data
@TableName("menu")
public class Menu extends BaseEntity {

    @TableId(type = IdType.AUTO)
    private Integer id;
    private String name; // 菜单名称
    private Integer level; // 菜单级别
    private Integer parentMenu; // 上级菜单
    private String icon; // 菜单图标
    private Integer order; // 排序
    private String index; // 组件路径
    private String component; // 组件名称
    private Integer status; // 状态
    private List<Menu> children;

}