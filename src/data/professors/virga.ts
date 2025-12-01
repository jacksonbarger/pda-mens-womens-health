// Professor Virga - Gonadal Hormones Content
// Focus: Medicinal Chemistry of Sex Hormones

import type { ProfessorContent } from './professorTypes';
import { virgaFlashcards } from './virgaFlashcards';
import { virgaQuiz } from './virgaQuiz';
import { virgaDrugCards } from './virgaDrugCards';

export const virgaContent: ProfessorContent = {
  id: 'virga',
  name: 'Virga',
  fullName: 'Professor Virga',
  specialty: 'Gonadal Hormones Medicinal Chemistry',
  icon: '🧬',
  slideFiles: [
    'Gonadohormones 2024 (1).ppt',
    'Gonadohormones 2024.ppt'
  ],
  overview: {
    summary: 'Professor Virga covers the medicinal chemistry of gonadal hormones with emphasis on structural classification, SAR (structure-activity relationships), metabolic pathways, and drug design principles for estrogens, progestins, and androgens. Focus on understanding chemical structures, stereochemistry, and how structural modifications affect activity.',
    topics: [
      'Sex Hormone Structural Classification (C18, C19, C21)',
      'Estrogen Chemistry and SAR',
      'Estrogen Biosynthesis and Aromatase',
      'Estrogen Metabolism Pathways',
      'Synthetic Estrogen Development (Ethinyl Estradiol)',
      'Conjugated Estrogens and Premarin',
      'Nonsteroidal Estrogens (Stilbenes)',
      'Estrogen Antagonist Chemistry (SERMs, Aromatase Inhibitors)',
      'Tamoxifen Metabolism and Stereochemistry',
      'Progestin Structural Classes (Pregnanes vs 19-Norandrostanes)',
      'Progestin SAR and Androgenic Activity',
      'Progesterone Antagonists (Mifepristone, Ulipristal)',
      'Androgen Chemistry and Anabolic Steroids'
    ],
    learningObjectives: [
      'Classify sex hormones by carbon number and key structural features: Estrogens (C18, aromatic A ring), Progestins (C21, 3-keto-4,5-ene), Androgens (C19)',
      'Identify the 3 classic estrogens: estrone, 17β-estradiol (most potent), estriol',
      'Understand aromatase (CYP19) converts androgens → estrogens (requires 3 O2 + NADPH)',
      'Explain estradiol metabolism: hydroxylation (2/4-positions) → catechol → COMT → O-methoxy → conjugation',
      'Know estradiol ↔ estrone interconversion via estradiol dehydrogenase',
      'Understand estradiol poor oral BA: rapid 17β-hydroxyl oxidation + conjugation',
      'Explain 17α-ethinyl substitution blocks metabolism for oral activity (ethinyl estradiol)',
      'Recognize mestranol as 3-O-methyl prodrug of ethinyl estradiol',
      'Know 17β-esters (valerate, cypionate) for long-acting IM therapy',
      'Identify conjugated estrogens from pregnant mare urine (Premarin) containing equilin/equilenin',
      'Apply estrogen SAR: removal of EITHER C3 or C17 oxygen diminishes activity',
      'Know stilbene derivatives (DES) are nonsteroidal estrogens, TRANS more potent',
      'Classify estrogen antagonists: impeded, triphenylethylenes, aromatase inhibitors',
      'Understand triphenylethylene mechanism: persistent ER binding prevents translocation',
      'Know clomiphene E-isomer (antiestrogenic) vs Z-isomer (estrogenic), racemic = partial agonist',
      'Identify tamoxifen metabolism: CYP3A4 (demethylation), CYP2D6 → 4-hydroxytamoxifen (active)',
      'Understand aromatase inhibitor MOA: azole N binds heme iron → prevents O2 binding',
      'Differentiate steroidal (exemestane) vs nonsteroidal (anastrozole, letrozole) aromatase inhibitors',
      'Know progesterone rapid metabolism (t1/2 5-10min) necessitates synthetic progestins',
      'Distinguish pregnanes (C6 methyl for oral availability) vs 19-norandrostanes (from testosterone)',
      'Understand 19-nor (loss of C19 methyl) decreases androgenic activity',
      'Know ethinyl on androgen converts it to progestin',
      'Compare progestin androgenic activity: norgestrel/levonorgestrel (high) vs norgestimate/desogestrel (low)',
      'Recognize desogestrel → etonogestrel (active metabolite in NuvaRing)',
      'Understand mifepristone (RU-486) as progesterone antagonist/abortifacient',
      'Know ulipristal (Ella) as SPRM for emergency contraception within 120 hours'
    ],
    highYieldConcepts: [
      // Sex Hormone Classification
      'Sex hormone classification by structure: ESTROGENS = C18 with AROMATIC A ring + 3-PHENOLIC OH, PROGESTINS = C21 with 3-KETO-4,5-ENE, ANDROGENS = C19 with oxygens at 3 AND 17',
      '3 classic estrogens: Estrone (E1), 17β-ESTRADIOL (E2 - MOST POTENT), Estriol (E3)',
      'Aromatase (CYP19): Critical enzyme converting ANDROGENS → ESTROGENS (requires 3 O2 + NADPH for demethylation, hydroxylation, dehydrogenation)',
      'Aromatase deficiency → failure of female sexual maturation',

      // Estrogen Metabolism
      'Estradiol metabolism pathway: HYDROXYLATION (2/4-positions) → CATECHOL estrogens → COMT → O-METHOXY → CONJUGATION (sulfate/glucuronide) → EXCRETION',
      'Estradiol ↔ Estrone (interconvertible via ESTRADIOL DEHYDROGENASE)',
      'Estradiol poor oral BA: RAPID 17β-HYDROXYL OXIDATION (converts to estrone) + CONJUGATION',

      // Synthetic Estrogen Development
      'Ethinyl estradiol: 17α-ETHINYL blocks oxidation → prevents estrone conversion → 15-20x more potent ORALLY, 40% BA',
      'KEY SAR: 17α-ALKYL substituent is NECESSARY for oral activity in all oral estrogens',
      'Mestranol: 3-O-METHYL PRODRUG of ethinyl estradiol (demethylated in liver)',
      '17β-Esters (valerate, cypionate): Long-acting IM PRODRUGS (14-28 days), esterases release estradiol',
      'Conjugated estrogens (PREMARIN): From pregnant MARE urine, contains EQUILIN/EQUILENIN (B-ring unsaturated - NOT in humans)',

      // Estrogen SAR
      'Estrogen SAR: Removal of EITHER C3 oxygen OR C17 oxygen DIMINISHES activity (both are critical for receptor binding)',
      '17α-epimerization (hydroxyl flip from β to α) DIMINISHES activity',
      'Aromatic A ring with 3-phenolic OH is ESSENTIAL for estrogenic activity',
      'Stilbene derivatives (DES): Nonsteroidal estrogens, TRANS isomer MORE POTENT than cis, linked to neoplasia in offspring',

      // Estrogen Antagonists
      'Estrogen antagonist classes: 1) IMPEDED estrogens (weak, rapid dissociation), 2) TRIPHENYLETHYLENES (strong persistent binding), 3) AROMATASE INHIBITORS (prevent synthesis)',
      'Triphenylethylene mechanism: STRONG PERSISTENT ER BINDING → cannot TRANSLOCATE to nucleus or bind chromatin → antagonism',
      'Clomiphene: E-isomer (ANTIESTROGENIC) + Z-isomer (ESTROGENIC), dosed as RACEMIC MIXTURE = PARTIAL AGONIST for ovulation induction',
      'Tamoxifen metabolism: CYP3A4 → N-DEMETHYLATION, CYP2D6 → 4-HYDROXYTAMOXIFEN (100x more potent = ACTIVE METABOLITE)',
      'CYP2D6 polymorphisms affect tamoxifen efficacy (poor metabolizers have reduced benefit)',
      'Aromatase inhibitor MOA: N-4 AZOLE NITROGEN binds HEME IRON of CYP19 → prevents O2 binding → blocks catalysis',
      'Aromatase inhibitors: STEROIDAL (exemestane - irreversible), NONSTEROIDAL triazoles (anastrozole, letrozole - reversible)',

      // Progestin Chemistry
      'Progesterone: RAPID metabolism (t1/2 5-10 minutes), excreted as 5β-pregnanediol conjugate → necessitates synthetic progestins',
      'Synthetic progestins: PREGNANES (C6 methyl → oral availability) vs 19-NORANDROSTANES (from testosterone modification)',
      '19-Nor modification: Loss of C19 METHYL → DECREASES ANDROGENIC activity (converts androgen-like to progestin)',
      'ETHINYL on ANDROGEN → converts to PROGESTIN (counterintuitive but important SAR principle)',
      'Medroxyprogesterone: 6α-METHYL blocks metabolism, NO androgenic activity',
      'Megestrol: 6-7 DOUBLE BOND reduces metabolism, used for breast/endometrial cancer',

      // Progestin Androgenic Activity
      'Progestin androgenic activity ranking: HIGH (norgestrel, levonorgestrel - 2nd gen), LOW (norgestimate, desogestrel - 3rd gen), LEAST (norethindrone)',
      '3rd generation progestins: Lower androgenic effects BUT possibly higher VTE risk',
      'Desogestrel → ETONOGESTREL (active metabolite, used in NuvaRing and Nexplanon)',
      'Levonorgestrel: Most androgenic progestin, used in emergency contraception (Plan B)',

      // Progesterone Antagonists
      'Mifepristone (RU-486): PROGESTERONE ANTAGONIST + weak glucocorticoid antagonist, abortifacient (600mg + misoprostol)',
      'Ulipristal (Ella): SPRM (Selective Progesterone Receptor Modulator), emergency contraception within 120 HOURS (5 days), more effective than levonorgestrel',

      // Key Medicinal Chemistry Principles
      'KEY CONCEPT: Structural modifications can dramatically change hormone class (e.g., ethinyl on androgen → progestin)',
      'KEY CONCEPT: Small changes profoundly affect activity (e.g., 17α vs 17β hydroxyl orientation)',
      'KEY CONCEPT: Metabolic blocking strategies (17α-ethinyl, C6 methyl) enable oral bioavailability',
      'KEY CONCEPT: Prodrug strategies (esters, methyl ethers) enable different routes and durations'
    ],
    clinicalPearls: [
      'Aromatase as the critical "switch" enzyme between androgens and estrogens - deficiency prevents female sexual maturation',
      'Ethinyl estradiol\'s 17α-alkyl group is the classic solution to first-pass metabolism - used in ALL oral contraceptives',
      'Conjugated estrogens from horse urine represents unusual drug source with non-human estrogens (equilin/equilenin)',
      'Triphenylethylene mechanism shows how strong persistent receptor binding without nuclear translocation creates antagonism',
      'Clomiphene\'s racemic mixture with opposite isomer activities creates partial agonist - exploited for ovulation induction',
      'Tamoxifen as prodrug requiring CYP2D6: genetic polymorphisms affect efficacy, CYP2D6 inhibitors reduce therapeutic effect',
      'Aromatase inhibitor heme-binding mechanism is elegant example of mechanism-based enzyme inhibition at catalytic site',
      'Progesterone\'s extremely short half-life (5-10min) necessitated entire field of synthetic progestin development',
      '19-Nor modification decreasing androgenicity is key principle for developing progestins with better side effect profiles',
      'Ethinyl converting androgens to progestins is counterintuitive but demonstrates how single modification changes hormone class',
      '3rd generation progestins have better androgenic profile (less acne, hirsutism) but possibly higher VTE risk - risk-benefit consideration',
      'Desogestrel metabolism to etonogestrel enables long-acting formulations (NuvaRing, Nexplanon)',
      'Mifepristone controversy demonstrates how medicinal chemistry intersects with ethics, politics, and reproductive rights',
      'Understanding SAR enables prediction of activity, selectivity, and metabolism - critical for drug design and clinical use'
    ],
    relatedSections: [
      'gonadal-hormones-pharmacology',
      'contraception',
      'menopause',
      'weldon-medicinal-chemistry'
    ]
  },
  flashcards: virgaFlashcards,
  quiz: virgaQuiz,
  drugCards: virgaDrugCards,
  flowchartFile: '/flowcharts/virga.drawio'
};
