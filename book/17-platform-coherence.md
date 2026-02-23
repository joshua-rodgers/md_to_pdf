# Chapter 17: Platform Coherence — Do the Games Work as a Curriculum?

---

The ten games in this platform have been examined individually. Now the question shifts: do they work together? Is the collection more than the sum of its parts? And what is missing?

---

## 17.1 The Curriculum Coverage Question

The platform addresses the following primary mathematics curriculum strands:

| Strand | Covered by |
|---|---|
| Counting and cardinality | Math Blocks II (emoji counting), New Math App |
| Place value (2–7 digit numbers) | Math Blocks, Math Blocks II, New Math App, Number Line, Target Numbers |
| Addition | Math Blocks, Math Blocks II, New Math App, Five in a Row, Target Numbers |
| Subtraction | Math Blocks, Math Blocks II, New Math App, Capture Squares, Target Numbers |
| Multiplication | Five in a Row (multiplication variants), Capture Squares (stages 5–7), Rumble, Math Investigator (Level 4), Target Numbers |
| Division | Math Investigator, Target Numbers (division stage) |
| Fractions | Fraction Scouts |
| Estimation | Number Line, Target Numbers |
| Area | Rumble |

The coverage is reasonably broad for the operations strand and for place value. Fractions have dedicated treatment. Estimation is addressed in two games with genuinely different approaches.

**What is missing.** The platform does not address:

- **Data and statistics** — collecting, organising, displaying, and interpreting data (charts, graphs, tables). This is a curriculum strand in every national primary mathematics framework and is entirely absent from the platform.
- **Measurement** — length, mass, volume, time, and temperature. Area appears (Rumble), but no other measurement dimension is present. Time (reading clocks, duration) and length (comparing, measuring) are foundational skills with significant real-world relevance and would be natural additions.
- **Geometry beyond area** — shape properties, spatial reasoning, symmetry, angles. The platform's only geometric content is the rectangular area model in Rumble.
- **Algebraic thinking at the structural level** — patterns, functions, equations with unknowns. Target Numbers approaches this at the edges (what digit arrangement produces a result near 1,000?), but no game explicitly addresses the algebraic thinking strand that most curriculum frameworks include from Grade 3 onward.
- **Problem-solving with multiple steps** — all of the platform's games test single-step or two-step operations. The research on primary mathematics identifies multi-step problem-solving (choose the right operation, apply it correctly, interpret the result in context) as the critical transitional skill for upper primary and secondary mathematics readiness.

These gaps are not minor. A student who uses this platform extensively through Grades 1–5 will have developed strong computation and place value skills, moderate estimation ability, and a conceptual foundation for fractions. They will have received essentially no game-based support for data interpretation, measurement, geometry, or problem-solving — strands that together represent roughly half of any standard K–6 mathematics curriculum.

---

## 17.2 Vertical Alignment: Does Difficulty Progress Sensibly?

Vertical alignment asks whether a learner can move through the platform's games in a sequence that provides appropriate challenge at each stage of their development. The analysis here identifies both strengths and significant gaps.

**Strengths.** The Math Blocks suite (Math Blocks II → New Math App → Math Blocks) provides a well-scaled progression through place value from Kindergarten to Grade 6. Math Investigator's four levels (guided → visual → story → abstract) represent the most carefully designed internal progression in the platform. The six stages of Target Numbers, while varying in difficulty, provide a genuine scope expansion across operations.

**Weaknesses.** There is no explicit cross-game developmental pathway. The platform presents its games as independent options rather than as a curriculum sequence. A parent or teacher who wants to know "what should my Grade 2 student start with, and where should they progress?" receives no guidance from the platform. There is no recommended pathway; there is no "you're ready for this next game" signal; there is no shared vocabulary about what a learner has mastered and what they should work on next.

This absence of vertical guidance is a significant usability gap. The platform's games are good; the platform as a curriculum framework is underdeveloped.

---

## 17.3 Horizontal Coherence: Do the Games Reinforce Each Other?

Horizontal coherence asks whether games at the same developmental level reinforce and extend each other, or operate as isolated experiences.

The answer is: predominantly isolated. Five in a Row, Capture Squares, and the multiplication stages of other games all address multiplication fact fluency — but they use entirely different mechanics, contexts, and representations without any explicit connection. A learner who practises 7×8 in Five in a Row, then in Capture Squares, then in Math Investigator Level 4, is practising the same fact in three contexts — but the platform provides no mechanism to track this consistency, no feedback that connects the experiences, and no scaffolding that uses performance in one game to inform difficulty in another.

The most significant incoherence is between the place value tools (Math Blocks, Math Blocks II, New Math App) and the operations games (Five in a Row, Capture Squares). Place value understanding is prerequisite to multi-digit arithmetic; the three tools build it, and the operations games use it. But there is no connection between them. A learner who has not yet developed solid two-digit place value understanding will struggle with extended addition in Five in a Row — but the game has no way to know this, and the platform provides no pathway that says "master two-digit place value in Math Blocks before attempting Stage 6 addition in Five in a Row."

---

## 17.4 The Absence of Adaptive Learning

This is the platform's most significant architectural limitation, and it is worth addressing directly.

Adaptive learning systems dynamically adjust content difficulty, problem selection, and scaffolding intensity in response to measured learner performance. A learner who is demonstrating mastery of multiplication tables 2–5 but struggling with 6–9 should be offered more 6–9 problems and fewer 2–5 problems; the platform's games, as currently designed, do not know this.

The research on adaptive game-based learning is unambiguous: adaptive games produce significantly higher learning outcomes than non-adaptive incremental difficulty games, because they keep learners in the flow channel — appropriately challenged rather than bored or overwhelmed. A 2013 study in *Computers & Education* found that adaptive difficulty produced superior learning and sustained motivation compared to fixed difficulty levels across a range of educational game types.

The platform currently offers *player-controlled* difficulty selection — learners choose their stage from a menu — but not *system-driven* adaptive difficulty. Player-controlled selection respects autonomy but does not guarantee appropriate challenge: children systematically select stages that are either too comfortable or too ambitious, and the platform provides no guidance to correct this.

The path toward adaptive learning does not require a complete architectural overhaul. It begins with measurement: tracking learner performance within each game, storing it across sessions (a simple database extension to the existing SQLite layer), and using it to inform recommended starting points. The data is already generated; it is currently discarded at session end.

---

## 17.5 The Teacher and Parent Role

The platform's current design positions it as a child-directed learning tool: the learner selects a game, plays it, and moves on. The teacher or parent's role is undefined.

This is a significant missed opportunity. The research on GBL consistently shows that games embedded in instructional sequences — where a teacher introduces a concept, students practise it through a game, and the teacher debriefs the experience — produce substantially stronger outcomes than games used as independent activities without instructional context. Games are most powerful when they are embedded in a broader learning conversation, not deployed as standalone entertainment.

The platform would benefit enormously from a teacher/parent interface that:
- Recommends games based on the learner's current curriculum unit
- Provides session summaries with performance data after each session
- Suggests instructional activities (discussion questions, physical manipulative work, homework problems) that complement the game experience
- Allows teachers to assign specific games and stages to specific learners

None of this requires game redesign. It requires a data layer that records what learners do, and an interface layer that makes that data useful to the adults who are guiding the learner's mathematical development.

---
