#!/usr/bin/env node
import { execSync } from "child_process";
import fs from "fs-extra";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const projectName = process.argv[2] || "my-app";
const targetDir = path.join(process.cwd(), projectName);

function runCommand(command, cwd) {
  try {
    execSync(command, { cwd, stdio: "inherit" });
  } catch (err) {
    console.error(`❌ Failed to execute: ${command}`);
    process.exit(1);
  }
}

(async () => {
  console.log(`\n🚀 Creating a new React project: \x1b[36m${projectName}\x1b[0m\n`);

  try {
      fs.copySync(path.join(__dirname, "../template"), targetDir);
  } catch (err) {
      console.error("❌ Error copying template files:", err.message);
      process.exit(1);
  }

  console.log("📦 Installing dependencies...\n");
  runCommand("npm install", targetDir);

  console.log(`\n✅ Project setup complete!\n`);
  console.log("👉 Next steps:");
  console.log(`   cd ${projectName}`);
  console.log("   npm run dev\n");
  console.log("🎉 Happy coding with React Smart Starter!\n");
})();
