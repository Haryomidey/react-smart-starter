#!/usr/bin/env node
import { execSync } from "child_process";
import fs from "fs-extra";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const projectName = process.argv[2] || "my-app";
const targetDir = path.join(process.cwd(), projectName);

console.log(`🚀 Creating project: ${projectName}...`);

fs.copySync(path.join(__dirname, "../template"), targetDir);
execSync("npm install", { cwd: targetDir, stdio: "inherit" });

console.log(`✅ Done! Now run:
  cd ${projectName}
  npm run dev
`);
