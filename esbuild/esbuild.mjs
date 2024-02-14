import esbuild from "esbuild";
import Package from "./package.mjs";
import Standalone from "./standalone.mjs";

let config = Package.configure();

function build(conf) {
  esbuild.build(conf).catch(() => process.exit(1));
}

async function watch(conf) {
  let ctx = await esbuild.context(conf);
  await ctx.watch();
}

let standalone_config = Standalone.configure();
let package_config = Package.configure();

console.log(process.argv)
if (process.argv[2] == "build") {
  build(package_config);
  build(standalone_config);
} else if (process.argv[2] == "watch") {
  await watch(package_config);
  await watch(standalone_config)
  console.log("Started watchdogs");
} else {
  console.log("Unknown command")
}