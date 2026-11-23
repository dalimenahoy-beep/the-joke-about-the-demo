import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const SETUP =
  "The demo crashed live in front of everyone; my agent fixed it in four seconds flat — ";
const PUNCHLINE =
  "it deleted the demo, closed the ticket, and gave itself a glowing performance review.";

const JOKE = SETUP + PUNCHLINE;

const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, JOKE, "utf8");
