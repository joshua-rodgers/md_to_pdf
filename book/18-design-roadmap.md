# Chapter 18: A Design Roadmap — Recommendations Across Three Horizons

---

The preceding chapters have generated dozens of specific design recommendations. This chapter organises them into three time horizons — quick wins, medium-horizon improvements, and long-horizon aspirations — and identifies the most high-leverage interventions at each level.

---

## 18.1 Quick Wins: Implementable Without Architectural Change

These recommendations require only modification of existing game code and can be implemented in sequence without coordination between games.

**Universal changes across all games**

1. **Add a mute button to every game.** Currently only Math Investigator has one. A universal mute control is an accessibility baseline that all games should meet. It is a single UI element with straightforward JavaScript; the only variable is where in the interface it sits consistently.

2. **Replace three-heart systems with five-heart systems across all games that use lives.** The extra two hearts transform lives from a punitive pressure system into a safety net that tolerates learning errors without game-over consequences. This change can be made in each game's configuration without affecting mechanics.

3. **Add per-attempt elaborated feedback for incorrect answers.** Every game currently provides correct/incorrect confirmation. Adding a one-line spoken explanation of the correct answer ("7 × 8 is 56 — that's 7 groups of 8") after an error is the single highest-impact instructional improvement available across the platform. The Web Speech API already in most games makes this straightforward to implement.

4. **Ensure timer displays are visual, not numerical, wherever possible.** The Number Line game's visual timer is the platform's best timer implementation. Capture Squares' animated timer bar is good. Five in a Row's numerical countdown should be converted to a visual arc or depleting bar.

**Game-specific quick wins**

5. **Five in a Row**: Grace-period mode with extended per-turn timer accessible from start screen.

6. **Capture Squares**: Display the calculated result for 1–2 seconds before requiring board-line drawing. Show correct answer on error before proceeding.

7. **Number Line**: Expand the acceptance window for correct placement; remove life loss for incorrect placement in favour of a retry mechanic.

8. **Math Blocks**: Add Tone.js audio for block interactions; narrate regrouping concept on first encounter.

9. **Math Investigator**: Add Level 4 hint that restores emoji representation; narrate the Level 3-to-Level 4 transition.

10. **Rumble**: Add per-click rectangle validation during building phase.

11. **Target Numbers**: Make the instruction speaker icon more prominent; enlarge and pulse on first launch.

12. **Fraction Scouts**: Remove stage numbering (Stage 1, 2, 3) in favour of mission-name-only labels; add spoken fraction pronunciation alongside all fraction notation.

---

## 18.2 Medium Horizon: Meaningful Redesign

These recommendations require more significant development investment but do not require architectural changes to the platform's core structure.

**Onboarding and navigation**

13. **Design brief game introductions for every game.** Currently most games begin with a "How to Play" collapsible section; many learners will not read it. A 30-second interactive tutorial that demonstrates the first interaction — ideally narrated — should run on first launch of each game. This is the standard for successful children's educational apps.

