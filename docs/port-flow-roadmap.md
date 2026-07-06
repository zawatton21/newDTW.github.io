# Original game flow — port coverage roadmap

Source: the project owner's description of the original game's flow
(2026-07-06), cross-referenced with the function catalog.  This is the
authoritative checklist for "the opening and meta flow feel like the
real game".

## The real flow

1. **Load screen** at boot (before the title) — currently MISSING in
   the port's opening driver.  Candidate: func139A (load screen; the
   catalog names it the load-screen func; our boot no-ops or
   fast-forwards it).
2. **Title screen** (works).
3. Selecting 冒険に出る with NO save data plays an **opening story
   event sequence** — currently missing (we jump straight to the
   login/roster).
4. After the opening events the player moves to the **Venice hotel**
   hub (func162 = ヴェネチアホテル読込処理, called from func015.ts:65),
   where further **event processing** runs — currently missing; the
   port boots directly into the dungeon.
5. Dungeon runs (works: movement, collision, animation, combat).
6. On **death**, the original runs a **ranking flow** (score entry /
   leaderboard) — currently missing; the port's death path (func672
   chain) needs the ranking step located in the catalog and wired.
7. After the ranking flow the player is **returned to the Venice
   hotel** hub (not the title): death is a loop back into the hub, so
   the hotel (step 4) is load-bearing for the whole meta cycle.

## Status snapshot (2026-07-06, master 91e117d5)

- Working: title, login roster, new-game edge detection, dungeon entry,
  movement + collision, idle/water animation, combat damage, direct
  keyboard input, Japanese text, lossless frame pipeline.
- In flight: enemy turns (increment M), frame-rate work (serialization
  halved, more needed).
- This roadmap: load screen -> opening events -> Venice hotel hub ->
  ranking-on-death, in that order after M lands.
