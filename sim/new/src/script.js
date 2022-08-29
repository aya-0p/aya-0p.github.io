"use strict";
//canvas取得
const canvas = document.getElementById("canvas");
if (!canvas || !(canvas instanceof HTMLCanvasElement))
    throw new Error();
const ctx = canvas.getContext("2d");
if (!ctx)
    throw new Error();
//大きさを画面最大に
canvas.height = document.body.clientHeight;
canvas.width = document.body.clientWidth;
//データを設定
const projectData = new Map();
const settings = {
    zoom: 0.2,
    currentSelectingType: "",
    currentSelectingItem: "",
    showGrid: false,
    isClick: false,
    clickedList: [],
    block: 130
};
//すべてのアイテムをロード
let imageLoadStatus = 0;
const imageItems = (() => {
    const imageItemsOriginal = [
        {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_1",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_2",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_3",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_4",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_5",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_6",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_7",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_8",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_9",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_10",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_11",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_12",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_13",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_14",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_15",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_16",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_17",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_18",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_19",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_20",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_21",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_22",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_23",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_24",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_25",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_26",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_27",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_28",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_29",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_30",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_31",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_grasslands_32",
            category: "biome_grasslands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_1",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_2",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_3",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_4",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_5",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_6",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_7",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_8",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_9",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_10",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_11",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_12",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_13",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_14",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_15",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_16",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_17",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_18",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_19",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_20",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_21",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_22",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_23",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_24",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_25",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_26",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_27",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_28",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_29",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_30",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_31",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_badlands_32",
            category: "biome_badlands",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_1",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_2",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_3",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_4",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_5",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_6",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_7",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_8",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_9",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_10",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_11",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_12",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_13",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_14",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_15",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_16",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_17",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_18",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_19",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_20",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_21",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_22",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_23",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_24",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_25",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_26",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_27",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_28",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_29",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_30",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_31",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_desert_32",
            category: "biome_desert",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_1",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_2",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_3",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_4",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_5",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_6",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_7",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_8",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_9",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_10",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_11",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_12",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_13",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_14",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_15",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_16",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_17",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_18",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_19",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_20",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_21",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_22",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_23",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_24",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_25",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_26",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_27",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_28",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_29",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_30",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_31",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_jungle_32",
            category: "biome_jungle",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_1",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_2",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_3",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_4",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_5",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_6",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_7",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_8",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_9",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_10",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_11",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_12",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_13",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_14",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_15",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_16",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_17",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_18",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_19",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_20",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_21",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_22",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_23",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_24",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_25",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_26",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_27",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_28",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_29",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_30",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_31",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_swamps_32",
            category: "biome_swamps",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_1",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_2",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_3",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_4",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_5",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_6",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_7",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_8",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_9",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_10",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_11",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_12",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_13",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_14",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_15",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_16",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_17",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_18",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_19",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_20",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_21",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_22",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_23",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_24",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_25",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_26",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_27",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_28",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_29",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_30",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_31",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_tundra_32",
            category: "biome_tundra",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_1",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_2",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_3",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_4",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_5",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_6",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_7",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_8",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_9",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_10",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_11",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_12",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_13",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_14",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_15",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_16",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_17",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_18",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_19",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_20",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_21",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_22",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_23",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_24",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_25",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_26",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_27",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_28",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_29",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_30",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_31",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_yellow_prairies_32",
            category: "biome_yellow_prairies",
            layer: 1
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_unknown_1",
            category: "unknown",
            layer: 0
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_unknown_2",
            category: "unknown",
            layer: 0
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_unknown_3",
            category: "unknown",
            layer: 0
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_unknown_4",
            category: "unknown",
            layer: 0
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_unknown_5",
            category: "unknown",
            layer: 0
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_unknown_6",
            category: "unknown",
            layer: 0
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_unknown_7",
            category: "unknown",
            layer: 0
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_unknown_8",
            category: "unknown",
            layer: 0
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_unknown_9",
            category: "unknown",
            layer: 0
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_unknown_10",
            category: "unknown",
            layer: 0
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_unknown_11",
            category: "unknown",
            layer: 0
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_unknown_12",
            category: "unknown",
            layer: 0
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_unknown_13",
            category: "unknown",
            layer: 0
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_unknown_14",
            category: "unknown",
            layer: 0
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_unknown_15",
            category: "unknown",
            layer: 0
        }, {
            width: 220,
            height: 220,
            center: {
                x: 120,
                y: 120
            },
            name: "biome_unknown_16",
            category: "unknown",
            layer: 0
        }, {
            width: 140,
            height: 140,
            center: {
                x: 70,
                y: 70
            },
            name: "door",
            category: "wall",
            layer: 4
        }, {
            width: 142,
            height: 142,
            center: {
                x: 70,
                y: 70
            },
            name: "floor_blue",
            category: "floor",
            layer: 4
        }, {
            width: 142,
            height: 142,
            center: {
                x: 70,
                y: 70
            },
            name: "floor_cray",
            category: "floor",
            layer: 4
        }, {
            width: 142,
            height: 142,
            center: {
                x: 70,
                y: 70
            },
            name: "floor_red",
            category: "floor",
            layer: 4
        }, {
            width: 142,
            height: 142,
            center: {
                x: 70,
                y: 70
            },
            name: "floor_yellow",
            category: "floor",
            layer: 4
        }, {
            width: 142,
            height: 142,
            center: {
                x: 70,
                y: 70
            },
            name: "floor_white",
            category: "floor",
            layer: 4
        }, {
            width: 140,
            height: 140,
            center: {
                x: 70,
                y: 70
            },
            name: "floor_gravel",
            category: "floor",
            layer: 2
        }, {
            width: 140,
            height: 140,
            center: {
                x: 70,
                y: 70
            },
            name: "floor_rock",
            category: "floor",
            layer: 2
        }, {
            width: 140,
            height: 140,
            center: {
                x: 70,
                y: 70
            },
            name: "floor_stone",
            category: "floor",
            layer: 2
        }, {
            width: 140,
            height: 140,
            center: {
                x: 70,
                y: 70
            },
            name: "floor_stone_old_1",
            category: "floor",
            layer: 2
        }, {
            width: 140,
            height: 140,
            center: {
                x: 70,
                y: 70
            },
            name: "floor_stone_old_2",
            category: "floor",
            layer: 2
        }, {
            width: 140,
            height: 140,
            center: {
                x: 70,
                y: 70
            },
            name: "floor_wood",
            category: "floor",
            layer: 2
        }, {
            width: 170,
            height: 160,
            center: {
                x: 100,
                y: 80
            },
            name: "wall_0_blue",
            category: "wall",
            layer: 4
        }, {
            width: 170,
            height: 160,
            center: {
                x: 100,
                y: 75
            },
            name: "wall_0_cray",
            category: "wall",
            layer: 4
        }, {
            width: 170,
            height: 160,
            center: {
                x: 100,
                y: 75
            },
            name: "wall_0_pine",
            category: "wall",
            layer: 4
        }, {
            width: 170,
            height: 160,
            center: {
                x: 100,
                y: 80
            },
            name: "wall_0_red",
            category: "wall",
            layer: 4
        }, {
            width: 170,
            height: 160,
            center: {
                x: 100,
                y: 75
            },
            name: "wall_0_rock",
            category: "wall",
            layer: 4
        }, {
            width: 170,
            height: 160,
            center: {
                x: 100,
                y: 75
            },
            name: "wall_0_white",
            category: "wall",
            layer: 4
        }, {
            width: 170,
            height: 160,
            center: {
                x: 100,
                y: 80
            },
            name: "wall_0_yellow",
            category: "wall",
            layer: 4
        }, {
            width: 160,
            height: 280,
            center: {
                x: 88,
                y: 140
            },
            name: "wall_1_blue",
            category: "wall",
            layer: 4
        }, {
            width: 160,
            height: 280,
            center: {
                x: 88,
                y: 140
            },
            name: "wall_1_red",
            category: "wall",
            layer: 4
        }, {
            width: 160,
            height: 280,
            center: {
                x: 88,
                y: 140
            },
            name: "wall_1_pine",
            category: "wall",
            layer: 4
        }, {
            width: 160,
            height: 280,
            center: {
                x: 88,
                y: 140
            },
            name: "wall_1_cray",
            category: "wall",
            layer: 4
        }, {
            width: 160,
            height: 280,
            center: {
                x: 88,
                y: 140
            },
            name: "wall_1_yellow",
            category: "wall",
            layer: 4
        }, {
            width: 160,
            height: 280,
            center: {
                x: 88,
                y: 140
            },
            name: "wall_1_white",
            category: "wall",
            layer: 4
        }, {
            width: 160,
            height: 280,
            center: {
                x: 88,
                y: 140
            },
            name: "wall_1_rock",
            category: "wall",
            layer: 4
        }
    ];
    const imageItemsMap = new Map();
    imageItemsOriginal.forEach(item => {
        const img = new Image();
        img.src = `./res/${item.name}.png`;
        img.crossOrigin = "anonymous";
        imageItemsMap.set(item.name, {
            width: item.width,
            height: item.height,
            center: item.center,
            img: img,
            name: item.name,
            category: item.category,
            layer: item.layer
        });
        img.addEventListener('load', () => {
            imageLoadStatus++;
            if (imageItemsOriginal.length === imageLoadStatus)
                allLoaded();
        }, false);
    });
    return imageItemsMap;
})();
const allLoaded = () => {
    const data = window.localStorage.getItem("projectData");
    const d = (() => {
        const r = new Map();
        try {
            if (!data)
                return r;
            const t = JSON.parse(JSON.parse(data));
            t.forEach(e => {
                r.set(e.name, e.data);
            });
            return r;
        }
        catch (_) {
            return r;
        }
    })();
    [...Array(Math.ceil(ctx.canvas.height / (settings.block * settings.zoom)))].forEach((_, i) => {
        [...Array(Math.ceil(ctx.canvas.width / (settings.block * settings.zoom)))].forEach((_, j) => {
            const pData = d.get(`${j}_${i}`);
            if (pData) {
                projectData.set(`${j}_${i}`, pData);
            }
            else {
                projectData.set(`${j}_${i}`, {
                    x: j,
                    y: i,
                    layer0: `biome_unknown_${Math.floor(Math.random() * 16) + 1}`
                });
            }
        });
    });
    setInterval(() => {
        draw();
    }, 100);
    setInterval(() => {
        save();
    }, 1000);
};
const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    projectData.forEach(data => {
        if (data.layer1) {
            const drawData = imageItems.get(data.layer1);
            if (drawData)
                ctx.drawImage(drawData.img, ((data.x * settings.block) - drawData.center.x + 64) * settings.zoom, ((data.y * settings.block) - drawData.center.y + 64) * settings.zoom, drawData.width * settings.zoom, drawData.height * settings.zoom);
        }
        else {
            const drawData = imageItems.get(data.layer0);
            if (drawData)
                ctx.drawImage(drawData.img, ((data.x * settings.block) - drawData.center.x + 64) * settings.zoom, ((data.y * settings.block) - drawData.center.y + 64) * settings.zoom, drawData.width * settings.zoom, drawData.height * settings.zoom);
        }
    });
    projectData.forEach(data => {
        if (!data.layer4 && data.layer2) {
            const drawData = imageItems.get(data.layer2);
            if (drawData)
                ctx.drawImage(drawData.img, ((data.x * settings.block) - drawData.center.x + 64) * settings.zoom, ((data.y * settings.block) - drawData.center.y + 64) * settings.zoom, drawData.width * settings.zoom, drawData.height * settings.zoom);
        }
    });
    projectData.forEach(data => {
        if (data.layer3) {
            const drawData = imageItems.get(data.layer3);
            if (drawData)
                ctx.drawImage(drawData.img, ((data.x * settings.block) - drawData.center.x + 64) * settings.zoom, ((data.y * settings.block) - drawData.center.y + 64) * settings.zoom, drawData.width * settings.zoom, drawData.height * settings.zoom);
        }
        else if (data.layer4) {
            const drawData = imageItems.get(data.layer4);
            if (drawData)
                ctx.drawImage(drawData.img, ((data.x * settings.block) - drawData.center.x + 64) * settings.zoom, ((data.y * settings.block) - drawData.center.y + 64) * settings.zoom, drawData.width * settings.zoom, drawData.height * settings.zoom);
        }
    });
    if (settings.showGrid === true) {
        [...Array(Math.floor(ctx.canvas.height / (settings.block * settings.zoom)))].forEach((_, i) => {
            ctx.beginPath();
            ctx.moveTo(0, ((i + 1) * settings.block) * settings.zoom);
            ctx.lineTo(ctx.canvas.width, ((i + 1) * settings.block) * settings.zoom);
            ctx.stroke();
        });
        [...Array(Math.floor(ctx.canvas.width / (settings.block * settings.zoom)))].forEach((_, i) => {
            ctx.beginPath();
            ctx.moveTo(((i + 1) * settings.block) * settings.zoom, 0);
            ctx.lineTo(((i + 1) * settings.block) * settings.zoom, ctx.canvas.height);
            ctx.stroke();
        });
    }
};
const save = () => {
    const saves = [];
    projectData.forEach((d, n) => {
        saves.push({
            name: n,
            data: d
        });
    });
    window.localStorage.setItem("projectData", JSON.stringify(saves));
};
const fillBiome = (biome) => {
    projectData.forEach(data => {
        if (biome)
            data.layer0 = `${biome}_${Math.floor(Math.random() * 32 + 1)}`;
        else
            data.layer0 = `biome_unknown_${Math.floor(Math.random() * 16 + 1)}`;
    });
};
//context menu
window.addEventListener("DOMContentLoaded", () => {
    const menu = [
        {
            name: "グリッドの表示を切り替え",
            callback: () => settings.showGrid = !settings.showGrid,
        }, {
            name: "削除",
            callback: () => settings.currentSelectingType = "delete",
        }, {
            name: "バイオームを変更　　　▶"
        }, {
            name: "--追加--",
            disabled: true
        }, {
            name: "バイオーム　　　　　　▶"
        }, {
            name: "床　　　　　　　　　　▶"
        }, {
            name: "壁　　　　　　　　　　▶"
        }, {
            name: "柱　　　　　　　　　　▶"
        }, {
            name: "リセット",
            callback: () => {
                projectData.forEach(d => {
                    d.layer0 = `biome_unknown_${Math.floor(Math.random() * 16) + 1}`;
                    d.layer1 = undefined;
                    d.layer2 = undefined;
                    d.layer3 = undefined;
                    d.layer4 = undefined;
                });
            }
        }, {
            name: "保存",
            callback: () => {
                const l = document.createElement("a");
                l.download = "image.png";
                l.href = canvas.toDataURL();
                l.click();
            },
        }
    ];
    // var Proto = Proto;
    const CMenu = Proto.Menu;
    //new CMenu({
    const menuObj = new CMenu({
        selector: "canvas",
        className: "menu google",
        menuItems: menu
    });
    const subMenuData = [
        {
            point: 2,
            items: [
                {
                    name: "草原",
                    click: () => fillBiome("biome_grasslands")
                }, {
                    name: "湿地",
                    click: () => fillBiome("biome_swamps")
                }, {
                    name: "牧草地",
                    click: () => fillBiome("biome_yellow_prairies")
                }, {
                    name: "高原(荒野)",
                    click: () => fillBiome("biome_badlands")
                }, {
                    name: "雪原(ツンドラ)",
                    click: () => fillBiome("biome_tundra")
                }, {
                    name: "砂漠",
                    click: () => fillBiome("biome_desert")
                }, {
                    name: "ジャングル",
                    click: () => fillBiome("biome_jungle")
                }, {
                    name: "(リセット)",
                    click: () => fillBiome()
                }
            ]
        }, {
            point: 4,
            items: [
                {
                    name: "草原",
                    click: () => settings.currentSelectingType = "biome_grasslands"
                }, {
                    name: "湿地",
                    click: () => settings.currentSelectingType = "biome_swamps"
                }, {
                    name: "牧草地",
                    click: () => settings.currentSelectingType = "biome_yellow_prairies"
                }, {
                    name: "高原(荒野)",
                    click: () => settings.currentSelectingType = "biome_badlands"
                }, {
                    name: "雪原(ツンドラ)",
                    click: () => settings.currentSelectingType = "biome_tundra"
                }, {
                    name: "砂漠",
                    click: () => settings.currentSelectingType = "biome_desert"
                }, {
                    name: "ジャングル",
                    click: () => settings.currentSelectingType = "biome_jungle"
                }
            ]
        }, {
            point: 5,
            items: [
                {
                    name: "レンガ",
                    click: () => {
                        settings.currentSelectingType = "floor";
                        settings.currentSelectingItem = "floor_cray";
                    }
                }, {
                    name: "レンガ(白)",
                    click: () => {
                        settings.currentSelectingType = "floor";
                        settings.currentSelectingItem = "floor_white";
                    }
                }, {
                    name: "レンガ(赤)",
                    click: () => {
                        settings.currentSelectingType = "floor";
                        settings.currentSelectingItem = "floor_red";
                    }
                }, {
                    name: "レンガ(青)",
                    click: () => {
                        settings.currentSelectingType = "floor";
                        settings.currentSelectingItem = "floor_blue";
                    }
                }, {
                    name: "レンガ(黄)",
                    click: () => {
                        settings.currentSelectingType = "floor";
                        settings.currentSelectingItem = "floor_yellow";
                    }
                }, {
                    name: "岩の床",
                    click: () => {
                        settings.currentSelectingType = "floor";
                        settings.currentSelectingItem = "floor_rock";
                    }
                }, {
                    name: "石の床",
                    click: () => {
                        settings.currentSelectingType = "floor";
                        settings.currentSelectingItem = "floor_stone";
                    }
                }, {
                    name: "砂利の床",
                    click: () => {
                        settings.currentSelectingType = "floor";
                        settings.currentSelectingItem = "floor_gravel";
                    }
                }, {
                    name: "木の板",
                    click: () => {
                        settings.currentSelectingType = "floor";
                        settings.currentSelectingItem = "floor_wood";
                    }
                }, {
                    name: "石の床(旧1)",
                    click: () => {
                        settings.currentSelectingType = "floor";
                        settings.currentSelectingItem = "floor_stone_old_1";
                    }
                }, {
                    name: "石の床(旧2)",
                    click: () => {
                        settings.currentSelectingType = "floor";
                        settings.currentSelectingItem = "floor_stone_old_2";
                    }
                }
            ]
        }, {
            point: 6,
            items: [
                {
                    name: "粘土の壁",
                    click: () => {
                        settings.currentSelectingType = "wall";
                        settings.currentSelectingItem = "wall_0_cray";
                    }
                }, {
                    name: "粘土の壁(白)",
                    click: () => {
                        settings.currentSelectingType = "wall";
                        settings.currentSelectingItem = "wall_0_white";
                    }
                }, {
                    name: "粘土の壁(赤)",
                    click: () => {
                        settings.currentSelectingType = "wall";
                        settings.currentSelectingItem = "wall_0_red";
                    }
                }, {
                    name: "粘土の壁(青)",
                    click: () => {
                        settings.currentSelectingType = "wall";
                        settings.currentSelectingItem = "wall_0_blue";
                    }
                }, {
                    name: "粘土の壁(黄)",
                    click: () => {
                        settings.currentSelectingType = "wall";
                        settings.currentSelectingItem = "wall_0_yellow";
                    }
                }, {
                    name: "岩壁",
                    click: () => {
                        settings.currentSelectingType = "wall";
                        settings.currentSelectingItem = "wall_0_rock";
                    }
                }, {
                    name: "松壁",
                    click: () => {
                        settings.currentSelectingType = "wall";
                        settings.currentSelectingItem = "wall_0_pine";
                    }
                }, {
                    name: "ドア",
                    click: () => {
                        settings.currentSelectingType = "wall";
                        settings.currentSelectingItem = "door";
                    }
                }
            ]
        }, {
            point: 7,
            items: [
                {
                    name: "柱",
                    click: () => {
                        settings.currentSelectingType = "wall";
                        settings.currentSelectingItem = "wall_1_cray";
                    }
                }, {
                    name: "柱(白)",
                    click: () => {
                        settings.currentSelectingType = "wall";
                        settings.currentSelectingItem = "wall_1_white";
                    }
                }, {
                    name: "柱(赤)",
                    click: () => {
                        settings.currentSelectingType = "wall";
                        settings.currentSelectingItem = "wall_1_red";
                    }
                }, {
                    name: "柱(青)",
                    click: () => {
                        settings.currentSelectingType = "wall";
                        settings.currentSelectingItem = "wall_1_blue";
                    }
                }, {
                    name: "柱(黄)",
                    click: () => {
                        settings.currentSelectingType = "wall";
                        settings.currentSelectingItem = "wall_1_yellow";
                    }
                }, {
                    name: "岩の柱",
                    click: () => {
                        settings.currentSelectingType = "wall";
                        settings.currentSelectingItem = "wall_1_rock";
                    }
                }, {
                    name: "松の柱",
                    click: () => {
                        settings.currentSelectingType = "wall";
                        settings.currentSelectingItem = "wall_1_pine";
                    }
                },
            ]
        }
    ];
    subMenuData.forEach(data_ => {
        const subMenu = document.createElement("div");
        subMenu.className += " menu google";
        subMenu.style.top = `${data_.point * 16 - 1}px`;
        subMenu.style.left = "168px";
        const ul = document.createElement("ul");
        data_.items.forEach(data => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.innerHTML = data.name;
            a.onclick = data.click;
            li.appendChild(a);
            ul.appendChild(li);
        });
        subMenu.appendChild(ul);
        const mainList = menuObj.container;
        const c = mainList.childNodes.item(0).childNodes.item(data_.point);
        c.appendChild(subMenu);
        subMenu.hidden = true;
        c.addEventListener("mouseover", () => { subMenu.hidden = false; });
        c.addEventListener("mouseout", () => { subMenu.hidden = true; });
    });
});
const changeData = (x, y) => {
    const clickX = Math.floor(x / (settings.block * settings.zoom));
    const clickY = Math.floor(y / (settings.block * settings.zoom));
    if (settings.clickedList.includes(`${clickX}_${clickY}`))
        return;
    else
        settings.clickedList.push(`${clickX}_${clickY}`);
    const pointData = projectData.get(`${clickX}_${clickY}`);
    if (!pointData)
        return;
    switch (settings.currentSelectingType) {
        case "biome_badlands":
        case "biome_desert":
        case "biome_grasslands":
        case "biome_jungle":
        case "biome_swamps":
        case "biome_tundra":
        case "biome_yellow_prairies":
            pointData.layer1 = `${settings.currentSelectingType}_${Math.floor(Math.random() * 32 + 1)}`;
            break;
        case "delete":
            if (pointData.layer4)
                pointData.layer4 = undefined;
            else if (pointData.layer3)
                pointData.layer3 = undefined;
            else if (pointData.layer2)
                pointData.layer2 = undefined;
            else if (pointData.layer1)
                pointData.layer1 = undefined;
            break;
        case "wall":
            pointData.layer4 = settings.currentSelectingItem;
            break;
        case "floor":
            pointData.layer2 = settings.currentSelectingItem;
            break;
        default:
            break;
    }
};
document.getElementById('canvas')?.addEventListener("mousedown", (event) => {
    if (event.button === 0) {
        changeData(event.x, event.y);
        settings.isClick = true;
    }
});
document.getElementById('canvas')?.addEventListener("mouseup", (event) => {
    if (event.button === 0) {
        changeData(event.x, event.y);
        settings.isClick = false;
        settings.clickedList = [];
    }
});
document.getElementById('canvas')?.addEventListener("mousemove", (event) => {
    if (event.button === 0) {
        if (settings.isClick)
            changeData(event.x, event.y);
    }
});
