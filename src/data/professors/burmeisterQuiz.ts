// Burmeister Quiz Questions - Comprehensive Coverage with Detailed Explanations
// Female Reproductive System, Male Reproductive System, Urinary Tract

import type { QuizQuestion } from './professorTypes';

export const burmeisterQuiz: QuizQuestion[] = [
  {
    id: '1',
    question: 'A 28-year-old woman presents with milky discharge from both breasts. She is not pregnant and stopped breastfeeding 8 months ago. Medication review, pituitary imaging, thyroid function tests, and renal function are all normal. What is the most likely diagnosis?',
    options: [
      'Prolactinoma causing elevated prolactin levels',
      'Hypothyroidism with elevated TSH and TRH',
      'Idiopathic galactorrhea from breast sensitivity',
      'Medication-induced galactorrhea from dopamine antagonists'
    ],
    correct_answer: 'Idiopathic galactorrhea',
    explanation: 'Idiopathic galactorrhea is a diagnosis of EXCLUSION made after ruling out medications, tumors, thyroid disorders, and renal failure. It results when breast tissue is particularly sensitive to prolactin in the blood. Since all other causes have been ruled out in this patient, idiopathic galactorrhea is the correct diagnosis.',
    learningObjective: 'Understand idiopathic galactorrhea diagnosis',
    difficulty: 'medium',
    slideReference: 'Chapter 47 - Galactorrhea'
  },
  {
    id: '2',
    question: 'A patient is diagnosed with proliferative benign breast disease on biopsy. What is the most important counseling point regarding her cancer risk?',
    options: [
      'Proliferative BBD does not increase breast cancer risk at all',
      'Proliferative BBD increases breast cancer risk significantly',
      'Proliferative BBD decreases breast cancer risk over time',
      'Cancer risk is the same as nonproliferative BBD'
    ],
    correct_answer: 'Proliferative BBD increases breast cancer risk',
    explanation: 'Proliferative BBD involves an INCREASE in cell production and INCREASES the risk for breast cancer. This is different from nonproliferative BBD which does NOT increase cell production and does NOT increase cancer risk. This distinction is critical for risk stratification and follow-up planning.',
    learningObjective: 'Differentiate proliferative from nonproliferative BBD',
    difficulty: 'easy',
    slideReference: 'Chapter 47 - BBD'
  },
  {
    id: '3',
    question: 'A 16-year-old girl presents with severe lower abdominal pain that started about 8 months after her first period. The pain lasts 2-3 days each month and sometimes radiates to her lower back. What is the most likely diagnosis?',
    options: [
      'Primary dysmenorrhea from prostaglandin release',
      'Secondary dysmenorrhea from underlying pathology',
      'Endometriosis with ectopic endometrial tissue',
      'Pelvic inflammatory disease from bacterial infection'
    ],
    correct_answer: 'Primary dysmenorrhea',
    explanation: 'Primary dysmenorrhea typically begins about 6 months after menarche and lasts 48-72 hours. The pain is caused by prostaglandin release from endometrial cells causing uterine contractions, blood flow obstruction, and vasoconstriction. Secondary dysmenorrhea affects women in their 2nd-3rd decade of life and is often associated with pathology like endometriosis.',
    learningObjective: 'Distinguish primary from secondary dysmenorrhea',
    difficulty: 'medium',
    slideReference: 'Chapter 47 - Dysmenorrhea'
  },
  {
    id: '4',
    question: 'A 17-year-old female has never had a menstrual period. Physical exam shows normal secondary sexual characteristics. What is the appropriate diagnosis?',
    options: [
      'Primary amenorrhea due to failure to menstruate by age 15',
      'Secondary amenorrhea from cessation of previously regular cycles',
      'Normal - menarche can occur up to age 18 in some girls',
      'Pregnancy causing cessation of menstrual cycles'
    ],
    correct_answer: 'Primary amenorrhea',
    explanation: 'Primary amenorrhea is defined as the absence of menarche by the age of 15. This patient is 17 and has never menstruated, meeting criteria for primary amenorrhea. Further workup would be needed to determine the cause (hypothalamic amenorrhea, PCOS, eating disorders, chronic illness, ovarian failure, etc.).',
    learningObjective: 'Define and recognize primary amenorrhea',
    difficulty: 'easy',
    slideReference: 'Chapter 47 - Amenorrhea'
  },
  {
    id: '5',
    question: 'A 25-year-old woman with previously regular cycles has not menstruated for 4 months. She is not pregnant, breastfeeding, or in menopause. What is the diagnosis?',
    options: [
      'Primary amenorrhea from failure to start menstruating',
      'Secondary amenorrhea from cessation of regular cycles',
      'Normal variation in menstrual cycle patterns',
      'Menopause with permanent cessation of menses'
    ],
    correct_answer: 'Secondary amenorrhea',
    explanation: 'Secondary amenorrhea is defined as cessation of menstruation for at least 3 months in a woman who previously had regular cycles, in the absence of pregnancy, lactation, or menopause. This patient meets all criteria. Causes may include PCOS, stress, excessive exercise, medications, malnutrition, or obesity.',
    learningObjective: 'Define and recognize secondary amenorrhea',
    difficulty: 'easy',
    slideReference: 'Chapter 47 - Amenorrhea'
  },
  {
    id: '6',
    question: 'Which hormone directly causes ovulation in the menstrual cycle?',
    options: [
      'FSH (Follicle-Stimulating Hormone) prepares the follicle',
      'LH (Luteinizing Hormone) surge triggers ovulation',
      'GnRH (Gonadotropin-Releasing Hormone) stimulates pituitary',
      'Estrogen feedback regulates gonadotropin release'
    ],
    correct_answer: 'LH (Luteinizing Hormone)',
    explanation: 'In the normal menstrual cycle: GnRH stimulates release of LH and FSH. FSH prepares the follicle for ovulation. LH CAUSES ovulation. After ovulation, the corpus luteum forms to allow for implantation. If no implantation occurs within 14 days, the corpus luteum is shed and menstruation begins.',
    learningObjective: 'Understand hormonal physiology of menstrual cycle',
    difficulty: 'medium',
    slideReference: 'Chapter 47 - Amenorrhea'
  },
  {
    id: '7',
    question: 'A 14-year-old girl who just started menstruating 6 months ago presents with irregular, heavy bleeding occurring at unpredictable times. No physical lesions are found. Which age group is MOST affected by dysfunctional uterine bleeding (DUB)?',
    options: [
      'Women in their reproductive prime (20s-30s) with regular cycles',
      'Women who just started their cycle OR are peri/postmenopausal with hormonal imbalance',
      'Only postmenopausal women with estrogen deficiency',
      'Only adolescent women establishing menstrual patterns'
    ],
    correct_answer: 'Women who just started their cycle OR are peri/postmenopausal',
    explanation: 'DUB most affects women at the extremes of reproductive life: those who have JUST STARTED their menstrual cycle (like this patient) OR those who are peri or menopausal. DUB is abnormal bleeding from the uterus NOT associated with physical lesions. It stems from hormonal insufficiency caused by increased estrogen. If left untreated, the uterine lining can thicken → hyperplastic cells → possible malignancy.',
    learningObjective: 'Recognize DUB risk factors and pathophysiology',
    difficulty: 'medium',
    slideReference: 'Chapter 47 - DUB'
  },
  {
    id: '8',
    question: 'A woman presents with cyclical symptoms including mood changes, bloating, and headaches. To diagnose PMS, symptoms must meet which criteria?',
    options: [
      'Present 7 days before period, persist 2 cycles, interfere with life',
      'Present 5 days before period, persist 3 consecutive cycles, interfere with life, end within 4 days after cycle',
      'Present during period, persist 6 months, require hospitalization for management',
      'Present throughout entire month, persist indefinitely regardless of cycle'
    ],
    correct_answer: 'Present 5 days before period, persist 3 consecutive cycles, interfere with life, end within 4 days after cycle',
    explanation: 'PMS diagnostic criteria are SPECIFIC: 1) Symptoms must be present for 5 days BEFORE the menstrual period begins, 2) Should persist for at least 3 CONSECUTIVE menstrual cycles, 3) Must CLEARLY interfere with normal activities of life, 4) Must END within 4 days AFTER the menstrual cycle begins. All four criteria must be met.',
    learningObjective: 'Apply PMS diagnostic criteria',
    difficulty: 'hard',
    slideReference: 'Chapter 47 - PMS'
  },
  {
    id: '9',
    question: 'A 24-year-old woman presents with irregular periods, facial hair growth, acne, and obesity. Ultrasound shows enlarged ovaries with multiple small cysts. How is PCOS diagnosed?',
    options: [
      'Positive finding of ovarian cysts on ultrasound imaging',
      'Elevated androgen levels alone on laboratory testing',
      'Diagnosis of exclusion after ruling out other causes of menstrual irregularity and hyperandrogenism',
      'Based solely on clinical symptoms without laboratory confirmation'
    ],
    correct_answer: 'Diagnosis of exclusion after ruling out other causes of menstrual irregularity and hyperandrogenism',
    explanation: 'PCOS diagnosis is made by EXCLUDING all other disorders that could result in menstrual irregularity and hyperandrogenism. It cannot be diagnosed by ultrasound or labs alone. PCOS results from abnormal HPO axis function and presents with hyperandrogenism (hirsutism, acne), menstrual dysfunction, anovulation, metabolic syndrome, and diabetes risk.',
    learningObjective: 'Understand PCOS diagnosis and clinical manifestations',
    difficulty: 'medium',
    slideReference: 'Chapter 47 - PCOS'
  },
  {
    id: '10',
    question: 'A 30-year-old woman complains of pelvic pain before and during her period, and pain during intercourse. Laparoscopy reveals endometrial tissue on her fallopian tubes. What are the most common sites for endometriosis?',
    options: [
      'Uterus, ovaries, bladder within the pelvis',
      'Fallopian tubes, vagina, cervix, uterosacral ligaments',
      'Lungs, brain, liver in rare cases',
      'Kidneys, ureters, bladder in urinary tract'
    ],
    correct_answer: 'Fallopian tubes, vagina, cervix, uterosacral ligaments',
    explanation: 'Endometriosis is the presence and growth of functioning endometrial tissue in places OTHER than the uterus. The most common ectopic sites are: fallopian tubes, vagina, cervix, and uterosacral ligaments. Patients typically present with pelvic pain (before/during cycle or during intercourse), inability to conceive, bleeding between periods, and dysmenorrhea.',
    learningObjective: 'Recognize endometriosis sites and presentation',
    difficulty: 'medium',
    slideReference: 'Chapter 47 - Endometriosis'
  },
  {
    id: '11',
    question: 'A 32-year-old woman has been trying to conceive for 9 months without success. When should a formal infertility assessment be initiated for this patient?',
    options: [
      'Immediately - 9 months is long enough to warrant evaluation',
      'After 1 year of regular intercourse (since she is <35)',
      'After 6 months of regular intercourse if risk factors present',
      'After 2 years of trying to conceive without success'
    ],
    correct_answer: 'After 1 year of regular intercourse (since she is <35)',
    explanation: 'Female infertility assessment timing: After 1 year of regular intercourse in women <35 years old. After 6 months of regular intercourse in women ≥35 years old. May be initiated sooner in women with irregular menstrual cycles who have risk factors. Since this patient is 32 (under 35), the standard is to wait until 1 full year before formal assessment.',
    learningObjective: 'Understand infertility assessment timing',
    difficulty: 'easy',
    slideReference: 'Chapter 47 - Infertility'
  },
  {
    id: '12',
    question: 'A patient asks how combined oral contraceptives prevent pregnancy. What are the THREE mechanisms?',
    options: [
      'Suppress FSH/LH (stop ovulation); thin uterine lining (prevent implantation); thicken cervical mucus (block sperm)',
      'Only suppress ovulation by blocking LH surge',
      'Kill sperm, prevent ovulation, induce abortion of fertilized eggs',
      'Thicken cervical mucus only to block sperm penetration'
    ],
    correct_answer: 'Suppress FSH/LH (stop ovulation); thin uterine lining (prevent implantation); thicken cervical mucus (block sperm)',
    explanation: 'Combined OCPs work through THREE mechanisms: 1) Suppress FSH and LH to STOP ovulation, 2) Thin the uterine lining to PREVENT implantation, 3) Thicken cervical mucus to INHIBIT sperm from reaching the uterus. All three mechanisms work together to prevent pregnancy.',
    learningObjective: 'Understand contraceptive mechanisms',
    difficulty: 'medium',
    slideReference: 'Chapter 47 - Menstruation'
  },
  {
    id: '13',
    question: 'What is the potential consequence if dysfunctional uterine bleeding (DUB) is left untreated?',
    options: [
      'It will resolve on its own without intervention',
      'Uterine lining thickens → hyperplastic cells → possible malignancy',
      'No consequences - DUB is benign and self-limiting',
      'Immediate infertility from endometrial damage'
    ],
    correct_answer: 'Uterine lining thickens → hyperplastic cells → possible malignancy',
    explanation: 'If DUB is left untreated, the lining of the uterus can continue to thicken, causing hyperplastic cells and POSSIBLE MALIGNANCY. This is why proper diagnosis and treatment are important. DUB stems from hormonal insufficiency caused by increased estrogen without proper progesterone opposition.',
    learningObjective: 'Understand DUB complications',
    difficulty: 'medium',
    slideReference: 'Chapter 47 - DUB'
  },
  {
    id: '14',
    question: 'A breastfeeding mother develops a red, warm, swollen area on her breast with burning during feeding and flu-like symptoms. What is the most likely diagnosis and what triggers this condition?',
    options: [
      'Breast cancer; genetic factors and family history',
      'Mastitis; nipple irritation, tissue trauma, chafing during breastfeeding',
      'Galactorrhea; hormonal imbalance with prolactin elevation',
      'BBD; cyclic hormonal changes throughout menstrual cycle'
    ],
    correct_answer: 'Mastitis; nipple irritation, tissue trauma, chafing',
    explanation: 'This is MASTITIS - localized erythematous and painful inflammation involving infection of breast tissue. It most often develops during breastfeeding and is triggered by nipple irritation, tissue trauma, or chafing. Contributing factors include nipple fissures, yeast infections, plugged milk ducts. Clinical manifestations: local tenderness, swelling, warmth, erythema, burning during breastfeeding, flu-like symptoms.',
    learningObjective: 'Recognize mastitis etiology and presentation',
    difficulty: 'easy',
    slideReference: 'Chapter 47 - Mastitis'
  },
  {
    id: '15',
    question: 'What pathophysiologic factor explains why PMS patients often respond well to SSRIs?',
    options: [
      'Estrogen deficiency causing mood disturbances',
      'Progesterone excess leading to water retention',
      'Serotonin deficiency explaining mood symptoms',
      'Testosterone excess causing physical symptoms'
    ],
    correct_answer: 'Serotonin deficiency',
    explanation: 'PMS patients often have SEROTONIN DEFICIENCY, which explains why they respond well to SSRIs (which increase circulating serotonin). Other contributing factors include: Mg and Ca deficiencies (ease headaches, sugar cravings, bloating), rapid shifts in estrogen/progesterone, lower endorphins, low GABA levels, and hypoprolactinemia.',
    learningObjective: 'Understand PMS pathophysiology',
    difficulty: 'medium',
    slideReference: 'Chapter 47 - PMS'
  },

  // === MALE REPRODUCTIVE SYSTEM QUESTIONS ===
  {
    id: '16',
    question: 'A 65-year-old man presents with difficulty urinating, nocturia, and hematuria. What is the most likely diagnosis and main risk factors?',
    options: [
      'Prostate cancer; family history and genetic factors',
      'BPH; age and presence of testosterone signaling',
      'Acute prostatitis; bacterial infection of prostate',
      'Bladder cancer; smoking and chemical exposure'
    ],
    correct_answer: 'BPH; age and presence of testosterone',
    explanation: 'This is classic BPH presentation. BPH is nonmalignant enlargement of the prostate considered a normal part of aging (affects majority of men >60). Main risk factors: AGE and presence of TESTOSTERONE. Pathophysiology: testosterone signals prostate to produce DHT, which mediates prostatic growth. The aging prostate becomes MORE sensitive to available DHT despite decreasing androgen levels.',
    learningObjective: 'Recognize BPH and risk factors',
    difficulty: 'easy',
    slideReference: 'Chapter 48 - BPH'
  },
  {
    id: '17',
    question: 'A 16-year-old male presents to the ED with sudden onset severe unilateral scrotal pain and swelling. What is the most likely diagnosis and why is immediate treatment necessary?',
    options: [
      'Epididymitis; to prevent chronic pain and complications',
      'Testicular torsion; failure to treat can cause loss of fertility or testicle',
      'Orchitis; to prevent bilateral involvement and atrophy',
      'Testicular cancer; to prevent metastasis to other organs'
    ],
    correct_answer: 'Testicular torsion; failure to treat can cause loss of fertility or testicle',
    explanation: 'This is TESTICULAR TORSION - a MEDICAL EMERGENCY. It occurs when the spermatic cord twists causing loss of blood supply. Failure to treat promptly can cause LOSS OF FERTILITY OR THE TESTICLE. Classic presentation: severe UNILATERAL scrotal pain and swelling with sudden onset. In newborns, may present as firm scrotal mass.',
    learningObjective: 'Recognize testicular emergencies',
    difficulty: 'medium',
    slideReference: 'Chapter 48 - Testicular Torsion'
  },
  {
    id: '18',
    question: 'A patient with sickle cell disease presents with a painful erection lasting 6 hours. What type of priapism is this?',
    options: [
      'Nonischemic priapism with preserved blood flow',
      'Ischemic priapism from blood flow obstruction',
      'Neurogenic priapism from nerve dysfunction',
      'Psychogenic priapism from psychological factors'
    ],
    correct_answer: 'Ischemic priapism',
    explanation: 'ISCHEMIC priapism is PAINFUL, occurs when blood cannot leave the penis, and is MORE COMMON in men with sickle cell disease. NONISCHEMIC priapism is usually PAINLESS and occurs when penile blood flow is not regulated properly. Priapism is defined as prolonged erection continuing for hours.',
    learningObjective: 'Distinguish priapism types',
    difficulty: 'medium',
    slideReference: 'Chapter 48 - Priapism'
  },
  {
    id: '19',
    question: 'What are the THREE physiologic steps required for normal erection?',
    options: [
      'Arterial dilation, muscle contraction, venous constriction for rigidity',
      'Sympathetic activation, smooth muscle relaxation, arterial constriction',
      'Parasympathetic inhibition, venous dilation, muscle relaxation',
      'Hormonal surge, arterial constriction, muscle contraction'
    ],
    correct_answer: 'Arterial dilation, muscle contraction, venous constriction',
    explanation: 'Normal erection is a neurovascular event requiring: 1) Chambers in erectile tissue fill with blood via DILATED ARTERIOLES (stimulated by nitric oxide/NO), 2) Pelvic MUSCLES CONTRACT to increase rigidity, 3) VEINS CONSTRICT to block blood outflow. Disruption of any step can cause ED. Occurs via parasympathetic nervous system action.',
    learningObjective: 'Understand ED physiology',
    difficulty: 'hard',
    slideReference: 'Chapter 48 - ED'
  },
  {
    id: '20',
    question: 'A 55-year-old man presents with fever, chills, low back pain, dysuria, urinary frequency, and painful ejaculation. Which type of prostatitis is most likely?',
    options: [
      'Chronic bacterial prostatitis with persistent symptoms',
      'Acute bacterial prostatitis with systemic infection',
      'Chronic pelvic pain syndrome without infection',
      'Asymptomatic inflammatory prostatitis without symptoms'
    ],
    correct_answer: 'Acute bacterial prostatitis',
    explanation: 'This is ACUTE BACTERIAL PROSTATITIS - least common type but easiest to diagnose. Usually caused by Gram-negative bacteria (E. coli, Klebsiella, Proteus). Presents with: fever, chills, arthralgia, LOW BACK PAIN, pelvic pain, abd pain, perineal fullness, dysuria, urinary frequency/urgency, PAINFUL EJACULATION, foul-smelling urine. Causes severe prostatitis symptoms, systemic infection, and acute bacterial UTI.',
    learningObjective: 'Recognize acute bacterial prostatitis',
    difficulty: 'medium',
    slideReference: 'Chapter 48 - Prostatitis'
  },

  // === URINARY TRACT QUESTIONS ===
  {
    id: '21',
    question: 'A pregnant woman has bacteria detected in her urine but reports no symptoms. Should she be treated for cystitis?',
    options: [
      'No - asymptomatic bacteriuria is not treated routinely',
      'Yes - pregnant women and high-risk patients should be treated even if asymptomatic',
      'Only if she develops symptoms of cystitis',
      'Only in the third trimester when risk increases'
    ],
    correct_answer: 'Yes - pregnant women and high-risk patients should be treated even if asymptomatic',
    explanation: 'Asymptomatic bacteriuria (bacteria in urine without symptoms) is usually NOT treated EXCEPT in pregnant women or high-risk patients. Cystitis is classified as COMPLICATED when: patient is PREGNANT, immunocompromised, or male; recent invasive urethral procedures; or etiology likely to fail treatment. Most cases are uncomplicated and occur in healthy, sexually active women.',
    learningObjective: 'Understand cystitis classification and treatment',
    difficulty: 'medium',
    slideReference: 'Urinary Tract - Cystitis'
  },
  {
    id: '22',
    question: 'A 70-year-old woman presents with confusion, decreased appetite, and unsteady gait. Labs show elevated WBC and bacteria in urine. What is the likely diagnosis?',
    options: [
      'Cystitis with bladder infection only',
      'Dementia from neurodegenerative disease',
      'Pyelonephritis with kidney infection',
      'Urinary incontinence from bladder dysfunction'
    ],
    correct_answer: 'Pyelonephritis',
    explanation: 'This is PYELONEPHRITIS (infection of renal pelvis and parenchyma). While typical manifestations include costovertebral angle pain, chills, and fever, OLDER ADULTS may present ATYPICALLY with: confusion, decreased appetite, and unsteady gait. The infection usually develops when pathogens ASCEND from the bladder through the ureter to the kidney. Can lead to sepsis and septic shock.',
    learningObjective: 'Recognize atypical pyelonephritis presentation in elderly',
    difficulty: 'medium',
    slideReference: 'Urinary Tract - Pyelonephritis'
  },
  {
    id: '23',
    question: 'What is the most common causative organism of UTIs including cystitis and pyelonephritis?',
    options: [
      'Staphylococcus aureus from skin flora',
      'Escherichia coli (E. coli) from GI tract',
      'Klebsiella pneumoniae from nosocomial sources',
      'Proteus mirabilis in catheterized patients'
    ],
    correct_answer: 'Escherichia coli (E. coli)',
    explanation: 'E. COLI is the most common causative organism for both cystitis and pyelonephritis. Cystitis develops from ASCENSION of bacteria through the urethra to the bladder. Pyelonephritis usually develops when the pathogen ascends from the bladder through the ureter to the kidney. Obstruction in urine flow and presence of residual urine contribute to UTI development.',
    learningObjective: 'Identify UTI pathogens and pathogenesis',
    difficulty: 'easy',
    slideReference: 'Urinary Tract - UTIs'
  },
  {
    id: '24',
    question: 'A 45-year-old woman reports urine leakage when she sneezes, coughs, or exercises. What type of incontinence is this?',
    options: [
      'Urge incontinence from detrusor overactivity',
      'Stress incontinence from pelvic floor weakness',
      'Mixed incontinence with both stress and urge',
      'Overflow incontinence from incomplete bladder emptying'
    ],
    correct_answer: 'Stress incontinence',
    explanation: 'This is STRESS INCONTINENCE - involuntary loss of urine with PHYSICAL ACTIVITY, sneezing, or coughing. It is the MOST COMMON form of incontinence. Other types: URGE (loss with feeling of urgency), MIXED (loss with activity AND urgency), OVERFLOW (continuous dribbling). Implicated factors include increased pressure, pelvic floor weakness, detrusor muscle dysfunction, urethral sphincter incompetence.',
    learningObjective: 'Differentiate incontinence types',
    difficulty: 'easy',
    slideReference: 'Urinary Tract - Incontinence'
  },
  {
    id: '25',
    question: 'What is vesicoureteral reflux (VUR) and why is it clinically significant?',
    options: [
      'Forward flow of urine from kidney to bladder; causes obstruction',
      'Abnormal backflow of urine from bladder to kidney; can cause pyelonephritis and chronic kidney disease',
      'Inability to empty bladder completely; causes overflow incontinence and retention',
      'Increased bladder pressure; causes urge incontinence and frequency'
    ],
    correct_answer: 'Abnormal backflow of urine from bladder to kidney; can cause pyelonephritis and chronic kidney disease',
    explanation: 'VUR (Vesicoureteral Reflux) is ABNORMAL BACKFLOW of urine from the BLADDER TO THE KIDNEY. This is clinically significant because it can contribute to the development of PYELONEPHRITIS and chronic kidney disease. It is mentioned as one of the factors that can lead to recurrent upper urinary tract infections.',
    learningObjective: 'Understand VUR pathophysiology and significance',
    difficulty: 'medium',
    slideReference: 'Urinary Tract - Pyelonephritis'
  }
];
