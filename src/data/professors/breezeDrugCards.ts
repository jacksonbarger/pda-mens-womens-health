// Professor Breeze Drug Cards - Pharmacology Focus
// Comprehensive drug information for GU/ED, Bone/Osteoporosis, Gonadal Hormones

import type { DrugCard } from './professorTypes';

export const breezeDrugCards: DrugCard[] = [
  // ===== ERECTILE DYSFUNCTION DRUGS =====
  {
    id: 'sildenafil',
    drugName: 'Sildenafil',
    brandNames: ['Viagra', 'Revatio'],
    drugClass: 'PDE5 Inhibitor',

    moa: 'Inhibits phosphodiesterase type 5 (PDE5) → prevents breakdown of cGMP → smooth muscle relaxation → vasodilation in corpus cavernosum → erection',

    indications: [
      'Erectile dysfunction (Viagra)',
      'Pulmonary arterial hypertension (Revatio)'
    ],

    sideEffects: [
      'Headache (most common)',
      'Flushing',
      'Dyspepsia',
      'Nasal congestion',
      'Blue vision (poor PDE5/PDE6 selectivity - PDE6 in retina)',
      'Priapism (rare)'
    ],

    contraindications: [
      'ABSOLUTE CI: Concurrent nitrate use (severe hypotension)',
      'Unstable angina',
      'Recent MI or stroke',
      'Severe hepatic impairment'
    ],

    drugInteractions: [
      'Nitrates: LIFE-THREATENING hypotension (absolutely contraindicated)',
      'Alpha-blockers: additive hypotension',
      'CYP3A4 inhibitors: increase sildenafil levels'
    ],

    clinicalConsiderations: [
      'Take 1 hour before sexual activity',
      'Duration: 4-6 hours',
      'Food decreases absorption (especially fatty meals)',
      'Onset: 30-60 minutes'
    ],

    highYield: [
      'ABSOLUTE CI with nitrates → life-threatening hypotension',
      'Blue vision = poor PDE5/PDE6 selectivity',
      'Inhibits cGMP breakdown → maintains erection',
      'Most common side effect: headache'
    ],

    slideReference: 'GU/ED Pharmacology - PDE5 Inhibitors'
  },

  {
    id: 'tadalafil',
    drugName: 'Tadalafil',
    brandNames: ['Cialis'],
    drugClass: 'PDE5 Inhibitor',

    moa: 'Inhibits PDE5 → prevents cGMP breakdown → smooth muscle relaxation → vasodilation',

    indications: [
      'Erectile dysfunction',
      'BPH',
      'BPH + ED (dual indication)'
    ],

    sideEffects: [
      'Headache',
      'Dyspepsia',
      'Back pain (more common than other PDE5 inhibitors)',
      'Myalgia',
      'Flushing',
      'Nasal congestion'
    ],

    contraindications: [
      'ABSOLUTE CI: Concurrent nitrate use',
      'Severe cardiovascular disease'
    ],

    drugInteractions: [
      'Nitrates: LIFE-THREATENING hypotension',
      'Alpha-blockers: additive hypotension'
    ],

    clinicalConsiderations: [
      'LONGEST duration: 24-36 hours ("weekend pill")',
      'Can be taken daily at lower dose (2.5-5mg)',
      'Less affected by food than sildenafil',
      'Dual indication: ED + BPH'
    ],

    highYield: [
      'Longest duration PDE5 inhibitor (24-36 hours)',
      'Can treat both ED and BPH',
      'Back pain more common than other PDE5 inhibitors',
      'Daily dosing option available'
    ],

    slideReference: 'GU/ED Pharmacology - PDE5 Inhibitors'
  },

  {
    id: 'vardenafil',
    drugName: 'Vardenafil',
    brandNames: ['Levitra', 'Staxyn'],
    drugClass: 'PDE5 Inhibitor',

    moa: 'Inhibits PDE5 → prevents cGMP breakdown → smooth muscle relaxation',

    indications: ['Erectile dysfunction'],

    sideEffects: [
      'Headache',
      'Flushing',
      'Nasal congestion',
      'QTc prolongation (more than other PDE5 inhibitors)'
    ],

    contraindications: [
      'ABSOLUTE CI: Concurrent nitrate use',
      'QT prolongation or patients on Class IA/III antiarrhythmics',
      'Congenital QT prolongation'
    ],

    drugInteractions: [
      'Nitrates: LIFE-THREATENING hypotension',
      'Class IA/III antiarrhythmics: QT prolongation',
      'Alpha-blockers: hypotension'
    ],

    clinicalConsiderations: [
      'Duration: 4-6 hours',
      'Most potent PDE5 inhibitor (lowest IC50)',
      'Higher risk of QT prolongation'
    ],

    highYield: [
      'Most potent PDE5 inhibitor',
      'QT prolongation risk (unique concern)',
      'CI with Class IA/III antiarrhythmics',
      'Similar duration to sildenafil (4-6 hours)'
    ],

    slideReference: 'GU/ED Pharmacology - PDE5 Inhibitors'
  },

  {
    id: 'alprostadil',
    drugName: 'Alprostadil',
    brandNames: ['Caverject (injection)', 'MUSE (urethral suppository)', 'Edex'],
    drugClass: 'Prostaglandin E1 (PGE1)',

    moa: 'Direct vasodilator → increases cAMP → smooth muscle relaxation → penile vasodilation',

    indications: [
      'Erectile dysfunction (when PDE5 inhibitors contraindicated or ineffective)'
    ],

    sideEffects: [
      'Penile pain (most common)',
      'Priapism',
      'Injection site reactions',
      'Urethral burning (MUSE)',
      'Hypotension'
    ],

    contraindications: [
      'Conditions predisposing to priapism (sickle cell, leukemia)',
      'Penile implants or deformities',
      'Hypersensitivity to alprostadil'
    ],

    clinicalConsiderations: [
      'Caverject: intracavernosal injection',
      'MUSE: intraurethral suppository',
      'Works directly (not dependent on NO pathway)',
      'Alternative when PDE5 inhibitors fail or contraindicated',
      'Patient education critical for proper administration'
    ],

    highYield: [
      'PGE1 = direct vasodilator (not via NO/cGMP pathway)',
      'Two routes: injection (Caverject) or urethral (MUSE)',
      'Penile pain most common side effect',
      'Alternative to PDE5 inhibitors'
    ],

    slideReference: 'GU/ED Pharmacology - Alprostadil'
  },

  // ===== BPH DRUGS =====
  {
    id: 'tamsulosin',
    drugName: 'Tamsulosin',
    brandNames: ['Flomax'],
    drugClass: 'Alpha-1A Selective Antagonist',

    moa: 'Selective alpha-1A antagonist → smooth muscle relaxation in prostate and bladder neck → improved urinary flow',

    indications: ['BPH symptoms'],

    sideEffects: [
      'Orthostatic hypotension (less than non-selective)',
      'Dizziness',
      'Abnormal ejaculation (retrograde ejaculation)',
      'Floppy iris syndrome during cataract surgery',
      'Nasal congestion'
    ],

    contraindications: [
      'Hypersensitivity',
      'Severe hepatic impairment'
    ],

    drugInteractions: [
      'Other alpha-blockers: additive hypotension',
      'PDE5 inhibitors: additive hypotension',
      'Strong CYP3A4 or 2D6 inhibitors: increased levels'
    ],

    clinicalConsiderations: [
      'Alpha-1A selectivity → LESS cardiovascular effects',
      'Take 30 minutes after same meal each day',
      'Inform ophthalmologist before cataract surgery',
      'Effects seen within 2 weeks',
      'Does NOT reduce prostate size'
    ],

    highYield: [
      'Alpha-1A selective → less CV side effects than non-selective',
      'Floppy iris syndrome = surgical consideration',
      'Retrograde ejaculation common',
      'Does NOT shrink prostate (only relieves symptoms)',
      'Preferred in elderly due to reduced CV effects'
    ],

    slideReference: 'GU/ED Pharmacology - Alpha-1 Antagonists'
  },

  {
    id: 'finasteride',
    drugName: 'Finasteride',
    brandNames: ['Proscar (5mg for BPH)', 'Propecia (1mg for hair loss)'],
    drugClass: '5-Alpha-Reductase Inhibitor (Type 2 selective)',

    moa: 'Inhibits 5-alpha-reductase type 2 → blocks conversion of testosterone to DHT → reduces prostate size',

    indications: [
      'BPH (Proscar 5mg)',
      'Male pattern baldness (Propecia 1mg)'
    ],

    sideEffects: [
      'Sexual dysfunction (decreased libido, ED, ejaculatory disorders)',
      'Gynecomastia',
      'Decreased PSA levels (masks prostate cancer)'
    ],

    contraindications: [
      'Pregnancy (teratogenic - feminization of male fetus)',
      'Women of childbearing potential should not handle crushed tablets'
    ],

    drugInteractions: [
      'Minimal drug interactions',
      'Decreases PSA by ~50% (must account for this in cancer screening)'
    ],

    clinicalConsiderations: [
      'Takes 6-12 MONTHS for maximal effect',
      'Reduces prostate size by ~25%',
      'PSA reduction: multiply by 2 for true value',
      'Can be combined with alpha-blockers for better symptom relief',
      'Sexual side effects may persist after discontinuation in some patients'
    ],

    highYield: [
      'Type 2 selective (vs dutasteride dual inhibitor)',
      '6-12 months for full effect (very slow)',
      'Decreases PSA by ~50% (must adjust for screening)',
      'TERATOGENIC: feminization of male fetus',
      'Reduces prostate size (unlike alpha-blockers)'
    ],

    slideReference: 'GU/ED Pharmacology - 5-Alpha-Reductase Inhibitors'
  },

  {
    id: 'dutasteride',
    drugName: 'Dutasteride',
    brandNames: ['Avodart'],
    drugClass: '5-Alpha-Reductase Inhibitor (Type 1 + Type 2)',

    moa: 'Inhibits BOTH 5-alpha-reductase type 1 and type 2 → more complete DHT suppression → reduces prostate size',

    indications: ['BPH'],

    sideEffects: [
      'Sexual dysfunction (higher incidence than finasteride)',
      'Gynecomastia',
      'Decreased PSA levels'
    ],

    contraindications: [
      'Pregnancy (teratogenic)',
      'Women and children',
      'Severe hepatic impairment'
    ],

    drugInteractions: [
      'CYP3A4 inhibitors: increase dutasteride levels',
      'Decreases PSA by ~50%'
    ],

    clinicalConsiderations: [
      'Longer half-life than finasteride (5 weeks vs 6-8 hours)',
      'More complete DHT suppression (~93% vs ~70% with finasteride)',
      'Takes 6+ months for full effect',
      'May be more effective than finasteride but also more side effects'
    ],

    highYield: [
      'Dual inhibitor (type 1 + type 2) vs finasteride (type 2 only)',
      'More complete DHT suppression than finasteride',
      'Longer half-life (5 weeks)',
      'Higher sexual side effect rate',
      'Also teratogenic'
    ],

    slideReference: 'GU/ED Pharmacology - 5-Alpha-Reductase Inhibitors'
  },

  // ===== OVERACTIVE BLADDER / URINARY INCONTINENCE =====
  {
    id: 'oxybutynin',
    drugName: 'Oxybutynin',
    brandNames: ['Ditropan', 'Oxytrol (patch)'],
    drugClass: 'Antimuscarinic (Anticholinergic)',

    moa: 'Blocks muscarinic M3 receptors in bladder → decreases detrusor contractility → reduces urinary urgency and frequency',

    indications: [
      'Overactive bladder (OAB)',
      'Urge urinary incontinence'
    ],

    sideEffects: [
      'Dry mouth (most common)',
      'Constipation',
      'Blurred vision',
      'Cognitive impairment (especially elderly)',
      'Urinary retention',
      'Heat intolerance',
      'Tachycardia'
    ],

    contraindications: [
      'Narrow-angle glaucoma',
      'Urinary retention',
      'Gastric retention',
      'Uncontrolled narrow-angle glaucoma',
      'Myasthenia gravis'
    ],

    drugInteractions: [
      'Other anticholinergics: additive effects',
      'CNS depressants: enhanced sedation'
    ],

    clinicalConsiderations: [
      'Extended-release formulation reduces side effects',
      'Transdermal patch available (less systemic side effects)',
      'Avoid in elderly due to cognitive effects (Beers Criteria)',
      'CYP3A4 substrate'
    ],

    highYield: [
      'M3 receptor antagonist → decreases bladder contractility',
      'Dry mouth most common side effect',
      'CI in narrow-angle glaucoma',
      'Avoid in elderly (cognitive impairment, falls)',
      'Patch formulation reduces first-pass metabolism and side effects'
    ],

    slideReference: 'UI Pharmacology - Antimuscarinics'
  },

  {
    id: 'mirabegron',
    drugName: 'Mirabegron',
    brandNames: ['Myrbetriq'],
    drugClass: 'Beta-3 Adrenergic Agonist',

    moa: 'Beta-3 agonist → stimulates beta-3 receptors in bladder → detrusor relaxation → increased bladder capacity',

    indications: ['Overactive bladder (OAB)'],

    sideEffects: [
      'Hypertension (dose-dependent)',
      'Nasopharyngitis',
      'UTI',
      'Headache',
      'NO anticholinergic side effects (no dry mouth, constipation, cognitive effects)'
    ],

    contraindications: [
      'Severe uncontrolled hypertension (≥180/110)',
      'End-stage renal disease'
    ],

    drugInteractions: [
      'Moderate CYP2D6 inhibitor: increases levels of CYP2D6 substrates',
      'Can increase digoxin levels'
    ],

    clinicalConsiderations: [
      'Alternative to antimuscarinics',
      'Better tolerated in elderly (no cognitive effects)',
      'Monitor blood pressure',
      'Takes 8 weeks for full effect',
      'More expensive than antimuscarinics'
    ],

    highYield: [
      'Beta-3 agonist → relaxes detrusor muscle',
      'NO anticholinergic side effects (huge advantage)',
      'Can increase blood pressure (monitor)',
      'Alternative for patients who cannot tolerate antimuscarinics',
      'Better choice for elderly patients'
    ],

    slideReference: 'UI Pharmacology - Beta-3 Agonists'
  },

  {
    id: 'desmopressin',
    drugName: 'Desmopressin',
    brandNames: ['DDAVP', 'Noctiva (nasal spray)'],
    drugClass: 'Vasopressin Analogue (ADH analogue)',

    moa: 'Synthetic vasopressin analogue (V2 selective) → increases water reabsorption in kidneys → decreases urine production',

    indications: [
      'Nocturia (nighttime urination)',
      'Diabetes insipidus',
      'Nocturnal enuresis (bedwetting)',
      'Hemophilia A / von Willebrand disease'
    ],

    sideEffects: [
      'Hyponatremia (SERIOUS - can cause seizures)',
      'Headache',
      'Nasal congestion (intranasal)',
      'Nausea'
    ],

    contraindications: [
      'Hyponatremia',
      'Polydipsia',
      'Heart failure',
      'Renal impairment (CrCl <50)'
    ],

    drugInteractions: [
      'NSAIDs, SSRIs, tricyclics: increase hyponatremia risk',
      'Diuretics: reduce effect'
    ],

    clinicalConsiderations: [
      'Take at bedtime for nocturia',
      'FLUID RESTRICTION required 1 hour before through 8 hours after dose',
      'Monitor serum sodium (especially in elderly)',
      'Higher risk of hyponatremia in patients >65',
      'Noctiva approved specifically for nocturia'
    ],

    highYield: [
      'ADH analogue → decreases urine production',
      'HYPONATREMIA = serious risk (can cause seizures)',
      'Requires FLUID RESTRICTION around dosing',
      'High risk in elderly',
      'Used for nocturia, not daytime OAB'
    ],

    slideReference: 'UI Pharmacology - Desmopressin'
  },

  // ===== OSTEOPOROSIS DRUGS =====
  {
    id: 'alendronate',
    drugName: 'Alendronate',
    brandNames: ['Fosamax', 'Binosto'],
    drugClass: 'Nitrogen-Containing Bisphosphonate',

    moa: 'Inhibits osteoclast-mediated bone resorption → binds to bone hydroxyapatite → incorporated into bone → inhibits farnesyl pyrophosphate synthase → prevents osteoclast function',

    indications: [
      'Osteoporosis treatment and prevention',
      'Glucocorticoid-induced osteoporosis',
      'Paget disease'
    ],

    sideEffects: [
      'GI irritation (esophagitis, gastritis)',
      'Atypical femoral fractures (rare, with long-term use)',
      'Osteonecrosis of jaw (BRONJ - rare)',
      'Hypocalcemia',
      'Musculoskeletal pain'
    ],

    contraindications: [
      'Hypocalcemia (must correct first)',
      'Esophageal abnormalities (stricture, achalasia)',
      'Inability to stand/sit upright for 30 minutes',
      'Severe renal impairment (CrCl <35)'
    ],

    drugInteractions: [
      'Calcium, antacids, iron: significantly decrease absorption (take 30-60 min apart)',
      'NSAIDs: additive GI toxicity'
    ],

    clinicalConsiderations: [
      'STRICT administration: take with 8oz water, 30 minutes before food, remain upright 30 minutes',
      'Weekly dosing available (70mg once weekly)',
      'Drug holiday after 5 years for low-risk patients',
      'Monitor calcium and vitamin D status',
      'Dental exam before starting (BRONJ risk)'
    ],

    highYield: [
      'Nitrogen-containing BPP → higher potency and BRONJ risk',
      'STRICT dosing requirements (30 min before food, upright 30 min)',
      'Esophagitis most common side effect',
      'BRONJ (osteonecrosis of jaw) with long-term use',
      'Drug holiday after 5 years for low-risk patients'
    ],

    slideReference: 'Bone/Osteoporosis Pharmacology - Bisphosphonates'
  },

  {
    id: 'zoledronate',
    drugName: 'Zoledronate',
    brandNames: ['Reclast (osteoporosis)', 'Zometa (cancer)'],
    drugClass: 'Nitrogen-Containing Bisphosphonate (IV)',

    moa: 'Most potent bisphosphonate → inhibits osteoclast function by inhibiting farnesyl pyrophosphate synthase',

    indications: [
      'Osteoporosis (Reclast 5mg yearly)',
      'Paget disease',
      'Bone metastases and hypercalcemia of malignancy (Zometa)'
    ],

    sideEffects: [
      'Acute phase reaction (flu-like symptoms after first dose)',
      'Hypocalcemia',
      'Atypical femoral fractures',
      'Osteonecrosis of jaw (BRONJ)',
      'Renal impairment'
    ],

    contraindications: [
      'Hypocalcemia',
      'Severe renal impairment (CrCl <35)',
      'Pregnancy'
    ],

    drugInteractions: [
      'Nephrotoxic drugs: additive renal toxicity',
      'Loop diuretics: additive hypocalcemia'
    ],

    clinicalConsiderations: [
      'IV infusion once yearly (CONVENIENCE)',
      'Pre-medicate with acetaminophen to reduce acute phase reaction',
      'Ensure adequate calcium and vitamin D before dosing',
      'Monitor renal function',
      'Dental exam before starting',
      'Most potent bisphosphonate available'
    ],

    highYield: [
      'Most potent bisphosphonate',
      'IV once yearly (best adherence)',
      'Acute phase reaction common after first dose (flu-like symptoms)',
      'Same risks as oral BPPs (BRONJ, atypical fractures)',
      'Must correct hypocalcemia before administration'
    ],

    slideReference: 'Bone/Osteoporosis Pharmacology - Bisphosphonates'
  },

  {
    id: 'denosumab',
    drugName: 'Denosumab',
    brandNames: ['Prolia (osteoporosis)', 'Xgeva (cancer)'],
    drugClass: 'Monoclonal Antibody (RANKL Inhibitor)',

    moa: 'Monoclonal antibody binds RANKL → prevents RANKL from binding RANK on osteoclast precursors → prevents osteoclast formation and activation → decreases bone resorption',

    indications: [
      'Osteoporosis (Prolia 60mg SC q6months)',
      'Bone metastases (Xgeva)'
    ],

    sideEffects: [
      'Hypocalcemia (more common than bisphosphonates)',
      'Infections (serious - cellulitis, pneumonia)',
      'Dermatologic reactions (eczema, rash)',
      'Osteonecrosis of jaw',
      'Atypical femoral fractures',
      'REBOUND increased fracture risk if discontinued'
    ],

    contraindications: [
      'Hypocalcemia',
      'Pregnancy'
    ],

    drugInteractions: [
      'Immunosuppressants: increased infection risk'
    ],

    clinicalConsiderations: [
      'SC injection every 6 months',
      'Alternative for patients with renal impairment (not renally cleared)',
      'NO DRUG HOLIDAY - must continue or switch to bisphosphonate',
      'REBOUND EFFECT: stopping leads to rapid bone loss and fractures',
      'Supplemental calcium (1000mg) and vitamin D (400 IU) REQUIRED',
      'Monitor calcium levels, especially in CKD'
    ],

    highYield: [
      'RANKL inhibitor → prevents osteoclast formation',
      'SC every 6 months',
      'Safe in renal impairment (unlike bisphosphonates)',
      'CRITICAL: REBOUND fracture risk if stopped (must transition therapy)',
      'Higher hypocalcemia risk than bisphosphonates'
    ],

    slideReference: 'Bone/Osteoporosis Pharmacology - Denosumab'
  },

  {
    id: 'teriparatide',
    drugName: 'Teriparatide',
    brandNames: ['Forteo'],
    drugClass: 'PTH Analogue (Anabolic Agent)',

    moa: 'Recombinant human PTH (1-34) → ANABOLIC when given intermittently → stimulates osteoblast activity MORE than osteoclast activity → net bone formation',

    indications: [
      'Severe osteoporosis with high fracture risk',
      'Glucocorticoid-induced osteoporosis',
      'Failed or intolerant to bisphosphonates'
    ],

    sideEffects: [
      'Hypercalcemia',
      'Orthostatic hypotension',
      'Nausea',
      'Arthralgia',
      'Increased risk of osteosarcoma (in rats - black box warning)'
    ],

    contraindications: [
      'Paget disease',
      'Prior radiation to skeleton',
      'Bone metastases or skeletal malignancies',
      'Hypercalcemia',
      'Severe renal impairment'
    ],

    drugInteractions: [
      'Digoxin: hypercalcemia may increase toxicity'
    ],

    clinicalConsiderations: [
      'SC injection DAILY (20 mcg)',
      'Maximum lifetime use: 2 YEARS',
      'ANABOLIC (builds bone) vs antiresorptive agents',
      'Most expensive osteoporosis drug',
      'Sit or lie down after injection (orthostatic hypotension)',
      'Follow with antiresorptive agent after completion'
    ],

    highYield: [
      'Only ANABOLIC osteoporosis drug (builds bone vs preventing loss)',
      'PTH analogue - intermittent dosing = anabolic',
      'Daily SC injection for maximum 2 YEARS (lifetime)',
      'Reserved for SEVERE osteoporosis or bisphosphonate failures',
      'Black box warning: osteosarcoma (rat studies)'
    ],

    slideReference: 'Bone/Osteoporosis Pharmacology - Anabolic Agents'
  },

  {
    id: 'romosozumab',
    drugName: 'Romosozumab',
    brandNames: ['Evenity'],
    drugClass: 'Sclerostin Inhibitor (Monoclonal Antibody)',

    moa: 'Monoclonal antibody against sclerostin → DUAL MOA: increases bone formation (anabolic) AND decreases bone resorption (antiresorptive)',

    indications: [
      'Postmenopausal osteoporosis with high fracture risk'
    ],

    sideEffects: [
      'Cardiovascular events (MI, stroke) - BLACK BOX WARNING',
      'Hypocalcemia',
      'Arthralgia',
      'Headache',
      'Osteonecrosis of jaw',
      'Atypical femoral fractures'
    ],

    contraindications: [
      'MI or stroke within past year (BLACK BOX)',
      'Hypocalcemia'
    ],

    drugInteractions: [
      'None significant'
    ],

    clinicalConsiderations: [
      'SC injection monthly for 12 DOSES (1 year maximum)',
      'UNIQUE dual mechanism (only drug with both anabolic + antiresorptive)',
      'Follow with antiresorptive agent (bisphosphonate or denosumab)',
      'Screen for cardiovascular risk before starting',
      'Supplemental calcium and vitamin D required',
      'Most rapid vertebral fracture risk reduction'
    ],

    highYield: [
      'UNIQUE dual MOA: anabolic + antiresorptive',
      'BLACK BOX: increased cardiovascular events (MI, stroke)',
      'CI in patients with MI/stroke in past year',
      'Limited to 12 monthly doses (1 year)',
      'Most rapid vertebral fracture reduction',
      'Must be followed by antiresorptive therapy'
    ],

    slideReference: 'Bone/Osteoporosis Pharmacology - Romosozumab'
  },

  {
    id: 'raloxifene',
    drugName: 'Raloxifene',
    brandNames: ['Evista'],
    drugClass: 'Selective Estrogen Receptor Modulator (SERM)',

    moa: 'SERM: estrogen agonist on bone and lipids, antagonist on breast and uterus → increases bone mineral density and reduces vertebral fracture risk',

    indications: [
      'Osteoporosis prevention and treatment in postmenopausal women',
      'Breast cancer risk reduction in high-risk postmenopausal women'
    ],

    sideEffects: [
      'Hot flashes (estrogen antagonist effect)',
      'Leg cramps',
      'Venous thromboembolism (VTE) - BLACK BOX WARNING',
      'Peripheral edema'
    ],

    contraindications: [
      'History of VTE (DVT, PE, retinal vein thrombosis)',
      'Active or history of thromboembolic events',
      'Pregnancy/breastfeeding'
    ],

    drugInteractions: [
      'Cholestyramine: decreases raloxifene absorption',
      'Warfarin: may decrease PT (monitor INR)'
    ],

    clinicalConsiderations: [
      'Oral once daily',
      'Reduces vertebral fractures only (NOT hip)',
      'Reduces breast cancer risk by 50%',
      'AVOID in women with VTE risk factors or hot flashes',
      'Discontinue 72 hours before prolonged immobilization',
      'Consider in women who also want breast cancer prevention'
    ],

    highYield: [
      'SERM: bone agonist, breast antagonist',
      'BLACK BOX: increased VTE risk (CI in VTE history)',
      'Hot flashes common (limits tolerability)',
      'Reduces breast cancer risk (dual benefit)',
      'Only reduces VERTEBRAL fractures (not hip)',
      'Discontinue before surgery/immobilization'
    ],

    slideReference: 'Bone/Osteoporosis Pharmacology - SERMs'
  },

  // ===== GONADAL HORMONES - ESTROGENS =====
  {
    id: 'estradiol',
    drugName: 'Estradiol',
    brandNames: ['Estrace (oral)', 'Vivelle-Dot (patch)', 'Climara (patch)', 'Vagifem (vaginal)'],
    drugClass: 'Estrogen (Natural)',

    moa: 'Binds estrogen receptors (ERα, ERβ) → nuclear translocation → gene transcription → multiple effects on reproductive tissues, bone, cardiovascular system',

    indications: [
      'Menopausal symptoms (hot flashes, vaginal atrophy)',
      'Hypoestrogenism',
      'Osteoporosis prevention'
    ],

    sideEffects: [
      'Nausea',
      'Breast tenderness',
      'Headache',
      'Fluid retention',
      'Venous thromboembolism (VTE)',
      'Endometrial hyperplasia/cancer (if unopposed by progestin)'
    ],

    contraindications: [
      'Pregnancy',
      'Undiagnosed abnormal vaginal bleeding',
      'Breast cancer (current or history)',
      'Estrogen-dependent neoplasia',
      'Active or history of VTE',
      'Active or recent arterial thromboembolic disease',
      'Liver dysfunction'
    ],

    drugInteractions: [
      'CYP3A4 inducers: decrease estradiol levels',
      'CYP3A4 inhibitors: increase estradiol levels'
    ],

    clinicalConsiderations: [
      'MUST combine with progestin in women with intact uterus (prevent endometrial cancer)',
      'Transdermal avoids first-pass metabolism (lower VTE risk)',
      'Use lowest effective dose for shortest duration',
      'Annual risk-benefit reassessment',
      'Vaginal preparations for local symptoms only'
    ],

    highYield: [
      'Most potent natural estrogen (17β-estradiol)',
      'MUST combine with progestin if uterus present (prevent endometrial cancer)',
      'VTE and breast cancer risk with systemic use',
      'Transdermal has lower VTE risk than oral',
      'Use lowest dose for shortest duration (WHI study)'
    ],

    slideReference: 'Gonadal Hormones Pharmacology - Estrogens'
  },

  {
    id: 'conjugated-estrogens',
    drugName: 'Conjugated Estrogens',
    brandNames: ['Premarin'],
    drugClass: 'Estrogen (Mixed)',

    moa: 'Mixture of estrogen compounds (including equine estrogens) → binds estrogen receptors → multiple estrogenic effects',

    indications: [
      'Menopausal symptoms',
      'Vulvar/vaginal atrophy',
      'Osteoporosis prevention',
      'Hypoestrogenism'
    ],

    sideEffects: [
      'Similar to estradiol: nausea, breast tenderness, VTE risk',
      'Endometrial hyperplasia if unopposed'
    ],

    contraindications: [
      'Same as estradiol (VTE, breast cancer, pregnancy, etc.)'
    ],

    clinicalConsiderations: [
      'Contains equine estrogens (equilin, equilenin) not found in humans',
      'Most studied estrogen in WHI trial',
      'Available as oral or vaginal cream',
      'Must combine with progestin if uterus present',
      'Often used in combination products (Prempro = Premarin + MPA)'
    ],

    highYield: [
      'Derived from pregnant mare urine (unique source)',
      'Contains non-human estrogens (equilin, equilenin)',
      'Most studied in Women\'s Health Initiative (WHI)',
      'Same safety concerns as other systemic estrogens',
      'Prempro = conjugated estrogens + medroxyprogesterone'
    ],

    slideReference: 'Gonadal Hormones Pharmacology - Estrogens'
  },

  {
    id: 'ethinyl-estradiol',
    drugName: 'Ethinyl Estradiol',
    brandNames: ['Component of most oral contraceptives'],
    drugClass: 'Synthetic Estrogen',

    moa: 'Synthetic estrogen with 17α-ethinyl group → resists first-pass metabolism → high oral bioavailability → suppresses FSH/LH → prevents ovulation',

    indications: [
      'Oral contraception (combined with progestin)',
      'Menopausal symptoms',
      'Acne (in combination products)'
    ],

    sideEffects: [
      'Nausea',
      'Breast tenderness',
      'VTE (higher risk than transdermal estradiol)',
      'Hypertension',
      'Headache'
    ],

    contraindications: [
      'Age >35 + smoking',
      'VTE history',
      'Migraine with aura',
      'Breast cancer',
      'Uncontrolled hypertension'
    ],

    drugInteractions: [
      'CYP3A4 inducers: reduce contraceptive efficacy',
      'Antibiotics (some): may reduce efficacy',
      'Increases levels of lamotrigine (seizure risk)'
    ],

    clinicalConsiderations: [
      'Standard estrogen component in most oral contraceptives',
      '10-50 mcg doses (lower doses reduce VTE risk)',
      'Higher thrombotic risk than natural estradiol',
      'Take at same time daily for contraception'
    ],

    highYield: [
      '17α-ethinyl group = oral bioavailability (blocks metabolism)',
      'Standard estrogen in oral contraceptives',
      'Higher VTE risk than natural estradiol',
      'CI: age >35 + smoking (MI/stroke risk)',
      'Lower doses (20-35 mcg) preferred to reduce VTE'
    ],

    slideReference: 'Gonadal Hormones Pharmacology - Synthetic Estrogens'
  },

  // ===== GONADAL HORMONES - PROGESTINS =====
  {
    id: 'medroxyprogesterone',
    drugName: 'Medroxyprogesterone Acetate',
    brandNames: ['Provera (oral)', 'Depo-Provera (IM)', 'Depo-SubQ Provera 104'],
    drugClass: 'Progestin (Pregnane)',

    moa: 'Synthetic progestin → binds progesterone receptors → endometrial transformation, LH suppression, cervical mucus thickening',

    indications: [
      'Secondary amenorrhea',
      'Abnormal uterine bleeding',
      'Endometrial hyperplasia prevention (with estrogen)',
      'Contraception (Depo-Provera)',
      'Endometriosis pain (Depo-SubQ 104)'
    ],

    sideEffects: [
      'Weight gain',
      'Irregular bleeding',
      'Amenorrhea (with depot injection)',
      'Bone density loss (depot - BLACK BOX)',
      'Depression',
      'Breast tenderness'
    ],

    contraindications: [
      'Pregnancy',
      'Undiagnosed vaginal bleeding',
      'Breast cancer',
      'Liver disease',
      'Arterial thromboembolic disease'
    ],

    drugInteractions: [
      'CYP3A4 inducers: decrease levels'
    ],

    clinicalConsiderations: [
      'Depot: IM 150mg every 3 months (contraception)',
      'BLACK BOX: bone density loss with depot (may not be fully reversible)',
      'Calcium and vitamin D supplementation recommended with depot',
      'May delay return to fertility after discontinuation (up to 18 months)',
      'Most common progestin used with estrogen in HRT'
    ],

    highYield: [
      'Pregnane-type progestin (from progesterone)',
      'Depot BLACK BOX: bone density loss',
      'Weight gain common',
      'Delayed return to fertility (up to 18 months)',
      'Most common progestin in combination HRT (Prempro)'
    ],

    slideReference: 'Gonadal Hormones Pharmacology - Progestins'
  },

  {
    id: 'levonorgestrel',
    drugName: 'Levonorgestrel',
    brandNames: ['Plan B (emergency contraception)', 'Mirena (IUD)', 'Skyla (IUD)', 'various oral contraceptives'],
    drugClass: 'Progestin (19-Norandrostane - 2nd generation)',

    moa: 'Synthetic progestin → progesterone receptor agonist → prevents ovulation (emergency contraception), thickens cervical mucus, thins endometrium',

    indications: [
      'Emergency contraception (Plan B)',
      'Long-acting contraception (IUD)',
      'Oral contraception (combined)',
      'Heavy menstrual bleeding (Mirena IUD)'
    ],

    sideEffects: [
      'Irregular bleeding',
      'Amenorrhea (IUD)',
      'Androgenic effects (acne, hirsutism - more than 3rd gen)',
      'Weight gain',
      'Ovarian cysts (IUD)'
    ],

    contraindications: [
      'Pregnancy (IUD)',
      'Acute PID (IUD)',
      'Uterine anomalies (IUD)',
      'Breast cancer'
    ],

    clinicalConsiderations: [
      'Plan B: 1.5mg single dose within 72 hours of unprotected sex (efficacy decreases with time)',
      'IUD: effective for 5-8 years depending on formulation',
      'Most androgenic progestin (2nd generation)',
      'No prescription needed for Plan B',
      'IUD reduces menstrual bleeding (Mirena approved for heavy periods)'
    ],

    highYield: [
      '19-Norandrostane (from testosterone) → more androgenic than 3rd gen',
      'Most androgenic progestin (acne, hirsutism)',
      'Plan B: emergency contraception within 72 hours',
      'Mirena IUD: approved for heavy menstrual bleeding',
      '2nd generation progestin (higher androgenic activity)'
    ],

    slideReference: 'Gonadal Hormones Pharmacology - Progestins'
  },

  {
    id: 'ulipristal',
    drugName: 'Ulipristal Acetate',
    brandNames: ['Ella'],
    drugClass: 'Selective Progesterone Receptor Modulator (SPRM)',

    moa: 'SPRM → progesterone receptor antagonist/partial agonist → delays ovulation → prevents pregnancy',

    indications: [
      'Emergency contraception within 120 hours (5 days)'
    ],

    sideEffects: [
      'Headache',
      'Nausea',
      'Abdominal pain',
      'Dysmenorrhea',
      'Irregular bleeding'
    ],

    contraindications: [
      'Known or suspected pregnancy'
    ],

    drugInteractions: [
      'CYP3A4 inducers: decrease effectiveness',
      'Progestin contraceptives: may decrease ulipristal efficacy (avoid for 5 days after)'
    ],

    clinicalConsiderations: [
      'More effective than levonorgestrel (Plan B)',
      'Effective for 120 HOURS (5 days) vs 72 hours for Plan B',
      'REQUIRES PRESCRIPTION',
      'More effective in obese women compared to levonorgestrel',
      'Do not use with hormonal contraception for 5 days after',
      'Not for regular contraception (emergency only)'
    ],

    highYield: [
      'SPRM (selective progesterone receptor modulator)',
      'More effective than Plan B',
      'Window: 120 HOURS (5 days) vs 72 for Plan B',
      'Requires prescription (vs Plan B OTC)',
      'Better efficacy in obese women',
      'Do NOT use with regular hormonal contraception'
    ],

    slideReference: 'Gonadal Hormones Pharmacology - Emergency Contraception'
  },

  // ===== ESTROGEN ANTAGONISTS / SERMs =====
  {
    id: 'tamoxifen',
    drugName: 'Tamoxifen',
    brandNames: ['Nolvadex', 'Soltamox'],
    drugClass: 'Selective Estrogen Receptor Modulator (SERM)',

    moa: 'SERM: estrogen antagonist in breast tissue, partial agonist in uterus and bone → competitive ER binding → prevents estrogen effects in breast',

    indications: [
      'ER-positive breast cancer treatment',
      'Breast cancer risk reduction in high-risk women',
      'Ductal carcinoma in situ (DCIS)'
    ],

    sideEffects: [
      'Hot flashes (most common)',
      'VTE (DVT, PE) - BLACK BOX',
      'Endometrial cancer (estrogen agonist effect) - BLACK BOX',
      'Stroke',
      'Cataracts',
      'Vaginal discharge/bleeding'
    ],

    contraindications: [
      'Pregnancy (teratogenic)',
      'History of VTE or stroke (if used for prevention)',
      'Concurrent warfarin therapy (for risk reduction indication)'
    ],

    drugInteractions: [
      'CYP2D6 inhibitors (SSRIs): DECREASE active metabolite (endoxifen) → reduced efficacy',
      'Warfarin: increases INR',
      'CYP3A4 inducers: decrease levels'
    ],

    clinicalConsiderations: [
      'Duration: 5-10 years for breast cancer treatment',
      'PRODRUG: metabolized by CYP2D6 to active endoxifen',
      'CYP2D6 poor metabolizers have reduced benefit',
      'AVOID SSRIs (especially paroxetine, fluoxetine) - reduce efficacy',
      'Annual gynecologic exam (endometrial cancer risk)',
      'Increased stroke/VTE risk in postmenopausal women'
    ],

    highYield: [
      'SERM: breast antagonist, uterine agonist (partial)',
      'BLACK BOX: VTE and endometrial cancer',
      'PRODRUG requiring CYP2D6 metabolism (avoid strong inhibitors)',
      'SSRIs reduce efficacy (avoid paroxetine, fluoxetine)',
      'Hot flashes most common side effect',
      '5-10 year treatment duration'
    ],

    slideReference: 'Gonadal Hormones Pharmacology - SERMs'
  },

  {
    id: 'clomiphene',
    drugName: 'Clomiphene Citrate',
    brandNames: ['Clomid', 'Serophene'],
    drugClass: 'Selective Estrogen Receptor Modulator (SERM)',

    moa: 'SERM: estrogen antagonist in hypothalamus → blocks negative feedback → increases GnRH → increases FSH/LH → stimulates ovulation',

    indications: [
      'Ovulation induction in anovulatory infertility',
      'Polycystic ovary syndrome (PCOS)'
    ],

    sideEffects: [
      'Multiple gestation (8% twins)',
      'Ovarian hyperstimulation syndrome (OHSS)',
      'Hot flashes',
      'Visual disturbances',
      'Headache',
      'Mood changes'
    ],

    contraindications: [
      'Pregnancy',
      'Ovarian cysts',
      'Liver disease',
      'Abnormal uterine bleeding of unknown origin',
      'Ovarian failure'
    ],

    clinicalConsiderations: [
      'Started on day 5 of menstrual cycle',
      'Treatment typically 5 days per cycle',
      'Maximum 6 cycles',
      'Monitor for multiple gestation with ultrasound',
      'Discontinue if visual disturbances occur',
      '70-80% ovulation rate, 30-40% pregnancy rate'
    ],

    highYield: [
      'SERM for ovulation induction',
      'Blocks hypothalamic estrogen receptors → increases FSH/LH',
      'Multiple gestation risk (8% twins)',
      'Ovarian hyperstimulation syndrome (OHSS) risk',
      'Maximum 6 cycles',
      'Visual disturbances = discontinue immediately'
    ],

    slideReference: 'Gonadal Hormones Pharmacology - Ovulation Induction'
  },

  {
    id: 'anastrozole',
    drugName: 'Anastrozole',
    brandNames: ['Arimidex'],
    drugClass: 'Aromatase Inhibitor (Nonsteroidal)',

    moa: 'Nonsteroidal aromatase inhibitor → blocks conversion of androgens to estrogens → reduces circulating estrogen levels in postmenopausal women',

    indications: [
      'ER-positive breast cancer in postmenopausal women (adjuvant, first-line, second-line)'
    ],

    sideEffects: [
      'Bone loss/osteoporosis',
      'Hot flashes',
      'Arthralgia/myalgia (joint/muscle pain)',
      'Increased cholesterol',
      'Vaginal dryness',
      'Cardiovascular events'
    ],

    contraindications: [
      'Premenopausal women (ineffective)',
      'Pregnancy',
      'Hypersensitivity'
    ],

    drugInteractions: [
      'Estrogen-containing products: antagonizes effect',
      'Tamoxifen: reduces anastrozole levels (do not combine)'
    ],

    clinicalConsiderations: [
      'ONLY for postmenopausal women',
      'Monitor bone mineral density (baseline, periodic)',
      'Calcium and vitamin D supplementation recommended',
      'May consider bisphosphonate if high fracture risk',
      'Usually 5 years duration (adjuvant)',
      'Superior to tamoxifen in postmenopausal women (less VTE, no endometrial cancer)'
    ],

    highYield: [
      'Nonsteroidal aromatase inhibitor',
      'ONLY postmenopausal (relies on adrenal androgen conversion)',
      'Bone loss major concern (monitor BMD, supplement Ca/VitD)',
      'Arthralgia very common (joint pain)',
      'Superior to tamoxifen in postmenopausal women',
      'No VTE or endometrial cancer risk (vs tamoxifen)'
    ],

    slideReference: 'Gonadal Hormones Pharmacology - Aromatase Inhibitors'
  },

  {
    id: 'letrozole',
    drugName: 'Letrozole',
    brandNames: ['Femara'],
    drugClass: 'Aromatase Inhibitor (Nonsteroidal)',

    moa: 'Nonsteroidal aromatase inhibitor → blocks estrogen synthesis → reduces estrogen levels',

    indications: [
      'ER-positive breast cancer in postmenopausal women',
      'Ovulation induction (off-label - superior to clomiphene in PCOS)'
    ],

    sideEffects: [
      'Similar to anastrozole: bone loss, hot flashes, arthralgia',
      'Fatigue',
      'Hypercholesterolemia'
    ],

    contraindications: [
      'Premenopausal women (for breast cancer)',
      'Pregnancy'
    ],

    clinicalConsiderations: [
      'More potent than anastrozole',
      'OFF-LABEL: ovulation induction (more effective than clomiphene in PCOS)',
      'Same bone loss concerns as anastrozole',
      'Monitor bone density',
      'Calcium/vitamin D supplementation'
    ],

    highYield: [
      'Nonsteroidal aromatase inhibitor (more potent than anastrozole)',
      'Postmenopausal ER+ breast cancer',
      'OFF-LABEL: ovulation induction (better than clomiphene for PCOS)',
      'Same side effects as anastrozole (bone loss, arthralgia)',
      'Monitor bone density'
    ],

    slideReference: 'Gonadal Hormones Pharmacology - Aromatase Inhibitors'
  },

  {
    id: 'exemestane',
    drugName: 'Exemestane',
    brandNames: ['Aromasin'],
    drugClass: 'Aromatase Inhibitor (Steroidal)',

    moa: 'Steroidal aromatase inhibitor (irreversible) → suicide inhibitor → permanently inactivates aromatase enzyme',

    indications: [
      'ER-positive breast cancer in postmenopausal women (typically after tamoxifen)'
    ],

    sideEffects: [
      'Similar to nonsteroidal AIs: bone loss, hot flashes, arthralgia',
      'Fatigue',
      'Nausea'
    ],

    contraindications: [
      'Premenopausal women',
      'Pregnancy'
    ],

    clinicalConsiderations: [
      'IRREVERSIBLE (suicide inhibitor) vs reversible nonsteroidal AIs',
      'Often used after 2-3 years of tamoxifen',
      'Take after meal (increases absorption)',
      'May have slightly less bone loss than nonsteroidal AIs',
      'Monitor bone density'
    ],

    highYield: [
      'STEROIDAL aromatase inhibitor (vs anastrozole/letrozole nonsteroidal)',
      'IRREVERSIBLE (suicide) inhibition',
      'Often sequential therapy after tamoxifen',
      'Similar side effects to other AIs',
      'Take with food (improves absorption)'
    ],

    slideReference: 'Gonadal Hormones Pharmacology - Aromatase Inhibitors'
  },

  // ===== PCOS TREATMENTS =====
  {
    id: 'cocs_pcos',
    drugName: 'Ethinyl estradiol / progestin (Combined Oral Contraceptives)',
    brandNames: ['Ortho Tri-Cyclen', 'Yaz', 'Lo Loestrin Fe'],
    drugClass: 'Combined oral contraceptive',

    moa: 'Suppresses LH and FSH secretion, reducing ovarian androgen production and providing cycle control; progestin opposes estrogen in the endometrium.',

    indications: [
      'Menstrual regulation in PCOS',
      'Treatment of hirsutism and acne',
      'Contraception'
    ],

    sideEffects: [
      'Nausea',
      'Breast tenderness',
      'Breakthrough bleeding',
      'Increased VTE risk'
    ],

    contraindications: [
      'Migraine with aura',
      'History of thromboembolism',
      'Uncontrolled hypertension',
      'Smoking >35 years'
    ],

    clinicalConsiderations: [
      'Not used in pregnancy; estrogen-containing methods may reduce breast milk supply',
      'Reduces risk of endometrial hyperplasia by providing progestin exposure'
    ],

    highYield: [
      'First-line therapy for menstrual irregularity and hyperandrogenic symptoms in many PCOS patients',
      'Reduces risk of endometrial hyperplasia by providing progestin exposure'
    ],

    slideReference: 'PCOS Treatments'
  },

  {
    id: 'metformin',
    drugName: 'Metformin',
    brandNames: ['Glucophage', 'Fortamet', 'Glucophage XR'],
    drugClass: 'Biguanide insulin sensitizer',

    moa: 'Improves insulin sensitivity and decreases hepatic glucose production, indirectly reducing ovarian androgen synthesis.',

    indications: [
      'Insulin resistance in PCOS',
      'Metabolic syndrome',
      'Type 2 diabetes'
    ],

    sideEffects: [
      'GI upset (nausea, diarrhea)',
      'Rare lactic acidosis'
    ],

    contraindications: [
      'Severe renal impairment',
      'Risk of lactic acidosis'
    ],

    clinicalConsiderations: [
      'Sometimes continued in pregnancy for diabetes/PCOS management; follow guidelines and OB advice',
      'Monitor renal function',
      'Monitor B12 levels with long-term use'
    ],

    highYield: [
      'May help restore ovulation in some patients',
      'Key drug to remember for the metabolic side of PCOS'
    ],

    slideReference: 'PCOS Treatments'
  },

  {
    id: 'spironolactone',
    drugName: 'Spironolactone',
    brandNames: ['Aldactone'],
    drugClass: 'Aldosterone antagonist; antiandrogen',

    moa: 'Blocks androgen receptors and inhibits 5-alpha-reductase; also potassium-sparing diuretic.',

    indications: [
      'Hirsutism and acne in PCOS (adjunct therapy)'
    ],

    sideEffects: [
      'Hyperkalemia',
      'Menstrual irregularity',
      'Breast tenderness',
      'Fatigue'
    ],

    contraindications: [
      'Hyperkalemia',
      'Severe renal impairment'
    ],

    clinicalConsiderations: [
      'Contraindicated in pregnancy due to risk of feminization of male fetus; ensure reliable contraception'
    ],

    highYield: [
      'Always combine with effective contraception in women of reproductive age',
      'Mechanism is antiandrogenic, not primarily contraceptive'
    ],

    slideReference: 'PCOS Treatments'
  },

  // ===== ENDOMETRIOSIS & DYSMENORRHEA =====
  {
    id: 'nsaids_dysmenorrhea',
    drugName: 'NSAIDs (e.g., ibuprofen, naproxen)',
    brandNames: ['Advil', 'Motrin', 'Aleve'],
    drugClass: 'Nonsteroidal anti-inflammatory drugs',

    moa: 'Inhibit cyclooxygenase (COX) and prostaglandin synthesis, reducing uterine contractions and ischemic pain.',

    indications: [
      'Primary dysmenorrhea',
      'Pain from endometriosis (symptomatic)'
    ],

    sideEffects: [
      'GI irritation/ulcer risk',
      'Renal impairment',
      'Cardiovascular risk with chronic use'
    ],

    contraindications: [
      'Peptic ulcer disease',
      'Renal insufficiency',
      'NSAID allergy'
    ],

    clinicalConsiderations: [
      'Use with caution, especially in later pregnancy (risk of ductus arteriosus closure)'
    ],

    highYield: [
      'First-line for primary dysmenorrhea due to prostaglandin-mediated pain',
      'Best if started at onset of menses or slightly before'
    ],

    slideReference: 'Endometriosis & Dysmenorrhea Management'
  },

  {
    id: 'cocs_endometriosis',
    drugName: 'Combined oral contraceptives (continuous or cyclic)',
    brandNames: ['Various'],
    drugClass: 'Combined hormonal contraception',

    moa: 'Suppress ovulation and stabilize endometrial tissue; continuous use reduces cyclic stimulation of implants.',

    indications: [
      'Endometriosis-related pain',
      'Dysmenorrhea',
      'Contraception'
    ],

    sideEffects: [
      'Breakthrough bleeding',
      'Breast tenderness',
      'Headache',
      'VTE risk'
    ],

    contraindications: [
      'Same as COCs for PCOS (VTE risk, migraine with aura, etc.)'
    ],

    clinicalConsiderations: [
      'Not used in pregnancy; estrogen methods can reduce milk supply if used too early postpartum'
    ],

    highYield: [
      'Continuous COC regimens can reduce menstrual frequency and endometriosis pain',
      'Important non-surgical option for symptom control'
    ],

    slideReference: 'Endometriosis & Dysmenorrhea Management'
  },

  {
    id: 'gnrh_agonist_leuprolide',
    drugName: 'Leuprolide (GnRH agonist)',
    brandNames: ['Lupron'],
    drugClass: 'GnRH agonist (downregulating)',

    moa: 'Chronic administration downregulates GnRH receptors → decreased LH/FSH → hypoestrogenic state.',

    indications: [
      'Endometriosis pain',
      'Uterine fibroids'
    ],

    sideEffects: [
      'Hot flashes',
      'Decreased bone density',
      'Mood changes',
      'Vaginal dryness'
    ],

    contraindications: [
      'Pregnancy',
      'Breastfeeding'
    ],

    clinicalConsiderations: [
      'Contraindicated in pregnancy; typically not used in breastfeeding',
      'Monitor bone density with prolonged use'
    ],

    highYield: [
      'Produces a reversible "medical menopause" - remember bone loss and vasomotor symptoms',
      'Often used short-term due to adverse effects'
    ],

    slideReference: 'Endometriosis & Dysmenorrhea Management'
  },

  // ===== CONTRACEPTIVES =====
  {
    id: 'cocs',
    drugName: 'Ethinyl estradiol / progestin (COCs)',
    brandNames: ['Various'],
    drugClass: 'Combined oral contraceptive',

    moa: 'Suppresses LH/FSH preventing ovulation; progestin thickens cervical mucus and thins endometrium.',

    indications: [
      'Contraception',
      'Cycle regulation',
      'Dysmenorrhea',
      'Acne'
    ],

    sideEffects: [
      'Breakthrough bleeding',
      'Breast tenderness',
      'Nausea',
      'VTE risk'
    ],

    contraindications: [
      'Migraine with aura',
      'History of thromboembolism',
      'Uncontrolled hypertension',
      'Smoking >35 years'
    ],

    clinicalConsiderations: [
      'Avoid in pregnancy; delay combined methods early postpartum if breastfeeding'
    ],

    highYield: [
      'Main contraceptive effect: inhibition of ovulation (blocked LH surge)',
      'Know absolute vs relative contraindications for exams'
    ],

    slideReference: 'Contraceptives'
  },

  {
    id: 'pop_minipill',
    drugName: 'Progestin-only pill (POP)',
    brandNames: ['Micronor', 'Nor-QD', 'Camila'],
    drugClass: 'Progestin-only contraceptive',

    moa: 'Thickens cervical mucus and may suppress ovulation; effect is time-sensitive due to short half-life.',

    indications: [
      'Contraception when estrogen is contraindicated',
      'Breastfeeding women'
    ],

    sideEffects: [
      'Irregular bleeding',
      'Spotting'
    ],

    contraindications: [
      'Current breast cancer'
    ],

    clinicalConsiderations: [
      'Preferred in breastfeeding patients because it lacks estrogen'
    ],

    highYield: [
      'Must be taken at the same time every day for best efficacy',
      'Good for patients with estrogen contraindications (e.g., migraine with aura)'
    ],

    slideReference: 'Contraceptives'
  },

  {
    id: 'levonorgestrel_iud',
    drugName: 'Levonorgestrel intrauterine system (LNG-IUS)',
    brandNames: ['Mirena', 'Skyla', 'Kyleena', 'Liletta'],
    drugClass: 'Hormonal IUD',

    moa: 'Locally releases progestin → thickens cervical mucus, thins endometrium, may inhibit ovulation in some users.',

    indications: [
      'Long-acting contraception',
      'Heavy menstrual bleeding',
      'Dysmenorrhea'
    ],

    sideEffects: [
      'Irregular bleeding initially',
      'Lighter or absent menses over time'
    ],

    contraindications: [
      'Active pelvic infection',
      'Unexplained uterine bleeding',
      'Distorted uterine cavity'
    ],

    clinicalConsiderations: [
      'Safe in breastfeeding; not used in existing pregnancy'
    ],

    highYield: [
      'Often reduces menstrual bleeding and cramps',
      'Mechanism is mostly local; systemic hormone levels are relatively low'
    ],

    slideReference: 'Contraceptives'
  },

  {
    id: 'copper_iud',
    drugName: 'Copper intrauterine device',
    brandNames: ['Paragard'],
    drugClass: 'Non-hormonal IUD',

    moa: 'Copper ions create a spermicidal inflammatory environment in the uterus, impairing sperm motility and viability.',

    indications: [
      'Long-acting reversible contraception',
      'Highly effective emergency contraception'
    ],

    sideEffects: [
      'Heavier menses',
      'Increased cramps and dysmenorrhea'
    ],

    contraindications: [
      'Active pelvic infection',
      'Wilson disease (relative)',
      'Distorted uterine cavity'
    ],

    clinicalConsiderations: [
      'Safe in breastfeeding; avoid in confirmed pregnancy'
    ],

    highYield: [
      'Does NOT suppress ovulation',
      'Heavier periods are a classic adverse effect vs hormonal IUD'
    ],

    slideReference: 'Contraceptives'
  },

  {
    id: 'levonorgestrel_ec',
    drugName: 'Levonorgestrel (emergency contraception pill)',
    brandNames: ['Plan B One-Step', 'Next Choice', 'Take Action'],
    drugClass: 'Progestin emergency contraceptive',

    moa: 'Primarily delays or inhibits ovulation if taken before the LH surge; may also thicken cervical mucus.',

    indications: [
      'Emergency contraception after unprotected intercourse'
    ],

    sideEffects: [
      'Nausea',
      'Irregular bleeding',
      'Fatigue'
    ],

    contraindications: [
      'Known pregnancy (not effective for established pregnancy)'
    ],

    clinicalConsiderations: [
      'Not an abortifacient; generally considered safe for breastfeeding with minimal transfer'
    ],

    highYield: [
      'Most effective when taken as soon as possible after intercourse',
      'Does not disrupt an implanted embryo'
    ],

    slideReference: 'Contraceptives'
  },

  // ===== MENOPAUSE & HORMONE THERAPY =====
  {
    id: 'systemic_estrogen_progestin',
    drugName: 'Systemic estrogen ± progestin therapy',
    brandNames: ['Premarin', 'Estrace', 'Prempro', 'Activella'],
    drugClass: 'Hormone therapy (HT)',

    moa: 'Replaces estrogen (and progestin if uterus present) to relieve vasomotor symptoms and prevent bone loss.',

    indications: [
      'Moderate-to-severe vasomotor symptoms',
      'High fracture risk with low bone density'
    ],

    sideEffects: [
      'Breast tenderness',
      'Irregular bleeding',
      'Increased VTE and stroke risk (depending on route)'
    ],

    contraindications: [
      'History of breast cancer',
      'History of VTE or stroke',
      'Unexplained vaginal bleeding',
      'Active liver disease'
    ],

    clinicalConsiderations: [
      'Not used in pregnancy or breastfeeding'
    ],

    highYield: [
      'Use the lowest effective dose for the shortest duration compatible with treatment goals',
      'Women with a uterus must receive progestin with estrogen to protect the endometrium'
    ],

    slideReference: 'Menopause & Hormone Therapy'
  },

  // ===== BPH ALPHA-BLOCKERS (Additional ones) =====
  {
    id: 'silodosin',
    drugName: 'Silodosin',
    brandNames: ['Rapaflo'],
    drugClass: 'Highly selective alpha-1A adrenergic antagonist (Quinazoline)',

    moa: 'Blocks α1A receptors with highest selectivity of all alpha-blockers, primarily targeting prostatic smooth muscle while sparing vascular receptors.',

    indications: [
      'Benign prostatic hyperplasia (BPH)'
    ],

    sideEffects: [
      'Retrograde ejaculation (28% - highest among alpha-blockers)',
      'Dizziness',
      'Diarrhea',
      'Orthostatic hypotension (minimal)'
    ],

    contraindications: [
      'Severe renal impairment (CrCl <30 mL/min)',
      'Severe hepatic impairment',
      'Concurrent use with strong CYP3A4 inhibitors'
    ],

    clinicalConsiderations: [
      'Monitor renal function',
      'Monitor blood pressure'
    ],

    highYield: [
      'Highest α1A selectivity results in maximal efficacy but highest retrograde ejaculation rate',
      'Minimal cardiovascular effects due to high selectivity',
      'May be switched to alfuzosin if ejaculatory dysfunction is problematic'
    ],

    slideReference: 'BPH - Alpha-Blockers'
  },

  {
    id: 'alfuzosin',
    drugName: 'Alfuzosin',
    brandNames: ['Uroxatral'],
    drugClass: 'Uroselective alpha-1 adrenergic antagonist (Quinazoline)',

    moa: 'Blocks α1 receptors with moderate selectivity for prostatic tissue. Intermediate selectivity between non-selective and highly selective agents.',

    indications: [
      'Benign prostatic hyperplasia (BPH)'
    ],

    sideEffects: [
      'Dizziness',
      'Upper respiratory tract infection',
      'Headache',
      'Fatigue',
      'Retrograde ejaculation (lower risk than tamsulosin/silodosin)'
    ],

    contraindications: [
      'Moderate to severe hepatic impairment',
      'Concurrent use with potent CYP3A4 inhibitors',
      'Congenital or acquired QT prolongation'
    ],

    clinicalConsiderations: [
      'Monitor blood pressure',
      'Monitor QT interval in at-risk patients'
    ],

    highYield: [
      'Once-daily extended-release formulation improves compliance',
      'Intermediate α1A selectivity balances efficacy with lower ejaculatory dysfunction',
      'Good alternative when retrograde ejaculation is problematic with more selective agents'
    ],

    slideReference: 'BPH - Alpha-Blockers'
  },

  {
    id: 'terazosin',
    drugName: 'Terazosin',
    brandNames: ['Hytrin'],
    drugClass: 'Non-selective alpha-1 adrenergic antagonist (Quinazoline)',

    moa: 'Blocks both α1A (prostate) and α1B (vasculature) receptors non-selectively, causing both prostatic relaxation and vasodilation.',

    indications: [
      'Benign prostatic hyperplasia (BPH)',
      'Hypertension'
    ],

    sideEffects: [
      'Orthostatic hypotension (significant)',
      'Dizziness',
      'Asthenia (weakness)',
      'Syncope (first-dose phenomenon)',
      'Peripheral edema'
    ],

    contraindications: [
      'Hypersensitivity to quinazolines'
    ],

    clinicalConsiderations: [
      'Monitor blood pressure (especially first dose)',
      'Monitor urinary symptoms'
    ],

    highYield: [
      'Originally developed as antihypertensive, later used for BPH',
      'Requires dose titration to minimize first-dose hypotension',
      'Non-selectivity causes more cardiovascular side effects than selective agents'
    ],

    slideReference: 'BPH - Alpha-Blockers'
  },

  {
    id: 'doxazosin',
    drugName: 'Doxazosin',
    brandNames: ['Cardura'],
    drugClass: 'Non-selective alpha-1 adrenergic antagonist (Quinazoline)',

    moa: 'Non-selectively blocks α1A (prostatic) and α1B (vascular) adrenergic receptors, causing smooth muscle relaxation in prostate and blood vessels.',

    indications: [
      'Benign prostatic hyperplasia (BPH)',
      'Hypertension'
    ],

    sideEffects: [
      'Orthostatic hypotension',
      'Dizziness',
      'Fatigue',
      'Edema',
      'Rhinitis'
    ],

    contraindications: [
      'Hypersensitivity to quinazolines or doxazosin'
    ],

    clinicalConsiderations: [
      'Monitor blood pressure',
      'Monitor urinary flow symptoms'
    ],

    highYield: [
      'Dual indication for BPH and hypertension',
      'Non-selective blockade increases risk of orthostatic hypotension',
      'Requires gradual dose titration starting at 1 mg daily'
    ],

    slideReference: 'BPH - Alpha-Blockers'
  },

  {
    id: 'prazosin',
    drugName: 'Prazosin',
    brandNames: ['Minipress'],
    drugClass: 'Non-selective alpha-1 adrenergic antagonist (Quinazoline)',

    moa: 'Blocks α1A and α1B adrenergic receptors non-selectively throughout the body, causing vasodilation and prostatic smooth muscle relaxation.',

    indications: [
      'Hypertension',
      'BPH (less commonly used)',
      'PTSD-related nightmares (off-label)'
    ],

    sideEffects: [
      'Severe first-dose orthostatic hypotension and syncope',
      'Dizziness',
      'Headache',
      'Drowsiness',
      'Palpitations'
    ],

    contraindications: [
      'Hypersensitivity to prazosin'
    ],

    clinicalConsiderations: [
      'Monitor blood pressure (especially first dose)',
      'Monitor syncope risk'
    ],

    highYield: [
      'Prototype non-selective α1-blocker',
      'Significant first-dose hypotension requires bedtime dosing',
      'Largely replaced by selective agents for BPH due to side effect profile'
    ],

    slideReference: 'BPH - Alpha-Blockers'
  },

  // ===== ERECTILE DYSFUNCTION (Additional) =====
  {
    id: 'avanafil',
    drugName: 'Avanafil',
    brandNames: ['Stendra'],
    drugClass: 'Phosphodiesterase-5 (PDE-5) inhibitor (Pyrazolopyrimidinone)',

    moa: 'Highly selective PDE-5 inhibitor that prevents cGMP degradation, enhancing NO-mediated vasodilation in penile tissue. Greater selectivity reduces off-target effects.',

    indications: [
      'Erectile dysfunction (ED)'
    ],

    sideEffects: [
      'Headache (lower incidence than older PDE-5 inhibitors)',
      'Flushing',
      'Nasal congestion',
      'Back pain'
    ],

    contraindications: [
      'Nitrate use (absolute)',
      'Severe cardiovascular disease',
      'Severe hepatic/renal impairment'
    ],

    clinicalConsiderations: [
      'Monitor blood pressure',
      'Monitor cardiovascular status'
    ],

    highYield: [
      'Fastest onset of action (15-30 minutes) - best for spontaneity',
      'Highest PDE-5 selectivity results in fewer side effects (less blue vision than sildenafil)',
      'Newest PDE-5 inhibitor with improved side effect profile'
    ],

    slideReference: 'GU/ED Pharmacology - PDE5 Inhibitors'
  },

  // ===== URINARY INCONTINENCE (Additional Antimuscarinics) =====
  {
    id: 'tolterodine',
    drugName: 'Tolterodine',
    brandNames: ['Detrol', 'Detrol LA'],
    drugClass: 'M2/M3-selective antimuscarinic',

    moa: 'Preferentially blocks M2 and M3 muscarinic receptors in bladder, with some selectivity for bladder tissue over salivary glands, reducing dry mouth compared to oxybutynin.',

    indications: [
      'Overactive bladder',
      'Urge incontinence',
      'Urgency and frequency'
    ],

    sideEffects: [
      'Dry mouth (less than oxybutynin)',
      'Constipation',
      'Headache',
      'Dizziness',
      'Blurred vision'
    ],

    contraindications: [
      'Urinary retention',
      'Gastric retention',
      'Uncontrolled narrow-angle glaucoma'
    ],

    clinicalConsiderations: [
      'Monitor urinary retention',
      'Monitor hepatic function'
    ],

    highYield: [
      'Better tolerated than oxybutynin with less dry mouth',
      'Extended-release formulation (Detrol LA) once daily improves compliance',
      'Good first-line alternative to oxybutynin'
    ],

    slideReference: 'UI Pharmacology - Antimuscarinics'
  },

  {
    id: 'solifenacin',
    drugName: 'Solifenacin',
    brandNames: ['Vesicare', 'Vesicare LS'],
    drugClass: 'Long-acting non-selective antimuscarinic',

    moa: 'Competitively blocks muscarinic receptors (M1-M5) in detrusor muscle, preventing acetylcholine-mediated bladder contractions. Long duration allows once-daily dosing.',

    indications: [
      'Overactive bladder',
      'Urge urinary incontinence',
      'Urgency and frequency'
    ],

    sideEffects: [
      'Dry mouth',
      'Constipation',
      'Blurred vision',
      'UTI',
      'Dyspepsia'
    ],

    contraindications: [
      'Urinary retention',
      'Gastric retention',
      'Uncontrolled narrow-angle glaucoma',
      'Severe hepatic impairment'
    ],

    clinicalConsiderations: [
      'Monitor QT interval (in at-risk patients)',
      'Monitor urinary retention'
    ],

    highYield: [
      'Once-daily dosing improves compliance',
      'Better tolerability profile than older antimuscarinics',
      'May prolong QT interval - caution with other QT-prolonging drugs'
    ],

    slideReference: 'UI Pharmacology - Antimuscarinics'
  },

  {
    id: 'darifenacin',
    drugName: 'Darifenacin',
    brandNames: ['Enablex'],
    drugClass: 'M3-selective antimuscarinic',

    moa: 'Selectively blocks M3 muscarinic receptors in bladder detrusor muscle while sparing M1 receptors in the CNS, reducing cognitive side effects especially in elderly patients.',

    indications: [
      'Overactive bladder',
      'Urge incontinence',
      'Urgency and frequency'
    ],

    sideEffects: [
      'Dry mouth',
      'Constipation (most common)',
      'Dyspepsia',
      'Headache',
      'Minimal cognitive effects'
    ],

    contraindications: [
      'Urinary retention',
      'Gastric retention',
      'Uncontrolled narrow-angle glaucoma',
      'Severe hepatic impairment'
    ],

    clinicalConsiderations: [
      'Monitor urinary retention',
      'Monitor constipation',
      'Monitor cognitive function'
    ],

    highYield: [
      'M3 selectivity spares M1 receptors in brain → reduced cognitive impairment',
      'Best choice for elderly patients with dementia or cognitive concerns',
      'Higher incidence of constipation than other antimuscarinics'
    ],

    slideReference: 'UI Pharmacology - Antimuscarinics'
  },

  // ===== PMS TREATMENTS =====
  {
    id: 'ssri_pms',
    drugName: 'SSRIs (Sertraline, Fluoxetine, Paroxetine, Citalopram, Escitalopram)',
    brandNames: ['Sertraline (Zoloft)', 'Fluoxetine (Prozac, Sarafem)', 'Paroxetine (Paxil)', 'Citalopram (Celexa)', 'Escitalopram (Lexapro)'],
    drugClass: 'Selective serotonin reuptake inhibitors (SSRIs)',

    moa: 'Inhibit presynaptic serotonin reuptake, increasing serotonin availability in the synaptic cleft. Addresses serotonin deficiency implicated in PMS/PMDD mood and behavioral symptoms.',

    indications: [
      'Premenstrual dysphoric disorder (PMDD)',
      'Severe premenstrual syndrome (PMS) with mood symptoms',
      'Depression',
      'Anxiety disorders'
    ],

    sideEffects: [
      'Nausea',
      'Sexual dysfunction (decreased libido, anorgasmia)',
      'Insomnia or somnolence',
      'Headache',
      'Weight gain',
      'Serotonin syndrome (rare, with multiple serotonergic agents)'
    ],

    contraindications: [
      'Concurrent MAOI use (within 14 days)',
      'Hypersensitivity to SSRIs'
    ],

    clinicalConsiderations: [
      'Monitor mood and suicidal ideation (especially early treatment)',
      'Monitor response to therapy',
      'Monitor sexual function'
    ],

    highYield: [
      'Most effective pharmacologic treatment for PMDD and severe PMS mood symptoms',
      'Can be dosed continuously or luteal phase only (14 days before menses)',
      'Works faster for PMDD than depression (may see benefit within days vs weeks)'
    ],

    slideReference: 'PMS & PMDD Treatments'
  },

  {
    id: 'calcium_magnesium_pms',
    drugName: 'Calcium and Magnesium Supplements',
    brandNames: ['Various OTC calcium/magnesium supplements'],
    drugClass: 'Mineral supplementation',

    moa: 'Calcium and magnesium deficiencies contribute to PMS symptoms. Supplementation helps regulate neurotransmitter function, reduces water retention, stabilizes mood, and decreases headaches and sugar cravings.',

    indications: [
      'PMS symptom management (headaches, bloating, cravings)',
      'Prevention of osteoporosis',
      'General mineral supplementation'
    ],

    sideEffects: [
      'Constipation (calcium)',
      'Diarrhea (magnesium in high doses)',
      'Nausea',
      'Drug interactions (decreased absorption of certain antibiotics, thyroid medications)'
    ],

    contraindications: [
      'Hypercalcemia',
      'Hypermagnesemia',
      'Severe renal impairment'
    ],

    clinicalConsiderations: [
      'Monitor serum calcium and magnesium in at-risk patients',
      'Monitor renal function'
    ],

    highYield: [
      'Calcium 1200 mg/day shown to reduce PMS mood and physical symptoms',
      'Magnesium 200-400 mg/day helps with bloating, headaches, and cravings',
      'First-line complementary therapy before pharmacologic options'
    ],

    slideReference: 'PMS & PMDD Treatments'
  },

  // ===== HYPERPROLACTINEMIA TREATMENTS =====
  {
    id: 'cabergoline',
    drugName: 'Cabergoline',
    brandNames: ['Dostinex'],
    drugClass: 'Dopamine D2 receptor agonist (ergot derivative)',

    moa: 'Activates dopamine D2 receptors in the pituitary lactotrophs, inhibiting prolactin secretion. Also shrinks prolactin-secreting pituitary adenomas (prolactinomas).',

    indications: [
      'Hyperprolactinemia',
      'Prolactinoma (micro- and macro-adenomas)',
      'Galactorrhea',
      'Prolactin-related amenorrhea or infertility',
      'Suppression of lactation (off-label)'
    ],

    sideEffects: [
      'Nausea',
      'Headache',
      'Dizziness',
      'Orthostatic hypotension',
      'Cardiac valvular disease (with long-term high-dose use)',
      'Impulse control disorders (rare)'
    ],

    contraindications: [
      'Uncontrolled hypertension',
      'Pregnancy-induced hypertension',
      'Cardiac valvulopathy',
      'Hypersensitivity to ergot alkaloids'
    ],

    clinicalConsiderations: [
      'Monitor prolactin levels',
      'Monitor pituitary imaging (tumor size)',
      'Monitor cardiac valves (echocardiogram with long-term use)',
      'Monitor blood pressure',
      'Monitor pregnancy status'
    ],

    highYield: [
      'First-line medical therapy for prolactinomas (more effective than bromocriptine)',
      'Long half-life allows twice-weekly dosing (better compliance than bromocriptine)',
      'Can shrink macroprolactinomas and restore fertility'
    ],

    slideReference: 'Hyperprolactinemia & Galactorrhea Treatments'
  },

  {
    id: 'bromocriptine',
    drugName: 'Bromocriptine',
    brandNames: ['Parlodel', 'Cycloset'],
    drugClass: 'Dopamine D2 receptor agonist (ergot derivative)',

    moa: 'Stimulates dopamine D2 receptors in the pituitary, inhibiting prolactin release. Also used for Parkinson\'s disease and type 2 diabetes (Cycloset formulation).',

    indications: [
      'Hyperprolactinemia',
      'Prolactinoma',
      'Galactorrhea',
      'Parkinson\'s disease',
      'Type 2 diabetes (Cycloset)'
    ],

    sideEffects: [
      'Nausea and vomiting (very common)',
      'Orthostatic hypotension',
      'Headache',
      'Dizziness',
      'Fatigue',
      'Hallucinations (in Parkinson\'s patients)'
    ],

    contraindications: [
      'Uncontrolled hypertension',
      'Pregnancy-induced hypertension/preeclampsia',
      'Hypersensitivity to ergot derivatives',
      'Syncopal migraine'
    ],

    clinicalConsiderations: [
      'Monitor prolactin levels',
      'Monitor blood pressure',
      'Monitor pituitary tumor size',
      'Monitor pregnancy status'
    ],

    highYield: [
      'Older agent; largely replaced by cabergoline due to better tolerability and less frequent dosing',
      'Requires daily to TID dosing (vs cabergoline twice weekly)',
      'High incidence of nausea limits compliance'
    ],

    slideReference: 'Hyperprolactinemia & Galactorrhea Treatments'
  },

  // ===== TESTOSTERONE REPLACEMENT THERAPY =====
  {
    id: 'testosterone',
    drugName: 'Testosterone',
    brandNames: ['AndroGel (topical gel)', 'Testim (topical gel)', 'Axiron (topical solution)', 'Androderm (transdermal patch)', 'Depo-Testosterone (IM injection)', 'Aveed (IM injection - long-acting)', 'Testopel (subcutaneous pellet)'],
    drugClass: 'Androgen hormone replacement',

    moa: 'Exogenous testosterone replaces endogenous testosterone in hypogonadal men, binding to androgen receptors to restore physiologic effects including libido, muscle mass, bone density, and spermatogenesis.',

    indications: [
      'Male hypogonadism (primary or secondary)',
      'Delayed puberty in males',
      'Gender-affirming hormone therapy (transgender men)'
    ],

    sideEffects: [
      'Polycythemia (elevated hematocrit/hemoglobin)',
      'Acne and oily skin',
      'Gynecomastia (aromatization to estrogen)',
      'Testicular atrophy',
      'Decreased fertility (suppression of spermatogenesis)',
      'Sleep apnea worsening',
      'Prostate enlargement (monitor PSA)',
      'Fluid retention',
      'Behavioral changes (aggression, mood swings)'
    ],

    contraindications: [
      'Prostate cancer',
      'Breast cancer in men',
      'Uncontrolled heart failure',
      'Severe sleep apnea',
      'Hematocrit >50%',
      'Pregnancy (Category X if used by women)'
    ],

    clinicalConsiderations: [
      'Monitor testosterone levels (target mid-normal range)',
      'Monitor hematocrit/hemoglobin (baseline, 3-6 months, then annually)',
      'Monitor PSA and digital rectal exam (baseline, 3-6 months, then annually in men >40)',
      'Monitor lipid panel',
      'Monitor bone density (if osteoporosis risk)',
      'Monitor liver function tests'
    ],

    highYield: [
      'Multiple formulations; topical gels popular but risk of transfer to others (especially children/women)',
      'Suppresses endogenous testosterone production via negative feedback on LH/FSH',
      'Monitor hematocrit - polycythemia is dose-limiting toxicity requiring dose reduction or phlebotomy'
    ],

    slideReference: 'Testosterone Replacement Therapy'
  }
];
