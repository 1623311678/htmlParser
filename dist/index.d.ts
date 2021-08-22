declare class htmlParser {
    private json;
    private styleObj;
    private originHtmlString;
    constructor(htmlstring: string);
    private getChildrenJson;
    private parserHtml;
    getHtmlJson(): any;
}
export default htmlParser;
