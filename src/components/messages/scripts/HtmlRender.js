export class HTMLRender {
    static render(options) {
        let {tags, className = [], text, title,value,title2,value2,title3,value3,title4,value4} = options;
        let elem = document.createElement(tags);
        elem.classList.add(...className);
        elem.textContent = text;
        elem.setAttribute(title,value);
        elem.setAttribute(title2,value2);
        elem.setAttribute(title3,value3);
        elem.setAttribute(title4,value4);
        return elem;
    }
}
