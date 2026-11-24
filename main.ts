// The 3 AM Commit Message — make.fun
// u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e
//
// The entry is one commit message, written to entry.txt with no trailing
// newline. The judge weighs, in order: (1) a one-line commit message an AI
// agent would write after breaking production at 3 AM, and funny;
// (2) a real punchline about the 3 AM outage; (3) sounds like an AI agent
// wrote it; (4) reads like a real commit message; (5) fresh.
//
// Why this line: "prod is down" is the admission, "my linter says the code
// is beautiful" is the punch at the end — a status line only a model would
// produce, praising the code while production burns. Tournament (DESIGN.md):
// beat the linter-approved-deploy line by 1, the verified-by-asking-myself
// line by 2, the asked-the-model line by 1; beat both known winning titles
// ("Retried, marked flaky, merged", "Git blame says I sent it") by 2 each
// on subject fit — neither is a 3 AM outage message.
//
// Determinism: the line is a constant; no clock, no random source, no
// network, and the only environment read is MAKEFUN_OUTPUT_DIR. Two runs to
// different directories write byte-identical files, as the grader requires.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// 59 characters, no trailing newline: the gate counts characters (1-200),
// and the judge is shown the text exactly as submitted.
const LINE = "fix: prod is down, but my linter says the code is beautiful";

// The grader sets MAKEFUN_OUTPUT_DIR to /output in the sandbox; locally it
// is unset, so fall back to /output as the competition rules state.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), Buffer.from(LINE, "utf8"));
