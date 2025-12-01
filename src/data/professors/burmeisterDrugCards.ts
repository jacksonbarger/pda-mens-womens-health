// Professor Burmeister Drug Cards - Pathophysiology Context
// Brief drug cards focusing on how drugs relate to disease mechanisms

import type { DrugCard } from './professorTypes';

export const burmeisterDrugCards: DrugCard[] = [
  // ===== BPH DRUGS (Pathophys Context) =====
  {
    id: 'tamsulosin-path',
    drugName: 'Tamsulosin',
    brandNames: ['Flomax'],
    drugClass: 'Alpha-1A Antagonist',

    pathophysiologyContext: 'BPH involves both STATIC (prostate enlargement) and DYNAMIC (smooth muscle tone) components. Tamsulosin addresses the DYNAMIC component by blocking alpha-1A receptors in prostatic smooth muscle and bladder neck → relaxation → improved urine flow. Does NOT reduce prostate size (does not address static component).',

    moa: 'Alpha-1A antagonist → smooth muscle relaxation',

    indications: ['BPH (LUTS)'],

    highYield: [
      'Addresses DYNAMIC component of BPH (muscle tone)',
      'Does NOT shrink prostate (no effect on static component)',
      'Works on SYMPTOMS not cause',
      'Alpha-1A selectivity reduces CV side effects',
      'Fast onset (days to weeks)'
    ],

    slideReference: 'Burmeister - BPH Pathophysiology'
  },

  {
    id: 'finasteride-path',
    drugName: 'Finasteride',
    brandNames: ['Proscar'],
    drugClass: '5-Alpha-Reductase Inhibitor',

    pathophysiologyContext: 'BPH is driven by DHT (dihydrotestosterone) which is more potent than testosterone and promotes prostate growth. Finasteride blocks 5-alpha-reductase type 2 → prevents testosterone → DHT conversion → reduces DHT levels by ~70% → SHRINKS prostate size by ~25%. Addresses STATIC component of BPH. Very slow onset (6-12 months) reflects time needed for prostate involution.',

    moa: '5-alpha-reductase type 2 inhibitor → reduces DHT → shrinks prostate',

    indications: ['BPH', 'Male pattern baldness'],

    highYield: [
      'Addresses STATIC component (prostate size)',
      'Reduces prostate size by ~25%',
      'Very slow (6-12 months for full effect)',
      'Targets DHT (pathogenic hormone)',
      'Reduces PSA by ~50% (must account for screening)'
    ],

    slideReference: 'Burmeister - BPH Pathophysiology'
  },

  // ===== ED DRUGS (Pathophys Context) =====
  {
    id: 'sildenafil-path',
    drugName: 'Sildenafil',
    brandNames: ['Viagra'],
    drugClass: 'PDE5 Inhibitor',

    pathophysiologyContext: 'Normal erection: parasympathetic stimulation → NO release → guanylate cyclase → cGMP → smooth muscle relaxation → vasodilation. PDE5 normally breaks down cGMP (detumescence). Sildenafil blocks PDE5 → prevents cGMP breakdown → maintains smooth muscle relaxation → sustains erection. Does NOT cause erection without sexual stimulation (still requires NO release from parasympathetic activation).',

    moa: 'PDE5 inhibitor → prevents cGMP breakdown → maintains vasodilation',

    indications: ['ED'],

    highYield: [
      'Enhances normal physiology (requires sexual stimulation/NO)',
      'Prevents cGMP BREAKDOWN (does not create cGMP)',
      'Requires intact parasympathetic pathway',
      'ABSOLUTE CI with nitrates (both increase cGMP → severe hypotension)',
      'Does not work in complete vascular or neurologic damage'
    ],

    slideReference: 'Burmeister - Erectile Physiology'
  },

  // ===== OSTEOPOROSIS DRUGS (Pathophys Context) =====
  {
    id: 'alendronate-path',
    drugName: 'Alendronate',
    brandNames: ['Fosamax'],
    drugClass: 'Bisphosphonate',

    pathophysiologyContext: 'Bone remodeling involves continuous balance between osteoblast formation and osteoclast resorption. Osteoporosis = excessive resorption > formation. Alendronate binds hydroxyapatite in bone → incorporated into bone matrix → taken up by osteoclasts during resorption → inhibits osteoclast function → REDUCES RESORPTION. ANTIRESORPTIVE agent (prevents bone loss, does not build new bone). Long bone retention (years) provides persistent effect.',

    moa: 'Inhibits osteoclast bone resorption',

    indications: ['Osteoporosis'],

    highYield: [
      'ANTIRESORPTIVE (prevents loss, does not build)',
      'Targets excessive osteoclast activity in osteoporosis',
      'Long bone retention (persists after discontinuation)',
      'Drug holiday after 5 years for low-risk patients',
      'Reduces fracture risk by reducing bone turnover'
    ],

    slideReference: 'Burmeister - Bone Remodeling Physiology'
  },

  {
    id: 'teriparatide-path',
    drugName: 'Teriparatide',
    brandNames: ['Forteo'],
    drugClass: 'PTH Analogue',

    pathophysiologyContext: 'Unlike antiresorptive drugs, teriparatide is ANABOLIC (builds bone). Paradoxically, continuous high PTH (hyperparathyroidism) causes bone loss, but INTERMITTENT PTH administration stimulates osteoblast activity > osteoclast activity → net bone formation. Intermittent exposure mimics physiologic pulsatile PTH secretion. Only anabolic agent for osteoporosis. Reserved for severe osteoporosis because most expensive and limited to 2 year lifetime use.',

    moa: 'Intermittent PTH → net anabolic effect (stimulates osteoblasts > osteoclasts)',

    indications: ['Severe osteoporosis'],

    highYield: [
      'ANABOLIC (builds bone) vs antiresorptive',
      'Intermittent dosing key (continuous PTH causes loss)',
      'Only drug that BUILDS bone',
      'Reserved for SEVERE osteoporosis',
      'Maximum 2 years lifetime use',
      'Must follow with antiresorptive'
    ],

    slideReference: 'Burmeister - PTH Physiology'
  },

  {
    id: 'denosumab-path',
    drugName: 'Denosumab',
    brandNames: ['Prolia'],
    drugClass: 'RANKL Inhibitor',

    pathophysiologyContext: 'Osteoclast differentiation requires RANKL (from osteoblasts) binding RANK (on osteoclast precursors). This is the key signal for osteoclast formation. Denosumab is monoclonal antibody that binds RANKL → prevents RANKL-RANK interaction → blocks osteoclast formation and activation → antiresorptive effect. CRITICAL: stopping denosumab causes REBOUND EFFECT with rapid bone loss and fracture risk because RANKL suddenly unopposed.',

    moa: 'Blocks RANKL → prevents osteoclast formation',

    indications: ['Osteoporosis'],

    highYield: [
      'Blocks osteoclast FORMATION (vs bisphosphonates block function)',
      'Targets RANKL-RANK pathway (key osteoclast signal)',
      'NO DRUG HOLIDAY (causes rebound fractures)',
      'Must transition to bisphosphonate if stopping',
      'Safe in renal impairment (not renally cleared)',
      'Rebound effect is unique risk'
    ],

    slideReference: 'Burmeister - Osteoclast Differentiation'
  },

  // ===== GONADAL HORMONES (Pathophys Context) =====
  {
    id: 'estrogen-path',
    drugName: 'Estrogen (Estradiol)',
    brandNames: ['Estrace', 'Vivelle'],
    drugClass: 'Estrogen',

    pathophysiologyContext: 'Menopause: ovarian follicle depletion → loss of estrogen production → multiple effects. Hypothalamic thermoregulation becomes unstable without estrogen → hot flashes. Vaginal epithelium thins without estrogen → atrophy, dryness. Bone remodeling shifts toward resorption without estrogen\'s antiresorptive effect → osteoporosis risk. Estrogen replacement addresses these symptoms by restoring physiologic effects. MUST combine with progestin in women with intact uterus because unopposed estrogen causes endometrial proliferation → hyperplasia → cancer risk.',

    moa: 'Estrogen receptor agonist → multiple tissue effects',

    indications: ['Menopausal symptoms', 'Osteoporosis prevention'],

    highYield: [
      'Replaces lost hormone in menopause',
      'Addresses hot flashes (hypothalamic effect)',
      'Prevents vaginal atrophy (local tissue effect)',
      'Antiresorptive for bone (prevents osteoporosis)',
      'MUST add progestin if uterus present (prevent endometrial cancer)',
      'Unopposed estrogen = endometrial hyperplasia/cancer'
    ],

    slideReference: 'Burmeister - Menopause Pathophysiology'
  },

  {
    id: 'oral-contraceptives-path',
    drugName: 'Combined Oral Contraceptives',
    brandNames: ['Various'],
    drugClass: 'Estrogen + Progestin',

    pathophysiologyContext: 'Normal ovulation: pulsatile GnRH → FSH/LH surge → follicle maturation → ovulation. Combined OCs provide CONTINUOUS estrogen + progestin → NEGATIVE FEEDBACK on hypothalamus/pituitary → suppresses GnRH, FSH, LH → prevents follicle maturation and ovulation. Progestin also thickens cervical mucus (impedes sperm) and thins endometrium (impairs implantation). Multiple mechanisms provide contraceptive effect.',

    moa: 'Suppress ovulation via negative feedback + cervical mucus + endometrial effects',

    indications: ['Contraception'],

    highYield: [
      'Suppress ovulation via NEGATIVE FEEDBACK',
      'Continuous hormones (vs physiologic cycling)',
      'Multiple mechanisms (ovulation, mucus, endometrium)',
      'Estrogen suppresses FSH, progestin suppresses LH',
      'Both hormones contribute to negative feedback',
      'Withdrawal bleeding is NOT true menstruation'
    ],

    slideReference: 'Burmeister - HPO Axis Physiology'
  },

  {
    id: 'tamoxifen-path',
    drugName: 'Tamoxifen',
    brandNames: ['Nolvadex'],
    drugClass: 'SERM',

    pathophysiologyContext: 'ER-positive breast cancer growth is driven by estrogen binding estrogen receptors → proliferation signals. Tamoxifen is SERM: estrogen ANTAGONIST in breast tissue → blocks estrogen from binding ER → prevents proliferation signals → slows/stops cancer growth. Tissue-selective: antagonist in breast but PARTIAL AGONIST in uterus (endometrial cancer risk) and bone (beneficial for BMD). Used for treatment and prevention in high-risk women.',

    moa: 'ER antagonist in breast → blocks estrogen-driven proliferation',

    indications: ['ER+ breast cancer'],

    highYield: [
      'Blocks estrogen-driven breast cancer growth',
      'SERM: tissue-selective effects',
      'Antagonist in breast, partial agonist in uterus/bone',
      'Endometrial cancer risk (uterine agonist effect)',
      'Both treatment and prevention',
      'Requires ER-positive cancer'
    ],

    slideReference: 'Burmeister - Breast Cancer Pathophysiology'
  },

  {
    id: 'aromatase-inhibitors-path',
    drugName: 'Aromatase Inhibitors (Anastrozole)',
    brandNames: ['Arimidex'],
    drugClass: 'Aromatase Inhibitor',

    pathophysiologyContext: 'Postmenopausal estrogen production: ovaries shut down, but adrenal androgens converted to estrogen via AROMATASE in peripheral tissues (fat, muscle). This is the main source of estrogen in postmenopausal women and can drive ER+ breast cancer. Aromatase inhibitors block this conversion → dramatically reduce circulating estrogen → starve ER+ cancer. ONLY work postmenopausally (premenopausal ovaries produce too much estrogen to block). More effective than tamoxifen in postmenopausal women.',

    moa: 'Blocks aromatase → prevents androgen → estrogen conversion → reduces estrogen',

    indications: ['ER+ breast cancer (postmenopausal only)'],

    highYield: [
      'Block postmenopausal estrogen production',
      'Target peripheral aromatase (adrenal androgens → estrogen)',
      'ONLY postmenopausal (ovaries produce too much to block)',
      'More effective than tamoxifen in postmenopausal',
      'Bone loss major side effect (no estrogen)',
      'Starvation strategy (remove estrogen)'
    ],

    slideReference: 'Burmeister - Postmenopausal Estrogen Production'
  }
];
