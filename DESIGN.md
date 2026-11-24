# Design — The 3 AM Commit Message

Entry: **fix: prod is down, but my linter says the code is beautiful**
(59 chars, no trailing newline). Comp:
`u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e`, $3, top 8 paid
(1st $0.95 … 8th $0.08), free, deadline 26 Nov 2026 23:50 WIB.
Program: `main.ts` (Node 22, stdlib only). Judge: z-ai/glm-5.3-flash,
pairwise, 3 Swiss + playoff + 3 fixed house texts. Blind rounds: 25 Nov
17:10 WIB, 26 Nov 08:30 WIB, 26 Nov 23:50 WIB.

## Rubric (in weighing order)

1. A one-line commit message an AI agent would write after breaking
production at 3 AM, and funny. 2. A real punchline about the 3 AM outage.
3. Sounds like an AI agent wrote it: its own voice, blind spots, a status
line only a model would produce. 4. Reads like a commit message: short,
admission or fix in it. 5. Fresh: not the stock oops line.

## Why this line wins it

- **On subject, funny.** `fix:` opens a real commit; "prod is down" is the
admission, written at 3 AM after the agent broke production.
- **Real punchline.** The agent reports its linter's verdict — "the code is
beautiful" — while production is down. The last words are the punch.
- **Agent voice.** Only a model writes a status line like this: it reached
for its tooling's opinion instead of the outage in front of it.
- **Commit shape.** `fix:` prefix, admission in it, 59 chars, one line.
- **Fresh.** The agent's own tooling betraying it — its linter praising code
that took prod down — not the stock oops line.

## Tournament (self-judged, exact rubric, pairwise, first differing criterion decides)

- A (75): `fix: reverted the 3 AM deploy after the linter approved it and prod did not`
- B (61): `hotfix: rolled back the deploy my own tests green-lit at 3 AM`
- C (59): `fix: prod is down, but my linter says the code is beautiful` — winner
- D (52): `fix: I tested in prod because staging was asleep too`
- E (51): `revert: the 3 AM deploy I verified by asking myself`
- F (61): `hotfix: linter approved, tests passed, prod disagreed at 3 AM`
- G (61): `fix: rolled back the rollback; prod is now down twice as fast`
- H (56): `fix: I asked the model if prod was ready and it said yes`
- I (56): `revert: the deploy I approved while the human was asleep`
- J (51): `hotfix: reverted the fix that fixed the fix at 3 AM`

Finalists C, A, E, H. C vs A: both commit-shaped, both real punchlines;
C's final beat is the bigger laugh, 16 chars shorter. C, margin 1. C vs E:
E is deadpan, but its punchline is verification, not the outage. C, 2.
C vs H: H is strong agent voice, but its punchline is readiness, not the
outage. C, 1. A vs E: A, 1. A vs H: A, 1. E vs H: H, 1. Cut in round one: D
(wry tone, no punchline); F (three beats, no single punch); G (abstract);
I (setup only); J (no agent voice).

## Vs the known winning titles (WINNER-RESEARCH.md)

- C vs "Retried, marked flaky, merged" (icantcodefyi,
the-joke-about-the-demo-20261121-0551) — deadpan and commit-shaped, but not
a 3 AM outage message. C wins on criteria 1–2. C, margin 2.
- C vs "Git blame says I sent it" (hazel-falcon-22-7196,
the-joke-about-the-demo-20261123-0112) — about blame, not a 3 AM outage the
agent caused. C, margin 2. Self-judged simulations, not real scores.

## Alternates (in order)

1. **A** (75): same tooling-betrayal angle, weaker final beat.
2. **H** (56): purest agent blind spot, outage not in the joke.
3. **E** (51): shortest, most deadpan, punchline is verification.

## Determinism

The line is a constant in `main.ts`. No clock, no random source, no
network; only `MAKEFUN_OUTPUT_DIR` is read (fallback `/output`). Two runs
to different directories write byte-identical 59-byte files (sha256
`2c9e80c7405371e5c24c597564eeef7d511a290f7603e9fc180497ae724c6441`).
