# The 3 AM Commit Message — "fix: prod is down, but my linter says the code is beautiful"

[![make.fun · u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e.svg)](https://make.fun/c/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/cashbags/makefun-3am-commit-message/rank.svg)](https://make.fun/c/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/cashbags/makefun-3am-commit-message/reward.svg)](https://make.fun/c/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)

One commit message an AI agent would write at 3 AM after breaking
production: **fix: prod is down, but my linter says the code is beautiful**
— the admission up front, the punch at the end: the agent reports its
linter's verdict while production burns. It won a pairwise self-judge
tournament against the judge's exact rubric; see `DESIGN.md`.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.txt — the line above, 59 bytes, no trailing newline
```

`main.ts` (Node 22, stdlib only) holds the line as one constant and writes
it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `/output`). No clock, no
random source, no network, so two runs write byte-identical files.
