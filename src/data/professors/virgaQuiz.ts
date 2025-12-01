// Professor Virga - Gonadal Hormones Med Chem Quiz Questions
// Topics: Estrogen/Progestin/Androgen Chemistry, SAR, Drug Design

import type { QuizQuestion } from './professorTypes';

export const virgaQuiz: QuizQuestion[] = [
  {
    id: '1',
    question: 'Based on structural classification, how would you identify an unknown steroid as an estrogen vs a progestin vs an androgen?',
    options: [
      'All sex hormones have identical structures',
      'Count carbons: Estrogens C18 with aromatic A ring; Progestins C21 with 3-keto-4,5-ene; Androgens C19 with oxygens at 3 and 17',
      'Only molecular weight distinguishes them',
      'Functional groups are identical across classes'
    ],
    correct_answer: 'Count carbons: Estrogens C18 with aromatic A ring; Progestins C21 with 3-keto-4,5-ene; Androgens C19 with oxygens at 3 and 17',
    explanation: 'Sex hormone classification by structure: ESTROGENS = C18 steroids with AROMATIC (UNSATURATED) A ring and 3-PHENOLIC HYDROXYL. PROGESTINS = C21 steroids with 3-KETO-4,5-ENE (ene-one) functionality similar to adrenocorticoids. ANDROGENS = C19 steroids with OXYGENS (hydroxyl or ketone) at BOTH positions 3 and 17. These structural differences determine receptor binding specificity and biological activity. Carbon number and key functional groups are diagnostic features.',
    learningObjective: 'Classify sex hormones structurally',
    difficulty: 'hard',
    slideReference: 'Gonadal Hormones Med Chem - Structural Classification'
  },
  {
    id: '2',
    question: 'Why is 17β-estradiol the most potent naturally occurring estrogen compared to estrone and estriol?',
    options: [
      'It has the highest molecular weight',
      'It has optimal hydroxyl positioning at C3 (phenolic) and C17β providing highest receptor affinity',
      'It is the only one that binds to estrogen receptors',
      'It is not metabolized'
    ],
    correct_answer: 'It has optimal hydroxyl positioning at C3 (phenolic) and C17β providing highest receptor affinity',
    explanation: '17β-ESTRADIOL is the most potent because it has HIGHEST AFFINITY for estrogen receptor due to OPTIMAL HYDROXYL POSITIONING. The 3-PHENOLIC HYDROXYL (required for all estrogens) combined with 17β-HYDROXYL provides STRONGEST receptor binding. ESTRONE has 17-KETONE (vs 17β-OH) → lower affinity. ESTRIOL has additional 16α-HYDROXYL → actually REDUCES affinity despite more hydroxyl groups. This demonstrates that optimal binding requires specific positioning, not just more functional groups.',
    learningObjective: 'Explain estrogen potency differences',
    difficulty: 'hard',
    slideReference: 'Gonadal Hormones Med Chem - Estrogen Potency'
  },
  {
    id: '3',
    question: 'A patient with aromatase deficiency would be unable to synthesize which class of sex hormones, and what would be the clinical consequence?',
    options: [
      'Cannot synthesize androgens; male infertility',
      'Cannot synthesize progestins; menstrual irregularities',
      'Cannot synthesize estrogens from androgens; failure of female sexual maturation',
      'Cannot synthesize any sex hormones'
    ],
    correct_answer: 'Cannot synthesize estrogens from androgens; failure of female sexual maturation',
    explanation: 'AROMATASE (CYP19) is the CRITICAL enzyme that converts ANDROGENS → ESTROGENS (androstenedione → estrone, testosterone → estradiol). Requires 3 O2 + NADPH for the 3-step aromatization reaction. AROMATASE DEFICIENCY is an inheritable disorder causing FAILURE OF FEMALES to develop secondary sex characteristics at puberty and failure to become sexually mature (also affects males but less severely). This demonstrates aromatase as the key "switch" enzyme between androgens and estrogens - without it, estrogen biosynthesis cannot occur.',
    learningObjective: 'Understand aromatase clinical importance',
    difficulty: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Aromatase'
  },
  {
    id: '4',
    question: 'Estradiol undergoes rapid first-pass metabolism when taken orally. What structural modification overcame this problem to create the first successful oral contraceptive estrogen?',
    options: [
      'Adding a methyl group at C3',
      'Adding a 17α-ethinyl substituent to block 17β-hydroxyl oxidation',
      'Removing the aromatic A ring',
      'Esterifying the 3-phenolic hydroxyl'
    ],
    correct_answer: 'Adding a 17α-ethinyl substituent to block 17β-hydroxyl oxidation',
    explanation: 'PROBLEM: Estradiol has VERY LOW oral BA due to RAPID OXIDATIVE METABOLISM at 17β-HYDROXYL (converts to estrone) + CONJUGATION. SOLUTION: Add 17α-ETHINYL substituent → creates ETHINYL ESTRADIOL → BLOCKS 17β oxidation → PREVENTS conversion to estrone → 15-20X MORE POTENT orally, 40% bioavailable. KEY SAR PRINCIPLE: 17α-ALKYL substituent is NECESSARY for oral activity in estrogens and other steroids. This is used in ALL oral contraceptives.',
    learningObjective: 'Understand oral estrogen drug design',
    difficulty: 'hard',
    slideReference: 'Gonadal Hormones Med Chem - Ethinyl Estradiol'
  },
  {
    id: '5',
    question: 'What is the metabolic relationship between mestranol and ethinyl estradiol, and why is ethinyl estradiol more potent?',
    options: [
      'Mestranol and ethinyl estradiol are unrelated compounds',
      'Mestranol is the 3-O-methyl prodrug that is demethylated to ethinyl estradiol in the liver; ethinyl estradiol is 2X more potent because it is the active form',
      'Ethinyl estradiol is metabolized to mestranol',
      'They have identical potency'
    ],
    correct_answer: 'Mestranol is the 3-O-methyl prodrug that is demethylated to ethinyl estradiol in the liver; ethinyl estradiol is 2X more potent because it is the active form',
    explanation: 'MESTRANOL is the 3-O-METHYL PRODRUG derivative of ethinyl estradiol. After oral administration, it is RAPIDLY METABOLIZED (O-DEMETHYLATION) in the LIVER to ethinyl estradiol. ETHINYL ESTRADIOL is 2X MORE POTENT than mestranol because mestranol must first be ACTIVATED by metabolism. Both are used in oral contraceptives, but modern formulations prefer ethinyl estradiol since it\'s the active form. This demonstrates prodrug strategy - sometimes adding a metabolically labile group creates a useful formulation.',
    learningObjective: 'Know prodrug relationships',
    difficulty: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Mestranol'
  },
  {
    id: '6',
    question: 'What are the critical SAR rules for maintaining estrogen receptor binding activity?',
    options: [
      'Any substitutions are tolerated without loss of activity',
      'Removal of EITHER C3 or C17 oxygen diminishes activity; 17α-epimerization diminishes activity; C1 substitutions greatly reduce activity',
      'Only the aromatic A ring is important',
      'Molecular weight is the only factor'
    ],
    correct_answer: 'Removal of EITHER C3 or C17 oxygen diminishes activity; 17α-epimerization diminishes activity; C1 substitutions greatly reduce activity',
    explanation: 'CRITICAL ESTROGEN SAR: Substitutions at C1 greatly REDUCE activity. C2 and C4 can accommodate SMALL substitutions. Removal of EITHER oxygen at C3 (phenolic) OR C17 DIMINISHES activity - BOTH are REQUIRED for optimal receptor binding. EPIMERIZATION of 17-hydroxyl to 17α (instead of natural 17β) also diminishes activity. Enlargement of D-ring to 6-membered ring diminishes activity. This demonstrates that estrogen receptor has specific binding pocket requirements.',
    learningObjective: 'Apply estrogen SAR principles',
    difficulty: 'hard',
    slideReference: 'Gonadal Hormones Med Chem - Estrogen SAR'
  },
  {
    id: '7',
    question: 'Why are conjugated estrogens (Premarin) unique among estrogen preparations, and what is their source?',
    options: [
      'Synthetic estrogens made in laboratory',
      'Water-soluble sodium sulfate esters from pregnant mare urine containing equilin/equilenin not found in humans',
      'Plant-derived phytoestrogens',
      'Bacterial fermentation products'
    ],
    correct_answer: 'Water-soluble sodium sulfate esters from pregnant mare urine containing equilin/equilenin not found in humans',
    explanation: 'Conjugated estrogens (PREMARIN = PREgnant MAre uRINe) are WATER-SOLUBLE metabolites obtained from URINE OF PREGNANT MARES. Mixture of SODIUM SULFATE ESTERS (3-O-esters) primarily of estrone and EQUILIN. UNIQUE: Mares produce EQUILIN and EQUILENIN which are NOT FOUND IN HUMANS. This unusual source was historically used because it provided concentrated, readily available conjugated estrogens for HRT before synthetic alternatives. Demonstrates how natural sources can provide unique drug candidates.',
    learningObjective: 'Know unique estrogen sources',
    difficulty: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Conjugated Estrogens'
  },
  {
    id: '8',
    question: 'How do triphenylethylene antiestrogens (like tamoxifen) work differently from impeded estrogens at the molecular level?',
    options: [
      'Both work identically',
      'Triphenylethylenes produce strong persistent ER binding preventing nuclear translocation or chromatin binding; impeded estrogens bind weakly and dissociate rapidly',
      'Triphenylethylenes block estrogen synthesis; impeded estrogens block receptors',
      'Only impeded estrogens are clinically useful'
    ],
    correct_answer: 'Triphenylethylenes produce strong persistent ER binding preventing nuclear translocation or chromatin binding; impeded estrogens bind weakly and dissociate rapidly',
    explanation: 'TRIPHENYLETHYLENES (clomiphene, tamoxifen, toremifene): Derived from MER25 + stilbene features → produce VERY STRONG and PERSISTENT binding to estrogen receptor → CANNOT translocate to nucleus OR if translocation occurs, CANNOT bind chromatin acceptor site properly. IMPEDED ESTROGENS: WEAK binding, dissociate RAPIDLY, require HIGH concentrations to competitively inhibit. Triphenylethylenes are much more potent antagonists. This demonstrates how binding kinetics (strength and duration) affect antagonist potency.',
    learningObjective: 'Compare estrogen antagonist mechanisms',
    difficulty: 'hard',
    slideReference: 'Gonadal Hormones Med Chem - Triphenylethylene Mechanism'
  },
  {
    id: '9',
    question: 'Clomiphene is administered as a racemic mixture of E and Z isomers. What is the pharmacological significance of this?',
    options: [
      'Both isomers are inactive',
      'Z-isomer is estrogenic, E-isomer is antiestrogenic, creating a partial agonist for ovulation induction',
      'Only the E-isomer is active',
      'Isomers have no effect on activity'
    ],
    correct_answer: 'Z-isomer is estrogenic, E-isomer is antiestrogenic, creating a partial agonist for ovulation induction',
    explanation: 'Clomiphene exists as E and Z GEOMETRIC ISOMERS, dosed as RACEMIC MIXTURE. Z-ISOMER: Responsible for ESTROGENIC activity. E-ISOMER: Responsible for ANTIESTROGENIC activity. This creates a PARTIAL AGONIST (mixed agonist-antagonist) effect. Binds ER in hypothalamus → blocks negative feedback → increases FSH/LH secretion → stimulates ovulation. The mixed activity is actually THERAPEUTIC for infertility treatment. This demonstrates how stereochemistry profoundly affects pharmacology - same molecular formula, different spatial arrangement, opposite activities.',
    learningObjective: 'Understand stereochemical effects on activity',
    difficulty: 'hard',
    slideReference: 'Gonadal Hormones Med Chem - Clomiphene Stereochemistry'
  },
  {
    id: '10',
    question: 'How is tamoxifen metabolized and why is this clinically significant?',
    options: [
      'Tamoxifen is not metabolized',
      'CYP3A4 demethylates; CYP2D6 produces 4-hydroxytamoxifen (active metabolite); polymorphisms and inhibitors affect efficacy',
      'Only gut bacteria metabolize tamoxifen',
      'Metabolism has no clinical relevance'
    ],
    correct_answer: 'CYP3A4 demethylates; CYP2D6 produces 4-hydroxytamoxifen (active metabolite); polymorphisms and inhibitors affect efficacy',
    explanation: 'Tamoxifen (Z-isomer): CYP3A4 → rapid DEMETHYLATION (major pathway). CYP2D6 → minor metabolite 4-HYDROXYTAMOXIFEN (ACTIVE METABOLITE with GREATER antiestrogen activity). CLINICAL SIGNIFICANCE: Tamoxifen is a PRODRUG requiring bioactivation. CYP2D6 POLYMORPHISMS → affect efficacy (poor metabolizers have reduced benefit). CYP2D6 INHIBITORS (SSRIs like paroxetine, fluoxetine) → REDUCE therapeutic effect → should be avoided. This is important pharmacogenomic example - genetic variation in drug-metabolizing enzymes affects treatment outcomes.',
    learningObjective: 'Understand tamoxifen pharmacogenomics',
    difficulty: 'hard',
    slideReference: 'Gonadal Hormones Med Chem - Tamoxifen Metabolism'
  },
  {
    id: '11',
    question: 'At the molecular level, how do triazole aromatase inhibitors (anastrozole, letrozole) block estrogen synthesis?',
    options: [
      'They bind to estrogen receptors as antagonists',
      'N-4 nitrogen of azole ring binds heme iron of CYP19 preventing O2 binding and blocking the 3-step oxidation',
      'They chelate all iron in the body',
      'They competitively inhibit substrate binding only'
    ],
    correct_answer: 'N-4 nitrogen of azole ring binds heme iron of CYP19 preventing O2 binding and blocking the 3-step oxidation',
    explanation: 'Nonsteroidal aromatase inhibitors (TRIAZOLES) MOA: N-4 NITROGEN of AZOLE ring coordinates with HEME IRON atom of CYP19 (aromatase) complex → PREVENTS O2 BINDING → blocks the 3-step oxidation reaction converting androstenedione to estrone. This is COMPETITIVE inhibition at the enzyme active site. Examples: Anastrozole (Arimidex), Letrozole (Femara). This is elegant mechanism-based inhibition - drug targets the catalytic machinery (heme iron) essential for enzyme function. Steroidal inhibitor exemestane works differently as substrate analogue.',
    learningObjective: 'Understand aromatase inhibitor MOA',
    difficulty: 'hard',
    slideReference: 'Gonadal Hormones Med Chem - Aromatase Inhibitor MOA'
  },
  {
    id: '12',
    question: 'Why does natural progesterone have such poor bioavailability that it cannot be used for oral contraception?',
    options: [
      'Progesterone is not absorbed from the GI tract',
      'Progesterone is rapidly metabolized by the liver (t1/2 5-10 min) regardless of route',
      'Progesterone causes severe toxicity',
      'Progesterone has no biological activity'
    ],
    correct_answer: 'Progesterone is rapidly metabolized by the liver (t1/2 5-10 min) regardless of route',
    explanation: 'Progesterone: RAPIDLY metabolized by liver following ANY route of administration (half-life 5-10 MINUTES). Primarily excreted as conjugated 5β-PREGNANEDIOL. Minor metabolites: 6α-hydroxylation (CYP3A4), reduction of 20-ketone. This EXTREMELY RAPID metabolism makes oral contraception impossible with natural progesterone. This necessitated development of SYNTHETIC PROGESTINS with structural modifications to resist metabolism. Demonstrates why understanding metabolism is critical for drug design - even highly active compounds are useless if they don\'t reach target.',
    learningObjective: 'Explain progestin development rationale',
    difficulty: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Progesterone Metabolism'
  },
  {
    id: '13',
    question: 'What are the two major structural classes of synthetic progestins and what key modifications distinguish them?',
    options: [
      'Only one class exists',
      'Pregnanes (C6 methyl for oral availability) vs 19-Norandrostanes (removed C19 methyl decreasing androgenic activity)',
      'All progestins are identical',
      'Classification is based only on molecular weight'
    ],
    correct_answer: 'Pregnanes (C6 methyl for oral availability) vs 19-Norandrostanes (removed C19 methyl decreasing androgenic activity)',
    explanation: 'PREGNANES: Progesterone and derivatives. Extra METHYL at C6 → BLOCKS metabolic hydroxylation (site of CYP3A4 metabolism) → provides ORAL AVAILABILITY. Examples: Medroxyprogesterone. 19-NORANDROSTANES: Testosterone derivatives. REMOVED METHYL at C19 (19-nor) → DECREASES ANDROGENIC activity while maintaining progestational activity. KEY DISCOVERY: C19 methyl UNNECESSARY for progestin activity. GONANES: 13-ethyl (vs 13-methyl) → further decreases androgenic activity. This demonstrates rational modification to optimize therapeutic profile - blocking metabolism sites or removing unnecessary groups causing unwanted effects.',
    learningObjective: 'Classify progestin structures',
    difficulty: 'hard',
    slideReference: 'Gonadal Hormones Med Chem - Progestin Classes'
  },
  {
    id: '14',
    question: 'What was the critical structural feature that enabled the development of the first orally active progesterone derivative?',
    options: [
      'Addition of an aromatic ring',
      '17α-acetoxy ester; parent 17α-hydroxyprogesterone has no oral activity',
      'Removal of all oxygen atoms',
      'Increasing molecular weight'
    ],
    correct_answer: '17α-acetoxy ester; parent 17α-hydroxyprogesterone has no oral activity',
    explanation: 'First orally active progesterone: 17α-ACETOXYPROGESTERONE. CRITICAL FEATURE: 17α-ACETOXY ESTER provides oral bioavailability. Parent compound 17α-HYDROXYPROGESTERONE (nonesterified) has NO oral activity. 17-CAPROATE ester used parenterally with VERY LONG duration of action. This demonstrates importance of PROTECTING metabolically labile positions (17-hydroxyl) - ester protects from oxidation during first-pass, then is slowly hydrolyzed to release active form. Strategy similar to testosterone and estradiol esters.',
    learningObjective: 'Know oral progestin development',
    difficulty: 'hard',
    slideReference: 'Gonadal Hormones Med Chem - Oral Progestin Development'
  },
  {
    id: '15',
    question: 'Why do newer "third-generation" oral contraceptive progestins (norgestimate, desogestrel) have advantages over older ones (levonorgestrel)?',
    options: [
      'Third-generation progestins are less expensive',
      'Third-generation progestins have MUCH HIGHER selectivity for progesterone vs androgen receptors, causing fewer androgenic side effects',
      'Third-generation progestins are more potent',
      'There is no difference between generations'
    ],
    correct_answer: 'Third-generation progestins have MUCH HIGHER selectivity for progesterone vs androgen receptors, causing fewer androgenic side effects',
    explanation: 'SECOND GENERATION (norgestrel, levonorgestrel): HIGHER ANDROGENIC activity → more side effects (acne, hirsutism, adverse lipid changes). THIRD GENERATION (norgestimate, desogestrel): MUCH HIGHER SELECTIVITY for PROGESTERONE receptors over ANDROGEN receptors → FEWER androgenic side effects → better tolerated. TRADE-OFF: Possibly slightly higher VTE risk (controversial). This demonstrates ongoing drug development - successive generations optimize selectivity to improve side effect profile while maintaining efficacy.',
    learningObjective: 'Compare progestin generations',
    difficulty: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Progestin Evolution'
  },
  {
    id: '16',
    question: 'What was the key discovery about the C19 methyl group that led to the development of 19-norandrostanes?',
    options: [
      'C19 methyl is essential for all activity',
      'C19 methyl is UNNECESSARY for progestational activity; 19-norprogesterone is 8X more active; also adding ethinyl to androgen converts it to progestin',
      'C19 methyl causes toxicity',
      'C19 methyl prevents absorption'
    ],
    correct_answer: 'C19 methyl is UNNECESSARY for progestational activity; 19-norprogesterone is 8X more active; also adding ethinyl to androgen converts it to progestin',
    explanation: 'ETHISTERONE (first synthetic progestin from testosterone): Studies revealed C19 METHYL GROUP was UNNECESSARY for progestational activity. 19-NORPROGESTERONE proved 8X MORE ACTIVE than progesterone (parenteral). KEY PRINCIPLE: Adding ETHINYL to ANDROGEN converts it to PROGESTIN (counterintuitive but important SAR). 19-nor modification also DECREASES ANDROGENIC activity → therapeutic advantage. This discovery opened entire class of oral contraceptive progestins. Demonstrates how systematic structure modification reveals unexpected SAR insights.',
    learningObjective: 'Understand 19-nor discovery significance',
    difficulty: 'hard',
    slideReference: 'Gonadal Hormones Med Chem - 19-Nor Discovery'
  },
  {
    id: '17',
    question: 'Why is medroxyprogesterone more orally bioavailable than natural progesterone?',
    options: [
      'It has higher molecular weight',
      '6α-methyl substituent blocks 6-position (site of CYP3A4 hydroxylation) reducing metabolism',
      'It does not bind to receptors',
      'It is not absorbed'
    ],
    correct_answer: '6α-methyl substituent blocks 6-position (site of CYP3A4 hydroxylation) reducing metabolism',
    explanation: 'Medroxyprogesterone contains 6α-METHYL substituent that BLOCKS 6-POSITION, which is a SITE OF METABOLIC HYDROXYLATION by CYP3A4 (similar to adrenocorticoid metabolism). This steric hindrance REDUCES metabolism → ENHANCES oral bioavailability. Additional benefits: Very little estrogenic activity, NO androgenic activity. Binds 86% to serum albumin, no SHBG binding. Used in both oral formulations and Depo-Provera (IM). This is classic blocking strategy - put a group on site of metabolism to protect from enzymatic attack.',
    learningObjective: 'Understand metabolic blocking strategy',
    difficulty: 'hard',
    slideReference: 'Gonadal Hormones Med Chem - Medroxyprogesterone'
  },
  {
    id: '18',
    question: 'What structural features can enhance the activity of 17α-hydroxyprogesterone derivatives?',
    options: [
      'No modifications enhance activity',
      '6-7 double bond (reduces metabolism), halogen at 6-position, chlorine at C21 (prevents hydroxylation)',
      'Only increasing molecular weight helps',
      'Removing all functional groups'
    ],
    correct_answer: '6-7 double bond (reduces metabolism), halogen at 6-position, chlorine at C21 (prevents hydroxylation)',
    explanation: 'Progestational activity of 17α-hydroxyprogesterones enhanced through: 1) Addition of 6-7 DOUBLE BOND → greatly REDUCES overall metabolism (example: megestrol). 2) Substitution of HALOGEN at 6-position → also effective at blocking metabolism. 3) Substitution of CHLORINE at C21 → PREVENTS metabolic hydroxylation → enhances oral activity. ALL modifications work by BLOCKING SITES OF METABOLISM. This demonstrates systematic SAR principle - identify metabolic soft spots and protect them with resistant groups (double bonds, halogens) or steric hindrance.',
    learningObjective: 'Apply progestin SAR principles',
    difficulty: 'hard',
    slideReference: 'Gonadal Hormones Med Chem - Progestin SAR'
  },
  {
    id: '19',
    question: 'Why was pure testosterone difficult to use clinically and what formulation strategies overcame this?',
    options: [
      'Testosterone causes immediate toxicity',
      'Testosterone not effective orally due to first-pass; overcome with 17β-esters (IM prodrugs), SC pellets, transdermal systems',
      'Testosterone cannot bind to receptors',
      'No formulation strategies exist'
    ],
    correct_answer: 'Testosterone not effective orally due to first-pass; overcome with 17β-esters (IM prodrugs), SC pellets, transdermal systems',
    explanation: 'Pure testosterone: NOT effective ORALLY, very little reaches systemic circulation due to FIRST-PASS METABOLISM. SOLUTIONS: 1) 17β-ESTERS (propionate, enanthate, cypionate) for IM administration → PRODRUGS with slow release over time. 2) SUBCUTANEOUS PELLETS → 3-4 months duration. 3) TRANSDERMAL SYSTEMS → avoid first-pass. For ORAL activity: 17α-METHYLTESTOSTERONE → 17α-alkyl blocks 17β-hydroxyl metabolism (same strategy as ethinyl estradiol). This demonstrates multiple formulation approaches to overcome pharmacokinetic limitations.',
    learningObjective: 'Know testosterone formulation strategies',
    difficulty: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Testosterone Formulations'
  },
  {
    id: '20',
    question: 'What makes fluoxymesterone so much more potent than testosterone, and what is its major drawback?',
    options: [
      'It has no advantage over testosterone',
      '9α-fluoro substituent increases activity 20X anabolic, 10X androgenic; causes unwanted sodium/water retention',
      'It is less potent than testosterone',
      'It has no drawbacks'
    ],
    correct_answer: '9α-fluoro substituent increases activity 20X anabolic, 10X androgenic; causes unwanted sodium/water retention',
    explanation: 'Fluoxymesterone: Incorporation of 9α-FLUORO substituent to active 17α-methyltestosterone (similar modification strategy as fluorinated adrenocorticoids like fludrocortisone). Result: 20X the ANABOLIC activity and 10X the ANDROGENIC activity of testosterone. Extensively metabolized (less than 5% excreted unchanged). MAJOR DRAWBACK: Causes unwanted SODIUM and WATER RETENTION (mineralocorticoid-like effect). This demonstrates fluorination can dramatically increase potency but may introduce unwanted effects - optimization requires balancing efficacy against side effects.',
    learningObjective: 'Understand fluorinated androgen',
    difficulty: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Fluoxymesterone'
  }
];
