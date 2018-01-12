import NodeUtil from './NodeUtil';
import {INode} from "./INode";

class Node {
    id: number | string;
    name: string;
    level: number;
    parentId: number | string;
    $node: JQuery;
    static paddingLeft = 20;

    constructor(node: INode) {
        this.id = node.id;
        this.name = node.name;
        this.level = node.level;
        this.parentId = node.parentId;
        this.$node = NodeUtil.$getElement({
            type: 'div',
            attr: {"id": this.id, "parent-id": this.parentId, "level": this.level},
            style: {'paddingLeft': Node.paddingLeft},
            value: this.name
        });
    }

    render(parentId: string | number): void {
        this.$node.appendTo('#' + parentId);
    }
}

export {Node};