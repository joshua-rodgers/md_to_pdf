# Chapter 15: Target Numbers — Estimation and Flexible Thinking

---

## Game Snapshot

| | |
|---|---|
| **Type** | Drag-and-drop card strategy game |
| **Target grades** | Grades 3–6 |
| **Core math objective** | Estimation; number composition; flexible use of operations |
| **Domain** | Number and operations; operations and algebraic thinking |
| **Stages** | Place Value / Addition / Subtraction / Rounding / Multiplication / Division |

---

## How It Works: Mechanics Analysis

Target Numbers presents the player with a bank of draggable digit cards (0–9) and a set of empty slots organised into an arithmetic expression. The challenge is to drag cards into the slots to create an expression whose result is as close to 1,000 as possible without exceeding it.

In the Addition stage, for example, the slots might be arranged as a three-digit number plus a three-digit number. The player drags cards into the empty slots, forms two numbers, and submits the sum. The scoring system awards ten points for exactly reaching 1,000, five points for coming very close, and three points for any reasonable attempt. The game runs for seven rounds, and final score is the sum across rounds.

The six stages vary the operation and its structural demands:
- **Place Value**: understanding which digit placement maximises or minimises a number
- **Addition**: forming numbers that sum to the target
- **Subtraction**: forming a subtraction expression with a result near the target
- **Rounding**: applying rounding rules to reach an approximate target
- **Multiplication**: forming factors whose product approaches the target
- **Division**: forming a division expression approaching the target

The drag-and-drop mechanic allows the player to pick up a card, drop it in a slot, and pick it up again to move it — the card is not committed until submission. This reversible interaction creates a genuine design space: the player can try a configuration, observe the expression, calculate mentally, and rearrange before committing.

Audio uses the Web Audio API with frequency-based tone synthesis. Web Speech Synthesis narrates instructions. Confetti marks session completion.

---

## Learning Theory Connections

Target Numbers is the platform's most cognitively demanding game and its most sophisticated attempt at higher-order mathematical thinking. The central demand — place a given set of digits to get as close to a target as possible — is an estimation and number sense challenge, not a computation challenge. It requires the player to reason flexibly about number magnitude: what does placing an 8 in the hundreds column versus the tens column do to the value? Is 8 × 9 × 10 close enough to 1,000, or should I try a different arrangement?

This is a form of mathematical reasoning that falls well above the Bloom's Taxonomy level targeted by most of the platform's other games. Where Five in a Row and Capture Squares test recall and computation, and Math Blocks and Math Investigator test conceptual understanding, Target Numbers tests something closer to *application* and *analysis* in Bloom's model: using mathematical knowledge flexibly to achieve a non-routine goal.

From an SDT perspective, the drag-and-drop card arrangement system is one of the platform's strongest autonomy-support mechanisms. The player genuinely controls the strategy: there is no single correct configuration, multiple arrangements can achieve good scores, and the best strategy varies by the specific digit set available. This is the kind of meaningful choice that supports intrinsic motivation in ways that single-answer problems cannot.

The scoring system — full points for exactness, partial points for proximity, minimal points for any valid attempt — is a thoughtful gamification design. It tolerates imprecision while rewarding accuracy, which is exactly the right frame for an estimation task. Estimation is inherently approximate; a scoring system that awards zero points for near-misses teaches that approximation is failure.

---

## The Instructional Design Perspective

Target Numbers is the platform's most impressive instructional achievement in terms of mathematical richness. It is also the game that most directly addresses a gap in primary mathematics education that research consistently identifies as significant: number sense and flexible number thinking.

The RETAIN evaluation is strong and arguably the platform's most balanced. **Relevance**: high — the "closest to 1,000 without going over" framing is evocative of real decision-making contexts (staying within a budget, reaching but not exceeding a target quantity). **Embedding**: excellent — the digit arrangement *is* the mathematical thinking; there is no separation between game action and mathematical reasoning. **Transfer**: very high — a player who has developed good digit placement strategy has developed genuine number magnitude reasoning that will transfer to mental arithmetic, estimation in other contexts, and algebraic thinking. **Adaptation**: the seven-round structure creates a fixed session with natural completion; the partial scoring creates a graduated success experience. **Immersion**: the strategic, open-ended nature of the card arrangement creates genuine problem-solving absorption. **Naturalization**: this game targets flexible thinking rather than automaticity, which is a different but complementary skill.

