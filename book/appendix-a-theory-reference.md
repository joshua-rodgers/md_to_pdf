# Appendix A: Learning Theory Quick Reference

---

A condensed reference for the theoretical frameworks used throughout this book. For fuller treatment, see the chapters indicated.

---

## Constructivism (Chapter 2)

**Core claim**: Learners construct knowledge through experience and interaction; they do not passively receive it.

**Key theorists**: Jean Piaget (cognitive constructivism); Lev Vygotsky (social constructivism); Jerome Bruner (scaffolding; CPA)

**Key concepts for game design**:
- *Schema*: Mental structure for organising knowledge. New information is either assimilated (fitted to existing schema) or accommodates a schema update.
- *Zone of Proximal Development (ZPD)*: The gap between independent competence and supported competence. Games should target the ZPD, not current independent performance.
- *Scaffolding*: Temporary support that enables learning in the ZPD, progressively faded as competence develops.
- *CPA progression*: Concrete → Pictorial → Abstract. The recommended learning sequence for mathematical concepts.

---

## Cognitive Load Theory (Chapter 2)

**Core claim**: Working memory is severely limited; learning is encoding into long-term memory as schemas. Bad design creates cognitive overload that prevents encoding.

**Key theorist**: John Sweller (1988)

**Three load types**:
- *Intrinsic*: The inherent complexity of the content. Cannot be reduced, but can be managed through sequencing.
- *Extraneous*: Load from poor design — irrelevant information, visual clutter. Should be minimised.
- *Germane*: Load devoted to schema construction — productive mental effort. Should be maximised.

**Key implication for children**: Young learners have smaller working memory capacity than adults. Designs that adults find "simple" may overwhelm a six-year-old.

---

## Flow Theory (Chapter 2)

**Core claim**: Optimal engagement (flow) occurs when challenge precisely exceeds skill. Below this point: boredom. Above it: anxiety.

**Key theorist**: Mihaly Csikszentmihalyi (1990); operationalised for games by Jenova Chen (2006)

**Key implication for game design**: Static difficulty levels can only achieve flow for learners at one specific ability level. Adaptive difficulty adjustment (DDA) is the technical mechanism for maintaining the flow channel across a range of learner abilities.

---

## Self-Determination Theory (Chapter 2, Chapter 4)

**Core claim**: Sustained motivation and well-being require satisfaction of three basic psychological needs.

**Key theorists**: Edward Deci and Richard Ryan (2000)

**Three needs**:
- *Autonomy*: Sense of self-determination in actions. Supported by genuine choice.
- *Competence*: Sense of effectiveness and capability. Supported by appropriate challenge and clear progress.
- *Relatedness*: Sense of connection to others. Supported by social and collaborative elements.

**Motivational continuum**: External regulation → Introjection → Identification → Integration → Intrinsic motivation. Well-designed games scaffold movement along this continuum toward intrinsic motivation.

**Key implication for gamification**: Points and badges that satisfy competence needs without undermining autonomy can support intrinsic motivation. Controlling, competitive systems that thwart autonomy produce demotivation.

---

## The Endogenous/Exogenous Fantasy Distinction (Chapter 1)

**Core claim**: Educational games in which the learning content *is* the game mechanics produce better learning transfer than games in which the content is attached to but separable from the game.

**Key theorists**: Malone and Lepper (1987); Habgood, Ainsworth and Benford (2005 — "intrinsic integration")

**Test question**: Could you replace the learning content with different content (different subject area, different facts) without fundamentally changing the game? If yes, the game is exogenous. If no, it may be endogenous.

---

## MDA Framework (Chapter 3)

**Core claim**: Games can be formally analysed as three interrelated layers: Mechanics (rules), Dynamics (emergent behaviour), Aesthetics (experienced quality). Designers work from mechanics; players experience from aesthetics.

**Key theorists**: Hunicke, LeBlanc, Zubek (2004)

**Extension for educational games**: Add Learning Objectives as a fourth layer. Mechanics must align with learning goals, not just generate enjoyable dynamics.

---

## RETAIN Model (Chapter 3)

**Six evaluation criteria for educational game design** (Gunter, Kenny & Vick, 2008):
- *Relevance*: Content connects to learners' lives and prior knowledge
- *Embedding*: Learning, fantasy, and gameplay are integrated
- *Transfer*: Content knowledge transfers to novel contexts
- *Adaptation*: Game supports Piagetian assimilation and accommodation
- *Immersion*: Player is intellectually engaged
- *Naturalization*: Game builds toward fluency/automaticity

---

## Stealth Assessment (Chapter 2)

**Core claim**: Assessment in educational games should be invisible to the learner — embedded in gameplay behaviour, not interrupting it.

**Key theorist**: Valerie Shute and colleagues (2013, MIT Press)

**Method**: Evidence-centred design (ECD) captures gameplay behaviours, infers competency, and adjusts content — without the learner experiencing assessment as distinct from play.

---

## Spaced Repetition (Chapter 2)

**Core claim**: Review scheduled at expanding intervals (just before forgetting occurs) produces superior long-term retention compared to massed practice.

**Basis**: Ebbinghaus forgetting curve research (1885); operationalised by Wozniak's SuperMemo algorithm

**Tension for game design**: Spaced repetition is inherently repetitive. Varied game contexts for spaced review — different mechanics testing the same content — are the research-informed resolution.

---

## Feedback Taxonomy (Chapter 2)

| Type | Content | Learning effectiveness |
|---|---|---|
| Knowledge of Results (KR) | Correct / incorrect only | Minimal |
| Knowledge of Correct Response (KCR) | Shows correct answer | Moderate |
| Elaborated Feedback (EF) | Explains reasoning and process | Highest |
| Confirmatory | Validates correct responses | Motivational |
| Corrective | Identifies error, guides correction | Learning-generative |

For K–6 mathematics: default to immediate elaborated feedback. For complex problem-solving: consider delayed prompted reflection.

---
