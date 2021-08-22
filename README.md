# htmlparser 将html解析成json ,html中可以包含内联样式，class样式。（htmlparser parses html into json, html can contain inline styles, class styles）

### If you don’t speak Chinese, you can skip here and [go see English version](#english-version)
（本项目未引入任何第三方libs，基于web api DOMParser()开发，使用typescript构建）
[new DOMParser()](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMParser/DOMParser)

支持es5，es next，typescript 运行环境

### 1 安装：npm i html-parser-client

### 2 使用Demo：

```javascript
import htmlParser from 'html-parser-client'
const htmlstring =`
<!DOCTYPE html>
<html>
  <head>
     
    <meta charset="utf-8" />
     
    <title>菜鸟教程(runoob.com)</title>
     
    <style>
      .testContainer {
        background: red;
        height: 500px;
      }
      .container2 {
        line-height: 20px;
      }
      .test2 {
        display: "flex";
      }
    </style>
  </head>
  <body>
    <div id="container" style="width: 500px" class="testContainer container2">
      <div id="header" style="background-color: #ffa500">
        <h1 style="margin-bottom: 0">主要的网页标题</h1>
      </div>

      <div
        id="menu"
        style="
          background-color: #ffd700;
          height: 200px;
          width: 100px;
          float: left;
        "
      >
        <b>菜单</b><br />
        HTML<br />
        CSS<br />
        JavaScript
      </div>

      <div
        id="content"
        style="
          background-color: #eeeeee;
          height: 200px;
          width: 400px;
          float: left;
        "
        class="test2"
      >
        内容在这里
      </div>

      <div
        id="footer"
        style="background-color: #ffa500; clear: both; text-align: center"
      >
        版权 © runoob.com
      </div>
    </div>
  </body>
</html>
`
const parser = new htmlParser(htmlstring)
 const parser = new htmlParser(html)
 const json = parser.getHtmlJson()
 console.log('json',json)
```
### 3 结果：

上述json的输出如下：
数组对象模式，有子节点则会有children，
字段介绍：
nodeName：标签名称

style：该标签对应的样式

text：该标签对应的文本
其中的\n可自行处理

![200080e307320355ca82565eac58cdd](https://user-images.githubusercontent.com/41052302/130354531-7e61ba07-9795-42b7-ab76-a9151d56576d.png)

## <span id="english-version"> If you don’t speak Chinese please start from here。</span>
(This project did not introduce any third-party libs, developed based on web api DOMParser(), and built using typescript)

[new DOMParser()](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMParser/DOMParser)

Support es5, es next, typescript operating environment

### 1 install：

please run command :

npm i html-parser-client

### 2 how to use?
### Demo：

```javascript
import htmlParser from 'html-parser-client'
const htmlstring =`
<!DOCTYPE html>
<html>
  <head>
     
    <meta charset="utf-8" />
     
    <title>菜鸟教程(runoob.com)</title>
     
    <style>
      .testContainer {
        background: red;
        height: 500px;
      }
      .container2 {
        line-height: 20px;
      }
      .test2 {
        display: "flex";
      }
    </style>
  </head>
  <body>
    <div id="container" style="width: 500px" class="testContainer container2">
      <div id="header" style="background-color: #ffa500">
        <h1 style="margin-bottom: 0">主要的网页标题</h1>
      </div>

      <div
        id="menu"
        style="
          background-color: #ffd700;
          height: 200px;
          width: 100px;
          float: left;
        "
      >
        <b>菜单</b><br />
        HTML<br />
        CSS<br />
        JavaScript
      </div>

      <div
        id="content"
        style="
          background-color: #eeeeee;
          height: 200px;
          width: 400px;
          float: left;
        "
        class="test2"
      >
        内容在这里
      </div>

      <div
        id="footer"
        style="background-color: #ffa500; clear: both; text-align: center"
      >
        版权 © runoob.com
      </div>
    </div>
  </body>
</html>
`
const parser = new htmlParser(htmlstring)
 const parser = new htmlParser(html)
 const json = parser.getHtmlJson()
 console.log('json',json)
```
### 3 result:


The output of the above json is as follows:
Array object mode, there will be children if there are child nodes,

Field introduction:
nodeName: label name

style: the style corresponding to the label

text: the text corresponding to the label
Among them, \n can be handled by yourself


![200080e307320355ca82565eac58cdd](https://user-images.githubusercontent.com/41052302/130354531-7e61ba07-9795-42b7-ab76-a9151d56576d.png)









