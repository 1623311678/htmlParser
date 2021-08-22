interface outputJson {
    children?: outputJson[];
    text?: string;
    nodeName?: string;
    style?: string;
}
declare class htmlParser {
    private json;
    private styleObj;
    private originHtmlString;
    constructor(htmlstring: string);
    private getChildrenJson;
    private parserHtml;
    getHtmlJson(): outputJson[];
}
export default htmlParser;
