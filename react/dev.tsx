import * as path from "path";
import { statSync } from "fs";
import { withHtmlLiveReload } from "bun-html-live-reload";

const PROJECT_ROOT = import.meta.dir;
const PUBLIC_DIR = path.resolve(PROJECT_ROOT, "public");
const BUILD_DIR = path.resolve(PROJECT_ROOT, "build");
const SRC_DIR = path.resolve(PROJECT_ROOT, "src");

function serveFromDir(config: {
  directory: string;
  path: string;
}): Response | null {
  let basePath = path.join(config.directory, config.path);
  const suffixes = ["", ".html", "index.html"];

  for (const suffix of suffixes) {
    try {
      const pathWithSuffix = path.join(basePath, suffix);
      const stat = statSync(pathWithSuffix);
      if (stat && stat.isFile()) {
        return new Response(Bun.file(pathWithSuffix));
      }
    } catch (err) {}
  }

  return null;
}

export default withHtmlLiveReload(
  {
    fetch(request) {
      let reqPath = new URL(request.url).pathname;
      console.log(request.method, reqPath);
      if (reqPath === "/") reqPath = "/index.html";

      // check public
      const publicResponse = serveFromDir({
        directory: PUBLIC_DIR,
        path: reqPath,
      });
      if (publicResponse) return publicResponse;

      // check /.build
      const buildResponse = serveFromDir({
        directory: BUILD_DIR,
        path: reqPath,
      });
      if (buildResponse) return buildResponse;

      return new Response("File not found", {
        status: 404,
      });
    },
  },
  {
    buildConfig: {
      entrypoints: ["./src/index.tsx"],
      outdir: "./build",
    },
    watchPath: SRC_DIR,
  }
);
