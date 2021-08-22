import { getFormatHtmlString, getTagStyleString, getTextValue } from "./Util";
class htmlParser {
  private json:any = [];
  private styleObj = {};
  private originHtmlString: string = '';
  constructor(htmlstring: string) {
    this.originHtmlString = htmlstring;
  }
  private getChildrenJson(contentChildren:any, target:any) {
    if (contentChildren && contentChildren.length > 0) {
      for (let i = 0; i < contentChildren.length; i += 1) {
        target[i] = {};
        target[i].nodeName = contentChildren[i].nodeName;
        const value = getTextValue(contentChildren[i]);
        const style = getTagStyleString(contentChildren[i], this.styleObj);
        if (value) {
          //获取内容
          target[i].text = value;
        }
        if (style) {
          //获取样式，包含class在内的
          target[i].style = style;
        }
        if (
          contentChildren[i]["children"] &&
          contentChildren[i]["children"].length > 0
        ) {
          target[i]["children"] = [];
          const children = target[i]["children"];
          this.getChildrenJson(contentChildren[i]["children"], children);
        }
      }
    }
  }
  private parserHtml(docObj:any, target:any) {
    //将body解析成json，dom，style
    const contentChildren = docObj.children;
    this.getChildrenJson(contentChildren, target);
  }
  public getHtmlJson() {
    const bodyDomObject = getFormatHtmlString(
      this.originHtmlString,
      this.styleObj
    );
    this.parserHtml(bodyDomObject, this.json);
    return this.json;
  }
}
export default htmlParser;
