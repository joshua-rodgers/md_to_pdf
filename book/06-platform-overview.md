# Chapter 6: The Platform at a Glance

---

Before the case studies begin, it is worth establishing what kind of thing this platform is — its educational context, its technical architecture, and the design decisions it has made at the platform level that shape every game within it.

---

## 6.1 What the Platform Is

The platform is a collection of browser-based mathematics games, built as a Flask web application and designed for use in primary school classrooms and at home. Its games span the core mathematics curriculum from Kindergarten through approximately Grade 6, covering:

- **Number sense and counting** (number recognition, one-to-one correspondence, cardinality)
- **Arithmetic operations** (addition, subtraction, multiplication, division)
- **Place value** (units, tens, hundreds; regrouping and decomposition)
- **Fractions** (identification, equivalence, number line placement)
- **Estimation** (rounding, target proximity, flexible calculation)
- **Area and geometry** (rectangular area as a model for multiplication)

The platform does not currently cover data and statistics, measurement (beyond area), algebraic reasoning, or geometry beyond area models. These gaps are noted here and will be returned to in Chapter 17.

The games are accessible through a browser without installation and are designed to function on tablets and desktop computers. Several games include explicit mobile optimisation, with touch-specific interaction modes and viewport adjustments for smartphone use.

---

## 6.2 The Flask Blueprint Architecture

The platform is built as a Flask application in which each game is implemented as a separate Blueprint — Flask's modular application component that packages a game's routes, templates, and static files into a self-contained unit. This architecture is pedagogically significant as well as technically sound.

Each blueprint is fully independent: a game can be added, removed, or modified without affecting other games. This modular structure means the platform can grow incrementally — new games can be developed and integrated without architectural changes to existing ones. It also means, as we will note in Chapter 17, that there is no shared state between games: no cross-game progression tracking, no platform-level mastery database, no inter-game recommendation engine.

The database layer (SQLite, accessed through a shared `database.py` module) provides storage for game metadata, settings, and collection organisation — the platform's administrative layer — but does not track individual learner progress or performance within games. Learning happens in session; nothing persists to inform the learner's next session across different games.

---

## 6.3 Shared Technologies Across the Platform

Several technical choices recur across the platform's games and will appear repeatedly in the case studies.

**Tone.js** is a Web Audio framework for browser-based sound synthesis. Multiple games on the platform use Tone.js to generate mathematical feedback sounds — correct-answer tones, error signals, and celebratory audio — programmatically rather than using prerecorded audio files. This is a technically sophisticated choice that allows for pitch-accurate, latency-minimal audio without audio file loading overhead. The educational value of audio feedback in children's software is well-established (Chapter 5); Tone.js is an excellent implementation choice.

**HTML5 Canvas** is used for the platform's most visually complex games — those requiring custom drawing surfaces, grid rendering, or continuous animation that cannot be achieved with standard DOM elements. Several case studies will examine games that use Canvas for their core gameplay surfaces.

**Tailwind CSS** provides the utility-first styling framework that several games use for layout and visual design. Its use produces consistent, responsive layouts across the platform with relatively low development overhead.

**Web Speech API** — the browser-native text-to-speech interface — appears in some games as a mechanism for reading instructions or mathematical content aloud. Where it is used, it provides an important accessibility benefit; where it is absent, particularly in games targeting early readers, that absence will be noted.

**jsconfetti** is used in several games for the confetti particle celebration effect that marks level completion or game victory. This is a low-effort, high-impact moment of positive reinforcement — exactly the kind of proportionate celebration that children's UX research supports.

---

## 6.4 Common Design Patterns Across the Platform

Several design patterns recur across multiple games, creating a platform-level design vocabulary. Some of these patterns are strengths; some are limitations.

**Stage-based progression** is the dominant structure. Most games offer three to seven difficulty stages, with each stage targeting a specific mathematical scope (e.g., "addition within 10," "multiplication facts: 2s and 3s," "fractions with denominators 2–6"). Progression between stages is typically player-controlled: the learner selects a stage from a menu. This is an autonomous, self-regulated model that respects the learner's sense of their own competency — aligned with SDT's autonomy principle — but it means the game cannot guarantee that learners are working at an appropriately challenging level, since children often select stages that are too easy (familiar and comfortable) or too hard (ambitious beyond current fluency).

**Immediate visual and audio feedback** is consistent across the platform. Correct answers produce positive signals (green highlighting, ascending tones, animation) and incorrect answers produce distinct but non-punitive signals (different visual states, lower tones). The emotional register of the feedback is generally appropriate — celebration without alarm.

**Hearts/lives mechanics** appear in several games. This is the platform's most consistent design vulnerability from a learning-science perspective. As examined in Chapter 4, lives mechanics activate loss aversion and can create punitive failure experiences for anxious learners.

**Countdown timers** appear in several games. Again, as Chapter 4 established, this is the platform's second major consistent design vulnerability — one that requires careful assessment in each case study to determine whether the timer's context makes it appropriate or harmful.

**Confetti and celebration** on completion is present across most games and represents a consistent strength: positive reinforcement for task completion that is proportionate, brief, and emotionally appropriate.

---

## 6.5 The Two Expert Lenses in Part II

Part II analyses ten games in sequence. Each case study follows a consistent structure:

**Game Snapshot**: The game type, target age range, core mathematical objective, and the domain covered.

**Mechanics Analysis**: What the player actually does, broken down using the MDA framework.

**Learning Theory Connections**: Which aspects of the theoretical foundations in Part I this game's design engages, and how well.

**The Instructional Design Perspective**: Cohn's analysis, weighted toward the learning science — RETAIN evaluation, feedback quality, transfer potential, developmental appropriateness.

**The Game Development Perspective**: Dube's analysis, weighted toward the player experience — UX quality, engagement mechanics, interface design, technical implementation.

**Where They Agree and Where They Diverge**: The moments of convergence and disagreement between the two perspectives.

**Joint Improvement Framework**: Actionable design recommendations, organised as quick wins (implementable without major changes), medium-horizon improvements (requiring meaningful redesign), and long-horizon aspirations (requiring architectural or platform-level change).

---

## 6.6 A Note on What This Platform Gets Right Before We Begin

The case studies will identify specific weaknesses, missed opportunities, and areas for improvement. It is worth establishing, before that analysis begins, what the platform demonstrably does well — because these strengths are not incidental. They represent deliberate design decisions that are worth understanding as such.

The platform is made by an educator. This is visible throughout: the mathematical content is well-chosen, accurately sequenced, and genuinely curriculum-aligned. There are no mathematical errors. The scope of each game is appropriate to its target grade level. The range of topics covered represents a coherent, if incomplete, slice of the primary mathematics curriculum.

The platform is free from dark patterns. There are no manipulative monetisation mechanics, no social pressure to share, no infinite engagement loops designed to maximise session time at the expense of the learner's autonomy. The games are designed to teach mathematics and then let the learner go.

The platform's technology choices are consistently sound. Tone.js for audio, Canvas for complex rendering, responsive layout for cross-device access — these are the right tools. The implementation quality across the games is high. The code is clean, the interfaces are responsive, and the games work reliably.

And the platform is motivated by genuine care for learners. The emotional register of the feedback, the absence of shaming error states, the visual design that favours approachability over intimidation — all of these reflect a designer who is thinking about the child using the game, not just the mathematical content the game contains.

These strengths provide the foundation from which the improvements in Part III can be built.

---
