import {Node} from "./Node"

interface ITreeData {
    id: string | number;
    name: string;
    child?: Array<ITreeData>
}

interface ITreeWidget {
    $tree: JQuery;
    nodeList: Array<Node>;

    render(to: HTMLElement): void;

}

export {ITreeWidget, ITreeData};