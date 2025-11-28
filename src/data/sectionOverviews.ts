import type { SectionOverview } from '../types';

/**
 * Section overviews with high-yield summaries, objectives, key points, and clinical pearls.
 * These are merged with the existing game_modes data to create enhanced sections.
 */

type SectionOverviewMap = {
  [sectionName: string]: {
    id: string;
    category: string;
    overview: SectionOverview;
  };
};

export const sectionOverviewsMap: SectionOverviewMap = {
  "Benign Breast Disease": {
    id: "bbd",
    category: "Breast & Lactation",
    overview: {
      summary:
        "Benign breast disease refers to a group of non-cancerous breast changes that often present with cyclic pain and nodularity. Hormonal fluctuations across the menstrual cycle play a central role.",
      objectives: [
        "Describe the typical symptoms and exam findings of benign breast disease.",
        "Differentiate benign breast disease from inflammatory and malignant breast conditions.",
        "Explain the relationship between BBD and the menstrual cycle."
      ],
      key_points: [
        "Cyclic mastalgia and lumpiness that vary with the menstrual cycle are classic.",
        "Findings are usually bilateral, diffuse, and rubbery rather than hard and fixed.",
        "Most simple BBD does NOT substantially increase breast cancer risk.",
        "Symptoms tend to peak in the luteal phase and improve with menses."
      ],
      high_yield_clinical_pearls: [
        "Cyclic pain that improves after menses strongly suggests BBD rather than malignancy.",
        "Red flags like skin dimpling, nipple retraction, or fixed hard mass require malignancy workup."
      ]
    }
  },
  "Galactorrhea": {
    id: "galactorrhea",
    category: "Breast & Lactation",
    overview: {
      summary:
        "Galactorrhea is inappropriate milk production unrelated to pregnancy or nursing, usually due to hyperprolactinemia from pituitary, medication, or hypothalamic causes.",
      objectives: [
        "Define galactorrhea and identify common causes.",
        "Explain how dopamine and prolactin interact in regulation of lactation.",
        "Recognize associated features that suggest a pituitary adenoma."
      ],
      key_points: [
        "Galactorrhea is most commonly caused by elevated prolactin.",
        "Dopamine from the hypothalamus normally inhibits prolactin release.",
        "Antipsychotics and other dopamine-blocking drugs can cause galactorrhea.",
        "Pituitary adenomas may cause galactorrhea, amenorrhea, and visual field defects."
      ],
      high_yield_clinical_pearls: [
        "Always rule out pregnancy and check prolactin in unexplained galactorrhea.",
        "Headache + visual changes + galactorrhea = think pituitary tumor."
      ]
    }
  },
  "Mastitis": {
    id: "mastitis",
    category: "Breast & Lactation",
    overview: {
      summary:
        "Mastitis is an inflammatory and often infectious process of the breast, most commonly seen in lactating women due to milk stasis and bacterial entry via nipple trauma.",
      objectives: [
        "Describe the typical presentation of lactational mastitis.",
        "Explain the role of milk stasis and nipple trauma in mastitis pathophysiology.",
        "Outline basic management principles including whether breastfeeding should continue."
      ],
      key_points: [
        "Presents with localized breast pain, erythema, warmth, and systemic symptoms (fever, malaise).",
        "Milk stasis and nipple fissures allow bacteria (often Staph aureus) to enter.",
        "Continuing breastfeeding usually helps resolve milk stasis and is generally recommended.",
        "Untreated mastitis can progress to abscess formation."
      ],
      high_yield_clinical_pearls: [
        "Look for a wedge-shaped erythematous area in lactational mastitis.",
        "Severe localized fluctuant mass suggests abscess rather than simple mastitis."
      ]
    }
  },
  "Dysmenorrhea": {
    id: "dysmenorrhea",
    category: "Menstrual & Uterine Disorders",
    overview: {
      summary:
        "Dysmenorrhea refers to painful menstruation. Primary dysmenorrhea is prostaglandin-mediated pain with otherwise normal anatomy, while secondary dysmenorrhea is due to underlying pelvic pathology.",
      objectives: [
        "Differentiate primary from secondary dysmenorrhea.",
        "Explain the prostaglandin mechanism underlying primary dysmenorrhea.",
        "Identify clinical clues that suggest secondary causes such as endometriosis."
      ],
      key_points: [
        "Primary dysmenorrhea begins within a few years of menarche with ovulatory cycles.",
        "Prostaglandins cause uterine contractions and ischemia → crampy pain.",
        "Secondary dysmenorrhea often develops later and may be associated with dyspareunia or abnormal bleeding.",
        "NSAIDs and hormonal contraception are first-line treatments for primary dysmenorrhea."
      ],
      high_yield_clinical_pearls: [
        "New-onset dysmenorrhea in older patients warrants evaluation for secondary causes.",
        "Pain starting before menses and persisting after suggests endometriosis rather than primary dysmenorrhea."
      ]
    }
  },
  "Amenorrhea": {
    id: "amenorrhea",
    category: "Menstrual & Uterine Disorders",
    overview: {
      summary:
        "Amenorrhea is the absence of menstruation and can be primary (no menses by age 15) or secondary (cessation after prior normal cycles). It reflects disruption at any level of the hypothalamic–pituitary–ovarian–uterine axis.",
      objectives: [
        "Define primary and secondary amenorrhea.",
        "Describe major causes including pregnancy, hypothalamic suppression, pituitary, ovarian, and outflow tract disorders.",
        "Relate hormonal patterns (GnRH, FSH/LH, estrogen) to the level of dysfunction."
      ],
      key_points: [
        "Pregnancy is the most common cause of secondary amenorrhea and must always be ruled out.",
        "Functional hypothalamic amenorrhea occurs with stress, weight loss, or excessive exercise.",
        "Hyperprolactinemia can cause amenorrhea with galactorrhea.",
        "Ovarian failure leads to high FSH/LH and low estrogen."
      ],
      high_yield_clinical_pearls: [
        "Secondary amenorrhea definition: ≥3 months without menses in women with previously regular cycles.",
        "Amenorrhea + galactorrhea strongly suggests hyperprolactinemia."
      ]
    }
  },
  "Dysfunctional Uterine Bleeding": {
    id: "dub",
    category: "Menstrual & Uterine Disorders",
    overview: {
      summary:
        "Dysfunctional uterine bleeding is abnormal uterine bleeding not explained by pregnancy, structural lesions, or systemic disease, most often due to anovulatory cycles and unopposed estrogen.",
      objectives: [
        "Define DUB and differentiate it from bleeding due to structural causes.",
        "Explain how anovulation leads to unopposed estrogen and irregular bleeding.",
        "Recognize life stages where DUB is most common."
      ],
      key_points: [
        "Common near menarche and perimenopause when cycles are frequently anovulatory.",
        "Lack of ovulation → no corpus luteum → little progesterone → unopposed estrogen.",
        "Endometrium proliferates irregularly and sheds unpredictably → irregular, heavy, or prolonged bleeding.",
        "Chronic unopposed estrogen increases risk of endometrial hyperplasia and carcinoma."
      ],
      high_yield_clinical_pearls: [
        "Think DUB in teens and perimenopausal women with irregular heavy bleeding and no structural abnormalities.",
        "Always rule out pregnancy and structural pathology (fibroids, polyps) before labeling bleeding as DUB."
      ]
    }
  },
  "Premenstrual Syndrome": {
    id: "pms",
    category: "Menstrual & Uterine Disorders",
    overview: {
      summary:
        "PMS consists of recurrent physical, emotional, and behavioral symptoms that occur in the luteal phase and resolve shortly after onset of menses. It may involve serotonergic and hormonal mechanisms.",
      objectives: [
        "Describe the timing and symptom pattern of PMS.",
        "Differentiate PMS from PMDD and non–cycle-related mood disorders.",
        "Outline basic treatment options including lifestyle measures, SSRIs, and hormonal therapy."
      ],
      key_points: [
        "Symptoms occur in the luteal phase and resolve within a few days of menses.",
        "Common symptoms: mood changes, irritability, bloating, breast tenderness, headaches.",
        "Diagnosis requires symptom tracking and functional impairment.",
        "SSRIs and lifestyle changes are key treatments; hormonal suppression may help."
      ],
      high_yield_clinical_pearls: [
        "If symptoms are present all month, think primary mood/anxiety disorder rather than PMS.",
        "PMDD is a severe form with prominent mood symptoms and greater impairment."
      ]
    }
  },
  "Polycystic Ovary Syndrome": {
    id: "pcos",
    category: "PCOS & Endometriosis",
    overview: {
      summary:
        "PCOS is a common endocrine disorder characterized by hyperandrogenism, ovulatory dysfunction, and polycystic ovaries, closely linked to insulin resistance and metabolic syndrome.",
      objectives: [
        "Recall the diagnostic features of PCOS.",
        "Explain how hyperandrogenism and insulin resistance cause signs and symptoms.",
        "Recognize short- and long-term complications, including infertility and endometrial cancer risk."
      ],
      key_points: [
        "Common presentation: irregular menses, hirsutism, acne, and obesity.",
        "Insulin resistance contributes to increased ovarian androgen production.",
        "Chronic anovulation → unopposed estrogen → endometrial hyperplasia risk.",
        "PCOS is a diagnosis of exclusion; rule out other endocrine causes of hyperandrogenism."
      ],
      high_yield_clinical_pearls: [
        "Acanthosis nigricans is a clue to insulin resistance in PCOS.",
        "First-line treatments often combine lifestyle changes, hormonal contraception, and insulin-sensitizing agents."
      ]
    }
  },
  "Endometriosis": {
    id: "endometriosis",
    category: "PCOS & Endometriosis",
    overview: {
      summary:
        "Endometriosis is the presence of functioning endometrial tissue outside the uterine cavity, causing cyclical bleeding, inflammation, adhesions, pain, and often infertility.",
      objectives: [
        "Define endometriosis and list common sites of ectopic implants.",
        "Describe the classic symptom triad and its relationship to the menstrual cycle.",
        "Explain how endometriosis leads to infertility."
      ],
      key_points: [
        "Common symptoms: dysmenorrhea, dyspareunia, chronic pelvic pain, infertility.",
        "Pain typically begins before menses and improves afterward.",
        "Ectopic tissue responds to hormones and bleeds cyclically → inflammation and adhesions.",
        "Adhesions can distort pelvic anatomy and impair fertility."
      ],
      high_yield_clinical_pearls: [
        "Deep dyspareunia and premenstrual pelvic pain are key clues.",
        "Laparoscopy is the gold standard for diagnosis."
      ]
    }
  },
  "Female Infertility": {
    id: "female_infertility",
    category: "PCOS & Endometriosis",
    overview: {
      summary:
        "Infertility is the inability to conceive after a defined period of unprotected intercourse. Female factors include ovulatory, tubal/peritoneal, uterine/cervical, and endocrine causes.",
      objectives: [
        "Define infertility and when evaluation should begin.",
        "List major categories of female infertility and representative causes.",
        "Relate PCOS and endometriosis to infertility mechanisms."
      ],
      key_points: [
        "Under age 35, infertility evaluation generally starts after 12 months; over 35, after 6 months.",
        "Ovulatory disorders (e.g., PCOS) are major contributors to female infertility.",
        "Tubal/peritoneal factors commonly arise from endometriosis or prior pelvic infection.",
        "Evaluation should include both partners and be systematic."
      ],
      high_yield_clinical_pearls: [
        "Always ask about cycle regularity (ovulation) and history of PID or pelvic surgery.",
        "Endometriosis may present primarily with infertility rather than pain."
      ]
    }
  },
  "Pregnancy Physiology": {
    id: "pregnancy",
    category: "Pregnancy & Postpartum",
    overview: {
      summary:
        "Pregnancy induces major cardiovascular, respiratory, renal, and endocrine changes to support the fetus. Complications include hypertensive disorders, infections, and preterm labor.",
      objectives: [
        "Describe normal physiological adaptations of pregnancy.",
        "Recognize common pregnancy discomforts versus serious complications.",
        "Identify key fetal and maternal complications including preeclampsia and GBS infection."
      ],
      key_points: [
        "Cardiac output, blood volume, and heart rate all increase in pregnancy.",
        "Progesterone relaxes smooth muscle → reflux, constipation, venous stasis.",
        "Hypertensive disorders of pregnancy can progress to preeclampsia/eclampsia.",
        "GBS colonization increases risk of neonatal sepsis, pneumonia, and meningitis."
      ],
      high_yield_clinical_pearls: [
        "Headache, visual changes, and high BP in late pregnancy are red flags for preeclampsia.",
        "BV in pregnancy is associated with preterm rupture of membranes and low birth weight."
      ]
    }
  },
  "Postpartum Physiology": {
    id: "postpartum",
    category: "Pregnancy & Postpartum",
    overview: {
      summary:
        "The postpartum period involves uterine involution, hormonal shifts, and initiation of lactation. Women are vulnerable to hemorrhage, infection, mood disorders, and breastfeeding complications.",
      objectives: [
        "Describe normal postpartum uterine and hormonal changes.",
        "Recognize common postpartum symptoms versus pathologic complications.",
        "Explain the pathophysiology of postpartum mastitis and perineal complications."
      ],
      key_points: [
        "Uterine involution produces lochia, a normal postpartum discharge.",
        "Decreased estrogen can cause vaginal dryness and dyspareunia.",
        "Pelvic floor weakness can lead to incontinence.",
        "Mastitis and perineal infections are important postpartum complications."
      ],
      high_yield_clinical_pearls: [
        "Heavy persistent bleeding postpartum may signal hemorrhage and requires urgent evaluation.",
        "Combined OCPs started too early can reduce milk production by suppressing prolactin activity."
      ]
    }
  },
  "Menopause": {
    id: "menopause",
    category: "Lifecycle & Fertility Control",
    overview: {
      summary:
        "Menopause is the permanent cessation of menses due to ovarian failure, leading to low estrogen and elevated gonadotropins. It affects vasomotor stability, bone health, cardiovascular risk, and genitourinary tissues.",
      objectives: [
        "Define menopause and describe typical hormonal changes.",
        "Recognize common menopausal symptoms and long-term risks.",
        "Explain the pathophysiology of osteoporosis and GU atrophy after menopause."
      ],
      key_points: [
        "Estrogen levels decrease; FSH and LH rise due to loss of negative feedback.",
        "Hot flashes, night sweats, sleep disturbance, and mood changes are common.",
        "Estrogen deficiency accelerates bone loss and increases CV risk.",
        "Vaginal dryness and urinary symptoms result from urogenital atrophy."
      ],
      high_yield_clinical_pearls: [
        "Menopause is diagnosed retrospectively after 12 months of amenorrhea.",
        "Long-term management focuses on symptom relief and prevention of bone and CV disease."
      ]
    }
  },
  "Contraception": {
    id: "contraception",
    category: "Lifecycle & Fertility Control",
    overview: {
      summary:
        "Contraception includes hormonal and non-hormonal methods that prevent pregnancy by inhibiting ovulation, fertilization, or implantation. Method choice depends on efficacy, safety, and patient-specific factors.",
      objectives: [
        "Describe mechanisms of action of combined and progestin-only methods.",
        "Differentiate hormonal IUDs, copper IUDs, implants, and emergency contraception.",
        "Identify important contraindications and adverse effects."
      ],
      key_points: [
        "COCs mainly prevent pregnancy by suppressing ovulation via FSH/LH inhibition.",
        "Progestin thickens cervical mucus and thins the endometrium.",
        "Copper IUD is non-hormonal and creates a sperm-toxic local environment.",
        "Emergency contraception primarily delays or inhibits ovulation."
      ],
      high_yield_clinical_pearls: [
        "COCs are contraindicated in women with migraine with aura or high VTE risk.",
        "Copper IUD can be used as highly effective emergency contraception when timed correctly."
      ]
    }
  },
  "Drug Distribution in Pregnancy": {
    id: "drug_distribution_pregnancy",
    category: "Pregnancy & Postpartum",
    overview: {
      summary:
        "Pregnancy alters pharmacokinetics via increased plasma volume, total body water, fat stores, and decreased albumin, changing volume of distribution and free drug levels for many agents.",
      objectives: [
        "Explain how pregnancy affects volume of distribution and protein binding.",
        "Predict how hydrophilic and lipophilic drugs are redistributed in pregnancy.",
        "Relate placental transfer properties to drug characteristics."
      ],
      key_points: [
        "Total body water and blood volume increase, expanding Vd for hydrophilic drugs.",
        "Decreased albumin increases the free fraction of highly protein-bound drugs.",
        "Increased maternal fat increases Vd for lipophilic drugs.",
        "Placental transfer favors small, lipophilic, non-ionized drugs."
      ],
      high_yield_clinical_pearls: [
        "Some drugs may need dose adjustments during pregnancy due to PK changes.",
        "Free (unbound) drug, not total serum level, correlates with pharmacologic effect."
      ]
    }
  },
  "Integrated Overview": {
    id: "integrated_overview",
    category: "Lifecycle & Fertility Control",
    overview: {
      summary:
        "Integrated understanding of the reproductive axis allows you to connect menstrual physiology, endocrine disorders, pregnancy changes, and pharmacology into a coherent framework.",
      objectives: [
        "Connect HPO axis physiology to menstrual disorders and infertility.",
        "Relate endocrine patterns in PCOS, endometriosis, and menopause.",
        "Integrate drug mechanisms with underlying pathophysiology."
      ],
      key_points: [
        "The hypothalamic–pituitary–ovarian axis underlies normal cycles and many disorders.",
        "Anovulation is central to PCOS, DUB, and many infertility cases.",
        "Endometriosis and PCOS highlight structural vs endocrine impacts on fertility.",
        "Drug mechanisms often directly target hormonal feedback loops or end-organ responses."
      ],
      high_yield_clinical_pearls: [
        "When stuck on a question, ask: what is happening at the HPO axis level?",
        "Matching the drug mechanism to the dominant pathophysiology is key for exam questions."
      ]
    }
  },
  "Medicinal Chemistry: BPH, ED & Urinary Incontinence": {
    id: "med_chem_bph_ed_ui",
    category: "Medicinal Chemistry",
    overview: {
      summary:
        "This section covers the medicinal chemistry and pharmacology of drugs used to treat benign prostatic hyperplasia (BPH), erectile dysfunction (ED), and urinary incontinence (UI). Understanding receptor selectivity, chemical classes, and mechanisms is essential for rational drug therapy.",
      objectives: [
        "Describe the mechanism of action of α1-adrenergic antagonists and 5α-reductase inhibitors in BPH treatment.",
        "Explain how PDE-5 inhibitors and prostaglandin E1 facilitate erections in ED.",
        "Identify anticholinergics, β3-agonists, and ADH analogs used in urinary incontinence management."
      ],
      key_points: [
        "BPH: α1A-antagonists ('azosin' drugs) relax prostatic smooth muscle; 5α-reductase inhibitors shrink the prostate by blocking DHT formation.",
        "ED: PDE-5 inhibitors (sildenafil, tadalafil, vardenafil) enhance NO-cGMP signaling; prostaglandin E1 increases cAMP.",
        "Urinary Incontinence: Anticholinergics block bladder contractions; β3-agonists (mirabegron) promote relaxation; desmopressin reduces nocturnal urine production.",
        "Chemical classes matter: Quinazolines for α1-blockers, azole suffix for PDE-5 inhibitors, and tropane/oxybutynin-like structures for anticholinergics."
      ],
      high_yield_clinical_pearls: [
        "Tamsulosin is α1A-selective, minimizing orthostatic hypotension compared to non-selective α1-blockers.",
        "PDE-5 inhibitors are contraindicated with nitrates due to severe hypotension risk.",
        "Anticholinergics for UI can cause dry mouth, constipation, and cognitive effects in elderly patients.",
        "5α-reductase inhibitors take months to show effect; α1-blockers provide faster symptom relief."
      ]
    }
  }
};

/**
 * Get all unique categories from the section overviews
 */
export const getCategories = (): string[] => {
  const categories = new Set<string>();
  Object.values(sectionOverviewsMap).forEach(data => {
    categories.add(data.category);
  });
  return Array.from(categories);
};
