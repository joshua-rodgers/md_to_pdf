# Chapter 8: Capture Squares

---

## Game Snapshot

| | |
|---|---|
| **Type** | Turn-based combinatorial game (derived from Dots and Boxes) |
| **Target grades** | Grades 2–3 (subtraction); Grades 3–5 (multiplication) |
| **Core math objective** | Subtraction fact fluency; multiplication tables (factors 1–9) |
| **Domain** | Operations and number sense |
| **Variants** | Stage 4: Subtraction / Stage 5: ×2, ×5, ×10 / Stage 6: ×1–5 / Stage 7: ×6–9 |

---

## How It Works: Mechanics Analysis

Capture Squares is built on the *Dots and Boxes* framework — a game in which players draw lines between dots on a grid, and a player who completes the fourth side of a square claims it. The platform's version transforms this combinatorial structure into an arithmetic exercise.

The interaction has three phases. First, the player spins a wheel that displays six sections with values (16–20) and one WILD slot. Second, from a set of numbered cards (1–10), the player selects one to subtract from (or multiply with, in later stages) the spinner result. Third, the player draws lines on the 3×3 grid that border squares matching their calculated result; completing a square's fourth side captures it. First to capture three squares wins.

The game tracks three lives (hearts), displayed in the upper left. A turn timer of 60 seconds is animated as a depleting bar. Captured squares trigger a confetti effect and a celebratory emoji overlay. Tone.js provides sound feedback.

A WILD card on the spinner allows the player to choose any value — a rule that adds a small probabilistic escape valve when the spinner and available card set do not yield a useful result.

---

## Learning Theory Connections

Capture Squares occupies an interesting position in the endogenous/exogenous spectrum. The arithmetic is not purely incidental — the calculation determines *which* lines can be drawn, which determines the strategic board state. But the mathematics and the game mechanics are not as tightly fused as in Five in a Row: a player could, in principle, win Capture Squares without the arithmetic being strategically central if the board geometry cooperates. The calculation determines the available move; the player's strategic problem is the board, not the arithmetic.

This means the game sits closer to the exogenous end of the integration spectrum than Five in a Row, but it is not purely exogenous. The repeated calculation — across many turns, across multiple game sessions — provides the spaced practice that arithmetic fact fluency requires. The key question is whether the game structure creates enough motivation to sustain that repetition.

From a Cognitive Load perspective, the three-phase interaction is worth examining. Spinner result → card selection → calculation → board move requires the player to hold the spinner value in working memory while selecting the card, calculate the result, and then locate the correct board squares. For a child in Stage 4 (subtraction), this chain is manageable; for a child in Stage 7 (multiplication tables 6–9), it may approach the limits of working memory for a learner who is still building those facts. The 60-second timer adds pressure to a sequence that, for developing learners, requires deliberate processing.

The WILD card is a thoughtful design choice: it introduces a form of adaptive difficulty through the player's own selection — they can choose to skip a difficult calculation when WILD appears. This is a light form of learner-controlled difficulty, and it preserves autonomy while providing a relief valve for stressful moments.

---

## The Instructional Design Perspective

Capture Squares succeeds in embedding arithmetic in a game structure with genuine strategic content. The Dots and Boxes framework is a real game — it appears in recreational mathematics and has a meaningful strategy layer — and the calculation requirement creates a genuine purpose for arithmetic that a pure flashcard game lacks. This is the relevant dimension of embedding in the RETAIN framework: the mathematics has a reason to exist within the game world.

The progression across four stages is well-calibrated. Starting with subtraction (which is more cognitively demanding than addition but less multiplicative) and then moving through multiplication in three stages of increasing difficulty — doubling and halving (×2, ×5, ×10) before the harder tables — respects the conventional curricular sequence and provides appropriate scaffolding.

The RETAIN evaluation for **Transfer** is this game's weakest dimension. Subtraction as "spinner minus card" is a somewhat decontextualised operation; the numbers are arbitrary and the subtraction has no real-world meaning. The game builds fluency but not a conceptual model for why subtraction or multiplication works. For a game targeting Grades 2–3 (subtraction) and Grades 3–5 (multiplication), this limitation matters: these are stages where conceptual understanding of operations is still being formed, not just procedural fluency.

