/**
 * App Introduction
 *
 * Shown on home page to guide students on how to use the app effectively.
 * Exam-first, efficiency-first approach.
 */

export const appIntro = {
  title: "How to Use Santa's PDA Workshop",
  subtitle: "Fastest path to passing the exam AND actually understanding what you're doing.",
  steps: [
    {
      title: "1) Pick a topic you're weak on.",
      body: "Start in Study Concepts. Choose the section that scares you most right now (e.g., PCOS, Endometriosis, Contraception)."
    },
    {
      title: "2) Read the Overview once (don't memorize).",
      body: "Use the Overview tab to get the big picture: what the disease is, why it happens, and the key patterns. Don't aim for perfection here—just understand the story."
    },
    {
      title: "3) Do the Quiz until you hit ~80–90% comfortably.",
      body: "Switch to Quiz. Work through questions at a normal pace. Read every explanation, even when you're right. Mark or mentally note any questions you guessed on."
    },
    {
      title: "4) Use Challenge modes and Exam Challenge near test time.",
      body: "Once you're solid on a topic, use Challenge or Exam Challenge to simulate exam conditions. Focus especially on Drug and mixed-topic challenges—they're closest to real test questions."
    }
  ],
  footerNote: "Rule of thumb: Overview → Quiz → Challenge. Repeat that loop for the topics and drug categories most likely to show up on your exam."
} as const;
