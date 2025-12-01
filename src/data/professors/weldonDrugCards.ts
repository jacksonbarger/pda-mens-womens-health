// Professor Weldon Drug Cards - Medicinal Chemistry Focus
// Emphasis on chemical structures, SAR, metabolism, and drug design principles

import type { DrugCard } from './professorTypes';

export const weldonDrugCards: DrugCard[] = [
  // ===== ALPHA-1 ANTAGONISTS (BPH) =====
  {
    id: 'tamsulosin-chem',
    drugName: 'Tamsulosin',
    brandNames: ['Flomax'],
    drugClass: 'Alpha-1A Selective Antagonist',
    chemicalClass: 'Quinazoline',

    chemicalStructure: 'Quinazoline core with sulfonamide substituent. Contains sulfamoyl group that contributes to alpha-1A selectivity.',

    sar: [
      'Quinazoline ring system = characteristic of alpha-1 antagonists',
      'Sulfonamide group enhances alpha-1A selectivity over alpha-1B',
      'Alpha-1A selectivity (prostate) > alpha-1B (vasculature) → reduces CV side effects',
      'All alpha-1 antagonists share quinazoline core with "-azosin" suffix'
    ],

    metabolism: 'Extensively metabolized by CYP3A4 and CYP2D6. No dose adjustment needed for mild-moderate renal/hepatic impairment.',

    moa: 'Competitive antagonist at alpha-1A receptors → smooth muscle relaxation',

    medChemFocus: [
      'QUINAZOLINE chemical class (recognize this structure)',
      '"-azosin" suffix indicates alpha-1 antagonist',
      'Sulfonamide contributes to ALPHA-1A SELECTIVITY',
      'Selectivity = 30x for alpha-1A vs alpha-1B (key distinguishing feature)',
      'Structure-selectivity relationship: modifications around quinazoline core determine receptor subtype selectivity'
    ],

    highYield: [
      'Quinazoline + sulfonamide = alpha-1A selective',
      'Alpha-1A selectivity reduces cardiovascular side effects',
      'All "-azosin" drugs share quinazoline core',
      'Structural modifications determine receptor subtype selectivity'
    ],

    slideReference: 'Weldon - BPH Med Chem - Alpha-1 Antagonists'
  },

  // ===== 5-ALPHA-REDUCTASE INHIBITORS =====
  {
    id: 'finasteride-chem',
    drugName: 'Finasteride',
    brandNames: ['Proscar', 'Propecia'],
    drugClass: '5-Alpha-Reductase Inhibitor',
    chemicalClass: 'Steroidal (Azasteroid)',

    chemicalStructure: 'STEROIDAL structure (4-azasteroid). Nitrogen at position 4 of A ring (instead of carbon). C=C double bond at 3-4 position. Lacks 19-methyl group.',

    sar: [
      'STEROIDAL structure mimics testosterone (substrate)',
      'Nitrogen at position 4 (azasteroid) is KEY for inhibition',
      'Loss of C19 methyl group enhances selectivity',
      'C3-C4 double bond required for mechanism-based inhibition',
      'Type 2 selectivity: 30x more selective for 5-AR type 2 vs type 1'
    ],

    metabolism: 'Hepatic metabolism via CYP3A4. Two active metabolites but less potent than parent. Long half-life (~6 hours).',

    moa: 'Mechanism-based (suicide) inhibitor of 5-alpha-reductase type 2 → prevents testosterone → DHT conversion',

    medChemFocus: [
      'STEROIDAL structure (recognize as steroid)',
      'AZASTEROID: nitrogen at position 4 is critical for inhibition',
      'Type 2 SELECTIVE (30x) - important distinction from dutasteride',
      'Mechanism-based inhibitor (forms irreversible complex)',
      'Loss of 19-methyl group distinguishes from testosterone',
      'Structure mimics substrate (testosterone) for competitive inhibition'
    ],

    highYield: [
      'Steroidal (azasteroid) structure',
      'Nitrogen at position 4 = key feature',
      'Type 2 selective (30x)',
      'Both finasteride and dutasteride are STEROIDAL',
      'Mechanism-based inhibitor'
    ],

    slideReference: 'Weldon - BPH Med Chem - 5-Alpha-Reductase Inhibitors'
  },

  {
    id: 'dutasteride-chem',
    drugName: 'Dutasteride',
    brandNames: ['Avodart'],
    drugClass: '5-Alpha-Reductase Inhibitor',
    chemicalClass: 'Steroidal (Azasteroid)',

    chemicalStructure: 'STEROIDAL (4-azasteroid) like finasteride but with additional fluorine substituents. Contains CF3 groups that enhance binding to both isoforms.',

    sar: [
      'STEROIDAL structure (azasteroid)',
      'Trifluoromethyl (CF3) groups enhance potency and dual inhibition',
      'Inhibits BOTH type 1 and type 2 isoforms',
      'Type 2: 10x more potent than finasteride',
      'Type 1: also inhibited (finasteride does not)',
      'Structural modifications (fluorine) provide dual selectivity'
    ],

    metabolism: 'Hepatic metabolism via CYP3A4. VERY long half-life (~5 weeks) due to high lipophilicity.',

    moa: 'Dual inhibitor of 5-alpha-reductase type 1 and type 2 → more complete DHT suppression',

    medChemFocus: [
      'STEROIDAL (azasteroid) like finasteride',
      'CF3 groups = key structural difference enabling DUAL inhibition',
      'DUAL inhibitor (type 1 + type 2) vs finasteride (type 2 only)',
      'More potent for type 2 (10x) AND inhibits type 1',
      'Very long t1/2 (5 weeks) due to high lipophilicity',
      'Fluorine substitution improves potency and selectivity profile'
    ],

    highYield: [
      'Steroidal with CF3 groups',
      'DUAL inhibitor (type 1 + type 2)',
      'More potent than finasteride at type 2',
      'Very long half-life (5 weeks)',
      'Both 5-ARIs are STEROIDAL'
    ],

    slideReference: 'Weldon - BPH Med Chem - 5-Alpha-Reductase Inhibitors'
  },

  // ===== PDE5 INHIBITORS =====
  {
    id: 'sildenafil-chem',
    drugName: 'Sildenafil',
    brandNames: ['Viagra', 'Revatio'],
    drugClass: 'PDE5 Inhibitor',
    chemicalClass: 'Pyrazolopyrimidinone',

    chemicalStructure: 'PYRAZOLOPYRIMIDINONE core (fused ring system). GUANINE-based structure (mimics cGMP). Sulfonamide group attached to phenyl ring (for water solubility). Piperazine substituent.',

    sar: [
      'Pyrazolopyrimidinone = characteristic chemical class of PDE5 inhibitors',
      'GUANINE-based structure mimics cGMP (natural substrate) for competitive inhibition',
      'Sulfonamide group added for WATER SOLUBILITY (makes it drug-like)',
      'Hydrophobic phenyl rings provide binding affinity',
      'Poor PDE5/PDE6 selectivity (only >10-fold) → blue vision side effect',
      'PDE6 in retina → sildenafil cross-reactivity causes visual disturbances'
    ],

    metabolism: 'Primary metabolism by CYP3A4 (N-demethylation). Active metabolite UK-103,320 (~50% potency of parent). CYP2C9 minor pathway.',

    moa: 'Competitive inhibitor of PDE5 → prevents cGMP breakdown → maintains smooth muscle relaxation',

    medChemFocus: [
      'PYRAZOLOPYRIMIDINONE class (all PDE5 inhibitors)',
      'GUANINE-based = mimics GMP (substrate analog)',
      'SULFONAMIDE added for WATER SOLUBILITY (essential modification)',
      'POOR selectivity: only >10-fold PDE5 vs PDE6 → blue vision',
      'Selectivity = one drug, multiple targets (sildenafil at PDE5/PDE6)',
      'Potency = different drugs, one target (comparing sildenafil/tadalafil at PDE5)',
      'Structure must mimic substrate while adding drug-like properties'
    ],

    highYield: [
      'Pyrazolopyrimidinone structure',
      'Guanine-based (mimics cGMP)',
      'Sulfonamide = water solubility',
      'Poor PDE5/PDE6 selectivity = blue vision',
      'SELECTIVITY vs POTENCY distinction'
    ],

    slideReference: 'Weldon - ED Med Chem - PDE5 Inhibitors'
  },

  {
    id: 'tadalafil-chem',
    drugName: 'Tadalafil',
    brandNames: ['Cialis'],
    drugClass: 'PDE5 Inhibitor',
    chemicalClass: 'Pyrazolopyrimidinone',

    chemicalStructure: 'Pyrazolopyrimidinone core like sildenafil. Different substituents provide longer half-life and different selectivity profile. Indole-based side chain.',

    sar: [
      'Same pyrazolopyrimidinone class as sildenafil',
      'Different substituents → longer duration (t1/2 17.5 hours vs 4 hours)',
      'Better PDE5/PDE6 selectivity than sildenafil → less blue vision',
      'Indole moiety provides different binding interactions',
      'Structural modifications affect pharmacokinetics more than pharmacodynamics'
    ],

    metabolism: 'CYP3A4 major pathway. Longer half-life (17.5 hours) enables once-daily dosing.',

    moa: 'Competitive PDE5 inhibitor like sildenafil',

    medChemFocus: [
      'Same PYRAZOLOPYRIMIDINONE class as sildenafil',
      'Structural differences → LONGER t1/2 (17.5h vs 4h)',
      'BETTER PDE5/PDE6 selectivity than sildenafil',
      'Same guanine-based competitive inhibition mechanism',
      'Structure-PK relationship: small changes drastically affect duration',
      'Indole vs piperazine substituent = key structural difference'
    ],

    highYield: [
      'Same chemical class as sildenafil (pyrazolopyrimidinone)',
      'Longer half-life due to structural modifications',
      'Better PDE5/PDE6 selectivity',
      'All PDE5 inhibitors share guanine-based structure',
      'Structural modifications alter PK not MOA'
    ],

    slideReference: 'Weldon - ED Med Chem - PDE5 Inhibitors'
  },

  {
    id: 'vardenafil-chem',
    drugName: 'Vardenafil',
    brandNames: ['Levitra'],
    drugClass: 'PDE5 Inhibitor',
    chemicalClass: 'Pyrazolopyrimidinone',

    chemicalStructure: 'Pyrazolopyrimidinone core. Most similar to sildenafil structurally but with ethyl group instead of methyl on piperazine.',

    sar: [
      'Most structurally similar to sildenafil',
      'Ethyl vs methyl substitution on piperazine',
      'Highest potency (lowest IC50) of PDE5 inhibitors',
      'Small structural changes can significantly affect potency',
      'Better PDE5/PDE11 selectivity than sildenafil'
    ],

    metabolism: 'CYP3A4 major pathway. Half-life 4-5 hours (similar to sildenafil).',

    moa: 'Most potent PDE5 inhibitor (lowest IC50 for PDE5)',

    medChemFocus: [
      'MOST POTENT PDE5 inhibitor (lowest IC50)',
      'Small structural difference from sildenafil (ethyl vs methyl)',
      'Demonstrates SAR principle: minor changes → major potency differences',
      'Same pyrazolopyrimidinone class',
      'Guanine-based competitive inhibition',
      'POTENCY ranking: vardenafil > sildenafil > tadalafil (at PDE5)'
    ],

    highYield: [
      'Most potent PDE5 inhibitor (lowest IC50)',
      'Most similar structure to sildenafil',
      'Small structural change (ethyl vs methyl) = big potency difference',
      'Same mechanism as other PDE5 inhibitors',
      'All share pyrazolopyrimidinone + guanine-based structure'
    ],

    slideReference: 'Weldon - ED Med Chem - PDE5 Inhibitors'
  },

  {
    id: 'alprostadil-chem',
    drugName: 'Alprostadil',
    brandNames: ['Caverject', 'MUSE'],
    drugClass: 'Prostaglandin E1',
    chemicalClass: 'Prostaglandin (Eicosanoid)',

    chemicalStructure: 'C20 fatty acid derivative (eicosanoid). Cyclopentane ring with two side chains. Multiple stereocenters. 15-hydroxyl group (distinguishes PGE1 from PGE2).',

    sar: [
      'Cyclopentane ring essential for prostaglandin activity',
      'C15 hydroxyl group present (PGE1) - absent in PGE2',
      'Carboxylic acid required for receptor binding',
      'cis double bonds at C5-C6 (alpha chain)',
      'Multiple stereocenters - specific configuration required for activity',
      'Lipophilic nature allows intracavernosal/intraurethral administration'
    ],

    metabolism: 'Rapidly metabolized in lungs by 15-hydroxy-prostaglandin dehydrogenase (PGDH). First-pass pulmonary metabolism. Very short half-life (<10 minutes).',

    moa: 'Binds prostaglandin E receptors → activates adenylate cyclase → increases cAMP → smooth muscle relaxation',

    medChemFocus: [
      'PROSTAGLANDIN E1 (eicosanoid) - C20 fatty acid structure',
      'Cyclopentane ring + two side chains = characteristic PG structure',
      'C15 hydroxyl = distinguishing feature of PGE1',
      'RAPID metabolism (t1/2 <10 min) limits systemic exposure',
      'Local administration required due to rapid metabolism',
      'Multiple stereocenters - specific stereochemistry required',
      'Different mechanism from PDE5 inhibitors (cAMP vs cGMP)'
    ],

    highYield: [
      'Prostaglandin E1 structure (C20 eicosanoid)',
      'Cyclopentane ring + C15 hydroxyl',
      'Very short half-life due to rapid metabolism',
      'Local administration (injection/suppository) required',
      'cAMP pathway (different from PDE5 inhibitors)',
      'Natural product structure (not a designed drug)'
    ],

    slideReference: 'Weldon - ED Med Chem - Alprostadil'
  },

  // ===== ANTIMUSCARINICS (OAB) =====
  {
    id: 'oxybutynin-chem',
    drugName: 'Oxybutynin',
    brandNames: ['Ditropan'],
    drugClass: 'Antimuscarinic',
    chemicalClass: 'Tertiary Amine',

    chemicalStructure: 'Tertiary amine with ester linkage. Phenylcyclohexanol core. Structurally resembles ACETYLCHOLINE (competitive antagonist).',

    sar: [
      'Tertiary amine mimics acetylcholine quaternary amine',
      'Ester linkage similar to ACh (but more stable)',
      'Bulky phenylcyclohexyl group provides antagonist (vs agonist) activity',
      'Cyclohexyl ring restricts rotation → receptor antagonism',
      'Antimuscarinics structurally resemble ACh but bulk prevents full agonism'
    ],

    metabolism: 'Extensive first-pass metabolism via CYP3A4. Active metabolite N-desethyloxybutynin (higher AChE activity, more side effects). Transdermal avoids first-pass.',

    moa: 'Competitive muscarinic M3 receptor antagonist',

    medChemFocus: [
      'Structurally resembles ACETYLCHOLINE (competitive antagonism)',
      'Tertiary amine + ester = ACh-like',
      'Bulky cyclohexyl group = ANTAGONIST vs agonist',
      'Active metabolite more problematic than parent',
      'Transdermal avoids first-pass → less active metabolite',
      'SAR principle: ACh analogs with bulk = antagonists'
    ],

    highYield: [
      'Structurally resembles acetylcholine',
      'Tertiary amine (vs ACh quaternary)',
      'Ester linkage like ACh',
      'Bulky groups create antagonism',
      'Active metabolite has more side effects'
    ],

    slideReference: 'Weldon - UI Med Chem - Antimuscarinics'
  },

  // ===== BETA-3 AGONISTS =====
  {
    id: 'mirabegron-chem',
    drugName: 'Mirabegron',
    brandNames: ['Myrbetriq'],
    drugClass: 'Beta-3 Adrenergic Agonist',
    chemicalClass: 'Phenylethylamine derivative',

    chemicalStructure: 'Phenylethylamine core (resembles EPINEPHRINE). Aminothiazole substituent provides beta-3 selectivity. Extended aromatic system.',

    sar: [
      'Phenylethylamine core = characteristic of adrenergic agents',
      'Structurally resembles EPINEPHRINE (beta agonist)',
      'Aminothiazole group provides BETA-3 selectivity',
      'Lacks catechol structure (metabolically more stable than epi)',
      'Bulky substituents favor beta-3 over beta-1/beta-2',
      'Extended aromatic system enhances selectivity'
    ],

    metabolism: 'CYP3A4 and CYP2D6. Also functions as CYP2D6 inhibitor (DDI concern).',

    moa: 'Beta-3 agonist → activates adenylate cyclase → increases cAMP → detrusor relaxation',

    medChemFocus: [
      'Structurally resembles EPINEPHRINE',
      'Phenylethylamine core = all adrenergic drugs',
      'Aminothiazole = BETA-3 SELECTIVITY',
      'Lacks catechol (no COMT metabolism) = longer duration',
      'SAR: specific substituents provide beta-3 selectivity',
      'Moderate CYP2D6 inhibitor (drug interaction concern)'
    ],

    highYield: [
      'Resembles epinephrine structure',
      'Phenylethylamine core',
      'Aminothiazole provides beta-3 selectivity',
      'No catechol = metabolically stable',
      'CYP2D6 inhibitor (DDI)'
    ],

    slideReference: 'Weldon - UI Med Chem - Beta-3 Agonists'
  },

  // ===== BISPHOSPHONATES =====
  {
    id: 'alendronate-chem',
    drugName: 'Alendronate',
    brandNames: ['Fosamax'],
    drugClass: 'Nitrogen-Containing Bisphosphonate',
    chemicalClass: 'Bisphosphonate',

    chemicalStructure: 'P-C-P structure (two phosphonate groups connected by carbon). R1 = hydroxyl (bone binding). R2 = aminobutyl side chain (nitrogen-containing).',

    sar: [
      'P-C-P bond mimics INORGANIC PYROPHOSPHATE (IPP) but P-C-P vs P-O-P',
      'P-C-P is RESISTANT TO HYDROLYSIS (P-O-P is rapidly cleaved)',
      'R1 = hydroxyl required for hydroxyapatite binding to bone',
      'R2 side chain determines potency and toxicity',
      'NITROGEN-containing R2 = higher potency BUT higher BRONJ risk',
      'Aminobutyl chain inhibits farnesyl pyrophosphate synthase',
      'Zwitterionic at physiological pH (poor oral absorption)'
    ],

    metabolism: 'NOT metabolized. Excreted unchanged in urine. 50% binds bone, rest excreted. VERY long half-life in bone (years).',

    moa: 'Binds bone hydroxyapatite → incorporated into bone matrix → inhibits farnesyl pyrophosphate synthase in osteoclasts → prevents osteoclast function',

    medChemFocus: [
      'P-C-P structure MIMICS inorganic pyrophosphate (IPP)',
      'P-C-P bond is STABLE (vs P-O-P which is cleaved)',
      'R1 hydroxyl = BONE BINDING (essential)',
      'R2 nitrogen-containing = HIGH POTENCY + HIGH TOXICITY (BRONJ)',
      'Mechanism of metabolic stability: carbon resists enzymatic hydrolysis',
      'Nitrogen in side chain required for farnesyl pyrophosphate synthase inhibition',
      'Poor oral bioavailability due to zwitterionic nature'
    ],

    highYield: [
      'P-C-P mimics P-O-P (IPP) but resistant to hydrolysis',
      'Nitrogen-containing = more potent + more BRONJ risk',
      'R1 hydroxyl binds bone',
      'R2 side chain determines potency/toxicity',
      'Not metabolized, excreted unchanged',
      'Very long bone half-life'
    ],

    slideReference: 'Weldon - Osteoporosis Med Chem - Bisphosphonates'
  },

  {
    id: 'zoledronate-chem',
    drugName: 'Zoledronate',
    brandNames: ['Reclast', 'Zometa'],
    drugClass: 'Nitrogen-Containing Bisphosphonate',
    chemicalClass: 'Bisphosphonate',

    chemicalStructure: 'P-C-P core with hydroxyl (R1) and imidazole side chain (R2). Two nitrogens in imidazole ring.',

    sar: [
      'Same P-C-P structure as other bisphosphonates',
      'IMIDAZOLE side chain = MOST POTENT bisphosphonate',
      'Two nitrogens in R2 = highest potency and highest BRONJ risk',
      'Imidazole provides strongest farnesyl pyrophosphate synthase inhibition',
      'Potency ranking: zoledronate > risedronate > alendronate > ibandronate'
    ],

    metabolism: 'Not metabolized, excreted unchanged. Extremely long bone half-life.',

    moa: 'Most potent inhibitor of farnesyl pyrophosphate synthase → most potent osteoclast inhibition',

    medChemFocus: [
      'IMIDAZOLE R2 side chain = MOST POTENT',
      'Two nitrogens = highest potency + highest BRONJ risk',
      'Same P-C-P core structure as all bisphosphonates',
      'Structure-activity: more nitrogen = more potency + toxicity',
      'Enables once-yearly IV dosing due to extreme potency',
      'Highest affinity for farnesyl pyrophosphate synthase'
    ],

    highYield: [
      'Most potent bisphosphonate (imidazole side chain)',
      'Two nitrogens in R2',
      'Highest BRONJ risk',
      'Same P-C-P core',
      'Potency correlates with nitrogen content in R2'
    ],

    slideReference: 'Weldon - Osteoporosis Med Chem - Bisphosphonates'
  },

  // ===== GONADAL HORMONES - KEY MED CHEM EXAMPLES =====
  {
    id: 'ethinyl-estradiol-chem',
    drugName: 'Ethinyl Estradiol',
    brandNames: ['Component of most oral contraceptives'],
    drugClass: 'Synthetic Estrogen',
    chemicalClass: 'C18 Steroid (Estrogen)',

    chemicalStructure: 'C18 steroid with AROMATIC A ring, 3-phenolic OH, 17β-OH. KEY: 17α-ETHINYL group blocks metabolism.',

    sar: [
      'Aromatic A ring + 3-phenolic OH = ESSENTIAL for estrogenic activity',
      '17α-ETHINYL group BLOCKS 17β-hydroxyl oxidation to estrone',
      '17α-alkyl substitution required for ALL oral estrogens',
      '17β-hydroxyl normally rapidly oxidized (poor oral BA)',
      'Ethinyl group prevents oxidative metabolism → 15-20x more potent orally',
      'Oral bioavailability 40% (vs <5% for estradiol)',
      'Removal of EITHER C3 or C17 oxygen diminishes activity'
    ],

    metabolism: 'CYP3A4 hydroxylation but MUCH slower than estradiol due to 17α-ethinyl. Also sulfation and glucuronidation.',

    moa: 'Estrogen receptor agonist (ERα, ERβ)',

    medChemFocus: [
      '17α-ETHINYL = KEY modification for ORAL ACTIVITY',
      'Blocks 17β-hydroxyl oxidation (metabolic soft spot)',
      'Classic example of metabolic blocking strategy',
      '17α-alkyl substituent in ALL oral estrogens',
      'SAR: C3 phenolic OH + aromatic A ring ESSENTIAL',
      'Structure-metabolism relationship: ethinyl blocks oxidation',
      '15-20x more potent orally than estradiol'
    ],

    highYield: [
      '17α-ethinyl blocks metabolism',
      'Required for all oral estrogens',
      '15-20x more orally potent than estradiol',
      'C18 steroid with aromatic A ring',
      'Classic metabolic blocking strategy',
      'Aromatic A ring + phenolic OH essential'
    ],

    slideReference: 'Weldon - Gonadal Hormones Med Chem - Synthetic Estrogens'
  },

  {
    id: 'mestranol-chem',
    drugName: 'Mestranol',
    brandNames: ['Component of some oral contraceptives'],
    drugClass: 'Synthetic Estrogen (Prodrug)',
    chemicalClass: 'C18 Steroid (Estrogen)',

    chemicalStructure: 'Ethinyl estradiol with 3-O-METHYL group (methyl ether at C3 phenolic position).',

    sar: [
      '3-O-Methyl PRODRUG of ethinyl estradiol',
      'Methyl group at C3 must be REMOVED for activity',
      'Demethylation by hepatic O-demethylases → active ethinyl estradiol',
      'Prodrug strategy: masking phenolic OH alters properties',
      'Less potent than ethinyl estradiol (requires activation)'
    ],

    metabolism: 'O-demethylation to ethinyl estradiol (active). Then metabolized like ethinyl estradiol.',

    prodrug: 'PRODRUG of ethinyl estradiol. 3-O-methyl must be removed by hepatic metabolism.',

    medChemFocus: [
      '3-O-METHYL PRODRUG of ethinyl estradiol',
      'Phenolic OH masked by methylation',
      'Requires hepatic O-DEMETHYLATION for activity',
      'Classic prodrug strategy: mask phenol to alter properties',
      'SAR: 3-phenolic OH required for activity (must be unmasked)',
      'Demonstrates SAR principle: C3 oxygen essential'
    ],

    highYield: [
      '3-O-methyl prodrug of ethinyl estradiol',
      'Requires O-demethylation activation',
      'Phenolic OH must be unmasked',
      'Less potent due to prodrug conversion',
      'Classic prodrug example'
    ],

    slideReference: 'Weldon - Gonadal Hormones Med Chem - Synthetic Estrogens'
  },

  {
    id: 'tamoxifen-chem',
    drugName: 'Tamoxifen',
    brandNames: ['Nolvadex'],
    drugClass: 'SERM (Triphenylethylene)',
    chemicalClass: 'Triphenylethylene',

    chemicalStructure: 'TRIPHENYLETHYLENE structure: three phenyl rings attached to ethylene core. Dimethylaminoethoxy side chain.',

    sar: [
      'Triphenylethylene = characteristic SERM structure',
      'Three bulky phenyl rings prevent full agonist conformation',
      'Persistent ER binding but cannot translocate to nucleus',
      'E/Z isomerism possible (trans isomer is active)',
      'Dimethylamino side chain required for binding',
      'Bulky structure = antagonist vs agonist effect'
    ],

    metabolism: 'CYP3A4 → N-demethylation. CYP2D6 → 4-HYDROXYTAMOXIFEN (100x more potent, ACTIVE METABOLITE). CYP2D6 polymorphisms affect efficacy.',

    prodrug: 'PRODRUG requiring CYP2D6 metabolism to 4-hydroxytamoxifen (active metabolite with 100x higher affinity).',

    moa: 'Triphenylethylene binds ER with strong persistent binding → prevents nuclear translocation and chromatin binding → antagonism in breast',

    medChemFocus: [
      'TRIPHENYLETHYLENE chemical class',
      'Three bulky phenyl rings = ANTAGONIST (prevent full agonism)',
      'PRODRUG: CYP2D6 → 4-hydroxytamoxifen (100x more potent)',
      'CYP2D6 polymorphisms = clinical significance',
      'Structure prevents nuclear translocation despite ER binding',
      'Persistent binding mechanism different from competitive antagonists',
      'Avoid strong CYP2D6 inhibitors (reduce active metabolite)'
    ],

    highYield: [
      'Triphenylethylene structure',
      'Prodrug requiring CYP2D6 metabolism',
      '4-hydroxytamoxifen 100x more potent',
      'Three phenyl rings prevent agonism',
      'CYP2D6 polymorphisms affect efficacy',
      'Persistent ER binding mechanism'
    ],

    slideReference: 'Weldon - Gonadal Hormones Med Chem - Triphenylethylenes'
  },

  {
    id: 'anastrozole-chem',
    drugName: 'Anastrozole',
    brandNames: ['Arimidex'],
    drugClass: 'Aromatase Inhibitor',
    chemicalClass: 'Nonsteroidal Triazole',

    chemicalStructure: 'Two triazole rings connected by dimethylmethylene bridge. TRIAZOLE contains three nitrogens in 5-membered ring.',

    sar: [
      'TRIAZOLE ring with N-4 nitrogen binds HEME IRON of CYP19 (aromatase)',
      'Coordination to heme iron prevents O2 binding → blocks catalysis',
      'Two triazole rings improve potency and selectivity',
      'NONSTEROIDAL (vs exemestane steroidal)',
      'Reversible inhibition (vs exemestane irreversible)',
      'Triazole nitrogen sp2 hybridization allows metal coordination'
    ],

    metabolism: 'Hepatic metabolism, mostly via N-dealkylation and hydroxylation.',

    moa: 'Triazole N-4 coordinates to heme iron of aromatase (CYP19) → prevents oxygen binding → blocks androgen to estrogen conversion',

    medChemFocus: [
      'NONSTEROIDAL TRIAZOLE',
      'N-4 azole nitrogen binds HEME IRON of CYP19',
      'Prevents O2 binding to catalytic site',
      'Mechanism-based inhibition at heme',
      'REVERSIBLE (vs exemestane irreversible)',
      'Two triazole rings enhance potency',
      'Coordination chemistry: N lone pair → Fe2+ coordination'
    ],

    highYield: [
      'Nonsteroidal triazole structure',
      'Azole N binds heme iron',
      'Prevents O2 binding to aromatase',
      'Reversible inhibition',
      'Two triazole rings',
      'Coordination to catalytic heme'
    ],

    slideReference: 'Weldon - Gonadal Hormones Med Chem - Aromatase Inhibitors'
  },

  {
    id: 'exemestane-chem',
    drugName: 'Exemestane',
    brandNames: ['Aromasin'],
    drugClass: 'Aromatase Inhibitor',
    chemicalClass: 'Steroidal',

    chemicalStructure: 'STEROIDAL structure (C19 androgen-like). 6-methylene group. Mimics androgen substrates of aromatase.',

    sar: [
      'STEROIDAL (mimics androgen substrate)',
      'Binds aromatase active site as substrate analog',
      'IRREVERSIBLE (suicide) inhibitor',
      'Reactive 6-methylene group forms covalent bond',
      'Mechanism-based inactivation',
      'Structural similarity to androgens enables substrate-like binding'
    ],

    metabolism: 'Hepatic metabolism via CYP3A4.',

    moa: 'Substrate analog → binds aromatase → covalent modification → IRREVERSIBLE inactivation',

    medChemFocus: [
      'STEROIDAL aromatase inhibitor (vs anastrozole/letrozole nonsteroidal)',
      'Mimics androgen SUBSTRATE structure',
      'IRREVERSIBLE (suicide) inhibitor',
      '6-methylene = reactive group for covalent modification',
      'Mechanism-based inactivation (requires catalytic turnover)',
      'Structure-based drug design: substrate analog approach'
    ],

    highYield: [
      'Steroidal structure (androgen-like)',
      'Irreversible (suicide) inhibitor',
      'Substrate analog mechanism',
      '6-methylene reactive group',
      'Different mechanism from triazole AIs',
      'Mimics androgen substrate'
    ],

    slideReference: 'Weldon - Gonadal Hormones Med Chem - Aromatase Inhibitors'
  },

  {
    id: 'levonorgestrel-chem',
    drugName: 'Levonorgestrel',
    brandNames: ['Plan B', 'Mirena'],
    drugClass: 'Progestin',
    chemicalClass: '19-Norandrostane (C19)',

    chemicalStructure: 'C19 steroid (lacks C19 methyl) with 17α-ethinyl group. Derived from testosterone by removal of 19-methyl and addition of 17α-ethinyl.',

    sar: [
      '19-NOR: Loss of C19 METHYL decreases androgenic activity',
      '17α-ETHINYL on androgen converts to PROGESTIN',
      'Derived from TESTOSTERONE (19-norandrostane class)',
      '13-ethyl group (from testosterone)',
      'More androgenic than 3rd generation progestins (still has testosterone origin)',
      'Counterintuitive SAR: ethinyl on androgen → progestin activity'
    ],

    metabolism: 'Hepatic metabolism. 17α-ethinyl protects from metabolism (like ethinyl estradiol).',

    moa: 'Progesterone receptor agonist',

    medChemFocus: [
      '19-NORANDROSTANE class (from testosterone)',
      'Loss of C19 METHYL → DECREASES androgenic activity',
      '17α-ETHINYL converts ANDROGEN → PROGESTIN',
      'Most ANDROGENIC progestin (2nd generation)',
      'SAR principle: small change (loss of methyl) changes activity profile',
      'Ethinyl blocks metabolism (enables oral use)',
      'Testosterone origin explains residual androgenic effects'
    ],

    highYield: [
      '19-norandrostane (from testosterone)',
      '19-nor = loss of C19 methyl',
      'Most androgenic progestin',
      '17α-ethinyl blocks metabolism',
      'Ethinyl on androgen → progestin',
      '2nd generation progestin'
    ],

    slideReference: 'Weldon - Gonadal Hormones Med Chem - Progestins'
  },

  {
    id: 'desogestrel-chem',
    drugName: 'Desogestrel',
    brandNames: ['Desogen', 'component of NuvaRing as etonogestrel'],
    drugClass: 'Progestin',
    chemicalClass: '19-Norandrostane (C19)',

    chemicalStructure: '19-norandrostane with 17α-ethinyl. Additional modifications reduce androgenic activity. 11-methylene group.',

    sar: [
      '19-Norandrostane (3rd generation)',
      'Further modifications beyond 19-nor → LOWER androgenic activity',
      '11-methylene group distinguishes from 2nd gen',
      'Delta-9,11 modification reduces androgen receptor binding',
      'Better androgenic profile than levonorgestrel'
    ],

    metabolism: 'PRODRUG → metabolized to ETONOGESTREL (3-keto-desogestrel) = active metabolite.',

    prodrug: 'PRODRUG of etonogestrel (3-keto-desogestrel). Etonogestrel is the active form used in NuvaRing and Nexplanon.',

    moa: 'Progesterone receptor agonist with minimal androgenic activity',

    medChemFocus: [
      '3rd GENERATION 19-norandrostane',
      'PRODRUG → ETONOGESTREL (active)',
      'Lower androgenic activity than levonorgestrel',
      '11-methylene and other modifications reduce AR binding',
      'Etonogestrel enables long-acting formulations',
      'Structure-activity: progressive modifications reduce androgenic effects',
      'Trade-off: lower androgenic effects but possibly higher VTE'
    ],

    highYield: [
      '3rd generation progestin',
      'Prodrug of etonogestrel',
      'Lower androgenic activity',
      '19-norandrostane base',
      'Etonogestrel in NuvaRing/Nexplanon',
      'Better androgenic profile than 2nd gen'
    ],

    slideReference: 'Weldon - Gonadal Hormones Med Chem - Progestins'
  }
];
