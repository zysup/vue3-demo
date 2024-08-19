# 项目介绍

我是项目介绍

<div style="text-align: center; margin-bottom: 20px">
<img src="./public/project.png" alt="项目首页图" title="项目首页图" width='150' />
<img src="./public/project.png" alt="项目首页图" title="项目首页图" width='150' />
<img src="./public/project.png" alt="项目首页图" title="项目首页图" width='150' />
</div>

# 开发规范

1.书写html尽量做到语义化和扁平化,尽量减少标签的嵌套

2.遵循结构 表现 逻辑分离,不要写内联样式,不要在html中写过长的复杂的js逻辑,不要在html css中内联base64或者svg代码

3.文件和文件夹的命名尽量做到语义化和扁平化,尽量减少文件的嵌套

4.注释遵循jsdoc规范,每个文件头部都需要有注释,写明文件的作用和创建者(维护人员).复杂的js逻辑 函数 类需要写明注释,html如果太多的话,也需要添加注释

5.css类名一律使用小写字母或者小写字母加中横线,提倡使用tailwind,css选择器尽量避免层层嵌套,尽量避免使用!important,尽量避免使用超大的z-index

6.避免非必要的组件和逻辑抽离

7.js函数名 变量名 类名使用小驼峰,长一点没关系,尽量语义化,不要使用常见的index,name,value,itme这类名称,不要使用连续的三目条件语句

8.消除魔术字符串，改由含义清晰的常量代替,多处用到的常量需要提取到全局的配置文件中

9.谨慎修改全局的配置文件 插件配置 全局css

10.禁止引入开发人员私人的npm包

# 分支管理

# 性能优化

1.除首页外的所有路由组件采用动态加载,大组件采用异步加载,js文件尽量异步加载

2.图片使用1.5倍图或者2倍图,使用前先用工具压缩,做好预加载和懒加载,酌情使用雪碧图,避免大量图片被转化成base64内联到js文件中

3.计时器和监听器需要在合适的时机销毁

4.做好事件的防抖和节流

5.时刻留意各种资源的加载,接口的调用,避免不必要的性能开销

# 环境说明

# 人员分工

# 文档链接

- [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc)
- [VS Code](https://code.visualstudio.com/)

# 其他说明

- 使用 `npx eslint  --print-config eslint.config.js > 1.txt` 输出 eslint 的最终配置
