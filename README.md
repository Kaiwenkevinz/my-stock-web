# todo
    1. [done]upload to github
    2. [done][feature] search stock
        enter text -> click search -> fetch api -> console.log(result)
        处理 result -> 展示
    3. [feture]我的账户
        - localStorage
            - add (done)
                get list of accountInfos
                localStorage.setItem('items', JSON.stringify(items));
            - remove
            - modify
            - view (done)
    4. [done]mockjs 模拟后端返回
        - 模拟 list accounts 返回
        - 模拟 add account
    5. NestJS 后端开发
        - [done]list all accountInfos
        - [done]get an account by id
        - [done]insert a new account
        - [done]delete an account by id
        - [done]update an account by id
    6. 前端用 typescript 重写


# 备忘
- 开启数据库连接
    - brew services start mysql
- 登录数据库
    - mysql -u root -p
- NestJS 教程
    - https://juejin.cn/post/7008932991325962247/#heading-18


# 遇到的问题
问题：antDesign 样式不生效
解决：
    - 项目入口 import 'antd/dist/antd.css'，但是太重且样式会全局覆盖，舍弃
    - App.css @import '~antd/dist/antd.css'，但是样式会全局覆盖
    - body 用 className 表示

问题：封装一个自定义弹出 Modal
解决：
    - Modal 的显示隐藏由父组件传入 props 控制
    - ReactDOM.createPortal(<div>....</div>,document.querySelector('body')) 什么意思？
        - 把元素挂载在一个父节点上面

问题：NestJS Service async await function？
