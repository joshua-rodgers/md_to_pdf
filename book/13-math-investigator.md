# Chapter 13: Math Investigator — Real-World Grouping and Division

---

## Game Snapshot

| | |
|---|---|
| **Type** | Problem-solving game with manipulatives |
| **Target grades** | Grades 2–4 |
| **Core math objective** | Division concepts (partition and quotative); multiplication foundation |
| **Domain** | Operations and algebraic thinking |
| **Levels** | Level 1: Guided manipulation / Level 2: Visual analysis / Level 3: Story problems / Level 4: Abstract |

---

## How It Works: Mechanics Analysis

Math Investigator is a division-focused game that uses draggable emojis as physical manipulatives. The player is presented with a mathematical grouping problem — "Put 12 stars into 4 equal groups" or "Put 18 berries into groups of 6" — and drags emoji items from a source area on the left into rectangular group boxes on the right.

The four levels form an explicit scaffolding progression from concrete to abstract:

**Level 1 (Guided Manipulation)** provides 16 problems where the learner drags all items into groups and receives prompts. Problems specify either the number of groups (partition division: "share 15 apples equally among 5 friends") or the size of each group (quotative division: "put 15 apples into groups of 3"). Visual and verbal guidance is available.

**Level 2 (Visual Analysis)** presents pre-drawn group structures for the learner to analyse and complete visually. The scaffolding is reduced — the group boxes are visible but the learner must reason more independently about how many items belong in each.

**Level 3 (Story Problems)** embeds the division operations in real-world narrative contexts: berries, boxes, gardens, coins, tickets, teams. The emoji items match the story context (berry emojis for berry-counting problems, coin emojis for coin problems). Problems use both partition and quotative structures across 16 varied scenarios.

**Level 4 (Abstract)** removes the emoji manipulatives entirely. The learner is presented with multiplication and division equations — "3 × ? = 15" or "20 ÷ 4 = ?" — and must solve them without physical support. This level bridges the concrete and manipulative work of Levels 1–3 to the abstract computation that formal schooling requires.

A streak counter tracks consecutive correct answers, with award milestones at 2 (Rookie), 5 (Learner), 8 (Super Learner), and 10 (Pro). Audio uses Tone.js for click and drop sounds, and the Web Speech API for spoken problem narration. A mute button controls all audio sources.

---

## Learning Theory Connections

Math Investigator is the platform's most explicitly scaffolded game, and its four-level progression is closely aligned with constructivist learning theory.

The concrete-to-abstract progression across the four levels precisely follows Bruner's CPA model applied to division. Level 1 is the concrete stage: the learner physically manipulates objects by dragging them into groups. Level 2 is a transitional pictorial stage: the groups are given but the quantities must be inferred visually. Level 3 is the narrative-contextual stage: the concrete objects are still emoji (pictorial), but they now represent real-world objects in a story context, which is Bruner's enactive mode in its most pedagogically rich form. Level 4 is the abstract stage: symbols only, no physical support.

This progression is not merely cosmetic. It corresponds to a genuine theory of how understanding develops: learners build robust conceptual understanding through concrete action, then develop facility with pictorial representations of that understanding, and finally operate with abstract symbols that stand in for the concrete and pictorial stages. A learner who reaches Level 4 and can solve "20 ÷ 4 = 5" accurately is, in the best case, operating with a symbol string that connects back to a memory of having physically distributed 20 items into 4 equal groups.

The distinction between partition division and quotative division — used explicitly in Level 3's story problems — is pedagogically important and often neglected. Partition division ("share 15 among 3") asks how many are in each group; quotative division ("put 15 into groups of 3") asks how many groups. These are not simply two ways of stating the same operation; they are cognitively distinct, with research suggesting that young learners understand partition division earlier and more robustly. By addressing both, Level 3 builds a more complete conceptual model of division.

---

## The Instructional Design Perspective

Math Investigator is the platform's most carefully thought-through instructional sequence. The four-level scaffolding progression is the kind of learning design that reflects genuine understanding of how conceptual mathematics develops.

The RETAIN evaluation is strong. **Relevance**: high — Level 3's real-world contexts are specific and varied enough to be genuinely evocative rather than generic. Berries in baskets, apples for friends, coins in bags — these are authentic contexts for division, not arbitrary mathematical wrappers. **Embedding**: excellent — the dragging of emoji items into groups *is* the division operation, not a gate to it. **Transfer**: high — the progression from concrete to abstract, and the use of both partition and quotative structures, are specifically designed to support transfer to new division contexts. **Adaptation**: good — the four levels create a genuine scaffolding sequence, and award milestones add a motivational architecture.

