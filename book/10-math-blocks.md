# Chapter 10: Math Blocks — The Platform's Deepest Tool

---

## Game Snapshot

| | |
|---|---|
| **Type** | Virtual manipulative / structured practice tool |
| **Target grades** | K–6 (7 levels spanning 1–1,000,000) |
| **Core math objective** | Place value understanding; addition and subtraction with regrouping; number decomposition |
| **Domain** | Number and operations in base ten |
| **Modes** | Addition / Subtraction / Number Construction |

---

## How It Works: Mechanics Analysis

Math Blocks is a virtual base-ten block manipulative — a digital implementation of the physical classroom tool in which ones are represented by small cubes, tens by rods of ten cubes, hundreds by flat squares of one hundred cubes, and thousands by full cubes of one thousand. The platform extends this to seven denominations: 1, 10, 100, 1,000, 10,000, 100,000, and 1,000,000.

The three modes are structurally distinct.

In **Addition mode**, two separate block areas — labelled "First Number" and "Second Number" — allow the player to build the two addends using block buttons. After building both numbers, the player inputs the sum and the game confirms or corrects.

In **Subtraction mode**, the player builds the minuend (the number to be subtracted from) in a block area, then removes blocks to find the difference. A separate "Removed" area displays the blocks that have been taken away, making the subtraction process concrete and visible. A long-press on a block (600 milliseconds) breaks it down into ten of the next smaller denomination — the regrouping operation made physical.

In **Construction mode**, the player receives a target number and builds it using the available block denominations. A toggle button can hide the target number for an additional challenge.

Seven difficulty levels control the range of numbers used: Level 1 (1–10) through Level 7 (1–1,000,000). Problem generation is automatic: the game generates appropriate numbers for the selected level and mode.

Audio feedback uses an MP3 file for correct answers. Vibration feedback (through the navigator.vibrate API) fires when a block is added on mobile devices, providing haptic reinforcement of the physical-virtual correspondence.

There is no timer. There are no lives.

---

## Learning Theory Connections

Math Blocks is the closest thing on the platform to a pure constructivist learning environment. Its theoretical grounding is in Jerome Bruner's Concrete-Pictorial-Abstract (CPA) model — the three-stage learning progression in which understanding develops through handling physical objects (concrete), working with visual representations (pictorial), and finally operating with abstract symbols.

The base-ten block manipulative is one of the most pedagogically researched concrete representations in mathematics education. The work of Zoltán Dienes in the 1960s established the theoretical basis for multi-base block manipulation; decades of subsequent research confirmed that children who work with physical base-ten blocks before encountering formal regrouping procedures develop more flexible, durable understanding of place value than those who encounter procedures first.

Math Blocks is the digital equivalent. The player builds numbers physically — clicking blocks to add them, long-pressing to break them down — and the abstract numerical representation updates in response. This is the concrete-to-pictorial transition: the game shows what the number looks like as a physical structure, then shows the corresponding symbolic notation.

The subtraction regrouping mechanic is particularly notable. Physical base-ten blocks are most valuable for precisely this operation: regrouping requires the learner to break a ten-rod into ten one-cubes, which is a physical action with a clear spatial and procedural logic that is far more graspable than the abstract procedure ("borrow one from the tens column") taught without concrete support. The long-press break-down interaction is an excellent digital approximation of this physical action.

The absence of timers and lives is not an oversight. It is the correct design choice for a tool designed to support conceptual understanding. Conceptual learning is slow and effortful; it cannot be rushed. A timer on Math Blocks would be like a timer on a chemistry experiment — it would create pressure that is inimical to the process the tool is designed to support.

---

## The Instructional Design Perspective

Math Blocks is the most educationally sound product on the platform, and the absence of flashy gamification elements is not a weakness — it is a sign of confidence in the learning activity itself.

The RETAIN evaluation is the platform's strongest. **Relevance**: high — base-ten blocks are authentic mathematical tools used in real classrooms; this game is the digital version of something children encounter in school. **Embedding**: excellent — the mathematical operations (addition, subtraction, place value decomposition) *are* the game actions; there is no separation. **Transfer**: high — the concrete representations built in this game directly support understanding of the abstract procedures they will encounter in formal instruction. **Adaptation**: adequate — the seven levels provide a wide range, though within each level there is no adaptive adjustment. **Immersion**: different from the other games — immersion here is cognitive absorption in the problem, not narrative or competitive excitement. **Naturalization**: this game targets conceptual understanding rather than automaticity; fluency comes from the other games.

