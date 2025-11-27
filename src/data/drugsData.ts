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
    }
  ]
};
