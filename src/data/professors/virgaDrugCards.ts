// Professor Virga Drug Cards - Gonadal Hormones Medicinal Chemistry Focus
// Emphasis on sex hormone structures, SAR, stereochemistry, and metabolism

import type { DrugCard } from './professorTypes';

export const virgaDrugCards: DrugCard[] = [
  // ===== NATURAL ESTROGENS =====
  {
    id: 'estradiol-virga',
    drugName: '17β-Estradiol',
    brandNames: ['Estrace', 'Vivelle-Dot', 'Climara'],
    drugClass: 'Natural Estrogen',
    chemicalClass: 'C18 Steroid',

    chemicalStructure: 'C18 steroid with AROMATIC A ring (unsaturated, phenolic). 3-phenolic hydroxyl (C3-OH). 17β-hydroxyl (C17β-OH). NO C19 methyl group.',

    sar: [
      'C18 steroid = ESTROGEN classification (lost C19 from androgen precursor)',
      'AROMATIC A ring with 3-PHENOLIC OH = ESSENTIAL for estrogenic activity',
      '17β-hydroxyl = MOST POTENT estrogen configuration',
      'Removal of EITHER C3 or C17 oxygen → diminishes activity',
      '17α-epimerization (flip OH to α) → diminishes activity',
      'Most potent natural estrogen (E2 > E1 > E3)'
    ],

    metabolism: 'RAPID metabolism: 17β-hydroxyl oxidized to ESTRONE (E1) by estradiol dehydrogenase. Hydroxylation at 2/4 positions → catechol estrogens → COMT methylation → conjugation → excretion. Poor oral BA (~5%) due to rapid first-pass.',

    moa: 'Binds ERα and ERβ → nuclear translocation → gene transcription',

    medChemFocus: [
      'C18 steroid with AROMATIC A ring = defining structural feature',
      '3-phenolic OH + aromatic A ring = ESSENTIAL (remove either = loss of activity)',
      '17β-hydroxyl = correct stereochemistry for maximal potency',
      'ESTRADIOL ↔ ESTRONE interconversion via estradiol dehydrogenase',
      'Rapid 17β-hydroxyl oxidation = poor oral BA',
      'Catechol formation (2/4-hydroxylation) = major metabolic pathway',
      'Three classic estrogens: E1 (estrone), E2 (17β-estradiol - MOST POTENT), E3 (estriol)'
    ],

    highYield: [
      'C18 steroid, aromatic A ring, 3-phenolic OH',
      '17β-estradiol = most potent natural estrogen',
      'Rapid 17β-OH oxidation to estrone',
      'Poor oral BA due to first-pass metabolism',
      'E2 ↔ E1 interconversion',
      'Catechol metabolites (2/4-OH)'
    ],

    slideReference: 'Virga - Gonadal Hormones - Estrogen Chemistry'
  },

  {
    id: 'estrone-virga',
    drugName: 'Estrone',
    drugClass: 'Natural Estrogen',
    chemicalClass: 'C18 Steroid',

    chemicalStructure: 'C18 steroid with aromatic A ring, 3-phenolic OH, 17-KETONE (not hydroxyl).',

    sar: [
      'C18 aromatic steroid like estradiol',
      '17-KETONE instead of 17β-hydroxyl',
      'Less potent than 17β-estradiol',
      'Interconvertible with estradiol via estradiol dehydrogenase',
      'Major metabolite of estradiol'
    ],

    metabolism: 'Can be reduced to 17β-estradiol (reversible interconversion). Also undergoes hydroxylation and conjugation.',

    moa: 'Estrogen receptor agonist (less potent than estradiol)',

    medChemFocus: [
      '17-KETONE vs 17β-hydroxyl = key structural difference',
      'ESTRADIOL ↔ ESTRONE equilibrium (estradiol dehydrogenase)',
      'Less potent due to ketone (no H-bonding from OH)',
      'Major circulating estrogen in postmenopausal women',
      'Demonstrates SAR: 17β-OH > 17-ketone for potency'
    ],

    highYield: [
      '17-ketone (vs estradiol 17β-OH)',
      'Less potent than estradiol',
      'Interconvertible with estradiol',
      'Major estradiol metabolite',
      'Postmenopausal: predominant estrogen'
    ],

    slideReference: 'Virga - Gonadal Hormones - Estrogen Metabolism'
  },

  {
    id: 'estriol-virga',
    drugName: 'Estriol',
    drugClass: 'Natural Estrogen',
    chemicalClass: 'C18 Steroid',

    chemicalStructure: 'C18 aromatic steroid with 3-phenolic OH, 16α-OH, 17β-OH. THREE hydroxyl groups.',

    sar: [
      'Three hydroxyl groups (3, 16α, 17β)',
      'LEAST potent natural estrogen',
      'Additional 16α-OH reduces receptor binding affinity',
      'More polar (3 OH groups) = faster excretion'
    ],

    metabolism: 'Rapidly metabolized and excreted due to high polarity. Mainly conjugated and excreted.',

    moa: 'Weak estrogen receptor agonist',

    medChemFocus: [
      'THREE hydroxyl groups = most polar estrogen',
      'LEAST potent (E2 > E1 > E3)',
      'Additional 16α-OH decreases receptor binding',
      'Polarity principle: more OH = faster excretion',
      'Major pregnancy estrogen'
    ],

    highYield: [
      'Three OH groups (3, 16α, 17β)',
      'Least potent natural estrogen',
      'Highly polar = rapid excretion',
      'Pregnancy estrogen',
      'Potency: E2 > E1 > E3'
    ],

    slideReference: 'Virga - Gonadal Hormones - Estrogen Chemistry'
  },

  {
    id: 'conjugated-estrogens-virga',
    drugName: 'Conjugated Estrogens',
    brandNames: ['Premarin'],
    drugClass: 'Mixed Estrogens',
    chemicalClass: 'Estrogen Mixture',

    chemicalStructure: 'Mixture of estrogen sulfates from pregnant MARE urine. Contains EQUILIN and EQUILENIN (non-human estrogens with unsaturated B ring).',

    sar: [
      'Contains human estrogens (estrone, estradiol) + EQUINE estrogens',
      'EQUILIN: additional C7-C8 double bond in B ring',
      'EQUILENIN: fully aromatic B ring (two fused aromatic rings)',
      'Sulfate conjugates (prodrugs requiring hydrolysis)',
      'Non-human structures have different receptor binding profiles'
    ],

    metabolism: 'Sulfates hydrolyzed to free estrogens. Then metabolized like endogenous estrogens.',

    prodrug: 'Sulfate conjugates (prodrugs) must be hydrolyzed to active free estrogens.',

    medChemFocus: [
      'From pregnant MARE urine (unique source)',
      'Contains NON-HUMAN estrogens (EQUILIN, EQUILENIN)',
      'B-ring unsaturation in equine estrogens',
      'Sulfate conjugates = prodrug forms',
      'Historical significance: first widely used HRT',
      'Equilenin: aromatic B ring (unique structure)'
    ],

    highYield: [
      'Pregnant mare urine source',
      'Contains equilin and equilenin (non-human)',
      'B-ring unsaturation in equine estrogens',
      'Sulfate conjugates (prodrugs)',
      'Most studied in WHI trial'
    ],

    slideReference: 'Virga - Gonadal Hormones - Conjugated Estrogens'
  },

  // ===== SYNTHETIC ESTROGENS =====
  {
    id: 'ethinyl-estradiol-virga',
    drugName: 'Ethinyl Estradiol',
    drugClass: 'Synthetic Estrogen',
    chemicalClass: 'C18 Steroid',

    chemicalStructure: '17β-estradiol with 17α-ETHINYL group. C18 aromatic steroid with 3-phenolic OH, 17β-OH, and 17α-ETHINYL.',

    sar: [
      '17α-ETHINYL group = KEY modification',
      'BLOCKS 17β-hydroxyl oxidation to estrone',
      '17α-alkyl substituent prevents metabolism',
      'Enables ORAL bioavailability (40% vs <5% for estradiol)',
      '15-20x more potent orally than estradiol',
      'ALL oral estrogens have 17α-alkyl modification'
    ],

    metabolism: 'CYP3A4 hydroxylation (much slower than estradiol). 17α-ethinyl protects from rapid oxidation. Also sulfation/glucuronidation.',

    moa: 'Estrogen receptor agonist with enhanced oral bioavailability',

    medChemFocus: [
      '17α-ETHINYL = classic METABOLIC BLOCKING strategy',
      'Blocks 17β-oxidation metabolic soft spot',
      'NECESSARY for ALL oral estrogens',
      'Structure-metabolism relationship: alkyne blocks oxidation',
      'Ethisterone observation → ethynyl on steroids blocks metabolism',
      'Oral BA: 40% (vs <5% estradiol)',
      'Standard estrogen in oral contraceptives'
    ],

    highYield: [
      '17α-ethinyl blocks metabolism',
      '15-20x more potent orally',
      'Required for oral activity',
      '40% oral bioavailability',
      'In all oral contraceptives',
      'Classic metabolic blocking example'
    ],

    slideReference: 'Virga - Gonadal Hormones - Synthetic Estrogen Development'
  },

  {
    id: 'mestranol-virga',
    drugName: 'Mestranol',
    drugClass: 'Synthetic Estrogen Prodrug',
    chemicalClass: 'C18 Steroid',

    chemicalStructure: 'Ethinyl estradiol with 3-O-METHYL group. Methyl ether at phenolic position.',

    sar: [
      '3-O-methyl PRODRUG of ethinyl estradiol',
      'Phenolic OH masked by methylation',
      'Requires O-demethylation for activity',
      'Prodrug demonstrates SAR: C3 phenolic OH required for activity'
    ],

    metabolism: 'Hepatic O-DEMETHYLATION → ethinyl estradiol (active). Then metabolized like ethinyl estradiol.',

    prodrug: '3-O-methyl PRODRUG of ethinyl estradiol. Must be demethylated by hepatic enzymes.',

    moa: 'Inactive until converted to ethinyl estradiol',

    medChemFocus: [
      '3-O-METHYL PRODRUG strategy',
      'Masks phenolic OH (required for activity)',
      'Requires hepatic O-DEMETHYLASE',
      'Confirms SAR: 3-phenolic OH essential',
      'Prodrug approach alters physicochemical properties',
      'Less potent due to required conversion step'
    ],

    highYield: [
      '3-O-methyl prodrug of EE',
      'Phenolic OH must be unmasked',
      'O-demethylation required',
      'Demonstrates importance of C3-OH',
      'Less potent than ethinyl estradiol'
    ],

    slideReference: 'Virga - Gonadal Hormones - Mestranol'
  },

  {
    id: 'estradiol-esters-virga',
    drugName: 'Estradiol Valerate / Cypionate',
    brandNames: ['Delestrogen (valerate)', 'Depo-Estradiol (cypionate)'],
    drugClass: 'Estrogen Prodrug (Long-acting)',
    chemicalClass: 'C18 Steroid Ester',

    chemicalStructure: 'Estradiol esterified at 17β-hydroxyl. Valerate = pentanoate ester. Cypionate = cyclopentylpropionate ester.',

    sar: [
      '17β-ESTERS mask hydroxyl group',
      'Increased lipophilicity enables IM depot',
      'Slower hydrolysis = prolonged duration',
      'Longer fatty acid chain = longer duration',
      'Cypionate longer than valerate'
    ],

    metabolism: 'Esterases slowly hydrolyze ester → release free estradiol. Duration: 14-28 days.',

    prodrug: 'ESTER PRODRUGS for long-acting IM administration. Esterases release active estradiol.',

    moa: 'Inactive until ester hydrolyzed to release estradiol',

    medChemFocus: [
      '17β-ESTER prodrug strategy',
      'Increased LIPOPHILICITY → IM depot formation',
      'Slow ester HYDROLYSIS → sustained release',
      'Chain length affects duration (longer = slower hydrolysis)',
      'Prodrug enables different route and duration',
      'Demonstrates prodrug strategy for PK modification'
    ],

    highYield: [
      '17β-esters for long-acting IM use',
      'Esterases release estradiol',
      'Duration: 2-4 weeks',
      'Increased lipophilicity for depot',
      'Cypionate > valerate duration',
      'Classic prodrug strategy'
    ],

    slideReference: 'Virga - Gonadal Hormones - Estradiol Esters'
  },

  {
    id: 'diethylstilbestrol-virga',
    drugName: 'Diethylstilbestrol (DES)',
    drugClass: 'Nonsteroidal Estrogen',
    chemicalClass: 'Stilbene',

    chemicalStructure: 'NONSTEROIDAL. Two phenol rings connected by ethylene with ethyl substituents. TRANS configuration. NO steroid rings.',

    sar: [
      'NONSTEROIDAL structure (no steroid rings)',
      'STILBENE: diphenyl ethylene core',
      'Two phenolic OH groups mimic estradiol C3 and C17 OH',
      'TRANS isomer MORE POTENT than cis',
      'Spatial arrangement mimics steroidal estrogens despite different structure',
      'Demonstrates pharmacophore: two phenolic OH with specific spacing'
    ],

    metabolism: 'Hepatic metabolism, various conjugations',

    moa: 'Estrogen receptor agonist despite nonsteroidal structure',

    medChemFocus: [
      'NONSTEROIDAL ESTROGEN (no steroid rings)',
      'STILBENE structure (diphenyl ethylene)',
      'Two phenolic OH mimic estradiol',
      'TRANS > cis isomer (stereochemistry matters)',
      'Pharmacophore: spatial arrangement of phenolic OHs',
      'Historical: linked to vaginal adenocarcinoma in daughters',
      'Demonstrates non-steroid can have steroid activity'
    ],

    highYield: [
      'Nonsteroidal estrogen (stilbene)',
      'Two phenolic OH groups',
      'Trans isomer more potent',
      'Mimics estradiol despite different scaffold',
      'Teratogenic (vaginal cancer in offspring)',
      'Pharmacophore concept'
    ],

    slideReference: 'Virga - Gonadal Hormones - Nonsteroidal Estrogens'
  },

  // ===== ESTROGEN ANTAGONISTS / SERMs =====
  {
    id: 'tamoxifen-virga',
    drugName: 'Tamoxifen',
    brandNames: ['Nolvadex'],
    drugClass: 'SERM',
    chemicalClass: 'Triphenylethylene',

    chemicalStructure: 'TRIPHENYLETHYLENE: three phenyl rings on ethylene core. Dimethylaminoethoxy side chain. E/Z isomerism possible.',

    sar: [
      'Three bulky phenyl rings prevent full receptor agonist conformation',
      'Persistent ER binding but cannot translocate to nucleus',
      'Bulky structure = ANTAGONIST in breast, partial agonist in bone/uterus',
      'E/Z isomerism: trans (E) form more active',
      'Basic amine side chain required for binding'
    ],

    metabolism: 'CYP3A4 → N-DEMETHYLATION. CYP2D6 → 4-HYDROXYTAMOXIFEN (100x more potent, ACTIVE). CYP2D6 polymorphisms clinically significant.',

    prodrug: 'PRODRUG requiring CYP2D6 metabolism to 4-hydroxytamoxifen (much higher affinity).',

    moa: 'SERM: strong persistent ER binding without nuclear translocation → breast antagonism',

    medChemFocus: [
      'TRIPHENYLETHYLENE structure',
      'Three phenyl rings = antagonist (too bulky for full agonism)',
      'PRODRUG: CYP2D6 → 4-hydroxytamoxifen (100x binding affinity)',
      'Persistent binding mechanism (different from competitive)',
      'CYP2D6 poor metabolizers have reduced efficacy',
      'Avoid CYP2D6 inhibitors (especially paroxetine, fluoxetine)',
      'SERM: tissue-selective effects (antagonist breast, partial agonist uterus)'
    ],

    highYield: [
      'Triphenylethylene chemical class',
      'Prodrug requiring CYP2D6',
      '4-hydroxytamoxifen 100x more potent',
      'Persistent ER binding',
      'CYP2D6 polymorphisms matter',
      'Avoid strong CYP2D6 inhibitors'
    ],

    slideReference: 'Virga - Gonadal Hormones - Tamoxifen'
  },

  {
    id: 'clomiphene-virga',
    drugName: 'Clomiphene',
    brandNames: ['Clomid'],
    drugClass: 'SERM',
    chemicalClass: 'Triphenylethylene',

    chemicalStructure: 'Triphenylethylene with chlorinated phenyl ring. E/Z GEOMETRIC ISOMERS with different activities.',

    sar: [
      'Triphenylethylene like tamoxifen',
      'E/Z isomerism creates different activities',
      'Z-isomer (cis): ESTROGENIC',
      'E-isomer (trans): ANTIESTROGENIC',
      'Dosed as RACEMIC mixture = partial agonist',
      'Chlorine substituent affects properties'
    ],

    metabolism: 'Hepatic metabolism. Long half-life allows accumulation.',

    moa: 'SERM: hypothalamic antagonist → blocks negative feedback → increases FSH/LH',

    medChemFocus: [
      'GEOMETRIC ISOMERS (E/Z) with OPPOSITE activities',
      'Z-isomer = ESTROGENIC, E-isomer = ANTIESTROGENIC',
      'Racemic mixture = PARTIAL AGONIST',
      'Stereochemistry determines activity',
      'Demonstrates isomerism significance in drug activity',
      'Triphenylethylene scaffold like tamoxifen',
      'Chlorine substituent distinguishes from tamoxifen'
    ],

    highYield: [
      'E and Z isomers with opposite effects',
      'Z = estrogenic, E = antiestrogenic',
      'Racemic mixture = partial agonist',
      'Stereochemistry critical',
      'Triphenylethylene class',
      'Ovulation induction'
    ],

    slideReference: 'Virga - Gonadal Hormones - Clomiphene Stereochemistry'
  },

  // ===== AROMATASE INHIBITORS =====
  {
    id: 'anastrozole-virga',
    drugName: 'Anastrozole',
    brandNames: ['Arimidex'],
    drugClass: 'Aromatase Inhibitor',
    chemicalClass: 'Nonsteroidal Triazole',

    chemicalStructure: 'Two 1,2,4-TRIAZOLE rings connected by dimethylmethylene bridge. Each triazole has three nitrogens in 5-membered ring.',

    sar: [
      'TRIAZOLE N-4 coordinates to HEME IRON of aromatase (CYP19)',
      'Coordination prevents O2 binding to catalytic site',
      'Two triazole rings improve potency',
      'NONSTEROIDAL (does not mimic substrate)',
      'REVERSIBLE binding (unlike exemestane)'
    ],

    metabolism: 'Hepatic metabolism, mostly N-dealkylation',

    moa: 'Triazole coordinates heme iron → prevents O2 binding → blocks aromatase catalysis',

    medChemFocus: [
      'TRIAZOLE N binds HEME IRON (coordination chemistry)',
      'Prevents O2 binding to catalytic site',
      'MECHANISM-BASED inhibition at heme',
      'REVERSIBLE (vs exemestane irreversible)',
      'NONSTEROIDAL (vs exemestane steroidal)',
      'Two triazole rings enhance binding',
      'All azole antifungals use same heme-binding mechanism'
    ],

    highYield: [
      'Nonsteroidal triazole',
      'Azole N binds heme iron',
      'Prevents O2 binding',
      'Reversible inhibition',
      'Two triazole rings',
      'Postmenopausal only'
    ],

    slideReference: 'Virga - Gonadal Hormones - Aromatase Inhibitors'
  },

  {
    id: 'letrozole-virga',
    drugName: 'Letrozole',
    brandNames: ['Femara'],
    drugClass: 'Aromatase Inhibitor',
    chemicalClass: 'Nonsteroidal Triazole',

    chemicalStructure: 'Benzonitrile with two triazole substituents. Similar mechanism to anastrozole.',

    sar: [
      'Triazole rings bind heme like anastrozole',
      'More potent than anastrozole',
      'Benzonitrile core vs anastrozole structure',
      'Same heme-binding mechanism'
    ],

    metabolism: 'Hepatic metabolism',

    moa: 'Heme iron coordination → blocks aromatase',

    medChemFocus: [
      'More POTENT than anastrozole',
      'Same triazole-heme binding mechanism',
      'Nonsteroidal, reversible',
      'Benzonitrile core structure',
      'OFF-LABEL: better than clomiphene for PCOS ovulation induction'
    ],

    highYield: [
      'More potent than anastrozole',
      'Same mechanism (heme binding)',
      'Nonsteroidal triazole',
      'Reversible',
      'Off-label for ovulation induction'
    ],

    slideReference: 'Virga - Gonadal Hormones - Aromatase Inhibitors'
  },

  {
    id: 'exemestane-virga',
    drugName: 'Exemestane',
    brandNames: ['Aromasin'],
    drugClass: 'Aromatase Inhibitor',
    chemicalClass: 'Steroidal',

    chemicalStructure: 'STEROIDAL (androgen-like). 6-methylene group. Mimics androstene-dione (androgen substrate).',

    sar: [
      'STEROIDAL = mimics androgen SUBSTRATE',
      'Binds aromatase as substrate analog',
      'IRREVERSIBLE (SUICIDE) inhibitor',
      '6-methylene = reactive group for covalent attachment',
      'Mechanism-based inactivation requires catalytic turnover'
    ],

    metabolism: 'CYP3A4',

    moa: 'Substrate analog → binds aromatase → mechanism-based covalent inactivation → IRREVERSIBLE',

    medChemFocus: [
      'STEROIDAL (vs triazoles nonsteroidal)',
      'SUBSTRATE ANALOG approach',
      'IRREVERSIBLE (SUICIDE) inhibitor',
      '6-methylene = reactive functionality',
      'Requires enzyme catalytic turnover for inactivation',
      'Covalent modification of enzyme',
      'Different mechanism from triazole AIs'
    ],

    highYield: [
      'Steroidal aromatase inhibitor',
      'Irreversible (suicide) mechanism',
      'Substrate analog',
      '6-methylene reactive group',
      'Different from triazole AIs',
      'Requires catalytic turnover'
    ],

    slideReference: 'Virga - Gonadal Hormones - Aromatase Inhibitors'
  },

  // ===== PROGESTINS =====
  {
    id: 'progesterone-virga',
    drugName: 'Progesterone',
    drugClass: 'Natural Progestin',
    chemicalClass: 'C21 Steroid (Pregnane)',

    chemicalStructure: 'C21 steroid with 3-KETO-4,5-ENE (ene-one) functionality. Characteristic pregnane structure.',

    sar: [
      'C21 steroid = PROGESTIN classification',
      '3-KETO-4,5-ENE = characteristic ene-one system',
      'Similar to adrenocorticoids (also C21)',
      'No modifications = rapid metabolism'
    ],

    metabolism: 'EXTREMELY RAPID metabolism (t1/2 5-10 MINUTES). Reduced to 5β-pregnanediol → conjugated → excreted. Poor oral BA.',

    moa: 'Progesterone receptor agonist',

    medChemFocus: [
      'C21 steroid with 3-KETO-4,5-ENE',
      'RAPID metabolism (t1/2 5-10 min) necessitates synthetic progestins',
      'Reduced at 3-keto and 4,5-ene = metabolic soft spots',
      'Excreted as 5β-pregnanediol conjugate',
      'Poor oral BA due to extensive first-pass',
      'Template for synthetic progestin development'
    ],

    highYield: [
      'C21 steroid, 3-keto-4,5-ene',
      'Extremely short t1/2 (5-10 min)',
      'Rapid metabolism = need for synthetics',
      'Natural progestin',
      'Poor oral bioavailability'
    ],

    slideReference: 'Virga - Gonadal Hormones - Progesterone'
  },

  {
    id: 'medroxyprogesterone-virga',
    drugName: 'Medroxyprogesterone Acetate',
    brandNames: ['Provera', 'Depo-Provera'],
    drugClass: 'Synthetic Progestin',
    chemicalClass: 'Pregnane (C21)',

    chemicalStructure: 'Progesterone with 6α-METHYL and 17α-acetoxy groups. C21 pregnane structure.',

    sar: [
      'PREGNANE class (from progesterone)',
      '6α-METHYL blocks metabolism at this position',
      '17α-acetoxy provides oral activity',
      'C6 methyl prevents reduction',
      'NO androgenic activity (pure progestin)'
    ],

    metabolism: 'Slower than progesterone due to 6α-methyl. Depo form provides 3-month duration.',

    moa: 'Progesterone receptor agonist',

    medChemFocus: [
      'PREGNANE class (C21 from progesterone)',
      '6α-METHYL = METABOLIC BLOCKING (prevents C6 reduction)',
      '17α-acetoxy for oral availability',
      'No androgenic activity (vs 19-nor progestins)',
      'Structural modifications enable oral use and longer duration',
      'Depot IM formulation: 3-month duration'
    ],

    highYield: [
      'Pregnane with 6α-methyl',
      '6α-methyl blocks metabolism',
      'No androgenic activity',
      'Depo: 3-month duration',
      'C21 structure',
      'Metabolic blocking strategy'
    ],

    slideReference: 'Virga - Gonadal Hormones - Pregnane Progestins'
  },

  {
    id: 'levonorgestrel-virga',
    drugName: 'Levonorgestrel',
    brandNames: ['Plan B', 'Mirena'],
    drugClass: 'Synthetic Progestin',
    chemicalClass: '19-Norandrostane (C19)',

    chemicalStructure: 'C19 steroid lacking C19 METHYL. 17α-ETHINYL group. Derived from TESTOSTERONE.',

    sar: [
      '19-NOR: Loss of C19 METHYL decreases androgenic activity',
      '17α-ETHINYL on androgen converts to PROGESTIN',
      'Testosterone origin = more androgenic than pregnanes',
      '2nd generation = HIGH androgenic activity',
      '13-ethyl from testosterone'
    ],

    metabolism: '17α-ethinyl protects from metabolism. Hepatic metabolism.',

    moa: 'Progesterone receptor agonist with some androgenic activity',

    medChemFocus: [
      '19-NORANDROSTANE (from testosterone)',
      'Loss of C19 METHYL → DECREASED androgenic activity',
      '17α-ETHINYL converts ANDROGEN → PROGESTIN (counterintuitive)',
      'MOST ANDROGENIC progestin (2nd generation)',
      'Testosterone derivation explains residual AR activity',
      'SAR principle: small structural change (loss of methyl) changes activity profile',
      '17α-ethinyl enables oral use (blocks metabolism)'
    ],

    highYield: [
      '19-norandrostane (from testosterone)',
      'Loss of C19 methyl',
      'Most androgenic progestin',
      '17α-ethinyl blocks metabolism',
      '2nd generation',
      'Plan B = emergency contraception'
    ],

    slideReference: 'Virga - Gonadal Hormones - 19-Norandrostane Progestins'
  },

  {
    id: 'desogestrel-virga',
    drugName: 'Desogestrel',
    brandNames: ['Desogen', 'Mircette'],
    drugClass: 'Synthetic Progestin',
    chemicalClass: '19-Norandrostane (C19)',

    chemicalStructure: '19-norandrostane with 17α-ethinyl and additional modifications (11-methylene, 3-keto). 3rd generation.',

    sar: [
      '19-Norandrostane base',
      'Further modifications reduce androgenic activity',
      '11-methylene group',
      'Delta-9,11 modification',
      'LOWER androgenic activity than levonorgestrel'
    ],

    metabolism: 'PRODRUG → 3-KETO-DESOGESTREL (ETONOGESTREL) = active metabolite.',

    prodrug: 'PRODRUG of ETONOGESTREL (3-keto-desogestrel). Active metabolite used in NuvaRing and Nexplanon.',

    moa: 'Progesterone receptor agonist with minimal androgenic activity',

    medChemFocus: [
      '3rd GENERATION 19-norandrostane',
      'PRODRUG → ETONOGESTREL (active)',
      'Structural modifications reduce androgenic activity vs 2nd gen',
      '11-methylene key structural feature',
      'Etonogestrel: active metabolite in long-acting formulations',
      'Structure-activity: progressive modifications reduce AR binding',
      'Trade-off: better side effects but possibly higher VTE'
    ],

    highYield: [
      '3rd generation 19-norandrostane',
      'Prodrug of etonogestrel',
      'Lower androgenic activity',
      'Etonogestrel in NuvaRing/Nexplanon',
      'Better androgenic profile than 2nd gen',
      '11-methylene group'
    ],

    slideReference: 'Virga - Gonadal Hormones - 3rd Generation Progestins'
  },

  {
    id: 'norethindrone-virga',
    drugName: 'Norethindrone',
    brandNames: ['Aygestin', 'Camila'],
    drugClass: 'Synthetic Progestin',
    chemicalClass: '19-Norandrostane (C19)',

    chemicalStructure: '19-norandrostane with 17α-ethinyl. LEAST androgenic of testosterone-derived progestins.',

    sar: [
      '19-Norandrostane (1st generation)',
      'Lacks 13-ethyl group (vs levonorgestrel)',
      'LEAST androgenic 19-nor progestin',
      '17α-ethinyl for oral activity'
    ],

    metabolism: '17α-ethinyl protects from metabolism',

    moa: 'Progesterone receptor agonist',

    medChemFocus: [
      'LEAST androgenic 19-norandrostane',
      'First 19-nor progestin developed',
      'Lacks 13-ethyl (vs levonorgestrel)',
      'Androgenic activity ranking: levonorgestrel > norgestimate > norethindrone',
      '17α-ethinyl enables oral use',
      'Can be used progestin-only (mini-pill)'
    ],

    highYield: [
      'Least androgenic 19-nor',
      '1st generation',
      'No 13-ethyl group',
      'Lower androgenic effects',
      'Progestin-only option',
      '19-norandrostane base'
    ],

    slideReference: 'Virga - Gonadal Hormones - Progestin Androgenic Activity'
  },

  // ===== PROGESTERONE ANTAGONISTS =====
  {
    id: 'mifepristone-virga',
    drugName: 'Mifepristone',
    brandNames: ['Mifeprex'],
    drugClass: 'Progesterone Antagonist',
    chemicalClass: 'C19 Steroid',

    chemicalStructure: 'Modified 19-nor steroid with 11β-dimethylaminophenyl substituent. Dimethylamino phenyl group provides antagonism.',

    sar: [
      '19-Nor steroid base',
      '11β-dimethylaminophenyl = KEY for antagonism',
      'Bulky 11β-substituent creates antagonist conformation',
      'Also weak glucocorticoid antagonist',
      'Triphenylethylene-like bulk at 11β position'
    ],

    metabolism: 'CYP3A4',

    moa: 'Progesterone receptor ANTAGONIST + weak glucocorticoid antagonist',

    medChemFocus: [
      '11β-DIMETHYLAMINOPHENYL = critical for ANTAGONISM',
      'Bulky substituent prevents agonist receptor conformation',
      'SAR: bulk at 11β → antagonism',
      '19-nor base but NOT progestogenic',
      'Dual activity: PR antagonist + GR antagonist',
      'Abortifacient: blocks progesterone needed for pregnancy'
    ],

    highYield: [
      'Progesterone antagonist',
      '11β-dimethylaminophenyl key',
      'Bulky group = antagonism',
      'Also weak GR antagonist',
      'Abortifacient (600mg + misoprostol)',
      '19-nor base structure'
    ],

    slideReference: 'Virga - Gonadal Hormones - Mifepristone'
  },

  {
    id: 'ulipristal-virga',
    drugName: 'Ulipristal Acetate',
    brandNames: ['Ella'],
    drugClass: 'SPRM (Selective Progesterone Receptor Modulator)',
    chemicalClass: 'C19 Steroid',

    chemicalStructure: 'Similar to mifepristone but with dimethylacetamido group at 11β. Modified 19-nor steroid.',

    sar: [
      'Similar to mifepristone structure',
      '11β-substituted = antagonist/partial agonist',
      'SPRM: tissue-selective effects',
      'Acetamido vs aminophenyl (mifepristone)'
    ],

    metabolism: 'CYP3A4',

    moa: 'SPRM: progesterone receptor antagonist/partial agonist → delays ovulation',

    medChemFocus: [
      'SPRM (selective progesterone receptor modulator)',
      'Similar structure to mifepristone',
      '11β-dimethylacetamido group',
      'Partial agonist/antagonist activity',
      'More effective than levonorgestrel for emergency contraception',
      'Active within 120 HOURS (5 days)'
    ],

    highYield: [
      'SPRM structure',
      'Similar to mifepristone',
      '11β-substituted',
      'Emergency contraception (120 hours)',
      'More effective than Plan B',
      'Requires prescription'
    ],

    slideReference: 'Virga - Gonadal Hormones - Ulipristal'
  }
];
