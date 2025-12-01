// Professor Breeze - Pharmacology Quiz Questions
// Topics: GU/ED, Bone/Osteoporosis, Gonadal Hormones

import type { QuizQuestion } from './professorTypes';

export const breezeQuiz: QuizQuestion[] = [
  // GU/ED Pharmacology Questions (1-10)
  {
    id: '1',
    question: 'A 62-year-old man with erectile dysfunction is prescribed sildenafil (Viagra). He also takes nitroglycerin PRN for angina. What is the most important counseling point?',
    options: [
      'Take sildenafil with food to improve absorption and reduce gastric upset',
      'Never use sildenafil with nitrates due to severe hypotension risk',
      'Sildenafil may cause permanent vision loss especially in elderly patients',
      'Take sildenafil twice daily for best results and sustained effect'
    ],
    correct_answer: 'Never use sildenafil with nitrates due to severe hypotension risk',
    explanation: 'PDE5 inhibitors (sildenafil, tadalafil, etc.) are ABSOLUTELY CONTRAINDICATED with nitrates. Both cause vasodilation through different mechanisms (PDE5 inhibitors increase cGMP, nitrates increase NO). Combined use can cause life-threatening hypotension. This is the most critical drug interaction for PDE5 inhibitors.',
    learningObjective: 'Identify critical PDE5 inhibitor contraindications',
    difficulty: 'medium',
    slideReference: 'GU/ED Pharmacology - PDE5 Inhibitors'
  },
  {
    id: '2',
    question: 'A patient wants a PDE5 inhibitor that he can take daily to be "ready anytime" without planning ahead. Which drug has the longest duration of action?',
    options: [
      'Sildenafil (Viagra) - 4-6 hours duration of action',
      'Vardenafil (Levitra) - 4-5 hours duration of action',
      'Tadalafil (Cialis) - 24-36 hours duration of action',
      'Avanafil (Stendra) - 6 hours duration of action'
    ],
    correct_answer: 'Tadalafil (Cialis) - 24-36 hours duration of action',
    explanation: 'Tadalafil (Cialis) has the LONGEST duration of action (24-36 hours), making it ideal for daily dosing or "weekend use." This allows for spontaneity without timing the dose right before intercourse. Sildenafil and vardenafil last 4-6 hours and require planning. Avanafil has the fastest onset (15-30min) but only lasts 6 hours.',
    learningObjective: 'Compare PDE5 inhibitor pharmacokinetics',
    difficulty: 'easy',
    slideReference: 'GU/ED Pharmacology - PDE5 Inhibitors'
  },
  {
    id: '3',
    question: 'A 68-year-old man with BPH is started on finasteride (Proscar). When should he expect to see symptom improvement, and what important monitoring parameter should be adjusted?',
    options: [
      'Immediate relief; no monitoring changes needed for treatment',
      'Within 1-2 weeks; monitor blood pressure closely for hypotension',
      'After 6+ months; PSA levels should be doubled for accurate screening',
      'After 1 month; decrease dose if no improvement is seen'
    ],
    correct_answer: 'After 6+ months; PSA levels should be doubled for accurate screening',
    explanation: '5-alpha-reductase inhibitors (finasteride, dutasteride) work by blocking DHT production and shrinking the prostate. This takes TIME - patients need 6+ months for full effect. These drugs DECREASE PSA levels by ~50%, so PSA values should be DOUBLED when screening for prostate cancer to avoid missing malignancy. Alpha blockers provide immediate symptom relief while waiting for 5ARIs to work.',
    learningObjective: 'Understand 5-alpha-reductase inhibitor timeline and monitoring',
    difficulty: 'hard',
    slideReference: 'GU/ED Pharmacology - 5-Alpha Reductase Inhibitors'
  },
  {
    id: '4',
    question: 'A patient with BPH is prescribed tamsulosin (Flomax). What makes tamsulosin preferable to prazosin or doxazosin for BPH?',
    options: [
      'Tamsulosin is more effective at shrinking the prostate over time',
      'Tamsulosin is selective for alpha-1A receptors in prostate, causing less orthostatic hypotension',
      'Tamsulosin works faster than other alpha blockers for symptom relief',
      'Tamsulosin can be used with PDE5 inhibitors without any risk'
    ],
    correct_answer: 'Tamsulosin is selective for alpha-1A receptors in prostate, causing less orthostatic hypotension',
    explanation: 'Tamsulosin (Flomax) and silodosin are SELECTIVE for alpha-1A receptors found predominantly in the prostate and bladder neck. This selectivity means FEWER cardiovascular side effects (less orthostatic hypotension) compared to non-selective alpha blockers (prazosin, terazosin, doxazosin). No dose titration is needed with tamsulosin. However, it still carries some hypotension risk, especially when combined with PDE5 inhibitors.',
    learningObjective: 'Understand alpha blocker selectivity',
    difficulty: 'medium',
    slideReference: 'GU/ED Pharmacology - Alpha Blockers'
  },
  {
    id: '5',
    question: 'A 55-year-old woman with overactive bladder is started on oxybutynin. After 2 weeks, she complains of dry mouth, constipation, and confusion. What is the best alternative medication that avoids these side effects?',
    options: [
      'Tolterodine (another antimuscarinic with similar side effects)',
      'Solifenacin (another antimuscarinic with similar side effects)',
      'Mirabegron (beta-3 agonist with no anticholinergic effects)',
      'Increase oxybutynin dose to overcome side effects'
    ],
    correct_answer: 'Mirabegron (beta-3 agonist with no anticholinergic effects)',
    explanation: 'The patient is experiencing classic ANTICHOLINERGIC side effects from oxybutynin (dry mouth, constipation, blurred vision, cognitive impairment). Mirabegron (Myrbetriq) is a beta-3 adrenergic agonist that increases bladder capacity WITHOUT anticholinergic effects. It\'s an excellent alternative for patients who cannot tolerate antimuscarinics, especially elderly patients at risk for confusion. Side effect: can increase blood pressure.',
    learningObjective: 'Select appropriate OAB therapy based on side effect profile',
    difficulty: 'medium',
    slideReference: 'GU/ED Pharmacology - Beta-3 Agonists'
  },
  {
    id: '6',
    question: 'A patient with moderate-severe BPH and a large prostate (>40g) wants the most effective long-term treatment. What combination therapy is most appropriate?',
    options: [
      'PDE5 inhibitor + alpha blocker for dual symptom control',
      'Alpha blocker + 5-alpha-reductase inhibitor for complete coverage',
      'Two different alpha blockers for synergistic symptom relief',
      'Two different 5-alpha-reductase inhibitors for enhanced DHT blockade'
    ],
    correct_answer: 'Alpha blocker + 5-alpha-reductase inhibitor for complete coverage',
    explanation: 'For moderate-severe BPH with large prostates, COMBINATION therapy with alpha blocker + 5-alpha-reductase inhibitor is most effective. Alpha blocker (tamsulosin) provides IMMEDIATE symptom relief. 5-ARI (finasteride or dutasteride) provides LONG-TERM prostate shrinkage over 6+ months. This addresses both immediate symptoms and underlying pathology. Example: Tamsulosin + Dutasteride.',
    learningObjective: 'Design optimal BPH treatment strategy',
    difficulty: 'hard',
    slideReference: 'GU/ED Pharmacology - BPH Combination Therapy'
  },
  {
    id: '7',
    question: 'Why does alprostadil (intracavernous or intraurethral) NOT require sexual stimulation to work, unlike PDE5 inhibitors?',
    options: [
      'Alprostadil works on different receptors than PDE5 inhibitors do',
      'Alprostadil directly causes vasodilation via PGE1, independent of the NO/cGMP pathway',
      'Alprostadil is more potent than PDE5 inhibitors at inducing erection',
      'Alprostadil works by blocking PDE5 more effectively than sildenafil does'
    ],
    correct_answer: 'Alprostadil directly causes vasodilation via PGE1, independent of the NO/cGMP pathway',
    explanation: 'Alprostadil is synthetic PGE1 (prostaglandin E1) that DIRECTLY causes vasodilation in the corpus cavernosum, independent of the NO/cGMP pathway. PDE5 inhibitors REQUIRE sexual stimulation to work because they only prevent cGMP degradation - they need NO release (from sexual stimulation) to generate cGMP first. This is why alprostadil works without stimulation but is more invasive (injection or urethral insertion).',
    learningObjective: 'Compare ED treatment mechanisms',
    difficulty: 'hard',
    slideReference: 'GU/ED Pharmacology - Alprostadil'
  },
  {
    id: '8',
    question: 'A patient taking dutasteride (Avodart) for BPH tells you his wife is trying to get pregnant. What important counseling should you provide?',
    options: [
      'Dutasteride has no effect on pregnancy or fetal development',
      'Dutasteride can cause birth defects; pregnant women should not handle crushed/broken tablets',
      'Only finasteride causes birth defects, not dutasteride or other 5ARIs',
      'The patient should stop dutasteride immediately to improve sperm quality and fertility'
    ],
    correct_answer: 'Dutasteride can cause birth defects; pregnant women should not handle crushed/broken tablets',
    explanation: 'Both finasteride and dutasteride are 5-alpha-reductase inhibitors that can cause BIRTH DEFECTS, particularly affecting male fetal genital development. Pregnant women or women who may become pregnant should NOT HANDLE CRUSHED OR BROKEN TABLETS because the drug can be absorbed through skin. The drug is found in semen, but the amount is not thought to pose risk. This is a critical safety counseling point.',
    learningObjective: 'Identify 5-ARI safety concerns for pregnancy',
    difficulty: 'medium',
    slideReference: 'GU/ED Pharmacology - 5-Alpha Reductase Inhibitors'
  },
  {
    id: '9',
    question: 'An elderly patient with BPH starts taking tamsulosin and reports dizziness when standing up quickly. He also takes amlodipine for hypertension. What is the likely cause and management?',
    options: [
      'Amlodipine dose is too high; reduce it to prevent dizziness',
      'Tamsulosin is causing orthostatic hypotension; consider switching to silodosin or taking at bedtime',
      'This is normal and will resolve without intervention over time',
      'Add a PDE5 inhibitor to counteract the hypotension symptoms'
    ],
    correct_answer: 'Tamsulosin is causing orthostatic hypotension; consider switching to silodosin or taking at bedtime',
    explanation: 'Even though tamsulosin is selective for alpha-1A receptors, it can still cause orthostatic hypotension, especially in elderly patients or those on antihypertensives. This effect is ADDITIVE with other vasodilators (CCBs, PDE5 inhibitors). Management: dose at bedtime to avoid daytime dizziness, ensure adequate hydration, consider more selective agent (silodosin), or add non-pharmacologic measures (rise slowly, compression stockings).',
    learningObjective: 'Manage alpha blocker side effects',
    difficulty: 'medium',
    slideReference: 'GU/ED Pharmacology - Alpha Blockers'
  },
  {
    id: '10',
    question: 'Compare finasteride vs dutasteride for BPH treatment. Which statement is correct?',
    options: [
      'Finasteride blocks both type 1 and type 2 5-alpha-reductase; dutasteride only blocks type 2',
      'Dutasteride blocks both type 1 and type 2 5-alpha-reductase; finasteride only blocks type 2',
      'Both drugs block the same enzymes but dutasteride is more potent',
      'Finasteride works faster than dutasteride'
    ],
    correct_answer: 'Dutasteride blocks both type 1 and type 2 5-alpha-reductase; finasteride only blocks type 2',
    explanation: 'FINASTERIDE blocks only type 2 5-alpha-reductase. DUTASTERIDE blocks BOTH type 1 and type 2, providing more complete DHT suppression (~90% vs ~70% reduction). This dual blockade theoretically makes dutasteride more effective, but clinical differences are modest. Both take 6+ months for full effect. Both have similar side effects (sexual dysfunction, gynecomastia, decreased PSA).',
    learningObjective: 'Differentiate 5-alpha-reductase inhibitors',
    difficulty: 'medium',
    slideReference: 'GU/ED Pharmacology - 5-Alpha Reductase Inhibitors'
  },

  // Bone/Osteoporosis Questions (11-20)
  {
    id: '11',
    question: 'A 65-year-old woman is prescribed alendronate (Fosamax) for osteoporosis. She experiences severe heartburn 2 weeks after starting. What is the most likely cause and how should this be managed?',
    options: [
      'She is allergic to alendronate; switch to a different drug class',
      'She is not taking it correctly; reinforce taking with full glass of water, remaining upright 30-60min, on empty stomach',
      'Heartburn is unrelated to alendronate; add a PPI for symptom control',
      'Reduce the dose of alendronate to minimize esophageal irritation'
    ],
    correct_answer: 'She is not taking it correctly; reinforce taking with full glass of water, remaining upright 30-60min, on empty stomach',
    explanation: 'Esophageal irritation, erosions, and esophagitis are MAJOR side effects of oral bisphosphonates. Proper administration is CRITICAL: Take FIRST THING in morning with 6-8oz plain water, 30-60 minutes before any food/drink/meds, remain UPRIGHT (sitting or standing) for at least 30 minutes (60 min for ibandronate). If patient cannot follow these instructions or has esophageal disorders, bisphosphonates are contraindicated. Consider IV zoledronic acid or alternative drug class.',
    learningObjective: 'Ensure proper bisphosphonate administration',
    difficulty: 'medium',
    slideReference: 'Bone Pharmacology - Bisphosphonates'
  },
  {
    id: '12',
    question: 'A patient on long-term alendronate therapy for 5 years is scheduled for dental surgery to extract a tooth. What is the major concern?',
    options: [
      'Increased risk of infection at the surgical site post-extraction',
      'Bisphosphonate-related osteonecrosis of the jaw (BRONJ) with exposed bone',
      'Atypical femur fracture during dental procedure or manipulation',
      'Drug interaction with local anesthetic causing cardiovascular complications'
    ],
    correct_answer: 'Bisphosphonate-related osteonecrosis of the jaw (BRONJ) with exposed bone',
    explanation: 'BRONJ (Bisphosphonate-Related Osteonecrosis of Jaw) is a serious complication of bisphosphonate therapy, especially with: 1) IV bisphosphonates, 2) nitrogen-containing bisphosphonates (alendronate, risedronate, zoledronic acid), 3) long-term use, 4) dental surgery/trauma. Presents as exposed, devitalized bone in maxillofacial region with pain. Patients should have dental exam before starting bisphosphonates and maintain good oral hygiene. Consider drug holiday before major dental procedures.',
    learningObjective: 'Recognize BRONJ risk factors',
    difficulty: 'medium',
    slideReference: 'Bone Pharmacology - BRONJ'
  },
  {
    id: '13',
    question: 'A 70-year-old woman has been taking alendronate for 4 years with good BMD response. She has no history of fractures. What is the recommended next step according to FDA guidelines?',
    options: [
      'Continue alendronate indefinitely without reassessment',
      'Switch to a different bisphosphonate for enhanced efficacy',
      'Perform risk assessment and consider drug holiday for low-risk patients',
      'Stop all osteoporosis medications immediately to prevent atypical fractures'
    ],
    correct_answer: 'Perform risk assessment and consider drug holiday for low-risk patients',
    explanation: 'FDA recommends that after 3-5 years of bisphosphonate therapy, providers should perform a RISK ASSESSMENT. Low-risk patients (no prior fractures, stable/improved BMD) may benefit from a DRUG HOLIDAY due to concerns about atypical femur fractures with long-term use. High-risk patients (previous fractures, very low BMD, high FRAX scores) should continue therapy. This balances benefits against rare but serious long-term complications.',
    learningObjective: 'Apply bisphosphonate duration guidelines',
    difficulty: 'hard',
    slideReference: 'Bone Pharmacology - Bisphosphonate Duration'
  },
  {
    id: '14',
    question: 'A patient with osteoporosis cannot tolerate oral bisphosphonates due to severe GERD. Which alternative provides the best efficacy without GI side effects?',
    options: [
      'Raloxifene (Evista) oral SERM for vertebral fracture prevention',
      'Zoledronic acid (Reclast) IV annual infusion bypassing GI tract',
      'Calcitonin nasal spray for bone preservation and pain relief',
      'Calcium and vitamin D supplementation alone for bone health'
    ],
    correct_answer: 'Zoledronic acid (Reclast) IV annual infusion bypassing GI tract',
    explanation: 'Zoledronic acid (Reclast) is the most potent bisphosphonate and is given IV annually (or biannually for prevention), completely avoiding GI side effects. It has excellent efficacy for fracture reduction. Still carries risks of BRONJ, atypical femur fractures, flu-like symptoms after infusion, and requires normal renal function. Raloxifene only reduces vertebral fractures and increases VTE risk. Calcitonin is less effective than bisphosphonates.',
    learningObjective: 'Select appropriate osteoporosis therapy for patients with GI contraindications',
    difficulty: 'medium',
    slideReference: 'Bone Pharmacology - IV Bisphosphonates'
  },
  {
    id: '15',
    question: 'A 68-year-old woman with history of DVT 3 years ago asks about raloxifene (Evista) for osteoporosis prevention. What is your response?',
    options: [
      'Raloxifene is perfect for you since it reduces breast cancer risk significantly',
      'Raloxifene is contraindicated due to your history of DVT - it increases thromboembolic risk',
      'Raloxifene is safe as long as the DVT was more than 1 year ago',
      'Raloxifene works better than bisphosphonates for preventing hip fractures'
    ],
    correct_answer: 'Raloxifene is contraindicated due to your history of DVT - it increases thromboembolic risk',
    explanation: 'Raloxifene (SERM) INCREASES risk of thromboembolic events (DVT, PE, stroke) similar to estrogen. It is CONTRAINDICATED in patients with history of VTE or active VTE. Other contraindications: pregnancy, women planning pregnancy. Benefits: reduces vertebral fractures, reduces breast cancer risk in high-risk women, no endometrial stimulation. Does NOT reduce hip fractures like bisphosphonates do.',
    learningObjective: 'Identify SERM contraindications',
    difficulty: 'easy',
    slideReference: 'Bone Pharmacology - Raloxifene'
  },
  {
    id: '16',
    question: 'What makes denosumab (Prolia) unique compared to bisphosphonates, and what is a critical safety concern when stopping it?',
    options: [
      'Denosumab is an oral medication that works faster than bisphosphonates for bone preservation',
      'Denosumab is a monoclonal antibody against RANKL given SC q6 months; stopping causes rapid bone loss requiring transition to another agent',
      'Denosumab has no risk of BRONJ unlike nitrogen-containing bisphosphonates',
      'Denosumab can be stopped without any concerns about rebound bone loss'
    ],
    correct_answer: 'Denosumab is a monoclonal antibody against RANKL given SC q6 months; stopping causes rapid bone loss requiring transition to another agent',
    explanation: 'Denosumab is a MONOCLONAL ANTIBODY against RANKL (blocks osteoclast formation). Given SC every 6 months. CRITICAL WARNING: If therapy is stopped, there is RAPID BONE LOSS and increased fracture risk - patients MUST transition to another osteoporosis agent (bisphosphonate). Unlike bisphosphonates which accumulate in bone, denosumab has no residual effect. Must correct hypocalcemia before starting. Still carries BRONJ risk.',
    learningObjective: 'Understand denosumab unique characteristics',
    difficulty: 'hard',
    slideReference: 'Bone Pharmacology - Denosumab'
  },
  {
    id: '17',
    question: 'A 72-year-old woman with severe osteoporosis (T-score -3.5), previous vertebral fracture, and history of MI 2 months ago asks about romosozumab (Evenity). What is your recommendation?',
    options: [
      'Start romosozumab immediately as she is high-risk for fracture complications',
      'Romosozumab is contraindicated due to recent MI - it has a Black Box Warning for CV events',
      'Romosozumab is safe since the MI was 2 months ago with good recovery',
      'Romosozumab only works in young patients under 65 years old'
    ],
    correct_answer: 'Romosozumab is contraindicated due to recent MI - it has a Black Box Warning for CV events',
    explanation: 'Romosozumab has a BLACK BOX WARNING for increased risk of MI, stroke, and CV death. DO NOT INITIATE in patients who had MI or stroke within the PRECEDING YEAR. This patient had MI 2 months ago - absolutely contraindicated. Even after 1 year, carefully consider benefits vs risks in patients with CV risk factors. Romosozumab is unique: dual action (increases bone formation + decreases resorption), given as 2 SC injections monthly x 12 months.',
    learningObjective: 'Apply romosozumab contraindications',
    difficulty: 'medium',
    slideReference: 'Bone Pharmacology - Romosozumab'
  },
  {
    id: '18',
    question: 'A patient taking calcium carbonate supplements complains of constipation and asks about alternatives. She also takes omeprazole for GERD. What is the best recommendation?',
    options: [
      'Continue calcium carbonate but increase fluid intake to reduce constipation',
      'Switch to calcium citrate - better absorption without acid, less constipation, can take without food',
      'Stop all calcium supplements and focus on dietary calcium sources',
      'Take calcium carbonate with omeprazole to improve absorption and reduce side effects'
    ],
    correct_answer: 'Switch to calcium citrate - better absorption without acid, less constipation, can take without food',
    explanation: 'CALCIUM CARBONATE requires acidic environment for absorption (take WITH food), MORE constipation, LESS expensive. Omeprazole (PPI) DECREASES calcium carbonate absorption. CALCIUM CITRATE does NOT require acid (better for elderly and PPI users), can take WITHOUT food, BETTER absorption, LESS constipation, but more expensive. For this patient on PPI with constipation, calcium citrate is ideal. Both should be taken with vitamin D for optimal absorption.',
    learningObjective: 'Select appropriate calcium formulation',
    difficulty: 'medium',
    slideReference: 'Bone Pharmacology - Calcium'
  },
  {
    id: '19',
    question: 'Why is teriparatide (Forteo) reserved for high-risk osteoporosis patients, and what is the maximum duration of use?',
    options: [
      'It is very expensive and has mild efficacy compared to bisphosphonates',
      'It has a Black Box Warning for osteosarcoma risk and requires daily SC injections; maximum 2 years lifetime use',
      'It can only be used in young patients under 50 years old',
      'It causes severe hypercalcemia in all patients requiring hospitalization'
    ],
    correct_answer: 'It has a Black Box Warning for osteosarcoma risk and requires daily SC injections; maximum 2 years lifetime use',
    explanation: 'Teriparatide is recombinant PTH (1-34) - the ONLY true bone FORMATION therapy (anabolic). BLACK BOX WARNING: Osteosarcoma risk (based on rat studies with high doses). Reserved for HIGH-RISK patients: very low BMD, history of fractures, failed other therapies. Given as DAILY SC INJECTION. Maximum 2 YEARS lifetime use. Can cause orthostatic hypotension when injecting. Also contraindicated in Paget\'s disease, previous skeletal radiation, kidney stones.',
    learningObjective: 'Understand teriparatide indications and limitations',
    difficulty: 'hard',
    slideReference: 'Bone Pharmacology - Teriparatide'
  },
  {
    id: '20',
    question: 'A patient is prescribed vitamin D supplementation. She also takes phenytoin for seizures. What is the concern and management?',
    options: [
      'Phenytoin has no interaction with vitamin D supplementation or metabolism',
      'Phenytoin increases vitamin D metabolism, requiring higher vitamin D doses for adequacy',
      'Vitamin D increases phenytoin levels causing toxicity and neurological symptoms',
      'They should never be taken together due to severe interactions'
    ],
    correct_answer: 'Phenytoin increases vitamin D metabolism, requiring higher vitamin D doses for adequacy',
    explanation: 'Phenytoin, barbiturates, carbamazepine, rifampin, and valproic acid are enzyme inducers that INCREASE vitamin D metabolism → lower vitamin D levels → may need HIGHER vitamin D doses. Other interactions: Cholestyramine, colestipol, orlistat, mineral oil DECREASE vitamin D absorption. Avoid taking vitamin D with ALUMINUM-containing products (antacids) to prevent aluminum toxicity. Monitor 25-OH vitamin D levels to ensure adequacy.',
    learningObjective: 'Identify vitamin D drug interactions',
    difficulty: 'medium',
    slideReference: 'Bone Pharmacology - Vitamin D'
  },

  // Gonadal Hormones Questions (21-30)
  {
    id: '21',
    question: 'A 28-year-old woman on combined oral contraceptives (OCPs) presents to the ED with sudden unilateral leg pain, swelling, and warmth. What is the most likely diagnosis and what is the risk factor?',
    options: [
      'Muscle strain from exercise; no risk from OCP use',
      'Deep vein thrombosis (DVT); OCPs increase VTE risk significantly',
      'Cellulitis requiring immediate antibiotic therapy',
      'Peripheral arterial disease causing claudication symptoms'
    ],
    correct_answer: 'Deep vein thrombosis (DVT); OCPs increase VTE risk significantly',
    explanation: 'Combined OCPs INCREASE risk of venous thromboembolism (VTE) including DVT and PE. Risk is further increased by: smoking, age >35, obesity, thrombophilia, prolonged immobility. This is why smoking >35 is an ABSOLUTE CONTRAINDICATION for combined OCPs. Progestin-only contraceptives do NOT increase VTE risk and are preferred for high-risk patients. Third-generation progestins (desogestrel, norgestimate) may have higher VTE risk than second-generation.',
    learningObjective: 'Recognize OCP thromboembolic risks',
    difficulty: 'medium',
    slideReference: 'Gonadal Hormones - OCP Risks'
  },
  {
    id: '22',
    question: 'A 37-year-old woman who smokes 1 pack per day wants to start oral contraceptives. What is the most appropriate recommendation?',
    options: [
      'Combined OCPs are safe for her despite smoking history',
      'Combined OCPs are contraindicated; recommend progestin-only contraceptive instead',
      'She can use combined OCPs if she reduces smoking to half pack per day',
      'She should quit smoking but can start combined OCPs immediately after quitting'
    ],
    correct_answer: 'Combined OCPs are contraindicated; recommend progestin-only contraceptive instead',
    explanation: 'ABSOLUTE CONTRAINDICATION: Smokers over age 35 using combined OCPs have substantially increased risk of MI, stroke, and VTE. Under 35, smoking is a relative contraindication. This patient at 37 who smokes CANNOT use combined OCPs. BEST OPTION: Progestin-only contraceptive (pill, IUD, implant, injection) which does NOT increase VTE/CV risk. Alternatively, non-hormonal methods (copper IUD, barrier methods).',
    learningObjective: 'Apply OCP contraindications',
    difficulty: 'easy',
    slideReference: 'Gonadal Hormones - OCP Contraindications'
  },
  {
    id: '23',
    question: 'A woman on combined OCPs is prescribed rifampin for TB prophylaxis. What counseling should you provide?',
    options: [
      'No interaction; rifampin does not affect OCP efficacy',
      'Rifampin decreases OCP efficacy through enzyme induction; use backup contraception during treatment and 7 days after',
      'Stop OCPs while taking rifampin to prevent liver toxicity',
      'Double the OCP dose while on rifampin to maintain contraceptive efficacy'
    ],
    correct_answer: 'Rifampin decreases OCP efficacy through enzyme induction; use backup contraception during treatment and 7 days after',
    explanation: 'RIFAMPIN and RIFABUTIN are strong CYP450 enzyme inducers that significantly decrease OCP efficacy by increasing metabolism of estrogen and progestin. COUNSEL: Use backup contraception (condoms) during rifampin therapy and for 7 days after completion. Other enzyme inducers that decrease OCP efficacy include: phenytoin, carbamazepine, barbiturates, and St. John\'s Wort. IMPORTANT: Most other antibiotics (amoxicillin, doxycycline, etc.) do NOT decrease OCP efficacy despite common belief - the "gut flora disruption" theory has not been supported by clinical evidence.',
    learningObjective: 'Manage OCP drug interactions',
    difficulty: 'medium',
    slideReference: 'Gonadal Hormones - OCP Drug Interactions'
  },
  {
    id: '24',
    question: 'Combined oral contraceptives work through multiple mechanisms. Which option correctly identifies all THREE mechanisms?',
    options: [
      'Prevent ovulation, thin endometrium, thicken cervical mucus',
      'Prevent ovulation, thicken endometrium, thin cervical mucus',
      'Promote ovulation, prevent implantation, kill sperm directly',
      'Thicken endometrium, prevent ovulation, destroy sperm chemically'
    ],
    correct_answer: 'Prevent ovulation, thin endometrium, thicken cervical mucus',
    explanation: 'Combined OCPs work through THREE mechanisms: 1) PREVENT OVULATION: Suppress GnRH → decrease FSH/LH → no mid-cycle LH surge → no follicular development or ovulation (PRIMARY mechanism). 2) THIN ENDOMETRIUM: Progestins thin uterine lining → hostile to implantation. 3) THICKEN CERVICAL MUCUS: Progestins increase mucus viscosity → inhibit sperm penetration. Most important is prevention of ovulation - if ovulation is suppressed, pregnancy cannot occur.',
    learningObjective: 'Understand OCP mechanisms',
    difficulty: 'medium',
    slideReference: 'Gonadal Hormones - OCP Mechanisms'
  },
  {
    id: '25',
    question: 'A 42-year-old woman with intact uterus is starting hormone replacement therapy (HRT) for menopausal symptoms. Why must a progestin be included with estrogen?',
    options: [
      'Progestin enhances the effects of estrogen on hot flashes and vasomotor symptoms',
      'Progestin prevents endometrial hyperplasia and carcinoma from unopposed estrogen exposure',
      'Progestin reduces the risk of breast cancer in hormone therapy users',
      'Progestin is not necessary; estrogen alone is sufficient for symptom management'
    ],
    correct_answer: 'Progestin prevents endometrial hyperplasia and carcinoma from unopposed estrogen exposure',
    explanation: 'UNOPPOSED estrogen (estrogen without progestin) in women with intact uterus causes endometrial hyperplasia → increased risk of endometrial carcinoma. Progestin OPPOSES estrogen\'s proliferative effects on endometrium, preventing hyperplasia. Women who have had hysterectomy can use estrogen alone. Common regimens: Premarin (estrogen alone for post-hysterectomy), Prempro (estrogen + MPA for intact uterus), Premphase (cyclic estrogen + progestin).',
    learningObjective: 'Understand HRT formulations',
    difficulty: 'medium',
    slideReference: 'Gonadal Hormones - HRT'
  },
  {
    id: '26',
    question: 'A patient with ER+ breast cancer is prescribed tamoxifen. What is the MOA and what major adverse effect should you monitor?',
    options: [
      'Tamoxifen blocks estrogen receptors everywhere; no adverse effects occur',
      'Tamoxifen is an estrogen antagonist in breast but agonist in uterus; monitor for endometrial hyperplasia/cancer',
      'Tamoxifen increases estrogen production; monitor for hot flashes only',
      'Tamoxifen has no effect on the uterus or endometrial tissue'
    ],
    correct_answer: 'Tamoxifen is an estrogen antagonist in breast but agonist in uterus; monitor for endometrial hyperplasia/cancer',
    explanation: 'Tamoxifen is a SERM with tissue-specific activity: ANTAGONIST in breast tissue (treats ER+ breast cancer) but AGONIST in uterus (increases risk of endometrial hyperplasia and cancer). Also increases VTE risk (DVT, PE). Most effective for ER+/PR+ tumors. Used as adjuvant therapy with chemo/radiation and for breast cancer prevention in high-risk women. Resistance typically develops after 5 years. Monitor for abnormal vaginal bleeding (sign of endometrial cancer).',
    learningObjective: 'Understand SERM tissue selectivity',
    difficulty: 'hard',
    slideReference: 'Gonadal Hormones - Tamoxifen'
  },
  {
    id: '27',
    question: 'A woman who had unprotected intercourse 48 hours ago wants emergency contraception. She weighs 180 lbs. What is the best option?',
    options: [
      'Plan B (levonorgestrel) - works up to 72 hours post-intercourse',
      'Ella (ulipristal) - works up to 5 days and more effective than Plan B',
      'Combined OCPs in high doses as emergency contraception',
      'Wait to see if pregnancy occurs before taking action'
    ],
    correct_answer: 'Ella (ulipristal) - works up to 5 days and more effective than Plan B',
    explanation: 'PLAN B (levonorgestrel 1.5mg): Works up to 72 hours, less effective after 72H, less effective in obese women (BMI >25). ELLA (ulipristal acetate): Selective progesterone receptor modulator, ONLY emergency contraceptive that delays ovulation, works up to 5 DAYS (120 hours), MORE EFFECTIVE than Plan B (85% vs 75% reduction), maintains efficacy in obese women. For this patient at 48 hours, both work, but Ella is more effective, especially given her weight.',
    learningObjective: 'Compare emergency contraceptives',
    difficulty: 'medium',
    slideReference: 'Gonadal Hormones - Emergency Contraception'
  },
  {
    id: '28',
    question: 'A postmenopausal woman with ER+ metastatic breast cancer has failed tamoxifen therapy. What is the next-line therapy?',
    options: [
      'Increase tamoxifen dose to overcome resistance mechanisms',
      'Switch to raloxifene (another SERM) for continued therapy',
      'Start an aromatase inhibitor (anastrozole, letrozole, or exemestane)',
      'Start hormone replacement therapy to manage menopausal symptoms'
    ],
    correct_answer: 'Start an aromatase inhibitor (anastrozole, letrozole, or exemestane)',
    explanation: 'Aromatase inhibitors are SECOND-LINE therapy for ER+ breast cancer after tamoxifen failure or first-line in postmenopausal women. Block aromatase enzyme → prevent conversion of androgens to estrogen → decrease local estrogen production. NON-STEROIDAL: Anastrozole (Arimidex), Letrozole (Femara). STEROIDAL: Exemestane (Aromasin). Only work in POSTMENOPAUSAL women (premenopausal women have ovarian estrogen production). NO bone-protective effects (unlike SERMs).',
    learningObjective: 'Select appropriate breast cancer therapy',
    difficulty: 'hard',
    slideReference: 'Gonadal Hormones - Aromatase Inhibitors'
  },
  {
    id: '29',
    question: 'Compare monophasic vs extended regimen (Seasonique) oral contraceptives. What is the main advantage of extended regimen?',
    options: [
      'Extended regimen is more effective at preventing pregnancy than traditional cycles',
      'Extended regimen provides period once every 3 months with decreased bleeding; reduces menstruation frequency',
      'Extended regimen has fewer side effects than traditional 28-day cycles',
      'Extended regimen is less expensive than traditional monthly formulations'
    ],
    correct_answer: 'Extended regimen provides period once every 3 months with decreased bleeding; reduces menstruation frequency',
    explanation: 'EXTENDED REGIMEN: 84 days of active hormones + 7 days placebo or low-dose estrogen → period once every 3 MONTHS, shorter duration (3 days), less bleeding. Seasonique uses low-dose estrogen instead of placebo to limit bloating, hormonal fluctuations, and breakthrough bleeding. Main disadvantage: breakthrough bleeding/spotting especially in first few cycles. Efficacy is the same as traditional 21/7 regimens. Many women prefer fewer periods.',
    learningObjective: 'Understand extended regimen OCPs',
    difficulty: 'easy',
    slideReference: 'Gonadal Hormones - Extended Regimen'
  },
  {
    id: '30',
    question: 'A woman with diabetes, hypertension (well-controlled), and migraine headaches wants contraception. What is the safest hormonal option?',
    options: [
      'Combined oral contraceptive with low-dose estrogen formulation',
      'Contraceptive patch (higher estrogen exposure than pills)',
      'Progestin-only contraceptive (pill, IUD, implant, or injection)',
      'Vaginal ring for continuous low-dose hormone delivery'
    ],
    correct_answer: 'Progestin-only contraceptive (pill, IUD, implant, or injection)',
    explanation: 'This patient has RELATIVE contraindications for combined OCPs: diabetes (small risk of worsening vascular disease), migraine (increased stroke risk with aura). BEST OPTION: PROGESTIN-ONLY contraceptive which avoids estrogen-related CV and VTE risks. Options: 1) PO norethindrone (mini-pill), 2) Etonogestrel implant (Nexplanon) - 5 years, 3) Medroxyprogesterone injection (Depo-Provera) - q3 months, 4) Levonorgestrel IUD (Mirena, Kyleena) - 3-5 years. IUD is most effective long-acting option.',
    learningObjective: 'Select contraception for patients with comorbidities',
    difficulty: 'hard',
    slideReference: 'Gonadal Hormones - Progestin-Only Contraceptives'
  }
];
