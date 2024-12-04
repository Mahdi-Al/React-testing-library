import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

// Convert `import.meta.url` to the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve path to `setup.js`
const setupPath = path.resolve(__dirname, "./test/setup.js");

// Output results
console.log("Resolved Path:", setupPath);
console.log("File Exists:", fs.existsSync(setupPath));
