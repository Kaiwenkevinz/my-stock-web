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
    5. [done]NestJS 后端开发
        - [done]list all accountInfos
        - [done]get an account by id
        - [done]insert a new account
        - [done]delete an account by id
        - [done]update an account by id
    6. [done]前端用 typescript 重写
    7. 前端 Portfolio 的数据操作
        - 增(done)
        - 删(done)
        - 改(done)
        - 查(done)
    8. [doing]User Authtication 
                


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
-  项目入口 import 'antd/dist/antd.css'，但是太重且样式会全局覆盖，舍弃
- App.css @import '~antd/dist/antd.css'，但是样式会全局覆盖
- body 用 className 表示


问题：封装一个自定义弹出 Modal

解决：
- Modal 的显示隐藏由父组件传入 props 控制
- ReactDOM.createPortal(<div>....</div>,document.querySelector('body')) 什么意思？
    - 把元素挂载在一个父节点上面


问题：NestJS Service async await function？

**解决：待补充**


问题：自定义 Modal 支持创建和编辑, 编辑模式 Modal 如何获得初始值，并支持用户输入？

解决：
- useEffect 监听 props，外部传 props 来触发 useEffect 来 setState （https://www.jianshu.com/p/91b63ebc47ed）
- 重点是 `useEffect` 的使用和组件的`生命周期`

    ```javascript
    // 第一次挂载到 DOM 会调
    useEffect(() => {
        console.log('组件第一次挂载 DOM');
    }, []);

    // givenName prop/state 更新 => 出发渲染 => 会调
    useEffect(() => {
        console.log('givenName 更新, 组件重新渲染', givenName);
        setAccountName(givenName);

        // 上一个组件即将卸载时执行
        return () => {
            console.log('组件即将卸载');
        };
    }, [givenName]);

    // 每次渲染都会调
    useEffect(() => {
        console.log('组件渲染了');
    });
    ```


问题：<select defaultValue={theValue}> 不更新，theValue是props所以它更新select default value 应该随着更新
解决：
    - 发生原因：受控组件的数据唯一来源应该是 react state
                defaultValue 是 DOM 元素控制的，而非由 react 控制，所以变量更新不会导致rerender
     https://zh-hans.reactjs.org/docs/forms.html#controlled-components
    - 使用 value={thisValue} 解决




