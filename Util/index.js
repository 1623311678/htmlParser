"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTextValue = exports.getTagStyleString = exports.getFormatHtmlString = void 0;
function getFormatHtmlString(htmlStr, obj) {
    //只取body里的内容。去除<br>
    var styleObj = obj;
    var styleStr = getStyleStr(htmlStr);
    if (styleStr) {
        getClassStyleObj(styleStr, styleObj);
    }
    var htmlStirng = htmlStr;
    var startBodyIndex = htmlStirng.indexOf("<body>");
    var endBodyIndex = htmlStirng.indexOf("</body>");
    if (startBodyIndex !== -1 && endBodyIndex !== -1) {
        htmlStirng = htmlStr.slice(startBodyIndex + 6, endBodyIndex);
    }
    var parser = new DOMParser();
    var doc = parser.parseFromString(htmlStirng.replace(/<br>/g, ""), "text/html");
    var bodyDomObject = doc.children[0].children[1];
    return bodyDomObject;
}
exports.getFormatHtmlString = getFormatHtmlString;
function getClassStyleObj(styleStr, styleObj) {
    var startIndex = styleStr.indexOf("{");
    var endIndex = styleStr.indexOf("}");
    styleObj[styleStr.slice(0, startIndex)] = styleStr.slice(startIndex + 1, endIndex);
    var restStr = styleStr.slice(endIndex + 1);
    if (restStr.indexOf("{") !== -1 && restStr.indexOf("}") !== -1) {
        getClassStyleObj(restStr, styleObj);
    }
}
function getStyleStr(htmlStr) {
    var styleStr = null;
    var startStyleIndex = htmlStr.indexOf("<style>");
    var endStyleIndex = htmlStr.indexOf("</style>");
    if (startStyleIndex !== -1 && endStyleIndex !== -1) {
        styleStr = htmlStr.slice(startStyleIndex + 7, endStyleIndex);
        styleStr = styleStr
            .replace(/\n/g, "")
            .replace(/' '/g, "")
            .replace(/\./g, "")
            .replace(/\s+/g, "");
    }
    return styleStr;
}
function getTagStyleString(children, styleObj) {
    var classList = children.classList; //先获取classlist里的样式
    var str = null;
    for (var j = 0; j < classList.length; j += 1) {
        var className = classList[j];
        if (!str) {
            str = "";
        }
        str += styleObj[className];
    }
    if (children.attributes &&
        children.attributes[1] &&
        children.attributes[1].nodeValue) {
        if (!str) {
            str = "";
        }
        str += children.attributes[1].nodeValue;
    }
    if (str && str.indexOf(";") === -1) {
        str += ";";
    }
    return str;
}
exports.getTagStyleString = getTagStyleString;
function getTextValue(children) {
    var text = null;
    if (children.firstChild && children.firstChild.nodeValue) {
        if (!text) {
            text = "";
        }
        text += children.firstChild.nodeValue;
    }
    if (children.lastChild &&
        children.lastChild.nodeValue &&
        children.lastChild.nodeValue !== text) {
        if (!text) {
            text = "";
        }
        text += children.lastChild.nodeValue;
    }
    return text;
}
exports.getTextValue = getTextValue;
