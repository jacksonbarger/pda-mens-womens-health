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
        "Galactorrhea is inappropriate milk production unrelated to pregnancy or nursing, usually due to hyperprolactinemia from pituitary, medication, or hypothalamic causes. **Etymology:** The term is formed from **galacto-** (milk) and **-rrhea** (flow or discharge), literally meaning 'milk flow.'",
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
        "Mastitis is an inflammatory and often infectious process of the breast, most commonly seen in lactating women due to milk stasis and bacterial entry via nipple trauma. **Etymology:** The term comes from **mast-** (breast) and **-itis** (inflammation), meaning 'inflammation of the breast.'",
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
        "Dysmenorrhea refers to painful menstruation. Primary dysmenorrhea is prostaglandin-mediated pain with otherwise normal anatomy, while secondary dysmenorrhea is due to underlying pelvic pathology. **Etymology:** The term is formed from **dys-** (painful or difficult), **meno-** (menstruation), and **-rrhea** (flow), meaning 'painful menstrual flow.'",
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
        "Amenorrhea is the absence of menstruation and can be primary (no menses by age 15) or secondary (cessation after prior normal cycles). It reflects disruption at any level of the hypothalamic–pituitary–ovarian–uterine axis. **Etymology:** The term is formed from **a-** (absence or without), **meno-** (menstruation), and **-rrhea** (flow), meaning 'absence of menstrual flow.'",
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
  "Dysfunctional Uterine Bleeding (DUB)": {
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
        "PMS consists of recurrent physical, emotional, and behavioral symptoms that occur in the luteal phase and resolve shortly after onset of menses. It may involve serotonergic and hormonal mechanisms. **Etymology:** The term is formed from **pre-** (before) and **menstrual** (related to menstruation), combined with **syndrome** (a collection of symptoms), meaning 'a collection of symptoms occurring before menstruation.'",
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
  "Premenstrual Syndrome (PMS)": {
    id: "pms",
    category: "Menstrual & Uterine Disorders",
    overview: {
      summary:
        "PMS consists of recurrent physical, emotional, and behavioral symptoms that occur in the luteal phase and resolve shortly after onset of menses. It may involve serotonergic and hormonal mechanisms. **Etymology:** The term is formed from **pre-** (before) and **menstrual** (related to menstruation), combined with **syndrome** (a collection of symptoms), meaning 'a collection of symptoms occurring before menstruation.'",
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
        "PCOS is a common endocrine disorder characterized by hyperandrogenism, ovulatory dysfunction, and polycystic ovaries, closely linked to insulin resistance and metabolic syndrome. **Etymology:** The term is formed from **poly-** (many), **cystic** (containing cysts), **ovary**, and **syndrome**, meaning 'a syndrome characterized by many cysts in the ovaries.'",
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
  "Polycystic Ovary Syndrome (PCOS)": {
    id: "pcos",
    category: "PCOS & Endometriosis",
    overview: {
      summary:
        "PCOS is a common endocrine disorder characterized by hyperandrogenism, ovulatory dysfunction, and polycystic ovaries, closely linked to insulin resistance and metabolic syndrome. **Etymology:** The term is formed from **poly-** (many), **cystic** (containing cysts), **ovary**, and **syndrome**, meaning 'a syndrome characterized by many cysts in the ovaries.'",
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
        "Endometriosis is the presence of functioning endometrial tissue outside the uterine cavity, causing cyclical bleeding, inflammation, adhesions, pain, and often infertility. **Etymology:** The word is formed from the root word 'endometrium,' which refers to the tissue lining the uterus. The full word is a combination of **endo-** (inside), **-metr-** (uterus), and the suffix **-osis** (a condition or disease), meaning 'a condition where uterine-lining tissue exists outside its normal location.'",
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
        "Infertility is the inability to conceive after a defined period of unprotected intercourse. Female factors include ovulatory, tubal/peritoneal, uterine/cervical, and endocrine causes. **Etymology:** The term is formed from **in-** (not) and **fertile** (capable of producing offspring), combined with the suffix **-ity** (state or condition), meaning 'the state of not being fertile or unable to conceive.'",
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
  "Pregnancy Physiology and Complications": {
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
        "The postpartum period involves uterine involution, hormonal shifts, and initiation of lactation. Women are vulnerable to hemorrhage, infection, mood disorders, and breastfeeding complications. **Etymology:** The term is formed from **post-** (after) and **partum** (childbirth), meaning 'the period after childbirth.'",
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
  "Postpartum Physiology and Complications": {
    id: "postpartum",
    category: "Pregnancy & Postpartum",
    overview: {
      summary:
        "The postpartum period involves uterine involution, hormonal shifts, and initiation of lactation. Women are vulnerable to hemorrhage, infection, mood disorders, and breastfeeding complications. **Etymology:** The term is formed from **post-** (after) and **partum** (childbirth), meaning 'the period after childbirth.'",
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
        "Menopause is the permanent cessation of menses due to ovarian failure, leading to low estrogen and elevated gonadotropins. It affects vasomotor stability, bone health, cardiovascular risk, and genitourinary tissues. **Etymology:** The term is formed from **meno-** (menstruation) and **pause** (cessation or stopping), meaning 'the cessation of menstruation.'",
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
        "Contraception includes hormonal and non-hormonal methods that prevent pregnancy by inhibiting ovulation, fertilization, or implantation. Method choice depends on efficacy, safety, and patient-specific factors. **Etymology:** The term is formed from **contra-** (against) and **conception** (the process of becoming pregnant), meaning 'against conception' or 'preventing pregnancy.'",
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
  "Integrated Reproductive Overview": {
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
  "BPH Pharmacology": {
    id: "bph_pharmacology",
    category: "Pharmacology",
    overview: {
      summary:
        "Comprehensive pharmacology of medications for benign prostatic hyperplasia, focusing on α1-adrenergic antagonists and 5α-reductase inhibitors. Understanding receptor selectivity, chemical structure, and mechanism differences is essential for optimal BPH management.",
      objectives: [
        "Differentiate α1A-selective from non-selective α1-blockers and their clinical implications.",
        "Explain the mechanism of 5α-reductase inhibitors and their delayed onset of action.",
        "Identify the quinazoline chemical class and '-azosin' suffix pattern.",
        "Describe combination therapy rationale and PSA adjustment requirements."
      ],
      key_points: [
        "α1-Antagonists (prazosin, terazosin, doxazosin, tamsulosin, alfuzosin, silodosin) relax prostatic smooth muscle by blocking α1A receptors, providing immediate symptom relief.",
        "α1A selectivity (tamsulosin, silodosin) minimizes orthostatic hypotension; non-selective agents (prazosin, terazosin, doxazosin) also lower blood pressure.",
        "5α-Reductase inhibitors (finasteride, dutasteride) block conversion of testosterone to DHT, shrinking prostate over 3-6 months. Dutasteride inhibits both Type 1 and Type 2 isoforms.",
        "Combination therapy (α1-blocker + 5α-reductase inhibitor) superior to monotherapy for moderate-severe BPH.",
        "5α-Reductase inhibitors reduce PSA by ~50%; must double measured PSA values for accurate interpretation."
      ],
      high_yield_clinical_pearls: [
        "Silodosin has highest α1A selectivity but highest retrograde ejaculation risk (~28%); alfuzosin has intermediate selectivity with lower ejaculatory dysfunction.",
        "Tamsulosin doesn't require dose titration unlike terazosin/doxazosin; taken 30 minutes after same meal daily.",
        "5α-Reductase inhibitors reduce prostate cancer risk (25% reduction) but may increase high-grade cancer detection.",
        "PSA doubling rule: if patient on finasteride/dutasteride has PSA of 2 ng/mL, true PSA is ~4 ng/mL.",
        "First-dose orthostatic hypotension most common with non-selective α1-blockers; advise taking at bedtime initially."
      ]
    }
  },
  "Erectile Dysfunction Pharmacology": {
    id: "ed_pharmacology",
    category: "Pharmacology",
    overview: {
      summary:
        "Pharmacology of erectile dysfunction medications, focusing on PDE-5 inhibitors and alprostadil. Understanding the NO-cGMP pathway, drug selectivity, critical contraindications, and alternative mechanisms is essential for safe and effective ED treatment.",
      objectives: [
        "Explain the NO-cGMP pathway and how PDE-5 inhibitors enhance erectile function.",
        "Differentiate the four PDE-5 inhibitors by onset, duration, and selectivity.",
        "Identify the absolute contraindication with nitrates and mechanism of severe hypotension.",
        "Describe alprostadil's alternative cAMP-based mechanism for ED refractory to PDE-5 inhibitors."
      ],
      key_points: [
        "PDE-5 inhibitors (sildenafil, tadalafil, vardenafil, avanafil) prevent cGMP breakdown, enhancing NO-mediated smooth muscle relaxation and penile blood flow.",
        "Onset: avanafil fastest (15-30 min), sildenafil (30-60 min), vardenafil (60 min), tadalafil (30-120 min). Duration: tadalafil longest (up to 36 hours).",
        "Absolute contraindication with nitrates: both work via NO-cGMP pathway, causing severe hypotension and potential MI. Must counsel all ED patients.",
        "Alprostadil (PGE1) activates adenylyl cyclase → increases cAMP → smooth muscle relaxation. Works in patients failing PDE-5 inhibitors. Available as injection (Caverject), urethral suppository (MUSE), or topical cream.",
        "Pyrazolopyrimidinone chemical class structurally mimics guanine, allowing competitive PDE-5 binding."
      ],
      high_yield_clinical_pearls: [
        "Sildenafil causes blue-tinted vision (10-fold PDE-5/PDE-6 selectivity); avanafil has greater selectivity with fewer visual side effects.",
        "Tadalafil approved for daily use (2.5-5 mg) for spontaneity; also treats BPH and pulmonary hypertension.",
        "High-fat meals delay sildenafil/vardenafil absorption; tadalafil and avanafil less affected by food.",
        "Priapism risk with alprostadil (~5%); erection >4 hours requires emergency treatment to prevent permanent damage.",
        "PDE-5 inhibitors effective in ~70% of organic ED; effectiveness lower in severe diabetes or post-prostatectomy (nerve damage)."
      ]
    }
  },
  "Urinary Incontinence Pharmacology": {
    id: "ui_pharmacology",
    category: "Pharmacology",
    overview: {
      summary:
        "Pharmacology of urinary incontinence and overactive bladder medications, including anticholinergics, β3-adrenergic agonists, and desmopressin. Understanding muscarinic receptor subtypes, blood-brain barrier penetration, and cognitive safety is crucial for elderly patient management.",
      objectives: [
        "Differentiate anticholinergics by muscarinic receptor selectivity and CNS penetration.",
        "Explain β3-agonist mechanism and advantages over anticholinergics.",
        "Identify M3-selective anticholinergics (darifenacin) and quaternary amines (trospium) for cognitive safety.",
        "Describe desmopressin's mechanism for nocturnal enuresis and hyponatremia risk."
      ],
      key_points: [
        "Anticholinergics (oxybutynin, tolterodine, solifenacin, darifenacin, fesoterodine, trospium) block muscarinic receptors (M2/M3) in detrusor muscle, reducing bladder contractions.",
        "M3-selective darifenacin spares M1 receptors in CNS, reducing cognitive side effects. Trospium (quaternary amine) doesn't cross blood-brain barrier, safest for dementia patients.",
        "Fesoterodine is tolterodine prodrug with more consistent bioavailability; converted to same active metabolite.",
        "β3-Agonists (mirabegron, vibegron) activate β3 receptors → bladder relaxation, increasing capacity. Alternative to anticholinergics with fewer cognitive/dry mouth effects. Vibegron has improved selectivity and less cardiovascular effects.",
        "Desmopressin (ADH analog) promotes renal water reabsorption, reducing nocturnal urine production for enuresis. Monitor for hyponatremia."
      ],
      high_yield_clinical_pearls: [
        "Anticholinergic side effects: dry mouth (most common), constipation, blurred vision, urinary retention, cognitive impairment. Elderly most vulnerable.",
        "Contraindications: narrow-angle glaucoma (anticholinergics increase intraocular pressure), urinary retention, gastric retention.",
        "Oxybutynin has highest anticholinergic burden (M1-M5); avoid in elderly with dementia. Darifenacin or mirabegron preferred.",
        "Mirabegron can increase blood pressure (~1-3 mmHg); monitor in hypertensive patients. Vibegron less effect on BP.",
        "Desmopressin nasal spray withdrawn due to hyponatremia risk; oral/sublingual formulations preferred with fluid restriction."
      ]
    }
  },
  "Benign Prostatic Hyperplasia (BPH)": {
    id: "bph",
    category: "Men's Health",
    overview: {
      summary:
        "Benign prostatic hyperplasia is non-cancerous prostate enlargement affecting the majority of aging men. Understanding the pathophysiology, clinical presentation, diagnostic approach, and treatment options is essential for managing this common condition.",
      objectives: [
        "Describe the role of DHT in BPH pathogenesis and how it drives prostatic growth.",
        "Differentiate between obstructive and irritative lower urinary tract symptoms (LUTS).",
        "Compare first-line medical therapies: α1-adrenergic antagonists versus 5α-reductase inhibitors.",
        "Identify indications for surgical intervention in BPH management."
      ],
      key_points: [
        "BPH occurs in the transition zone of the prostate, unlike prostate cancer which arises in the peripheral zone.",
        "Dihydrotestosterone (DHT) is the primary androgen driving prostatic growth; 5α-reductase converts testosterone to DHT.",
        "LUTS include obstructive symptoms (hesitancy, weak stream, incomplete emptying) and irritative symptoms (frequency, urgency, nocturia).",
        "α1-adrenergic antagonists provide immediate symptom relief by relaxing prostatic smooth muscle; 5α-reductase inhibitors take months to shrink the prostate.",
        "TURP (transurethral resection of prostate) is gold standard surgery for severe BPH refractory to medical therapy."
      ],
      high_yield_clinical_pearls: [
        "PSA may be mildly elevated in BPH but markedly elevated PSA or hard nodule on DRE warrants prostate cancer workup.",
        "Acute urinary retention can be triggered by α-agonists (decongestants) or anticholinergics in BPH patients.",
        "Post-void residual >200 mL indicates significant obstruction and may require surgical intervention.",
        "Combination therapy (α-blocker + 5α-reductase inhibitor) is superior to monotherapy for moderate-to-severe BPH."
      ]
    }
  },
  "Erectile Dysfunction (ED)": {
    id: "ed",
    category: "Men's Health",
    overview: {
      summary:
        "Erectile dysfunction is the persistent inability to achieve or maintain an erection. Understanding the vascular, neurologic, hormonal, and psychogenic causes is essential for proper evaluation and treatment. ED often serves as an early marker of cardiovascular disease.",
      objectives: [
        "Distinguish between organic and psychogenic causes of ED based on clinical presentation.",
        "Explain the role of nitric oxide and cGMP in the erectile mechanism.",
        "Identify first-line pharmacologic treatment and absolute contraindications for PDE-5 inhibitors.",
        "Recognize ED as an early warning sign of cardiovascular disease."
      ],
      key_points: [
        "Vascular disease (atherosclerosis, diabetes, hypertension) is the most common organic cause of ED.",
        "ED often precedes coronary artery disease by 3-5 years due to smaller penile arteries being affected first.",
        "Psychogenic ED: sudden onset, situational, preserved nocturnal erections. Organic ED: gradual onset, consistent, absent nocturnal erections.",
        "PDE-5 inhibitors (sildenafil, tadalafil, vardenafil, avanafil) are first-line therapy, enhancing NO-mediated vasodilation.",
        "Absolute contraindication: concurrent nitrate use due to severe hypotension risk."
      ],
      high_yield_clinical_pearls: [
        "Always review medication list – antihypertensives, antidepressants, antiandrogens commonly cause ED.",
        "Diabetes causes ED via both neuropathy (impaired NO release) and vasculopathy (endothelial dysfunction).",
        "Nocturnal penile tumescence (NPT) testing: normal NPT suggests psychogenic ED; absent NPT indicates organic ED.",
        "For men contraindicated for PDE-5 inhibitors, alternatives include intracavernosal alprostadil or vacuum erection devices."
      ]
    }
  },
  "Male Infertility": {
    id: "male_infertility",
    category: "Men's Health",
    overview: {
      summary:
        "Male factor contributes to 40-50% of infertility cases. Semen analysis is the cornerstone of evaluation. Understanding causes of azoospermia, oligospermia, and treatment options including assisted reproductive techniques is essential.",
      objectives: [
        "Interpret semen analysis parameters and distinguish between azoospermia and oligospermia.",
        "Differentiate obstructive from non-obstructive azoospermia using FSH levels.",
        "Identify varicocele as the most common correctable cause of male infertility.",
        "Explain the role of ICSI (intracytoplasmic sperm injection) in treating severe male factor infertility."
      ],
      key_points: [
        "Normal semen parameters (WHO criteria): volume ≥1.5 mL, concentration ≥15 million/mL, motility ≥40%, morphology ≥4% normal forms.",
        "Varicocele (dilated pampiniform plexus) is the most common correctable cause, present in ~40% of infertile men.",
        "Elevated FSH with azoospermia suggests primary testicular failure; normal FSH suggests obstructive azoospermia.",
        "Genetic causes: Klinefelter syndrome (47,XXY), Y-chromosome microdeletions, CFTR mutations (congenital bilateral absence of vas deferens).",
        "ICSI bypasses natural fertilization barriers by directly injecting sperm into egg, used for severe oligospermia or azoospermia with sperm retrieval."
      ],
      high_yield_clinical_pearls: [
        "Anabolic steroid abuse suppresses the HPG axis, causing reversible azoospermia/oligospermia.",
        "Cryptorchidism correction before age 2 optimizes fertility, but cancer risk remains elevated.",
        "For men desiring fertility with hypogonadism, use hCG ± FSH or clomiphene instead of testosterone replacement.",
        "Semen analysis requires 2-3 samples due to variability; abstinence 2-7 days before collection."
      ]
    }
  },
  "Testicular Disorders": {
    id: "testicular_disorders",
    category: "Men's Health",
    overview: {
      summary:
        "Testicular disorders encompass emergencies like testicular torsion, infections like epididymitis, masses like varicocele and hydrocele, and malignancies. Rapid differentiation of acute scrotal pain etiologies is critical for preventing testicular loss.",
      objectives: [
        "Recognize testicular torsion as a urologic emergency requiring surgery within 6 hours.",
        "Differentiate testicular torsion from epididymitis using clinical presentation and Doppler ultrasound.",
        "Identify risk factors and consequences of cryptorchidism.",
        "Recognize tumor markers (AFP, β-hCG) used in testicular cancer diagnosis."
      ],
      key_points: [
        "Testicular torsion: sudden severe pain, absent cremasteric reflex, high-riding testis, negative Prehn sign. Requires emergency surgical detorsion.",
        "Epididymitis: gradual onset pain, positive Prehn sign (pain relieved by elevation), dysuria, fever. Age <35: STIs (chlam ydia/gonorrhea); age >35: E. coli.",
        "Hydrocele: painless scrotal swelling that transilluminates. Varicocele: 'bag of worms' feeling, 90% left-sided, common cause of infertility.",
        "Cryptorchidism (undescended testis) increases risk of infertility and testicular cancer (40x); orchiopexy before age 2 optimizes outcomes.",
        "Testicular cancer: painless testicular mass in young men (20-40). AFP elevated in non-seminomatous tumors; β-hCG in choriocarcinoma."
      ],
      high_yield_clinical_pearls: [
        "Never delay surgery for imaging if testicular torsion suspected – salvage rate >90% if surgery within 6 hours.",
        "New right-sided varicocele warrants imaging to rule out retroperitoneal mass (renal cell carcinoma) compressing IVC.",
        "Mumps orchitis occurs in 20-30% of post-pubertal males with mumps, can cause testicular atrophy and infertility.",
        "Testicular cancer has excellent cure rates even when metastatic; never biopsy through scrotum (alters lymphatic drainage)."
      ]
    }
  },
  "Prostate Cancer": {
    id: "prostate_cancer",
    category: "Men's Health",
    overview: {
      summary:
        "Prostate cancer is the most common non-skin cancer in men and second leading cause of cancer death. Understanding PSA screening, Gleason grading, staging, and treatment options including active surveillance and androgen deprivation therapy is essential.",
      objectives: [
        "Describe the role of PSA and DRE in prostate cancer screening and diagnosis.",
        "Explain the Gleason score and its prognostic significance.",
        "Differentiate treatment approaches for low-risk versus high-risk localized prostate cancer.",
        "Identify indications for androgen deprivation therapy (ADT) and its major side effects."
      ],
      key_points: [
        "Prostate cancer arises in the peripheral zone (70% of cancers), making it palpable on DRE, unlike BPH (transition zone).",
        "PSA >4 ng/mL warrants further evaluation; PSA >10 ng/mL is highly suspicious for cancer.",
        "Gleason score (sum of two most common patterns) grades aggressiveness: Gleason ≥8 is high-grade with poor prognosis.",
        "Prostate cancer metastasizes to bone (osteoblastic/sclerotic lesions), causing bone pain as common presenting symptom of metastatic disease.",
        "Active surveillance appropriate for low-risk cancer (Gleason ≤6, PSA <10, T1-T2a) to avoid treatment morbidity."
      ],
      high_yield_clinical_pearls: [
        "Radical prostatectomy side effects: erectile dysfunction (40-90%), urinary incontinence (5-20%); nerve-sparing reduces ED risk.",
        "ADT (GnRH agonists/antagonists) suppresses testosterone for metastatic disease but causes hot flashes, osteoporosis, metabolic syndrome.",
        "Castration-resistant prostate cancer (CRPC): progressing despite castrate testosterone levels; treat with abiraterone, enzalutamide, docetaxel.",
        "African American men have 2x higher incidence; family history and BRCA1/2 mutations increase risk."
      ]
    }
  },
  "Testosterone Deficiency (Hypogonadism)": {
    id: "hypogonadism",
    category: "Men's Health",
    overview: {
      summary:
        "Hypogonadism is testosterone deficiency with or without impaired spermatogenesis. Distinguishing primary (testicular failure) from secondary (hypothalamic/pituitary dysfunction) hypogonadism guides treatment. Testosterone replacement therapy requires careful patient selection and monitoring.",
      objectives: [
        "Differentiate primary from secondary hypogonadism based on LH/FSH levels.",
        "Identify clinical symptoms of testosterone deficiency.",
        "Recognize contraindications to testosterone replacement therapy (TRT).",
        "Explain how TRT affects fertility and alternatives for men desiring children."
      ],
      key_points: [
        "Primary hypogonadism: low testosterone with elevated LH/FSH (testicular failure, lack of negative feedback). Causes: Klinefelter, chemotherapy, mumps orchitis.",
        "Secondary hypogonadism: low testosterone with low/normal LH/FSH (hypothalamic/pituitary dysfunction). Causes: pituitary tumor, hyperprolactinemia, chronic opioid use.",
        "Diagnosis: morning testosterone <300 ng/dL on two separate occasions (testosterone peaks in AM).",
        "TRT contraindications: prostate cancer, breast cancer, untreated sleep apnea, severe BPH, polycythemia (hematocrit >54%).",
        "TRT suppresses LH/FSH, impairing fertility. For men desiring children: use hCG ± FSH or clomiphene instead."
      ],
      high_yield_clinical_pearls: [
        "Kallmann syndrome: congenital hypogonadotropic hypogonadism with anosmia (absent sense of smell).",
        "Monitor hematocrit on TRT; polycythemia (>54%) increases thrombosis risk and requires holding TRT or therapeutic phlebotomy.",
        "Chronic opioid use is a common iatrogenic cause of secondary hypogonadism in pain patients.",
        "Anabolic steroid abuse causes reversible hypogonadism, testicular atrophy, and infertility; recovery may take years after cessation."
      ]
    }
  },
  "Gynecomastia": {
    id: "gynecomastia",
    category: "Men's Health",
    overview: {
      summary:
        "Gynecomastia is benign proliferation of glandular breast tissue in males resulting from increased estrogen-to-androgen ratio. Distinguishing physiologic from pathologic causes and gynecomastia from male breast cancer is essential for appropriate management.",
      objectives: [
        "Explain the pathophysiology of gynecomastia involving estrogen-androgen imbalance.",
        "Identify three physiologic peaks of gynecomastia (neonatal, pubertal, elderly).",
        "Recognize medications and endocrine disorders causing pathologic gynecomastia.",
        "Differentiate gynecomastia from male breast cancer based on clinical features."
      ],
      key_points: [
        "Gynecomastia results from increased estrogen-to-androgen ratio via: ↑ estrogen production, ↓ testosterone, ↑ aromatase activity, or androgen receptor blockade.",
        "Physiologic gynecomastia: neonatal (maternal estrogen), pubertal (50-60% of boys, resolves in 1-2 years), elderly (decreased testosterone, increased aromatization).",
        "Spironolactone is the most common drug causing gynecomastia (blocks androgen receptors, stimulates estrogen receptors).",
        "Klinefelter syndrome (47,XXY): most common genetic cause, features include gynecomastia (50-75%), small firm testes, tall stature, infertility.",
        "Male breast cancer: unilateral, eccentric hard mass, fixed, painless, nipple retraction. Gynecomastia: bilateral, subareolar, mobile, tender."
      ],
      high_yield_clinical_pearls: [
        "Pubertal gynecomastia resolves spontaneously in 1-2 years in most cases; reassurance appropriate unless persists >2 years.",
        "Tamoxifen (SERM) is effective medical treatment for recent-onset gynecomastia (<12 months); less effective for longstanding fibrotic tissue.",
        "Cirrhosis causes gynecomastia via impaired estrogen metabolism, increased SHBG, and decreased testosterone synthesis.",
        "Always examine testes in gynecomastia workup – testicular tumors (Leydig, Sertoli, germ cell) can secrete hCG or estrogen."
      ]
    }
  },
  "Osteoporosis Pharmacology": {
    id: "osteoporosis_pharmacology",
    category: "Pharmacology",
    overview: {
      summary:
        "Comprehensive pharmacology of osteoporosis medications including bisphosphonates, SERMs, PTH analogues, monoclonal antibodies, and calcium/vitamin D supplementation. Understanding mechanisms, drug selection, and adverse effects is critical for preventing fractures in at-risk populations.",
      objectives: [
        "Compare antiresorptive versus anabolic mechanisms in osteoporosis therapy.",
        "Differentiate nitrogen-containing bisphosphonates' MOA (mevalonate pathway inhibition) from other drug classes.",
        "Explain the RANKL pathway and how denosumab inhibits osteoclast formation.",
        "Identify which osteoporosis drugs require monitoring for hypocalcemia, osteonecrosis of the jaw, and atypical fractures."
      ],
      key_points: [
        "Bisphosphonates (alendronate, risendronate, ibandronate, zoledronate): nitrogen-containing analogs mimic IPP, inhibit farnesyl pyrophosphate synthase in mevalonate pathway → osteoclast apoptosis.",
        "PTH analogues (teriparatide, abaloparatide): anabolic agents that stimulate osteoblasts when given intermittently. Theory: you build more bone than you lose during treatment.",
        "Denosumab (RANKL inhibitor): monoclonal antibody prevents RANK-RANKL interaction, blocking osteoclast differentiation and activation. Given SC q6months.",
        "Romosozumab (sclerostin inhibitor): dual MOA – increases bone formation and decreases bone resorption. Used for severe osteoporosis with high fracture risk.",
        "Raloxifene (SERM): estrogen agonist in bone (preserves BMD) and antagonist in breast (reduces breast cancer risk). Minimal uterine stimulation unlike tamoxifen."
      ],
      high_yield_clinical_pearls: [
        "Bisphosphonates: take on empty stomach with full glass of water, remain upright 30-60 min to prevent esophagitis. Poor oral absorption (<1%).",
        "Drug holidays: after 3-5 years bisphosphonate therapy, consider 1-2 year break to reduce atypical femur fracture risk (bone half-life 10+ years).",
        "Osteonecrosis of jaw (ONJ): rare with oral bisphosphonates (<0.1%), higher with IV zoledronate. Avoid invasive dental procedures; ensure dental health before starting.",
        "Denosumab rebound: stopping causes rapid bone loss and vertebral fractures. Must transition to bisphosphonate when discontinuing.",
        "Teriparatide/abaloparatide: black box warning for osteosarcoma (rat studies). Contraindicated in Paget's disease, prior radiation, unexplained alkaline phosphatase elevation.",
        "Vitamin D is essential: all antiresorptive drugs can cause hypocalcemia if vitamin D deficient. Supplement 800-1000 IU daily + calcium 1200 mg.",
        "Romosozumab increases CV risk (MI, stroke) – avoid in patients with MI/stroke within past year. Limited to 12 monthly doses (then transition to antiresorptive)."
      ]
    }
  },
  "Gonadal Hormones & Contraception Pharmacology": {
    id: "gonadal_hormones_contraception_pharmacology",
    category: "Pharmacology",
    overview: {
      summary:
        "Comprehensive medicinal chemistry and pharmacology of sex hormones including estrogens, progestins, androgens, GnRH antagonists, SERMs, and aromatase inhibitors. Understanding structure-activity relationships, metabolism, and clinical applications is essential for contraception, hormone replacement, fertility, and cancer therapy.",
      objectives: [
        "Explain why ethinyl estradiol is 15-20x more potent than estradiol and why it's used in oral contraceptives.",
        "Compare SERMs (tamoxifen, raloxifene) based on tissue-specific agonist/antagonist activity.",
        "Differentiate steroidal (exemestane) from non-steroidal (anastrozole, letrozole) aromatase inhibitors.",
        "Describe how synthetic progestins differ from natural progesterone in oral bioavailability and duration of action."
      ],
      key_points: [
        "Aromatase (CYP19): converts androgens → estrogens by aromatizing A-ring (androstenedione → estrone, testosterone → estradiol). Target for breast cancer therapy.",
        "Ethinyl estradiol: 17α-ethinyl group blocks hepatic oxidative metabolism, increasing oral BA and half-life. Makes it ideal for once-daily contraceptives.",
        "Mestranol: 3-O-methyl ether prodrug of ethinyl estradiol. Demethylated in liver to become active.",
        "SERMs: tamoxifen (antagonist in breast, partial agonist in endometrium/bone), raloxifene (antagonist in breast/endometrium, agonist in bone), ospemifene (agonist in vagina).",
        "Tamoxifen metabolism: CYP2D6 → 4-hydroxytamoxifen (30-100x higher ER affinity). Poor metabolizers have reduced efficacy.",
        "Aromatase inhibitors: anastrozole/letrozole (non-steroidal, reversible azole inhibitors), exemestane (steroidal, irreversible mechanism-based inhibitor).",
        "Clomiphene: anti-estrogen that blocks hypothalamic ER → prevents negative feedback → ↑ GnRH, FSH, LH → ovulation induction. E/Z isomers.",
        "GnRH antagonists (cetrorelix, degarelix, ganirelix, elagolix): competitively block pituitary GnRH receptors → immediate FSH/LH suppression without flare.",
        "Progestins: 19-nortestosterone derivatives (norethindrone, levonorgestrel) have better oral BA than natural progesterone. Used in contraceptives.",
        "Mifepristone (RU-486): progesterone receptor antagonist + glucocorticoid receptor antagonist. Medical abortion when combined with misoprostol."
      ],
      high_yield_clinical_pearls: [
        "Combined oral contraceptives (COCs): 3 mechanisms – (1) suppress ovulation via HPG axis feedback, (2) thicken cervical mucus, (3) thin endometrium.",
        "Estrogen contraindications: VTE history, stroke, MI, migraine with aura, smoking >35 years old, Factor V Leiden, breast cancer.",
        "CYP2D6 poor metabolizers: reduced tamoxifen efficacy. Consider aromatase inhibitors (anastrozole/letrozole) in postmenopausal women instead.",
        "Raloxifene vs tamoxifen: raloxifene has minimal endometrial stimulation (safer for osteoporosis), tamoxifen more effective for breast cancer but ↑ endometrial cancer risk.",
        "Aromatase inhibitors only work in postmenopausal women (ovaries produce estrogen in premenopausal). Cause bone loss, arthralgia, hot flashes.",
        "Clomiphene twins: 5-10% multiple gestation rate due to multiple follicle development. Monitor with ultrasound.",
        "Elagolix vs danazol for endometriosis: elagolix (GnRH antagonist) fewer androgenic side effects than danazol (synthetic androgen). Add-back therapy reduces bone loss.",
        "Testosterone replacement: contraindicated in men desiring fertility (suppresses LH/FSH). Use hCG ± FSH or clomiphene instead.",
        "SERM resistance in breast cancer: develops after ~5 years tamoxifen. Switch to aromatase inhibitor or fulvestrant (pure antagonist with ER degradation)."
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
