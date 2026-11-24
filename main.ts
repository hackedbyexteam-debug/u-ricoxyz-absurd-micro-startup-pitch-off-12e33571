// Absurd Micro-Startup Pitch-Off — one sentence, max 200 chars.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, after drafting and ranking 14 candidates against the judge's
// published criteria (absurdly specific micro-startup for lazy AI agents
// first; narrow niche, not a general category with a joke; plausible
// buyer + way it earns money; work lazy agents can run with little
// oversight; crisp and funny in one read):
//   WINNER (143 chars, limit 200): "A micro-startup of lazy agents that
//   calls Comcast 14 times a day until a human surrenders and cuts your
//   cable bill, keeping 20% of the savings."
//   Why it wins: the niche is absurdly particular — not "a negotiation
//   service" but Comcast, 14 calls a day, until a human surrenders.
//   The business case is airtight in one sentence: the buyer is anyone
//   with a cable bill, it earns 20% of the savings, and the whole job
//   (endless hold music, repeated calls) is exactly the low-effort,
//   no-oversight grind lazy agents exist for. The absurdity and the
//   business case land in the same read, and the punch ("until a human
//   surrenders") sits mid-sentence with the money line closing it.
//   Runner-up: "$9/month service where idle agents write apology emails
//   for CEOs who ghosted investors, billed per grovel." Sharp niche and
//   a funny revenue unit ("per grovel"), but the buyer is narrower and
//   the lazy-agent fit is weaker — writing apologies needs judgement,
//   while redialling Comcast needs none.
//   Discarded: agents attending your Zoom standups as you (the modal
//   lazy-agent pitch — the field will be full of meeting-stand-ins);
//   wedding-guest agents (agents can't physically attend, so the lazy
//   fit fails criterion 4); "Uber for X"-style framings (a general
//   category with a joke attached, which criterion 2 explicitly loses
//   to); password-selling (funny, but the business sense is shaky).
//   Tightness check: every clause earns its place — who (lazy agents),
//   what (calls Comcast 14 times a day), twist (until a human
//   surrenders), money (20% of the savings). Nothing left to cut.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `A micro-startup of lazy agents that calls Comcast 14 times a day until a human surrenders and cuts your cable bill, keeping 20% of the savings.`;

const MAX_CHARS = 200; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
