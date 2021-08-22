"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = require("./Util");
var htmlParser = /** @class */ (function () {
    function htmlParser(htmlstring) {
        this.json = [];
        this.styleObj = {};
        this.originHtmlString = '';
        this.originHtmlString = htmlstring;
    }
    htmlParser.prototype.getChildrenJson = function (contentChildren, target) {
        if (contentChildren && contentChildren.length > 0) {
            for (var i = 0; i < contentChildren.length; i += 1) {
                target[i] = {};
                target[i].nodeName = contentChildren[i].nodeName;
                var value = Util_1.getTextValue(contentChildren[i]);
                var style = Util_1.getTagStyleString(contentChildren[i], this.styleObj);
                if (value) {
                    //获取内容
                    target[i].text = value;
                }
                if (style) {
                    //获取样式，包含class在内的
                    target[i].style = style;
                }
                if (contentChildren[i]["children"] &&
                    contentChildren[i]["children"].length > 0) {
                    target[i]["children"] = [];
                    var children = target[i]["children"];
                    this.getChildrenJson(contentChildren[i]["children"], children);
                }
            }
        }
    };
    htmlParser.prototype.parserHtml = function (docObj, target) {
        //将body解析成json，dom，style
        var contentChildren = docObj.children;
        this.getChildrenJson(contentChildren, target);
    };
    htmlParser.prototype.getHtmlJson = function () {
        var bodyDomObject = Util_1.getFormatHtmlString(this.originHtmlString, this.styleObj);
        this.parserHtml(bodyDomObject, this.json);
        return this.json;
    };
    return htmlParser;
}());
exports.default = htmlParser;