The 60-second turn timer is a concern for the same reasons as the per-turn timer in Five in a Row. A 60-second limit for multiplication table recall (Stage 7) is adequate for a fluent learner and stressful for a developing one. The hearts system compounds this: a miscalculation or timer expiry costs a life, which means a child who is genuinely working through Stage 7 multiplication facts — not yet fluent — may lose all three lives before completing a game.

The game provides no feedback on the mathematical reasoning behind an error. An incorrect calculation is signalled (the line cannot be drawn, a life is lost), but there is no elaborated feedback explaining the correct result. From a learning-science perspective, this is the game's most significant instructional gap: without feedback on what the correct answer was and why, errors are confirmed as errors but learning from them is left entirely to the learner.

---

## The Game Development Perspective

The choice to build on Dots and Boxes is inspired. Dots and Boxes is a genuine combinatorial game with strategic depth — the number of squares a player can capture in a given turn depends on the board geometry in non-trivial ways. By building arithmetic practice on top of a real game foundation, Capture Squares avoids the sense of transparent artificiality that afflicts many educational games.

The visual design of the 3×3 grid, the spinner, and the card selection area is clean and legible. The spinner animation is appropriately satisfying; the timer bar depletes at a visible rate that creates pacing without the alarm-triggering quality of a numerical countdown. The confetti effect on square capture is well-timed — a brief, specific celebration that marks achievement without interrupting play.

The Tone.js audio implementation provides richer, more responsive audio feedback than the Web Speech Synthesis used in Five in a Row. The interaction between sound events and game phases (spin, select, calculate, capture) is well-mapped.

The WILD card is a mechanically elegant feature. Its appearance in one of six spinner sections creates a roughly 17% probability of getting a "free choice" turn, which is frequent enough to be relieving without being so common that it undermines the calculation requirement.

From a UX standpoint, the most significant concern is the 3×3 grid's line interaction targets on smaller screens. Drawing lines by clicking or tapping the spaces *between* squares — which is the interaction in standard Dots and Boxes — is more demanding than tapping the squares themselves, both in terms of precision and conceptual legibility for young players. The implementation should be examined carefully on tablet and phone screen sizes to ensure that line placement is reliably executable.

The missing ingredient, from a game design perspective, is a clear visual connection between the calculated result and the board lines. A player who calculates "17 − 8 = 9" must then identify which lines on the board have a "9" context — but the current interface does not make this mapping visually explicit. A visual highlight of available lines that match the calculated result, appearing after the calculation step, would reduce the board-scanning cognitive load and make the game more satisfying to play.

---

## Where They Agree and Where They Diverge

Both analysts agree that Capture Squares is well-designed as a game, and that the Dots and Boxes foundation is a genuine strength. Both also agree that the absence of elaborated feedback on errors is the game's most significant instructional gap.

The analysts diverge on the assessment of the three-phase interaction structure. Dube sees the multi-step interaction (spin→select→calculate→draw) as a positive design feature: it creates a distinct rhythm for each turn, separates the calculation step from the board move step, and prevents the game from feeling like pure rapid-fire fact recall. Cohn is more cautious: the multi-step structure increases the cognitive load of each turn in a way that may be problematic for learners who are not yet fluent in the relevant operation. For Stage 7 multiplication (tables 6–9), holding a two-digit spinner result in working memory while scanning the card options and performing a multiplication requires more simultaneous working memory operations than is ideal for a learner who is still consolidating those facts.

---

## Joint Improvement Framework

**Quick wins**
- Add a brief result display after each calculation: "17 − 8 = 9" visible for 1–2 seconds before the player draws lines, as both a confirmation step and an elaborated feedback moment for incorrect attempts
- Highlight available board lines that correspond to the calculated result, to reduce board-scanning cognitive load
- Increase hearts from three to five, or make lives lost only on timer expiry rather than on incorrect answers (allow a retry with a different card selection)

**Medium horizon**
- Add a "Practice" mode without lives or timers, allowing learners to explore the calculation → board move sequence without penalty — valuable for introducing the game to new players
- Introduce a turn structure that shows the calculation history for the current session, building toward metacognitive awareness of which facts are reliably known and which are error-prone

**Long horizon**
- Replace the fixed timer with adaptive pacing: longer turns when accuracy is low, shorter when high — maintaining the flow channel
- Connect the subtraction and multiplication operations to visual representations (number line for subtraction, area model for multiplication) that appear in scaffolding mode for learners who request them

---
