# todo
    1. [done]upload to github
    2. [feature] top navigation bar
        2.1 [done][feature] search stock
            enter text -> click search -> fetch api -> console.log(result)
            处理 result -> 展示



# 遇到的问题
问题：antDesign 样式不生效
解决：
    - 项目入口 import 'antd/dist/antd.css'，但是太重且样式会全局覆盖，舍弃
    - App.css @import '~antd/dist/antd.css'，但是样式会全局覆盖
    - body 用 className 表示