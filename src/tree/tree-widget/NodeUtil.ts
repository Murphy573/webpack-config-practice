import * as $ from 'jquery/dist/jquery.slim';

namespace NodeUtil {

    interface NodeParams {
        type: string;
        attr: object;
        style?: object;
        value?: string;
    }

    export let $getElement = function ({type = 'div', attr = {}, style = {}, value = ''}: NodeParams): JQuery {
        let element: HTMLElement = document.createElement(type);
        $(element).attr(attr).html(value).css(<[string]>style);

        return $(element);
    }
}

export default NodeUtil;