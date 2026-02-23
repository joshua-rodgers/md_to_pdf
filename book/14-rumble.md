# Chapter 14: Rumble — Area Models and the Geometry of Multiplication

---

## Game Snapshot

| | |
|---|---|
| **Type** | Canvas-based grid building game |
| **Target grades** | Grades 3–5 |
| **Core math objective** | Multiplication via area model; rectangular area as product of dimensions |
| **Domain** | Operations and algebraic thinking; geometry (area) |
| **Variants** | Stage 1–3: Area model multiplication / Stage 4: Measurement Master |

---

## How It Works: Mechanics Analysis

Rumble is built on a 10×10 grid of unit squares, rendered as an HTML5 Canvas. The game's interaction follows a state machine with distinct phases: spinning, dice rolling, building, a quiz modal, and a result.

The player spins a wheel to determine one factor. The wheel has six sections with values (1, 2, 5, 10) plus variation introduced by a dice element. Once the spinner lands, the player selects cells on the grid that form a valid rectangle matching the product. The game validates that the selected cells genuinely form a rectangular region — this is not just clicking any cells, but constructing a geometric shape.

After the rectangle is built, a quiz modal appears asking the player to identify the multiplication equation it represents: "A × B = C." The player inputs the two dimensions and their product. This two-stage interaction — first build the rectangle, then state the equation — is the mechanic that makes Rumble different from every other multiplication game on the platform.

Lives are tracked with three hearts. A streak counter accumulates correct completions; reward tiers appear at streak milestones (1: Newbie, 3: Learner, 5: Scholar, 7: Pro, 10: Master). Tone.js provides a rich audio environment: a four-note spin sequence (C4–E4–G4–E4), specific sounds for cell selection, grid building, quiz failure, and win celebration.

---

## Learning Theory Connections

Rumble represents the platform's most sophisticated use of visual representation to connect a concrete action to a mathematical abstraction.

The area model for multiplication — representing *a* × *b* as a rectangle with dimensions *a* and *b*, where the product equals the area — is one of the most powerful representations in elementary mathematics. It provides a geometric, spatial argument for why multiplication works: you can see that 4 × 6 equals the area of a 4-by-6 rectangle, and you can see that 4 × 6 and 6 × 4 produce the same area from different orientations. This spatial-visual encoding of multiplication supports the understanding of the commutative property, the distributive property, and — later — polynomial multiplication in algebra.

From a Cognitive Load Theory perspective, the two-stage interaction is designed to manage cognitive load rather than increase it. The build-first, state-second structure separates the spatial task (building the rectangle) from the symbolic task (writing the equation), so that the learner is not required to simultaneously manage spatial construction and symbolic notation. This is an example of the sequencing principle from CLT: complex multi-component tasks are best decomposed into stages that can be mastered and then combined.

The spinner's limited factor set (1, 2, 5, 10) is calibrated to the Grade 3 stage of multiplication learning, where doubling, multiplying by five, and understanding the ones are the first fluency targets. This is a good curriculum alignment choice that the game could make more explicit.

---

## The Instructional Design Perspective

Rumble is the platform's clearest example of a game designed around a specific mathematical representation, and it uses that representation to genuine educational effect.

The quiz modal — the explicit statement of the equation after building the rectangle — is the game's most instructionally important feature. It transforms a spatial-constructive task into an explicit mathematical labelling exercise: the learner is not merely building a rectangle, they are required to articulate the mathematical meaning of what they have built. This connection between the visual (rectangle on grid) and the symbolic (A × B = C) is precisely the bridge that Bruner's CPA model identifies as the key transition from pictorial to abstract understanding.

The RETAIN evaluation is strong. **Relevance**: moderate — the area model is an authentic mathematical representation, but the spinner-dice context is somewhat arbitrary. The game would benefit from real-world contexts that give the area model relevance: "You're tiling a floor — how many tiles do you need?" **Embedding**: excellent — the mathematical operations are the game, not a gate to the game. **Transfer**: high — the visual-spatial encoding of multiplication should support recognition of the area model in other contexts (geometry problems, multi-digit multiplication). **Adaptation**: adequate — the streak-and-reward system provides some motivational scaffolding, and the progression across three stages provides differential difficulty. **Immersion**: the spinner and dice mechanics create genuine anticipatory engagement.

