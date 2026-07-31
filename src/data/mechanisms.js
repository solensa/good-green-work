// Mechanisms linking work to the people who do it, grouped as in the
// "Understanding Good Work" chapter. Diagrams live in public/mechanisms/{id}.svg
// and are inlined by the details panel so the page webfont applies.

export const mechanismSections = [
  {
    id: 'work',
    name: 'The Work',
    blurb: 'What work is made of: the designable features of a job, and how the literature progressively made them specific.'
  },
  {
    id: 'fit',
    name: 'Worker-Work Fit',
    blurb: 'The same features land differently on different people. These theories describe what has to match.'
  },
  {
    id: 'effects',
    name: 'The Effects of Work',
    blurb: 'What the meeting of worker and work produces: engagement at one end, strain at the other.'
  },
  {
    id: 'accumulation',
    name: 'Accumulation of Effects',
    blurb: 'What repeated states leave behind, over a day cycle and over years.'
  },
  {
    id: 'judging',
    name: 'Judging Good Work',
    blurb: 'None of the above says whether the result is good. That needs a standard.'
  }
];

export const mechanisms = [
  {
    id: 'two-factor',
    section: 'work',
    name: 'Two-Factor Theory',
    byline: 'Frederick Herzberg, 1959',
    claim: 'Motivators drive satisfaction; hygiene factors only prevent dissatisfaction.',
    description:
      "Herzberg divided the features of a job in two. Motivators are intrinsic to the work itself, including achievement, recognition, responsibility and advancement, and these are what produce satisfaction. Hygiene factors are the surrounding context, including pay, working conditions, supervision and company policy, and their absence causes dissatisfaction while their presence merely removes it.\n\nThe strict separation has not survived scrutiny. It appears largely to be an artefact of the critical-incident method, which invites people to credit their satisfaction to themselves and blame their dissatisfaction on circumstances. What did survive is the more useful distinction between the content of work and its context, which every later framework inherits."
  },
  {
    id: 'jcm',
    section: 'work',
    name: 'Job Characteristics Model',
    byline: 'Richard Hackman & Greg Oldham, 1976',
    claim: 'Five designable features produce motivation, but only through the states they create.',
    description:
      "The better-evidenced descendant of Herzberg's job enrichment, and the model that made 'the work itself' specific enough to measure and design. Skill variety, task identity and task significance together make work feel meaningful; autonomy makes the worker feel responsible for how it turns out; and feedback tells them whether it worked.\n\nThe crucial claim is that the features do not act directly. They work only through those three felt psychological states, which is why two people can hold the same job and be differently motivated by it. Growth-need strength was proposed as a moderator, though it has attracted more mixed support than the model's core structure."
  },
  {
    id: 'justice',
    section: 'work',
    name: 'Organisational Justice',
    byline: 'Jason Colquitt, 2001',
    claim: 'Fairness is designable, in four distinct facets.',
    description:
      "Fairness had been treated as a single hygiene factor. Organisational justice makes it specific and therefore designable, in four facets. Distributive justice concerns what is allocated, in pay, reward and recognition. Procedural justice concerns how decisions are reached, through voice, consistency and freedom from bias. Interpersonal justice concerns how people are treated, with dignity and respect. Informational justice concerns what they are told, and whether explanations are adequate.\n\nIts general form is equity theory, which belongs with the motivational mechanisms. What matters here is that each facet is a property of the organisation rather than of the worker, and so can be changed."
  },
  {
    id: 'pe-fit',
    section: 'fit',
    name: 'Person-Environment Fit',
    byline: 'Amy Kristof-Brown, Ryan Zimmerman & Erin Johnson, 2005',
    claim: 'Outcomes follow the match between a job and the person doing it.',
    description:
      "The general form of the matching idea, distinguishing three currencies. Needs-supplies fit asks whether the job supplies what this worker needs. Demands-abilities fit asks whether the worker can meet what the job demands. Values fit asks whether what each values is recognisable to the other.\n\nDemands-abilities is the only currency that can be measured physiologically, because physical demand can be expressed relative to an individual's own capacity: the same load is comfortable for one worker and overloading for another, and the difference is visible in relative cardiovascular load rather than only in what they report."
  },
  {
    id: 'flow',
    section: 'fit',
    name: 'Flow',
    byline: 'Mihaly Csikszentmihalyi, 1975',
    claim: 'Challenge matched to skill produces absorption.',
    description:
      "Demands-abilities fit at the scale of a single task. When challenge and skill are both high and matched, people enter a state of complete absorption that is rewarding in itself, losing track of time and of self-consciousness.\n\nThe two failure modes are as informative as the state itself. Where challenge exceeds skill the result is anxiety; where skill exceeds challenge the result is boredom. That makes flow one of the few accounts in which under-demanding work is explicitly a problem rather than a relief, which matters wherever work is being simplified or standardised."
  },
  {
    id: 'values-rewards',
    section: 'fit',
    name: 'Values-Rewards Fit',
    byline: 'Arne Kalleberg, 1977',
    claim: 'Satisfaction follows work values aligned with perceived rewards.',
    description:
      "Sociology's statement of the same matching claim, and the foundation of the job-quality tradition. Satisfaction arises from the interaction between what an individual values in their work and the rewards they perceive themselves to receive; the closer the match, the greater the satisfaction.\n\nIt is needs-supplies fit in a different vocabulary, arrived at independently and two decades earlier than the psychological literature that later formalised it. Its practical consequence is that a job cannot be scored good or bad without knowing whose values are being brought to it."
  },
  {
    id: 'status-congruence',
    section: 'fit',
    name: 'Status Congruence',
    byline: 'Catherine Loughlin & Robert Murray, 2013',
    claim: 'The match between the employment status a worker wants and the one they hold.',
    description:
      "A fourth fit currency that the others miss: whether the contractual arrangement a person holds, whether full-time, part-time or self-employed, is the one they would choose. As many as forty per cent of workers are incongruent, and the mismatch predicts job quality on a par with established psychological predictors.\n\nIt is almost never measured, and it is acutely relevant to construction, where self-employment through the Construction Industry Scheme is widespread and often reflects how the industry contracts rather than what the worker wanted."
  },
  {
    id: 'jdr',
    section: 'effects',
    name: 'Job Demands-Resources Model',
    byline: 'Evangelia Demerouti, Arnold Bakker, Friedhelm Nachreiner & Wilmar Schaufeli, 2001',
    claim: 'Demands drain, resources fuel, and resources buffer demands.',
    description:
      "The umbrella that absorbs the models before it. Every feature of a job is either a demand, which costs effort and depletes, or a resource, which helps the work get done, buffers demands and supports growth.\n\nTwo pathways run in parallel. Demands drive a health-impairment path toward exhaustion and burnout; resources drive a motivational path toward engagement. Both directions matter, because an account of good work that described only harm would answer half its own question. The trade-off against the older models is the usual one: this accommodates any job feature, at the cost of being harder to falsify."
  },
  {
    id: 'demand-control',
    section: 'effects',
    name: 'Demand-Control Model',
    byline: 'Robert Karasek, 1979',
    claim: 'Discretion decides whether demand becomes strain.',
    description:
      "A special case of the demands-resources logic in which one resource is decisive: the worker's say in how the work is done. High demands produce strain where control is low, but high demands with high control produce learning and growth rather than damage.\n\nThe four-quadrant version is the useful part. High demand with high control is active work; high demand with low control is high strain; low demand with high control is low strain; and low demand with low control is passive work, which is its own kind of harm through disengagement and skill loss."
  },
  {
    id: 'eri',
    section: 'effects',
    name: 'Effort-Reward Imbalance',
    byline: 'Johannes Siegrist, 1996',
    claim: 'Effort that is not returned becomes strain, and then illness.',
    description:
      "The other decisive resource is what comes back. Sustained effort that is not matched by pay, esteem, security or prospects predicts strain and, prospectively, cardiovascular disease. Overcommitment, a personal tendency to over-invest, amplifies the effect.\n\nIts ancestry is equity theory: this is reciprocity applied to the employment relationship, where the worker's contribution and the organisation's return are weighed against each other. Alongside demand-control it is one of the two occupational stress models with the strongest prospective health evidence, and the two are the stated warrant for several national job-quality indices."
  },
  {
    id: 'challenge-threat',
    section: 'effects',
    name: 'Challenge and Threat',
    byline: 'Jim Blascovich & Joe Tomaka, 1996',
    claim: 'The same balance appraised in the moment, and the two outcomes differ in kind.',
    description:
      "The demands-against-resources judgement at the scale of a moment, appraised rather than designed. Where a worker judges their resources sufficient for the demand they experience challenge; where the demand exceeds them they experience threat.\n\nWhat makes this distinctive is that the two produce opposite cardiovascular patterns rather than merely different intensities. Challenge raises cardiac output and lowers peripheral resistance, so blood moves efficiently. Threat leaves cardiac output flat while resistance rises, so the heart works against constriction. It is the only appraisal with a signature specific enough to identify itself physiologically, though reading it requires laboratory impedance cardiography rather than any wearable device."
  },
  {
    id: 'aet',
    section: 'effects',
    name: 'Affective Events Theory',
    byline: 'Howard Weiss & Russell Cropanzano, 1996',
    claim: 'Daily events, not stable conditions, are what trigger emotion.',
    description:
      "Conditions do not act on people directly. They change how often particular events occur, and it is those discrete events, the hassles and the uplifts, that trigger emotion in the moment. Those momentary emotions then accumulate into attitudes such as satisfaction and commitment.\n\nThe consequence for measurement is direct and awkward. If the causal unit is the event, then a survey administered once a year is measuring a remembered summary rather than the mechanism, filtered through whatever happens to be memorable and through how the person feels on the day they answer. Catching what actually does the work means sampling within the day."
  },
  {
    id: 'inverted-u',
    section: 'effects',
    name: 'The Inverted-U',
    byline: 'Robert Yerkes & John Dodson, 1908',
    claim: 'Activation has an optimum, so work can fail at both ends.',
    description:
      "Performance and wellbeing rise with activation to an optimum and fall away beyond it. The practical consequence is that work can fail by under-activating into monotony as readily as by over-activating into strain, which most models of work stress cannot express, since they describe only harm from too much.\n\nIt is a robust heuristic rather than a law. The optimum sits lower for harder or less familiar tasks, and the original evidence came from mice under electric shock, so it should be treated as a shape rather than a quantity."
  },
  {
    id: 'circumplex',
    section: 'effects',
    name: 'Circumplex Model of Affect',
    byline: 'James Russell, 1980',
    claim: 'Activation and pleasantness are independent, so activation alone says little.',
    description:
      "Feeling is arranged along two independent dimensions: how activated a person is, and whether what they feel is pleasant or unpleasant. The familiar emotions are positions on that grid rather than points on a single scale. High activation with negative valence is stress and anxiety; high activation with positive valence is vigour and absorption; low activation splits into calm on one side and boredom on the other.\n\nOnly one of the two axes is readable from the body. Heart rate and skin conductance index activation, and the same signature covers the absorbed worker and the anxious one, so whether the state is a good one has to be asked rather than sensed."
  },
  {
    id: 'effort-recovery',
    section: 'accumulation',
    name: 'Effort-Recovery',
    byline: 'Theo Meijman & Gijsbertus Mulder, 1998',
    claim: 'Incomplete recovery, not effort, is what harms.',
    description:
      "Effort produces load reactions that reverse during rest. Where recovery completes, nothing is carried forward and the next shift starts from baseline. Where recovery is cut short, by long hours, commuting, poor sleep or a compressed roster, residual fatigue compounds and each day begins a little lower than the last.\n\nThe hinge is therefore recovery rather than effort, which is the difference between hard work and damaging work. It is also the part of the account no survey can reach: a questionnaire can ask how last month felt, but not whether last night restored anything. Overnight physiology can."
  },
  {
    id: 'allostatic-load',
    section: 'accumulation',
    name: 'Allostatic Load',
    byline: 'Bruce McEwen, 1998',
    claim: 'The cost of a stress response that fails to switch off, adapt or scale.',
    description:
      "The stress response is protective. Cortisol and adrenaline mobilise the body to meet a demand and should subside once it passes. Load is the cumulative cost of that regulation failing, and it fails in four distinct ways: too many separate demands arriving; a repeated demand that never provokes less; a response that outlasts the demand; and a response too weak to do its job, forcing other systems to overcompensate.\n\nIt is measured as a composite index of biomarkers, including blood pressure, cortisol, catecholamines, glucose regulation, lipids and inflammatory markers. That places it beyond the reach of wearable sensing: it is objectively measurable, but by assay rather than by sensor."
  },
  {
    id: 'capability',
    section: 'judging',
    name: 'Capability Approach',
    byline: 'Amartya Sen',
    claim: 'Resources convert into wellbeing at rates that differ between people.',
    description:
      "The mechanisms above describe what work does. None says whether the result is good, and that needs a standard. Welfare economics supplies one: wellbeing should be judged not by what a job provides but by what the worker is actually able to do and be with it.\n\nWork provides resources, in wages, rotas, training and tools. What a given worker can make of them depends on conversion factors that are personal, social and environmental. Wellbeing is what is actually achieved, rather than what was offered. The same training scheme converts into progression for one worker and into nothing for another who cannot attend, and the difference is not in the scheme."
  }
];
