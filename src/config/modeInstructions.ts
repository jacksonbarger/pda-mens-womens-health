/**
 * Mini-Coach Instructions
 *
 * Built-in study guidance for each mode.
 * These appear at the top of each mode to help students study effectively.
 */

export const modeInstructions = {
  conceptsOverview: {
    title: "How to Use This Section",
    body: [
      "Start here before doing any questions. Read the summary once slowly, then skim the key points again.",
      "Aim to be able to explain the big picture in your own words (out loud or in your head).",
      "If something feels fuzzy, star it or jot it down to target in Quiz mode.",
      "Don't try to memorize every detail here — focus on: What is this disease? Why does it happen? What are the key patterns?"
    ]
  },

  conceptsQuiz: {
    title: "How to Use Quiz Mode",
    body: [
      "Use this after you've gone through the Overview at least once.",
      "Answer at a normal thinking speed — this is for LEARNING, not speed yet.",
      "After each question, read the explanation even if you were right.",
      "Flag any questions you miss or guessed on; these are your personal high-yield topics.",
      "Goal: get 80–90% correct comfortably before moving to Challenge mode."
    ]
  },

  conceptsChallenge: {
    title: "How to Use Challenge Mode",
    body: [
      "This is your exam simulation for this topic.",
      "Answer quickly and confidently — pretend every question is worth exam points.",
      "If you miss a question, don't panic; note the topic and fix it later with Overview + Quiz.",
      "Use this mode in the last few days before the exam to check if you're truly test-ready.",
      "Goal: maintain a high streak and keep your accuracy above ~80% under pressure."
    ]
  },

  drugsOverview: {
    title: "How to Use the Drugs Pages",
    body: [
      "This is the most important part for pharmacy school: know the drugs cold.",
      "For each drug, focus on: class, mechanism, key indications, major adverse effects, contraindications, and pregnancy/lactation notes.",
      "Try to link each drug back to the disease mechanism you learned in Concepts.",
      "If you can't explain a drug's MOA in one sentence, that's a sign to slow down here."
    ]
  },

  drugsQuiz: {
    title: "How to Use Drug Quiz Mode",
    body: [
      "Use this right after reviewing a drug category (e.g., PCOS drugs, contraceptives).",
      "Expect questions about MOA, indications, adverse effects, and 'which drug is best for this patient' style scenarios.",
      "Pause after each question and ask yourself: Could I explain why every wrong option is wrong?",
      "Goal: you should be able to predict the correct answer before looking at the options."
    ]
  },

  drugsChallenge: {
    title: "How to Use Drug Challenge Mode",
    body: [
      "This is your 'boss battle' for drugs — treat it like real exam questions.",
      "Play this when you think you already know the drugs fairly well.",
      "Expect tricky wording, look-alike drug names, and adverse-effect traps.",
      "Any time you miss a drug question, go back to that drug's detail page and reread the MOA, indications, and contraindications.",
      "Goal: be so comfortable here that real exam drug questions feel easy."
    ]
  },

  examChallenge: {
    title: "How to Use Exam Challenge (Mixed Mode)",
    body: [
      "Use this mode in the last phase of your studying or as a weekly check-in.",
      "Questions here should pull from multiple sections and drug groups, like the real exam.",
      "Treat each run like a mini mock exam: no distractions, no pausing to look things up.",
      "After a run, review ONLY the questions you missed or guessed on — those are your highest-yield review topics.",
      "Goal: simulate exam brain — switching between topics while still recognizing patterns and mechanisms."
    ]
  }
} as const;

/**
 * Short taglines for buttons/cards
 */
export const modeTaglines = {
  overview: "Read this first for the big picture and key patterns.",
  conceptsQuiz: "Core questions to lock in understanding.",
  conceptsChallenge: "Hard mode — simulate exam pressure.",
  drugsOverview: "Know the drugs: class, MOA, AE, contraindications.",
  drugsQuiz: "Exam-style drug questions for this category.",
  drugsChallenge: "Tough drug scenarios to make the real exam feel easy.",
  examChallenge: "Mixed-topic drill to test your overall readiness."
} as const;

/**
 * Reusable component for showing mode instructions
 */
export type ModeInstructionKey = keyof typeof modeInstructions;