The three-heart lives system in Rumble is less concerning here than in the earlier games, because the errors being penalised — incorrect quiz responses — occur after the learner has already completed the spatial construction. The quiz moment is a reflection task, not a timed retrieval task; the learner can take a moment to examine the rectangle they have built before stating the equation. The stakes of a wrong answer at the reflection stage are different from the stakes of a wrong answer under a 20-second turn timer.

That said, the lives system still creates a punitive frame for what is fundamentally a learning task. A learner who builds a 3×4 rectangle and then writes "3 × 4 = 16" in the quiz modal has done the spatial-constructive work correctly and has an arithmetic error at the final step. Losing a life for this error is disproportionate — and the error is actually instructionally rich (it suggests the learner is still developing multiplication fact fluency in the 3-4 range), which makes it a learning opportunity rather than a failure.

---

## The Game Development Perspective

Rumble is technically the most complex game on the platform. The canvas-based game loop, the spinner animation with physics-based deceleration, the dice rolling animation, the quadrilateral validation for rectangle selection, and the Tone.js audio environment all require careful coordination. The implementation is visually impressive and mechanically smooth.

The Tone.js audio in Rumble is the richest on the platform: the four-note spin sequence, the dice-roll noise, the dice-land percussive sound, the reward fanfare. This audio environment creates a genuine sense of event and occasion — each phase of the turn feels significant, which contributes to the intrinsic engagement that the quiz modal requires.

The state machine architecture (START → SPINNING → DICE_ROLLING → BUILDING → QUIZ_MODAL → RESULT) is a sophisticated engineering choice that produces a reliable, legible interaction flow. Each state is distinct; the transition between states is visually and aurally signalled; the learner always knows what phase of the turn they are in.

The grid cell interaction — clicking to select cells, with validation that the selected cells form a valid rectangle — is the game's most technically challenging feature and its most consequential one. A learner who clicks cells in an L-shape rather than a rectangle should receive immediate, clear feedback that the shape is invalid, with a visual indication of what a valid rectangle looks like. The current implementation validates the rectangle at the end of the build phase; earlier, per-click validation would reduce confusion.

The reward shelf is as well-executed here as in Math Investigator. The milestone labels (Newbie → Learner → Scholar → Pro → Master) suggest a genuine progression that the learner can aspire to, and the persistent display of earned rewards creates the collector logic that sustains engagement between sessions.

---

## Where They Agree and Where They Diverge

Both analysts see Rumble as the platform's most ambitious and most visually sophisticated game, and both agree that the two-stage interaction (build → state equation) is the platform's most innovative instructional design choice.

The divergence is on the role of real-world context. Cohn argues that the area model has rich natural connections to real-world spatial problems — flooring, tiling, garden beds, seating arrangements — and that the game misses a significant opportunity by framing the area model in an abstract spinner-and-dice context rather than in purposive real-world scenarios. If the rectangle you are building is a flower bed you are planning to tile, the multiplication equation has a reason to exist beyond the game context.

Dube's response is that real-world context, while desirable, should not be imposed at the cost of the game's clean interactive structure. The spinner-dice mechanic creates a specific, well-defined task that gives the player clear agency over what they build. Real-world framing would add narrative richness but might also add instructional complexity that distracts from the area-model focus. The resolution both analysts accept: an optional narrative layer that can be enabled by the teacher or parent — "gardening mode" that frames each rectangle as a plot of land — without requiring it.

---

## Joint Improvement Framework

**Quick wins**
- Add per-click validation during the building phase that visually indicates whether the current cell selection is forming a valid rectangle (green borders for valid, amber for invalid so far)
- Increase hearts from three to five, given that errors in the quiz modal typically indicate fact fluency issues rather than conceptual misunderstanding
- Add an explicit visual connection in the quiz modal: highlight the rectangle's rows and columns with their dimension labels while the learner inputs the equation

**Medium horizon**
- Introduce an optional real-world narrative mode: the grid becomes a tile floor, a garden bed, or a seating chart, and the problem is framed in that context
- Add Stage 5: Expanded Factors, covering multiplication tables up to 9×9, using the same area model mechanics with a larger factor range on the spinner

**Long horizon**
- Design a multi-digit multiplication extension (e.g., 23 × 14 using the partial products area model, decomposing the rectangle into sub-regions) that uses the same visual grammar but addresses the Grade 4–5 curriculum
- Connect Rumble's area model performance to Math Investigator's division performance: the same factor pairs tested in both games should be tracked together, since multiplication and division fact fluency develop together

---
