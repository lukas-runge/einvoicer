import { XMLBuilder } from "fast-xml-parser";
import { existsSync, mkdirSync, writeFileSync } from "fs-extra";

const data = {
	message: "Hello, World!"
};

const builder = new XMLBuilder();
const xmlContent = builder.build(data);

if (!existsSync("build")) mkdirSync("build");

writeFileSync("build/example.xml", xmlContent, "utf8");
