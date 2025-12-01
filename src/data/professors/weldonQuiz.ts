// Professor Weldon - Medicinal Chemistry Quiz Questions
// Topics: BPH/ED/UI, Osteoporosis, Gonadal Hormones

import type { QuizQuestion } from './professorTypes';

export const weldonQuiz: QuizQuestion[] = [
  // BPH/ED/UI Med Chem Questions (1-8)
  {
    id: '1',
    question: 'A patient is prescribed an alpha-1 antagonist for BPH. Based on medicinal chemistry principles, which structural class do all these drugs belong to, and what is their common suffix?',
    options: [
      'Quinazolines with "-azosin" suffix',
      'Benzodiazepines with "-azepam" suffix',
      'Phenothiazines with "-azine" suffix',
      'Sulfonamides with "-amide" suffix'
    ],
    correct_answer: 'Quinazolines with "-azosin" suffix',
    explanation: 'All alpha-1 antagonists for BPH belong to the QUINAZOLINE chemical class and share the "-azosin" suffix: Prazosin, Terazosin, Doxazosin, Tamsulosin, Alfuzosin, Silodosin. This structural class was originally developed as antihypertensives (vasculature smooth muscle relaxation via alpha-1B) but found utility in BPH (prostate smooth muscle relaxation via alpha-1A).',
    learningObjective: 'Recognize alpha-1 antagonist chemical class',
    difficulty: 'medium',
    slideReference: 'BPH Med Chem - Alpha Antagonists'
  },
  {
    id: '2',
    question: 'Why is dutasteride theoretically more effective than finasteride for treating BPH, based on their mechanisms and selectivity?',
    options: [
      'Dutasteride is more selective for type 2 5-alpha-reductase',
      'Dutasteride inhibits both type 1 and type 2 5-alpha-reductase, providing more complete DHT blockade',
      'Dutasteride has better oral bioavailability',
      'Dutasteride does not have androgenic side effects'
    ],
    correct_answer: 'Dutasteride inhibits both type 1 and type 2 5-alpha-reductase, providing more complete DHT blockade',
    explanation: 'FINASTERIDE is 30x more SELECTIVE for type 2 (found in reproductive tissue). DUTASTERIDE is 10x more POTENT inhibitor of type 2 AND also inhibits type 1 (found in skin/liver). Since DHT synthesis can continue via type 1 enzyme with finasteride alone, dutasteride\'s dual inhibition provides more COMPLETE DHT suppression and theoretically better efficacy. However, both are steroidal and have similar side effect profiles.',
    learningObjective: 'Compare 5-alpha-reductase inhibitor selectivity',
    difficulty: 'hard',
    slideReference: 'BPH Med Chem - 5-Alpha-Reductase Inhibitors'
  },
  {
    id: '3',
    question: 'PDE5 inhibitors are based on which natural compound structure, and what modification was made to improve water solubility?',
    options: [
      'Based on adenine; added phosphate group',
      'Based on guanine; added sulfonamide group',
      'Based on cytosine; added carboxyl group',
      'Based on thymine; added amino group'
    ],
    correct_answer: 'Based on guanine; added sulfonamide group',
    explanation: 'PDE5 inhibitors are PYRAZOLOPYRIMIDINONES structurally based on GUANINE because they need to mimic GMP (guanosine monophosphate), the substrate for PDE5. A SULFONAMIDE group was added to REDUCE LIPOPHILICITY and INCREASE WATER SOLUBILITY, leading to sildenafil citrate as the first drug. This rational drug design approach created competitive inhibitors of the PDE5 enzyme.',
    learningObjective: 'Understand PDE5 inhibitor drug design',
    difficulty: 'hard',
    slideReference: 'ED Med Chem - PDE5 Inhibitor Design'
  },
  {
    id: '4',
    question: 'Why does sildenafil (Viagra) cause blue vision and color discrimination problems, while newer PDE5 inhibitors have less of this side effect?',
    options: [
      'Sildenafil crosses the blood-brain barrier more easily',
      'Sildenafil is only >10-fold selective for PDE5 vs PDE6, and PDE6 is found in the retina',
      'Sildenafil has a longer half-life allowing accumulation in the eye',
      'Sildenafil binds to melanin in the retina'
    ],
    correct_answer: 'Sildenafil is only >10-fold selective for PDE5 vs PDE6, and PDE6 is found in the retina',
    explanation: 'Sildenafil has LOW SELECTIVITY - only >10-fold for PDE5 over PDE6. PDE6 is found in the RETINA and is involved in phototransduction. Inhibition of PDE6 causes color vision disturbances - specifically a blue/green color shift making these colors indistinguishable. Some cases of vision loss have been reported. This demonstrates the importance of SELECTIVITY in drug design - newer PDE5 inhibitors (tadalafil, vardenafil, avanafil) have better selectivity profiles.',
    learningObjective: 'Explain PDE5 inhibitor selectivity issues',
    difficulty: 'medium',
    slideReference: 'ED Med Chem - Sildenafil Side Effects'
  },
  {
    id: '5',
    question: 'A medicinal chemist is comparing two drugs of the same class. Drug A has an IC50 of 5 nM and Drug B has an IC50 of 50 nM at the target receptor. Both drugs also bind to an off-target receptor. Which statement is correct?',
    options: [
      'Drug A has better selectivity than Drug B',
      'Drug B has better selectivity than Drug A',
      'Drug A is more potent than Drug B at the target receptor',
      'IC50 values indicate selectivity, not potency'
    ],
    correct_answer: 'Drug A is more potent than Drug B at the target receptor',
    explanation: 'POTENCY compares different drugs of the same class at a SINGLE target. Lower IC50 = MORE POTENT. Drug A (5 nM) is 10x MORE POTENT than Drug B (50 nM). SELECTIVITY compares ONE drug at MULTIPLE targets - it measures how specific a drug is for its intended target versus off-targets. We cannot determine selectivity from the information given because we don\'t know the IC50 values at the off-target receptor.',
    learningObjective: 'Distinguish selectivity vs potency',
    difficulty: 'hard',
    slideReference: 'ED Med Chem - Pharmacology Concepts'
  },
  {
    id: '6',
    question: 'Why does alprostadil (PGE1) not require sexual stimulation to cause an erection, unlike PDE5 inhibitors?',
    options: [
      'Alprostadil is more potent than PDE5 inhibitors',
      'Alprostadil directly causes vasodilation independent of the NO/cGMP pathway',
      'Alprostadil works by blocking sympathetic innervation',
      'Alprostadil increases nitric oxide production'
    ],
    correct_answer: 'Alprostadil directly causes vasodilation independent of the NO/cGMP pathway',
    explanation: 'Alprostadil is synthetic PGE1 (Prostaglandin E1) that DIRECTLY causes vasodilation of corpus cavernosum independent of the NO/cGMP pathway. PDE5 inhibitors REQUIRE sexual stimulation because they only prevent cGMP degradation - they need NO release (from sexual stimulation) to first generate cGMP. This mechanistic difference explains why alprostadil works without stimulation but requires more invasive delivery (injection or urethral suppository).',
    learningObjective: 'Compare ED treatment mechanisms',
    difficulty: 'medium',
    slideReference: 'ED Med Chem - Alprostadil Mechanism'
  },
  {
    id: '7',
    question: 'What structural feature do all anticholinergic drugs for overactive bladder (OAB) share, and why is this important?',
    options: [
      'They all contain a quaternary ammonium group for better distribution',
      'They all structurally resemble acetylcholine to competitively bind muscarinic receptors',
      'They all contain a sulfonamide group for water solubility',
      'They all have an aromatic ring for receptor binding'
    ],
    correct_answer: 'They all structurally resemble acetylcholine to competitively bind muscarinic receptors',
    explanation: 'All anticholinergics for OAB (Darifenacin, Solifenacin, Oxybutynin, Tolterodine) structurally LOOK LIKE ACETYLCHOLINE. This structural similarity allows them to COMPETITIVELY bind to muscarinic receptors (M1-M3 depending on drug) and block acetylcholine binding. This is a classic example of competitive antagonism - the drug resembles the endogenous ligand closely enough to bind but doesn\'t activate the receptor.',
    learningObjective: 'Understand competitive antagonist design',
    difficulty: 'medium',
    slideReference: 'UI Med Chem - Anticholinergic Structure'
  },
  {
    id: '8',
    question: 'Why is desmopressin acetate (DDAVP) preferred over vasopressin for treating certain types of urinary incontinence from a medicinal chemistry perspective?',
    options: [
      'Desmopressin is more potent than vasopressin',
      'Desmopressin is an analogue with better oral bioavailability and longer half-life than the peptide vasopressin',
      'Desmopressin has fewer side effects',
      'Desmopressin works through a different receptor'
    ],
    correct_answer: 'Desmopressin is an analogue with better oral bioavailability and longer half-life than the peptide vasopressin',
    explanation: 'Vasopressin (ADH) is a PEPTIDE hormone with a very SHORT half-life and must be given by INJECTION. Desmopressin acetate (DDAVP) is a SYNTHETIC ANALOGUE designed to overcome these limitations - it can be given ORALLY and has a much LONGER duration of action. This is a classic medicinal chemistry strategy: modify a peptide hormone to create a drug-like molecule with better pharmacokinetic properties.',
    learningObjective: 'Understand peptide hormone modification',
    difficulty: 'easy',
    slideReference: 'UI Med Chem - ADH Analogues'
  },

  // Osteoporosis Med Chem Questions (9-14)
  {
    id: '9',
    question: 'Bisphosphonates were designed to mimic which natural compound, and what key structural modification makes them resistant to degradation?',
    options: [
      'Mimic ATP; phosphate groups are methylated',
      'Mimic inorganic pyrophosphate (IPP); P-O-P bond replaced with P-C-P bond',
      'Mimic cyclic AMP; ring structure is expanded',
      'Mimic GTP; ribose sugar is removed'
    ],
    correct_answer: 'Mimic inorganic pyrophosphate (IPP); P-O-P bond replaced with P-C-P bond',
    explanation: 'Bisphosphonates mimic INORGANIC PYROPHOSPHATE (IPP) but with a critical modification: substitution of CARBON for OXYGEN in the P-O-P bond creates a P-C-P structure. This makes them RESISTANT TO HYDROLYSIS (unlike IPP which is rapidly broken down), allows ACCUMULATION in bone matrix, and provides a LONG half-life. This is brilliant drug design - maintain biological activity while eliminating metabolic liability.',
    learningObjective: 'Understand bisphosphonate drug design',
    difficulty: 'hard',
    slideReference: 'Osteoporosis Med Chem - Bisphosphonate Structure'
  },
  {
    id: '10',
    question: 'What is the relationship between the nitrogen-containing side chain in bisphosphonates and their clinical effects?',
    options: [
      'Nitrogen side chain increases oral bioavailability',
      'Nitrogen side chain at R2 increases both potency and toxicity, directly linked to BRONJ risk',
      'Nitrogen side chain decreases bone binding',
      'Nitrogen side chain has no effect on activity'
    ],
    correct_answer: 'Nitrogen side chain at R2 increases both potency and toxicity, directly linked to BRONJ risk',
    explanation: 'The nitrogen-containing side chain at the R2 position INCREASES both POTENCY and TOXICITY of bisphosphonates. This is DIRECTLY LINKED to cases of BRONJ (Bisphosphonate-Related Osteonecrosis of Jaw). More potent nitrogen-containing bisphosphonates (like zoledronic acid, alendronate) have higher BRONJ risk than non-nitrogen-containing ones. This demonstrates the classic medicinal chemistry challenge of balancing efficacy against toxicity.',
    learningObjective: 'Relate structure to bisphosphonate toxicity',
    difficulty: 'hard',
    slideReference: 'Osteoporosis Med Chem - Bisphosphonate SAR'
  },
  {
    id: '11',
    question: 'How do PTH analogues (teriparatide, abaloparatide) differ mechanistically from bisphosphonates in treating osteoporosis?',
    options: [
      'PTH analogues are antiresorptive like bisphosphonates but more potent',
      'PTH analogues are NOT antiresorptive; they increase osteoclastic activity with the theory of building more than you lose (anabolic)',
      'PTH analogues inhibit osteoclasts more effectively than bisphosphonates',
      'PTH analogues work through the RANKL pathway'
    ],
    correct_answer: 'PTH analogues are NOT antiresorptive; they increase osteoclastic activity with the theory of building more than you lose (anabolic)',
    explanation: 'PTH analogues represent a fundamentally DIFFERENT approach than bisphosphonates. They are NOT ANTIRESORPTIVE - instead they INCREASE osteoclastic activity (bone resorption). The theory is that they stimulate bone FORMATION more than resorption, resulting in net bone gain. Teriparatide is the bioactive portion of PTH (direct mimic), while abaloparatide is an analogue. These are ANABOLIC agents vs the antiresorptive bisphosphonates.',
    learningObjective: 'Compare osteoporosis drug mechanisms',
    difficulty: 'medium',
    slideReference: 'Osteoporosis Med Chem - PTH Analogues'
  },
  {
    id: '12',
    question: 'What makes denosumab (Xgeva) mechanistically different from bisphosphonates despite both being antiresorptive?',
    options: [
      'Denosumab is a small molecule while bisphosphonates are proteins',
      'Denosumab is a monoclonal antibody that binds RANKL to prevent osteoclast differentiation',
      'Denosumab binds to bone hydroxyapatite like bisphosphonates',
      'Denosumab stimulates calcitonin release'
    ],
    correct_answer: 'Denosumab is a monoclonal antibody that binds RANKL to prevent osteoclast differentiation',
    explanation: 'Denosumab is a MONOCLONAL ANTIBODY (biological agent) designed to bind RANKL. When bound, RANKL cannot interact with RANK receptors on osteoclast precursors, preventing osteoclast differentiation and activation. Bisphosphonates are small molecules that bind to bone hydroxyapatite and directly inhibit mature osteoclast activity. Both are antiresorptive but work at different points in the osteoclast lifecycle - denosumab prevents formation, bisphosphonates inhibit function.',
    learningObjective: 'Compare antiresorptive mechanisms',
    difficulty: 'medium',
    slideReference: 'Osteoporosis Med Chem - Denosumab'
  },
  {
    id: '13',
    question: 'What is unique about romosozumab (Evenity) compared to all other osteoporosis medications from a mechanistic perspective?',
    options: [
      'It is the most potent antiresorptive agent',
      'It is the only oral bisphosphonate',
      'It has DUAL mechanism: increases bone formation (anabolic) AND decreases bone resorption (antiresorptive)',
      'It works by stimulating PTH release'
    ],
    correct_answer: 'It has DUAL mechanism: increases bone formation (anabolic) AND decreases bone resorption (antiresorptive)',
    explanation: 'Romosozumab-aqqg (Evenity) is a monoclonal antibody against SCLEROSTIN with a UNIQUE DUAL MOA. It both: 1) INCREASES bone formation (anabolic effect like PTH analogues) AND 2) DECREASES bone resorption (antiresorptive effect like bisphosphonates). NO OTHER osteoporosis drug has both effects. This dual action makes it theoretically superior, but it carries significant cardiovascular contraindications that limit its use.',
    learningObjective: 'Identify romosozumab unique mechanism',
    difficulty: 'easy',
    slideReference: 'Osteoporosis Med Chem - Romosozumab'
  },
  {
    id: '14',
    question: 'From a medicinal chemistry perspective, why must calcium supplementation always be paired with vitamin D?',
    options: [
      'Vitamin D blocks calcium excretion in kidneys',
      'Vitamin D is required for intestinal calcium absorption to occur effectively',
      'Calcium and vitamin D form a covalent complex that is more bioavailable',
      'Vitamin D prevents calcium from precipitating in the gut'
    ],
    correct_answer: 'Vitamin D is required for intestinal calcium absorption to occur effectively',
    explanation: 'This is a fundamental principle of calcium homeostasis: VITAMIN D (specifically the active form 1,25-(OH)2-D3/calcitriol) INCREASES INTESTINAL CALCIUM ABSORPTION by upregulating calcium transport proteins (calbindin, TRPV5/6 channels). Without adequate vitamin D, oral calcium supplements are poorly absorbed and largely wasted. This is why all calcium supplementation protocols include vitamin D - it\'s not just about providing calcium, it\'s about ensuring the body can actually absorb and utilize it.',
    learningObjective: 'Understand calcium-vitamin D relationship',
    difficulty: 'easy',
    slideReference: 'Osteoporosis Med Chem - Calcium Supplementation'
  },

  // Gonadal Hormones Med Chem Questions (15-25)
  {
    id: '15',
    question: 'How can you distinguish the three classes of sex hormones based on their carbon skeleton and key functional groups?',
    options: [
      'Estrogens: C19, androgens: C18, progestins: C21',
      'Estrogens: C18 with aromatic A ring and 3-phenolic OH; Progestins: C21 with 3-keto-4,5-ene; Androgens: C19 with oxygens at positions 3 and 17',
      'All three classes have identical carbon skeletons',
      'Estrogens: C21, progestins: C19, androgens: C18'
    ],
    correct_answer: 'Estrogens: C18 with aromatic A ring and 3-phenolic OH; Progestins: C21 with 3-keto-4,5-ene; Androgens: C19 with oxygens at positions 3 and 17',
    explanation: 'ESTROGENS: C18 steroids with UNSATURATED (AROMATIC) A ring and 3-PHENOLIC HYDROXYL (most potent: 17β-estradiol). PROGESTINS: C21 steroids with 3-KETO-4,5-ENE functionality (ene-one), similar to adrenocorticoids (most potent: progesterone). ANDROGENS: C19 steroids with OXYGENS (hydroxyl or ketone) at positions 3 and 17 (most common: testosterone). These structural differences dictate receptor binding and biological activity.',
    learningObjective: 'Classify sex hormones by structure',
    difficulty: 'hard',
    slideReference: 'Gonadal Hormones Med Chem - Sex Hormone Classes'
  },
  {
    id: '16',
    question: 'What is the critical enzymatic step in converting androgens to estrogens, and what would happen if this enzyme were deficient?',
    options: [
      '5-alpha-reductase; would prevent testosterone conversion to DHT',
      'Aromatase (CYP19); would cause failure of females to develop secondary sex characteristics at puberty',
      '17-beta-hydroxysteroid dehydrogenase; would prevent estradiol formation',
      'COMT; would cause excessive estrogen levels'
    ],
    correct_answer: 'Aromatase (CYP19); would cause failure of females to develop secondary sex characteristics at puberty',
    explanation: 'AROMATIZATION by AROMATASE (CYP19) is the CRITICAL step converting androgens (androstenedione, testosterone) to estrogens (estrone, estradiol). Requires 3 molecules of O2 and NADPH. AROMATASE DEFICIENCY is an inheritable disorder causing failure of females to develop secondary sex characteristics at puberty and failure to become sexually mature (also affects males). This demonstrates how critical this single enzyme is for normal sexual development.',
    learningObjective: 'Understand aromatase importance',
    difficulty: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Aromatase'
  },
  {
    id: '17',
    question: 'Why does natural estradiol have poor oral bioavailability, and what structural modification overcame this problem?',
    options: [
      'Poor protein binding; modified by adding albumin-binding group',
      'Rapid oxidative metabolism at 17β-hydroxyl and conjugation; added 17α-ethinyl substituent to create ethinyl estradiol',
      'Unstable in gastric acid; added protective coating',
      'Poor lipid solubility; added fatty acid ester'
    ],
    correct_answer: 'Rapid oxidative metabolism at 17β-hydroxyl and conjugation; added 17α-ethinyl substituent to create ethinyl estradiol',
    explanation: 'Estradiol has very LOW oral BA due to RAPID OXIDATIVE METABOLISM at the 17β-hydroxyl (converts to estrone) and CONJUGATION. SOLUTION: Add 17α-ETHINYL substituent → creates ETHINYL ESTRADIOL → BLOCKS the 17β oxidation → 15-20x MORE POTENT orally, 40% bioavailable. SAR principle: 17α-alkyl substituent PREVENTS conversion to estrone, making it suitable for oral contraceptives. This is classic prodrug/stability enhancement strategy.',
    learningObjective: 'Understand ethinyl estradiol development',
    difficulty: 'hard',
    slideReference: 'Gonadal Hormones Med Chem - Ethinyl Estradiol'
  },
  {
    id: '18',
    question: 'What is conjugated estrogen (Premarin), where does it come from, and what makes it unique?',
    options: [
      'Synthetic estrogen made in laboratory; contains only human estrogens',
      'Plant-derived estrogen from soy; contains phytoestrogens',
      'Mixture of sodium sulfate esters from urine of pregnant mares; contains equilin and equilenin not found in humans',
      'Bacterial fermentation product; identical to human estradiol'
    ],
    correct_answer: 'Mixture of sodium sulfate esters from urine of pregnant mares; contains equilin and equilenin not found in humans',
    explanation: 'Conjugated estrogens (trade name PREMARIN = PREgnant MAre uRINe) are water-soluble metabolites from URINE OF PREGNANT MARES. Mixture of sodium sulfate esters (3-O-esters) primarily of estrone and EQUILIN. UNIQUE: Mares produce EQUILIN and EQUILENIN which are NOT FOUND IN HUMANS. This unusual source was historically used because it provided a readily available, concentrated source of conjugated estrogens for hormone replacement therapy.',
    learningObjective: 'Know conjugated estrogen source',
    difficulty: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Conjugated Estrogens'
  },
  {
    id: '19',
    question: 'What is the key structure-activity relationship (SAR) rule for maintaining estrogen activity at the C3 and C17 positions?',
    options: [
      'Can remove either oxygen without affecting activity',
      'Removal of EITHER oxygen at C3 or C17 diminishes activity; epimerization of C17 hydroxyl to 17α also diminishes activity',
      'Must have both positions methylated for activity',
      'C3 and C17 positions are not important for activity'
    ],
    correct_answer: 'Removal of EITHER oxygen at C3 or C17 diminishes activity; epimerization of C17 hydroxyl to 17α also diminishes activity',
    explanation: 'Critical SAR for estrogens: REMOVAL of EITHER oxygen at C3 (phenolic hydroxyl) or C17 (hydroxyl) DIMINISHES activity - both are essential for receptor binding. EPIMERIZATION of the 17-hydroxyl to 17α-hydroxyl also diminishes activity (natural estradiol is 17β). Also: Substitutions at C1 greatly reduce activity; C2 and C4 can accommodate small substitutions; enlargement of D-ring to 6-membered ring diminishes activity.',
    learningObjective: 'Apply estrogen SAR principles',
    difficulty: 'hard',
    slideReference: 'Gonadal Hormones Med Chem - Estrogen SAR'
  },
  {
    id: '20',
    question: 'What are the three mechanistic classes of estrogen antagonists, and which one prevents estrogen synthesis?',
    options: [
      'Impeded estrogens, SERMs, and calcium channel blockers; calcium channel blockers prevent synthesis',
      'Impeded estrogens, triphenylethylene antiestrogens, and aromatase inhibitors; aromatase inhibitors prevent synthesis',
      'SERMs, bisphosphonates, and GnRH antagonists; GnRH antagonists prevent synthesis',
      'All three classes work by receptor binding; none prevent synthesis'
    ],
    correct_answer: 'Impeded estrogens, triphenylethylene antiestrogens, and aromatase inhibitors; aromatase inhibitors prevent synthesis',
    explanation: '1) IMPEDED ESTROGENS: Weak binding, dissociate rapidly, require high concentrations to compete. 2) TRIPHENYLETHYLENE ANTIESTROGENS (clomiphene, tamoxifen): Strong persistent binding, prevent nuclear translocation or chromatin binding. 3) AROMATASE INHIBITORS (anastrozole, letrozole, exemestane): Block AROMATASE enzyme → PREVENT CONVERSION of androgens to estrogens → reduce estrogen SYNTHESIS. Only aromatase inhibitors work pre-receptor by preventing hormone production.',
    learningObjective: 'Classify estrogen antagonist mechanisms',
    difficulty: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Estrogen Antagonists'
  },
  {
    id: '21',
    question: 'How do aromatase inhibitors work at the molecular level to block estrogen synthesis?',
    options: [
      'They bind to estrogen receptors as antagonists',
      'They bind the N-4 nitrogen of azole ring with heme iron of CYP19 to prevent O2 binding',
      'They chelate the iron in hemoglobin',
      'They competitively inhibit substrate binding only'
    ],
    correct_answer: 'They bind the N-4 nitrogen of azole ring with heme iron of CYP19 to prevent O2 binding',
    explanation: 'Nonsteroidal aromatase inhibitors (anastrozole, letrozole) are competitive inhibitors with a triazole ring. MOA: N-4 nitrogen of the AZOLE ring binds with HEME IRON atom of the CYP19 (aromatase) complex → PREVENTS O2 BINDING → blocks the 3-step oxidation reaction that converts androstenedione to estrone. This is mechanism-based inhibition targeting the enzyme\'s catalytic machinery. Exemestane is a steroidal inhibitor that works similarly but is a substrate analogue.',
    learningObjective: 'Understand aromatase inhibitor MOA',
    difficulty: 'hard',
    slideReference: 'Gonadal Hormones Med Chem - Aromatase Inhibitor MOA'
  },
  {
    id: '22',
    question: 'Why do synthetic progestins fall into two structural classes (pregnanes vs 19-norandrostanes), and what discovery led to the 19-nor compounds?',
    options: [
      'Pregnanes are stronger; 19-nor compounds have no activity',
      'Pregnanes have extra C6 methyl for oral availability; 19-nor compounds discovered that C19 methyl is unnecessary, synthesized from testosterone',
      'Both classes are identical in structure',
      'Pregnanes are for injection only; 19-nor compounds are oral only'
    ],
    correct_answer: 'Pregnanes have extra C6 methyl for oral availability; 19-nor compounds discovered that C19 methyl is unnecessary, synthesized from testosterone',
    explanation: 'PREGNANES: Progesterone derivatives with extra METHYL at C6 → makes orally available by blocking metabolism. 19-NORANDROSTANES: Derived from TESTOSTERONE (male hormone). Key discovery: C19 METHYL GROUP was UNNECESSARY for progestational activity. 19-norprogesterone proved 8x MORE ACTIVE than progesterone parenterally. Critical principle: Adding ETHINYL to an ANDROGEN converts it to a PROGESTIN. Loss of C19 methyl (19-nor) → DECREASES androgenic activity.',
    learningObjective: 'Understand progestin structural classes',
    difficulty: 'hard',
    slideReference: 'Gonadal Hormones Med Chem - Synthetic Progestins'
  },
  {
    id: '23',
    question: 'What is the significance of the E and Z isomers in clomiphene citrate (Clomid)?',
    options: [
      'Both isomers have identical activity',
      'Z-isomer is estrogenic; E-isomer is antiestrogenic; dosed as racemic mixture for partial agonist activity',
      'E-isomer is inactive; only Z-isomer is used',
      'Isomers have different routes of metabolism only'
    ],
    correct_answer: 'Z-isomer is estrogenic; E-isomer is antiestrogenic; dosed as racemic mixture for partial agonist activity',
    explanation: 'Clomiphene has both ESTROGENIC and ANTIESTROGENIC properties (partial agonist) due to geometric isomerism. Z-ISOMER responsible for ESTROGENIC activity. E-ISOMER responsible for ANTIESTROGENIC activity. Dosed as RACEMIC MIXTURE to achieve the desired mixed agonist-antagonist profile. Binds estrogen receptors in hypothalamus → blocks feedback inhibition → increases FSH/LH secretion → induces ovulation for infertility treatment.',
    learningObjective: 'Understand clomiphene isomerism',
    difficulty: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Clomiphene'
  },
  {
    id: '24',
    question: 'How is tamoxifen metabolized and which metabolite is thought to be responsible for its therapeutic activity?',
    options: [
      'Tamoxifen is not metabolized; parent drug is active',
      'CYP3A4 produces major demethylated metabolite; CYP2D6 produces minor 4-hydroxytamoxifen (active metabolite)',
      'Glucuronidation is the only metabolic pathway',
      'All metabolites are inactive'
    ],
    correct_answer: 'CYP3A4 produces major demethylated metabolite; CYP2D6 produces minor 4-hydroxytamoxifen (active metabolite)',
    explanation: 'Tamoxifen (Z-isomer): CYP3A4 performs rapid DEMETHYLATION (major pathway). CYP2D6 produces the MINOR metabolite 4-HYDROXYTAMOXIFEN, which is thought to be the ACTIVE METABOLITE with greater antiestrogen activity. This has clinical implications: CYP2D6 polymorphisms affect tamoxifen efficacy, and CYP2D6 inhibitors can reduce therapeutic effect. This is an example of a prodrug requiring bioactivation.',
    learningObjective: 'Understand tamoxifen metabolism',
    difficulty: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Tamoxifen Metabolism'
  },
  {
    id: '25',
    question: 'Compare the androgenic activity of different progestins used in oral contraceptives and explain the clinical significance.',
    options: [
      'All progestins have identical androgenic activity',
      'Norgestrel/levonorgestrel have HIGH androgenic activity; norgestimate/desogestrel have LOW androgenic activity (higher selectivity for progesterone vs androgen receptors)',
      'Desogestrel has the highest androgenic activity',
      'Androgenic activity is not clinically relevant'
    ],
    correct_answer: 'Norgestrel/levonorgestrel have HIGH androgenic activity; norgestimate/desogestrel have LOW androgenic activity (higher selectivity for progesterone vs androgen receptors)',
    explanation: 'HIGHER ANDROGENIC: Norgestrel, Levonorgestrel (active isomer) - 2nd generation. LOWER ANDROGENIC: Norgestimate, Desogestrel - 3rd generation with MUCH HIGHER selectivity for progesterone vs androgen receptors. LEAST POTENT: Norethindrone/norethindrone acetate. CLINICAL SIGNIFICANCE: Higher androgenic activity → more androgenic side effects (acne, hirsutism, adverse lipid effects). Lower androgenic progestins preferred for patients concerned about these effects, though may have slightly higher VTE risk.',
    learningObjective: 'Compare progestin androgenic profiles',
    difficulty: 'hard',
    slideReference: 'Gonadal Hormones Med Chem - Progestin Comparison'
  }
];
