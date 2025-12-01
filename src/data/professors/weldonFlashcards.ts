// Professor Weldon - Medicinal Chemistry Flashcards
// Topics: BPH/ED/UI, Osteoporosis, Gonadal Hormones

import type { FlashCard } from './professorTypes';

export const weldonFlashcards: FlashCard[] = [
  // BPH/ED/UI Med Chem (Cards 1-12)
  {
    id: '1',
    question: 'What is the chemical class of alpha-1 antagonists used for BPH? Name the suffix.',
    answer: 'Quinazolines with the suffix "-azosin". Examples: Prazosin, Terazosin, Doxazosin, Tamsulosin (Flomax), Alfuzosin, Silodosin (Rapaflo). They cause smooth muscle relaxation of prostate and urethra.',
    learningObjective: 'Recognize alpha-1 antagonist chemical class',
    emphasis: 'high',
    slideReference: 'BPH Med Chem - Alpha Antagonists'
  },
  {
    id: '2',
    question: 'What are the two isoforms of 5-alpha-reductase and where are they found? Which is the target for BPH?',
    answer: 'TYPE 1: Found in skin and liver. TYPE 2: Found in reproductive tissue (TARGET for BPH). DHT is the potent androgen that causes prostate enlargement. Blocking type 2 reduces DHT in prostate.',
    learningObjective: '5-alpha-reductase isoform distribution',
    emphasis: 'high',
    slideReference: 'BPH Med Chem - 5-Alpha-Reductase'
  },
  {
    id: '3',
    question: 'Compare finasteride vs dutasteride selectivity and potency for 5-alpha-reductase.',
    answer: 'FINASTERIDE (Proscar): 30x MORE SELECTIVE for type 2. DUTASTERIDE (Avodart): 10x MORE POTENT inhibitor of type 2, also inhibits type 1. Both are steroidal in nature. Dutasteride provides more complete DHT blockade.',
    learningObjective: 'Differentiate 5-alpha-reductase inhibitors',
    emphasis: 'high',
    slideReference: 'BPH Med Chem - 5-Alpha-Reductase Inhibitors'
  },
  {
    id: '4',
    question: 'What is the chemical class of PDE5 inhibitors and what structural feature improves water solubility?',
    answer: 'Chemical class: PYRAZOLOPYRIMIDINONE. Structural feature: Added SULFONAMIDE group to reduce lipophilicity and increase water solubility. Structures based on GUANINE to mimic GMP. First drug: Sildenafil citrate (Viagra).',
    learningObjective: 'Understand PDE5 inhibitor drug design',
    emphasis: 'high',
    slideReference: 'ED Med Chem - PDE5 Inhibitors'
  },
  {
    id: '5',
    question: 'Why does sildenafil cause blue vision/color shift side effects?',
    answer: 'Sildenafil is only >10-fold selective for PDE5 vs PDE6. PDE6 is found in the RETINA. Inhibition of PDE6 causes color vision changes - blue/green color shift, making blue and green indistinguishable. Some cases of vision loss reported.',
    learningObjective: 'Explain PDE5 inhibitor selectivity issues',
    emphasis: 'high',
    slideReference: 'ED Med Chem - Sildenafil Side Effects'
  },
  {
    id: '6',
    question: 'Define selectivity vs potency in drug action.',
    answer: 'POTENCY: Different drugs of the same class at a SINGLE target. Lower IC50 = more potent drug. SELECTIVITY: ONE drug at MULTIPLE targets. Measures how specific a drug is for its intended target vs off-targets.',
    learningObjective: 'Distinguish selectivity and potency',
    emphasis: 'medium',
    slideReference: 'ED Med Chem - Pharmacology Concepts'
  },
  {
    id: '7',
    question: 'What is alprostadil (PGE1) and what formulations are available?',
    answer: 'Alprostadil = naturally-occurring Prostaglandin E1 with vasodilator action. Formulations: CAVERJECT (intracavernous injection into corpus cavernosum), MUSE (urethral suppository), Vitaros (topical cream in Europe). Direct vasodilation, no sexual stimulation needed.',
    learningObjective: 'Know PGE1 formulations',
    emphasis: 'medium',
    slideReference: 'ED Med Chem - Alprostadil'
  },
  {
    id: '8',
    question: 'What is the structural similarity between anticholinergic drugs for OAB?',
    answer: 'All anticholinergics for OAB structurally LOOK LIKE ACETYLCHOLINE. Examples: Darifenacin (M3 selective), Solifenacin (M3), Oxybutynin (M1-M3 non-selective), Tolterodine (M2-M3). They competitively block muscarinic receptors.',
    learningObjective: 'Recognize anticholinergic structure',
    emphasis: 'medium',
    slideReference: 'UI Med Chem - Anticholinergics'
  },
  {
    id: '9',
    question: 'What is the structural similarity between beta-3 agonists and what do they look like?',
    answer: 'Beta-3 agonist example: Mirabegron (Myrbetriq). Structurally LOOKS LIKE EPINEPHRINE. Activates beta-3 adrenergic receptors in bladder to increase capacity and promote relaxation during filling. Alternative to antimuscarinics for OAB.',
    learningObjective: 'Recognize beta-3 agonist structure',
    emphasis: 'medium',
    slideReference: 'UI Med Chem - Beta-3 Agonists'
  },
  {
    id: '10',
    question: 'Why is desmopressin acetate (DDAVP) preferred over vasopressin for ADH therapy?',
    answer: 'Vasopressin (ADH) is a PEPTIDE with SHORT half-life, must be given by INJECTION. Desmopressin acetate (DDAVP) is an ANALOGUE of vasopressin that can be given ORALLY with longer duration. Used for peripheral and renal effects in urinary incontinence.',
    learningObjective: 'Understand ADH analogue design',
    emphasis: 'low',
    slideReference: 'UI Med Chem - ADH'
  },
  {
    id: '11',
    question: 'What makes tamsulosin (Flomax) more selective for prostate tissue compared to other alpha blockers?',
    answer: 'Tamsulosin is SELECTIVE for alpha-1A receptors found predominantly in PROSTATE and bladder neck. Alpha-1B receptors are in VASCULATURE. This selectivity means less cardiovascular side effects (orthostatic hypotension) compared to non-selective agents (prazosin, terazosin, doxazosin).',
    learningObjective: 'Understand alpha blocker receptor selectivity',
    emphasis: 'high',
    slideReference: 'BPH Med Chem - Alpha Blocker Selectivity'
  },
  {
    id: '12',
    question: 'Why do both finasteride and dutasteride have limitations in treating BPH despite blocking DHT?',
    answer: 'Both inhibit mainly type 2 5-alpha-reductase. However, DHT synthesis can CONTINUE TO OCCUR via type 1 enzyme in skin/liver. This means potential for continued prostate enlargement exists. Dutasteride blocks both types more completely, but type 1 can still contribute.',
    learningObjective: 'Understand 5-ARI limitations',
    emphasis: 'medium',
    slideReference: 'BPH Med Chem - 5-Alpha-Reductase Limitations'
  },

  // Osteoporosis Med Chem (Cards 13-20)
  {
    id: '13',
    question: 'What are the 4 major bone cell types and their functions?',
    answer: 'OSTEOGENIC CELLS: Stem cells (periosteum, endosteum). OSTEOBLASTS: Produce new bone tissue. OSTEOCYTES: Maintain bone tissue. OSTEOCLASTS: Break down bone matrix (resorption).',
    learningObjective: 'Know bone cell types',
    emphasis: 'medium',
    slideReference: 'Osteoporosis Med Chem - Bone Cells'
  },
  {
    id: '14',
    question: 'What is the role of PTH, calcitonin, and sex hormones in calcium homeostasis?',
    answer: 'LOW Ca → PTH release → kidneys retain Ca, stimulates osteoclasts → blood Ca increases. HIGH Ca → calcitonin from thyroid → inhibits osteoclasts (opposing PTH). TESTOSTERONE and ESTROGEN → stimulate osteoblasts (bone formation).',
    learningObjective: 'Understand calcium regulation',
    emphasis: 'medium',
    slideReference: 'Osteoporosis Med Chem - Calcium Homeostasis'
  },
  {
    id: '15',
    question: 'What is the chemical structure that bisphosphonates mimic, and what key feature makes them stable?',
    answer: 'Bisphosphonates mimic INORGANIC PYROPHOSPHATE (IPP). Key feature: Substitution of CARBON for OXYGEN in P-O-P bond creates P-C-P. This makes them RESISTANT TO HYDROLYSIS, allows accumulation in bone matrix, and gives LONG half-life. Most are nitrogen-containing.',
    learningObjective: 'Understand bisphosphonate chemistry',
    emphasis: 'high',
    slideReference: 'Osteoporosis Med Chem - Bisphosphonates'
  },
  {
    id: '16',
    question: 'What is the relationship between nitrogen content and bisphosphonate potency/toxicity?',
    answer: 'Nitrogen-containing side chain at R2 position INCREASES both POTENCY and TOXICITY. This is directly linked to BRONJ (bisphosphonate-related osteonecrosis of jaw) cases. Higher potency nitrogen-containing BPPs have higher BRONJ risk.',
    learningObjective: 'Relate BPP structure to toxicity',
    emphasis: 'high',
    slideReference: 'Osteoporosis Med Chem - Bisphosphonate SAR'
  },
  {
    id: '17',
    question: 'Name the 5 bisphosphonates mentioned and identify which are available IV.',
    answer: 'Alendronate (Fosamax), Risedronate (Actonel), Ibandronate (Boniva)*, Zoledronate (Reclast/Zometa)*, Pamidronate (Aredia)**. *Available IV, **Not approved for osteoporosis. Zoledronate most potent.',
    learningObjective: 'Know bisphosphonate drugs',
    emphasis: 'medium',
    slideReference: 'Osteoporosis Med Chem - Bisphosphonate Drugs'
  },
  {
    id: '18',
    question: 'What are PTH analogues and how do they differ from antiresorptive agents?',
    answer: 'PTH analogues: Teriparatide (Forteo - direct PTH mimic, bioactive portion), Abaloparatide (Tymlos - analogue). NOT antiresorptive. Increase OSTEOCLASTIC ACTIVITY. Theory: Build more bone than you lose. These are ANABOLIC agents.',
    learningObjective: 'Understand PTH analogues',
    emphasis: 'high',
    slideReference: 'Osteoporosis Med Chem - PTH Analogues'
  },
  {
    id: '19',
    question: 'What is the MOA of denosumab and what makes it different from bisphosphonates?',
    answer: 'Denosumab (XGEVA): Monoclonal antibody designed to bind RANKL → prevents RANKL from binding RANK receptor on osteoclasts → prevents osteoclast differentiation. ANTIRESORPTIVE MOA. Different: Biological (antibody) vs chemical (bisphosphonates).',
    learningObjective: 'Know denosumab MOA',
    emphasis: 'high',
    slideReference: 'Osteoporosis Med Chem - Denosumab'
  },
  {
    id: '20',
    question: 'What makes romosozumab (Evenity) unique among osteoporosis drugs?',
    answer: 'Romosozumab-aqqg (Evenity): Anti-sclerostin monoclonal antibody with DUAL MOA - INCREASES bone formation (anabolic) AND DECREASES bone resorption (antiresorptive). No other osteoporosis drug has both effects. This is the key distinguishing feature.',
    learningObjective: 'Understand romosozumab uniqueness',
    emphasis: 'high',
    slideReference: 'Osteoporosis Med Chem - Romosozumab'
  },

  // Gonadal Hormones Med Chem (Cards 21-45)
  {
    id: '21',
    question: 'What are the three classes of sex hormones and their carbon numbers?',
    answer: 'ESTROGENS: C18 steroids with unsaturated (aromatic) A ring and 3-phenolic hydroxyl. PROGESTINS: C21 steroids with 3-keto-4,5-ene (ene-one) functionality. ANDROGENS: C19 steroids with oxygens (hydroxyl or ketone) at positions 3 and 17.',
    learningObjective: 'Classify sex hormone structures',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Sex Hormone Classes'
  },
  {
    id: '22',
    question: 'What are the 3 classic estrogens and which is most potent?',
    answer: 'ESTRONE, 17β-ESTRADIOL (MOST POTENT), ESTRIOL. All discovered from pregnant women\'s urine in 1920s. Estradiol has highest affinity for estrogen receptor and is the most potent endogenous estrogen.',
    learningObjective: 'Know classic estrogens',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Estrogens'
  },
  {
    id: '23',
    question: 'What is the key enzyme for converting androgens to estrogens, and where does it occur?',
    answer: 'AROMATASE (CYP19) is the critical enzyme that converts androgens to estrogens. Requires 3 molecules of O2 and NADPH. Converts androstenedione (preferred substrate) to estrone. Aromatase deficiency prevents female sexual maturation.',
    learningObjective: 'Understand aromatase in estrogen synthesis',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Aromatase'
  },
  {
    id: '24',
    question: 'How is estradiol metabolized and what enzymes are involved?',
    answer: 'Metabolized by HYDROXYLATION at ortho-positions to 3-phenolic hydroxyl by estrogen 2/4 hydroxylase → produces CATECHOL. Catechol estrogens are unstable and rapidly metabolized to O-methoxy metabolites by COMT → then conjugated before excretion. Primary metabolite: 2-hydroxyestradiol.',
    learningObjective: 'Understand estrogen metabolism',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Estrogen Metabolism'
  },
  {
    id: '25',
    question: 'Explain the interconversion between estradiol, estrone, estriol, and 16α-hydroxyestrone.',
    answer: 'ESTRADIOL ↔ ESTRONE (via estradiol dehydrogenase - INTERCONVERTIBLE). ESTRIOL ↔ 16α-HYDROXYESTRONE (via same enzyme - INTERCONVERTIBLE). Estradiol → Estriol and Estrone → 16α-hydroxyestrone (via 16α-hydroxylase - NOT INTERCONVERTIBLE).',
    learningObjective: 'Know estrogen interconversions',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Estrogen Interconversion'
  },
  {
    id: '26',
    question: 'Why does estradiol have poor oral bioavailability and how was this overcome?',
    answer: 'Estradiol: Very low oral BA due to rapid oxidative metabolism (17β-hydroxyl) and conjugation. SOLUTION: Add 17α-ETHINYL substituent → creates ETHINYL ESTRADIOL → blocks 17β oxidation → 15-20x more potent orally, 40% bioavailable. SAR: 17α-alkyl prevents conversion to estrone.',
    learningObjective: 'Understand estradiol modification',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Ethinyl Estradiol'
  },
  {
    id: '27',
    question: 'What is mestranol and how does it relate to ethinyl estradiol?',
    answer: 'Mestranol is the 3-O-METHYL PRODRUG of ethinyl estradiol. Rapidly metabolized to ethinyl estradiol in liver after oral administration. Both used primarily in oral contraceptives. Ethinyl estradiol is the active form.',
    learningObjective: 'Know ethinyl estradiol prodrug',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Mestranol'
  },
  {
    id: '28',
    question: 'What are 17β-esters of estradiol used for and what are their advantages?',
    answer: '17β-ESTERS (valerate, cypionate) used for LONG-TERM estrogenic therapy via IM injection. Dosed as sterile solutions in vegetable oil. PRODRUGS with longer DoA: Valerate 14-21 days, Cypionate 14-28 days. Similar design to glucocorticoid esters.',
    learningObjective: 'Know estradiol ester formulations',
    emphasis: 'low',
    slideReference: 'Gonadal Hormones Med Chem - Estradiol Esters'
  },
  {
    id: '29',
    question: 'What are conjugated estrogens (Premarin) and what makes them unique?',
    answer: 'Conjugated, water-soluble metabolites of naturally occurring estrogens from URINE OF PREGNANT MARES. Trade name: Premarin (Pregnant mare urine). Mixture of sodium sulfate esters (3-O-esters) primarily of estrone and equilin. Equilin and equilenin are UNIQUE to horses, not found in humans.',
    learningObjective: 'Understand conjugated estrogens',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Conjugated Estrogens'
  },
  {
    id: '30',
    question: 'What is the key SAR for estrogen activity?',
    answer: 'Substitutions at C1 greatly REDUCE activity. C2 and C4 can accommodate small substitutions. Removal of EITHER oxygen at C3 or C17 DIMINISHES activity. Epimerization of C17 hydroxyl to 17α also diminishes activity. Enlargement of D-ring to 6-membered ring diminishes activity.',
    learningObjective: 'Know estrogen SAR',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Estrogen SAR'
  },
  {
    id: '31',
    question: 'What are stilbene derivatives and why is DES clinically significant?',
    answer: 'Stilbene derivatives are NONSTEROIDAL potent estrogenic agents from plants. DIETHYLSTILBESTROL (DES): Significantly cheaper than natural estrogens. TRANS isomer more potent. WARNING: Causes neoplasia in offspring if used in pregnancy, linked to uterine cancer. Still used for prostate cancer in men.',
    learningObjective: 'Know nonsteroidal estrogens',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Stilbene Derivatives'
  },
  {
    id: '32',
    question: 'What are the 3 groups of estrogen antagonists?',
    answer: '1) IMPEDED ESTROGENS: Weak binding, dissociate rapidly, require high concentrations to competitively inhibit. 2) TRIPHENYLETHYLENE ANTIESTROGENS: Strong persistent binding, prevent nuclear translocation or chromatin binding. 3) AROMATASE INHIBITORS: Block estrogen synthesis.',
    learningObjective: 'Classify estrogen antagonists',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Estrogen Antagonists'
  },
  {
    id: '33',
    question: 'What are the structural features and mechanism of triphenylethylene antiestrogens?',
    answer: 'Derived from MER25 (weak) combined with stilbene features. Produce VERY STRONG and PERSISTENT binding to estrogen receptor → cannot translocate to nucleus OR if translocation occurs, cannot bind chromatin acceptor site properly. Examples: Clomiphene, Tamoxifen, Toremifene.',
    learningObjective: 'Understand triphenylethylene mechanism',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Triphenylethylene'
  },
  {
    id: '34',
    question: 'What is unique about clomiphene structure and how does this relate to its activity?',
    answer: 'Clomiphene exists as E and Z ISOMERS (geometric isomers), dosed as RACEMIC MIXTURE. Z-isomer responsible for ESTROGENIC activity. E-isomer responsible for ANTIESTROGENIC activity. This makes clomiphene a partial agonist used to induce ovulation.',
    learningObjective: 'Know clomiphene isomerism',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Clomiphene'
  },
  {
    id: '35',
    question: 'How is tamoxifen metabolized and what is the active metabolite?',
    answer: 'Tamoxifen (Z-isomer): Undergoes rapid DEMETHYLATION by CYP3A4. CYP2D6 produces minor metabolite 4-HYDROXYTAMOXIFEN, which is thought to be the ACTIVE METABOLITE. Greater antiestrogen activity than parent. Used for ER+ breast cancer.',
    learningObjective: 'Know tamoxifen metabolism',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Tamoxifen Metabolism'
  },
  {
    id: '36',
    question: 'How does toremifene differ from tamoxifen structurally and pharmacologically?',
    answer: 'Toremifene: Structurally similar to tamoxifen but has CHLORINE on ethyl side-chain. Chlorine REDUCES antiestrogenic potency. Like tamoxifen, undergoes rapid demethylation by CYP3A4 to N-demethyltoremifene. Used for advanced metastatic breast cancer.',
    learningObjective: 'Compare tamoxifen and toremifene',
    emphasis: 'low',
    slideReference: 'Gonadal Hormones Med Chem - Toremifene'
  },
  {
    id: '37',
    question: 'What was the goal in developing SERMs and what was the first one marketed?',
    answer: 'Goal: Find more RIGID analogues to eliminate E/Z isomer problem and produce pure acting molecules. First SERM marketed: RALOXIFENE (Evista), a BENZOTHIOPHENE derivative. Estrogenic for bone (osteoporosis), antiestrogenic for breast. Undergoes rapid first-pass metabolism to glucuronide conjugates.',
    learningObjective: 'Understand SERM development',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - SERMs'
  },
  {
    id: '38',
    question: 'What is the MOA of aromatase inhibitors and name the steroidal vs nonsteroidal agents.',
    answer: 'MOA: Competitive inhibitors that bind N-4 nitrogen of azole with HEME IRON of CYP19 (aromatase) → prevent O2 binding → block androgen to estrogen conversion. STEROIDAL: Exemestane (Aromasin). NONSTEROIDAL TRIAZOLES: Anastrozole (Arimidex), Letrozole (Femara). 2nd line for breast cancer after tamoxifen.',
    learningObjective: 'Know aromatase inhibitor MOA',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Aromatase Inhibitors'
  },
  {
    id: '39',
    question: 'Why does progesterone have such poor bioavailability and what happens to it?',
    answer: 'Progesterone: RAPIDLY metabolized by liver (half-life 5-10 minutes) regardless of route. Primarily excreted as conjugated 5β-PREGNANEDIOL. Minor metabolites: 6α-hydroxylation (CYP3A4), reduction of 20-ketone to alcohol. This necessitated development of synthetic progestins.',
    learningObjective: 'Understand progesterone metabolism',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Progesterone Metabolism'
  },
  {
    id: '40',
    question: 'What are the two major classes of synthetic progestins and their key structural differences?',
    answer: 'PREGNANES: Progesterone and derivatives. Extra METHYL at C6 → orally available. NORANDROSTANES (19-norandrostanes): Testosterone derivatives. Lost methyl at C19 (19-nor) → DECREASES androgenic activity. Gonanes: Replaced C13 methyl with ETHYL → decreases androgenic activity.',
    learningObjective: 'Classify synthetic progestins',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Synthetic Progestins'
  },
  {
    id: '41',
    question: 'What was the first orally active progesterone derivative and what structural feature is critical for oral activity?',
    answer: 'First: 17α-ACETOXYPROGESTERONE. The parent 17α-hydroxyprogesterone (non-esterified) has NO oral activity. Critical feature: 17α-ACETOXY ester provides oral bioavailability. The 17-caproate ester is used parenterally with very long DoA.',
    learningObjective: 'Know oral progesterone development',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Oral Progestins'
  },
  {
    id: '42',
    question: 'What structural modification in medroxyprogesterone acetate (Depo-Provera) enhances oral bioavailability?',
    answer: 'Medroxyprogesterone contains 6α-METHYL substituent (blocks 6-position - site of metabolic hydroxylation). This reduces metabolism and enhances oral bioavailability. Has very little estrogenic activity and NO androgenic activity. Binds 86% to serum albumin, no SHBG binding.',
    learningObjective: 'Understand medroxyprogesterone SAR',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Medroxyprogesterone'
  },
  {
    id: '43',
    question: 'How does megestrol acetate differ from other progestins and what is it used for?',
    answer: 'Megestrol: 6-substituted-17α-acetoxyprogesterone with DOUBLE BOND at positions 6-7. This greatly REDUCES overall metabolism, enhancing activity. Primarily used for treatment of BREAST and ENDOMETRIAL CARCINOMA (not just contraception).',
    learningObjective: 'Know megestrol use',
    emphasis: 'low',
    slideReference: 'Gonadal Hormones Med Chem - Megestrol'
  },
  {
    id: '44',
    question: 'What was significant about the discovery of 19-norandrostanes?',
    answer: 'Ethisterone (first synthetic progestin): Synthesized from testosterone. Discovery: C19 methyl group was UNNECESSARY for activity. 19-norprogesterone proved 8x MORE ACTIVE than progesterone parenterally. KEY: Adding ETHINYL to an androgen converts it to a PROGESTIN.',
    learningObjective: 'Understand 19-nor development',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - 19-Norandrostanes'
  },
  {
    id: '45',
    question: 'Compare the androgenic activity of different oral contraceptive progestins.',
    answer: 'HIGHER androgenic: Norgestrel, Levonorgestrel (active isomer of norgestrel). LOWER androgenic: Norgestimate, Desogestrel (3rd generation - much higher selectivity for progesterone vs androgen receptors). LEAST potent: Norethindrone/norethindrone acetate.',
    learningObjective: 'Compare progestin androgenic activity',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Progestin Comparison'
  }
];
