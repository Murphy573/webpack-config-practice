import {ITreeData} from "./tree-widget/ITreeWidget";
import {TreeWidget} from "./tree-widget/TreeWidget";

const mockDataList: ITreeData[] = [
    {
        id: "1",
        "name": "1",
        "child": [
            {
                "id": "1-1",
                "name": "1-1"
            },
            {
                "id": "1-2",
                "name": "1-2",
                "child": [
                    {
                        "id": "1-2-1",
                        "name": "1-2-1"
                    }
                ]
            }
        ]
    },
    {
        "id": "2",
        "name": "2",
        "child": [
            {
                "id": "2-1",
                "name": "2-1"
            },
            {
                "id": "2-2",
                "name": "2-2"
            }
        ]
    }
];

let tree = new TreeWidget(mockDataList);