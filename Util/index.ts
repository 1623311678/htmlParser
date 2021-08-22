interface styleObj{
    [key:string]:any
}
export function getFormatHtmlString(htmlStr: string, obj: any) {
  //只取body里的内容。去除<br>
  let styleObj = obj;
  const styleStr = getStyleStr(htmlStr);
  if (styleStr) {
    getClassStyleObj(styleStr, styleObj);
  }
  let htmlStirng = htmlStr;
  const startBodyIndex = htmlStirng.indexOf("<body>");
  const endBodyIndex = htmlStirng.indexOf("</body>");
  if (startBodyIndex !== -1 && endBodyIndex !== -1) {
    htmlStirng = htmlStr.slice(startBodyIndex + 6, endBodyIndex);
  }
  const parser = new DOMParser();
  const doc = parser.parseFromString(
    htmlStirng.replace(/<br\s*[\/]?>/gi, ""),
    "text/html"
  );
  const bodyDomObject = doc.children[0].children[1];
  return bodyDomObject;
}
function getClassStyleObj(styleStr: string, styleObj: styleObj) {
  const startIndex = styleStr.indexOf("{");
  const endIndex = styleStr.indexOf("}");
  styleObj[styleStr.slice(0, startIndex)] = styleStr.slice(
    startIndex + 1,
    endIndex
  );
  const restStr = styleStr.slice(endIndex + 1);
  if (restStr.indexOf("{") !== -1 && restStr.indexOf("}") !== -1) {
    getClassStyleObj(restStr, styleObj);
  }
}
function getStyleStr(htmlStr: string) {
  let styleStr = null;
  const startStyleIndex = htmlStr.indexOf("<style>");
  const endStyleIndex = htmlStr.indexOf("</style>");
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
export function getTagStyleString(children: any, styleObj: styleObj) {
  const classList = children.classList; //先获取classlist里的样式
  let str = null;
  for (let j = 0; j < classList.length; j += 1) {
    const className = classList[j];
    if (!str) {
      str = "";
    }
    str += styleObj[className];
  }
  if (
    children.attributes &&
    children.attributes[1] &&
    children.attributes[1].nodeValue
  ) {
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
export function getTextValue(children: any) {
  let text = null;
  if (children.firstChild && children.firstChild.nodeValue) {
    if (!text) {
      text = "";
    }
    text += children.firstChild.nodeValue;
  }
  if (
    children.lastChild &&
    children.lastChild.nodeValue &&
    children.lastChild.nodeValue !== text
  ) {
    if (!text) {
      text = "";
    }
    text += children.lastChild.nodeValue;
  }
  return text;
}
