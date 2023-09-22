"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_path_1 = __importDefault(require("node:path"));
const multer_1 = __importDefault(require("multer"));
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const node_http_1 = __importDefault(require("node:http"));
const socket_io_1 = __importDefault(require("socket.io"));
const node_fs_1 = __importDefault(require("node:fs"));
const app = (0, express_1.default)();
const h = node_http_1.default.createServer(app).listen(80, () => {
    console.log(`http://localhost/ listening on port ${80}!`);
});
app.use((0, compression_1.default)({
    level: 9,
    memLevel: 9,
}));
app.use(body_parser_1.default.urlencoded({ extended: true, limit: "1000gb" }));
app.use(body_parser_1.default.json({ limit: "1000gb" }));
h.timeout = 60 * 60 * 1000;
h.keepAliveTimeout = 60 * 60 * 1000;
h.requestTimeout = 60 * 60 * 1000;
app.post("/", (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination: function (req, file, cb) {
            cb(null, __dirname);
        },
        filename: function (req, file, cb) {
            cb(null, `${new Date().toISOString().replace(/:/g, ".")}@${file.originalname}`);
        },
    }),
}).array("file"), function (req, res) {
    res.send();
});
app.get("/", (req, res) => {
    res.sendFile(node_path_1.default.join(__dirname, "upload.html"));
});
app.get("/script.js", (req, res) => {
    res.sendFile(node_path_1.default.join(__dirname, "script.js"));
});
app.use((req, res) => {
    res.statusCode = 403;
    res.send();
});
// WebSocket
const receivedDatas = new Map();
function isArrayOfBuffer(datas) {
    return datas.every((data) => data !== undefined);
}
const ws = new socket_io_1.default.Server(h, {
    maxHttpBufferSize: 1e12,
    connectTimeout: 60 * 60 * 1000,
    pingInterval: 1000,
    pingTimeout: 60 * 60 * 1000,
    upgradeTimeout: 60 * 60 * 1000,
});
ws.sockets.on("connection", (socket) => {
    socket.on("message", (data, fn) => {
        fn("");
        const datas = receivedDatas.get(data.id) ??
            (() => {
                const arr = Array(data.dataLength).fill(undefined);
                receivedDatas.set(data.id, arr);
                return arr;
            })();
        const buffer = (() => {
            const d = Buffer.alloc(data.bodyLength);
            Buffer.from(data.body, "base64").copy(d);
            return d;
        })();
        datas[data.index] = buffer;
        if (isArrayOfBuffer(datas)) {
            // datas is Array<Buffer>
            receivedDatas.delete(data.id);
            let dataLength = 0;
            datas.forEach((data) => (dataLength += data.byteLength));
            const allData = Buffer.alloc(dataLength);
            let nextIndex = 0;
            for (const data of datas) {
                for (const value of data) {
                    allData[nextIndex] = value;
                    nextIndex++;
                }
            }
            node_fs_1.default.writeFileSync(node_path_1.default.join(__dirname, data.id), allData);
            //console.log(allData.toString())
        }
    });
});
