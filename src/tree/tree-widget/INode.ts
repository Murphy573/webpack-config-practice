
export interface INode {
    id: string | number;
    name: string;
    level: number;
    parentId: string | number;
    $node?: JQuery;
}