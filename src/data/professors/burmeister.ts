// Professor Burmeister - Pathophysiology Content
// Focus: Disorders of Female/Male Reproductive Systems, Urinary Tract Function

import type { ProfessorContent } from './professorTypes';
import { burmeisterFlashcards } from './burmeisterFlashcards';
import { burmeisterQuiz } from './burmeisterQuiz';
import { burmeisterDrugCards } from './burmeisterDrugCards';

export const burmeisterContent: ProfessorContent = {
  id: 'burmeister',
  name: 'Burmeister',
  fullName: 'Professor Burmeister',
  specialty: 'Pathophysiology',
  icon: '🔬',
  slideFiles: [
    'Chapter 47 - Disorders of the Female Reproductive System - 11-8-21.pptx',
    'Chapter 48 - Disorders of the Male Reproductive System - 10-6-20.pptx',
    'Chapters 45, 47, and 48 - Disorders of Urinary Tract Function - 11-8-21.pptx'
  ],
  overview: {
    summary: 'Professor Burmeister covers pathophysiology of reproductive and urinary disorders with emphasis on etiology, pathogenesis, clinical manifestations, and diagnostic criteria. Focus on understanding disease mechanisms, distinguishing between primary and secondary disorders, and recognizing key clinical presentations.',
    topics: [
      'Disorders of the Female Breasts (BBD, Galactorrhea, Mastitis)',
      'Menstrual Disorders (Dysmenorrhea, Amenorrhea, DUB, PMS)',
      'PCOS and Endometriosis',
      'Female Infertility',
      'Disorders of the Male Reproductive System',
      'BPH, Erectile Dysfunction, Prostatitis',
      'Disorders of Urinary Tract Function',
      'Urinary Incontinence Types and Mechanisms'
    ],
    learningObjectives: [
      'Understand the etiology and pathogenesis of galactorrhea including idiopathic causes',
      'Differentiate between proliferative and nonproliferative benign breast disease',
      'Distinguish between primary and secondary dysmenorrhea',
      'Define primary amenorrhea (absence of menarche by age 15) and secondary amenorrhea (cessation for 3+ months)',
      'Understand the hormonal physiology of the menstrual cycle (GnRH, FSH, LH, corpus luteum)',
      'Recognize clinical manifestations of dysfunctional uterine bleeding (DUB)',
      'Apply PMS diagnostic criteria (5 days before period, 3 consecutive cycles, interferes with life, ends within 4 days after cycle)',
      'Understand PCOS pathophysiology and clinical manifestations (hyperandrogenism, hirsutism, acne)',
      'Recognize endometriosis presentation and common ectopic sites',
      'Differentiate between urge, stress, and mixed incontinence'
    ],
    highYieldConcepts: [
      // Category markers start with "###" to be rendered as headers
      '### BENIGN BREAST DISEASE & GALACTORRHEA',
      'Galactorrhea: Idiopathic = diagnosis of exclusion when breast tissue is particularly sensitive to prolactin',
      'Galactorrhea: Results when breast tissue is particularly sensitive to prolactin in the blood',
      'Proliferative BBD increases cancer risk; nonproliferative BBD does NOT increase cancer risk',
      'Cooper ligaments: connective tissue that gives breast shape; dimpling suggests growth beneath',
      'Mastitis: triggered by nipple irritation, trauma, chafing; presents with localized erythema, warmth, burning during breastfeeding',

      '### MENSTRUAL DISORDERS',
      'Primary dysmenorrhea: begins ~6 months after menarche, lasts 48-72 hours',
      'Secondary dysmenorrhea: affects 2nd-3rd decade, may have heavy flow/painful intercourse/poor OCP response',
      'Primary amenorrhea: absence of menarche by age 15',
      'Secondary amenorrhea: stops menstruating for ≥3 months (excluding pregnancy/lactation/menopause)',
      'Menstrual cycle: GnRH → FSH + LH; FSH prepares follicle; LH causes ovulation; corpus luteum shed if no implantation',
      'DUB most affects women who just started cycle OR are peri/postmenopausal',

      '### PCOS, ENDOMETRIOSIS & PMS',
      'PMS diagnostic criteria: symptoms 5 days before period, persist 3 consecutive cycles, interfere with life, end within 4 days after cycle',
      'PCOS: abnormal HPO axis, hyperandrogenism (hirsutism, acne), metabolic syndrome, diabetes risk',
      'Endometriosis most common sites: fallopian tubes, vagina, cervix, uterosacral ligaments',

      '### MALE REPRODUCTIVE DISORDERS',
      'BPH: enlargement of prostate gland causing urinary symptoms (frequency, urgency, weak stream, nocturia)',
      'BPH most common in men >50yo; caused by DHT (dihydrotestosterone) stimulation of prostate growth',
      'Erectile dysfunction (ED): inability to achieve/maintain erection; causes include vascular, neurologic, hormonal, psychogenic',
      'ED evaluation: rule out cardiovascular disease, diabetes, medications (especially antihypertensives, antidepressants)',
      'Prostatitis: inflammation of prostate; acute (bacterial, sudden onset with fever/pain) vs chronic (persistent pelvic pain)',

      '### URINARY DISORDERS & INCONTINENCE',
      'Stress incontinence: urine leakage with increased abdominal pressure (cough, sneeze, exercise); due to weak pelvic floor/sphincter',
      'Urge incontinence: sudden strong urge to urinate with involuntary leakage; due to detrusor overactivity',
      'Mixed incontinence: combination of stress and urge incontinence symptoms',
      'Overflow incontinence: bladder does not empty completely; causes include BPH, diabetic neuropathy, medications',

      '### FEMALE INFERTILITY',
      'Female infertility assessment: after 1 year if <35yo, after 6 months if ≥35yo'
    ],
    clinicalPearls: [
      'Galactorrhea is a diagnosis of exclusion - rule out medications, tumors, thyroid disorders, renal failure before diagnosing idiopathic',
      'Combined OCPs work by: suppressing FSH/LH (stop ovulation), thinning uterine lining (prevent implantation), thickening cervical mucus (inhibit sperm)',
      'If DUB left untreated → uterine lining thickens → hyperplastic cells → possible malignancy',
      'PMS responds well to SSRIs due to serotonin deficiency; Mg/Ca deficiencies also contribute',
      'PCOS diagnosis made by EXCLUDING all other disorders causing menstrual irregularity and hyperandrogenism'
    ],
    relatedSections: [
      'benign-breast-disease',
      'galactorrhea',
      'bph',
      'erectile-dysfunction',
      'urinary-incontinence-pharmacology'
    ]
  },
  flashcards: burmeisterFlashcards,
  quiz: burmeisterQuiz,
  drugCards: burmeisterDrugCards,
  flowchartFile: '/flowcharts/burmeister.drawio'
};
