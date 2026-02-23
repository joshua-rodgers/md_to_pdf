# Chapter 11: Math Blocks II — Counting for the Youngest Learners

---

## Game Snapshot

| | |
|---|---|
| **Type** | Virtual manipulative with counting foundation |
| **Target grades** | Pre-K–Grade 3 (Kindergarten focus for emoji counting mode) |
| **Core math objective** | Counting, place value, addition and subtraction with regrouping |
| **Domain** | Counting and cardinality; number and operations in base ten |
| **Modes** | Counting (emoji) / Base-10 Count / Build Number / Addition / Subtraction |

---

## How It Works: Mechanics Analysis

Math Blocks II is structurally similar to Math Blocks but with an important extension at the bottom of the difficulty spectrum: an emoji-based counting mode that targets the earliest stage of number sense development. The five modes progress from foundational (counting) through operational (addition and subtraction), and the visual design explicitly models base-ten place value in four colour-coded columns throughout.

The **Counting mode** displays a random set of emoji items and asks the player to count them and enter the result. It functions as a number-sense baseline, connecting cardinality (the counting process) to its symbolic representation.

The **Base-10 Count mode** displays pre-built block configurations in place value columns and asks the learner to count their total value. Unlike the Counting mode, which counts individual items, this mode requires the learner to apply the place value weighting — one blue block in the hundreds column is worth one hundred ones.

The **Build Number mode** asks the learner to construct a target number by adding blocks to the place value columns. This is the same task as Math Blocks' Construction mode.

**Addition** and **Subtraction** modes present the learner with problems that, at higher levels, frequently (approximately 60% of the time) require regrouping — a design choice that ensures the game does not reinforce the misconception that regrouping is exceptional rather than routine.

The four place value columns use distinct, consistent colour-coding: Thousands in red, Hundreds in blue, Tens in green, Ones in yellow. This colour system is maintained across all modes, creating a consistent visual vocabulary.

Audio uses the Web Audio API with raw AudioContext programming rather than Tone.js. The sounds are synthesized from frequency ramps: a 440→659 Hz triangle wave drop sound; ascending sine waves for correct answers; a 150 Hz sawtooth for errors.

---

## Learning Theory Connections

Math Blocks II effectively extends the CPA progression from Math Blocks down into the concrete and pre-concrete levels. The emoji counting mode addresses cardinality — the understanding that the last number counted represents the total quantity — which is the foundational number sense concept that all subsequent mathematics builds on.

The connection between Counting mode (counting discrete items) and Base-10 Count mode (counting blocks by their place value) is the key conceptual bridge in this game. The design asks learners to generalise from counting individual objects to counting grouped objects — a non-trivial cognitive step that is precisely what the base-ten system requires. A learner who understands "I have 3 tens and 5 ones" as a statement about a group of items rather than an abstract symbol string has crossed a fundamental conceptual threshold.

The 60% regrouping frequency in addition and subtraction is an evidence-informed design choice. The research literature on subtraction learning specifically identifies overfitting to non-regrouping problems as a significant source of procedural error: learners who practise primarily with problems that do not require regrouping tend to treat regrouping as an exception and apply it inconsistently. The 60% figure ensures that regrouping is normalised rather than exceptional.

The colour-coding of place value columns is consistent with dual-coding theory (Paivio, 1971): providing both verbal/numerical labels (T, H, T, O) and distinct visual encodings (colour) creates multiple retrieval routes to the same conceptual content, which is associated with stronger retention.

---

## The Instructional Design Perspective

Math Blocks II is the right companion to Math Blocks, not the same game at lower difficulty. The addition of the emoji counting mode creates a genuine entry point for pre-Kindergarten and Kindergarten learners who are not yet working with two-digit numbers. The game's range — from counting three emoji items to four-digit addition with regrouping — spans the full primary school place value curriculum in a coherent sequence.

