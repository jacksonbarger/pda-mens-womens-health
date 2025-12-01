// Professor Breeze - Pharmacology Flashcards
// Topics: GU/ED, Bone/Osteoporosis, Gonadal Hormones

import type { FlashCard } from './professorTypes';

export const breezeFlashcards: FlashCard[] = [
  // GU/ED Pharmacology (Cards 1-18)
  {
    id: '1',
    question: 'What is the physiological mechanism of penile erection?',
    answer: 'Parasympathetic stimulation → release of NO from endothelial cells → activates guanylate cyclase → increases cGMP → smooth muscle relaxation → vasodilation and blood flow to corpus cavernosum → erection',
    learningObjective: 'Understand erectile physiology',
    emphasis: 'high',
    slideReference: 'GU/ED Pharmacology - Erectile Physiology'
  },
  {
    id: '2',
    question: 'What is the mechanism of detumescence (loss of erection)?',
    answer: 'Sympathetic stimulation → release of norepinephrine → activates phosphodiesterase 5 (PDE5) → degrades cGMP → smooth muscle contraction → decreased blood flow → detumescence',
    learningObjective: 'Understand erectile physiology',
    emphasis: 'high',
    slideReference: 'GU/ED Pharmacology - Erectile Physiology'
  },
  {
    id: '3',
    question: 'What is the MOA of PDE5 inhibitors?',
    answer: 'Inhibit phosphodiesterase type 5 (PDE5) → prevent degradation of cGMP → maintain smooth muscle relaxation and vasodilation → prolong erection. REQUIRES sexual stimulation to work (need NO release).',
    learningObjective: 'Understand PDE5 inhibitor mechanism',
    emphasis: 'high',
    slideReference: 'GU/ED Pharmacology - PDE5 Inhibitors'
  },
  {
    id: '4',
    question: 'Compare onset and duration of Sildenafil (Viagra) vs Tadalafil (Cialis).',
    answer: 'SILDENAFIL: Onset 30-60min, Duration 4-6 hours, take 1hr before sex. TADALAFIL: Onset 30min, Duration 24-36 hours (longest), can take daily or PRN.',
    learningObjective: 'Compare PDE5 inhibitors',
    emphasis: 'high',
    slideReference: 'GU/ED Pharmacology - PDE5 Inhibitors'
  },
  {
    id: '5',
    question: 'What are the major side effects and contraindications of PDE5 inhibitors?',
    answer: 'SE: headache, flushing, dyspepsia, nasal congestion, visual disturbances (blue tinge), priapism. CI: NITRATES (can cause severe hypotension), recent MI/stroke, severe heart disease, alpha-blockers (caution).',
    learningObjective: 'Know PDE5 inhibitor safety',
    emphasis: 'high',
    slideReference: 'GU/ED Pharmacology - PDE5 Inhibitors'
  },
  {
    id: '6',
    question: 'What is Alprostadil and how is it used for ED?',
    answer: 'Alprostadil = synthetic PGE1. DIRECTLY causes vasodilation (doesn\'t require sexual stimulation). Available as: 1) Intracavernous injection (Caverject) - inject into penis, or 2) Intraurethral pellet (MUSE) - insert into urethra.',
    learningObjective: 'Understand alternative ED treatments',
    emphasis: 'medium',
    slideReference: 'GU/ED Pharmacology - Alprostadil'
  },
  {
    id: '7',
    question: 'What is BPH and what causes it?',
    answer: 'Benign Prostatic Hyperplasia = non-cancerous enlargement of prostate. Caused by: age-related hormonal changes, DHT (dihydrotestosterone) stimulates prostate growth. Symptoms: urinary frequency, urgency, weak stream, nocturia, retention.',
    learningObjective: 'Understand BPH pathophysiology',
    emphasis: 'medium',
    slideReference: 'GU/ED Pharmacology - BPH'
  },
  {
    id: '8',
    question: 'What is the MOA of alpha-1 antagonists for BPH? Name 3 examples.',
    answer: 'MOA: Block alpha-1 receptors in prostate and bladder neck → smooth muscle relaxation → improved urine flow. Examples: Tamsulosin (Flomax), Alfuzosin (Uroxatral), Silodosin (Rapaflo). Tamsulosin is most selective (fewer CV side effects).',
    learningObjective: 'Know BPH pharmacotherapy',
    emphasis: 'high',
    slideReference: 'GU/ED Pharmacology - Alpha Blockers'
  },
  {
    id: '9',
    question: 'What is the MOA of 5-alpha-reductase inhibitors? Name the 2 drugs.',
    answer: 'MOA: Block conversion of testosterone to DHT (dihydrotestosterone) → reduce prostate size over time. Drugs: FINASTERIDE (blocks type 2 only), DUTASTERIDE (blocks both type 1 and 2 - more complete blockade). Takes 6+ months for full effect.',
    learningObjective: 'Know BPH pharmacotherapy',
    emphasis: 'high',
    slideReference: 'GU/ED Pharmacology - 5-Alpha Reductase Inhibitors'
  },
  {
    id: '10',
    question: 'What are the side effects of 5-alpha-reductase inhibitors?',
    answer: 'Sexual dysfunction (decreased libido, ED, ejaculatory disorders), gynecomastia, decreased PSA levels (need to double PSA value for screening). WARNING: Can cause birth defects - women who are/may become pregnant should NOT handle crushed tablets.',
    learningObjective: 'Know 5ARI safety concerns',
    emphasis: 'high',
    slideReference: 'GU/ED Pharmacology - 5-Alpha Reductase Inhibitors'
  },
  {
    id: '11',
    question: 'What is overactive bladder (OAB) and what causes it?',
    answer: 'OAB = sudden urge to urinate that\'s difficult to control, urinary frequency, urgency, nocturia, sometimes incontinence. Caused by: detrusor muscle overactivity, often neurogenic or idiopathic.',
    learningObjective: 'Understand OAB',
    emphasis: 'medium',
    slideReference: 'GU/ED Pharmacology - Overactive Bladder'
  },
  {
    id: '12',
    question: 'What is the MOA of antimuscarinic drugs for OAB? Name 3 examples.',
    answer: 'MOA: Block M3 muscarinic receptors in bladder → reduce detrusor muscle contractions → decrease urgency and frequency. Examples: Oxybutynin, Tolterodine (Detrol), Solifenacin (Vesicare), Darifenacin (Enablex). SE: dry mouth, constipation, blurred vision, cognitive impairment (elderly).',
    learningObjective: 'Know OAB pharmacotherapy',
    emphasis: 'high',
    slideReference: 'GU/ED Pharmacology - Antimuscarinics'
  },
  {
    id: '13',
    question: 'What is the MOA of beta-3 agonists for OAB? Name the 2 drugs.',
    answer: 'MOA: Activate beta-3 adrenergic receptors in bladder → increase bladder capacity and relaxation during filling. Drugs: MIRABEGRON (Myrbetriq), VIBEGRON (Gemtesa). Advantage: NO anticholinergic side effects. Can increase BP.',
    learningObjective: 'Know OAB pharmacotherapy alternatives',
    emphasis: 'high',
    slideReference: 'GU/ED Pharmacology - Beta-3 Agonists'
  },
  {
    id: '14',
    question: 'What are the main differences between Vardenafil (Levitra) and Avanafil (Stendra)?',
    answer: 'VARDENAFIL: Similar to sildenafil, onset 30-60min, duration 4-5 hours. AVANAFIL: FASTEST onset (15-30min), duration 6 hours, fewer side effects, newest PDE5 inhibitor.',
    learningObjective: 'Distinguish PDE5 inhibitors',
    emphasis: 'medium',
    slideReference: 'GU/ED Pharmacology - PDE5 Inhibitors'
  },
  {
    id: '15',
    question: 'Compare Prazosin, Terazosin, and Doxazosin to Tamsulosin for BPH.',
    answer: 'Prazosin/Terazosin/Doxazosin: Non-selective alpha-1 blockers, used for HTN and BPH, MORE orthostatic hypotension, require dose titration. TAMSULOSIN: Selective for alpha-1A (prostate), LESS CV effects, preferred for BPH, no dose titration needed.',
    learningObjective: 'Compare alpha blockers',
    emphasis: 'high',
    slideReference: 'GU/ED Pharmacology - Alpha Blockers'
  },
  {
    id: '16',
    question: 'Why can alpha-1 antagonists and PDE5 inhibitors be dangerous together?',
    answer: 'Both cause vasodilation → additive hypotensive effects → severe orthostatic hypotension, dizziness, syncope. If used together, must be cautious with dosing and timing. Tamsulosin (most selective) has lowest risk.',
    learningObjective: 'Understand drug interactions in GU therapy',
    emphasis: 'high',
    slideReference: 'GU/ED Pharmacology - Drug Interactions'
  },
  {
    id: '17',
    question: 'What are the advantages and disadvantages of intraurethral vs intracavernous Alprostadil?',
    answer: 'INTRAURETHRAL (MUSE): Less invasive, easier to use, BUT less effective, urethral pain, dizziness. INTRACAVERNOUS (Caverject): More effective, rapid onset, BUT requires injection training, pain at site, risk of priapism.',
    learningObjective: 'Compare Alprostadil formulations',
    emphasis: 'medium',
    slideReference: 'GU/ED Pharmacology - Alprostadil'
  },
  {
    id: '18',
    question: 'When are combination therapies used for BPH?',
    answer: 'Combine alpha-1 blocker (immediate symptom relief) + 5-alpha-reductase inhibitor (long-term prostate shrinkage) for moderate-severe BPH with large prostates. Example: Tamsulosin + Finasteride or Dutasteride. Alpha blocker works while 5ARI takes months to show effect.',
    learningObjective: 'Understand BPH combination therapy',
    emphasis: 'medium',
    slideReference: 'GU/ED Pharmacology - BPH Treatment'
  },

  // Bone/Osteoporosis Pharmacology (Cards 19-38)
  {
    id: '19',
    question: 'What are the roles of PTH, Vitamin D, and Calcitonin in calcium homeostasis?',
    answer: 'PTH (low Ca stimulus): increases bone resorption, increases renal Ca reabsorption, activates Vitamin D. VITAMIN D: increases intestinal Ca absorption, increases renal Ca reabsorption. CALCITONIN (high Ca stimulus): decreases bone resorption.',
    learningObjective: 'Understand calcium homeostasis',
    emphasis: 'high',
    slideReference: 'Bone Pharmacology - Calcium Homeostasis'
  },
  {
    id: '20',
    question: 'Explain the synthesis pathway of active Vitamin D.',
    answer: '7-dehydrocholesterol (skin) --UV light--> Vitamin D3 (cholecalciferol) --liver--> 25-OH Vitamin D --kidney (PTH stimulus)--> 1,25-(OH)2 Vitamin D (calcitriol = ACTIVE form)',
    learningObjective: 'Know Vitamin D synthesis',
    emphasis: 'high',
    slideReference: 'Bone Pharmacology - Vitamin D'
  },
  {
    id: '21',
    question: 'What are the 3 major cell types in bone and their functions?',
    answer: 'OSTEOBLASTS: bone-forming cells, synthesize collagen matrix, differentiate from mesenchymal stem cells. OSTEOCYTES: mature osteoblasts embedded in bone, maintain daily activities. OSTEOCLASTS: large multinucleated cells, resorb bone, stimulated by RANKL.',
    learningObjective: 'Understand bone cell biology',
    emphasis: 'medium',
    slideReference: 'Bone Pharmacology - Bone Structure'
  },
  {
    id: '22',
    question: 'What is the RANK/RANKL pathway and why is it important?',
    answer: 'PTH and other signals → osteoblasts express RANKL → RANKL binds RANK receptor on osteoclast precursors → osteoclast differentiation and activation → bone resorption. This pathway is the KEY TARGET for osteoporosis drugs (denosumab blocks RANKL).',
    learningObjective: 'Understand bone remodeling',
    emphasis: 'high',
    slideReference: 'Bone Pharmacology - RANK/RANKL'
  },
  {
    id: '23',
    question: 'What causes postmenopausal osteoporosis?',
    answer: 'Estrogen deficiency → increased bone resorption → increased osteoclast proliferation, differentiation, activation → prolonged osteoclast survival → net bone loss. TRABECULAR bone most affected → high risk of vertebral compression fractures and wrist fractures.',
    learningObjective: 'Understand osteoporosis pathophysiology',
    emphasis: 'high',
    slideReference: 'Bone Pharmacology - Osteoporosis'
  },
  {
    id: '24',
    question: 'What is the MOA of bisphosphonates? Name the 4 main drugs.',
    answer: 'MOA: Bind hydroxyapatite in bone → inhibit osteoclast activity and proliferation → reduce bone resorption → net effect: well-mineralized bone without osteoclast opposition. Drugs: Alendronate (Fosamax), Risedronate (Actonel), Ibandronate (Boniva), Zoledronic acid (Reclast).',
    learningObjective: 'Know bisphosphonates',
    emphasis: 'high',
    slideReference: 'Bone Pharmacology - Bisphosphonates'
  },
  {
    id: '25',
    question: 'What are the administration requirements for oral bisphosphonates?',
    answer: 'Take FIRST THING in morning with 6-8oz water, 30-60 minutes BEFORE anything else (food/meds). Remain UPRIGHT (sitting/standing) for 30-60min after. Take on EMPTY stomach (food impairs absorption). Cannot crush/chew tablets.',
    learningObjective: 'Know bisphosphonate administration',
    emphasis: 'high',
    slideReference: 'Bone Pharmacology - Bisphosphonates'
  },
  {
    id: '26',
    question: 'What are the major side effects and contraindications of bisphosphonates?',
    answer: 'SE: Esophageal irritation/erosions/cancer, esophagitis, musculoskeletal pain, flu-like symptoms, atypical femur fractures, BRONJ (bisphosphonate-related osteonecrosis of jaw). CI: Hypocalcemia (correct first!), CrCl <30-35, inability to sit/stand 30min, esophageal disorders.',
    learningObjective: 'Know bisphosphonate safety',
    emphasis: 'high',
    slideReference: 'Bone Pharmacology - Bisphosphonates'
  },
  {
    id: '27',
    question: 'Compare Alendronate, Risedronate, and Ibandronate administration.',
    answer: 'ALENDRONATE (Fosamax): Daily or weekly PO, sit/stand 30min. RISEDRONATE (Actonel): Daily or weekly PO, sit/stand 30min. IBANDRONATE (Boniva): Monthly PO or IV q3 months, sit/stand 1 HOUR (longest). All taken on empty stomach.',
    learningObjective: 'Compare bisphosphonates',
    emphasis: 'medium',
    slideReference: 'Bone Pharmacology - Bisphosphonates'
  },
  {
    id: '28',
    question: 'What makes Zoledronic acid (Zometa/Reclast) unique among bisphosphonates?',
    answer: 'Most potent bisphosphonate. Available as IV only. RECLAST: annual infusion for osteoporosis treatment, biannual for prevention. ZOMETA: monthly infusion for bone metastases/cancer. No GI side effects (IV route). Still risk of BRONJ and atypical fractures.',
    learningObjective: 'Know IV bisphosphonates',
    emphasis: 'high',
    slideReference: 'Bone Pharmacology - Zoledronic Acid'
  },
  {
    id: '29',
    question: 'What is BRONJ and which patients are at highest risk?',
    answer: 'Bisphosphonate-Related Osteonecrosis of Jaw = exposed, devitalized bone in maxillofacial region. Risk factors: nitrogen-containing bisphosphonates (higher potency/toxicity), IV bisphosphonates, dental surgery/trauma, cancer patients, long-term use. Presents with pain, exposed bone.',
    learningObjective: 'Understand BRONJ',
    emphasis: 'high',
    slideReference: 'Bone Pharmacology - BRONJ'
  },
  {
    id: '30',
    question: 'What is the FDA recommendation for bisphosphonate duration and drug holidays?',
    answer: 'After 3-5 years of bisphosphonate therapy, perform risk assessment. Consider drug holiday for low-risk patients. High-risk patients (prior fractures, very low BMD) may continue therapy. Drug holiday due to concerns about atypical femur fractures with long-term use.',
    learningObjective: 'Know bisphosphonate duration guidelines',
    emphasis: 'medium',
    slideReference: 'Bone Pharmacology - Bisphosphonates'
  },
  {
    id: '31',
    question: 'What is Raloxifene (Evista) and how does it work?',
    answer: 'SERM (Selective Estrogen Receptor Modulator). Estrogen AGONIST in bone (reduces resorption) and Estrogen ANTAGONIST in breast/uterus (reduces cancer risk). Used for osteoporosis prevention in postmenopausal women. Reduces vertebral fractures only, little effect on hip.',
    learningObjective: 'Understand SERMs',
    emphasis: 'high',
    slideReference: 'Bone Pharmacology - SERMs'
  },
  {
    id: '32',
    question: 'What are the risks and contraindications of Raloxifene?',
    answer: 'RISKS: Increased thromboembolic events (DVT, PE, stroke - similar to estrogen), hot flashes, leg cramps. CI: History of VTE, active VTE, pregnancy. WARNING: Increased stroke risk in women with coronary heart disease.',
    learningObjective: 'Know SERM safety',
    emphasis: 'high',
    slideReference: 'Bone Pharmacology - Raloxifene'
  },
  {
    id: '33',
    question: 'What is Denosumab (Prolia) and what makes it unique?',
    answer: 'Human monoclonal antibody against RANKL. Blocks RANKL → prevents osteoclast differentiation and function → reduces bone resorption. Given SC q6 months. UNIQUE: Only antibody for osteoporosis. WARNING: Rapid bone loss if stopped - must transition to another agent.',
    learningObjective: 'Know Denosumab',
    emphasis: 'high',
    slideReference: 'Bone Pharmacology - Denosumab'
  },
  {
    id: '34',
    question: 'What is Romosozumab (Evenity) and what is its unique MOA?',
    answer: 'Monoclonal antibody against sclerostin. Inhibits sclerostin → INCREASES bone formation (stimulates osteoblasts) AND DECREASES bone resorption. DUAL effect unique among osteoporosis drugs. Given as 2 SC injections monthly x 12 months. Effect wanes after 12 doses.',
    learningObjective: 'Know Romosozumab',
    emphasis: 'high',
    slideReference: 'Bone Pharmacology - Romosozumab'
  },
  {
    id: '35',
    question: 'What are the Black Box Warnings for Romosozumab?',
    answer: 'BBW: May increase risk of MI, stroke, and CV death. DO NOT initiate in patients with MI/stroke within preceding year. Consider benefits vs risks in patients with CV risk factors. Discontinue if patient experiences MI or stroke. Must correct hypocalcemia before starting.',
    learningObjective: 'Know Romosozumab safety',
    emphasis: 'high',
    slideReference: 'Bone Pharmacology - Romosozumab'
  },
  {
    id: '36',
    question: 'What is Teriparatide (Forteo) and how is it different from other osteoporosis drugs?',
    answer: 'Recombinant PTH (1-34). ONLY bone FORMATION therapy (stimulates osteoblasts). Daily SC injection. Reserved for HIGH RISK patients (very low BMD, previous fractures). BBW: Osteosarcoma risk (based on rat studies). Can cause orthostatic hypotension. Max 2 years lifetime use.',
    learningObjective: 'Know anabolic agents',
    emphasis: 'high',
    slideReference: 'Bone Pharmacology - Teriparatide'
  },
  {
    id: '37',
    question: 'Compare Calcium Carbonate vs Calcium Citrate supplementation.',
    answer: 'CALCIUM CARBONATE (Tums): Requires acidic environment, take WITH food, less expensive, MORE constipation. CALCIUM CITRATE: Does NOT require acid, can take WITHOUT food, better absorption, better for elderly/PPI users, more expensive.',
    learningObjective: 'Know calcium supplementation',
    emphasis: 'medium',
    slideReference: 'Bone Pharmacology - Calcium'
  },
  {
    id: '38',
    question: 'What are important drug interactions with Calcium and Vitamin D?',
    answer: 'CALCIUM DDI: PPIs (decrease absorption), fiber laxatives, iron, tetracyclines, quinolones, bisphosphonates, thyroid supplements - separate dosing. VITAMIN D: Phenytoin, barbiturates, carbamazepine increase metabolism. Cholestyramine, colestipol, orlistat decrease absorption. Avoid with aluminum products.',
    learningObjective: 'Know calcium/vitamin D interactions',
    emphasis: 'medium',
    slideReference: 'Bone Pharmacology - Calcium/Vitamin D'
  },

  // Gonadal Hormones (Cards 39-60)
  {
    id: '39',
    question: 'Describe the hypothalamic-pituitary-gonadal (HPG) axis.',
    answer: 'Hypothalamus releases GnRH → Anterior pituitary releases FSH and LH → Ovaries (estrogen, progesterone) and Testes (testosterone) → Reproduction. Negative feedback: sex hormones inhibit GnRH, FSH, and LH release.',
    learningObjective: 'Understand HPG axis',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones - Endocrine Physiology'
  },
  {
    id: '40',
    question: 'Explain the 3 phases of the menstrual cycle.',
    answer: 'FOLLICULAR: FSH/LH increase → follicular growth. OVULATION: LH surge → follicle release → corpus luteum forms → secretes estrogen/progesterone. LUTEAL: Progesterone prepares endometrium for implantation. If no fertilization → progesterone drops → menstruation.',
    learningObjective: 'Understand menstrual cycle',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones - Menstrual Cycle'
  },
  {
    id: '41',
    question: 'What are GnRH antagonists and what are they used for?',
    answer: 'Competitively block GnRH receptors → suppress LH/FSH → abolish sex hormone production → castrate-level hormones. Drugs: Cetrorelix, Degarelix, Ganirelix (peptides), Elagolix (small molecule). Uses: Prostate cancer, endometriosis, fibroids, infertility. SE: Hot flashes, amenorrhea, vaginal dryness.',
    learningObjective: 'Know GnRH antagonists',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones - GnRH Antagonists'
  },
  {
    id: '42',
    question: 'What are the clinical uses of estrogen therapy?',
    answer: '1) Combined oral contraception (with progestin), 2) Primary hypogonadism (stimulate secondary sex characteristics), 3) Primary amenorrhea (cyclic with progestin for artificial cycle), 4) Hormone replacement therapy (HRT) for menopausal symptoms and bone loss.',
    learningObjective: 'Know estrogen uses',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones - Estrogen'
  },
  {
    id: '43',
    question: 'What are the contraindications for estrogen therapy?',
    answer: 'ABSOLUTE CI: Pregnancy, undiagnosed genital bleeding, stroke, thrombophlebitis/thromboembolic disease, heart disease, family history of breast/uterine cancer (BRCA gene), incomplete bone growth. RELATIVE: Smoking >35yo, HTN, diabetes.',
    learningObjective: 'Know estrogen contraindications',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones - Estrogen'
  },
  {
    id: '44',
    question: 'Compare Tamoxifen, Raloxifene, Toremifene, and Ospemifene (SERMs).',
    answer: 'TAMOXIFEN: ER+ breast cancer treatment/prevention, increases endometrial cancer risk. RALOXIFENE: Osteoporosis, NO endometrial effects. TOREMIFENE: Metastatic breast cancer, better for BMD/lipids than tamoxifen. OSPEMIFENE: Vaginal dryness/dyspareunia in postmenopausal women.',
    learningObjective: 'Compare SERMs',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones - SERMs'
  },
  {
    id: '45',
    question: 'What are Aromatase Inhibitors and when are they used?',
    answer: 'Block aromatase enzyme → prevent conversion of androgens to estrogen → decrease local estrogen production. STEROIDAL: Exemestane (Aromasin). NON-STEROIDAL: Anastrozole (Arimidex), Letrozole (Femara). 2nd line for breast cancer after tamoxifen fails or in postmenopausal women. NO bone protection.',
    learningObjective: 'Know aromatase inhibitors',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones - Aromatase Inhibitors'
  },
  {
    id: '46',
    question: 'What is Clomiphene (Clomid) and how does it work?',
    answer: 'Partial estrogen agonist that INHIBITS estrogen binding in anterior pituitary → prevents negative feedback → increased GnRH and gonadotropin secretion → ovarian stimulation and enlargement → increased estrogen → induces ovulation. Used for infertility. Twins are common.',
    learningObjective: 'Understand ovulation induction',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones - Anti-estrogens'
  },
  {
    id: '47',
    question: 'What is progesterone and what is its primary effect?',
    answer: 'Steroid hormone produced by corpus luteum (stimulated by LH). PRIMARY EFFECT: Prepares uterus for implantation by causing proliferation of endometrium. Natural progesterone destroyed by digestive enzymes when taken orally → ALL oral contraceptives contain PROGESTINS (synthetic).',
    learningObjective: 'Understand progesterone',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones - Progesterone'
  },
  {
    id: '48',
    question: 'Name 3 types of therapeutic progestins and their characteristics.',
    answer: '1) 17-alpha-hydroxyprogesterone derivatives: Medroxyprogesterone (slow hepatic metabolism). 2) 19-nor testosterone derivatives: Norethindrone (moderate estrogenic/androgenic activity). 3) 13-ethyl substitutions: Norgestrel/Levonorgestrel (more potent, androgenic).',
    learningObjective: 'Know progestin types',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones - Progestins'
  },
  {
    id: '49',
    question: 'What are the three mechanisms by which combined oral contraceptives work?',
    answer: '1) PREVENT OVULATION: Inhibit LH/FSH release → decrease GnRH pulse frequency → no mid-cycle LH surge → no follicular development. 2) THIN ENDOMETRIUM: Progestins thin lining. 3) THICKEN CERVICAL MUCUS: Progestins increase viscosity → inhibit sperm penetration.',
    learningObjective: 'Understand OCP mechanism',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones - Contraception'
  },
  {
    id: '50',
    question: 'Compare Ethinyl Estradiol vs Mestranol in oral contraceptives.',
    answer: 'MESTRANOL: Inactive prodrug, must be metabolized to ethinyl estradiol, slower peak (1hr). ETHINYL ESTRADIOL: Active form, 2X MORE POTENT than mestranol, faster absorption. Both rapidly absorbed in GI. Most modern OCPs use ethinyl estradiol.',
    learningObjective: 'Know OCP estrogen types',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones - OCP Estrogens'
  },
  {
    id: '51',
    question: 'Compare Norgestrel/Levonorgestrel vs Norgestimate/Desogestrel progestins.',
    answer: 'NORGESTREL/LEVONORGESTREL: Higher androgenic activity, used in 2nd gen OCPs. NORGESTIMATE/DESOGESTREL: Lower androgenic activity, used in 3rd gen OCPs, fewer androgenic side effects (acne, hirsutism), may have higher VTE risk.',
    learningObjective: 'Compare progestin generations',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones - Progestins'
  },
  {
    id: '52',
    question: 'What are monophasic, biphasic, triphasic, and quadriphasic oral contraceptives?',
    answer: 'MONOPHASIC: Fixed doses of estrogen + progestin for 21 days, 7 days hormone-free. BIPHASIC: Varying progestin, limit early cycle exposure. TRIPHASIC: 3 different progestin concentrations, mimic hormonal changes. QUADRIPHASIC: 4 different concentrations. Most common is monophasic.',
    learningObjective: 'Know OCP formulations',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones - OCP Formulations'
  },
  {
    id: '53',
    question: 'What is extended regimen contraception and what are its benefits?',
    answer: 'Levonorgestrel/ethinyl estradiol for 84 days + 7 days placebo or low-dose estrogen (Seasonique uses low-dose estrogen). Benefits: Period once every 3 months, shorter periods (3 days), decreased bleeding. SE: Breakthrough bleeding and spotting (especially first cycles).',
    learningObjective: 'Know extended regimen OCPs',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones - Extended Regimen'
  },
  {
    id: '54',
    question: 'What are the absolute contraindications for combined oral contraceptives?',
    answer: 'History of thromboembolism/MI/stroke/vascular disease, impaired liver function (active hepatitis, cirrhosis, hepatoma), known/suspected breast cancer, undiagnosed abnormal vaginal bleeding, known/suspected pregnancy, breastfeeding <6 weeks postpartum, SMOKERS over age 35.',
    learningObjective: 'Know OCP contraindications',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones - OCP Contraindications'
  },
  {
    id: '55',
    question: 'What are the major health risks of combined oral contraceptives?',
    answer: 'Breast cancer risk (small increase), cervical neoplasia (2x risk after 5+ years), VTE (further increased with smoking, age >35, underlying conditions), stroke, MI (especially smokers >35), increased triglycerides, mood changes, weight gain.',
    learningObjective: 'Know OCP risks',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones - OCP Risks'
  },
  {
    id: '56',
    question: 'What are progestin-only contraceptive options and who should use them?',
    answer: 'OPTIONS: 1) PO norethindrone (mini-pill), 2) Subdermal implant: Etonogestrel (Nexplanon) - 5 years, 3) IM injection: Medroxyprogesterone (Depo-Provera) - q3 months, 4) IUD: Levonorgestrel (Mirena, Kyleena, Liletta, Skyla). CANDIDATES: CV risk factors, diabetes, lipid disorders, estrogen CI, migraine, smokers, postpartum/breastfeeding.',
    learningObjective: 'Know progestin-only contraceptives',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones - Progestin-Only'
  },
  {
    id: '57',
    question: 'What is emergency contraception and how does it work?',
    answer: 'Reduces pregnancy chance by ~75% if taken within 72H of unprotected intercourse. Mechanisms: 1) Inhibit/delay ovulation, 2) Alter sperm/ovum transport, 3) Alter endometrium making it inhospitable to implantation. PLAN B: Levonorgestrel 1.5mg single dose within 72H (sooner better).',
    learningObjective: 'Understand emergency contraception',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones - Emergency Contraception'
  },
  {
    id: '58',
    question: 'What is Ulipristal (Ella) and how is it different from Plan B?',
    answer: 'Selective progesterone receptor modulator. ONLY emergency contraceptive that DELAYS OVULATION. More effective than Plan B - lowers pregnancy risk by 85%. Can be taken within 5 DAYS (vs 72H for Plan B). Take 1 tablet PO ASAP after unprotected sex.',
    learningObjective: 'Compare emergency contraceptives',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones - Ulipristal'
  },
  {
    id: '59',
    question: 'What is Hormone Replacement Therapy (HRT) and what are its benefits and risks?',
    answer: 'HRT = cyclic/continuous estrogen ± progestin for postmenopausal women. BENEFITS: Reduces vasomotor symptoms, prevents osteoporosis, reduces urogenital atrophy. RISKS: VTE, cyclical bleeding, breast/uterine cancer risk. MUST use progestin in women with intact uterus to prevent endometrial hyperplasia.',
    learningObjective: 'Understand HRT',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones - HRT'
  },
  {
    id: '60',
    question: 'What is Mifepristone (Mifeprex) and how does it work?',
    answer: 'Competitive progesterone antagonist. Prevents implantation → terminates pregnancy in >85% of cases during first 7 weeks after conception. Available under REMS program. Also available as Korlym - blocks cortisol receptors for hyperglycemia in Cushing\'s syndrome.',
    learningObjective: 'Know progesterone antagonists',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones - Mifepristone'
  }
];
