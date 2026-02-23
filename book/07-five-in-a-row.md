# Chapter 7: Five in a Row — Addition and Multiplication

---

## Game Snapshot

| | |
|---|---|
| **Type** | Turn-based strategy game |
| **Target grades** | K–2 (addition variants); Grades 3–4 (multiplication variants) |
| **Core math objective** | Arithmetic fact fluency — addition within 20 and multiplication tables |
| **Domain** | Operations and algebraic thinking |
| **Variants** | Stage 5: Addition within 20 / Stage 6: Extended addition / Stage 9: Multiplication / Stage 10: Extended multiplication |

---

## How It Works: Mechanics Analysis

Five in a Row is built on a 5×5 grid of numbers. At the bottom of the screen, the player holds a set of numbered clips — small tokens that can be selected in pairs. When two clips are selected, their sum (or product, depending on the variant) is calculated, and the player clicks the corresponding number on the board to place their marker. A player wins by placing five markers in a horizontal, vertical, or diagonal line.

The game introduces a strategic wrinkle that elevates it considerably above a basic flashcard wrapper: after each correct placement, the player must deselect one clip and receive a new one. This means the board state and the available clips are in continuous interplay. The player must calculate not just the current selected pair but consider which numbers on the board are available and which clips they should keep for future turns. The board is also algorithmically generated to guarantee that at least one valid square is available for each possible sum from the current clip set — there is no dead-end state.

Lives are tracked with three hearts displayed at the top of the screen. A life is lost for an incorrect answer, for a time-out on the per-turn timer, or for selecting a pair whose sum is not present on the board.

The timing structure is two-layered. Stage 5 runs a 3-minute game clock alongside a 20-second per-turn timer; Stage 6 uses a 15-minute game clock and a 3-minute per-turn timer — calibrated to account for the longer calculation time required by the extended addition range.

Audio feedback uses the Web Speech Synthesis API: the game speaks instructions aloud ("Welcome!"), responds verbally to game events ("That sum is not on the board"), and provides auditory confirmation of correct plays.

---

## Learning Theory Connections

Five in a Row represents the platform's strongest example of endogenous fantasy design. The mathematical operation — calculating a sum or product — is not a prerequisite for playing; it *is* playing. The learner cannot place a tile without doing the arithmetic. More importantly, because the game requires strategic thinking about *which* calculation to perform (selecting clips to target specific board positions), it demands a richer engagement with arithmetic than simply retrieving an answer to a given problem.

This design achieves what Malone and Lepper described as the ideal: the mathematics and the game mechanics are not separable. A child playing Five in a Row is not doing arithmetic in order to play a game; they are doing arithmetic *as* playing a game. The distinction matters for transfer and for motivation.

From a Cognitive Load Theory perspective, the game is admirably disciplined. The visual design is clean; the board is uncluttered; the clip area is legible. The strategic layer — choosing which clips to keep — adds germane load (productive mathematical thinking) without adding extraneous load. The board generation algorithm that prevents dead-end states removes a potential source of frustration and confusion.

The strategy layer also activates something important from a SDT perspective: genuine player agency. The choice of which clips to select is a real decision with real consequences; it is not the pseudo-choice of picking from options that are functionally identical. This satisfies the autonomy need in a way that most educational games do not.

---

## The Instructional Design Perspective

Five in a Row is the game on this platform that most clearly demonstrates what good educational game design looks like.

The integration between game mechanics and learning objectives is genuine and sophisticated. The board-clip system creates a mathematical problem that is richer than a standard fact retrieval task: the player must hold the board state in mind, select clips to target specific positions, and calculate — repeatedly, under mild time pressure, across a full game session. The cognitive demands are exactly those of the learning objective.

The RETAIN evaluation is strong across most dimensions. **Relevance**: moderate — the game is abstract (a grid of numbers is not a "real-world" context), but the strategic layer provides enough purpose for the arithmetic that it does not feel arbitrary. **Embedding**: high — the mathematics is the game. **Transfer**: moderate — the game builds fluency with specific fact types, but its competitive/strategic structure does not scaffold conceptual understanding of why these facts are true. **Adaptation**: moderate — the clip selection creates a form of player-driven adaptive difficulty, but there is no formal system for adjusting to the learner's current level. **Immersion**: high — the strategic layer creates genuine investment. **Naturalization**: high — repeated successful plays build toward automaticity.