The RETAIN evaluation is strong. The colour-coded place value columns are a consistently applied visual language that supports Adaptation (connecting new learning to established schema) across all five modes. The regrouping frequency design supports Transfer, since learners who develop flexible regrouping will transfer it to new problem types more readily.

The game's conceptual gap is the same as Math Blocks': the regrouping operation itself — why we break a ten into ten ones or carry a ten from the ones to the tens column — is not explicitly scaffolded. The player is shown that this happens; they are not shown why, and the game does not offer an explicit conceptual explanation.

The emoji counting mode raises a pedagogical question worth addressing: what emojis are used, and do they vary in ways that challenge or reinforce counting strategies? The most pedagogically rich counting contexts present items in irregular arrangements (not in rows of five, not in pre-grouped sets), so that the learner must apply one-to-one correspondence rather than pattern recognition or subitising. If the emoji display is randomised in spatial arrangement, this is excellent; if items appear in tidy rows, the counting challenge is reduced.

---

## The Game Development Perspective

The Web Audio API implementation in Math Blocks II is technically capable, producing clean, synthesized sounds with minimal latency. The choice of frequency ramps (the rising 440→659 Hz drop sound; the ascending sine waves for success) creates audio feedback that is both informative and emotionally appropriate — the rising pitch of the correct-answer sound is a conventional musical cue for success that works without explanation.

The four-column colour system is executed well at the visual level. The consistent application of red/blue/green/yellow across all modes, modes transitions, and interaction states (adding a block, removing a block, regrouping) creates the kind of visual coherence that is particularly valuable for young learners whose processing of complex layouts is less automatic than adults.

The Regroup button — which triggers the regrouping operation explicitly rather than waiting for the learner to initiate it through a long-press — is a thoughtful concession to the interface challenge of physical manipulation in a digital medium. For young learners who may not discover the long-press interaction intuitively, the explicit button provides a reliable access point.

The scrollable block zones in the place value columns are a practical solution to the visual problem of many blocks in a small space, but they introduce a scrolling interaction that may be confusing for younger users who do not expect to scroll within what appears to be a fixed area. The visual indication that more blocks exist below the visible area should be clear and consistent.

---

## Where They Agree and Where They Diverge

Both analysts regard Math Blocks II as a strong and thoughtful design that appropriately complements Math Blocks by extending the range downward. Both agree that the colour-coding system is among the platform's best visual design decisions.

The disagreement is on the emoji counting mode's place in the platform's overall structure. Dube sees it as a natural and appropriate starting point: counting is where number sense begins, and having a dedicated mode for it in a place-value-focused app creates a seamless developmental progression. Cohn's reservation is more structural: the emoji counting mode is sufficiently different from the base-ten modes in its cognitive demands that presenting them in the same application interface may create confusion for the youngest learners, who have not yet made the conceptual leap from counting individual items to understanding place value grouping.

The resolution both analysts support: clearer onboarding that positions the five modes explicitly as a learning progression — "Start here if you're learning to count; move here when you're ready for tens and ones" — rather than presenting them as equivalent choices.

---

## Joint Improvement Framework

**Quick wins**
- Add a recommended starting mode for each age range on the mode selection screen (star or "start here" indicator)
- Ensure emoji counting mode uses irregular spatial arrangements of items, not pre-sorted rows, to require genuine one-to-one correspondence rather than pattern matching
- Add narrated counting support: the Web Speech API speaks each number as the player counts items, supporting the connection between counting sequence and numeral

**Medium horizon**
- Introduce an explicit "bridging" mode between Counting and Base-10 Count that shows the same quantity first as individual emoji items, then regrouped into tens and ones — making the conceptual bridge visible
- Design animated regrouping demonstrations that trigger automatically the first time a regrouping problem is encountered in a new session

**Long horizon**
- Connect the counting mode's performance data to an adaptive difficulty system that determines when a learner is ready to transition from counting to base-ten work
- Align the colour vocabulary (red/blue/green/yellow for Th/H/T/O) with any physical manipulatives the school uses, or with Math Blocks, so that the visual language is consistent across tools

---
