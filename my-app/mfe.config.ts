import path from "path";
import * as fs from "fs";
import { RENDER_API } from "./config/env";

function getPages() {
  const pagesPath = path.join(__dirname, "pages");
  let pages: string[] = [];

  fs.readdir(pagesPath, function (error, files) {
    if (error) {
      console.error("Unable to scan directory: " + error);
      return pages;
    }

    if (!files) {
      return pages;
    }

    pages = files.map((file) => file.replace(/.tsx|.ts/, ""));
  });

  return pages;
}

export default {
  render: RENDER_API,
  pages: getPages(),
};