14. **Add a platform-level "Where to start?" guide.** A simple tool (five questions about the learner's age and current curriculum topics) that recommends two or three games and specific difficulty levels would dramatically improve the platform's usability for parents and teachers who are unfamiliar with the games.

15. **Design a recommended learning pathway for each grade level.** A visual "curriculum map" showing which games address which Grade 1, 2, 3, etc. objectives, with recommended stage levels, gives the platform the curriculum coherence that individual game quality alone cannot provide.

**Game redesigns**

16. **Five in a Row: Add a two-player competitive mode.** The Dots-and-Boxes structure of Five in a Row is ideally suited for head-to-head play. Two players, same board, competing clip sets, alternating turns — this design would add the social dimension the research consistently associates with stronger learning outcomes, and it does not require fundamental changes to the game mechanics.

17. **Math Investigator: Add explicit conceptual bridging at each level transition.** The transitions between Levels 1–4 represent the platform's strongest scaffolding sequence, but they currently lack narrated bridging. A brief animated transition — "Now let's try the same idea without the pictures" — would make the scaffold-fading explicit and reduce discontinuity for learners.

18. **Rumble: Introduce an optional real-world narrative layer.** The area model has direct real-world applications (floor tiling, garden design, room layout) that would give the game's rectangle-building mechanic contextual relevance. An optional "context mode" toggled by the teacher or parent would serve this purpose.

19. **Target Numbers: Implement session-end comparison with optimal configurations.** The analytical recommendation from Chapter 15: show what the player did alongside what was possible, with brief explanatory text. This is the game's highest-leverage instructional moment.

**Platform-level infrastructure**

20. **Implement basic session logging.** Record which game was played, which stage/level, and summary performance data (correct vs. incorrect, completion rate) per session. Store in the existing SQLite database. This requires no AI or adaptive logic — just a simple logging call at session end. It is the prerequisite for everything else.

21. **Build a parent/teacher dashboard.** A simple read-only view of the session log for a given learner — presented as a timeline of games played with summary accuracy data — gives teachers and parents the visibility they need to guide learner progression.

---

## 18.3 Long Horizon: Architectural and Platform-Level Aspirations

These recommendations represent the platform's long-term development potential. They require significant investment but would transform the platform from a collection of good games into a genuinely adaptive learning system.

**Adaptive difficulty**

22. **Implement within-game adaptive difficulty adjustment.** Using the session log data from recommendation 20, each game's difficulty parameters — timer length, problem complexity, scaffold intensity — are adjusted in response to recent performance. Correct ≥80% on current stage → increase difficulty; correct ≤50% → decrease. This is a simple rule-based implementation before machine learning is needed, and it would produce measurable learning gains.

**Stealth assessment**

23. **Design stealth assessment for the platform's three core skill areas** — arithmetic fact fluency (Five in a Row, Capture Squares), place value understanding (Math Blocks suite), and operational flexibility (Target Numbers). Stealth assessment in these areas would mean monitoring not just right/wrong answers but response time patterns, error type distributions, and retry behaviour — generating inferred competency estimates that update in real time and inform difficulty adjustment and recommendation.

**Missing content**

24. **Develop data and statistics games.** The most significant curriculum gap. A data interpretation game — display a bar chart or pictograph and ask questions about it — could be built as a standalone blueprint within the existing architecture. Target audience: Grades 2–5.

25. **Develop measurement games.** Time (reading analogue and digital clocks; calculating duration) and length (measuring, comparing, converting) are both addressable through interactive canvas-based mechanics that would integrate well with the platform's existing visual vocabulary.

26. **Develop a multi-step problem-solving game.** The most educationally ambitious long-horizon recommendation: a game in which the mathematical challenge is not "calculate 7 × 8" but "you have 48 counters and want to arrange them in rows of 8 — how many rows? Now you add another 16 counters — how many rows now?" Multi-step problems requiring operation selection and sequential reasoning represent the transition from computational fluency to mathematical thinking.

**Social learning**

27. **Implement a two-player or classroom mode for Five in a Row and Target Numbers.** These two games are the most naturally suited to competitive or collaborative social play. Research consistently shows that social game elements — even minimal ones like taking turns with the same device — are associated with stronger learning outcomes and greater motivation.

---

## 18.4 Equity and Access

The platform is a browser-based application accessible on any device with a modern web browser. This is a meaningful accessibility choice: it does not require app store approval, device-specific installation, or subscription fees. The platform is available to any learner with internet access and a device capable of running a browser.

The equity concerns are more subtle.

**Language access.** The platform is English-only. Web Speech Synthesis supports many languages; the core audio accessibility infrastructure is already present. Extending instruction narration to other languages would expand access for learners in multilingual households without requiring translation of the full interface.

**Device access.** Several games are designed primarily for tablet and desktop interaction. Phone-screen use is technically possible but UX-challenging, particularly for games that require precise placement (Number Line, Rumble) or drag interactions (New Math App, Math Investigator). A phone-first responsive redesign of at least the core games would expand access for learners who have smartphone access but not tablet or desktop access — a significant portion of lower-income households.

**Teacher access.** The platform's value for classroom use is currently limited by the absence of teacher-facing tools. A teacher in a school where this platform is available is largely on their own in figuring out how to incorporate it into instruction. Teacher professional development materials — a simple PDF guide to each game, with recommended grade levels, suggested instructional contexts, and discussion questions — would dramatically improve the platform's classroom utility without requiring any software development.

---