The game's potential limitation is the gap between the cognitive demand of the Addition stage and the much higher cognitive demand of the Multiplication and Division stages. Addition to 1,000 using three-digit numbers is a Grade 3 task; multiplication toward 1,000 using the available digit cards is a Grade 5–6 task. The structural similarity across stages — same card arrangement mechanic — may create a false impression that the stages are equivalent in difficulty, leading learners to progress to Multiplication and Division before they have the operational fluency those stages require.

A second concern is the absence of feedback on the reasoning process. When the player submits a configuration, the game reports the result and awards points, but it does not explain the best available configuration or invite the player to compare their strategy to alternatives. For an estimation task designed to build number sense, the comparison of "what I tried" to "what was possible" is the most instructionally rich moment — and currently it is absent.

---

## The Game Development Perspective

The drag-and-drop card system in Target Numbers is the most interaction-design-mature drag system on the platform. The ability to pick up a card, place it, and pick it up again — treating card placement as reversible and exploratory — creates a genuinely experimental play space that supports the strategic thinking the game is designed to cultivate.

The card visual design (digit displayed on a card, slightly styled to suggest physical card-play) is clean and communicates the interaction grammar clearly: these are items that can be picked up and placed. The slot visual design — empty rectangular boxes clearly shaped to receive a card — makes the drop targets unambiguous.

The seven-round structure creates a natural session arc: a beginning, a middle, and an end. Seven rounds is well-calibrated for an engagement session of approximately ten to fifteen minutes, which aligns with the attention span research for Grades 3–6. The final score summary at game completion provides a retrospective on the session that could be more instructionally valuable (see recommendations).

The Web Audio API implementation provides a distinct and varied soundscape: drag tones, drop tones, success sequences of ascending notes, error tones with distinct timbres. The audio is more functional than musical, but it is consistently informative and emotionally appropriate.

The "speaker icon" on the instruction display — which reads the instructions aloud when tapped — is a good accessibility feature, though it could be more prominent. In the current implementation it is a small icon; a first-time user may not discover it. Making the speaker icon pulse gently on first launch, or including a brief "tap here to hear the instructions" prompt, would increase its discoverability.

---

## Where They Agree and Where They Diverge

Both analysts regard Target Numbers as the platform's intellectually richest game, and the one that most closely approaches the kind of mathematical thinking that the research identifies as predictive of long-term mathematical competence: flexible number reasoning under conditions of controlled uncertainty.

The divergence is on the session-end feedback. Cohn argues that the post-game summary should include a "best possible score" comparison — showing the player what the optimal configuration for each round would have been, alongside their actual configuration. This turns the session summary into an elaborated feedback moment: the learner can see not just how many points they earned, but how close their reasoning was to the best available strategy. This is the kind of metacognitive reflection that builds number sense most efficiently.

Dube's concern is that showing the "optimal" answer undermines the autonomy and problem-solving orientation that makes the game distinctive. If the player knows the optimal answer exists and will be revealed, the game becomes more about approximating a known target and less about genuine open-ended reasoning. His preferred design is a "try again" mode that allows the player to return to any round with the same digit set and try to improve their score — preserving exploratory orientation while creating a reflection opportunity.

Both recommendations are compatible: a session summary that shows the player's configuration alongside the optimal one, with an option to replay any round with the same digits, would satisfy both instructional and engagement goals.

---

## Joint Improvement Framework

**Quick wins**
- Make the speaker icon on instructions more prominent; add a brief "tap to hear instructions" prompt on first session
- Improve the session-end summary to display each round's result alongside a brief note on the strategy that would have maximised the score (not necessarily the exact optimal configuration, but the principle: "placing the largest digit in the hundreds column first gives the most control over the result")
- Add a "replay round" button on the session summary that allows the learner to retry any round with the same digit set

**Medium horizon**
- Add a progression indicator connecting the six stages that makes the intended learning sequence visible: Place Value → Addition → Subtraction → Rounding → Multiplication → Division, with a recommended entry point for different grade levels
- Introduce brief contextual framing for each stage: the Addition stage might begin with "You're planning a school event. Can you use these digit cards to get as close to 1,000 invited guests as possible?" The context does not change the mechanics but gives the target a reason to exist.

**Long horizon**
- Implement a "collaborative" mode where two players each have a subset of the digit cards and must coordinate their placement to reach the target together — adding the social dimension that research associates with stronger learning outcomes, and creating a context for mathematical communication ("If you put the 8 in hundreds, I can put the 7 in tens and we'll be at 870 — that's close")
- Connect Target Numbers' performance data to the platform's other arithmetic games, identifying which specific operations (multiplication, division) show reduced flexibility compared to fluency on the other games

---
