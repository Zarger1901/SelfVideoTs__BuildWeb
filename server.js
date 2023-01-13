"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const source_map_support_1 = __importDefault(require("source-map-support"));
const standalone_1 = require("@adonisjs/core/build/standalone");
const path_1 = __importDefault(require("path"));
const https_1 = require("https");
const fs_1 = __importDefault(require("fs"));
const options = {
    key: fs_1.default.readFileSync(path_1.default.join(__dirname, './ssl/server.key')),
    cert: fs_1.default.readFileSync(path_1.default.join(__dirname, './ssl/server.crt')),
};
source_map_support_1.default.install({ handleUncaughtExceptions: false });
new standalone_1.Ignitor(__dirname)
    .httpServer()
    .start((handleUncaughtExceptions) => {
    return (0, https_1.createServer)(options, handleUncaughtExceptions);
})
    .catch(console.error);
//# sourceMappingURL=server.js.map