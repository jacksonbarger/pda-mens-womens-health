// Professor Breeze - Pharmacology Content
// Focus: GU/ED Pharmacology, Bone/Parathyroid/Osteoporosis, Gonadal Hormones/Birth Control

import type { ProfessorContent } from './professorTypes';
import { breezeFlashcards } from './breezeFlashcards';
import { breezeQuiz } from './breezeQuiz';
import { breezeDrugCards } from './breezeDrugCards';

export const breezeContent: ProfessorContent = {
  id: 'breeze',
  name: 'Breeze',
  fullName: 'Professor Breeze',
  specialty: 'Pharmacology',
  icon: '💊',
  slideFiles: [
    'PHA 723 GU and ED Pharmacology 2025 - Student.pptx',
    'PHA 732 Bone, Parathyroid, and Osteoporosis Student 2025.pptx',
    'PHA 732 Gonadal-Hormones-Inhibitors-Birth Control 2025.pptx'
  ],
  overview: {
    summary: 'Professor Breeze covers pharmacology of genitourinary disorders, erectile dysfunction, bone health, and reproductive hormones with emphasis on mechanisms of action, drug comparisons, side effects, and contraindications. Focus on highlighted content (blue/yellow) and bold text indicating key learning points.',
    topics: [
      'Erectile Dysfunction and Mechanisms (NO/cGMP pathway)',
      'PDE5 Inhibitors (Sildenafil, Tadalafil, Vardenafil, Avanafil)',
      'Alprostadil (PGE1) for ED',
      'Benign Prostatic Hyperplasia (BPH) Pathophysiology',
      'Alpha-1 Antagonists for BPH (Tamsulosin, Alfuzosin, Silodosin)',
      '5-Alpha-Reductase Inhibitors (Finasteride, Dutasteride)',
      'Overactive Bladder (OAB) - Antimuscarinics and Beta-3 Agonists',
      'Calcium and Phosphate Homeostasis (PTH, Vitamin D, Calcitonin)',
      'Bone Cell Biology and RANK/RANKL Pathway',
      'Osteoporosis Pathophysiology and Diagnosis',
      'Bisphosphonates (Alendronate, Risedronate, Ibandronate, Zoledronic Acid)',
      'SERMs (Raloxifene, Tamoxifen)',
      'Monoclonal Antibodies (Denosumab, Romosozumab)',
      'Anabolic Agents (Teriparatide, Abaloparatide)',
      'HPG Axis and Menstrual Cycle Physiology',
      'Estrogen and Progesterone/Progestins',
      'Combined Oral Contraceptives (MOA, Formulations, Risks)',
      'Progestin-Only Contraceptives',
      'Emergency Contraception (Plan B, Ella)',
      'Hormone Replacement Therapy (HRT)',
      'SERMs and Aromatase Inhibitors for Breast Cancer'
    ],
    learningObjectives: [
      'Understand the NO/cGMP pathway for penile erection and detumescence mechanisms',
      'Compare onset, duration, and side effects of PDE5 inhibitors (sildenafil, tadalafil, vardenafil, avanafil)',
      'Recognize absolute contraindication: PDE5 inhibitors with nitrates',
      'Differentiate alpha-1 blocker selectivity (tamsulosin vs non-selective agents)',
      'Compare finasteride vs dutasteride mechanism and onset of action',
      'Understand antimuscarinic vs beta-3 agonist side effect profiles for OAB',
      'Explain PTH, Vitamin D, and Calcitonin roles in calcium homeostasis',
      'Understand the RANK/RANKL pathway and osteoclast activation',
      'Know proper administration of oral bisphosphonates to avoid esophageal irritation',
      'Recognize BRONJ risk factors and bisphosphonate drug holiday guidelines',
      'Compare bisphosphonates, SERMs, denosumab, and romosozumab for osteoporosis',
      'Identify Black Box Warnings: romosozumab (CV events), teriparatide (osteosarcoma)',
      'Understand why denosumab requires transition to another agent when stopped',
      'Explain three mechanisms of combined OCPs (prevent ovulation, thin endometrium, thicken mucus)',
      'Recognize absolute contraindications for combined OCPs (VTE, smoking >35, pregnancy, breast cancer)',
      'Differentiate progestin generations and androgenic activity',
      'Compare emergency contraceptives (Plan B vs Ella - mechanism, duration, efficacy)',
      'Understand tissue-specific SERM activity (tamoxifen, raloxifene)',
      'Know aromatase inhibitor indications as second-line breast cancer therapy',
      'Recognize HRT formulations and why progestins are required with intact uterus'
    ],
    highYieldConcepts: [
      // GU/ED High-Yield
      'Erection: Parasympathetic → NO → guanylate cyclase → cGMP → smooth muscle relaxation → vasodilation',
      'Detumescence: Sympathetic → norepinephrine → PDE5 activates → degrades cGMP → contraction',
      'PDE5 inhibitors MOA: Block PDE5 → prevent cGMP degradation → prolong erection (REQUIRES sexual stimulation)',
      'ABSOLUTE CI: PDE5 inhibitors + nitrates = severe hypotension',
      'Sildenafil (Viagra): Onset 30-60min, Duration 4-6hr, take 1hr before sex',
      'Tadalafil (Cialis): Onset 30min, Duration 24-36hr (LONGEST), daily or PRN dosing',
      'Avanafil (Stendra): FASTEST onset 15-30min, Duration 6hr, fewer side effects',
      'Alprostadil (PGE1): DIRECT vasodilation, does NOT require sexual stimulation, intracavernous injection or urethral pellet',
      'Tamsulosin (Flomax): Selective alpha-1A (prostate) → LESS orthostatic hypotension vs non-selective',
      'Finasteride: Blocks type 2 5-alpha-reductase only',
      'Dutasteride: Blocks BOTH type 1 and type 2 5-alpha-reductase (more complete DHT suppression)',
      '5-ARI takes 6+ MONTHS for full effect; must DOUBLE PSA values for cancer screening',
      '5-ARI WARNING: Can cause birth defects - pregnant women should NOT handle crushed tablets',
      'BPH combination therapy: Alpha blocker (immediate relief) + 5-ARI (long-term shrinkage)',
      'OAB: Antimuscarinics (block M3) vs Beta-3 agonists (Mirabegron, Vibegron - NO anticholinergic SE)',

      // Bone/Osteoporosis High-Yield
      'PTH (low Ca): Increases bone resorption, increases renal Ca reabsorption, activates Vitamin D',
      'Vitamin D synthesis: Skin (UV) → D3 → Liver (25-OH) → Kidney (PTH stimulus) → 1,25-(OH)2 D (ACTIVE)',
      'Calcitonin (high Ca): Inhibits osteoclast activity, decreases bone resorption',
      'RANK/RANKL pathway: PTH → osteoblasts express RANKL → binds RANK on osteoclast precursors → differentiation → bone resorption',
      'Postmenopausal osteoporosis: Estrogen deficiency → increased osteoclast activity → trabecular bone loss',
      'Bisphosphonates MOA: Bind hydroxyapatite → inhibit osteoclast activity/proliferation → reduce bone resorption',
      'Oral bisphosphonate administration: Take FIRST THING in morning, 6-8oz water, 30-60min BEFORE anything, remain UPRIGHT 30-60min',
      'Bisphosphonates CI: Hypocalcemia (correct first!), CrCl <30-35, inability to sit/stand 30min, esophageal disorders',
      'BRONJ: Bisphosphonate-Related Osteonecrosis of Jaw - risk with nitrogen-containing BPPs, IV > PO, dental surgery',
      'Bisphosphonate duration: After 3-5 years, perform risk assessment; consider drug holiday for low-risk patients',
      'Zoledronic acid (Reclast): Most potent bisphosphonate, IV annually, NO GI side effects',
      'Raloxifene (Evista): SERM - estrogen agonist in bone, antagonist in breast/uterus. CI: History of VTE',
      'Denosumab (Prolia): Monoclonal antibody against RANKL, SC q6 months. WARNING: Rapid bone loss if stopped - must transition',
      'Romosozumab (Evenity): Anti-sclerostin antibody, INCREASES bone formation + DECREASES resorption (dual action). BBW: MI/stroke/CV death risk',
      'Romosozumab CI: MI or stroke within preceding year, CV risk factors',
      'Teriparatide (Forteo): Recombinant PTH, ONLY bone formation therapy, daily SC injection. BBW: Osteosarcoma. Max 2 years lifetime use',
      'Calcium carbonate: Requires acid (take WITH food), more constipation, PPI decreases absorption',
      'Calcium citrate: NO acid required (take anytime), better for elderly/PPI users, less constipation',

      // Gonadal Hormones High-Yield
      'HPG Axis: Hypothalamus (GnRH) → Pituitary (FSH, LH) → Gonads (estrogen, progesterone, testosterone)',
      'Menstrual cycle: FOLLICULAR (FSH/LH increase) → OVULATION (LH surge, follicle release) → LUTEAL (progesterone prepares endometrium)',
      'Combined OCP MOA: 1) Prevent ovulation (suppress LH/FSH), 2) Thin endometrium, 3) Thicken cervical mucus',
      'Combined OCP ABSOLUTE CI: Smoking >35, VTE history, stroke, MI, breast cancer, pregnancy, undiagnosed vaginal bleeding',
      'Combined OCP risks: VTE (2-fold with smoking/age), stroke, MI, breast cancer, cervical neoplasia (5+ years)',
      'Ethinyl estradiol: Active estrogen, 2X more potent than mestranol (inactive prodrug)',
      'Progestin generations: 2nd gen (norgestrel/levonorgestrel - HIGH androgenic) vs 3rd gen (norgestimate/desogestrel - LOW androgenic)',
      'Extended regimen (Seasonique): 84 days active + 7 days low-dose estrogen → period q3 months, less bleeding',
      'Progestin-only contraceptives: For CV risk, DM, estrogen CI, migraine, smokers >35, postpartum/breastfeeding',
      'Plan B (levonorgestrel): Emergency contraception within 72 hours, less effective in obese',
      'Ella (ulipristal): Emergency contraception within 5 DAYS, ONLY one that delays ovulation, more effective than Plan B',
      'HRT: MUST use progestin in women with intact uterus to prevent endometrial hyperplasia/cancer from unopposed estrogen',
      'Tamoxifen: SERM - estrogen antagonist in breast (treats ER+ cancer), agonist in uterus (increases endometrial cancer risk)',
      'Raloxifene: SERM - agonist in bone, antagonist in breast/uterus (NO endometrial effects, used for osteoporosis)',
      'Aromatase inhibitors: Block estrogen synthesis, 2nd line for breast cancer after tamoxifen. Examples: Anastrozole, Letrozole, Exemestane',
      'Clomiphene: Blocks estrogen negative feedback → increases GnRH/FSH/LH → induces ovulation. Twins common',
      'Mifepristone: Progesterone antagonist, terminates pregnancy >85% in first 7 weeks, REMS program'
    ],
    clinicalPearls: [
      'PDE5 inhibitor + nitrate combination is LIFE-THREATENING - always screen for nitrate use',
      'Tamsulosin taken at bedtime can reduce orthostatic hypotension in elderly patients',
      'Combination BPH therapy (alpha blocker + 5-ARI) provides both immediate relief and long-term benefit',
      'Bisphosphonates: If patient cannot follow strict administration requirements, use IV zoledronic acid',
      'Always correct hypocalcemia BEFORE starting denosumab or romosozumab',
      'Drug holiday after 3-5 years of bisphosphonates balances fracture prevention against atypical fracture risk',
      'Denosumab discontinuation causes rapid bone loss - plan transition to bisphosphonate before stopping',
      'Calcium citrate is preferred for elderly, those on PPIs, and those with constipation',
      'Antibiotic use decreases OCP efficacy - counsel backup contraception during and 7 days after antibiotics',
      'Progestin-only contraceptives avoid estrogen-related VTE and CV risks - ideal for high-risk patients',
      'Emergency contraception is MORE effective the SOONER it is taken - counsel patients about timing',
      'Women on HRT with intact uterus MUST receive progestin to prevent endometrial cancer',
      'Tamoxifen increases endometrial cancer risk - monitor for abnormal vaginal bleeding',
      'Aromatase inhibitors only work in postmenopausal women (no ovarian estrogen production)',
      'Romosozumab dual action (formation + resorption) is unique but CV contraindications limit use'
    ],
    relatedSections: [
      'bph',
      'erectile-dysfunction',
      'contraception',
      'osteoporosis-pharmacology',
      'gonadal-hormones-pharmacology'
    ]
  },
  flashcards: breezeFlashcards,
  quiz: breezeQuiz,
  drugCards: breezeDrugCards,
  flowchartFile: '/flowcharts/breeze.drawio'
};
