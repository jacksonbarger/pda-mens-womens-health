// Professor Virga - Gonadal Hormones Medicinal Chemistry Flashcards
// Topics: Sex Hormone Chemistry, Estrogen/Progestin/Androgen Structures, SAR

import type { FlashCard } from './professorTypes';

export const virgaFlashcards: FlashCard[] = [
  // Sex Hormone Classification and Structure (Cards 1-8)
  {
    id: '1',
    question: 'What are the key structural differences between estrogens, progestins, and androgens?',
    answer: 'ESTROGENS: C18 steroids with AROMATIC A ring (unsaturated) and 3-PHENOLIC HYDROXYL. PROGESTINS: C21 steroids with 3-KETO-4,5-ENE (ene-one) functionality. ANDROGENS: C19 steroids with OXYGENS (hydroxyl or ketone) at positions 3 AND 17. These structural differences determine receptor binding specificity.',
    learningObjective: 'Classify sex hormones by structure',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Classification'
  },
  {
    id: '2',
    question: 'What are the 3 classic estrogens and which is most potent? What makes estradiol most potent?',
    answer: '3 classic estrogens: ESTRONE, 17β-ESTRADIOL (MOST POTENT), ESTRIOL. Estradiol is most potent because it has HIGHEST AFFINITY for estrogen receptor due to optimal hydroxyl positioning at C3 (phenolic) and C17β. The 17β-hydroxyl provides stronger receptor binding than estrone (17-ketone) or estriol (additional 16α-hydroxyl).',
    learningObjective: 'Compare estrogen potency',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Estrogen Potency'
  },
  {
    id: '3',
    question: 'What is the role of aromatase in sex hormone biosynthesis?',
    answer: 'Aromatase (CYP19) is the CRITICAL enzyme that AROMATIZES androgens to estrogens. Converts androstenedione (preferred substrate) or testosterone → estrone or estradiol. Requires 3 molecules of O2 and NADPH. AROMATASE DEFICIENCY = inheritable disorder causing failure of female sexual maturation. This is the key "switch" between androgens and estrogens.',
    learningObjective: 'Understand aromatase function',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Aromatase'
  },
  {
    id: '4',
    question: 'Describe the metabolic pathway of estradiol.',
    answer: 'Estradiol → HYDROXYLATION at ortho-positions (2 and 4) to 3-phenolic OH by estrogen 2/4 hydroxylase → produces CATECHOL estrogens → unstable, rapidly metabolized to O-METHOXY metabolites by COMT → CONJUGATION (sulfate or glucuronide) → excretion. Primary metabolite: 2-hydroxyestradiol. Catechol estrogens have weak estrogenic activity.',
    learningObjective: 'Know estradiol metabolism',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Estrogen Metabolism'
  },
  {
    id: '5',
    question: 'Which estrogen interconversions are reversible and which are not?',
    answer: 'REVERSIBLE (via estradiol dehydrogenase): Estradiol ↔ Estrone, Estriol ↔ 16α-hydroxyestrone. NOT REVERSIBLE (via 16α-hydroxylase): Estradiol → Estriol, Estrone → 16α-hydroxyestrone. Understanding these pathways is important for predicting metabolic fate and designing estrogen therapies.',
    learningObjective: 'Know estrogen interconversions',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Estrogen Interconversion'
  },
  {
    id: '6',
    question: 'Why does estradiol have poor oral bioavailability and how was this solved?',
    answer: 'Estradiol: Poor oral BA due to RAPID OXIDATIVE METABOLISM at 17β-HYDROXYL (converts to estrone) + CONJUGATION. SOLUTION: Add 17α-ETHINYL substituent → ETHINYL ESTRADIOL → BLOCKS 17β oxidation → prevents estrone conversion → 15-20x more potent orally, 40% bioavailable. KEY SAR: 17α-alkyl substituent is necessary for oral activity.',
    learningObjective: 'Understand oral estrogen development',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Ethinyl Estradiol'
  },
  {
    id: '7',
    question: 'What is mestranol and how does it relate to ethinyl estradiol?',
    answer: 'Mestranol is the 3-O-METHYL PRODRUG derivative of ethinyl estradiol. Rapidly metabolized to ethinyl estradiol in the LIVER after oral administration (demethylation). Both used primarily in oral contraceptives. Ethinyl estradiol is 2X MORE POTENT than mestranol because mestranol must first be activated.',
    learningObjective: 'Know ethinyl estradiol prodrug',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Mestranol'
  },
  {
    id: '8',
    question: 'What is the purpose of 17β-esters of estradiol and what are their durations of action?',
    answer: '17β-ESTERS (valerate, cypionate) are PRODRUGS for LONG-TERM estrogenic therapy via IM injection. Dosed as sterile solutions in vegetable oil. ESTRADIOL VALERATE: DoA 14-21 days. ESTRADIOL CYPIONATE: DoA 14-28 days. Design similar to glucocorticoid esters - ester protects from metabolism, slowly hydrolyzed to release active estradiol.',
    learningObjective: 'Know estradiol ester design',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Estradiol Esters'
  },

  // Conjugated Estrogens and SAR (Cards 9-14)
  {
    id: '9',
    question: 'What are conjugated estrogens (Premarin) and what makes them unique?',
    answer: 'Conjugated estrogens are water-soluble metabolites from URINE OF PREGNANT MARES (Premarin = PREgnant MAre uRINe). Mixture of SODIUM SULFATE ESTERS (3-O-esters) primarily of estrone and EQUILIN. UNIQUE: Mares produce EQUILIN and EQUILENIN - NOT FOUND IN HUMANS. Estropipate is similar piperazine estrone sulfate conjugate.',
    learningObjective: 'Understand conjugated estrogen source',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Conjugated Estrogens'
  },
  {
    id: '10',
    question: 'What are the key SAR rules for maintaining estrogen activity?',
    answer: 'Substitutions at C1 greatly REDUCE activity. C2 and C4 can accommodate SMALL substitutions. Removal of EITHER oxygen at C3 or C17 DIMINISHES activity (both required for receptor binding). Epimerization of 17-hydroxyl to 17α diminishes activity (17β is optimal). Enlargement of D-ring to 6-membered ring diminishes activity.',
    learningObjective: 'Apply estrogen SAR',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Estrogen SAR'
  },
  {
    id: '11',
    question: 'What are stilbene derivatives and what is DES?',
    answer: 'Stilbene derivatives are NONSTEROIDAL potent estrogenic agents from plants. DIETHYLSTILBESTROL (DES): Significantly cheaper than natural estrogens. TRANS isomer is more potent than cis. WARNING: Causes neoplasia in offspring if used during pregnancy, linked to uterine cancer. Still used for prostate cancer treatment in men.',
    learningObjective: 'Know nonsteroidal estrogens',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Stilbenes'
  },
  {
    id: '12',
    question: 'What are the three mechanistic classes of estrogen antagonists?',
    answer: '1) IMPEDED ESTROGENS: Weak binding, dissociate rapidly, require high concentrations to competitively inhibit. 2) TRIPHENYLETHYLENE ANTIESTROGENS: Strong persistent binding, cannot translocate to nucleus or bind chromatin properly. 3) AROMATASE INHIBITORS: Block estrogen SYNTHESIS by inhibiting CYP19.',
    learningObjective: 'Classify estrogen antagonists',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Estrogen Antagonists'
  },
  {
    id: '13',
    question: 'How do triphenylethylene antiestrogens work at the molecular level?',
    answer: 'Triphenylethylenes (derived from MER25 + stilbene features) produce VERY STRONG and PERSISTENT BINDING to estrogen receptor. This prevents: 1) Translocation to nucleus, OR 2) If translocation occurs, proper binding to chromatin acceptor site. Examples: Clomiphene, Tamoxifen, Toremifene. Different from impeded estrogens which bind weakly.',
    learningObjective: 'Understand triphenylethylene mechanism',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Triphenylethylenes'
  },
  {
    id: '14',
    question: 'What is unique about clomiphene\'s isomeric structure and how does this affect activity?',
    answer: 'Clomiphene exists as E and Z GEOMETRIC ISOMERS, dosed as RACEMIC MIXTURE. Z-ISOMER: Responsible for ESTROGENIC activity. E-ISOMER: Responsible for ANTIESTROGENIC activity. This creates a PARTIAL AGONIST effect. Binds ER in hypothalamus → blocks negative feedback → increases FSH/LH secretion → induces ovulation. Half-life ~5 days.',
    learningObjective: 'Know clomiphene stereochemistry',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Clomiphene'
  },

  // Tamoxifen, SERMs, and Aromatase Inhibitors (Cards 15-20)
  {
    id: '15',
    question: 'How is tamoxifen metabolized and what is the significance?',
    answer: 'Tamoxifen (Z-isomer): CYP3A4 → rapid DEMETHYLATION (major pathway) to N-desmethyltamoxifen. CYP2D6 → minor metabolite 4-HYDROXYTAMOXIFEN (ACTIVE METABOLITE with greater antiestrogen activity). CLINICAL SIGNIFICANCE: CYP2D6 polymorphisms affect efficacy, CYP2D6 inhibitors reduce therapeutic effect. Prodrug requiring bioactivation.',
    learningObjective: 'Understand tamoxifen metabolism',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Tamoxifen Metabolism'
  },
  {
    id: '16',
    question: 'How does toremifene differ structurally from tamoxifen?',
    answer: 'Toremifene is structurally similar to tamoxifen but has CHLORINE on ethyl side-chain. Chlorine REDUCES antiestrogenic potency compared to tamoxifen. Like tamoxifen, undergoes rapid demethylation by CYP3A4 to N-demethyltoremifene. Used for advanced metastatic breast cancer in postmenopausal women.',
    learningObjective: 'Compare tamoxifen and toremifene',
    emphasis: 'low',
    slideReference: 'Gonadal Hormones Med Chem - Toremifene'
  },
  {
    id: '17',
    question: 'What was the goal in developing SERMs and what was the first one marketed?',
    answer: 'GOAL: Develop more RIGID analogues to eliminate E/Z isomer problem and produce PURE ACTING molecules. First SERM marketed: RALOXIFENE (Evista) - BENZOTHIOPHENE derivative. Estrogenic in bone (osteoporosis), antiestrogenic in breast tissue. Undergoes rapid first-pass metabolism to glucuronide conjugates.',
    learningObjective: 'Understand SERM development rationale',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - SERM Development'
  },
  {
    id: '18',
    question: 'What is the MOA of aromatase inhibitors at the molecular level?',
    answer: 'Nonsteroidal aromatase inhibitors (triazoles) work by: N-4 NITROGEN of AZOLE ring binds with HEME IRON atom of CYP19 (aromatase) complex → PREVENTS O2 BINDING → blocks 3-step oxidation converting androstenedione to estrone. COMPETITIVE inhibition. Examples: Anastrozole (Arimidex), Letrozole (Femara).',
    learningObjective: 'Know aromatase inhibitor MOA',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Aromatase Inhibitor MOA'
  },
  {
    id: '19',
    question: 'Differentiate steroidal vs nonsteroidal aromatase inhibitors.',
    answer: 'STEROIDAL: Exemestane (Aromasin) - substrate analogue, irreversible inhibitor. NONSTEROIDAL TRIAZOLES: Anastrozole (Arimidex), Letrozole (Femara) - competitive inhibitors via heme binding. Both used as 2nd line for breast cancer after tamoxifen failure or 1st line in postmenopausal women. Only work in postmenopausal (no ovarian estrogen).',
    learningObjective: 'Compare aromatase inhibitor types',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Aromatase Inhibitors'
  },
  {
    id: '20',
    question: 'Why was the development of aromatase inhibitors based on aminoglutethimide?',
    answer: 'The triazole nonsteroidal aromatase inhibitors were based on AMINOGLUTETHIMIDE (original aromatase inhibitor). Anastrozole and letrozole are competitive inhibitors with improved selectivity and potency. They selectively inhibit testosterone → estrogen conversion in ALL tissues. Development represents rational drug design improving on lead compound.',
    learningObjective: 'Understand aromatase inhibitor development',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - AI Development'
  },

  // Progestin Chemistry (Cards 21-30)
  {
    id: '21',
    question: 'Why does progesterone have such poor bioavailability and what is its metabolic fate?',
    answer: 'Progesterone: RAPIDLY metabolized by liver following ANY route (half-life 5-10 MINUTES). Primarily excreted as conjugated 5β-PREGNANEDIOL (major metabolite). Minor metabolites: 6α-hydroxylation (CYP3A4 like adrenocorticoids), reduction of 20-ketone to alcohol. This rapid metabolism necessitated development of synthetic progestins.',
    learningObjective: 'Understand progesterone metabolism',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Progesterone Metabolism'
  },
  {
    id: '22',
    question: 'What are the two major structural classes of synthetic progestins?',
    answer: 'PREGNANES: Progesterone and derivatives. Extra METHYL at C6 → blocks metabolic hydroxylation → oral availability. NORANDROSTANES (19-norandrostanes): Testosterone derivatives. Lost METHYL at C19 (19-nor) → DECREASES androgenic activity. GONANES: Replaced C13 methyl with ETHYL → further decreases androgenic activity.',
    learningObjective: 'Classify progestin structures',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Progestin Classes'
  },
  {
    id: '23',
    question: 'What structural modification was critical for developing orally active progestins?',
    answer: 'First orally active: 17α-ACETOXYPROGESTERONE. Critical feature: 17α-ACETOXY ester provides oral bioavailability. Parent 17α-hydroxyprogesterone (nonesterified) has NO oral activity. 17-CAPROATE ester used parenterally with very long DoA. This demonstrates importance of protecting metabolically labile positions.',
    learningObjective: 'Know oral progestin development',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Oral Progestins'
  },
  {
    id: '24',
    question: 'How does medroxyprogesterone acetate enhance oral bioavailability?',
    answer: 'Medroxyprogesterone contains 6α-METHYL substituent that BLOCKS 6-position (site of metabolic hydroxylation by CYP3A4). This reduces metabolism and enhances oral bioavailability. Has very little estrogenic activity and NO androgenic activity. Binds 86% to serum albumin, no SHBG binding. Used in Depo-Provera (IM) and oral formulations.',
    learningObjective: 'Understand medroxyprogesterone SAR',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Medroxyprogesterone'
  },
  {
    id: '25',
    question: 'What structural feature enhances megestrol acetate activity and what is it used for?',
    answer: 'Megestrol: 6-substituted-17α-acetoxyprogesterone with DOUBLE BOND at positions 6-7. This greatly REDUCES overall metabolism, enhancing progestational activity. Primarily used for treatment of BREAST and ENDOMETRIAL CARCINOMA (not contraception). Chlormadinone acetate is similar.',
    learningObjective: 'Know megestrol structure and use',
    emphasis: 'low',
    slideReference: 'Gonadal Hormones Med Chem - Megestrol'
  },
  {
    id: '26',
    question: 'What was the key discovery about the C19 methyl group in developing 19-norandrostanes?',
    answer: 'Ethisterone (first synthetic progestin from testosterone): Discovery revealed C19 METHYL GROUP was UNNECESSARY for progestational activity. 19-NORPROGESTERONE proved 8x MORE ACTIVE than progesterone parenterally. KEY PRINCIPLE: Adding ETHINYL to ANDROGEN converts it to PROGESTIN. 19-nor modification also decreases androgenic activity.',
    learningObjective: 'Understand 19-nor development',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - 19-Nor Discovery'
  },
  {
    id: '27',
    question: 'What are norethindrone and norethynodrel and how are they used?',
    answer: 'Study of 19-nor steroids led to two potent ORALLY ACTIVE progestins: NORETHINDRONE and NORETHYNODREL (commonly acetylated). Most common use: Combined with oral estrogen (ethinyl estradiol or mestranol) as ORAL CONTRACEPTIVE. These were among first successful oral contraceptive progestins.',
    learningObjective: 'Know key oral progestins',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Norethindrone'
  },
  {
    id: '28',
    question: 'Compare the androgenic activity of different oral contraceptive progestins.',
    answer: 'HIGHER ANDROGENIC: Norgestrel, Levonorgestrel (levo, active isomer of racemic norgestrel) - 2nd generation. LOWER ANDROGENIC: Desogestrel, Norgestimate (3rd generation - MUCH HIGHER selectivity for progesterone vs androgen receptors). LEAST POTENT: Norethindrone/norethindrone acetate. Lower androgenic = fewer acne/hirsutism side effects.',
    learningObjective: 'Compare progestin androgenic profiles',
    emphasis: 'high',
    slideReference: 'Gonadal Hormones Med Chem - Progestin Comparison'
  },
  {
    id: '29',
    question: 'What is special about desogestrel metabolism?',
    answer: 'Desogestrel is metabolized to 3-KETODESOGESTREL (ETONOGESTREL), which is the ACTIVE metabolite. Etonogestrel is used in combination with ethinyl estradiol in NUVARING (vaginal ring). Also: Norgestimate is metabolized to active 17-desacetylnorgestimate. Most other oral progestins metabolized to inactive glucuronide/sulfate conjugates.',
    learningObjective: 'Know desogestrel metabolism',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Desogestrel'
  },
  {
    id: '30',
    question: 'What is the key SAR for enhancing 17α-hydroxyprogesterone activity?',
    answer: 'Activity can be enhanced through: 1) Addition of 6-7 DOUBLE BOND (greatly reduces metabolism), 2) Substitution of HALOGEN at 6-position (also effective), 3) Substitution of CHLORINE at C21 (prevents metabolic hydroxylation, enhances oral activity). These modifications all work by blocking sites of metabolism.',
    learningObjective: 'Apply progestin SAR',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Progestin SAR'
  },

  // Progestin Antagonists and Androgens (Cards 31-35)
  {
    id: '31',
    question: 'What is mifepristone (RU-486) chemically and how does it work?',
    answer: 'Mifepristone: Progesterone antagonist that COMPETES for progesterone receptor binding. When used as ABORTIFACIENT: 600mg dose with misoprostol to encourage contractions. By blocking progesterone activity, prevents implantation of fertilized eggs and interrupts early stages of implantation. Terminates >85% of pregnancies in first 7 weeks.',
    learningObjective: 'Understand mifepristone chemistry',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Mifepristone'
  },
  {
    id: '32',
    question: 'What is ulipristal acetate (Ella) and how does it differ from mifepristone?',
    answer: 'Ulipristal: SPRM (Selective Progesterone Receptor Modulator) - partial agonist and antagonist. Similar to mifepristone as antagonist. Also binds androgen receptor (weak antiandrogen). PRIMARY USE: Emergency contraception (30mg) within 120 hours (5 days) of unprotected intercourse. Intended to prevent ovulation but potentially embryotoxic. Also used preop for uterine fibroids.',
    learningObjective: 'Know ulipristal structure and use',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Ulipristal'
  },
  {
    id: '33',
    question: 'Why was pure testosterone difficult to use clinically and how was this overcome?',
    answer: 'Pure testosterone: NOT effective orally, very little reaches systemic circulation due to first-pass metabolism. SOLUTION: Develop ESTERS for IM administration: 17β-propionate, 17β-enanthate, 17β-cypionate. These are PRODRUGS for slow release over time. Also: Subcutaneous pellets (3-4 months) and transdermal systems developed.',
    learningObjective: 'Know testosterone formulation strategies',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Testosterone Derivatives'
  },
  {
    id: '34',
    question: 'How was orally active methyltestosterone developed and what are its properties?',
    answer: 'Strategy: Block metabolism of 17β-hydroxyl by adding 17α-SUBSTITUENT → 17α-METHYLTESTOSTERONE. Most common substituent: METHYL (larger groups reduced activity). ETHINYL substituents produce progestational effects (NOT used for androgens). Provides oral bioavailability and prolonged DoA. Hydroxyl at 4-position also provides good activity.',
    learningObjective: 'Understand oral androgen development',
    emphasis: 'medium',
    slideReference: 'Gonadal Hormones Med Chem - Methyltestosterone'
  },
  {
    id: '35',
    question: 'What is fluoxymesterone and what makes it so potent?',
    answer: 'Fluoxymesterone: Incorporation of 9α-FLUORO substituent to active 17α-methyltestosterone (similar to adrenocorticoids). Has 20X the ANABOLIC activity and 10X the ANDROGENIC activity of testosterone. Extensively metabolized (less than 5% excreted unchanged). DRAWBACK: Causes unwanted sodium and water retention.',
    learningObjective: 'Know fluorinated androgen',
    emphasis: 'low',
    slideReference: 'Gonadal Hormones Med Chem - Fluoxymesterone'
  }
];
