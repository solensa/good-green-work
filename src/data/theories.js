export const theories = [
  {
    id: "maslow",
    macroGroup: 1,
    microGroup: "Broad Human-Needs Theories",
    name: "Maslow's Hierarchy",
    category: "Human Needs & Motives",
    points: [
      { id: "m_sa", label: "Self-actualisation", x: 25, y: 75, dx: -13.674, dy: 0.966 },
      { id: "m_est", label: "Esteem", x: 35, y: 82, dx: -5.692, dy: 3.825 },
      { id: "m_bel", label: "Belonging", x: 42, y: 85, dx: -4.826, dy: 3.886 },
      { id: "m_saf", label: "Safety", x: 58, y: 90, dx: -3.536, dy: 5.395 },
      { id: "m_phy", label: "Physiological", x: 60, y: 90, dx: 5.888, dy: 5.791 }
    ],
    lines: [
      { from: "m_sa", to: "m_est", type: "solid" },
      { from: "m_est", to: "m_bel", type: "solid" },
      { from: "m_bel", to: "m_saf", type: "solid" },
      { from: "m_saf", to: "m_phy", type: "solid" }
    ],
    labelPosition: { x: 40.482, y: 95.559, text: "Maslow's Hierarchy" },
    description: "Abraham Maslow's theory proposes a five-tier hierarchical model of human needs. Individuals must generally satisfy lower-level deficit needs before progressing to higher-level growth needs.\n\nAt the base are physiological needs (food, water, warmth), followed by safety needs (security, stability). Once these are met, psychological needs emerge: belongingness and love (intimate relationships, friends), and esteem needs (prestige, feeling of accomplishment). At the pinnacle is self-actualization, which represents achieving one's full potential and engaging in creative activities. Maslow argued that unmet lower needs dominate behavior, but once satisfied, they no longer act as primary motivators."
  },
  {
    id: "erg",
    macroGroup: 1,
    microGroup: "Broad Human-Needs Theories",
    name: "Alderfer's ERG",
    category: "Human Needs & Motives",
    points: [
      { id: "erg_g", label: "Growth", x: 32, y: 75, dx: 2.929, dy: -7.734 },
      { id: "erg_r", label: "Relatedness", x: 45, y: 82, dx: 2.326, dy: -5.073 },
      { id: "erg_e", label: "Existence", x: 62, y: 88, dx: 5.246, dy: -5.582 }
    ],
    lines: [
      { from: "erg_g", to: "erg_r", type: "dashed" },
      { from: "erg_r", to: "erg_e", type: "dashed" }
    ],
    labelPosition: { x: 56.942, y: 81.514, text: "Alderfer's ERG" },
    description: "Clayton Alderfer's ERG theory condenses Maslow's five human needs into three broad categories: Existence, Relatedness, and Growth. Existence aligns with physiological and safety needs; Relatedness corresponds to social and external esteem needs; and Growth aligns with internal esteem and self-actualization.\n\nUnlike Maslow's strict hierarchy, ERG theory suggests that multiple needs can be active simultaneously. It also introduces the frustration-regression principle, which postulates that if a higher-level need is frustrated and remains unsatisfied, the individual may regress to focus more heavily on a lower-level need that is easier to satisfy."
  },
  {
    id: "mcclelland",
    macroGroup: 1,
    microGroup: "Learned Motives",
    name: "McClelland's Three-Needs",
    category: "Human Needs & Motives",
    points: [{ id: "mcc", label: "McClelland's three-needs theory", x: 25, y: 78, dx: -5.853, dy: 19.248 }],
    description: "David McClelland proposed that every person has one of three main driving motivators: the Need for Achievement (nAch), the Need for Affiliation (nAff), or the Need for Power (nPow). These motives are not innate but are learned and developed over time through life experiences and cultural background.\n\nHigh achievers seek challenging tasks and personal responsibility, preferring immediate feedback. Those with a high need for affiliation desire harmonious relationships and acceptance, often performing best in cooperative environments. Those driven by power seek to control or influence others and status, which can be expressed as personal power (directing others) or institutional power (organizing efforts toward company goals)."
  },
  {
    id: "herzberg",
    macroGroup: 1,
    microGroup: "Work Satisfaction",
    name: "Herzberg's Two-Factor",
    category: "Job Conditions & Work Factors",
    points: [
      { id: "hz_m", label: "Motivators", x: 58, y: 68, dx: 5.116, dy: -7.536 },
      { id: "hz_h", label: "Hygiene factors", x: 78, y: 82, dx: 9.924, dy: -0.943 }
    ],
    lines: [{ from: "hz_m", to: "hz_h", type: "dashed" }],
    labelPosition: { x: 68.790, y: 68.723, text: "Herzberg" },
    description: "Frederick Herzberg's Two-Factor theory argues that job satisfaction and dissatisfaction are not opposites on a single continuum, but rather operate independently driven by two different sets of factors. Hygiene factors (like salary, job security, working conditions, and company policies) do not motivate employees, but their absence causes dissatisfaction.\n\nOn the other hand, Motivators (like challenging work, recognition, responsibility, and personal growth) are intrinsic to the job itself and are the true drivers of employee engagement and satisfaction. To truly motivate a workforce, management must first eliminate dissatisfaction by addressing hygiene factors, and then actively build motivators into the work."
  },
  {
    id: "sdt",
    macroGroup: 1,
    microGroup: "Psychological Needs & Motivation Quality",
    name: "Self-Determination Theory (SDT)",
    category: "Human Needs & Motives",
    points: [
      { id: "sdt_b", label: "SDT: basic needs", x: 38, y: 72, dx: 9.420, dy: -2.395 }
    ],
    description: "Self-Determination Theory (SDT), developed by Deci and Ryan, focuses on the degree to which an individual's behavior is self-motivated and self-determined. It posits that human beings have three innate, universal psychological needs: Competence (feeling effective and capable), Autonomy (feeling a sense of volition and psychological freedom), and Relatedness (feeling connected to and cared for by others).\n\nWhen these three needs are supported by the social environment, people experience high intrinsic motivation, well-being, and sustained engagement. Conversely, when environments rely heavily on external rewards or controlling pressures, intrinsic motivation is undermined, leading to poorer performance and lower psychological health."
  },
  {
    id: "reinforcement",
    macroGroup: 2,
    microGroup: "Behavioural Mechanisms",
    name: "Reinforcement Theory",
    category: "Work System Mechanisms",
    points: [{ id: "re", label: "Reinforcement theory", x: 88, y: 18, dx: 3.366, dy: 6.491 }],
    description: "Reinforcement Theory, rooted in B.F. Skinner's operant conditioning, asserts that behavior is a function of its consequences. It entirely ignores internal cognitive states (like needs or expectations) and focuses strictly on what happens to an individual when they take a specific action.\n\nBehaviors followed by positive consequences (positive reinforcement) or the removal of negative conditions (negative reinforcement) will occur more frequently. Conversely, behaviors followed by negative consequences (punishment) or the removal of positive conditions (extinction) will decrease in frequency. It forms the basis for many incentive and disciplinary systems in the workplace."
  },
  {
    id: "equity",
    macroGroup: 2,
    microGroup: "Fairness & Social Exchange",
    name: "Equity Theory",
    category: "Work System Mechanisms",
    points: [{ id: "eq", label: "Equity theory", x: 76, y: 72, dx: 12.603, dy: -12.095 }],
    description: "John Stacey Adams' Equity Theory suggests that employees are highly motivated by a desire for fairness. An individual weighs what they put into a job situation (inputs: effort, skills, loyalty) against what they get from it (outcomes: salary, recognition, perks). They then compare their own input-outcome ratio to the perceived input-outcome ratios of relevant others (colleagues, industry peers).\n\nIf they perceive the ratios as equal, a state of equity exists. If they perceive themselves as under-rewarded, they experience distress and will attempt to restore equity by reducing inputs (working less hard), demanding greater outcomes (asking for a raise), or changing their comparison point. Over-reward can also lead to distress, often resulting in guilt or rationalization."
  },
  {
    id: "justice",
    macroGroup: 2,
    microGroup: "Fairness & Social Exchange",
    name: "Organisational Justice",
    category: "Work System Mechanisms",
    points: [{ id: "oj", label: "Organisational justice", x: 78, y: 24, dx: -0.129, dy: 7.745 }],
    description: "Organisational Justice refers to employee perceptions of fairness in the workplace, expanding beyond simple outcome comparisons to encompass the broader social and structural environment. It is typically classified into four distinct dimensions.\n\nDistributive justice refers to the perceived fairness of outcomes (like pay). Procedural justice refers to the perceived fairness of the processes used to determine those outcomes. Informational justice involves the adequacy and transparency of explanations provided to employees about decisions. Interpersonal justice focuses on the degree to which employees are treated with dignity, respect, and politeness by authorities."
  },
  {
    id: "expectancy",
    macroGroup: 2,
    microGroup: "Cognitive Choice & Effort",
    name: "Vroom's Expectancy Theory",
    category: "Work System Mechanisms",
    points: [{ id: "ve", label: "Vroom's expectancy theory", x: 56, y: 30, dx: 5.156, dy: 9.130 }],
    description: "Victor Vroom's Expectancy Theory proposes that an individual will behave or act in a certain way because they are motivated to select a specific behavior over others due to what they expect the result of that selected behavior will be. Motivation is determined by a multiplicative function of three variables.\n\nExpectancy is the belief that one's effort will result in attainment of desired performance goals. Instrumentality is the belief that receiving a reward is contingent upon that performance. Valence is the value the individual personally places on the rewards. If any of these three factors is zero, the overall motivation to perform the task will be zero."
  },
  {
    id: "goal-setting",
    macroGroup: 2,
    microGroup: "Cognitive Choice & Effort",
    name: "Goal-Setting Theory",
    category: "Work System Mechanisms",
    points: [{ id: "gs", label: "Goal-setting theory", x: 66, y: 22, dx: -0.094, dy: -10.316 }],
    description: "Edwin Locke's Goal-Setting Theory asserts that specific, challenging, and well-defined goals, when accompanied by feedback, contribute significantly to higher and better task performance than vague or easy goals (like \"do your best\").\n\nGoals act as major sources of work motivation by directing attention, mobilizing effort, increasing persistence, and encouraging the development of strategies to achieve them. For goals to be most effective, individuals must be committed to them, which is often facilitated by participating in the goal-setting process, receiving ongoing constructive feedback, and having the necessary self-efficacy to believe the goal is attainable."
  },
  {
    id: "cognitive-appraisal",
    macroGroup: 3,
    microGroup: "Broad Cognitive Appraisal",
    name: "Cognitive Appraisal Mechanisms",
    category: "Internal Appraisal Mechanisms",
    points: [{ id: "ca", label: "Cognitive theories / appraisal mechanisms", x: 24, y: 26, dx: 1.085, dy: -23.484 }],
    description: "Cognitive Appraisal Mechanisms represent a broad category of theories focusing on how individuals mentally evaluate, interpret, and appraise events in their environment. Rather than reacting blindly to external stimuli, individuals actively process information, assigning subjective meaning and personal significance to situations.\n\nThese cognitive appraisals directly link internal thought processes to emotional and motivational responses. For example, viewing a difficult project as an exciting 'challenge' rather than a threatening 'burden' radically alters an individual's emotional state, subsequent motivation, and behavioral approach to the task."
  },
  {
    id: "self-efficacy",
    macroGroup: 3,
    microGroup: "Capability & Control",
    name: "Self-Efficacy Theory",
    category: "Internal Appraisal Mechanisms",
    points: [{ id: "se", label: "Self-efficacy theory", x: 20, y: 24, dx: -8.571, dy: -7.745 }],
    description: "Albert Bandura's Self-Efficacy Theory centers on an individual's belief in their innate ability to successfully execute the behaviors necessary to produce specific performance attainments. It reflects confidence in the ability to exert control over one's own motivation, behavior, and social environment.\n\nHigh self-efficacy leads individuals to view difficult tasks as challenges to be mastered rather than threats to be avoided, fostering deep interest and strong commitment. Self-efficacy is built through four main sources: mastery experiences (past successes), vicarious experiences (seeing others succeed), verbal persuasion (encouragement), and emotional/physiological states (managing stress and anxiety)."
  },
  {
    id: "perceived-control",
    macroGroup: 3,
    microGroup: "Capability & Control",
    name: "Perceived Control",
    category: "Internal Appraisal Mechanisms",
    points: [{ id: "pc", label: "Perceived control", x: 25, y: 28, dx: 8.817, dy: 8.000 }],
    description: "Perceived Control is the degree to which individuals believe that they have agency over their internal states, behaviors, and external environment. It is the psychological conviction that one can bring about desired outcomes and prevent negative ones through one's own actions.\n\nHigh perceived control is strongly associated with proactive behavior, better stress management, and sustained motivation, even in the face of obstacles. When individuals feel they are at the mercy of external forces or unpredictable environments, their motivation plummets, often leading to passivity or disengagement from the task at hand."
  },
  {
    id: "learned-helplessness",
    macroGroup: 3,
    microGroup: "Capability & Control",
    name: "Learned Helplessness",
    category: "Internal Appraisal Mechanisms",
    points: [{ id: "lh", label: "Learned helplessness", x: 28, y: 18, dx: 13.375, dy: -0.266 }],
    description: "Learned Helplessness, a concept developed by Martin Seligman, describes a psychological state that occurs after a person has experienced a stressful or negative situation repeatedly over which they had no control. They eventually come to believe that they are entirely unable to change the situation.\n\nAs a result, they stop trying to escape or improve their circumstances, even when opportunities to do so finally become available. In a motivational context, learned helplessness manifests as extreme apathy, passive acceptance of failure, and an inability to perceive contingencies between actions and outcomes."
  },
  {
    id: "mindset",
    macroGroup: 3,
    microGroup: "Beliefs About Ability & Failure",
    name: "Growth vs Fixed Mindset",
    category: "Internal Appraisal Mechanisms",
    points: [{ id: "gm", label: "Growth vs fixed mindset", x: 18, y: 30, dx: -7.777, dy: 5.034 }],
    description: "Carol Dweck's Mindset Theory distinguishes between two core beliefs individuals hold about their own intelligence and abilities. Individuals with a 'Fixed Mindset' believe that traits are innate, static givens that cannot be changed. They often avoid challenges, give up easily, and feel threatened by the success of others.\n\nIn contrast, individuals with a 'Growth Mindset' believe that abilities and intelligence can be continually developed through dedication, hard work, and good strategy. This view creates a love of learning and a resilience that is essential for great accomplishment, leading them to embrace challenges, persist through setbacks, and see effort as the path to mastery."
  },
  {
    id: "attribution",
    macroGroup: 3,
    microGroup: "Beliefs About Ability & Failure",
    name: "Attribution Theory",
    category: "Internal Appraisal Mechanisms",
    points: [{ id: "att", label: "Attribution theory", x: 22, y: 28, dx: -14.656, dy: -4.350 }],
    description: "Attribution Theory, originally developed by Fritz Heider and expanded by Bernard Weiner, deals with how individuals use information to arrive at causal explanations for events. It examines the fundamental need to explain why things happen, particularly success and failure.\n\nWeiner proposed three dimensions of attribution: Locus of control (internal vs. external), Stability (do causes change over time or not?), and Controllability (causes one can control vs. cannot control). Attributing success to internal, stable factors (like innate ability) boosts confidence, while attributing failure to internal, stable factors crushes motivation. Healthy motivation relies on attributing failure to unstable, controllable factors (like lack of effort or poor strategy)."
  },
  {
    id: "self-regulation",
    macroGroup: 3,
    microGroup: "Planning & Self-Regulation",
    name: "Self-Regulation",
    category: "Internal Appraisal Mechanisms",
    points: [{ id: "sr", label: "Self-regulation", x: 26, y: 16, dx: 14.991, dy: -6.768 }],
    description: "Self-Regulation refers to the conscious, active ability to monitor and manage your energy states, emotions, thoughts, and behaviors in ways that are acceptable and produce positive results. It is the central mechanism through which individuals translate goals into actual action.\n\nEffective self-regulation involves setting clear standards, monitoring one's progress against those standards, and exercising willpower to delay immediate gratification in favor of long-term objectives. Depletion of self-regulatory resources (often called ego depletion) can severely undermine an individual's motivation and ability to persist on difficult tasks."
  },
  {
    id: "implementation",
    macroGroup: 3,
    microGroup: "Planning & Self-Regulation",
    name: "Implementation Intentions",
    category: "Internal Appraisal Mechanisms",
    points: [{ id: "ii", label: "Plans / implementation intentions", x: 30, y: 22, dx: 12.446, dy: 5.711 }],
    description: "Implementation Intentions, a concept introduced by Peter Gollwitzer, are specific 'if-then' plans that tie a goal-directed behavior to a highly specific situational cue. While goal intentions specify what one wants to achieve ('I want to write a report'), implementation intentions specify exactly when, where, and how one will act ('If it is 9 AM on Tuesday, then I will open my laptop and write the first section').\n\nBy creating a strong mental link between a situational trigger and a specific action, the behavior becomes heavily automated. This bypasses the need for conscious deliberation and willpower, making individuals significantly more likely to follow through on their motivational goals."
  },
  {
    id: "values",
    macroGroup: 3,
    microGroup: "Values & Identity",
    name: "Task-Value",
    category: "Internal Appraisal Mechanisms",
    points: [{ id: "tv", label: "Values / task-value", x: 28, y: 55, dx: 12.585, dy: -1.848 }],
    description: "Task-Value is a central component of Expectancy-Value Theory (Eccles and Wigfield), focusing on the extent to which an individual values the activity or task itself. While 'expectancy' asks 'Can I do this task?', 'value' asks 'Do I want to do this task, and why?'\n\nTask value is typically broken down into four components: Intrinsic value (the enjoyment gained from doing the task), Utility value (how the task fits into future plans or goals), Attainment value (the importance of doing well on the task for one's identity), and Cost (the negative aspects of engaging in the task, such as time, effort, or emotional toll). High motivation requires high task value."
  },
  {
    id: "identity",
    macroGroup: 3,
    microGroup: "Values & Identity",
    name: "Identity / Self-Concept",
    category: "Internal Appraisal Mechanisms",
    points: [{ id: "id", label: "Identity / self-concept", x: 22, y: 48, dx: -8.013, dy: -5.955 }],
    description: "Identity and Self-Concept refer to the integration of how a person fundamentally views themselves—their traits, beliefs, social roles, and values. It acts as a powerful motivational compass, heavily influencing what tasks individuals choose to engage with and how persistently they pursue them.\n\nPeople are highly motivated to behave in ways that are congruent with their self-concept. If an individual identifies strongly as a 'problem solver' or a 'creative professional', they will naturally be drawn to and intrinsically motivated by tasks that validate and reinforce that specific identity, while resisting tasks that conflict with it."
  },
  {
    id: "possible-selves",
    macroGroup: 3,
    microGroup: "Values & Identity",
    name: "Possible Selves",
    category: "Internal Appraisal Mechanisms",
    points: [{ id: "ps", label: "Possible selves", x: 24, y: 55, dx: -14.027, dy: -1.780 }],
    description: "Possible Selves, a concept developed by Hazel Markus and Paula Nurius, refers to the cognitive representations of what individuals could become, what they would strongly like to become (ideal selves), and what they are desperately afraid of becoming (feared selves).\n\nThese future-oriented self-representations act as highly specific, emotionally charged psychological incentives for future behavior. A vivid, clearly defined 'possible self' provides a powerful motivational pull towards actions that bridge the gap between the current self and the desired future self, while simultaneously driving avoidance behaviors away from the feared self."
  },
  {
    id: "promotion-prevention",
    macroGroup: 3,
    microGroup: "Tension & Orientation",
    name: "Promotion vs Prevention",
    category: "Internal Appraisal Mechanisms",
    points: [{ id: "pp", label: "Promotion vs prevention focus", x: 32, y: 62, dx: -20.460, dy: -1.430 }],
    description: "Regulatory Focus Theory, developed by E. Tory Higgins, identifies two distinct motivational approaches that individuals use to achieve their goals. A 'Promotion Focus' is concerned with playing to win—seeking advancement, growth, and accomplishment. It is driven by the pursuit of ideals and maximizes gains.\n\nA 'Prevention Focus', on the other hand, is concerned with playing not to lose—seeking security, safety, and fulfilling duties. It is driven by 'oughts' and minimizes losses. Individuals experience 'regulatory fit' (and significantly higher motivation) when the strategy they are asked to use matches their underlying regulatory focus."
  },
  {
    id: "dissonance",
    macroGroup: 3,
    microGroup: "Tension & Orientation",
    name: "Cognitive Dissonance",
    category: "Internal Appraisal Mechanisms",
    points: [{ id: "cd", label: "Cognitive dissonance", x: 30, y: 68, dx: -19.607, dy: -0.091 }],
    description: "Cognitive Dissonance, a theory proposed by Leon Festinger, describes the significant mental discomfort (dissonance) experienced by someone who holds two or more conflicting beliefs, values, or behaviors. This psychological tension is inherently aversive.\n\nTo resolve this discomfort, individuals are powerfully motivated to change their attitudes, alter their behaviors, or rationalize the inconsistency to restore psychological harmony (consonance). In motivational contexts, inducing cognitive dissonance can be a potent tool to drive behavioral change, as people naturally seek to align their actions with their self-stated beliefs to avoid feelings of hypocrisy."
  },
  {
    id: "arousal",
    macroGroup: 4,
    microGroup: "Motivational State / Psychophysiology",
    name: "Arousal Theory / Thayer",
    category: "Internal Appraisal Mechanisms",
    points: [{ id: "ar", label: "Arousal theory / Thayer", x: 42, y: 64, dx: 5.438, dy: -5.118 }],
    description: "Arousal Theory suggests that people are driven to perform actions in order to maintain an optimal, comfortable level of physiological and psychological arousal. When arousal drops too low, individuals become bored and seek out stimulating activities. When arousal spikes too high, they become anxious and seek relaxing activities.\n\nRobert Thayer expanded this concept into a multidimensional model, distinguishing between 'energetic arousal' (ranging from tired to vigorous) and 'tense arousal' (ranging from calm to anxious). Optimal motivation and performance typically occur when energetic arousal is high but tense arousal is kept manageable."
  }
];
