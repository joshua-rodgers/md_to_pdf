# Chapter 12: The New Math App — The Minimal Tool and What It Teaches Us

---

## Game Snapshot

| | |
|---|---|
| **Type** | Virtual manipulative (minimal variant) |
| **Target grades** | Pre-K–Grade 3 |
| **Core math objective** | Counting, place value, addition and subtraction |
| **Domain** | Counting and cardinality; number and operations in base ten |
| **Modes** | Counting (emoji) / Base-10 Count / Build Number / Subtraction / Addition |

---

## How It Works: Mechanics Analysis

The New Math App presents five modes that closely parallel those in Math Blocks II: an emoji counting mode, a base-ten counting mode, a build-number mode, and addition and subtraction modes. The two applications share their conceptual scope and their place value column structure (Thousands, Hundreds, Tens, Ones).

The differences are structural. Where Math Blocks II uses Web Audio API with synthesized frequency ramps, the New Math App uses the Web Speech Synthesis API exclusively — the browser's native text-to-speech engine speaks feedback rather than producing synthesized tones. The drag-based interaction model replaces the button-based model of Math Blocks II: the learner drags blocks from a palette on the right side of the screen into the place value columns, rather than clicking "+" buttons to add blocks to each column.

The app's visual design uses a sweep-in animation for problem display, which provides a pleasant transition between problems. The feedback messages are colour-coded (green for correct, red for incorrect) with text that uses the Web Speech API to speak the message aloud.

There is no timer. There are no lives. The problem persists until the learner either submits a correct answer or presses "Next" to skip. This open-ended session model means the app can be used for as long as the learner wishes without session-end pressure.

A notable feature is the hidden-target option in Build Number mode: a toggle eye icon can hide the target number, requiring the learner to build from the block representation alone or remember the number from a brief display.

---

## The Minimalism Question

The existence of the New Math App alongside Math Blocks and Math Blocks II raises an interesting design question: what does a minimal tool contribute that its more complex counterpart does not?

The straightforward reading is that the New Math App is a simpler, earlier-developed version of Math Blocks II — a prototype that has since been superseded. But there is a more generous reading that reveals something important about educational tool design.

A minimal tool with fewer features is not simply a less capable version of a more complex tool. It is a different object. Its simplicity reduces the extraneous cognitive load that comes from navigating a feature-rich interface; it narrows the learner's attention to the core mathematical activity; and it presents a less intimidating entry point for learners who may be put off by complex-looking software.

The New Math App's drag-based interaction — pulling blocks from a palette and placing them in columns — is arguably more physically intuitive than the button-pressing of Math Blocks II for very young learners. Dragging an object to a destination is a physical metaphor (like moving a physical block) in a way that pressing an increment button is not. This physicality matters for the CPA model: the app is one step closer to the concrete manipulation it is designed to represent.

The Web Speech Synthesis-only audio is a limitation compared to Math Blocks II's synthesized tones, but it has an advantage: the spoken feedback is linguistically informative in a way that synthesized tones are not. "That's correct! 4 tens and 5 ones is 45" is a richer feedback message than a success tone, particularly for learners who are still building the vocabulary for place value.

---

## The Instructional Design Perspective

The New Math App is not inferior to Math Blocks II; it is differently useful. Its design philosophy — fewer features, more direct interaction, language-rich feedback — serves a specific learner population: very young children and children who find the multi-mode interface of Math Blocks II cognitively overwhelming.

The RETAIN evaluation is similar to Math Blocks II across most dimensions. Where it differs is in **Embedding**: the drag-based interaction in the New Math App creates a slightly more physical relationship between the action and the block representation, which strengthens the concrete-pictorial bridge.

The game's most significant instructional gap is identical to Math Blocks and Math Blocks II: the regrouping operation is available but not explicitly taught. A learner who encounters subtraction problems requiring regrouping and does not know how to initiate the breakdown interaction will be stuck without guidance.

