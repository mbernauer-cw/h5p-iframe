import esbuildCopy from "esbuild-plugin-copy";

function generateCopyPlugins(files, dest, watch) {
    return files.map((f) => esbuildCopy({
        assets: {
            from: [f],
            to: [dest]
        },
        watch: watch,
    })
    );
}

export function configure() {
    return {
        entryPoints: ['standalone/index.js'],
        bundle: true,
        mainFields: ["svelte", "browser", "module", "main"],
        conditions: ["svelte", "browser"],
        outdir: "build/standalone",
        logLevel: "info",
        plugins: [
            ...generateCopyPlugins([
                "standalone/index.html",
                "node_modules/h5p-standalone/dist/frame.bundle.js",
                "node_modules/h5p-standalone/dist/styles/h5p.css"
            ], "./", true),
        ]
    }
}

export default {
    configure: configure,
}