The chief instructional concern is the lives system. Three hearts, lost for incorrect answers and turn timeouts, is a punitive structure for children who are genuinely practising arithmetic rather than performing mastery they already have. A child in Stage 5, practising addition within 20, will make errors — that is the point of practice. Losing a life for each error transforms practice into performance, which is the wrong frame for a learner who is still building competence. The game would be served by either removing the lives system entirely or making it more forgiving (five hearts; lives lost only for turn timeouts, not incorrect answers).

The per-turn timer in Stage 5 — 20 seconds — is the game's most questionable element from an instructional standpoint. For a child practising addition within 20, 20 seconds is adequate for a fluent learner and anxiety-inducing for a developing one. The timer cannot distinguish between a child who is working through the calculation correctly but slowly and one who has simply forgotten. Both lose a life.

---

## The Game Development Perspective

Five in a Row is the most mechanically sophisticated game on the platform and arguably the most fun to play. The five-in-a-row win condition is immediately legible — children understand Noughts and Crosses (Tic-Tac-Toe) and its spatial logic — and the extension to a 5×5 grid with a more complex input mechanism feels like a natural upgrade rather than an arbitrary complication.

The clip selection mechanic is genuinely clever. It introduces player agency into what could have been a purely reactive experience. The player is not just answering questions; they are choosing *which* question to answer, based on the board state and strategic goals. This is the kind of mechanical depth that keeps players returning.

The algorithm that guarantees a valid board square for each possible sum from the current clips is sophisticated and essential. It prevents the frustrating dead-end state (no valid move available) without sacrificing the genuine strategic tension between choosing clips for their mathematical sum and choosing them for their strategic board position.

The audio implementation using Web Speech Synthesis is a practical choice that works well. The spoken feedback ("That sum is not on the board") is clearly preferable to a silent visual-only error state, and it serves the literacy accessibility requirement for younger learners.

The visual design is clean and reads well at a glance. The board is uncluttered; the clips are legible; the hearts and timer are clearly visible without dominating the interface.

From a UX standpoint, the primary concern is the touch target size for the board numbers. On a 5×5 grid rendered at typical tablet dimensions, the individual cells are at the lower boundary of comfortable touch target sizing for young children. Any reduction in screen size — a smaller tablet, a phone — risks pushing the cells below the 60×60 pixel minimum for reliable child interaction.

---

## Where They Agree and Where They Diverge

Cohn and Dube agree that Five in a Row is the platform's strongest game design: it is the clearest example of endogenous learning integration, and the strategic layer elevates it above fact-recall practice into genuine mathematical thinking.

The point of divergence is the lives system. Dube notes that lives are a standard, expected mechanic in games of this type; their removal would make the game feel less game-like and might reduce the felt stakes that contribute to the strategic tension. From a pure engagement perspective, the three-hearts system is a reasonable choice.

Cohn's position is that the learning context changes the calculus. In a commercial game, losing lives is an acceptable challenge mechanism because the game's purpose is entertainment. In an educational game explicitly targeting learners who are still building arithmetic fluency, penalising errors with life loss creates a punitive frame around the very activity the game is designed to support. The solution — a five-heart system that tolerates errors without immediate game-over risk — preserves the felt stakes while reducing the punitive pressure.

---

## Joint Improvement Framework

**Quick wins (no architectural change required)**
- Increase hearts from three to five to reduce punitive pressure on developing learners
- Add a grace period for the per-turn timer (perhaps a "slow" mode with a 40-second turn timer) accessible from the start screen
- Increase the touch target size of board cells by 20–30% through layout adjustments

**Medium horizon (meaningful redesign)**
- Introduce a two-player competitive mode: the game's five-in-a-row mechanic is naturally suited for head-to-head play, and cooperative/competitive social elements are consistently associated with stronger learning outcomes
- Add a conceptual scaffolding screen before Stage 9 (multiplication) that connects the multiplication facts to the area model or repeated addition — the game assumes multiplicative fluency but does not build it

**Long horizon (requires platform-level change)**
- Replace the fixed 3-minute game clock with an adaptive session length that responds to the learner's current accuracy: if performance is strong, the timer creates appropriate pressure; if performance is weak, extend the window
- Integrate with a platform-level mastery tracking system so that the game's clip range is automatically calibrated to the learner's current level of arithmetic fact fluency

---
