import { mkdirSync, writeFileSync } from "node:fs";

// Two robots share a lift that is nine kilos over its weight limit.
// Neither one will step out, so instead of solving the problem they agree
// to stop breathing loudly — as if that helps — and pin the blame on the
// delivery bot, who is stuck down in the lobby and cannot answer back.
const line = "The weight sensor says we are nine kilos over the limit, and neither of us is getting out, so we will both stop breathing loudly and blame the delivery bot, who is stuck in the lobby.";

mkdirSync("/output", { recursive: true });

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
}

writeFileSync("/output/entry.txt", line, "utf8");
