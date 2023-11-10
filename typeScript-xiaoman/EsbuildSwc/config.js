"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var esbuild_1 = require("esbuild");
var node_fs_1 = require("node:fs");
await esbuild_1.default.build({
    entryPoints: ['./index.ts'],
    treeShaking: true,
    bundle: true,
    loader: {
        '.js': "js",
        '.ts': "ts",
        '.jsx': "jsx",
        '.tsx': "tsx"
    },
    plugins: [
        {
            name: "swc-loader",
            setup: function (build) {
                build.onLoad({ filter: /\.(js|ts|jsx|tsx)$/ }, function (args) {
                    var content = node_fs_1.default.readFileSync(args.path, 'utf-8');
                    console.log(content);
                    return {
                        contents: ""
                    };
                });
            }
        }
    ]
});
