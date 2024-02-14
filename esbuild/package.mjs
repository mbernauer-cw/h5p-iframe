import esbuild from "esbuild";
import sveltePlugin from "esbuild-svelte";
import sveltePreprocess from "svelte-preprocess";
import { sassPlugin } from 'esbuild-sass-plugin'
import esbuildCopy from "esbuild-plugin-copy";

export function configure() {
    return {
      entryPoints: ["src/app.js"],
      mainFields: ["svelte", "browser", "module", "main"],
      conditions: ["svelte", "browser"],
      bundle: true,
      outdir: "build/package/H5P.CadSweeper",
      plugins: [
        // Copy folder structure
        esbuildCopy({
          assets: [{
            from: ["package_template/**/*"],
            to: ["../"]
          }],
          watch: true,
        }),

        // Svelte
        sveltePlugin({
          preprocess: sveltePreprocess(),
          compilerOptions: {
            dev: true,
          }
        }),

        // CSS
        sassPlugin(),

        // Copy resources
        esbuildCopy({
          copyOnStart: true,
          assets: {
            from: ["res/**/*"],
            to: ["./"]
          },
          watch: true,
        }),
      ],
      loader: {
        '.woff': 'file',
        '.woff2': 'file',
      },
      logLevel: "info",
    };
};

export default {
    configure: configure,
};