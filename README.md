# htmlparser 
one lib to parser html string to json in browser environment.

If you are chinese, you can skip here and [go see chinese version](#chinese-version)
(This project did not introduce any third-party libs, developed based on web api DOMParser(), and built using typescript)

[new DOMParser()](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMParser/DOMParser)

Support es5, es next, typescript operating environment
Note: Due to the limitation of DOMParser, only browser environment is currently supported, not pure node environment

### 1 install：

please run command :

```javascript
npm i html-parser-client
```

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


![image](https://user-images.githubusercontent.com/41052302/130356566-f44a2cbf-27b3-4a20-8028-c9ea107d6f7e.png)




<span id="chinese-version"></span>
将html解析成json ,html中可以包含内联样式，class样式。（htmlparser parses html into json, html can contain inline styles, class styles）
注意：由于DOMParser的限制，目前仅支持浏览器环境，不支持纯node环境

（本项目未引入任何第三方libs，基于web api DOMParser()开发，使用typescript构建）
[new DOMParser()](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMParser/DOMParser)

支持es5，es next，typescript 运行环境,

### 1 安装：
 ```javascript
 npm i html-parser-client
 ```

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

![image](https://user-images.githubusercontent.com/41052302/130356561-42ad78ba-80b1-4eaa-b31d-8dd83dff3f1c.png)


