# Chapter 4: Gamification Elements — What Helps, What Hurts

---

Every game on the platform uses at least some gamification elements: points, timers, lives, streaks, progress bars, or some combination of these. These elements are so standard in the genre that their presence is rarely questioned. The research, however, has reached some fairly specific conclusions about which of them support learning and motivation, which are neutral, and which actively cause harm for particular learners.

This chapter examines each major gamification element in turn, drawing on the research literature to build the evaluative lens that Part II will apply to each game.

---

## 4.1 Points and Scores

Points are the oldest gamification element and, in some respects, the most benign. A points system that accurately reflects mathematical achievement — where more points are earned for harder problems, mastery of more advanced content, or demonstrated understanding rather than mere completion — provides several genuine benefits.

Points give learners immediate, visible feedback on progress. They make abstract competency gains concrete and trackable. They create short-term goals that sustain engagement between longer-term milestones. And they satisfy what SDT research describes as competence need satisfaction: seeing the score increase confirms that effective performance is occurring.

The risks of points systems become apparent when the points stop accurately reflecting achievement. A system that awards equal points for trivially easy and genuinely challenging problems, or that can be gamed by strategic guessing, no longer serves as a competence signal — it becomes a progress theatre, a display of advancement that the learner knows to be hollow. This produces exactly the competence need *frustration* that SDT identifies as demotivating.

The deeper risk, identified by Deci's overjustification effect research from the early 1970s, is that external rewards (including points) for intrinsically interesting activities can undermine intrinsic motivation when removed. A child who plays a math game only for the points has transferred their motivation from the mathematics to the reward structure. If the points disappear — or if the child encounters mathematics in a context without a score counter — the motivation does not transfer.

For K–6 mathematics specifically, this is a significant concern. The goal is not to produce children who can earn points on a math game; it is to produce children who are genuinely engaged with mathematical thinking. Points systems that are transparently about counting correct answers rather than reflecting mathematical competence risk training the former while neglecting the latter.

---

## 4.2 Badges and Achievements

Badges — digital emblems awarded for reaching milestones — are the gamification element with the most uniformly positive research support, provided they are designed well.

The *endowment effect* research suggests that badges feel valuable once earned, creating a psychological investment in maintaining the achievement. Streak badges that track consecutive days of practice leverage *loss aversion* — the well-documented asymmetry in how humans experience losses versus equivalent gains — to sustain engagement across sessions. The Duolingo platform's streak system is the most commercially successful implementation of this principle in educational software.

Badges designed as genuine milestones — earned through substantive achievement rather than participation — also serve an important diagnostic function: they help learners and their parents or teachers identify what has been mastered. A badge for "Completed all multiplication tables through 9" communicates something about mathematical competence in a way that a badge for "Played the game for five days" does not.

The risks of badge systems mirror those of points: when badges become the goal rather than the mathematics, they shift motivation from intrinsic to extrinsic. And participation badges — awarded for presence rather than performance — rapidly lose their signalling value and become noise.

---

## 4.3 Leaderboards: The Most Problematic Element

Leaderboards are the most extensively studied and most frequently cautioned-against gamification element in the educational research literature. The evidence for their motivational effects is bifurcated in a way that makes them categorically unsuitable as a default design choice for children's educational games.

Leaderboards work, in motivational terms, for learners who are near or at the top. The visibility of their position — the public recognition of their competence — satisfies relatedness and competence needs simultaneously. Leaderboards for this group function as a positive feedback loop: high performance generates a visible ranking, which generates social recognition, which motivates continued high performance.

For the majority of learners — those in the middle and bottom of the ranking — leaderboards function as a negative feedback loop. Social comparison theory (Festinger, 1954) predicts that people compare themselves to others of similar ability; leaderboards force this comparison into explicit visibility and create a ranked hierarchy that most learners cannot escape. The child who is persistently at the bottom of the class leaderboard is not motivated by seeing their position; they are informed repeatedly that they are worse than their peers, which is exactly the kind of competence-undermining signal that triggers disengagement, anxiety, and avoidance.

For children at K–6 level, the problem is compounded by two factors. First, mathematical confidence is fragile at this stage: children are forming their identities as "math people" or "not math people," and that identity formation is significantly influenced by comparative social feedback. A leaderboard that consistently places a child at the bottom is not a neutral motivational tool; it is actively contributing to the construction of a negative mathematical self-concept. Second, children at this age are more sensitive to social comparison than older learners; the research on rejection sensitivity, social exclusion, and emotional regulation all point to the same conclusion: public ranking systems carry higher emotional stakes for young children than for adults.

The research-informed alternatives — personal bests, private progress tracking, mastery indicators rather than comparative rankings — preserve the motivational benefits of visible progress without the social harm of public comparison. Where leaderboards are used for young learners, they should at minimum be class-private, time-limited, and framed around personal improvement rather than absolute ranking.

None of the games in the platform under analysis use leaderboards. This is a sound design choice, and it will be noted as such in the case studies.

---

## 4.4 Timers: The Most Anxiety-Provoking Element

The countdown timer is the most contentious gamification element in the literature on children's mathematics education, and for good reason.

