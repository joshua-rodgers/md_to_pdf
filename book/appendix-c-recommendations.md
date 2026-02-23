# Appendix C: Consolidated Design Recommendations

---

The following lists organise all recommendations from the case study chapters and Chapter 18 by priority tier. Items within each tier are listed in estimated impact order (highest first).

---

## Tier 1: High Impact, Low Development Effort

*Can be implemented by modifying existing game code; no new architecture required.*

1. **Add elaborated audio feedback on incorrect answers** (all games). Speak the correct answer and a brief explanation. Uses existing Web Speech API integration. *(Impact: High — most important single instructional improvement)*

2. **Increase lives from 3 to 5** (Five in a Row, Capture Squares, Number Line, Rumble). Tolerates learning errors without game-over consequences. *(Impact: High — reduces anxiety barrier)*

3. **Add a mute button** to every game. Currently only Math Investigator has one. *(Impact: Medium-High — accessibility baseline)*

4. **Convert numerical countdown timers to visual bar/arc timers** (Five in a Row per-turn timer). Reduces anxiety trigger while preserving pacing function. *(Impact: Medium — anxiety mitigation)*

5. **Remove life loss for incorrect placement in Number Line** — replace with try-again. *(Impact: Medium — estimation should not be penalised as recall is)*

6. **Display calculated result before board interaction** (Capture Squares). Show "17 − 8 = 9" for 1–2 seconds before requiring line placement. *(Impact: Medium — elaborated feedback moment)*

7. **Add per-click rectangle validation** during building phase (Rumble). Green/amber border indicating whether current selection is valid. *(Impact: Medium — reduces confusing error states)*

8. **Remove stage numbering in Fraction Scouts.** Mission labels (Shape Mission, Exchange Mission, Number Line Mission) without implied required sequence. *(Impact: Low-Medium — removes false sequence constraint)*

9. **Add spoken fraction pronunciation** alongside all fraction notation (Fraction Scouts). *(Impact: Low-Medium — vocabulary support)*

10. **Make Target Numbers' instruction speaker icon more prominent.** Add pulse animation on first launch. *(Impact: Low — discoverability)*

---

## Tier 2: Meaningful Impact, Moderate Development Effort

*Requires new feature design and implementation but no platform-level architectural change.*

11. **Narrated game introductions for every game.** 30-second interactive tutorial on first launch. Standard for children's educational software. *(Impact: High — addresses first-session drop-off)*

12. **Add a Level 4 hint in Math Investigator** that restores the emoji representation. *(Impact: Medium-High — scaffolds the concrete-to-abstract transition)*

13. **Design a two-player mode for Five in a Row.** The game's mechanics are naturally suited for head-to-head play; social elements consistently improve learning outcomes. *(Impact: High — adds the social dimension missing from all single-player games)*

14. **Add session-end "optimal configuration" comparison in Target Numbers.** Show player's choices alongside the best available configuration with brief explanatory text. *(Impact: Medium-High — turns the game's most instructionally rich moment into an explicit learning opportunity)*

15. **Add narrated level-transition bridging in Math Investigator** between Levels 1, 2, 3, and 4. *(Impact: Medium — explicitly scaffolds the CPA progression)*

16. **Design an optional real-world narrative layer for Rumble** (floor tiling, garden design) that can be enabled by teacher/parent. *(Impact: Medium — adds contextual relevance to the area model)*

17. **Add tap-to-place as an alternative to drag-and-drop** (New Math App). Preserves intentional placement without requiring sustained fine motor control. *(Impact: Medium — accessibility for youngest users)*

18. **Implement basic session logging** in the database. Record game, stage, and summary performance per session. *Prerequisite for items 24–26.* *(Impact: High — enables all adaptive and tracking features)*

19. **Add a "build your own problem" mode in Math Investigator Level 1.** Learner specifies number of items and groups. *(Impact: Medium — expressive mathematical engagement)*

20. **Design explicit regrouping onboarding** in Math Blocks and Math Blocks II. Narrated, animated demonstration of the regrouping operation. *(Impact: Medium — addresses the tools' main instructional gap)*

---

## Tier 3: High Value, Significant Investment

*Requires new infrastructure, architectural additions, or new game development.*

21. **Build a parent/teacher dashboard** on the existing database. Session timeline with summary accuracy data. Requires item 18 first. *(Impact: Very High — unlocks instructional use in schools)*

22. **Design a "Where to start?" guide** — a five-question tool that recommends games and stages for a given learner. *(Impact: High — dramatically improves usability for parents and teachers)*

23. **Implement rule-based adaptive difficulty adjustment** within games. Adjust difficulty parameters in response to recent session accuracy. Requires item 18 first. *(Impact: Very High — most impactful learning improvement)*

24. **Develop data and statistics games** (Grades 2–5). Bar charts, pictographs, tally charts. The platform's most significant curriculum gap. *(Impact: High — fills absent curriculum strand)*

25. **Develop measurement games** (Grades 1–4). Clock reading, duration, length comparison. High real-world relevance, absent from current platform. *(Impact: High — fills absent curriculum strand)*

26. **Develop a multi-step problem-solving game** (Grades 3–6). Operation selection and sequential reasoning. The critical transition from computation to mathematical thinking. *(Impact: Very High — addresses the highest-order mathematical competency)*

27. **Implement a collaborative/two-player mode for Target Numbers.** Two players each hold a subset of digit cards and must coordinate placement to reach the target. *(Impact: Medium — adds social dimension to the platform's most intellectually rich game)*

28. **Design stealth assessment** for arithmetic fact fluency and place value understanding. Real-time performance monitoring that informs adaptive difficulty without interrupting play. *(Impact: High — transforms the platform from practice tool to learning measurement system)*

---