The game's primary limitation is the lack of explicit scaffolding for the regrouping operation. A child who has not been taught what regrouping means — who encounters the long-press block-breakdown mechanic without understanding its mathematical significance — may learn to perform the interaction without understanding why it works. The game would benefit from a brief guided introduction the first time regrouping is required: a narrated demonstration showing a ten-rod being broken into ten ones, with explicit language ("when we need more ones than we have, we can break a ten into ten ones — that's called regrouping").

The Construction mode deserves particular praise. The ability to hide the target number and build purely from the block representation is a sophisticated feature that addresses a genuine pedagogical need: some learners benefit from working with the representation before the abstraction, rather than trying to match a target numeral. This is Bruner's concrete mode in its purest form.

---

## The Game Development Perspective

Math Blocks is the platform's most technically ambitious game in terms of its representational scope. The seven-denomination system — extending to one million — is genuinely impressive and covers the full range of the primary curriculum's place value strand.

The block rendering is clean and appropriately spatial: the blocks are visually distinct by denomination and their relative sizes communicate something about their relative values. This is important because the spatial-magnitude relationship is part of what the concrete representation is supposed to convey.

The long-press regrouping interaction is the game's most innovative UX feature. It solves a genuine design problem — how to represent the physical action of breaking a block down into smaller pieces — in a way that is both intuitive and satisfying. The 600-millisecond threshold for the long-press is well-calibrated: brief enough not to feel sluggish, long enough to prevent accidental triggering.

Haptic feedback through navigator.vibrate is a thoughtful touch for mobile devices. The physical sensation of a brief vibration when a block is added reinforces the "adding a physical object" metaphor in a way that a purely visual interface cannot. For children with tactile learning preferences, this is a meaningful accessibility feature.

The audio design — a single success MP3 — is this game's weakest element. The other games on the platform use Tone.js or Web Audio API for richer, more contextual audio feedback; Math Blocks' single success sound does not distinguish between correct results in addition, subtraction, and construction modes. Richer audio design — distinct sounds for different events, perhaps tonal feedback that varies by block denomination — would better serve the sensory richness that young learners need.

The modal overlay for results is functional but minimal. A result screen that briefly replays the block structure that produced the correct answer — a visual summary of the mathematical reasoning — would add instructional value.

---

## Where They Agree and Where They Diverge

Cohn and Dube agree that Math Blocks is the platform's most educationally pure product and that its freedom from timers and lives reflects a clear-headed pedagogical priority: this tool is for understanding, not for performing. Both agree that the absence of explicit scaffolding for regrouping is a missed opportunity.

The divergence is on framing. Dube would describe Math Blocks not as a game at all but as a virtual manipulative — a tool for structured exploration, not a play experience. He suggests that its position in the platform's game library may create a mismatch with user expectations: a child who comes to the platform expecting a game and encounters Math Blocks may not engage with it productively because it does not offer the rewards and challenges that signal "game" in their mental model.

Cohn's response is that the framing problem, if real, is a problem with the marketing of the tool rather than with the tool itself. The absence of gamification in Math Blocks is a feature, not a bug. What is needed is a better introduction to the tool — an onboarding experience that establishes its purpose and invites the learner into a different mode of engagement.

---

## Joint Improvement Framework

**Quick wins**
- Add a brief narrated onboarding the first time each mode is accessed, explaining the block denominations and the key interactions (adding blocks, long-press breakdown)
- Expand audio design: add Tone.js for block interactions (ascending tones as larger denominations are added; specific sounds for the regrouping break-down action)
- Add a "Show regrouping step" mode that narrates and animates the regrouping operation explicitly, for first-time learners

**Medium horizon**
- Introduce a "build and explain" mode in which the learner is prompted to describe the number they have built before submitting: "I made ___ hundreds, ___ tens, and ___ ones, so my number is ___." This verbal articulation is a powerful consolidation step in constructivist learning
- Design a visual progression through modes (Construction → Addition → Subtraction) that represents the intended learning sequence and provides a narrative of growing competence

**Long horizon**
- Connect Math Blocks to Math Blocks II and the New Math App through a shared place value tracking system, so that competency demonstrated in one tool informs the starting point in the others
- Introduce a "challenge" mode with gentle time elements for learners who have demonstrated conceptual mastery and are ready to build procedural fluency on their solid foundation

---