The game's most significant instructional limitation is in Level 4's transition to abstract. Moving from emoji manipulation to symbol-only computation is a large step, and the game does not explicitly narrate the connection. A learner who struggles at Level 4 receives no support for reconnecting to the concrete foundation in Levels 1–3. A "hint" feature in Level 4 that temporarily restores the emoji representation would close this gap.

The streak-and-award system is well-calibrated for this game. The milestones (2, 5, 8, 10 correct answers) are achievable without being trivial, and the award labels (Rookie, Learner, Super Learner, Pro) are effort-framed — they suggest a progression of competence rather than natural ability. This is consistent with the growth mindset framing that educational research consistently associates with better outcomes in mathematics.

The mute button is the platform's best accessibility feature, included here but absent from many of the other games. Audio management — the ability to silence all game sounds — is essential for learners with sensory sensitivity and for classroom use where multiple learners may be playing simultaneously.

---

## The Game Development Perspective

The drag-and-drop emoji system in Math Investigator is the most carefully implemented drag interaction on the platform. The visual indicator that shows the emoji "following" the cursor during a drag interaction is clear and responsive; the group boxes provide clear visual feedback when an item is successfully dropped. The emoji matching — berry emojis for berry problems, coin emojis for coin problems — is a thoughtful detail that reinforces the narrative context and makes the concrete representation feel genuine rather than arbitrary.

The Tone.js implementation creates a satisfying micro-interaction soundscape: the brief click sound when an item is selected, the slightly different drop sound when it lands in a group box. These sounds are doing real UX work — they confirm the physical interaction without requiring the learner to look away from the drag target to verify that the action registered.

The spoken problem narration via Web Speech API is this game's most important accessibility feature. Division word problems are text-heavy; at Level 3, the problem statement includes a narrative context, a mathematical question, and often emoji labels. For learners who are not yet fluent readers, spoken narration makes the difference between being able to engage with Level 3 or being blocked by literacy demands.

The award shelf — the visual collection of earned award icons displayed permanently on screen — is a particularly effective motivational design. It provides visible evidence of cumulative achievement without being intrusive, and it creates a collector's logic that encourages continued play. This is the right kind of gamification: it acknowledges achievement without making achievement the point.

The celebration overlay on award milestones is proportionate and well-timed. It is visible and celebratory without being so disruptive that it breaks the game rhythm.

---

## Where They Agree and Where They Diverge

Both analysts consider Math Investigator the platform's strongest designed learning sequence. The four-level scaffolding progression is genuinely research-informed, and the game's narrative contexts are the platform's best example of relevant, varied real-world mathematical contexts.

The disagreement is about Level 4. Dube sees Level 4's abstract format as appropriate and necessary: learners who have worked through Levels 1–3 should be able to handle abstract equations, and the absence of manipulatives at Level 4 represents a genuine cognitive step up that the learner has been prepared for. Cohn agrees with the goal but is concerned about the execution: the transition from Level 3 to Level 4 should be accompanied by explicit scaffolding that connects the abstract equation to the concrete experience — a "bridge" moment that makes the transition visible. Without it, some learners will find Level 4 discontinuous with their experience of Levels 1–3 and may not recognise that the same mathematical operation is being performed.

---

## Joint Improvement Framework

**Quick wins**
- Add a mute button to all other games (it appears only in Math Investigator and should be platform-standard)
- Add a "hint" in Level 4 that restores the emoji representation of the problem, allowing the learner to return to the concrete support if the abstract form is unclear
- Narrate the level-transition between Level 3 and Level 4: a brief spoken explanation that "now we'll try without the pictures — but remember, we're still thinking about groups"

**Medium horizon**
- Add a Level 3 mode that explicitly presents both partition and quotative framings of the same number relationship (15 berries, 5 friends: how many per friend? vs. 15 berries, 3 per bag: how many bags?) to build explicit understanding of the two division structures
- Design a "build your own problem" feature for Level 1 where learners specify the number of items and groups — this is the kind of expressive mathematics engagement that the research associates with deep understanding

**Long horizon**
- Connect Math Investigator's Level 4 performance to a platform-level multiplication/division tracking system that identifies fluency with specific factor pairs and adjusts practice accordingly
- Develop a Level 5: Application, in which learners encounter division in multi-step problems and must select whether division or another operation is appropriate — the transition from computational fluency to problem-solving

---
