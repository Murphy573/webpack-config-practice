import {ITreeWidget, ITreeData} from './ITreeWidget';
import NodeUtil from './NodeUtil';
import {INode} from "./INode";
import {Node} from './Node';
import * as $ from 'jquery/dist/jquery.slim';

class TreeWidget implements ITreeWidget {
    $tree;
    nodeList;

    constructor(dataList: ITreeData[], customConfig?) {
        let rootId: string = 'root',
            rootLevel: number = 1;

        let defaultConfig = {
            renderTo: document.body
        };

        let config = $.extend(true, {}, defaultConfig, customConfig);

        this.$tree = NodeUtil.$getElement({
            type: 'div',
            attr: {"id": rootId}
        });


        this.nodeList = new Array();

        this.render(config.renderTo);

        this.createNode(dataList, rootId, rootLevel);
    };

    public render(renderTo): void {
        this.$tree.appendTo(renderTo);
    }

    private createNode(dataList: ITreeData[], id: string | number, level: number) {
        dataList.forEach((data) => {
            if (id === 'root') {
                level = 1;
            }

            this.addNode({
                id: data.id,
                parentId: id,
                name: data.name,
                level: level
            });

            if (data.child && data.child.length > 0) {
                level++;
                this.createNode(data.child, data.id, level);
            }
        })
    }

    private addNode(node: INode): void {

        let n: Node = new Node(node);

        n.render(node.parentId);

        this.nodeList.push(n);
    }
}

export {TreeWidget};