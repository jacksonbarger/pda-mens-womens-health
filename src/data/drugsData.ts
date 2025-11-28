import type { DrugsModule } from '../types';

/**
 * DRUGS MODULE FOR SANTA'S PDA WORKSHOP
 *
 * High-yield reproductive pharmacology organized by therapeutic category.
 * Focus on mechanism, indications, contraindications, and clinical pearls.
 */

export const drugsModule: DrugsModule = {
  categories: [
    {
      id: "pcos_treatments",
      name: "PCOS Treatments",
      description: "Drugs used to manage hyperandrogenism, anovulation, and metabolic complications in PCOS.",
      drugs: [
        {
          id: "cocs_pcos",
          generic_name: "Ethinyl estradiol / progestin (Combined Oral Contraceptives)",
          brand_names: ["Ortho Tri-Cyclen", "Yaz", "Lo Loestrin Fe"],
          class: "Combined oral contraceptive",
          mechanism:
            "Suppresses LH and FSH secretion, reducing ovarian androgen production and providing cycle control; progestin opposes estrogen in the endometrium.",
          key_indications: ["Menstrual regulation in PCOS", "Treatment of hirsutism and acne", "Contraception"],
          contraindications: [
            "Migraine with aura",
            "History of thromboembolism",
            "Uncontrolled hypertension",
            "Smoking >35 years"
          ],
          adverse_effects: ["Nausea", "Breast tenderness", "Breakthrough bleeding", "Increased VTE risk"],
          pregnancy_breastfeeding: "Not used in pregnancy; estrogen-containing methods may reduce breast milk supply.",
          high_yield_facts: [
            "First-line therapy for menstrual irregularity and hyperandrogenic symptoms in many PCOS patients.",
            "Reduces risk of endometrial hyperplasia by providing progestin exposure."
          ]
        },
        {
          id: "metformin",
          generic_name: "Metformin",
          brand_names: ["Glucophage", "Fortamet", "Glucophage XR"],
          class: "Biguanide insulin sensitizer",
          mechanism:
            "Improves insulin sensitivity and decreases hepatic glucose production, indirectly reducing ovarian androgen synthesis.",
          key_indications: ["Insulin resistance in PCOS", "Metabolic syndrome", "Type 2 diabetes"],
          contraindications: ["Severe renal impairment", "Risk of lactic acidosis"],
          adverse_effects: ["GI upset (nausea, diarrhea)", "Rare lactic acidosis"],
          monitoring: ["Renal function", "B12 levels with long-term use"],
          pregnancy_breastfeeding:
            "Sometimes continued in pregnancy for diabetes/PCOS management; follow guidelines and OB advice.",
          high_yield_facts: [
            "May help restore ovulation in some patients.",
            "Key drug to remember for the metabolic side of PCOS."
          ]
        },
        {
          id: "spironolactone",
          generic_name: "Spironolactone",
          brand_names: ["Aldactone"],
          class: "Aldosterone antagonist; antiandrogen",
          mechanism:
            "Blocks androgen receptors and inhibits 5-alpha-reductase; also potassium-sparing diuretic.",
          key_indications: ["Hirsutism and acne in PCOS (adjunct therapy)"],
          contraindications: ["Hyperkalemia", "Severe renal impairment"],
          adverse_effects: ["Hyperkalemia", "Menstrual irregularity", "Breast tenderness", "Fatigue"],
          pregnancy_breastfeeding:
            "Contraindicated in pregnancy due to risk of feminization of male fetus; ensure reliable contraception.",
          high_yield_facts: [
            "Always combine with effective contraception in women of reproductive age.",
            "Mechanism is antiandrogenic, not primarily contraceptive."
          ]
        },
        {
          id: "clomiphene",
          generic_name: "Clomiphene citrate",
          brand_names: ["Clomid", "Serophene"],
          class: "Selective estrogen receptor modulator (SERM)",
          mechanism:
            "Blocks estrogen receptors in the hypothalamus, reducing negative feedback and increasing GnRH → FSH/LH → ovulation.",
          key_indications: ["Ovulation induction in anovulatory infertility (e.g., PCOS)"],
          contraindications: ["Pregnancy", "Liver disease", "Uncontrolled thyroid or adrenal disease"],
          adverse_effects: ["Hot flashes", "Ovarian enlargement", "Multiple gestation risk", "Visual disturbances"],
          pregnancy_breastfeeding: "Used pre-conception; not used once pregnancy is established.",
          high_yield_facts: [
            "Classic first-line ovulation induction agent in PCOS.",
            "Mechanism hinges on releasing the hypothalamus from estrogen feedback."
          ]
        }
      ]
    },
    {
      id: "endometriosis_pain_hormonal",
      name: "Endometriosis & Dysmenorrhea Management",
      description: "Drugs that target pain and hormonal suppression in endometriosis and primary dysmenorrhea.",
      drugs: [
        {
          id: "nsaids_dysmenorrhea",
          generic_name: "NSAIDs (e.g., ibuprofen, naproxen)",
          brand_names: ["Advil", "Motrin", "Aleve"],
          class: "Nonsteroidal anti-inflammatory drugs",
          mechanism:
            "Inhibit cyclooxygenase (COX) and prostaglandin synthesis, reducing uterine contractions and ischemic pain.",
          key_indications: ["Primary dysmenorrhea", "Pain from endometriosis (symptomatic)"],
          contraindications: ["Peptic ulcer disease", "Renal insufficiency", "NSAID allergy"],
          adverse_effects: ["GI irritation/ulcer risk", "Renal impairment", "Cardiovascular risk with chronic use"],
          pregnancy_breastfeeding:
            "Use with caution, especially in later pregnancy (risk of ductus arteriosus closure).",
          high_yield_facts: [
            "First-line for primary dysmenorrhea due to prostaglandin-mediated pain.",
            "Best if started at onset of menses or slightly before."
          ]
        },
        {
          id: "cocs_endometriosis",
          generic_name: "Combined oral contraceptives (continuous or cyclic)",
          class: "Combined hormonal contraception",
          mechanism:
            "Suppress ovulation and stabilize endometrial tissue; continuous use reduces cyclic stimulation of implants.",
          key_indications: ["Endometriosis-related pain", "Dysmenorrhea", "Contraception"],
          contraindications: ["Same as COCs for PCOS (VTE risk, migraine with aura, etc.)"],
          adverse_effects: ["Breakthrough bleeding", "Breast tenderness", "Headache", "VTE risk"],
          pregnancy_breastfeeding:
            "Not used in pregnancy; estrogen methods can reduce milk supply if used too early postpartum.",
          high_yield_facts: [
            "Continuous COC regimens can reduce menstrual frequency and endometriosis pain.",
            "Important non-surgical option for symptom control."
          ]
        },
        {
          id: "gnrh_agonist_leuprolide",
          generic_name: "Leuprolide (GnRH agonist)",
          brand_names: ["Lupron"],
          class: "GnRH agonist (downregulating)",
          mechanism:
            "Chronic administration downregulates GnRH receptors → decreased LH/FSH → hypoestrogenic state.",
          key_indications: ["Endometriosis pain", "Uterine fibroids"],
          contraindications: ["Pregnancy", "Breastfeeding"],
          adverse_effects: ["Hot flashes", "Decreased bone density", "Mood changes", "Vaginal dryness"],
          monitoring: ["Bone density with prolonged use"],
          pregnancy_breastfeeding: "Contraindicated in pregnancy; typically not used in breastfeeding.",
          high_yield_facts: [
            "Produces a reversible 'medical menopause' – remember bone loss and vasomotor symptoms.",
            "Often used short-term due to adverse effects."
          ]
        }
      ]
    },
    {
      id: "contraceptives",
      name: "Contraceptives",
      description: "Hormonal and non-hormonal contraceptives with exam-relevant mechanisms and risks.",
      drugs: [
        {
          id: "cocs",
          generic_name: "Ethinyl estradiol / progestin (COCs)",
          brand_names: ["Various"],
          class: "Combined oral contraceptive",
          mechanism:
            "Suppresses LH/FSH preventing ovulation; progestin thickens cervical mucus and thins endometrium.",
          key_indications: ["Contraception", "Cycle regulation", "Dysmenorrhea", "Acne"],
          contraindications: [
            "Migraine with aura",
            "History of thromboembolism",
            "Uncontrolled hypertension",
            "Smoking >35 years"
          ],
          adverse_effects: ["Breakthrough bleeding", "Breast tenderness", "Nausea", "VTE risk"],
          pregnancy_breastfeeding: "Avoid in pregnancy; delay combined methods early postpartum if breastfeeding.",
          high_yield_facts: [
            "Main contraceptive effect: inhibition of ovulation (blocked LH surge).",
            "Know absolute vs relative contraindications for exams."
          ]
        },
        {
          id: "pop_minipill",
          generic_name: "Progestin-only pill (POP)",
          brand_names: ["Micronor", "Nor-QD", "Camila"],
          class: "Progestin-only contraceptive",
          mechanism:
            "Thickens cervical mucus and may suppress ovulation; effect is time-sensitive due to short half-life.",
          key_indications: ["Contraception when estrogen is contraindicated", "Breastfeeding women"],
          contraindications: ["Current breast cancer"],
          adverse_effects: ["Irregular bleeding", "Spotting"],
          pregnancy_breastfeeding: "Preferred in breastfeeding patients because it lacks estrogen.",
          high_yield_facts: [
            "Must be taken at the same time every day for best efficacy.",
            "Good for patients with estrogen contraindications (e.g., migraine with aura)."
          ]
        },
        {
          id: "levonorgestrel_iud",
          generic_name: "Levonorgestrel intrauterine system (LNG-IUS)",
          brand_names: ["Mirena", "Skyla", "Kyleena", "Liletta"],
          class: "Hormonal IUD",
          mechanism:
            "Locally releases progestin → thickens cervical mucus, thins endometrium, may inhibit ovulation in some users.",
          key_indications: ["Long-acting contraception", "Heavy menstrual bleeding", "Dysmenorrhea"],
          contraindications: ["Active pelvic infection", "Unexplained uterine bleeding", "Distorted uterine cavity"],
          adverse_effects: ["Irregular bleeding initially", "Lighter or absent menses over time"],
          pregnancy_breastfeeding: "Safe in breastfeeding; not used in existing pregnancy.",
          high_yield_facts: [
            "Often reduces menstrual bleeding and cramps.",
            "Mechanism is mostly local; systemic hormone levels are relatively low."
          ]
        },
        {
          id: "copper_iud",
          generic_name: "Copper intrauterine device",
          brand_names: ["Paragard"],
          class: "Non-hormonal IUD",
          mechanism:
            "Copper ions create a spermicidal inflammatory environment in the uterus, impairing sperm motility and viability.",
          key_indications: ["Long-acting reversible contraception", "Highly effective emergency contraception"],
          contraindications: ["Active pelvic infection", "Wilson disease (relative)", "Distorted uterine cavity"],
          adverse_effects: ["Heavier menses", "Increased cramps and dysmenorrhea"],
          pregnancy_breastfeeding: "Safe in breastfeeding; avoid in confirmed pregnancy.",
          high_yield_facts: [
            "Does NOT suppress ovulation.",
            "Heavier periods are a classic adverse effect vs hormonal IUD."
          ]
        },
        {
          id: "levonorgestrel_ec",
          generic_name: "Levonorgestrel (emergency contraception pill)",
          brand_names: ["Plan B One-Step", "Next Choice", "Take Action"],
          class: "Progestin emergency contraceptive",
          mechanism:
            "Primarily delays or inhibits ovulation if taken before the LH surge; may also thicken cervical mucus.",
          key_indications: ["Emergency contraception after unprotected intercourse"],
          contraindications: ["Known pregnancy (not effective for established pregnancy)"],
          adverse_effects: ["Nausea", "Irregular bleeding", "Fatigue"],
          pregnancy_breastfeeding:
            "Not an abortifacient; generally considered safe for breastfeeding with minimal transfer.",
          high_yield_facts: [
            "Most effective when taken as soon as possible after intercourse.",
            "Does not disrupt an implanted embryo."
          ]
        }
      ]
    },
    {
      id: "menopause_therapy",
      name: "Menopause & Hormone Therapy",
      description:
        "Key agents used for menopausal symptom control and bone protection, with a focus on mechanisms and risks.",
      drugs: [
        {
          id: "systemic_estrogen_progestin",
          generic_name: "Systemic estrogen ± progestin therapy",
          brand_names: ["Premarin", "Estrace", "Prempro", "Activella"],
          class: "Hormone therapy (HT)",
          mechanism:
            "Replaces estrogen (and progestin if uterus present) to relieve vasomotor symptoms and prevent bone loss.",
          key_indications: ["Moderate-to-severe vasomotor symptoms", "High fracture risk with low bone density"],
          contraindications: [
            "History of breast cancer",
            "History of VTE or stroke",
            "Unexplained vaginal bleeding",
            "Active liver disease"
          ],
          adverse_effects: ["Breast tenderness", "Irregular bleeding", "Increased VTE and stroke risk (depending on route)"],
          pregnancy_breastfeeding: "Not used in pregnancy or breastfeeding.",
          high_yield_facts: [
            "Use the lowest effective dose for the shortest duration compatible with treatment goals.",
            "Women with a uterus must receive progestin with estrogen to protect the endometrium."
          ]
        },
        {
          id: "raloxifene",
          generic_name: "Raloxifene",
          brand_names: ["Evista"],
          class: "Selective estrogen receptor modulator (SERM)",
          mechanism:
            "Estrogen agonist on bone, antagonist on breast and uterine tissue, reducing vertebral fracture risk.",
          key_indications: ["Prevention and treatment of postmenopausal osteoporosis"],
          contraindications: ["History of VTE", "Pregnancy"],
          adverse_effects: ["Hot flashes", "Leg cramps", "Increased VTE risk"],
          pregnancy_breastfeeding: "Contraindicated; not for premenopausal women planning pregnancy.",
          high_yield_facts: [
            "Does not relieve hot flashes; can actually worsen them.",
            "Important for bone health with anti-estrogenic effects on breast."
          ]
        }
      ]
    },
    {
      id: "bph_alpha_blockers",
      name: "BPH - Alpha-Blockers",
      description: "Alpha-1 adrenergic antagonists that relax prostatic and bladder neck smooth muscle to improve urinary flow in benign prostatic hyperplasia.",
      drugs: [
        {
          id: "tamsulosin",
          generic_name: "Tamsulosin",
          brand_names: ["Flomax"],
          class: "Alpha-1A selective adrenergic antagonist (Quinazoline)",
          mechanism: "Selectively blocks α1A adrenergic receptors in prostatic smooth muscle and bladder neck, causing relaxation and reducing urethral constriction. Minimal effect on vascular α1B receptors.",
          key_indications: [
            "Benign prostatic hyperplasia (BPH)",
            "Urinary hesitancy and weak stream",
            "Facilitation of ureteral stone passage"
          ],
          contraindications: [
            "Hypersensitivity to tamsulosin",
            "Severe hepatic impairment"
          ],
          adverse_effects: [
            "Retrograde ejaculation (8-18%)",
            "Dizziness",
            "Orthostatic hypotension (less than non-selective agents)",
            "Intraoperative floppy iris syndrome (IFIS)"
          ],
          monitoring: ["Blood pressure", "Urinary symptoms"],
          pregnancy_breastfeeding: "Not applicable - male-only indication",
          high_yield_facts: [
            "α1A selectivity minimizes orthostatic hypotension compared to non-selective agents",
            "Provides immediate symptom relief (unlike 5α-reductase inhibitors which take months)",
            "First-line for BPH with rapid onset of action"
          ]
        },
        {
          id: "silodosin",
          generic_name: "Silodosin",
          brand_names: ["Rapaflo"],
          class: "Highly selective alpha-1A adrenergic antagonist (Quinazoline)",
          mechanism: "Blocks α1A receptors with highest selectivity of all alpha-blockers, primarily targeting prostatic smooth muscle while sparing vascular receptors.",
          key_indications: ["Benign prostatic hyperplasia (BPH)"],
          contraindications: [
            "Severe renal impairment (CrCl <30 mL/min)",
            "Severe hepatic impairment",
            "Concurrent use with strong CYP3A4 inhibitors"
          ],
          adverse_effects: [
            "Retrograde ejaculation (28% - highest among alpha-blockers)",
            "Dizziness",
            "Diarrhea",
            "Orthostatic hypotension (minimal)"
          ],
          monitoring: ["Renal function", "Blood pressure"],
          pregnancy_breastfeeding: "Not applicable - male-only indication",
          high_yield_facts: [
            "Highest α1A selectivity results in maximal efficacy but highest retrograde ejaculation rate",
            "Minimal cardiovascular effects due to high selectivity",
            "May be switched to alfuzosin if ejaculatory dysfunction is problematic"
          ]
        },
        {
          id: "alfuzosin",
          generic_name: "Alfuzosin",
          brand_names: ["Uroxatral"],
          class: "Uroselective alpha-1 adrenergic antagonist (Quinazoline)",
          mechanism: "Blocks α1 receptors with moderate selectivity for prostatic tissue. Intermediate selectivity between non-selective and highly selective agents.",
          key_indications: ["Benign prostatic hyperplasia (BPH)"],
          contraindications: [
            "Moderate to severe hepatic impairment",
            "Concurrent use with potent CYP3A4 inhibitors",
            "Congenital or acquired QT prolongation"
          ],
          adverse_effects: [
            "Dizziness",
            "Upper respiratory tract infection",
            "Headache",
            "Fatigue",
            "Retrograde ejaculation (lower risk than tamsulosin/silodosin)"
          ],
          monitoring: ["Blood pressure", "QT interval in at-risk patients"],
          pregnancy_breastfeeding: "Not applicable - male-only indication",
          high_yield_facts: [
            "Once-daily extended-release formulation improves compliance",
            "Intermediate α1A selectivity balances efficacy with lower ejaculatory dysfunction",
            "Good alternative when retrograde ejaculation is problematic with more selective agents"
          ]
        },
        {
          id: "terazosin",
          generic_name: "Terazosin",
          brand_names: ["Hytrin"],
          class: "Non-selective alpha-1 adrenergic antagonist (Quinazoline)",
          mechanism: "Blocks both α1A (prostate) and α1B (vasculature) receptors non-selectively, causing both prostatic relaxation and vasodilation.",
          key_indications: [
            "Benign prostatic hyperplasia (BPH)",
            "Hypertension"
          ],
          contraindications: ["Hypersensitivity to quinazolines"],
          adverse_effects: [
            "Orthostatic hypotension (significant)",
            "Dizziness",
            "Asthenia (weakness)",
            "Syncope (first-dose phenomenon)",
            "Peripheral edema"
          ],
          monitoring: ["Blood pressure (especially first dose)", "Urinary symptoms"],
          pregnancy_breastfeeding: "Not applicable - male-only indication for BPH",
          high_yield_facts: [
            "Originally developed as antihypertensive, later used for BPH",
            "Requires dose titration to minimize first-dose hypotension",
            "Non-selectivity causes more cardiovascular side effects than selective agents"
          ]
        },
        {
          id: "doxazosin",
          generic_name: "Doxazosin",
          brand_names: ["Cardura"],
          class: "Non-selective alpha-1 adrenergic antagonist (Quinazoline)",
          mechanism: "Non-selectively blocks α1A (prostatic) and α1B (vascular) adrenergic receptors, causing smooth muscle relaxation in prostate and blood vessels.",
          key_indications: [
            "Benign prostatic hyperplasia (BPH)",
            "Hypertension"
          ],
          contraindications: ["Hypersensitivity to quinazolines or doxazosin"],
          adverse_effects: [
            "Orthostatic hypotension",
            "Dizziness",
            "Fatigue",
            "Edema",
            "Rhinitis"
          ],
          monitoring: ["Blood pressure", "Urinary flow symptoms"],
          pregnancy_breastfeeding: "Category C - not applicable for BPH indication",
          high_yield_facts: [
            "Dual indication for BPH and hypertension",
            "Non-selective blockade increases risk of orthostatic hypotension",
            "Requires gradual dose titration starting at 1 mg daily"
          ]
        },
        {
          id: "prazosin",
          generic_name: "Prazosin",
          brand_names: ["Minipress"],
          class: "Non-selective alpha-1 adrenergic antagonist (Quinazoline)",
          mechanism: "Blocks α1A and α1B adrenergic receptors non-selectively throughout the body, causing vasodilation and prostatic smooth muscle relaxation.",
          key_indications: [
            "Hypertension",
            "BPH (less commonly used)",
            "PTSD-related nightmares (off-label)"
          ],
          contraindications: ["Hypersensitivity to prazosin"],
          adverse_effects: [
            "Severe first-dose orthostatic hypotension and syncope",
            "Dizziness",
            "Headache",
            "Drowsiness",
            "Palpitations"
          ],
          monitoring: ["Blood pressure (especially first dose)", "Syncope risk"],
          pregnancy_breastfeeding: "Category C",
          high_yield_facts: [
            "Prototype non-selective α1-blocker",
            "Significant first-dose hypotension requires bedtime dosing",
            "Largely replaced by selective agents for BPH due to side effect profile"
          ]
        }
      ]
    },
    {
      id: "bph_5ari",
      name: "BPH - 5-Alpha Reductase Inhibitors",
      description: "Steroidal drugs that inhibit conversion of testosterone to DHT, leading to gradual prostate shrinkage over 3-6 months in benign prostatic hyperplasia.",
      drugs: [
        {
          id: "finasteride",
          generic_name: "Finasteride",
          brand_names: ["Proscar (5mg for BPH)", "Propecia (1mg for hair loss)"],
          class: "Type 2 5-alpha reductase inhibitor (Steroidal)",
          mechanism: "Selectively inhibits Type 2 5α-reductase enzyme in prostate and genital skin, preventing conversion of testosterone to dihydrotestosterone (DHT). Reduces prostatic DHT levels by ~70%, leading to prostate shrinkage over 3-6 months.",
          key_indications: [
            "Benign prostatic hyperplasia (BPH)",
            "Male pattern baldness (androgenetic alopecia) at lower dose"
          ],
          contraindications: [
            "Pregnancy (Category X - causes feminization of male fetus)",
            "Women of childbearing potential",
            "Hypersensitivity to finasteride"
          ],
          adverse_effects: [
            "Decreased libido (4-5%)",
            "Erectile dysfunction (4-5%)",
            "Ejaculation disorders",
            "Gynecomastia",
            "Decreased PSA levels (must multiply by 2 for screening)"
          ],
          monitoring: [
            "PSA levels (decreases ~50% after 6 months - double the value for cancer screening)",
            "Prostate size",
            "Sexual function"
          ],
          pregnancy_breastfeeding: "Absolutely contraindicated in pregnancy - Category X. Pregnant women should not handle crushed/broken tablets due to skin absorption risk.",
          high_yield_facts: [
            "Takes 3-6 months to see clinical benefit (unlike α-blockers which work immediately)",
            "Often combined with α-blockers for synergistic effect in moderate-severe BPH",
            "Reduces PSA by ~50% - must account for this when screening for prostate cancer"
          ]
        },
        {
          id: "dutasteride",
          generic_name: "Dutasteride",
          brand_names: ["Avodart"],
          class: "Dual 5-alpha reductase inhibitor (Type 1 and Type 2) (Steroidal)",
          mechanism: "Inhibits both Type 1 (skin, liver) and Type 2 (prostate, genital skin) 5α-reductase enzymes, producing more complete suppression of DHT (~90% reduction) compared to finasteride.",
          key_indications: ["Benign prostatic hyperplasia (BPH)"],
          contraindications: [
            "Pregnancy (Category X)",
            "Women of childbearing potential",
            "Children",
            "Hypersensitivity to dutasteride or other 5α-reductase inhibitors"
          ],
          adverse_effects: [
            "Decreased libido",
            "Erectile dysfunction",
            "Ejaculation disorders",
            "Gynecomastia",
            "Testicular pain",
            "Decreased PSA (must account for screening)"
          ],
          monitoring: [
            "PSA levels (decreases ~50% - adjust for screening)",
            "Prostate volume",
            "Sexual function"
          ],
          pregnancy_breastfeeding: "Category X - absolutely contraindicated. Can be absorbed through skin; pregnant women should not handle capsules.",
          high_yield_facts: [
            "Dual inhibition (Type 1 + Type 2) provides greater DHT suppression than finasteride",
            "Longer half-life than finasteride (~5 weeks vs 6-8 hours)",
            "May have slightly higher rate of sexual side effects compared to finasteride"
          ]
        }
      ]
    },
    {
      id: "erectile_dysfunction",
      name: "Erectile Dysfunction Medications",
      description: "PDE-5 inhibitors and prostaglandin E1 analogs that enhance erectile function through different mechanisms of smooth muscle relaxation and vasodilation.",
      drugs: [
        {
          id: "sildenafil",
          generic_name: "Sildenafil",
          brand_names: ["Viagra (ED)", "Revatio (pulmonary HTN)"],
          class: "Phosphodiesterase-5 (PDE-5) inhibitor (Pyrazolopyrimidinone)",
          mechanism: "Inhibits PDE-5 enzyme, preventing breakdown of cGMP. Elevated cGMP enhances nitric oxide-mediated smooth muscle relaxation in penile corpus cavernosum, promoting vasodilation and blood flow for erection.",
          key_indications: [
            "Erectile dysfunction (ED)",
            "Pulmonary arterial hypertension (Revatio formulation)"
          ],
          contraindications: [
            "Concurrent nitrate use (absolute contraindication)",
            "Severe cardiovascular disease",
            "Recent stroke or MI (<6 months)",
            "Hypotension (<90/50 mmHg)",
            "Hereditary retinal disorders"
          ],
          adverse_effects: [
            "Headache (16%)",
            "Flushing",
            "Dyspepsia",
            "Nasal congestion",
            "Blue-tinted vision (due to PDE-6 inhibition in retina)",
            "Hypotension when combined with nitrates"
          ],
          monitoring: ["Blood pressure", "Cardiovascular status", "Visual changes"],
          pregnancy_breastfeeding: "Not applicable - male indication",
          high_yield_facts: [
            "ABSOLUTE contraindication with nitrates - both work via NO-cGMP pathway causing severe hypotension",
            "Only 10-fold selectivity for PDE-5 over PDE-6 → blue vision at high doses",
            "Onset: 30-60 minutes; Duration: 4-6 hours; take on empty stomach for faster absorption"
          ]
        },
        {
          id: "tadalafil",
          generic_name: "Tadalafil",
          brand_names: ["Cialis (ED)", "Adcirca (pulmonary HTN)"],
          class: "Phosphodiesterase-5 (PDE-5) inhibitor (Pyrazolopyrimidinone)",
          mechanism: "Inhibits PDE-5, preventing cGMP breakdown and enhancing NO-mediated smooth muscle relaxation in penile arteries. Longest-acting PDE-5 inhibitor.",
          key_indications: [
            "Erectile dysfunction (ED)",
            "Benign prostatic hyperplasia (BPH)",
            "ED + BPH combination",
            "Pulmonary arterial hypertension"
          ],
          contraindications: [
            "Nitrate use (absolute)",
            "Severe cardiovascular disease",
            "Severe hepatic impairment",
            "Hypotension"
          ],
          adverse_effects: [
            "Headache",
            "Dyspepsia",
            "Back pain and myalgia (unique to tadalafil)",
            "Flushing",
            "Nasal congestion"
          ],
          monitoring: ["Blood pressure", "Cardiac function"],
          pregnancy_breastfeeding: "Not applicable - male indication",
          high_yield_facts: [
            "Longest duration of action (~36 hours, 'the weekend pill') allows for spontaneity",
            "Half-life ~17.5 hours vs 4 hours for sildenafil",
            "Can be taken with food without affecting absorption (unlike sildenafil)"
          ]
        },
        {
          id: "vardenafil",
          generic_name: "Vardenafil",
          brand_names: ["Levitra", "Staxyn (ODT)"],
          class: "Phosphodiesterase-5 (PDE-5) inhibitor (Pyrazolopyrimidinone)",
          mechanism: "Inhibits PDE-5 enzyme, increasing cGMP levels and enhancing NO-mediated smooth muscle relaxation and vasodilation in penile tissue.",
          key_indications: ["Erectile dysfunction (ED)"],
          contraindications: [
            "Nitrate therapy (absolute)",
            "Congenital QT prolongation",
            "Class IA or III antiarrhythmics",
            "Severe hepatic impairment"
          ],
          adverse_effects: [
            "Headache",
            "Flushing",
            "Rhinitis",
            "Dyspepsia",
            "QT prolongation (rare)"
          ],
          monitoring: ["Blood pressure", "QT interval in at-risk patients"],
          pregnancy_breastfeeding: "Not applicable - male indication",
          high_yield_facts: [
            "Onset: 60 minutes; Duration: 4-6 hours",
            "More potent than sildenafil on mg-for-mg basis",
            "Available as orally disintegrating tablet (Staxyn) for faster onset"
          ]
        },
        {
          id: "avanafil",
          generic_name: "Avanafil",
          brand_names: ["Stendra"],
          class: "Phosphodiesterase-5 (PDE-5) inhibitor (Pyrazolopyrimidinone)",
          mechanism: "Highly selective PDE-5 inhibitor that prevents cGMP degradation, enhancing NO-mediated vasodilation in penile tissue. Greater selectivity reduces off-target effects.",
          key_indications: ["Erectile dysfunction (ED)"],
          contraindications: [
            "Nitrate use (absolute)",
            "Severe cardiovascular disease",
            "Severe hepatic/renal impairment"
          ],
          adverse_effects: [
            "Headache (lower incidence than older PDE-5 inhibitors)",
            "Flushing",
            "Nasal congestion",
            "Back pain"
          ],
          monitoring: ["Blood pressure", "Cardiovascular status"],
          pregnancy_breastfeeding: "Not applicable - male indication",
          high_yield_facts: [
            "Fastest onset of action (15-30 minutes) - best for spontaneity",
            "Highest PDE-5 selectivity results in fewer side effects (less blue vision than sildenafil)",
            "Newest PDE-5 inhibitor with improved side effect profile"
          ]
        },
        {
          id: "alprostadil",
          generic_name: "Alprostadil (Prostaglandin E1)",
          brand_names: ["Caverject (injection)", "MUSE (intraurethral)", "Vitaros (topical cream - Europe)"],
          class: "Prostaglandin E1 analog",
          mechanism: "Activates adenylyl cyclase → increases cAMP → reduces intracellular calcium → smooth muscle relaxation and vasodilation in corpus cavernosum. Works via different pathway than PDE-5 inhibitors.",
          key_indications: [
            "Erectile dysfunction (when oral PDE-5 inhibitors contraindicated or ineffective)",
            "Diagnostic aid for ED evaluation"
          ],
          contraindications: [
            "Conditions predisposing to priapism (sickle cell, leukemia)",
            "Penile implants",
            "Peyronie's disease with severe curvature",
            "Urethral stricture (for MUSE formulation)"
          ],
          adverse_effects: [
            "Penile pain (common, especially with injection)",
            "Prolonged erection/priapism (requires emergency treatment if >4 hours)",
            "Penile fibrosis with chronic use",
            "Hypotension (rare)",
            "Urethral bleeding (MUSE)"
          ],
          monitoring: ["Signs of priapism", "Penile fibrosis", "Proper injection technique"],
          pregnancy_breastfeeding: "Not applicable - male indication. Use barrier contraception if partner is pregnant.",
          high_yield_facts: [
            "Alternative to PDE-5 inhibitors - safe with nitrates (different mechanism)",
            "Requires proper training for intracavernosal injection technique",
            "Risk of priapism requires patient education on seeking emergency care if erection >4 hours"
          ]
        }
      ]
    },
    {
      id: "urinary_incontinence_antimuscarinics",
      name: "Urinary Incontinence - Antimuscarinics",
      description: "Muscarinic receptor antagonists that block involuntary detrusor muscle contractions in overactive bladder, reducing urgency, frequency, and urge incontinence.",
      drugs: [
        {
          id: "oxybutynin",
          generic_name: "Oxybutynin",
          brand_names: ["Ditropan", "Ditropan XL", "Oxytrol (transdermal patch)", "Gelnique (topical gel)"],
          class: "Non-selective antimuscarinic anticholinergic",
          mechanism: "Blocks M1, M2, and M3 muscarinic receptors in bladder detrusor muscle and throughout the body, reducing involuntary bladder contractions. Also has direct smooth muscle relaxant properties.",
          key_indications: [
            "Overactive bladder (OAB)",
            "Urge urinary incontinence",
            "Urgency and frequency",
            "Neurogenic bladder"
          ],
          contraindications: [
            "Urinary retention",
            "Gastric retention",
            "Uncontrolled narrow-angle glaucoma",
            "Myasthenia gravis"
          ],
          adverse_effects: [
            "Dry mouth (very common, 70%)",
            "Constipation",
            "Blurred vision",
            "Cognitive impairment (especially elderly)",
            "Urinary retention",
            "Drowsiness",
            "Heat intolerance"
          ],
          monitoring: ["Urinary retention", "Cognitive function in elderly", "Post-void residual volume"],
          pregnancy_breastfeeding: "Category B - use if benefit outweighs risk",
          high_yield_facts: [
            "Highest rate of dry mouth and cognitive side effects due to non-selectivity and CNS penetration",
            "Extended-release and transdermal formulations reduce side effects",
            "Avoid in elderly with dementia due to anticholinergic cognitive burden"
          ]
        },
        {
          id: "tolterodine",
          generic_name: "Tolterodine",
          brand_names: ["Detrol", "Detrol LA"],
          class: "M2/M3-selective antimuscarinic",
          mechanism: "Preferentially blocks M2 and M3 muscarinic receptors in bladder, with some selectivity for bladder tissue over salivary glands, reducing dry mouth compared to oxybutynin.",
          key_indications: [
            "Overactive bladder",
            "Urge incontinence",
            "Urgency and frequency"
          ],
          contraindications: [
            "Urinary retention",
            "Gastric retention",
            "Uncontrolled narrow-angle glaucoma"
          ],
          adverse_effects: [
            "Dry mouth (less than oxybutynin)",
            "Constipation",
            "Headache",
            "Dizziness",
            "Blurred vision"
          ],
          monitoring: ["Urinary retention", "Hepatic function"],
          pregnancy_breastfeeding: "Category C",
          high_yield_facts: [
            "Better tolerated than oxybutynin with less dry mouth",
            "Extended-release formulation (Detrol LA) once daily improves compliance",
            "Good first-line alternative to oxybutynin"
          ]
        },
        {
          id: "solifenacin",
          generic_name: "Solifenacin",
          brand_names: ["Vesicare", "Vesicare LS"],
          class: "Long-acting non-selective antimuscarinic",
          mechanism: "Competitively blocks muscarinic receptors (M1-M5) in detrusor muscle, preventing acetylcholine-mediated bladder contractions. Long duration allows once-daily dosing.",
          key_indications: [
            "Overactive bladder",
            "Urge urinary incontinence",
            "Urgency and frequency"
          ],
          contraindications: [
            "Urinary retention",
            "Gastric retention",
            "Uncontrolled narrow-angle glaucoma",
            "Severe hepatic impairment"
          ],
          adverse_effects: [
            "Dry mouth",
            "Constipation",
            "Blurred vision",
            "UTI",
            "Dyspepsia"
          ],
          monitoring: ["QT interval (in at-risk patients)", "Urinary retention"],
          pregnancy_breastfeeding: "Category C",
          high_yield_facts: [
            "Once-daily dosing improves compliance",
            "Better tolerability profile than older antimuscarinics",
            "May prolong QT interval - caution with other QT-prolonging drugs"
          ]
        },
        {
          id: "darifenacin",
          generic_name: "Darifenacin",
          brand_names: ["Enablex"],
          class: "M3-selective antimuscarinic",
          mechanism: "Selectively blocks M3 muscarinic receptors in bladder detrusor muscle while sparing M1 receptors in the CNS, reducing cognitive side effects especially in elderly patients.",
          key_indications: [
            "Overactive bladder",
            "Urge incontinence",
            "Urgency and frequency"
          ],
          contraindications: [
            "Urinary retention",
            "Gastric retention",
            "Uncontrolled narrow-angle glaucoma",
            "Severe hepatic impairment"
          ],
          adverse_effects: [
            "Dry mouth",
            "Constipation (most common)",
            "Dyspepsia",
            "Headache",
            "Minimal cognitive effects"
          ],
          monitoring: ["Urinary retention", "Constipation", "Cognitive function"],
          pregnancy_breastfeeding: "Category C",
          high_yield_facts: [
            "M3 selectivity spares M1 receptors in brain → reduced cognitive impairment",
            "Best choice for elderly patients with dementia or cognitive concerns",
            "Higher incidence of constipation than other antimuscarinics"
          ]
        }
      ]
    },
    {
      id: "urinary_incontinence_beta3",
      name: "Urinary Incontinence - Beta-3 Agonist",
      description: "Beta-3 adrenergic receptor agonist that relaxes detrusor muscle and increases bladder capacity without anticholinergic side effects.",
      drugs: [
        {
          id: "mirabegron",
          generic_name: "Mirabegron",
          brand_names: ["Myrbetriq"],
          class: "Beta-3 adrenergic agonist",
          mechanism: "Selectively activates β3 adrenergic receptors in bladder detrusor muscle, promoting smooth muscle relaxation during the storage phase and increasing bladder capacity. Does not block muscarinic receptors.",
          key_indications: [
            "Overactive bladder",
            "Urge incontinence",
            "Urgency and frequency",
            "Alternative for patients who cannot tolerate antimuscarinics"
          ],
          contraindications: [
            "Severe uncontrolled hypertension (≥180/110 mmHg)",
            "End-stage renal disease",
            "Severe hepatic impairment"
          ],
          adverse_effects: [
            "Hypertension (increase in BP ~1-3 mmHg)",
            "Nasopharyngitis",
            "Urinary tract infection",
            "Headache",
            "NO dry mouth, constipation, or cognitive effects"
          ],
          monitoring: [
            "Blood pressure (especially first 2-3 months)",
            "Heart rate"
          ],
          pregnancy_breastfeeding: "Category C",
          high_yield_facts: [
            "Alternative to antimuscarinics - lacks anticholinergic side effects (no dry mouth/cognitive issues)",
            "Preferred in elderly with dementia or patients who cannot tolerate antimuscarinics",
            "Monitor blood pressure - main side effect is mild hypertension"
          ]
        }
      ]
    },
    {
      id: "nocturnal_enuresis",
      name: "Nocturnal Enuresis (Bedwetting)",
      description: "Vasopressin analog that reduces nighttime urine production in children with primary nocturnal enuresis.",
      drugs: [
        {
          id: "desmopressin",
          generic_name: "Desmopressin (DDAVP)",
          brand_names: ["DDAVP", "Stimate", "Nocdurna"],
          class: "Synthetic vasopressin (ADH) analog",
          mechanism: "Acts on V2 receptors in renal collecting ducts to promote water reabsorption, reducing nocturnal urine production. More selective for V2 than V1 receptors (minimal pressor effects).",
          key_indications: [
            "Primary nocturnal enuresis in children ≥6 years",
            "Central diabetes insipidus",
            "Hemophilia A and von Willebrand disease (increases factor VIII)",
            "Nocturia in adults (Nocdurna formulation)"
          ],
          contraindications: [
            "Hyponatremia or history of hyponatremia",
            "Polydipsia",
            "Heart failure",
            "Renal impairment (CrCl <50 mL/min)"
          ],
          adverse_effects: [
            "Hyponatremia (potentially severe - monitor electrolytes)",
            "Headache",
            "Nausea",
            "Abdominal pain",
            "Water intoxication if fluid intake not restricted"
          ],
          monitoring: [
            "Serum sodium (especially during initiation)",
            "Fluid restriction (limit fluids 1 hour before to 8 hours after dose)",
            "Body weight"
          ],
          pregnancy_breastfeeding: "Category B - generally considered safe in pregnancy",
          high_yield_facts: [
            "First-line pharmacotherapy for nocturnal enuresis after behavioral interventions fail",
            "MUST restrict fluid intake to prevent hyponatremia and water intoxication",
            "Oral formulation convenient for pediatric use; intranasal formulation discontinued for enuresis due to unpredictable absorption"
          ]
        }
      ]
    },
    {
      id: "pms_treatments",
      name: "PMS & PMDD Treatments",
      description: "SSRIs and supplements used to manage emotional, behavioral, and physical symptoms of premenstrual syndrome and premenstrual dysphoric disorder.",
      drugs: [
        {
          id: "ssri_pms",
          generic_name: "SSRIs (Sertraline, Fluoxetine, Paroxetine, Citalopram, Escitalopram)",
          brand_names: [
            "Sertraline (Zoloft)",
            "Fluoxetine (Prozac, Sarafem)",
            "Paroxetine (Paxil)",
            "Citalopram (Celexa)",
            "Escitalopram (Lexapro)"
          ],
          class: "Selective serotonin reuptake inhibitors (SSRIs)",
          mechanism: "Inhibit presynaptic serotonin reuptake, increasing serotonin availability in the synaptic cleft. Addresses serotonin deficiency implicated in PMS/PMDD mood and behavioral symptoms.",
          key_indications: [
            "Premenstrual dysphoric disorder (PMDD)",
            "Severe premenstrual syndrome (PMS) with mood symptoms",
            "Depression",
            "Anxiety disorders"
          ],
          contraindications: [
            "Concurrent MAOI use (within 14 days)",
            "Hypersensitivity to SSRIs"
          ],
          adverse_effects: [
            "Nausea",
            "Sexual dysfunction (decreased libido, anorgasmia)",
            "Insomnia or somnolence",
            "Headache",
            "Weight gain",
            "Serotonin syndrome (rare, with multiple serotonergic agents)"
          ],
          monitoring: [
            "Mood and suicidal ideation (especially early treatment)",
            "Response to therapy",
            "Sexual function"
          ],
          pregnancy_breastfeeding: "Category C (most SSRIs); paroxetine is Category D. Weigh risks/benefits in pregnancy.",
          high_yield_facts: [
            "Most effective pharmacologic treatment for PMDD and severe PMS mood symptoms",
            "Can be dosed continuously or luteal phase only (14 days before menses)",
            "Works faster for PMDD than depression (may see benefit within days vs weeks)"
          ]
        },
        {
          id: "calcium_magnesium_pms",
          generic_name: "Calcium and Magnesium Supplements",
          brand_names: ["Various OTC calcium/magnesium supplements"],
          class: "Mineral supplementation",
          mechanism: "Calcium and magnesium deficiencies contribute to PMS symptoms. Supplementation helps regulate neurotransmitter function, reduces water retention, stabilizes mood, and decreases headaches and sugar cravings.",
          key_indications: [
            "PMS symptom management (headaches, bloating, cravings)",
            "Prevention of osteoporosis",
            "General mineral supplementation"
          ],
          contraindications: [
            "Hypercalcemia",
            "Hypermagnesemia",
            "Severe renal impairment"
          ],
          adverse_effects: [
            "Constipation (calcium)",
            "Diarrhea (magnesium in high doses)",
            "Nausea",
            "Drug interactions (decreased absorption of certain antibiotics, thyroid medications)"
          ],
          monitoring: [
            "Serum calcium and magnesium in at-risk patients",
            "Renal function"
          ],
          pregnancy_breastfeeding: "Generally safe; calcium supplementation recommended in pregnancy",
          high_yield_facts: [
            "Calcium 1200 mg/day shown to reduce PMS mood and physical symptoms",
            "Magnesium 200-400 mg/day helps with bloating, headaches, and cravings",
            "First-line complementary therapy before pharmacologic options"
          ]
        }
      ]
    },
    {
      id: "hyperprolactinemia_treatments",
      name: "Hyperprolactinemia & Galactorrhea Treatments",
      description: "Dopamine agonists that inhibit prolactin secretion from the pituitary, used to treat prolactinomas and hyperprolactinemia-related disorders.",
      drugs: [
        {
          id: "cabergoline",
          generic_name: "Cabergoline",
          brand_names: ["Dostinex"],
          class: "Dopamine D2 receptor agonist (ergot derivative)",
          mechanism: "Activates dopamine D2 receptors in the pituitary lactotrophs, inhibiting prolactin secretion. Also shrinks prolactin-secreting pituitary adenomas (prolactinomas).",
          key_indications: [
            "Hyperprolactinemia",
            "Prolactinoma (micro- and macro-adenomas)",
            "Galactorrhea",
            "Prolactin-related amenorrhea or infertility",
            "Suppression of lactation (off-label)"
          ],
          contraindications: [
            "Uncontrolled hypertension",
            "Pregnancy-induced hypertension",
            "Cardiac valvulopathy",
            "Hypersensitivity to ergot alkaloids"
          ],
          adverse_effects: [
            "Nausea",
            "Headache",
            "Dizziness",
            "Orthostatic hypotension",
            "Cardiac valvular disease (with long-term high-dose use)",
            "Impulse control disorders (rare)"
          ],
          monitoring: [
            "Prolactin levels",
            "Pituitary imaging (tumor size)",
            "Cardiac valves (echocardiogram with long-term use)",
            "Blood pressure",
            "Pregnancy status"
          ],
          pregnancy_breastfeeding: "Category B; generally discontinued once pregnancy confirmed unless macroadenoma with mass effects",
          high_yield_facts: [
            "First-line medical therapy for prolactinomas (more effective than bromocriptine)",
            "Long half-life allows twice-weekly dosing (better compliance than bromocriptine)",
            "Can shrink macroprolactinomas and restore fertility"
          ]
        },
        {
          id: "bromocriptine",
          generic_name: "Bromocriptine",
          brand_names: ["Parlodel", "Cycloset"],
          class: "Dopamine D2 receptor agonist (ergot derivative)",
          mechanism: "Stimulates dopamine D2 receptors in the pituitary, inhibiting prolactin release. Also used for Parkinson's disease and type 2 diabetes (Cycloset formulation).",
          key_indications: [
            "Hyperprolactinemia",
            "Prolactinoma",
            "Galactorrhea",
            "Parkinson's disease",
            "Type 2 diabetes (Cycloset)"
          ],
          contraindications: [
            "Uncontrolled hypertension",
            "Pregnancy-induced hypertension/preeclampsia",
            "Hypersensitivity to ergot derivatives",
            "Syncopal migraine"
          ],
          adverse_effects: [
            "Nausea and vomiting (very common)",
            "Orthostatic hypotension",
            "Headache",
            "Dizziness",
            "Fatigue",
            "Hallucinations (in Parkinson's patients)"
          ],
          monitoring: [
            "Prolactin levels",
            "Blood pressure",
            "Pituitary tumor size",
            "Pregnancy status"
          ],
          pregnancy_breastfeeding: "Category B; used during pregnancy for macroprolactinomas if needed",
          high_yield_facts: [
            "Older agent; largely replaced by cabergoline due to better tolerability and less frequent dosing",
            "Requires daily to TID dosing (vs cabergoline twice weekly)",
            "High incidence of nausea limits compliance"
          ]
        }
      ]
    },
    {
      id: "testosterone_replacement",
      name: "Testosterone Replacement Therapy",
      description: "Exogenous testosterone used to treat male hypogonadism and related symptoms of low testosterone.",
      drugs: [
        {
          id: "testosterone",
          generic_name: "Testosterone",
          brand_names: [
            "AndroGel (topical gel)",
            "Testim (topical gel)",
            "Axiron (topical solution)",
            "Androderm (transdermal patch)",
            "Depo-Testosterone (IM injection)",
            "Aveed (IM injection - long-acting)",
            "Testopel (subcutaneous pellet)"
          ],
          class: "Androgen hormone replacement",
          mechanism: "Exogenous testosterone replaces endogenous testosterone in hypogonadal men, binding to androgen receptors to restore physiologic effects including libido, muscle mass, bone density, and spermatogenesis.",
          key_indications: [
            "Male hypogonadism (primary or secondary)",
            "Delayed puberty in males",
            "Gender-affirming hormone therapy (transgender men)"
          ],
          contraindications: [
            "Prostate cancer",
            "Breast cancer in men",
            "Uncontrolled heart failure",
            "Severe sleep apnea",
            "Hematocrit >50%",
            "Pregnancy (Category X if used by women)"
          ],
          adverse_effects: [
            "Polycythemia (elevated hematocrit/hemoglobin)",
            "Acne and oily skin",
            "Gynecomastia (aromatization to estrogen)",
            "Testicular atrophy",
            "Decreased fertility (suppression of spermatogenesis)",
            "Sleep apnea worsening",
            "Prostate enlargement (monitor PSA)",
            "Fluid retention",
            "Behavioral changes (aggression, mood swings)"
          ],
          monitoring: [
            "Testosterone levels (target mid-normal range)",
            "Hematocrit/hemoglobin (baseline, 3-6 months, then annually)",
            "PSA and digital rectal exam (baseline, 3-6 months, then annually in men >40)",
            "Lipid panel",
            "Bone density (if osteoporosis risk)",
            "Liver function tests"
          ],
          pregnancy_breastfeeding: "Category X - contraindicated in women who are or may become pregnant. Can cause virilization of female fetus.",
          high_yield_facts: [
            "Multiple formulations; topical gels popular but risk of transfer to others (especially children/women)",
            "Suppresses endogenous testosterone production via negative feedback on LH/FSH",
            "Monitor hematocrit - polycythemia is dose-limiting toxicity requiring dose reduction or phlebotomy"
          ]
        }
      ]
    }
  ]
};
