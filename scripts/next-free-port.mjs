// Runs `next <command>` on the first free port starting at $PORT (default 3000).
import { createServer } from "node:net";
import { spawn } from "node:child_process";

const [command = "dev", ...rest] = process.argv.slice(2);
const start = Number(process.env.PORT) || 3000;

const isFree = (port) =>
  new Promise((resolve) => {
    const server = createServer()
      .once("error", () => resolve(false))
      .once("listening", () => server.close(() => resolve(true)))
      .listen(port);
  });

let port = start;
while (!(await isFree(port))) port++;
if (port !== start) console.log(`Port ${start} is in use, using ${port} instead.`);

const child = spawn("next", [command, "-p", String(port), ...rest], {
  stdio: "inherit",
  shell: process.platform === "win32",
});
child.on("exit", (code) => process.exit(code ?? 0));