The NCTM's position on timed tests in mathematics education is clear and research-backed: timed conditions produce anxiety responses in elementary students, particularly those with pre-existing mathematics anxiety, and that anxiety impairs performance independently of actual mathematical competence. The mechanism is straightforward: time pressure activates threat appraisal and the associated physiological stress response, which consumes working memory resources that would otherwise be available for mathematical thinking. The result is that timed conditions systematically underestimate the competency of children who are prone to anxiety — a group that is disproportionately female, disproportionately from stigmatised groups, and disproportionately likely to have already had negative mathematical experiences.

ScienceDirect research on math anxiety published in 2024 confirms that timing and task complexity interact: timed conditions increase anxiety responses in elementary students, with the effect concentrated among students with pre-existing anxiety. The children most harmed by timers are precisely those the games should be most carefully designed to support.

The argument for timers in games is real: pacing, urgency, and the pressure of the clock are powerful engagement mechanisms. A timer creates a rhythmic challenge — "can I do this before the time runs out?" — that keeps players on task and prevents extended dwelling on any single problem. For learners who are already fluent and confident, timers can be motivating, creating the sense of a beat-your-best challenge.

The design challenge is managing the interaction between these effects. Several practical approaches have research support:

**Visual timers** that display remaining time as a shrinking coloured arc or bar, without a numerical countdown, have documented benefits in classroom research: they make time tangible without triggering the alarm response that numerical countdowns produce. Children can see that they are running out of time without the number itself becoming a source of performance anxiety.

**Adaptive pacing** that adjusts the rate of content presentation in response to learner accuracy, rather than a fixed countdown, achieves the pacing benefits of a timer without the fixed endpoint that produces countdown anxiety.

**Optional timer modes** that allow learners to opt into timed challenges at their own readiness level respect the autonomy principle from SDT while preserving access to the pacing benefit for learners who find it motivating.

---

## 4.5 Lives, Health Bars, and Failure Mechanics

The "lives" system — a limited number of attempts before a penalty (session end, level restart, loss of progress) is applied — is a game design inheritance from arcade machines of the 1980s, where it served as a commercial mechanism: three lives meant three chances to see the end of the machine's content before needing to insert another coin.

In an educational game, lives serve no analogous function. The research on failure mechanics in children's educational games is relatively sparse compared to the research on other gamification elements, but the broader literature on error handling and math anxiety is informative.

Loss aversion research (Kahneman & Tversky) establishes that losses are experienced as roughly twice as emotionally significant as equivalent gains. A lives system in which the player loses a heart for each incorrect answer is not a neutral motivational tool; it creates a loss-aversion dynamic in which each incorrect answer is experienced as a small punishment, with the cumulative effect of associating mathematical performance with loss rather than gain.

For children who are already anxious about mathematics, this dynamic is particularly harmful. The emotional experience of losing lives — particularly when the loss is rapid, as it tends to be when a learner is genuinely struggling — reinforces exactly the narrative that mathematics anxiety research identifies as its core: "I am bad at this, this is scary, and engaging with it leads to bad outcomes."

The research-informed alternative is what might be called the *progress bar model*: a visual indicator that shows only advancement, never regression. The learner can always see how much they have accomplished; they cannot see how many mistakes they have made. This asymmetric framing aligns with Carol Dweck's growth mindset research and the motivational principle that effort-focused, progress-oriented feedback is more effective than performance-focused, deficit-oriented feedback for sustained engagement and learning.

Several games on the platform use hearts as a lives mechanic. The case study analyses will examine each instance and assess the degree to which this design choice creates unnecessary barriers for anxious learners.

---

## 4.6 Streaks, Progress Bars, and Positive Architectures

Not all gamification elements carry these risks. Streaks and progress bars — when designed with care — are among the most reliably motivating elements in educational game design.

Progress bars that show cumulative advancement toward a clear goal create what the goal-setting literature calls *proximal goals*: immediate, achievable targets that sustain motivation between longer-term outcomes. The progress bar makes the abstract concrete (how much have I learned?) and creates the satisfying mechanics of incremental completion.

Streak mechanics that track consecutive sessions of engagement tap into loss aversion in a way that is more aligned with learning goals than lives systems: the thing being protected (the streak) is the habit of practice, not the outcome of any single problem. Preserving a streak means returning to practice, which is the behavioural pattern that produces spaced repetition and long-term retention.

The caveat for both elements is the same as for points and badges: they must be connected to genuine learning behaviour, not trivial completion. A progress bar that fills whenever the player opens the game does not motivate meaningful engagement; one that fills in response to demonstrated mastery does.

---

## 4.7 Design Principle: Gamification as On-Ramp, Not Destination

The synthesis of the research on gamification elements points to a design principle that will serve as a recurring reference throughout Part II:

*Gamification is most effective as an on-ramp to intrinsic motivation, not as a permanent motivation architecture.*

For children who approach mathematics with low confidence, anxiety, or a history of negative experiences, the external scaffolding provided by points, badges, and progress tracking can provide enough initial engagement to generate the first mastery experiences. Those mastery experiences — the genuine felt sense of having understood something that was difficult — are what produce intrinsic mathematical motivation. Once those experiences accumulate, the external scaffolding becomes less necessary.

The failure mode is designing a gamification system so compelling, and so complete in its external reward structure, that learners never need to develop intrinsic motivation. When the points and badges and streaks are the reason to play, mathematical thinking becomes instrumental — a means to the gamification end — rather than rewarding in itself. The goal of educational game design is a child who eventually wants to do mathematics. Not a child who wants to earn points that happen to involve mathematics.

---