The Web Speech feedback is the game's strongest instructional feature and its least exploited one. The current implementation speaks a confirmation message ("That's correct! 4 tens and 5 ones is 45") but does not exploit the rich instructional potential of spoken explanation. A minimal addition — "Good try! To subtract 7 from 5, you need to regroup. Break one of your tens into ten ones" — would convert a confirmation message into an elaborated feedback moment.

---

## The Game Development Perspective

The New Math App's drag interaction is its most distinctive UX feature and deserves examination. Drag interactions are more physically demanding than tap interactions, particularly for young users (as established in Chapter 5). A four-year-old dragging a block icon from a palette on the right side of the screen to a column on the left side must maintain drag-state across a significant screen distance while keeping the target column in view. This is a genuine fine motor challenge.

The palette layout — blocks displayed on the right, columns on the left — requires horizontal drag movements across the full width of the screen. For a child with limited fine motor control on a small tablet, this may produce frustrating misses. The alternative, placing the palette below the columns and requiring shorter downward-to-upward drags, or adding tap-to-add as an alternative to drag, would significantly improve accessibility.

The sweep-in animation for problem display is a pleasing detail that does genuine UX work: it creates a distinct, unambiguous transition between problems, so the learner always knows when a new problem has started. This is clearer than a simple refresh of the display with new numbers.

The single-problem persistence model — the problem stays until solved or skipped — is the right design for a conceptual tool. Forcing a time limit on building a number using manipulatives would be counterproductive for exactly the same reasons identified in the Math Blocks analysis.

---

## Where They Agree and Where They Diverge

Both analysts agree that the New Math App is more usefully framed as a different kind of tool than Math Blocks II rather than simply a less developed one. The drag interaction and spoken feedback represent genuine design choices with specific pedagogical rationale.

The divergence is on the drag-based interaction for the youngest users. Dube sees drag-and-drop as the right metaphor for a physical manipulative — it directly corresponds to picking up and placing a real object — and recommends investment in optimising the drag interaction for young users rather than replacing it. Cohn accepts the physical metaphor argument but notes that the research on motor control and interface design for under-six users suggests that tap-based interactions are more reliable for this age group, and that the "physical" quality of the metaphor may be less important than its executability.

The recommended resolution is additive: support both drag and tap interactions. Tap a block in the palette, then tap the target column to place it — preserving the intentional placement quality of drag without requiring sustained fine motor control.

---

## Joint Improvement Framework

**Quick wins**
- Add tap-to-place as an alternative to drag-and-drop: tap a block in the palette to select it, tap a column to place it
- Expand Web Speech feedback to include instructional content: when regrouping is needed, the speech feedback explains the regrouping operation explicitly
- Add a "hint" button that demonstrates the next step in narrated speech + animation

**Medium horizon**
- Restructure the palette position to minimise drag distance: palette immediately below the place value columns, with upward drag or tap placement
- Design a five-to-ten interaction guided tutorial that runs on first launch and specifically demonstrates the drag mechanics with explicit narration

**Long horizon**
- Merge the New Math App and Math Blocks II into a single place-value tool with two interaction modes — tap/button and drag — selectable at launch, giving teachers and parents the ability to choose the interaction modality appropriate for their learner's age and motor development
- Add parent/teacher reporting: a simple summary of which place value concepts have been successfully practised in the current session, displayed at session end

---

## A Note on Platform Redundancy

The New Math App and Math Blocks II overlap substantially. They target the same age range, the same mathematical content, and the same CPA approach. Their differences — interaction model, audio design, drag vs. button — are real but may not be apparent to the parent or teacher choosing between them.

This overlap is not necessarily a problem: having two tools that approach the same content differently is consistent with the research on multiple representations in mathematics learning. But the platform would benefit from clearer guidance on which tool to use in which context. A brief "which tool is right for your child?" guide on the platform's landing page, addressing the age range and motor skill level, would eliminate the confusion without requiring architectural changes to either tool.

---
