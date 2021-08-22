interface styleObj {
    [key: string]: any;
}
export declare function getFormatHtmlString(htmlStr: string, obj: any): Element;
export declare function getTagStyleString(children: any, styleObj: styleObj): string | null;
export declare function getTextValue(children: any): string | null;
export {};
