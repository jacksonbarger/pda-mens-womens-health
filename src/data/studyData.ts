import type { GameModes } from '../types';

/**
 * STUDY DATA FOR SANTA'S PDA WORKSHOP
 *
 * This is partial data that gets enhanced with id, category, and overview
 * in studyDataEnhanced.ts. Each section here only needs:
 * - section: The section name
 * - game_modes: The game modes for this section
 */

type PartialSection = {
  section: string;
  game_modes: GameModes;
};

export const studyData: { sections: PartialSection[] } = {
  "sections": [
    {
      "section": "Benign Breast Disease",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "What is a hallmark symptom of benign breast disease (BBD)?",
              "answer": "Cyclic breast pain and lumpiness that varies with the menstrual cycle."
            },
            {
              "id": 2,
              "question": "Are BBD changes usually diffuse or localized?",
              "answer": "They are often diffuse and can involve both breasts."
            },
            {
              "id": 3,
              "question": "Does benign breast disease increase breast cancer risk significantly?",
              "answer": "Most simple BBD changes do not significantly increase cancer risk."
            },
            {
              "id": 4,
              "question": "When are BBD symptoms typically worst?",
              "answer": "In the luteal phase, just before menstruation."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {
              "left": "Cyclic mastalgia",
              "right": "Breast pain linked to hormone fluctuations"
            },
            {
              "left": "Nodularity",
              "right": "Lumpy, rope-like breast tissue"
            },
            {
              "left": "Luteal phase",
              "right": "Time when BBD symptoms peak"
            }
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 12,
          "questions": [
            {
              "id": 1,
              "question": "Benign breast disease pain is usually:",
              "options": ["Cyclic", "Constant and non-cyclic", "Only with infection", "Only after menopause"],
              "correct_answer": "Cyclic"
            },
            {
              "id": 2,
              "question": "Which best describes BBD lumps?",
              "options": ["Fixed and hard", "Fluctuating and rubbery", "Always painful", "Associated with nipple retraction"],
              "correct_answer": "Fluctuating and rubbery"
            },
            {
              "id": 3,
              "question": "BBD is most related to:",
              "options": ["Estrogen and progesterone changes", "Prolactin excess", "Thyroid failure", "Insulin deficiency"],
              "correct_answer": "Estrogen and progesterone changes"
            },
            {
              "id": 4,
              "question": "Which age group most commonly experiences BBD?",
              "options": ["Adolescents and reproductive-age women", "Prepubertal girls", "Only postmenopause", "Newborn infants"],
              "correct_answer": "Adolescents and reproductive-age women"
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A 20-year-old woman reports bilateral breast lumpiness and tenderness that worsens before her period and improves after. No fever, no skin changes.",
              "options": ["Benign breast disease", "Mastitis", "Breast cancer", "PCOS"],
              "correct_answer": "Benign breast disease"
            },
            {
              "id": 2,
              "scenario": "A 19-year-old has mobile, rubbery breast nodules that vary in size with her cycle. She is otherwise healthy.",
              "options": ["Benign breast disease", "Endometriosis", "Galactorrhea", "PMS"],
              "correct_answer": "Benign breast disease"
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Order the events of cyclic breast symptoms in benign breast disease.",
          "steps_correct_order": [
            "Follicular phase: minimal symptoms",
            "Luteal phase: hormone rise",
            "Breast swelling and tenderness",
            "Onset of menses and symptom relief"
          ]
        }
      }
    },
    {
      "section": "Galactorrhea",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "What is galactorrhea?",
              "answer": "Milk production not associated with childbirth or nursing."
            },
            {
              "id": 2,
              "question": "Which hormone is typically elevated in galactorrhea?",
              "answer": "Prolactin."
            },
            {
              "id": 3,
              "question": "Which brain structure is often involved when a tumor causes galactorrhea?",
              "answer": "The pituitary gland (prolactinoma)."
            },
            {
              "id": 4,
              "question": "Which type of drug classically causes galactorrhea as a side effect?",
              "answer": "Antipsychotics due to dopamine blockade."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {
              "left": "Prolactin",
              "right": "Hormone that stimulates milk production"
            },
            {
              "left": "Dopamine",
              "right": "Inhibits prolactin release"
            },
            {
              "left": "Antipsychotic drugs",
              "right": "Can increase prolactin and cause galactorrhea"
            }
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 12,
          "questions": [
            {
              "id": 1,
              "question": "Galactorrhea is most directly linked to elevated:",
              "options": ["Prolactin", "Estrogen", "FSH", "LH"],
              "correct_answer": "Prolactin"
            },
            {
              "id": 2,
              "question": "Which symptom might suggest a pituitary adenoma with galactorrhea?",
              "options": ["Visual field defects", "Back pain", "Leg swelling", "Pruritus"],
              "correct_answer": "Visual field defects"
            },
            {
              "id": 3,
              "question": "Which neurotransmitter normally inhibits prolactin release?",
              "options": ["Serotonin", "GABA", "Dopamine", "Glutamate"],
              "correct_answer": "Dopamine"
            },
            {
              "id": 4,
              "question": "Galactorrhea may be associated with:",
              "options": ["Amenorrhea", "Hyperthyroidism only", "Mastitis", "Endometriosis"],
              "correct_answer": "Amenorrhea"
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A woman presents with milky nipple discharge not related to pregnancy, headaches, and decreased peripheral vision.",
              "options": ["Prolactinoma with galactorrhea", "Mastitis", "PCOS", "BBD"],
              "correct_answer": "Prolactinoma with galactorrhea"
            },
            {
              "id": 2,
              "scenario": "A patient on antipsychotic therapy reports new-onset galactorrhea and irregular menses.",
              "options": ["Drug-induced hyperprolactinemia", "Endometriosis", "PMS", "GBS infection"],
              "correct_answer": "Drug-induced hyperprolactinemia"
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Order the pathway from dopamine blockade to galactorrhea.",
          "steps_correct_order": [
            "Dopamine receptors blocked",
            "Prolactin inhibition reduced",
            "Prolactin levels rise",
            "Galactorrhea develops"
          ]
        }
      }
    },
    {
      "section": "Mastitis",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "What is the most common setting for mastitis?",
              "answer": "Breastfeeding (lactational mastitis)."
            },
            {
              "id": 2,
              "question": "What is a key risk factor for mastitis?",
              "answer": "Nipple fissures or trauma allowing bacterial entry."
            },
            {
              "id": 3,
              "question": "Name two hallmark symptoms of mastitis.",
              "answer": "Localized breast erythema and tenderness with fever or malaise."
            },
            {
              "id": 4,
              "question": "Should breastfeeding usually continue with mastitis?",
              "answer": "Yes, in most cases continuing helps relieve milk stasis."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {
              "left": "Milk stasis",
              "right": "Promotes bacterial growth"
            },
            {
              "left": "Nipple fissure",
              "right": "Entry point for bacteria"
            },
            {
              "left": "Mastitis",
              "right": "Painful erythematous breast infection"
            }
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 12,
          "questions": [
            {
              "id": 1,
              "question": "Mastitis most commonly occurs in:",
              "options": ["Pregnant non-lactating women", "Lactating women", "Men", "Postmenopausal women only"],
              "correct_answer": "Lactating women"
            },
            {
              "id": 2,
              "question": "Which symptom is most consistent with mastitis?",
              "options": ["Cyclic breast pain", "Diffuse nodularity", "Localized redness, warmth, and fever", "Green nipple discharge only"],
              "correct_answer": "Localized redness, warmth, and fever"
            },
            {
              "id": 3,
              "question": "A major mechanism of mastitis is:",
              "options": ["Prolactin excess", "Retrograde menstruation", "Milk stasis and bacterial infection", "Hyperandrogenism"],
              "correct_answer": "Milk stasis and bacterial infection"
            },
            {
              "id": 4,
              "question": "Which is least associated with mastitis?",
              "options": ["Nipple fissures", "Infrequent breastfeeding", "Plugged ducts", "Cyclic pain without infection signs"],
              "correct_answer": "Cyclic pain without infection signs"
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A breastfeeding mother has a wedge-shaped area of erythema, firm and painful breast tissue, and a fever of 38.5°C.",
              "options": ["Mastitis", "BBD", "Galactorrhea", "PCOS"],
              "correct_answer": "Mastitis"
            },
            {
              "id": 2,
              "scenario": "A lactating woman reports localized burning pain during feeds and chills. On exam her breast is red and warm.",
              "options": ["Mastitis", "Benign breast disease", "PMS", "Endometriosis"],
              "correct_answer": "Mastitis"
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Arrange the development of lactational mastitis.",
          "steps_correct_order": [
            "Infrequent or incomplete emptying",
            "Milk stasis",
            "Nipple trauma and bacterial entry",
            "Local infection and inflammation"
          ]
        }
      }
    },
    {
      "section": "Dysmenorrhea",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "What mediator is primarily responsible for pain in primary dysmenorrhea?",
              "answer": "Prostaglandins."
            },
            {
              "id": 2,
              "question": "Primary dysmenorrhea is related to what type of cycles?",
              "answer": "Ovulatory cycles with prostaglandin production."
            },
            {
              "id": 3,
              "question": "Name first-line treatment for primary dysmenorrhea.",
              "answer": "NSAIDs."
            },
            {
              "id": 4,
              "question": "Secondary dysmenorrhea is due to what?",
              "answer": "Underlying pelvic pathology such as endometriosis or fibroids."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {
              "left": "Primary dysmenorrhea",
              "right": "Prostaglandin-mediated uterine contractions"
            },
            {
              "left": "Secondary dysmenorrhea",
              "right": "Due to pathology like endometriosis"
            },
            {
              "left": "NSAIDs",
              "right": "Block prostaglandin synthesis"
            }
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 12,
          "questions": [
            {
              "id": 1,
              "question": "Primary dysmenorrhea usually begins:",
              "options": ["Before menarche", "6–12 months after menarche", "After age 40", "Only after childbirth"],
              "correct_answer": "6–12 months after menarche"
            },
            {
              "id": 2,
              "question": "Which is more typical of secondary dysmenorrhea?",
              "options": ["Onset soon after menarche", "Pain relieved by NSAIDs", "New pain after years of painless cycles", "Pain without pathology"],
              "correct_answer": "New pain after years of painless cycles"
            },
            {
              "id": 3,
              "question": "Prostaglandins cause dysmenorrhea pain mainly by:",
              "options": ["Increasing FSH", "Causing uterine contractions and ischemia", "Blocking estrogen", "Inhibiting ovulation"],
              "correct_answer": "Causing uterine contractions and ischemia"
            },
            {
              "id": 4,
              "question": "Which finding suggests secondary rather than primary dysmenorrhea?",
              "options": ["Teenage onset", "Pain only during menses", "Dyspareunia and heavy bleeding", "Response to NSAIDs"],
              "correct_answer": "Dyspareunia and heavy bleeding"
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A 16-year-old has crampy lower abdominal pain with menses that began 1 year after menarche. No pelvic pathology is found; NSAIDs help.",
              "options": ["Primary dysmenorrhea", "Secondary dysmenorrhea", "PMS", "Endometriosis"],
              "correct_answer": "Primary dysmenorrhea"
            },
            {
              "id": 2,
              "scenario": "A 35-year-old develops new severe menstrual pain with heavy flow and pain during intercourse.",
              "options": ["Primary dysmenorrhea", "Secondary dysmenorrhea", "PMS", "Mastitis"],
              "correct_answer": "Secondary dysmenorrhea"
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Order the events leading to pain in primary dysmenorrhea.",
          "steps_correct_order": [
            "Ovulation occurs",
            "Endometrium builds up",
            "Prostaglandins released during menses",
            "Myometrial contractions and ischemia",
            "Crampy menstrual pain"
          ]
        }
      }
    },
    {
      "section": "Amenorrhea",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "Primary amenorrhea is absence of menses by what age?",
              "answer": "Age 15 with normal secondary sexual characteristics."
            },
            {
              "id": 2,
              "question": "Secondary amenorrhea is absence of menses for how long in women with previous normal cycles?",
              "answer": "Three months."
            },
            {
              "id": 3,
              "question": "Name one cause of hypothalamic amenorrhea.",
              "answer": "Intense exercise, stress, or low body weight."
            },
            {
              "id": 4,
              "question": "Which hormone is typically elevated in hyperprolactinemia-related amenorrhea?",
              "answer": "Prolactin."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {
              "left": "Primary amenorrhea",
              "right": "No menses by age 15"
            },
            {
              "left": "Secondary amenorrhea",
              "right": "Stopped periods after previous normal cycles"
            },
            {
              "left": "Hypothalamic suppression",
              "right": "Low GnRH → low FSH/LH"
            }
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 12,
          "questions": [
            {
              "id": 1,
              "question": "Which is a common cause of secondary amenorrhea?",
              "options": ["Pregnancy", "Endometriosis only", "Mastitis", "BV"],
              "correct_answer": "Pregnancy"
            },
            {
              "id": 2,
              "question": "Exercise-induced amenorrhea is usually due to:",
              "options": ["Ovarian failure", "Pituitary tumor", "Hypothalamic suppression of GnRH", "High estrogen"],
              "correct_answer": "Hypothalamic suppression of GnRH"
            },
            {
              "id": 3,
              "question": "Amenorrhea plus galactorrhea suggests:",
              "options": ["PCOS", "Hyperprolactinemia", "Menopause", "DUB"],
              "correct_answer": "Hyperprolactinemia"
            },
            {
              "id": 4,
              "question": "Which hormone is directly released from the hypothalamus to start the reproductive axis?",
              "options": ["FSH", "LH", "GnRH", "Prolactin"],
              "correct_answer": "GnRH"
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A 19-year-old runner has not had a period for 5 months and has low BMI and high training volume. Pregnancy test is negative.",
              "options": ["Hypothalamic amenorrhea", "PCOS", "Endometriosis", "PMS"],
              "correct_answer": "Hypothalamic amenorrhea"
            },
            {
              "id": 2,
              "scenario": "A woman with previously regular cycles stops menstruating for 4 months and has milky nipple discharge.",
              "options": ["Hyperprolactinemia-related amenorrhea", "Menopause", "BV infection", "Mastitis"],
              "correct_answer": "Hyperprolactinemia-related amenorrhea"
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Order the axis of normal menstrual regulation.",
          "steps_correct_order": [
            "Hypothalamus releases GnRH",
            "Pituitary releases FSH and LH",
            "Ovary produces estrogen and progesterone",
            "Endometrium proliferates and sheds"
          ]
        }
      }
    },
    {
      "section": "Dysfunctional Uterine Bleeding (DUB)",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "What hormonal imbalance underlies most DUB?",
              "answer": "Unopposed estrogen without adequate progesterone."
            },
            {
              "id": 2,
              "question": "Which types of bleeding patterns can DUB cause?",
              "answer": "Menorrhagia, metrorrhagia, polymenorrhea, and menometrorrhagia."
            },
            {
              "id": 3,
              "question": "DUB is bleeding not explained by what causes?",
              "answer": "Pregnancy, tumors, structural lesions, or infection."
            },
            {
              "id": 4,
              "question": "Which life stages commonly experience DUB?",
              "answer": "Adolescence and perimenopause due to anovulatory cycles."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {
              "left": "Menorrhagia",
              "right": "Heavy prolonged bleeding"
            },
            {
              "left": "Metrorrhagia",
              "right": "Bleeding between periods"
            },
            {
              "left": "Menometrorrhagia",
              "right": "Heavy and irregular bleeding"
            }
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 12,
          "questions": [
            {
              "id": 1,
              "question": "DUB is most often related to:",
              "options": ["Anovulatory cycles", "Hyperprolactinemia", "Endometriosis", "GBS"],
              "correct_answer": "Anovulatory cycles"
            },
            {
              "id": 2,
              "question": "Which bleeding pattern best fits DUB?",
              "options": ["Regular 28-day cycles", "Irregular, unpredictable bleeding", "Amenorrhea", "Postcoital bleeding only"],
              "correct_answer": "Irregular, unpredictable bleeding"
            },
            {
              "id": 3,
              "question": "Long-term unopposed estrogen in DUB increases risk of:",
              "options": ["Endometrial hyperplasia and cancer", "PCOS only", "Menopause", "Mastitis"],
              "correct_answer": "Endometrial hyperplasia and cancer"
            },
            {
              "id": 4,
              "question": "DUB is most common at:",
              "options": ["Beginning and end of reproductive life", "Childhood", "Late menopause only", "Immediately after birth"],
              "correct_answer": "Beginning and end of reproductive life"
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A 15-year-old with recently started menses has very irregular unpredictable bleeding with no structural abnormalities found.",
              "options": ["DUB due to anovulatory cycles", "Endometriosis", "PCOS", "PID"],
              "correct_answer": "DUB due to anovulatory cycles"
            },
            {
              "id": 2,
              "scenario": "A perimenopausal woman reports heavy, irregular bleeding. Evaluation shows no tumors, but frequent anovulation.",
              "options": ["DUB", "Primary dysmenorrhea", "Menopause", "BV"],
              "correct_answer": "DUB"
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Order the hormonal events in anovulatory DUB.",
          "steps_correct_order": [
            "No ovulation occurs",
            "No corpus luteum forms",
            "Little or no progesterone",
            "Unopposed estrogen stimulates endometrium",
            "Irregular shedding and abnormal bleeding"
          ]
        }
      }
    },
    {
      "section": "Premenstrual Syndrome (PMS)",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "When do PMS symptoms occur in the cycle?",
              "answer": "In the luteal phase, about 5 days before menses."
            },
            {
              "id": 2,
              "question": "What neurotransmitter deficiency is associated with PMS mood symptoms?",
              "answer": "Serotonin deficiency."
            },
            {
              "id": 3,
              "question": "To diagnose PMS, symptoms must:",
              "answer": "Interfere with normal life and recur in at least 3 cycles."
            },
            {
              "id": 4,
              "question": "What type of drugs can help PMS emotional symptoms?",
              "answer": "SSRIs (selective serotonin reuptake inhibitors)."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {
              "left": "Serotonin deficiency",
              "right": "Mood symptoms in PMS"
            },
            {
              "left": "Luteal phase",
              "right": "Timing of PMS symptoms"
            },
            {
              "left": "Functional impairment",
              "right": "Required for PMS diagnosis"
            }
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 12,
          "questions": [
            {
              "id": 1,
              "question": "PMS symptoms must resolve:",
              "options": ["Within 4 days of menses beginning", "Before ovulation", "Only after menses stops", "Throughout the cycle"],
              "correct_answer": "Within 4 days of menses beginning"
            },
            {
              "id": 2,
              "question": "Which is NOT typical of PMS?",
              "options": ["Bloating", "Headache", "Dyspareunia only", "Irritability"],
              "correct_answer": "Dyspareunia only"
            },
            {
              "id": 3,
              "question": "Which phase of the cycle is associated with PMS?",
              "options": ["Follicular", "Luteal", "Ovulatory", "Postmenopausal"],
              "correct_answer": "Luteal"
            },
            {
              "id": 4,
              "question": "PMS is differentiated from PMDD mainly by:",
              "options": ["Presence of physical symptoms", "Timing of symptoms", "Severity and level of impairment", "Duration of cycles"],
              "correct_answer": "Severity and level of impairment"
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A 26-year-old has recurrent mood swings, irritability, and bloating starting 5 days before menses and resolving 2 days after. They interfere with work.",
              "options": ["PMS", "PMDD", "PCOS", "Endometriosis"],
              "correct_answer": "PMS"
            },
            {
              "id": 2,
              "scenario": "She tracks symptoms over 3 months and they consistently appear only in the luteal phase.",
              "options": ["Cycle-related PMS", "Primary dysmenorrhea", "Mastitis", "Amenorrhea"],
              "correct_answer": "Cycle-related PMS"
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Order the PMS symptom timeline.",
          "steps_correct_order": [
            "Ovulation occurs",
            "Luteal phase begins",
            "PMS symptoms emerge (5 days before menses)",
            "Onset of menses",
            "Symptoms resolve within ~4 days"
          ]
        }
      }
    },
    {
      "section": "Polycystic Ovary Syndrome (PCOS)",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "What are the classic features of PCOS?",
              "answer": "Hyperandrogenism, ovulatory dysfunction (irregular menses), and polycystic ovaries."
            },
            {
              "id": 2,
              "question": "Which metabolic condition is strongly associated with PCOS?",
              "answer": "Insulin resistance and metabolic syndrome."
            },
            {
              "id": 3,
              "question": "How does PCOS cause infertility?",
              "answer": "Chronic anovulation prevents ovulation and conception."
            },
            {
              "id": 4,
              "question": "What skin finding often indicates insulin resistance in PCOS?",
              "answer": "Acanthosis nigricans."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {
              "left": "Hyperandrogenism",
              "right": "Hirsutism and acne"
            },
            {
              "left": "Insulin resistance",
              "right": "Acanthosis nigricans"
            },
            {
              "left": "Anovulation",
              "right": "Irregular or absent menses"
            }
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 12,
          "questions": [
            {
              "id": 1,
              "question": "PCOS is primarily a disorder of the:",
              "options": ["HPG axis", "Thyroid", "Adrenal medulla", "Pancreas only"],
              "correct_answer": "HPG axis"
            },
            {
              "id": 2,
              "question": "Which lab pattern is often seen in PCOS?",
              "options": ["High LH relative to FSH", "High FSH relative to LH", "Low LH and FSH", "High prolactin only"],
              "correct_answer": "High LH relative to FSH"
            },
            {
              "id": 3,
              "question": "Which is LEAST consistent with PCOS?",
              "options": ["Irregular menses", "Hirsutism", "Central obesity", "Regular 28-day cycles with no symptoms"],
              "correct_answer": "Regular 28-day cycles with no symptoms"
            },
            {
              "id": 4,
              "question": "PCOS increases the risk of:",
              "options": ["Endometrial cancer", "GBS infection", "Mastitis", "Preeclampsia only"],
              "correct_answer": "Endometrial cancer"
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A 23-year-old woman has irregular menses, acne, obesity, and coarse facial hair. Ultrasound shows enlarged ovaries.",
              "options": ["PCOS", "Endometriosis", "Menopause", "PMS"],
              "correct_answer": "PCOS"
            },
            {
              "id": 2,
              "scenario": "She is also found to have elevated fasting insulin and acanthosis nigricans.",
              "options": ["PCOS with insulin resistance", "Cushing syndrome", "Hyperthyroidism", "Benign breast disease"],
              "correct_answer": "PCOS with insulin resistance"
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Order the sequence from insulin resistance to endometrial risk in PCOS.",
          "steps_correct_order": [
            "Insulin resistance increases",
            "Ovaries produce more androgens",
            "Anovulation and irregular cycles occur",
            "Unopposed estrogen stimulates endometrium",
            "Endometrial hyperplasia and cancer risk increase"
          ]
        }
      }
    },
    {
      "section": "Endometriosis",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "How is endometriosis defined?",
              "answer": "Presence of functioning endometrial tissue outside the uterus."
            },
            {
              "id": 2,
              "question": "Classic triad of endometriosis?",
              "answer": "Cyclic pelvic pain, dyspareunia, and infertility."
            },
            {
              "id": 3,
              "question": "When does pain from endometriosis typically begin relative to menses?",
              "answer": "It often begins BEFORE menstruation and continues during it."
            },
            {
              "id": 4,
              "question": "What causes infertility in endometriosis?",
              "answer": "Inflammation and adhesions that distort pelvic anatomy and fallopian tubes."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {
              "left": "Ectopic endometrial implants",
              "right": "Bleed and cause inflammation"
            },
            {
              "left": "Dyspareunia",
              "right": "Often from uterosacral ligament involvement"
            },
            {
              "left": "Infertility",
              "right": "Tubal scarring and adhesions"
            }
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 12,
          "questions": [
            {
              "id": 1,
              "question": "Which symptom is less typical of endometriosis?",
              "options": ["Cyclic pelvic pain", "Pain before menses", "Dyspareunia", "Acne and hirsutism"],
              "correct_answer": "Acne and hirsutism"
            },
            {
              "id": 2,
              "question": "Endometriosis commonly affects which locations?",
              "options": ["Fallopian tubes and uterosacral ligaments", "Thyroid", "Liver only", "Kidneys only"],
              "correct_answer": "Fallopian tubes and uterosacral ligaments"
            },
            {
              "id": 3,
              "question": "A major complication of endometriosis is:",
              "options": ["Infertility", "Hyperprolactinemia", "Mastitis", "BV infection"],
              "correct_answer": "Infertility"
            },
            {
              "id": 4,
              "question": "Endometriosis pain is often:",
              "options": ["Non-cyclic", "Worse before and during menses", "Only at ovulation", "Unrelated to hormones"],
              "correct_answer": "Worse before and during menses"
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A 30-year-old has pelvic pain starting several days before menses, severe cramps, and pain with deep penetration during sex. She has been trying to conceive for a year.",
              "options": ["Endometriosis", "PCOS", "PMS", "Primary dysmenorrhea"],
              "correct_answer": "Endometriosis"
            },
            {
              "id": 2,
              "scenario": "During laparoscopy, multiple adhesions and powder-burn lesions are seen on uterosacral ligaments.",
              "options": ["Endometriosis", "DUB", "Amenorrhea", "BBD"],
              "correct_answer": "Endometriosis"
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Order the proposed events in endometriosis-related pain and infertility.",
          "steps_correct_order": [
            "Ectopic endometrial tissue implants in pelvis",
            "Tissue responds to hormonal cycle and bleeds",
            "Inflammation and adhesions form",
            "Pelvic organs become distorted",
            "Pain and infertility develop"
          ]
        }
      }
    },
    {
      "section": "Female Infertility",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "Infertility is defined in women under 35 as no conception after how long of unprotected intercourse?",
              "answer": "One year."
            },
            {
              "id": 2,
              "question": "Name three major categories of female infertility causes.",
              "answer": "Ovulatory, tubal/peritoneal, and uterine/cervical factors."
            },
            {
              "id": 3,
              "question": "Which condition is a leading cause of anovulatory infertility?",
              "answer": "PCOS."
            },
            {
              "id": 4,
              "question": "How can endometriosis cause infertility?",
              "answer": "By causing adhesions and scarring that block or distort the fallopian tubes."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {
              "left": "PCOS",
              "right": "Chronic anovulation"
            },
            {
              "left": "Endometriosis",
              "right": "Tubal adhesions and scarring"
            },
            {
              "left": "Hypothalamic dysfunction",
              "right": "Low GnRH → low FSH/LH"
            }
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 12,
          "questions": [
            {
              "id": 1,
              "question": "Evaluation of infertility in a woman over 35 typically begins after:",
              "options": ["3 months", "6 months", "1 year", "2 years"],
              "correct_answer": "6 months"
            },
            {
              "id": 2,
              "question": "Which symptom suggests ovulatory dysfunction?",
              "options": ["Regular monthly periods", "Very irregular cycles", "Dyspareunia only", "Cyclic breast pain"],
              "correct_answer": "Very irregular cycles"
            },
            {
              "id": 3,
              "question": "Tubal factor infertility is most often due to:",
              "options": ["Endometriosis or prior pelvic infection", "Hypothyroidism", "BBD", "PMS"],
              "correct_answer": "Endometriosis or prior pelvic infection"
            },
            {
              "id": 4,
              "question": "Which condition may cause infertility with normal cycles but painful intercourse?",
              "options": ["Endometriosis", "PCOS only", "Amenorrhea", "PMS"],
              "correct_answer": "Endometriosis"
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A 32-year-old woman has irregular cycles, obesity, acne, and infertility.",
              "options": ["PCOS-related infertility", "Endometriosis", "PMS", "Menopause"],
              "correct_answer": "PCOS-related infertility"
            },
            {
              "id": 2,
              "scenario": "Another patient has severe dysmenorrhea, dyspareunia, and infertility with normal hormonal labs.",
              "options": ["Endometriosis-related infertility", "Hypothalamic amenorrhea", "Hyperprolactinemia", "BBD"],
              "correct_answer": "Endometriosis-related infertility"
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Order a straightforward infertility workup approach.",
          "steps_correct_order": [
            "Confirm ovulation and menstrual history",
            "Evaluate for male factor infertility",
            "Assess tubal patency and uterine structure",
            "Investigate endocrine or hypothalamic causes"
          ]
        }
      }
    },
    {
      "section": "Pregnancy Physiology and Complications",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "Which cardiovascular changes occur in pregnancy?",
              "answer": "Increased heart rate, stroke volume, cardiac output, and blood volume."
            },
            {
              "id": 2,
              "question": "What hormone causes smooth muscle relaxation leading to constipation and reflux?",
              "answer": "Progesterone."
            },
            {
              "id": 3,
              "question": "What is preeclampsia?",
              "answer": "Pregnancy-induced hypertension with end-organ involvement."
            },
            {
              "id": 4,
              "question": "Which perinatal infection is associated with neonatal meningitis and sepsis?",
              "answer": "Group B Streptococcus (GBS)."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {
              "left": "Preeclampsia",
              "right": "Hypertension, headache, and swelling"
            },
            {
              "left": "GBS colonization",
              "right": "Risk of neonatal sepsis/meningitis"
            },
            {
              "left": "BV in pregnancy",
              "right": "Increased risk of preterm labor"
            }
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 12,
          "questions": [
            {
              "id": 1,
              "question": "Which pregnancy-related infection is associated with a fishy odor and thin gray discharge?",
              "options": ["BV", "GBS", "Candidiasis", "HSV"],
              "correct_answer": "BV"
            },
            {
              "id": 2,
              "question": "Which complication is characterized by seizures in a pregnant woman with high blood pressure?",
              "options": ["Eclampsia", "BV", "PCOS", "Amenorrhea"],
              "correct_answer": "Eclampsia"
            },
            {
              "id": 3,
              "question": "GBS infection in the newborn can cause:",
              "options": ["Mastitis", "Meningitis and pneumonia", "Endometriosis", "PCOS"],
              "correct_answer": "Meningitis and pneumonia"
            },
            {
              "id": 4,
              "question": "BV in pregnancy increases the risk of:",
              "options": ["Preterm rupture of membranes", "Menopause", "PCOS", "BBD"],
              "correct_answer": "Preterm rupture of membranes"
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A pregnant patient has a blood pressure of 170/110, headaches, and edema.",
              "options": ["Preeclampsia", "Mastitis", "BV", "PCOS"],
              "correct_answer": "Preeclampsia"
            },
            {
              "id": 2,
              "scenario": "A newborn develops lethargy, poor feeding, and seizures after birth. The mother was colonized with GBS.",
              "options": ["Neonatal GBS infection", "PMS", "Endometriosis", "Preeclampsia"],
              "correct_answer": "Neonatal GBS infection"
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Order the progression of severe hypertensive pregnancy disorder.",
          "steps_correct_order": [
            "Gestational hypertension develops",
            "Preeclampsia with symptoms appears",
            "Eclampsia (seizures) develops",
            "HELLP or multi-organ damage may occur"
          ]
        }
      }
    },
    {
      "section": "Postpartum Physiology and Complications",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "What is lochia?",
              "answer": "Postpartum vaginal discharge consisting of blood and uterine tissue."
            },
            {
              "id": 2,
              "question": "Name a common postpartum complication related to breastfeeding.",
              "answer": "Mastitis."
            },
            {
              "id": 3,
              "question": "Why can postpartum women have dyspareunia?",
              "answer": "Low estrogen levels and perineal trauma cause dryness and pain."
            },
            {
              "id": 4,
              "question": "What effect can early estrogen-containing OCPs have postpartum?",
              "answer": "They can reduce milk supply and interfere with breastfeeding."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {
              "left": "Lochia",
              "right": "Postpartum uterine shedding"
            },
            {
              "left": "Perineal infection",
              "right": "Pain, foul-smelling discharge"
            },
            {
              "left": "Mastitis",
              "right": "Infection during breastfeeding"
            }
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 12,
          "questions": [
            {
              "id": 1,
              "question": "Which postpartum symptom is concerning and needs urgent evaluation?",
              "options": ["Hair loss", "Stretch marks", "Heavy persistent bleeding", "Mild perineal discomfort"],
              "correct_answer": "Heavy persistent bleeding"
            },
            {
              "id": 2,
              "question": "Which hormone drop contributes to postpartum vaginal dryness?",
              "options": ["Prolactin", "Estrogen", "Insulin", "TSH"],
              "correct_answer": "Estrogen"
            },
            {
              "id": 3,
              "question": "Postpartum incontinence is often due to:",
              "options": ["Pelvic floor muscle weakness", "PCOS", "PMS", "Thyroid storm"],
              "correct_answer": "Pelvic floor muscle weakness"
            },
            {
              "id": 4,
              "question": "Which can worsen breastfeeding success if started too early postpartum?",
              "options": ["Progestin-only pill", "Combined OCPs", "Barrier methods", "Copper IUD"],
              "correct_answer": "Combined OCPs"
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A postpartum woman reports severe perineal pain and foul-smelling discharge with fever.",
              "options": ["Perineal infection", "Normal lochia", "PCOS", "BBD"],
              "correct_answer": "Perineal infection"
            },
            {
              "id": 2,
              "scenario": "A new mother notes painful intercourse and dryness several weeks after delivery.",
              "options": ["Estrogen deficiency-related dyspareunia", "BV infection only", "Endometriosis", "PCOS"],
              "correct_answer": "Estrogen deficiency-related dyspareunia"
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Order the basic postpartum uterine recovery process.",
          "steps_correct_order": [
            "Delivery of placenta",
            "Uterine contraction and involution begin",
            "Lochia discharge occurs",
            "Gradual return of non-pregnant uterine size"
          ]
        }
      }
    },
    {
      "section": "Menopause",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "Which hormone decreases most prominently in menopause?",
              "answer": "Estrogen."
            },
            {
              "id": 2,
              "question": "Which hormones increase due to loss of negative feedback in menopause?",
              "answer": "FSH and LH."
            },
            {
              "id": 3,
              "question": "Name two common vasomotor symptoms of menopause.",
              "answer": "Hot flashes and night sweats."
            },
            {
              "id": 4,
              "question": "Which long-term complication is increased by low estrogen?",
              "answer": "Osteoporosis and cardiovascular disease."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {
              "left": "Low estrogen",
              "right": "Bone loss and vaginal atrophy"
            },
            {
              "left": "High FSH",
              "right": "Sign of ovarian failure"
            },
            {
              "left": "Hot flashes",
              "right": "Hypothalamic thermoregulatory instability"
            }
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 12,
          "questions": [
            {
              "id": 1,
              "question": "Which is NOT a typical menopausal symptom?",
              "options": ["Vaginal dryness", "Hot flashes", "Cyclic heavy periods", "Sleep disturbances"],
              "correct_answer": "Cyclic heavy periods"
            },
            {
              "id": 2,
              "question": "Menopause increases risk of:",
              "options": ["Osteoporosis", "Hypocalcemia-related fractures", "CV disease", "All of the above"],
              "correct_answer": "All of the above"
            },
            {
              "id": 3,
              "question": "Which hormone is elevated in menopause due to lack of estrogen feedback?",
              "options": ["FSH", "Prolactin", "Insulin", "TSH"],
              "correct_answer": "FSH"
            },
            {
              "id": 4,
              "question": "Genitourinary symptoms in menopause are mainly due to:",
              "options": ["High estrogen", "Low estrogen causing atrophy", "High progesterone", "Infection only"],
              "correct_answer": "Low estrogen causing atrophy"
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A 55-year-old woman with no menses for 2 years reports hot flashes, insomnia, and vaginal dryness.",
              "options": ["Menopause", "PMS", "PCOS", "Endometriosis"],
              "correct_answer": "Menopause"
            },
            {
              "id": 2,
              "scenario": "She also has a new diagnosis of osteopenia and elevated FSH.",
              "options": ["Menopausal bone loss", "PCOS", "Hyperprolactinemia", "Preeclampsia"],
              "correct_answer": "Menopausal bone loss"
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Order the events in the transition to menopause.",
          "steps_correct_order": [
            "Ovarian follicle count declines",
            "Estrogen production decreases",
            "FSH and LH rise due to low feedback",
            "Menses become irregular",
            "Complete cessation of menses (menopause)"
          ]
        }
      }
    },
    {
      "section": "Contraception",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "What is the primary mechanism of combined oral contraceptives (COCs)?",
              "answer": "They suppress ovulation by inhibiting LH and FSH."
            },
            {
              "id": 2,
              "question": "How do progestin-only methods help prevent pregnancy?",
              "answer": "They thicken cervical mucus and may suppress ovulation."
            },
            {
              "id": 3,
              "question": "Is the copper IUD hormonal?",
              "answer": "No, it is non-hormonal and toxic to sperm."
            },
            {
              "id": 4,
              "question": "Does emergency contraception terminate an existing pregnancy?",
              "answer": "No, it mainly delays or prevents ovulation."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {
              "left": "COCs",
              "right": "Suppress ovulation"
            },
            {
              "left": "Hormonal IUD",
              "right": "Thicken mucus + thin endometrium"
            },
            {
              "left": "Copper IUD",
              "right": "Creates sperm-toxic inflammatory environment"
            }
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 12,
          "questions": [
            {
              "id": 1,
              "question": "Which method is non-hormonal?",
              "options": ["Implant", "Patch", "Copper IUD", "COCs"],
              "correct_answer": "Copper IUD"
            },
            {
              "id": 2,
              "question": "Progestin-only pills must be taken:",
              "options": ["At exactly the same time daily", "Once a week", "Once monthly", "Only during menses"],
              "correct_answer": "At exactly the same time daily"
            },
            {
              "id": 3,
              "question": "Barrier methods prevent pregnancy by:",
              "options": ["Suppressing ovulation", "Blocking sperm from reaching egg", "Thinning endometrium", "Altering hormones"],
              "correct_answer": "Blocking sperm from reaching egg"
            },
            {
              "id": 4,
              "question": "Emergency contraception primarily:",
              "options": ["Terminates an implanted embryo", "Prevents ovulation", "Causes miscarriage", "Prevents lactation"],
              "correct_answer": "Prevents ovulation"
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A patient with migraine with aura needs contraception and should avoid estrogen.",
              "options": ["Progestin-only pill or IUD", "COCs", "Patch", "Ring"],
              "correct_answer": "Progestin-only pill or IUD"
            },
            {
              "id": 2,
              "scenario": "A patient wants a low-maintenance reversible method effective for several years.",
              "options": ["Implant or IUD", "Daily pill only", "Condoms", "Spermicides alone"],
              "correct_answer": "Implant or IUD"
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Order the events of COC contraceptive action.",
          "steps_correct_order": [
            "COCs provide exogenous estrogen and progestin",
            "Negative feedback reduces GnRH",
            "FSH and LH are suppressed",
            "No LH surge occurs",
            "Ovulation is inhibited"
          ]
        }
      }
    },
    {
      "section": "Drug Distribution in Pregnancy",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "Total body water in pregnancy is:",
              "answer": "Increased, expanding volume of distribution for hydrophilic drugs."
            },
            {
              "id": 2,
              "question": "Albumin levels in pregnancy are:",
              "answer": "Decreased, increasing free drug fraction."
            },
            {
              "id": 3,
              "question": "Maternal fat stores in pregnancy:",
              "answer": "Increase, expanding Vd for lipophilic drugs."
            },
            {
              "id": 4,
              "question": "Which type of drug crosses the placenta most easily?",
              "answer": "Small, lipophilic, non-ionized drugs."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {
              "left": "Hydrophilic drugs",
              "right": "Larger Vd from increased total body water"
            },
            {
              "left": "Highly protein-bound drugs",
              "right": "More free fraction due to low albumin"
            },
            {
              "left": "Lipophilic drugs",
              "right": "Accumulate more in increased maternal fat"
            }
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 12,
          "questions": [
            {
              "id": 1,
              "question": "Pregnancy generally causes drug serum concentrations to:",
              "options": ["Increase for hydrophilic drugs", "Decrease for hydrophilic drugs", "Stay the same", "Become unpredictable but always toxic"],
              "correct_answer": "Decrease for hydrophilic drugs"
            },
            {
              "id": 2,
              "question": "Decreased albumin in pregnancy:",
              "options": ["Reduces free drug levels", "Increases bound drug only", "Increases free drug levels", "Has no effect on highly bound drugs"],
              "correct_answer": "Increases free drug levels"
            },
            {
              "id": 3,
              "question": "Lipophilic drugs are affected by:",
              "options": ["Decreased maternal fat", "Increased maternal fat", "No changes in pregnancy", "Only albumin levels"],
              "correct_answer": "Increased maternal fat"
            },
            {
              "id": 4,
              "question": "Placental transfer favors drugs that are:",
              "options": ["Hydrophilic and ionized", "Large and protein-bound", "Small, lipophilic, and non-ionized", "Covalently bound to protein"],
              "correct_answer": "Small, lipophilic, and non-ionized"
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A pregnant woman taking a highly protein-bound anticonvulsant shows toxicity without dose change.",
              "options": ["Decreased albumin → increased free drug", "Excess albumin → more binding", "Decreased total water → high levels", "No PK changes in pregnancy"],
              "correct_answer": "Decreased albumin → increased free drug"
            },
            {
              "id": 2,
              "scenario": "A hydrophilic antibiotic seems less effective at standard dose in pregnancy.",
              "options": ["Increased Vd from more total body water", "Decreased Vd", "No distribution changes", "Drug inactivation by placenta only"],
              "correct_answer": "Increased Vd from more total body water"
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Order the conceptual PK changes affecting a hydrophilic drug in pregnancy.",
          "steps_correct_order": [
            "Pregnancy increases total body water",
            "Volume of distribution for hydrophilic drugs increases",
            "Peak plasma concentration decreases",
            "Dose adjustments may be required for efficacy"
          ]
        }
      }
    },
    {
      "section": "Integrated Reproductive Overview",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "Which condition presents with cyclic pain before menses, dyspareunia, and infertility?",
              "answer": "Endometriosis."
            },
            {
              "id": 2,
              "question": "Which condition presents with irregular menses, hyperandrogenism, and obesity?",
              "answer": "PCOS."
            },
            {
              "id": 3,
              "question": "Which condition is due to unopposed estrogen with irregular bleeding?",
              "answer": "Dysfunctional uterine bleeding (DUB)."
            },
            {
              "id": 4,
              "question": "Which life stage is associated with high FSH and low estrogen?",
              "answer": "Menopause."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {
              "left": "PCOS",
              "right": "Hyperandrogenism and anovulation"
            },
            {
              "left": "Endometriosis",
              "right": "Ectopic endometrial tissue"
            },
            {
              "left": "Menopause",
              "right": "Low estrogen and high FSH"
            }
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 12,
          "questions": [
            {
              "id": 1,
              "question": "Which condition best explains cyclic breast pain that improves after menses?",
              "options": ["BBD", "Mastitis", "PCOS", "Endometriosis"],
              "correct_answer": "BBD"
            },
            {
              "id": 2,
              "question": "Which condition is most associated with insulin resistance and acanthosis nigricans?",
              "options": ["PCOS", "Endometriosis", "PMS", "Mastitis"],
              "correct_answer": "PCOS"
            },
            {
              "id": 3,
              "question": "Amenorrhea in an underweight athlete is usually due to:",
              "options": ["Hypothalamic suppression", "Endometriosis", "Menopause", "PMS"],
              "correct_answer": "Hypothalamic suppression"
            },
            {
              "id": 4,
              "question": "Pain that starts before menses and continues during menses with dyspareunia suggests:",
              "options": ["Endometriosis", "Primary dysmenorrhea", "PMS", "PCOS"],
              "correct_answer": "Endometriosis"
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A 27-year-old has irregular cycles, hirsutism, obesity, and infertility.",
              "options": ["PCOS", "Endometriosis", "PMS", "Menopause"],
              "correct_answer": "PCOS"
            },
            {
              "id": 2,
              "scenario": "A 31-year-old has pelvic pain before menses, dyspareunia, and normal hormone labs.",
              "options": ["Endometriosis", "PCOS", "PMS", "DUB"],
              "correct_answer": "Endometriosis"
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Order the hormonal axis from brain to end-organ in female reproduction.",
          "steps_correct_order": [
            "Hypothalamus releases GnRH",
            "Pituitary releases FSH and LH",
            "Ovary produces estrogen and progesterone",
            "Endometrium proliferates and sheds cyclically"
          ]
        }
      }
    },
    {
      "section": "Medicinal Chemistry: BPH, ED & Urinary Incontinence",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "What is the mechanism of action of α1-adrenergic antagonists in BPH?",
              "answer": "They cause smooth muscle relaxation in the prostate and bladder neck by blocking α1A receptors, reducing urethral constriction and improving urine flow without shrinking the prostate."
            },
            {
              "id": 2,
              "question": "What is the chemical class and suffix for α1-antagonists used in BPH?",
              "answer": "Quinazolines with the suffix '-azosin' (e.g., prazosin, terazosin, doxazosin, tamsulosin, alfuzosin, silodosin)."
            },
            {
              "id": 3,
              "question": "How do 5α-reductase inhibitors work in BPH treatment?",
              "answer": "They inhibit the conversion of testosterone to dihydrotestosterone (DHT), leading to prostate shrinkage over several months. DHT is the main androgen mediating prostatic growth."
            },
            {
              "id": 4,
              "question": "What is the mechanism of PDE-5 inhibitors in treating erectile dysfunction?",
              "answer": "They inhibit phosphodiesterase type 5, preventing breakdown of cGMP. This enhances nitric oxide-mediated smooth muscle relaxation in penile arteries, promoting blood flow and erection."
            },
            {
              "id": 5,
              "question": "Name the three main PDE-5 inhibitors and their common suffix.",
              "answer": "Sildenafil (Viagra), tadalafil (Cialis), and vardenafil (Levitra). They share the '-afil' suffix."
            },
            {
              "id": 6,
              "question": "What is the mechanism of prostaglandin E1 (alprostadil) in ED?",
              "answer": "PGE1 activates adenylyl cyclase, increasing cAMP levels, which causes smooth muscle relaxation and vasodilation in the corpus cavernosum, facilitating erection."
            },
            {
              "id": 7,
              "question": "How do anticholinergic drugs help with urinary incontinence?",
              "answer": "They block muscarinic receptors in the detrusor muscle of the bladder, reducing involuntary bladder contractions and urgency."
            },
            {
              "id": 8,
              "question": "What is the mechanism of β3-adrenergic agonists (mirabegron) in urinary incontinence?",
              "answer": "They activate β3 receptors in the bladder, promoting detrusor muscle relaxation and increasing bladder capacity, reducing urgency and frequency."
            },
            {
              "id": 9,
              "question": "How does desmopressin (ADH analog) help with nocturnal enuresis?",
              "answer": "Desmopressin is an antidiuretic hormone analog that promotes water reabsorption in the kidneys, reducing nocturnal urine production."
            },
            {
              "id": 10,
              "question": "Why is tamsulosin preferred over non-selective α1-blockers for BPH?",
              "answer": "Tamsulosin is α1A-selective, primarily targeting prostatic smooth muscle while minimizing vascular α1B effects, thus reducing orthostatic hypotension risk."
            },
            {
              "id": 11,
              "question": "What is a critical drug interaction with PDE-5 inhibitors?",
              "answer": "PDE-5 inhibitors are contraindicated with nitrates because both cause vasodilation via NO-cGMP pathway, leading to severe, potentially fatal hypotension."
            },
            {
              "id": 12,
              "question": "What are common adverse effects of anticholinergics for urinary incontinence?",
              "answer": "Dry mouth, constipation, blurred vision, urinary retention, and cognitive impairment (especially in elderly patients)."
            },
            {
              "id": 13,
              "question": "Why do 5α-reductase inhibitors take months to show clinical effect?",
              "answer": "Because they work by gradually shrinking the prostate over time by blocking new DHT formation, rather than immediately relaxing smooth muscle like α1-blockers."
            },
            {
              "id": 14,
              "question": "What two isoforms of 5α-reductase exist and which drugs target them?",
              "answer": "Type 1 (skin, liver) and Type 2 (prostate, genital skin). Finasteride inhibits Type 2; dutasteride inhibits both Type 1 and Type 2."
            },
            {
              "id": 15,
              "question": "How does nitric oxide (NO) contribute to erection?",
              "answer": "Sexual stimulation triggers NO release from penile nerves and endothelium. NO activates guanylyl cyclase, increasing cGMP, which relaxes smooth muscle and allows blood to engorge the corpus cavernosum."
            },
            {
              "id": 16,
              "question": "What distinguishes terazosin and doxazosin from tamsulosin in BPH treatment?",
              "answer": "Terazosin and doxazosin are non-selective α1-blockers that block both α1A (prostate) and α1B (vasculature) receptors, causing more orthostatic hypotension. They were originally used as antihypertensives."
            },
            {
              "id": 17,
              "question": "What makes silodosin unique among α1-blockers?",
              "answer": "Silodosin (Rapaflo) has the highest α1A selectivity among α1-blockers, providing maximal prostatic benefit with minimal cardiovascular effects, but has higher risk of retrograde ejaculation."
            },
            {
              "id": 18,
              "question": "What is alfuzosin and how does it differ from other α1-blockers?",
              "answer": "Alfuzosin is a uroselective α1-blocker with moderate selectivity for prostatic tissue. It has once-daily dosing and intermediate selectivity between non-selective (prazosin) and highly selective (tamsulosin) agents."
            },
            {
              "id": 19,
              "question": "What is the chemical class of PDE-5 inhibitors and their structural basis?",
              "answer": "PDE-5 inhibitors are pyrazolopyrimidinones structurally based on guanine (mimicking GMP). This allows them to compete with cGMP for PDE-5 binding, preventing cGMP breakdown."
            },
            {
              "id": 20,
              "question": "What is the difference between selectivity and potency in drug action?",
              "answer": "Selectivity refers to a drug's preference for one target over others (measured by comparing IC50 values). Potency is the concentration needed to achieve an effect (lower IC50 = higher potency). A drug can be potent but non-selective."
            },
            {
              "id": 21,
              "question": "Why does sildenafil cause blue-tinted vision as a side effect?",
              "answer": "Sildenafil has only 10-fold selectivity for PDE-5 over PDE-6. At higher doses, it inhibits PDE-6 in retinal photoreceptors, affecting color perception and causing blue-tinted vision."
            },
            {
              "id": 22,
              "question": "What are the three formulations of alprostadil for ED?",
              "answer": "Alprostadil (PGE1) is available as: 1) Caverject (intracavernosal injection), 2) MUSE (intraurethral suppository), and 3) Vitaros (topical cream, available in Europe)."
            },
            {
              "id": 23,
              "question": "What is avanafil and how does it differ from other PDE-5 inhibitors?",
              "answer": "Avanafil is a newer, fast-acting PDE-5 inhibitor with rapid onset (15-30 minutes) and high selectivity for PDE-5. It has fewer side effects due to greater selectivity compared to sildenafil."
            },
            {
              "id": 24,
              "question": "What makes darifenacin unique among anticholinergics for UI?",
              "answer": "Darifenacin (Enablex) is M3-selective, preferentially blocking muscarinic receptors in the bladder while sparing M1 receptors in the brain, reducing cognitive side effects in elderly patients."
            },
            {
              "id": 25,
              "question": "How does solifenacin compare to other anticholinergics for UI?",
              "answer": "Solifenacin (Vesicare) is a non-selective antimuscarinic with long duration of action (once-daily dosing) and better tolerability profile than older agents like oxybutynin."
            },
            {
              "id": 26,
              "question": "What is tolterodine and what receptors does it target?",
              "answer": "Tolterodine (Detrol) is an antimuscarinic agent with preferential selectivity for M2 and M3 receptors in the bladder, providing efficacy with reduced dry mouth compared to oxybutynin."
            },
            {
              "id": 27,
              "question": "Why are 5α-reductase inhibitors considered steroidal drugs?",
              "answer": "Finasteride and dutasteride are steroidal in structure because they are designed to inhibit an enzyme that metabolizes steroid hormones (converting testosterone to DHT). Their structure mimics steroid substrates."
            },
            {
              "id": 28,
              "question": "What structural feature do anticholinergics for UI share?",
              "answer": "Anticholinergics structurally resemble acetylcholine, allowing them to competitively bind muscarinic receptors and block acetylcholine from activating detrusor muscle contractions."
            },
            {
              "id": 29,
              "question": "What structural feature does mirabegron share with adrenergic drugs?",
              "answer": "Mirabegron structurally resembles epinephrine (adrenaline), allowing it to selectively activate β3-adrenergic receptors in bladder smooth muscle to promote relaxation."
            },
            {
              "id": 30,
              "question": "How do the receptor subtypes α1A and α1B differ in location and clinical significance?",
              "answer": "α1A receptors are concentrated in prostatic smooth muscle (mediating urethral constriction), while α1B receptors are in blood vessels (mediating vasoconstriction). Selective α1A blockade treats BPH with less hypotension."
            },
            {
              "id": 31,
              "question": "How does vasopressin differ from desmopressin?",
              "answer": "Vasopressin is a naturally-occurring peptide hormone with a very short half-life, requiring injection. Desmopressin is a synthetic analog with longer duration that can be given orally, making it more practical for treating nocturnal enuresis."
            },
            {
              "id": 32,
              "question": "What is the role of calcium in smooth muscle contraction and how do ED drugs affect it?",
              "answer": "Calcium triggers smooth muscle contraction. cGMP (increased by PDE-5 inhibitors) and cAMP (increased by PGE1) reduce intracellular calcium levels, promoting smooth muscle relaxation and vasodilation, allowing blood engorgement for erection."
            },
            {
              "id": 33,
              "question": "Why does the prostate become more sensitive to DHT with aging?",
              "answer": "With aging, estrogen levels increase relative to testosterone. Estrogen sensitizes the prostate to the effects of DHT, making even normal DHT levels more likely to stimulate prostatic growth and contribute to BPH development."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {"left": "Tamsulosin", "right": "α1A-selective blocker for BPH"},
            {"left": "Sildenafil", "right": "PDE-5 inhibitor (Viagra)"},
            {"left": "Finasteride", "right": "5α-reductase Type 2 inhibitor"},
            {"left": "Mirabegron", "right": "β3-adrenergic agonist for UI"},
            {"left": "Oxybutynin", "right": "Anticholinergic for overactive bladder"},
            {"left": "Alprostadil", "right": "Prostaglandin E1 for ED"},
            {"left": "Desmopressin", "right": "ADH analog for nocturnal enuresis"},
            {"left": "Dutasteride", "right": "Dual 5α-reductase inhibitor"},
            {"left": "Tadalafil", "right": "Long-acting PDE-5 inhibitor (Cialis)"},
            {"left": "Prazosin", "right": "Non-selective α1-blocker"},
            {"left": "Terazosin", "right": "Non-selective α1-blocker with antihypertensive effects"},
            {"left": "Doxazosin", "right": "Non-selective α1-blocker used for BPH and HTN"},
            {"left": "Alfuzosin", "right": "Uroselective α1-blocker"},
            {"left": "Silodosin", "right": "Highly α1A-selective blocker (highest selectivity)"},
            {"left": "Vardenafil", "right": "PDE-5 inhibitor (Levitra)"},
            {"left": "Avanafil", "right": "Fast-acting PDE-5 inhibitor"},
            {"left": "Darifenacin", "right": "M3-selective anticholinergic (Enablex)"},
            {"left": "Solifenacin", "right": "Long-acting antimuscarinic (Vesicare)"},
            {"left": "Tolterodine", "right": "M2/M3-selective antimuscarinic (Detrol)"},
            {"left": "Quinazolines", "right": "Chemical class of α1-antagonists"},
            {"left": "Pyrazolopyrimidinone", "right": "Chemical class of PDE-5 inhibitors"}
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 120,
          "questions": [
            {
              "id": 1,
              "question": "Which drug class provides the fastest symptom relief in BPH?",
              "options": ["α1-blockers", "5α-reductase inhibitors", "PDE-5 inhibitors", "Anticholinergics"],
              "correct_answer": "α1-blockers",
              "explanation": "α1-blockers (like tamsulosin) provide immediate symptom relief by relaxing smooth muscle in the prostate and bladder neck. 5α-reductase inhibitors take 3-6 months to work because they must gradually shrink the prostate."
            },
            {
              "id": 2,
              "question": "PDE-5 inhibitors enhance erection by:",
              "options": ["Increasing cGMP", "Increasing testosterone", "Blocking α1 receptors", "Increasing DHT"],
              "correct_answer": "Increasing cGMP",
              "explanation": "PDE-5 inhibitors prevent the breakdown of cGMP by blocking phosphodiesterase type 5. Elevated cGMP promotes smooth muscle relaxation and vasodilation in penile arteries, facilitating erection."
            },
            {
              "id": 3,
              "question": "Which drug is contraindicated with nitrates?",
              "options": ["Sildenafil", "Tamsulosin", "Finasteride", "Oxybutynin"],
              "correct_answer": "Sildenafil",
              "explanation": "Sildenafil (and all PDE-5 inhibitors) are absolutely contraindicated with nitrates because both work through the NO-cGMP pathway. Combined use causes severe, potentially fatal hypotension."
            },
            {
              "id": 4,
              "question": "Anticholinergics treat urinary incontinence by:",
              "options": ["Blocking detrusor contractions", "Relaxing prostate", "Increasing ADH", "Inhibiting PDE-5"],
              "correct_answer": "Blocking detrusor contractions",
              "explanation": "Anticholinergics block muscarinic receptors on the detrusor muscle of the bladder, preventing involuntary contractions that cause urgency and frequency in overactive bladder."
            },
            {
              "id": 5,
              "question": "Which α1-blocker is most selective for the prostate?",
              "options": ["Tamsulosin", "Prazosin", "Doxazosin", "Terazosin"],
              "correct_answer": "Tamsulosin",
              "explanation": "Tamsulosin is α1A-selective, preferentially targeting prostatic smooth muscle over vascular α1B receptors. This selectivity reduces orthostatic hypotension compared to non-selective agents like prazosin or doxazosin."
            },
            {
              "id": 6,
              "question": "Finasteride works by blocking conversion of:",
              "options": ["Testosterone to DHT", "cGMP to GMP", "NO to cGMP", "Estrogen to testosterone"],
              "correct_answer": "Testosterone to DHT",
              "explanation": "Finasteride inhibits 5α-reductase Type 2, blocking the conversion of testosterone to dihydrotestosterone (DHT). Since DHT is the primary androgen driving prostatic growth, reducing DHT shrinks the prostate over time."
            },
            {
              "id": 7,
              "question": "Mirabegron is a:",
              "options": ["β3-agonist", "α1-antagonist", "Anticholinergic", "PDE-5 inhibitor"],
              "correct_answer": "β3-agonist",
              "explanation": "Mirabegron is a β3-adrenergic agonist that activates β3 receptors in the bladder detrusor muscle, promoting relaxation and increasing bladder capacity. It's an alternative to anticholinergics with fewer side effects."
            },
            {
              "id": 8,
              "question": "Which has the longest duration of action among PDE-5 inhibitors?",
              "options": ["Tadalafil", "Sildenafil", "Vardenafil", "Alprostadil"],
              "correct_answer": "Tadalafil",
              "explanation": "Tadalafil (Cialis) has a half-life of ~17.5 hours, lasting up to 36 hours. Sildenafil and vardenafil last only 4-6 hours. This longer duration allows for more spontaneity."
            },
            {
              "id": 9,
              "question": "Which α1-blocker has the HIGHEST α1A selectivity?",
              "options": ["Silodosin", "Tamsulosin", "Alfuzosin", "Prazosin"],
              "correct_answer": "Silodosin",
              "explanation": "Silodosin (Rapaflo) has the highest α1A selectivity of all α1-blockers, providing maximal prostatic benefit with minimal cardiovascular effects. However, this high selectivity increases risk of retrograde ejaculation."
            },
            {
              "id": 10,
              "question": "What is the chemical class of α1-antagonists?",
              "options": ["Quinazolines", "Pyrazolopyrimidinones", "Benzodiazepines", "Phenothiazines"],
              "correct_answer": "Quinazolines",
              "explanation": "α1-antagonists (prazosin, terazosin, doxazosin, tamsulosin, etc.) belong to the quinazoline chemical class and share the '-azosin' suffix. This structural framework allows competitive antagonism at α1-receptors."
            },
            {
              "id": 11,
              "question": "Which anticholinergic is M3-selective to reduce cognitive side effects?",
              "options": ["Darifenacin", "Oxybutynin", "Tolterodine", "Solifenacin"],
              "correct_answer": "Darifenacin",
              "explanation": "Darifenacin (Enablex) is M3-selective, preferentially blocking muscarinic receptors in the bladder while sparing M1 receptors in the brain. This reduces cognitive side effects like confusion and memory impairment, especially important in elderly patients."
            },
            {
              "id": 12,
              "question": "Why does sildenafil cause blue-tinted vision?",
              "options": ["Inhibits PDE-6 in retina", "Blocks α1 receptors", "Increases DHT", "Activates M3 receptors"],
              "correct_answer": "Inhibits PDE-6 in retina",
              "explanation": "Sildenafil has only 10-fold selectivity for PDE-5 over PDE-6. At higher doses, it inhibits PDE-6 in retinal photoreceptors, affecting color perception and causing blue-tinted vision. Newer agents like avanafil have greater selectivity."
            },
            {
              "id": 13,
              "question": "Which PDE-5 inhibitor has the fastest onset of action?",
              "options": ["Avanafil", "Sildenafil", "Tadalafil", "Vardenafil"],
              "correct_answer": "Avanafil",
              "explanation": "Avanafil has the fastest onset (15-30 minutes) and high PDE-5 selectivity, resulting in fewer side effects. Sildenafil takes 30-60 minutes, while tadalafil and vardenafil take 30-120 minutes."
            },
            {
              "id": 14,
              "question": "Terazosin and doxazosin were originally developed as:",
              "options": ["Antihypertensives", "Antibiotics", "Antidepressants", "Antihistamines"],
              "correct_answer": "Antihypertensives",
              "explanation": "Terazosin and doxazosin are non-selective α1-blockers that block both prostatic (α1A) and vascular (α1B) receptors. They were originally used as antihypertensives before BPH became a common indication."
            },
            {
              "id": 15,
              "question": "What structural feature allows PDE-5 inhibitors to work?",
              "options": ["Mimic guanine structure", "Resemble acetylcholine", "Look like testosterone", "Similar to dopamine"],
              "correct_answer": "Mimic guanine structure",
              "explanation": "PDE-5 inhibitors are pyrazolopyrimidinones structurally based on guanine (the 'G' in cGMP). This allows them to competitively bind to PDE-5 and prevent cGMP breakdown, mimicking the natural substrate."
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A 65-year-old man with BPH complains of hesitancy and weak stream. He wants quick relief. Which drug is best?",
              "options": ["Tamsulosin", "Finasteride", "Dutasteride", "Desmopressin"],
              "correct_answer": "Tamsulosin",
              "explanation": "Tamsulosin (α1A-selective blocker) provides immediate symptom relief by relaxing prostatic smooth muscle. Finasteride/dutasteride take 3-6 months to shrink the prostate and wouldn't meet this patient's need for quick relief."
            },
            {
              "id": 2,
              "scenario": "A 55-year-old man on nitroglycerin for angina develops ED. Which ED treatment is contraindicated?",
              "options": ["Sildenafil", "Alprostadil", "Psychotherapy", "Vacuum device"],
              "correct_answer": "Sildenafil",
              "explanation": "PDE-5 inhibitors (sildenafil, tadalafil, vardenafil) are absolutely contraindicated with nitrates because both cause vasodilation via NO-cGMP pathway, leading to severe hypotension and potential MI. Alprostadil (PGE1) works via a different pathway and is safe."
            },
            {
              "id": 3,
              "scenario": "An elderly woman with urgency incontinence starts an anticholinergic. What side effect should you warn about?",
              "options": ["Dry mouth and confusion", "Hypertension", "Hypoglycemia", "Increased libido"],
              "correct_answer": "Dry mouth and confusion",
              "explanation": "Anticholinergics block muscarinic receptors throughout the body, causing dry mouth (salivary glands), constipation, blurred vision, and cognitive impairment. Elderly patients are especially vulnerable to confusion and memory problems."
            },
            {
              "id": 4,
              "scenario": "A patient with BPH has been on tamsulosin for 3 months with partial improvement. Adding which drug could provide long-term prostate shrinkage?",
              "options": ["Finasteride", "Sildenafil", "Oxybutynin", "Mirabegron"],
              "correct_answer": "Finasteride",
              "explanation": "Combination therapy (α1-blocker + 5α-reductase inhibitor) is effective for BPH. Tamsulosin provides immediate symptom relief, while finasteride shrinks the prostate over time by reducing DHT. This combination is superior to monotherapy for moderate-to-severe BPH."
            },
            {
              "id": 5,
              "scenario": "A 6-year-old child has nocturnal enuresis despite behavioral interventions. Which pharmacologic option reduces nighttime urine production?",
              "options": ["Desmopressin", "Tamsulosin", "Finasteride", "Tadalafil"],
              "correct_answer": "Desmopressin",
              "explanation": "Desmopressin (ADH analog) promotes water reabsorption in the kidneys, reducing nocturnal urine volume. It's first-line pharmacotherapy for primary nocturnal enuresis in children after behavioral modifications fail. Oral formulation is convenient for pediatric use."
            },
            {
              "id": 6,
              "scenario": "A 70-year-old man with BPH and orthostatic hypotension needs an α1-blocker. Which drug minimizes risk of worsening hypotension?",
              "options": ["Tamsulosin (α1A-selective)", "Prazosin (non-selective)", "Terazosin (non-selective)", "Doxazosin (non-selective)"],
              "correct_answer": "Tamsulosin (α1A-selective)",
              "explanation": "Tamsulosin's α1A selectivity targets prostatic smooth muscle while sparing vascular α1B receptors. Non-selective blockers (prazosin, terazosin, doxazosin) block both α1A and α1B, causing significant vasodilation and worsening orthostatic hypotension."
            },
            {
              "id": 7,
              "scenario": "An 80-year-old woman with urge incontinence and mild dementia needs anticholinergic therapy. Which drug has the best cognitive safety profile?",
              "options": ["Darifenacin (M3-selective)", "Oxybutynin (M1-M3)", "Tolterodine (M2-M3)", "None are safe"],
              "correct_answer": "Darifenacin (M3-selective)",
              "explanation": "Darifenacin's M3 selectivity spares M1 receptors in the CNS, reducing cognitive side effects. Oxybutynin (M1-M3) crosses the blood-brain barrier and is highest risk for confusion in elderly. In dementia patients, consider mirabegron (β3-agonist) as an alternative."
            },
            {
              "id": 8,
              "scenario": "A 50-year-old man needs ED treatment and wants the fastest-acting medication for spontaneity. Which PDE-5 inhibitor works in 15-30 minutes?",
              "options": ["Avanafil", "Sildenafil", "Tadalafil", "Vardenafil"],
              "correct_answer": "Avanafil",
              "explanation": "Avanafil's rapid onset (15-30 minutes) offers maximum spontaneity. Sildenafil takes 30-60 minutes, tadalafil 30-120 minutes, and vardenafil 60 minutes. Avanafil also has high PDE-5 selectivity with fewer side effects."
            },
            {
              "id": 9,
              "scenario": "A patient on tamsulosin reports retrograde ejaculation. You switch to which α1-blocker with lower ejaculatory dysfunction risk?",
              "options": ["Alfuzosin (uroselective)", "Silodosin (highest α1A)", "Prazosin (non-selective)", "Doxazosin (non-selective)"],
              "correct_answer": "Alfuzosin (uroselective)",
              "explanation": "Alfuzosin has intermediate α1A selectivity, balancing efficacy with lower ejaculatory dysfunction risk. Silodosin (highest α1A selectivity) has the HIGHEST risk (28% retrograde ejaculation). Tamsulosin is intermediate. Alfuzosin or non-selective agents are better choices."
            },
            {
              "id": 10,
              "scenario": "A 60-year-old man complains of blue-tinted vision after taking sildenafil. What is the mechanism?",
              "options": ["PDE-6 inhibition in retina", "α1 blockade", "Anticholinergic effect", "DHT reduction"],
              "correct_answer": "PDE-6 inhibition in retina",
              "explanation": "Sildenafil's 10-fold selectivity for PDE-5 over PDE-6 means higher doses can inhibit PDE-6 in retinal cones, affecting color discrimination. Blue vision typically resolves in hours. Switching to avanafil (greater selectivity) may prevent recurrence."
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Order the steps in NO-mediated erection:",
          "steps_correct_order": [
            "Sexual stimulation triggers NO release",
            "NO activates guanylyl cyclase",
            "cGMP levels increase",
            "Smooth muscle in corpus cavernosum relaxes",
            "Blood engorges penis causing erection"
          ]
        }
      }
    },
    {
      "section": "Benign Prostatic Hyperplasia (BPH)",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "What is benign prostatic hyperplasia (BPH)?",
              "answer": "BPH is non-cancerous enlargement of the prostate gland, commonly occurring in aging men. It results from hyperplasia of stromal and epithelial cells in the transition zone of the prostate."
            },
            {
              "id": 2,
              "question": "What is the prevalence of BPH by age?",
              "answer": "BPH affects ~50% of men in their 50s and up to 90% of men over 80. Histologic BPH is almost universal in aging, though not all have symptoms."
            },
            {
              "id": 3,
              "question": "What hormone drives BPH development?",
              "answer": "Dihydrotestosterone (DHT), the 5α-reduced metabolite of testosterone, is the primary androgen driving prostatic growth. It has higher affinity for androgen receptors than testosterone."
            },
            {
              "id": 4,
              "question": "What enzyme converts testosterone to DHT?",
              "answer": "5α-reductase, particularly the Type 2 isoform found in the prostate. This is the therapeutic target of finasteride and dutasteride."
            },
            {
              "id": 5,
              "question": "What are typical lower urinary tract symptoms (LUTS) of BPH?",
              "answer": "Obstructive symptoms: hesitancy, weak stream, intermittency, incomplete emptying. Irritative symptoms: frequency, urgency, nocturia. Both result from bladder outlet obstruction and bladder dysfunction."
            },
            {
              "id": 6,
              "question": "What is the American Urological Association Symptom Index (AUA-SI)?",
              "answer": "A validated 7-question questionnaire scoring BPH symptom severity from 0-35. Scores: 0-7 mild, 8-19 moderate, 20-35 severe. Used to guide treatment decisions."
            },
            {
              "id": 7,
              "question": "What physical exam finding is classic for BPH?",
              "answer": "Digital rectal exam (DRE) reveals smooth, symmetrically enlarged prostate without nodules or induration. Size on DRE correlates poorly with symptom severity."
            },
            {
              "id": 8,
              "question": "What lab test helps rule out prostate cancer in BPH workup?",
              "answer": "Prostate-specific antigen (PSA). Elevated PSA may indicate cancer, prostatitis, or large BPH. PSA >4 ng/mL warrants further evaluation. BPH typically causes mild PSA elevation proportional to prostate volume."
            },
            {
              "id": 9,
              "question": "What imaging can assess prostate size and post-void residual?",
              "answer": "Transabdominal ultrasound measures post-void residual (PVR) urine. Transrectal ultrasound (TRUS) precisely measures prostate volume. PVR >200 mL suggests significant obstruction."
            },
            {
              "id": 10,
              "question": "What urodynamic test distinguishes BPH from bladder dysfunction?",
              "answer": "Pressure-flow studies measure bladder pressure and urine flow simultaneously. High pressure with low flow suggests bladder outlet obstruction (BPH). Low pressure with low flow suggests detrusor weakness."
            },
            {
              "id": 11,
              "question": "What is acute urinary retention in BPH?",
              "answer": "Sudden inability to void despite full bladder, causing severe pain. It's a urologic emergency requiring catheterization. Triggers include α-agonists (decongestants), anticholinergics, or alcohol."
            },
            {
              "id": 12,
              "question": "What are first-line medications for BPH?",
              "answer": "α1-adrenergic antagonists (e.g., tamsulosin, alfuzosin) for immediate symptom relief. 5α-reductase inhibitors (finasteride, dutasteride) for prostate shrinkage over months. Combination therapy for moderate-severe BPH."
            },
            {
              "id": 13,
              "question": "What surgical option is gold standard for severe BPH?",
              "answer": "Transurethral resection of the prostate (TURP) removes obstructing tissue via cystoscope. It provides durable symptom relief but has risks: bleeding, retrograde ejaculation, incontinence, erectile dysfunction."
            },
            {
              "id": 14,
              "question": "What minimally invasive procedures treat BPH?",
              "answer": "Options include: prostatic urethral lift (UroLift), water vapor thermal therapy (Rezūm), laser enucleation (HoLEP), and prostatic artery embolization. They offer faster recovery than TURP with fewer sexual side effects."
            },
            {
              "id": 15,
              "question": "What complications can untreated BPH cause?",
              "answer": "Chronic urinary retention, bladder stones, recurrent UTIs, hydronephrosis with renal insufficiency, and bladder diverticula from chronic high-pressure voiding."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {
              "left": "DHT",
              "right": "Primary androgen driving prostatic growth"
            },
            {
              "left": "5α-reductase",
              "right": "Enzyme converting testosterone to DHT"
            },
            {
              "left": "Nocturia",
              "right": "Waking at night to urinate"
            },
            {
              "left": "Hesitancy",
              "right": "Difficulty initiating urinary stream"
            },
            {
              "left": "Post-void residual",
              "right": "Urine remaining after voiding"
            },
            {
              "left": "TURP",
              "right": "Surgical removal of obstructing prostate tissue"
            }
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 12,
          "questions": [
            {
              "id": 1,
              "question": "Which hormone primarily drives BPH?",
              "options": ["Dihydrotestosterone (DHT)", "Testosterone", "Estrogen", "Prolactin"],
              "correct_answer": "Dihydrotestosterone (DHT)"
            },
            {
              "id": 2,
              "question": "BPH most commonly affects which prostate zone?",
              "options": ["Transition zone", "Peripheral zone", "Central zone", "Anterior fibromuscular stroma"],
              "correct_answer": "Transition zone"
            },
            {
              "id": 3,
              "question": "What is first-line medical therapy for immediate BPH symptom relief?",
              "options": ["α1-adrenergic antagonists", "5α-reductase inhibitors", "Antibiotics", "Anticholinergics"],
              "correct_answer": "α1-adrenergic antagonists"
            },
            {
              "id": 4,
              "question": "Normal PSA in BPH is typically:",
              "options": ["<4 ng/mL or mildly elevated", "Always >10 ng/mL", "Undetectable", "Not relevant to BPH"],
              "correct_answer": "<4 ng/mL or mildly elevated"
            },
            {
              "id": 5,
              "question": "Gold standard surgical treatment for severe BPH is:",
              "options": ["TURP (transurethral resection)", "Open prostatectomy", "Radiation", "Cryotherapy"],
              "correct_answer": "TURP (transurethral resection)"
            },
            {
              "id": 6,
              "question": "Which is an obstructive LUTS symptom?",
              "options": ["Weak urinary stream", "Urgency", "Frequency", "Nocturia"],
              "correct_answer": "Weak urinary stream"
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A 65-year-old man complains of difficulty starting urination, weak stream, and waking 3 times nightly to urinate. DRE shows smooth, enlarged prostate. PSA is 3.2 ng/mL. What is the most likely diagnosis?",
              "options": ["Benign prostatic hyperplasia", "Prostate cancer", "Prostatitis", "Bladder cancer"],
              "correct_answer": "Benign prostatic hyperplasia",
              "explanation": "Classic BPH presentation: obstructive LUTS (hesitancy, weak stream) and irritative LUTS (nocturia) in an older man. Smooth, enlarged prostate on DRE with normal/mildly elevated PSA supports BPH. Prostate cancer typically presents with hard, irregular nodules."
            },
            {
              "id": 2,
              "scenario": "A 70-year-old man with known BPH takes an over-the-counter cold medicine containing pseudoephedrine. He develops sudden inability to urinate with severe suprapubic pain. What happened?",
              "options": ["Acute urinary retention from α-agonist", "Bladder rupture", "Kidney stone", "Prostate cancer progression"],
              "correct_answer": "Acute urinary retention from α-agonist",
              "explanation": "Pseudoephedrine is an α1-adrenergic agonist that increases smooth muscle tone in the prostate and bladder neck, precipitating acute urinary retention in BPH patients. This is a urologic emergency requiring immediate catheterization. Patients with BPH should avoid decongestants."
            },
            {
              "id": 3,
              "scenario": "A 58-year-old man with moderate BPH symptoms (AUA-SI score 15) wants treatment. He desires quick symptom relief. What medication is most appropriate?",
              "options": ["Tamsulosin (α1-blocker)", "Finasteride (5α-reductase inhibitor)", "Both tamsulosin and finasteride", "Antibiotics"],
              "correct_answer": "Tamsulosin (α1-blocker)",
              "explanation": "α1-blockers like tamsulosin provide immediate symptom relief (within days-weeks) by relaxing prostatic smooth muscle. 5α-reductase inhibitors take 3-6 months to shrink the prostate. For moderate symptoms with normal prostate size, α1-blocker monotherapy is appropriate first-line."
            },
            {
              "id": 4,
              "scenario": "A 72-year-old man has severe BPH refractory to maximum medical therapy. He has recurrent UTIs and post-void residual of 300 mL. What is the next step?",
              "options": ["Surgical intervention (TURP)", "Increase medication doses", "Observation", "Antibiotics only"],
              "correct_answer": "Surgical intervention (TURP)",
              "explanation": "Indications for BPH surgery include: refractory symptoms despite medical therapy, recurrent UTIs, bladder stones, renal insufficiency from obstruction, or recurrent urinary retention. High PVR (>200 mL) and recurrent UTIs indicate severe obstruction requiring surgical relief."
            },
            {
              "id": 5,
              "scenario": "A 60-year-old man with BPH on tamsulosin reports retrograde ejaculation. He wants to preserve ejaculatory function. What alternative minimally invasive procedure spares ejaculation better than TURP?",
              "options": ["Prostatic urethral lift (UroLift)", "Transurethral resection (TURP)", "Open prostatectomy", "Continue tamsulosin"],
              "correct_answer": "Prostatic urethral lift (UroLift)",
              "explanation": "UroLift mechanically opens the prostatic urethra with implants, preserving ejaculatory function in >90% of patients. TURP causes retrograde ejaculation in 65-75%. UroLift is ideal for patients prioritizing sexual function with moderate prostate size (<80 g) and no median lobe enlargement."
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Order the pathophysiologic sequence in BPH:",
          "steps_correct_order": [
            "DHT accumulation in prostatic tissue",
            "Stromal and epithelial cell hyperplasia in transition zone",
            "Prostate enlargement compresses urethra",
            "Bladder outlet obstruction develops",
            "Detrusor hypertrophy and LUTS symptoms"
          ]
        }
      }
    },
    {
      "section": "Erectile Dysfunction (ED)",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "What is erectile dysfunction (ED)?",
              "answer": "ED is the persistent inability to achieve or maintain an erection sufficient for satisfactory sexual performance. It affects ~50% of men aged 40-70 to some degree."
            },
            {
              "id": 2,
              "question": "What are the two main categories of ED etiology?",
              "answer": "Organic (vascular, neurologic, hormonal, anatomic) and psychogenic. Most cases in older men are organic, often with psychogenic overlay. Younger men more commonly have psychogenic ED."
            },
            {
              "id": 3,
              "question": "What is the most common organic cause of ED?",
              "answer": "Vascular disease (atherosclerosis, diabetes, hypertension). ED is often an early warning sign of cardiovascular disease, as penile arteries are smaller and affected earlier than coronary arteries."
            },
            {
              "id": 4,
              "question": "How does diabetes cause ED?",
              "answer": "Diabetes causes both neuropathy (impaired nitric oxide release from autonomic nerves) and vasculopathy (endothelial dysfunction reducing NO production). ~50% of diabetic men develop ED."
            },
            {
              "id": 5,
              "question": "What neurologic causes can lead to ED?",
              "answer": "Spinal cord injury, multiple sclerosis, stroke, Parkinson's disease, and pelvic surgery (radical prostatectomy) damaging cavernous nerves. Neurologic ED impairs NO release needed for erection."
            },
            {
              "id": 6,
              "question": "What hormonal abnormalities cause ED?",
              "answer": "Hypogonadism (low testosterone), hyperprolactinemia, thyroid disorders, and Cushing's syndrome. Testosterone is essential for libido and maintaining erectile tissue health, though not directly required for erection mechanism."
            },
            {
              "id": 7,
              "question": "What medications commonly cause ED?",
              "answer": "Antihypertensives (β-blockers, thiazides), antidepressants (SSRIs), antipsychotics, antiandrogens (finasteride, spironolactone), and chronic opioid use. Always review medication list in ED evaluation."
            },
            {
              "id": 8,
              "question": "What is the initial evaluation for ED?",
              "answer": "Detailed sexual, medical, and psychosocial history. Physical exam including vitals, genitals, secondary sex characteristics, and DRE. Labs: testosterone, glucose/HbA1c, lipids, TSH, prolactin if low testosterone."
            },
            {
              "id": 9,
              "question": "What distinguishes psychogenic from organic ED?",
              "answer": "Psychogenic ED: sudden onset, situational, preserved nocturnal/morning erections, younger age, stress/relationship issues. Organic ED: gradual onset, consistent, absent nocturnal erections, risk factors (age, diabetes, vascular disease)."
            },
            {
              "id": 10,
              "question": "What is the role of nocturnal penile tumescence (NPT) testing?",
              "answer": "NPT monitors erections during REM sleep. Normal NPT (3-5 erections/night) suggests psychogenic ED. Absent NPT indicates organic ED. Rarely used now; trial of PDE-5 inhibitor is more practical."
            },
            {
              "id": 11,
              "question": "What is first-line pharmacologic treatment for ED?",
              "answer": "PDE-5 inhibitors (sildenafil, tadalafil, vardenafil, avanafil) if no contraindications. They enhance nitric oxide-mediated vasodilation. Effective in ~70% of men with organic ED."
            },
            {
              "id": 12,
              "question": "What is an absolute contraindication to PDE-5 inhibitors?",
              "answer": "Nitrate use (nitroglycerin, isosorbide). Both dilate via NO-cGMP pathway; combined use causes severe hypotension and potential MI. Must stop nitrates before starting PDE-5 inhibitors."
            },
            {
              "id": 13,
              "question": "What is the mechanism of intracavernosal alprostadil?",
              "answer": "Alprostadil (prostaglandin E1) directly relaxes smooth muscle via cAMP, bypassing the NO pathway. Injected into corpus cavernosum, it works in ~85% of men, including those failing PDE-5 inhibitors."
            },
            {
              "id": 14,
              "question": "What is a vacuum erection device (VED)?",
              "answer": "A cylinder placed over the penis creates negative pressure, drawing blood into the corpus cavernosum. A constriction band maintains erection. Non-invasive, effective, but cumbersome. Good for men contraindicated for drugs."
            },
            {
              "id": 15,
              "question": "What is a penile prosthesis and when is it used?",
              "answer": "Surgically implanted device (inflatable or malleable rods) for ED refractory to other treatments. It's definitive but irreversible (destroys remaining erectile tissue). Reserved for men failing conservative therapies. High satisfaction rates."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {
              "left": "Vascular ED",
              "right": "Atherosclerosis impairing penile blood flow"
            },
            {
              "left": "Diabetic ED",
              "right": "Neuropathy and vasculopathy"
            },
            {
              "left": "Nocturnal erections",
              "right": "Occur during REM sleep"
            },
            {
              "left": "PDE-5 inhibitors",
              "right": "First-line ED pharmacotherapy"
            },
            {
              "left": "Alprostadil",
              "right": "Prostaglandin E1 injection"
            },
            {
              "left": "Nitrates",
              "right": "Absolute contraindication for PDE-5 inhibitors"
            }
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 12,
          "questions": [
            {
              "id": 1,
              "question": "Most common organic cause of ED is:",
              "options": ["Vascular disease", "Hormonal deficiency", "Neurologic damage", "Medication side effect"],
              "correct_answer": "Vascular disease"
            },
            {
              "id": 2,
              "question": "ED is an early marker for:",
              "options": ["Cardiovascular disease", "Prostate cancer", "Diabetes insipidus", "Liver failure"],
              "correct_answer": "Cardiovascular disease"
            },
            {
              "id": 3,
              "question": "First-line pharmacologic treatment for ED:",
              "options": ["PDE-5 inhibitors", "Testosterone replacement", "Alprostadil injections", "Penile prosthesis"],
              "correct_answer": "PDE-5 inhibitors"
            },
            {
              "id": 4,
              "question": "Absolute contraindication for sildenafil is:",
              "options": ["Nitrate use", "Diabetes", "Hypertension", "Age >65"],
              "correct_answer": "Nitrate use"
            },
            {
              "id": 5,
              "question": "Preserved nocturnal erections suggest:",
              "options": ["Psychogenic ED", "Severe vascular ED", "Neurologic ED", "Hormonal ED"],
              "correct_answer": "Psychogenic ED"
            },
            {
              "id": 6,
              "question": "Diabetes causes ED via:",
              "options": ["Neuropathy and vasculopathy", "Only hormonal changes", "Only psychological stress", "Only medication effects"],
              "correct_answer": "Neuropathy and vasculopathy"
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A 55-year-old man with diabetes, hypertension, and hyperlipidemia complains of gradually worsening ED over 2 years. He has morning erections occasionally. What is the most likely etiology?",
              "options": ["Vascular (organic) ED", "Psychogenic ED", "Hormonal ED", "Medication-induced ED"],
              "correct_answer": "Vascular (organic) ED",
              "explanation": "Gradual onset, multiple cardiovascular risk factors (diabetes, HTN, hyperlipidemia), and older age strongly suggest vascular ED from atherosclerosis. Occasional morning erections don't rule out organic ED. ED often precedes coronary disease by 3-5 years."
            },
            {
              "id": 2,
              "scenario": "A 30-year-old man develops sudden ED 2 months ago after job loss. He has normal morning erections and good erections with masturbation but not with partner. Physical exam and labs are normal. What is the diagnosis?",
              "options": ["Psychogenic ED", "Vascular ED", "Neurologic ED", "Hormonal ED"],
              "correct_answer": "Psychogenic ED",
              "explanation": "Sudden onset, young age, situational (occurs with partner but not alone), preserved nocturnal erections, normal exam/labs, and psychosocial stressor (job loss) all indicate psychogenic ED. Counseling and reassurance are first-line. PDE-5 inhibitors can help performance anxiety."
            },
            {
              "id": 3,
              "scenario": "A 68-year-old man with angina on nitroglycerin as needed wants treatment for ED. What is the appropriate first-line therapy?",
              "options": ["Vacuum erection device", "Sildenafil", "Testosterone", "Penile prosthesis"],
              "correct_answer": "Vacuum erection device",
              "explanation": "PDE-5 inhibitors are absolutely contraindicated with nitrates due to severe hypotension risk. Non-pharmacologic options include vacuum devices, constriction rings, or intracavernosal alprostadil (works via different pathway than nitrates). VED is non-invasive and effective."
            },
            {
              "id": 4,
              "scenario": "A 60-year-old man tried sildenafil without success. He's willing to try injections. What medication is injected into the corpus cavernosum for ED?",
              "options": ["Alprostadil (PGE1)", "Testosterone", "Sildenafil", "Epinephrine"],
              "correct_answer": "Alprostadil (PGE1)",
              "explanation": "Intracavernosal alprostadil (prostaglandin E1) causes smooth muscle relaxation via cAMP, bypassing the NO pathway. It's highly effective (~85%) even in men failing PDE-5 inhibitors. Main risk is priapism (prolonged erection >4 hours requiring emergency treatment)."
            },
            {
              "id": 5,
              "scenario": "A 50-year-old man post-radical prostatectomy for cancer has complete ED despite PDE-5 inhibitors and injections. He desires definitive solution. What is the next option?",
              "options": ["Penile prosthesis", "Increase sildenafil dose", "Testosterone therapy", "Observation"],
              "correct_answer": "Penile prosthesis",
              "explanation": "Radical prostatectomy often damages cavernous nerves, causing neurogenic ED. When medical therapies fail, penile prosthesis (inflatable or malleable) provides definitive treatment. It's irreversible but has high satisfaction rates (>90%). Appropriate after exhausting conservative options."
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Order the evaluation steps for ED:",
          "steps_correct_order": [
            "Detailed sexual and medical history",
            "Physical examination and vital signs",
            "Laboratory testing (testosterone, glucose, lipids)",
            "Trial of PDE-5 inhibitor if no contraindications",
            "Consider specialized testing or alternative therapies if first-line fails"
          ]
        }
      }
    },
    {
      "section": "Male Infertility",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "What defines male infertility?",
              "answer": "Inability to achieve pregnancy after 12 months of unprotected intercourse. Male factor contributes to ~40-50% of infertility cases. Affects ~7% of men globally."
            },
            {
              "id": 2,
              "question": "What is the gold standard test for male fertility evaluation?",
              "answer": "Semen analysis evaluating: volume, concentration (>15 million/mL), motility (>40% moving), and morphology (>4% normal forms per WHO criteria). Requires 2-3 samples due to variability."
            },
            {
              "id": 3,
              "question": "What is azoospermia?",
              "answer": "Complete absence of sperm in ejaculate. Affects ~1% of men and ~10-15% of infertile men. Divided into obstructive (blockage) and non-obstructive (testicular failure) causes."
            },
            {
              "id": 4,
              "question": "What is oligospermia?",
              "answer": "Low sperm concentration (<15 million/mL). It can be mild (10-15 million), moderate (5-10 million), or severe (<5 million). Often accompanies other sperm abnormalities."
            },
            {
              "id": 5,
              "question": "What is the most common correctable cause of male infertility?",
              "answer": "Varicocele (dilated pampiniform plexus veins). Present in ~15% of general population but ~40% of infertile men. Impairs spermatogenesis via increased scrotal temperature and oxidative stress."
            },
            {
              "id": 6,
              "question": "How does cryptorchidism cause infertility?",
              "answer": "Undescended testes exposed to body temperature (37°C) instead of cooler scrotal temperature (33-34°C) impairs spermatogenesis. Risk inversely correlates with age at orchiopexy; correction before age 2 optimizes fertility."
            },
            {
              "id": 7,
              "question": "What genetic causes contribute to male infertility?",
              "answer": "Klinefelter syndrome (47,XXY) causes testicular failure. Y-chromosome microdeletions (AZF region) impair spermatogenesis. Cystic fibrosis gene mutations cause congenital bilateral absence of vas deferens (CBAVD)."
            },
            {
              "id": 8,
              "question": "What endocrine disorders cause male infertility?",
              "answer": "Hypogonadotropic hypogonadism (low LH/FSH from pituitary/hypothalamus), hyperprolactinemia, thyroid disorders, and anabolic steroid abuse suppressing HPG axis."
            },
            {
              "id": 9,
              "question": "What is the role of FSH in spermatogenesis?",
              "answer": "FSH stimulates Sertoli cells, which support developing sperm. Elevated FSH with azoospermia suggests primary testicular failure (Sertoli cell-only syndrome or maturation arrest). Normal FSH suggests obstructive azoospermia."
            },
            {
              "id": 10,
              "question": "What medications impair male fertility?",
              "answer": "Chemotherapy (alkylating agents), testosterone/anabolic steroids (suppress spermatogenesis), 5α-reductase inhibitors, SSRIs (reduce libido/ejaculation), and chronic opioids."
            },
            {
              "id": 11,
              "question": "What infections can cause male infertility?",
              "answer": "Mumps orchitis (post-pubertal) causes testicular atrophy. Epididymitis/prostatitis from STIs (chlamydia, gonorrhea) can cause obstruction. Urethritis may contain anti-sperm antibodies."
            },
            {
              "id": 12,
              "question": "What is the treatment for obstructive azoospermia?",
              "answer": "Surgical reconstruction (vasovasostomy for vasectomy reversal, vasoepididymostomy for epididymal obstruction). Alternatively, sperm retrieval (MESA, TESE) with IVF/ICSI."
            },
            {
              "id": 13,
              "question": "What is ICSI and when is it used?",
              "answer": "Intracytoplasmic sperm injection: single sperm directly injected into egg. Used for severe male factor (severe oligospermia, azoospermia with retrieval, poor motility/morphology). Bypasses natural fertilization barriers."
            },
            {
              "id": 14,
              "question": "What lifestyle factors impair male fertility?",
              "answer": "Smoking, alcohol, marijuana, obesity, hot tub/sauna use (increased scrotal temperature), tight underwear, laptop on lap, and occupational exposures (pesticides, heavy metals)."
            },
            {
              "id": 15,
              "question": "When should genetic testing be considered in male infertility?",
              "answer": "Severe oligospermia (<5 million/mL), non-obstructive azoospermia, or congenital bilateral absence of vas deferens. Test for karyotype (Klinefelter), Y-microdeletions, and CFTR mutations."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {
              "left": "Varicocele",
              "right": "Most common correctable cause of male infertility"
            },
            {
              "left": "Azoospermia",
              "right": "Absence of sperm in ejaculate"
            },
            {
              "left": "Oligospermia",
              "right": "Low sperm concentration"
            },
            {
              "left": "Klinefelter (47,XXY)",
              "right": "Genetic cause of testicular failure"
            },
            {
              "left": "ICSI",
              "right": "Direct sperm injection into egg"
            },
            {
              "left": "FSH elevation",
              "right": "Suggests primary testicular failure"
            }
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 12,
          "questions": [
            {
              "id": 1,
              "question": "Most common correctable cause of male infertility is:",
              "options": ["Varicocele", "Cryptorchidism", "Vasectomy", "Mumps orchitis"],
              "correct_answer": "Varicocele"
            },
            {
              "id": 2,
              "question": "Gold standard test for male fertility is:",
              "options": ["Semen analysis", "Testosterone level", "Testicular biopsy", "Genetic testing"],
              "correct_answer": "Semen analysis"
            },
            {
              "id": 3,
              "question": "Elevated FSH with azoospermia suggests:",
              "options": ["Primary testicular failure", "Obstructive azoospermia", "Hyperprolactinemia", "Normal spermatogenesis"],
              "correct_answer": "Primary testicular failure"
            },
            {
              "id": 4,
              "question": "Normal sperm concentration is:",
              "options": [">15 million/mL", ">50 million/mL", ">100 million/mL", ">200 million/mL"],
              "correct_answer": ">15 million/mL"
            },
            {
              "id": 5,
              "question": "What genetic syndrome causes male infertility?",
              "options": ["Klinefelter (47,XXY)", "Turner (45,X)", "Down syndrome", "Hemochromatosis"],
              "correct_answer": "Klinefelter (47,XXY)"
            },
            {
              "id": 6,
              "question": "ICSI is used for:",
              "options": ["Severe male factor infertility", "Female factor only", "Genetic screening", "Hormone replacement"],
              "correct_answer": "Severe male factor infertility"
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A 32-year-old man and his wife have been trying to conceive for 18 months without success. Physical exam reveals a left-sided scrotal mass that feels like 'bag of worms' and increases with Valsalva. What is the likely diagnosis?",
              "options": ["Varicocele", "Testicular cancer", "Hydrocele", "Inguinal hernia"],
              "correct_answer": "Varicocele",
              "explanation": "Classic 'bag of worms' feeling on palpation that enlarges with Valsalva describes varicocele (dilated pampiniform plexus). It's the most common correctable cause of male infertility, more common on left side. Varicocelectomy can improve sperm parameters in ~70% and pregnancy rates."
            },
            {
              "id": 2,
              "scenario": "A 28-year-old man has azoospermia on semen analysis. Testicular exam is normal. FSH and LH are normal. Testicular volume is normal. What is the most likely etiology?",
              "options": ["Obstructive azoospermia", "Primary testicular failure", "Hypogonadotropic hypogonadism", "Genetic disorder"],
              "correct_answer": "Obstructive azoospermia",
              "explanation": "Normal FSH/LH, normal testicular volume, and normal exam with azoospermia suggest obstructive azoospermia (blockage preventing sperm from reaching ejaculate). Testes are producing sperm normally. Causes include prior vasectomy, infection, CBAVD. Elevated FSH would indicate testicular failure."
            },
            {
              "id": 3,
              "scenario": "A 35-year-old bodybuilder using anabolic steroids presents with infertility. Semen analysis shows severe oligospermia. What is the mechanism?",
              "options": ["Suppression of HPG axis", "Direct testicular toxicity", "Vas deferens obstruction", "Anti-sperm antibodies"],
              "correct_answer": "Suppression of HPG axis",
              "explanation": "Exogenous testosterone/anabolic steroids suppress the hypothalamic-pituitary-gonadal axis, reducing LH and FSH. Without FSH, spermatogenesis ceases. This is often reversible after stopping steroids, but recovery may take months to years. Counsel men on fertility risks of performance-enhancing drugs."
            },
            {
              "id": 4,
              "scenario": "A couple with severe oligospermia (<2 million/mL) and poor motility seeks fertility treatment. What assisted reproductive technique is most appropriate?",
              "options": ["IVF with ICSI", "Intrauterine insemination (IUI)", "Timed intercourse", "Clomiphene citrate"],
              "correct_answer": "IVF with ICSI",
              "explanation": "Severe oligospermia with poor motility requires ICSI (intracytoplasmic sperm injection) with IVF. ICSI bypasses natural fertilization barriers by directly injecting a single sperm into the egg. IUI requires adequate sperm concentration/motility. Clomiphene treats hormonal hypogonadism, not severe sperm defects."
            },
            {
              "id": 5,
              "scenario": "A 30-year-old man has non-obstructive azoospermia with elevated FSH (25 mIU/mL, normal <10). He has normal testosterone and tall stature. Karyotype shows 47,XXY. What is the diagnosis?",
              "options": ["Klinefelter syndrome", "Y-chromosome microdeletion", "Congenital vas deferens absence", "Hypogonadotropic hypogonadism"],
              "correct_answer": "Klinefelter syndrome",
              "explanation": "Klinefelter syndrome (47,XXY) is the most common genetic cause of male infertility. Features include: tall stature, small firm testes, gynecomastia, elevated FSH/LH, low-normal testosterone, and azoospermia. Some men have focal spermatogenesis; micro-TESE (microdissection testicular sperm extraction) may retrieve sperm for ICSI."
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Order the evaluation steps for male infertility:",
          "steps_correct_order": [
            "Complete history and physical examination",
            "Semen analysis (2-3 samples)",
            "Hormone testing (FSH, LH, testosterone)",
            "Genetic testing if severe oligospermia or azoospermia",
            "Consider assisted reproductive techniques based on results"
          ]
        }
      }
    },
    {
      "section": "Testicular Disorders",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "What is testicular torsion?",
              "answer": "Twisting of the spermatic cord cutting off blood supply to the testis. It's a urologic emergency requiring surgery within 6 hours to save the testis. Peak incidence: neonates and adolescents."
            },
            {
              "id": 2,
              "question": "What is the classic presentation of testicular torsion?",
              "answer": "Sudden severe testicular pain, nausea/vomiting, high-riding testis with abnormal lie (horizontal), absent cremasteric reflex. Pain NOT relieved by elevation (negative Prehn sign). May have 'bell-clapper deformity.'"
            },
            {
              "id": 3,
              "question": "What is the 'bell-clapper deformity'?",
              "answer": "Congenital abnormality where tunica vaginalis attaches high on spermatic cord instead of posterior testis, allowing testis to swing freely like a bell clapper. Predisposes to torsion. Often bilateral."
            },
            {
              "id": 4,
              "question": "What is the treatment for testicular torsion?",
              "answer": "Emergency surgical detorsion (untwisting) and bilateral orchiopexy (fixation) within 6 hours. Manual detorsion can be attempted while awaiting surgery. Salvage rate: >90% if <6 hours, <50% if >12 hours, <10% if >24 hours."
            },
            {
              "id": 5,
              "question": "What is epididymitis?",
              "answer": "Inflammation of the epididymis. In sexually active men <35: usually chlamydia/gonorrhea. In older men: often E. coli from UTI/prostatitis. Presents with gradual onset testicular pain, dysuria, fever."
            },
            {
              "id": 6,
              "question": "How do you distinguish epididymitis from testicular torsion?",
              "answer": "Epididymitis: gradual onset, positive Prehn sign (pain relieved by elevation), positive cremasteric reflex, fever/dysuria, increased flow on Doppler. Torsion: sudden onset, negative Prehn, absent cremasteric reflex, decreased Doppler flow."
            },
            {
              "id": 7,
              "question": "What is the treatment for epididymitis?",
              "answer": "Age <35 (likely STI): ceftriaxone + doxycycline. Age >35 (likely enteric bacteria): fluoroquinolone (e.g., levofloxacin) or TMP-SMX. Supportive care: NSAIDs, scrotal elevation, rest."
            },
            {
              "id": 8,
              "question": "What is orchitis?",
              "answer": "Inflammation of the testis itself. Most common cause: mumps virus (in unvaccinated men). Can occur with epididymitis (epididymo-orchitis). Presents with testicular swelling, pain, and fever."
            },
            {
              "id": 9,
              "question": "What are complications of mumps orchitis?",
              "answer": "Occurs in 20-30% of post-pubertal males with mumps. Bilateral in ~30%, unilateral in ~70%. Can cause testicular atrophy and infertility. Prevention: MMR vaccination."
            },
            {
              "id": 10,
              "question": "What is a hydrocele?",
              "answer": "Fluid collection between parietal and visceral layers of tunica vaginalis surrounding testis. Causes painless scrotal swelling that transilluminates. Can be congenital (patent processus vaginalis) or acquired (trauma, infection, tumor)."
            },
            {
              "id": 11,
              "question": "What is a varicocele?",
              "answer": "Dilated pampiniform plexus veins in spermatic cord. Feels like 'bag of worms,' more pronounced when standing/Valsalva. 90% left-sided (left testicular vein drains to renal vein). Common cause of male infertility."
            },
            {
              "id": 12,
              "question": "When should you be concerned about a new right-sided varicocele?",
              "answer": "Right varicoceles are rare and may indicate retroperitoneal mass (renal cell carcinoma, lymphoma) compressing IVC and preventing venous drainage. Requires abdominal/pelvic imaging to rule out malignancy."
            },
            {
              "id": 13,
              "question": "What is cryptorchidism?",
              "answer": "Undescended testis, failing to descend into scrotum by 3 months. Affects 3% of full-term boys, higher in premature. Increased risk: infertility, testicular cancer (40x), torsion. Treatment: orchiopexy before age 2."
            },
            {
              "id": 14,
              "question": "What is the most common testicular tumor in men 20-40?",
              "answer": "Seminoma (40% of testicular cancers) and non-seminomatous germ cell tumors (NSGCT) like embryonal, yolk sac, choriocarcinoma, teratoma. Presents as painless testicular mass. Diagnosis: ultrasound, tumor markers (AFP, β-hCG, LDH)."
            },
            {
              "id": 15,
              "question": "What tumor markers are elevated in testicular cancer?",
              "answer": "AFP (alpha-fetoprotein): elevated in non-seminomatous tumors (yolk sac, embryonal), NEVER in pure seminoma. β-hCG: elevated in choriocarcinoma and some seminomas. LDH: non-specific, reflects tumor burden. Normal markers don't exclude cancer."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {
              "left": "Testicular torsion",
              "right": "Absent cremasteric reflex"
            },
            {
              "left": "Epididymitis",
              "right": "Positive Prehn sign"
            },
            {
              "left": "Mumps orchitis",
              "right": "Viral testicular inflammation"
            },
            {
              "left": "Hydrocele",
              "right": "Transilluminates with light"
            },
            {
              "left": "Varicocele",
              "right": "Bag of worms feeling"
            },
            {
              "left": "Cryptorchidism",
              "right": "Undescended testis"
            }
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 12,
          "questions": [
            {
              "id": 1,
              "question": "Testicular torsion is characterized by:",
              "options": ["Absent cremasteric reflex", "Positive Prehn sign", "Gradual onset pain", "Always relieved by antibiotics"],
              "correct_answer": "Absent cremasteric reflex"
            },
            {
              "id": 2,
              "question": "Testicular torsion requires surgery within:",
              "options": ["6 hours", "24 hours", "72 hours", "1 week"],
              "correct_answer": "6 hours"
            },
            {
              "id": 3,
              "question": "Epididymitis in men <35 is usually caused by:",
              "options": ["STIs (chlamydia/gonorrhea)", "E. coli", "Mumps virus", "Trauma"],
              "correct_answer": "STIs (chlamydia/gonorrhea)"
            },
            {
              "id": 4,
              "question": "A hydrocele will:",
              "options": ["Transilluminate with light", "Cause severe pain", "Require emergency surgery", "Never occur in adults"],
              "correct_answer": "Transilluminate with light"
            },
            {
              "id": 5,
              "question": "Cryptorchidism increases risk of:",
              "options": ["Testicular cancer", "Prostate cancer", "Kidney stones", "BPH"],
              "correct_answer": "Testicular cancer"
            },
            {
              "id": 6,
              "question": "Most common testicular tumor in young men:",
              "options": ["Germ cell tumor", "Lymphoma", "Sarcoma", "Adenocarcinoma"],
              "correct_answer": "Germ cell tumor"
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A 16-year-old boy presents to the ER with sudden severe left testicular pain that started 2 hours ago while sleeping. He has nausea and vomiting. Exam shows high-riding left testis with abnormal horizontal lie. Cremasteric reflex is absent. What is the diagnosis and management?",
              "options": ["Testicular torsion - emergency surgery", "Epididymitis - antibiotics", "Orchitis - supportive care", "Inguinal hernia - observation"],
              "correct_answer": "Testicular torsion - emergency surgery",
              "explanation": "Classic testicular torsion: sudden severe pain, nausea/vomiting, high-riding testis with abnormal lie, absent cremasteric reflex. This is a urologic emergency. Immediate surgical exploration, detorsion, and bilateral orchiopexy required within 6 hours to salvage testis. Doppler can confirm but should NOT delay surgery."
            },
            {
              "id": 2,
              "scenario": "A 25-year-old sexually active man has 3 days of gradually worsening left scrotal pain, dysuria, and fever. Exam shows tender swollen epididymis. Elevation of scrotum relieves pain (positive Prehn sign). Urinalysis shows WBCs. What is the treatment?",
              "options": ["Ceftriaxone + doxycycline", "Emergency surgery", "Observation only", "Acyclovir"],
              "correct_answer": "Ceftriaxone + doxycycline",
              "explanation": "Epididymitis in sexually active man <35: likely chlamydia or gonorrhea. Treatment: ceftriaxone 500 mg IM × 1 + doxycycline 100 mg PO BID × 10 days. Positive Prehn sign, gradual onset, fever/dysuria, and pyuria distinguish from torsion. Treat sexual partners and counsel on STI prevention."
            },
            {
              "id": 3,
              "scenario": "A 30-year-old man notices painless swelling of his right testis over 3 months. Exam reveals firm, non-tender testicular mass that doesn't transilluminate. Scrotal ultrasound shows solid intratesticular mass. What is the next step?",
              "options": ["Check tumor markers (AFP, β-hCG, LDH) and urology referral", "Observation", "Antibiotics", "Biopsy the mass"],
              "correct_answer": "Check tumor markers (AFP, β-hCG, LDH) and urology referral",
              "explanation": "Painless testicular mass in young man = testicular cancer until proven otherwise. Ultrasound confirms solid mass. Next: check tumor markers (AFP, β-hCG, LDH) and urgent urology referral for radical inguinal orchiectomy. NEVER biopsy through scrotum (alters lymphatic drainage). Testicular cancer is highly curable even when metastatic."
            },
            {
              "id": 4,
              "scenario": "A 60-year-old man develops a new right-sided varicocele. He has flank pain and hematuria. What additional workup is needed?",
              "options": ["Abdominal/pelvic CT scan", "Scrotal ultrasound only", "Observation", "Varicocelectomy"],
              "correct_answer": "Abdominal/pelvic CT scan",
              "explanation": "New right-sided varicocele (rare) in older man with flank pain/hematuria raises concern for retroperitoneal mass (renal cell carcinoma) compressing IVC and impairing venous drainage. Requires abdominal/pelvic imaging (CT/MRI) to rule out malignancy. Left varicoceles are common and benign; right varicoceles warrant investigation."
            },
            {
              "id": 5,
              "scenario": "A 3-year-old boy has an empty right hemiscrotum. The testis is palpable in the inguinal canal. What is the recommended treatment?",
              "options": ["Orchiopexy before age 2 (already overdue)", "Observation until puberty", "Orchiectomy", "Hormonal therapy"],
              "correct_answer": "Orchiopexy before age 2 (already overdue)",
              "explanation": "Cryptorchidism (undescended testis) should be corrected with orchiopexy before age 2 to optimize fertility and reduce cancer risk (though cancer risk remains elevated even after correction). This child is overdue but should still undergo orchiopexy. Undescended testes exposed to body temperature impair spermatogenesis."
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Order the steps in evaluating acute scrotal pain:",
          "steps_correct_order": [
            "Obtain focused history (onset, duration, associated symptoms)",
            "Physical exam (testicular lie, cremasteric reflex, Prehn sign)",
            "If torsion suspected: emergency surgical consultation",
            "If epididymitis suspected: urinalysis and treat with antibiotics",
            "Color Doppler ultrasound if diagnosis uncertain"
          ]
        }
      }
    },
    {
      "section": "Prostate Cancer",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "What is prostate cancer?",
              "answer": "Malignancy of the prostate gland, typically adenocarcinoma (95%). Most common non-skin cancer and 2nd leading cause of cancer death in men. Incidence increases with age; rare before age 50."
            },
            {
              "id": 2,
              "question": "What are risk factors for prostate cancer?",
              "answer": "Age (strongest risk), African American race (2x higher incidence), family history (BRCA1/2 mutations), high-fat diet, obesity. Protective factors: lycopene (tomatoes), vitamin D, finasteride use."
            },
            {
              "id": 3,
              "question": "Where does prostate cancer typically arise?",
              "answer": "Peripheral zone (70% of cancers) in posterior prostate, making it palpable on digital rectal exam (DRE). This contrasts with BPH, which arises in the transition zone."
            },
            {
              "id": 4,
              "question": "What is PSA and its normal range?",
              "answer": "Prostate-specific antigen is a serine protease produced by prostate epithelium. Normal: <4 ng/mL. Elevated in prostate cancer, BPH, prostatitis, and after DRE/ejaculation. PSA >10 ng/mL highly suspicious for cancer."
            },
            {
              "id": 5,
              "question": "What findings on DRE suggest prostate cancer?",
              "answer": "Hard, irregular, nodular prostate with asymmetry. Normal prostate is smooth, rubbery, and symmetric. DRE detects only ~20% of cancers; many are impalpable and PSA-detected."
            },
            {
              "id": 6,
              "question": "What is the Gleason score?",
              "answer": "Histologic grading system (1-5) based on glandular architecture. Final score is sum of two most common patterns (e.g., 3+4=7). Higher score = more aggressive. Gleason ≥8 is high-grade, poor prognosis."
            },
            {
              "id": 7,
              "question": "How is prostate cancer diagnosed?",
              "answer": "Transrectal ultrasound (TRUS)-guided prostate biopsy (12-core systematic sampling). Indications: elevated PSA, abnormal DRE, or suspicious imaging. Biopsy provides Gleason score and staging information."
            },
            {
              "id": 8,
              "question": "What is TNM staging for prostate cancer?",
              "answer": "T: tumor extent (T1 impalpable, T2 confined to prostate, T3 extracapsular, T4 invades adjacent organs). N: lymph node involvement. M: metastasis (commonly bone). Staging guides treatment."
            },
            {
              "id": 9,
              "question": "Where does prostate cancer commonly metastasize?",
              "answer": "Bone (especially lumbar spine, pelvis, femur) via hematogenous spread. Causes osteoblastic (sclerotic) lesions, unlike most cancers which are osteolytic. Also lymph nodes, liver, lung. Bone pain is common presenting symptom of metastatic disease."
            },
            {
              "id": 10,
              "question": "What is active surveillance for prostate cancer?",
              "answer": "Monitoring low-risk cancer (Gleason ≤6, PSA <10, T1-T2a) with serial PSA, DRE, and biopsies without immediate treatment. Appropriate for older men or indolent disease, avoiding treatment side effects while monitoring for progression."
            },
            {
              "id": 11,
              "question": "What are treatment options for localized prostate cancer?",
              "answer": "Radical prostatectomy (surgical removal), external beam radiation therapy (EBRT), brachytherapy (radioactive seed implants), or active surveillance. Choice depends on age, risk stratification, patient preference, and comorbidities."
            },
            {
              "id": 12,
              "question": "What are side effects of prostate cancer treatment?",
              "answer": "Erectile dysfunction (40-90%), urinary incontinence (5-20%), bowel dysfunction with radiation. Nerve-sparing surgery reduces ED risk. Side effects impact quality of life and influence treatment decisions."
            },
            {
              "id": 13,
              "question": "What is androgen deprivation therapy (ADT)?",
              "answer": "Hormonal treatment for advanced prostate cancer using GnRH agonists (leuprolide, goserelin) or antagonists (degarelix) to suppress testosterone. Prostate cancer is androgen-dependent. Used for metastatic disease or high-risk localized cancer with radiation."
            },
            {
              "id": 14,
              "question": "What are side effects of androgen deprivation therapy?",
              "answer": "Hot flashes, decreased libido, erectile dysfunction, osteoporosis, muscle loss, weight gain, fatigue, metabolic syndrome, cardiovascular risk. Resembles medical castration. Monitor bone density and cardiovascular health."
            },
            {
              "id": 15,
              "question": "What is castration-resistant prostate cancer (CRPC)?",
              "answer": "Cancer progressing despite castrate testosterone levels (<50 ng/dL) from ADT. Treated with second-line hormonal agents (abiraterone, enzalutamide), chemotherapy (docetaxel), radiopharmaceuticals (radium-223), or immunotherapy (sipuleucel-T)."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {
              "left": "Peripheral zone",
              "right": "Where most prostate cancers arise"
            },
            {
              "left": "Gleason score",
              "right": "Histologic grade of aggressiveness"
            },
            {
              "left": "PSA >10 ng/mL",
              "right": "Highly suspicious for cancer"
            },
            {
              "left": "Osteoblastic lesions",
              "right": "Bone metastases in prostate cancer"
            },
            {
              "left": "ADT",
              "right": "Androgen deprivation therapy"
            },
            {
              "left": "Active surveillance",
              "right": "Monitoring low-risk cancer without treatment"
            }
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 12,
          "questions": [
            {
              "id": 1,
              "question": "Prostate cancer most commonly arises in:",
              "options": ["Peripheral zone", "Transition zone", "Central zone", "Anterior zone"],
              "correct_answer": "Peripheral zone"
            },
            {
              "id": 2,
              "question": "Normal PSA level is typically:",
              "options": ["<4 ng/mL", "<10 ng/mL", "<20 ng/mL", "<50 ng/mL"],
              "correct_answer": "<4 ng/mL"
            },
            {
              "id": 3,
              "question": "Prostate cancer commonly metastasizes to:",
              "options": ["Bone", "Brain", "Kidney", "Skin"],
              "correct_answer": "Bone"
            },
            {
              "id": 4,
              "question": "Gleason score ≥8 indicates:",
              "options": ["High-grade aggressive cancer", "Low-grade indolent cancer", "Benign disease", "No cancer"],
              "correct_answer": "High-grade aggressive cancer"
            },
            {
              "id": 5,
              "question": "ADT works by:",
              "options": ["Suppressing testosterone", "Killing cancer cells directly", "Boosting immune system", "Shrinking prostate via 5α-reductase"],
              "correct_answer": "Suppressing testosterone"
            },
            {
              "id": 6,
              "question": "Active surveillance is appropriate for:",
              "options": ["Low-risk localized cancer", "Metastatic cancer", "High-grade cancer", "Symptomatic cancer"],
              "correct_answer": "Low-risk localized cancer"
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A 65-year-old man has routine PSA screening showing PSA of 8 ng/mL. DRE reveals a hard nodule in the right lobe. What is the next step?",
              "options": ["TRUS-guided prostate biopsy", "Repeat PSA in 3 months", "Start antibiotics for prostatitis", "Begin androgen deprivation therapy"],
              "correct_answer": "TRUS-guided prostate biopsy",
              "explanation": "Elevated PSA (>4 ng/mL) with abnormal DRE (hard nodule) is highly suspicious for prostate cancer. Next step: TRUS-guided biopsy for tissue diagnosis and Gleason grading. Don't delay with observation or empiric antibiotics. Biopsy provides definitive diagnosis and guides treatment."
            },
            {
              "id": 2,
              "scenario": "A 70-year-old man is diagnosed with Gleason 6 (3+3) prostate cancer, PSA 6 ng/mL, stage T1c. He has significant comorbidities (heart failure, COPD). What is the most appropriate management?",
              "options": ["Active surveillance", "Radical prostatectomy", "External beam radiation", "Androgen deprivation therapy"],
              "correct_answer": "Active surveillance",
              "explanation": "Low-risk prostate cancer (Gleason 6, PSA <10, T1c) in elderly man with limited life expectancy due to comorbidities. Active surveillance avoids treatment morbidity (ED, incontinence) for indolent cancer unlikely to cause death. Monitor with serial PSA, DRE, and repeat biopsies."
            },
            {
              "id": 3,
              "scenario": "A 58-year-old man with newly diagnosed Gleason 7 (4+3) prostate cancer, PSA 15 ng/mL, stage T2b chooses surgery. What surgical side effect should he be counseled about?",
              "options": ["Erectile dysfunction and urinary incontinence", "Bone fractures", "Kidney failure", "Hyperthyroidism"],
              "correct_answer": "Erectile dysfunction and urinary incontinence",
              "explanation": "Radical prostatectomy commonly causes ED (40-90%) and urinary incontinence (5-20%). Nerve-sparing technique reduces ED risk but may not be possible with higher-risk cancer. Bowel dysfunction is more common with radiation. Full informed consent about quality-of-life impacts is essential."
            },
            {
              "id": 4,
              "scenario": "A 72-year-old man presents with back pain. Imaging shows multiple sclerotic bone lesions. PSA is 145 ng/mL. DRE shows hard, irregular prostate. What is the diagnosis and treatment?",
              "options": ["Metastatic prostate cancer - start ADT", "Multiple myeloma - chemotherapy", "BPH - tamsulosin", "Bone infection - antibiotics"],
              "correct_answer": "Metastatic prostate cancer - start ADT",
              "explanation": "Markedly elevated PSA, abnormal DRE, and osteoblastic bone lesions indicate metastatic prostate cancer. Prostate cancer characteristically causes sclerotic (not lytic) bone metastases. Treatment: androgen deprivation therapy (ADT) to suppress testosterone. Biopsy confirms but treatment can start presumptively given classic presentation."
            },
            {
              "id": 5,
              "scenario": "A man on ADT for metastatic prostate cancer develops rising PSA despite castrate testosterone levels. What is the next treatment option?",
              "options": ["Abiraterone or enzalutamide", "Increase ADT dose", "Stop all treatment", "Radiation only"],
              "correct_answer": "Abiraterone or enzalutamide",
              "explanation": "Rising PSA despite castrate testosterone = castration-resistant prostate cancer (CRPC). Second-line hormonal agents (abiraterone, enzalutamide) further block androgen signaling. Chemotherapy (docetaxel), radium-223 for bone mets, or immunotherapy (sipuleucel-T) are additional options. CRPC requires specialized oncologic care."
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Order the progression of prostate cancer treatment approaches:",
          "steps_correct_order": [
            "PSA screening and DRE detection",
            "TRUS-guided biopsy with Gleason grading",
            "Risk stratification and staging (TNM)",
            "Definitive local therapy (surgery or radiation) for localized disease",
            "Androgen deprivation for metastatic disease"
          ]
        }
      }
    },
    {
      "section": "Testosterone Deficiency (Hypogonadism)",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "What is hypogonadism?",
              "answer": "Deficiency of testosterone with or without impaired spermatogenesis. Divided into primary (testicular failure, elevated LH/FSH) and secondary (hypothalamic/pituitary dysfunction, low/normal LH/FSH). Affects ~2-4 million men in US."
            },
            {
              "id": 2,
              "question": "What are symptoms of testosterone deficiency?",
              "answer": "Decreased libido, erectile dysfunction, fatigue, depressed mood, decreased muscle mass/strength, increased body fat, reduced bone density, hot flashes, difficulty concentrating, decreased facial/body hair growth."
            },
            {
              "id": 3,
              "question": "What is primary hypogonadism?",
              "answer": "Testicular failure to produce testosterone and sperm. Causes: Klinefelter syndrome, chemotherapy/radiation, mumps orchitis, trauma, varicocele, aging. Labs: low testosterone with elevated LH/FSH (lack of negative feedback)."
            },
            {
              "id": 4,
              "question": "What is secondary (hypogonadotropic) hypogonadism?",
              "answer": "Hypothalamic or pituitary dysfunction causing low GnRH or LH/FSH secretion. Causes: pituitary tumor/apoplexy, Kallmann syndrome, hyperprolactinemia, chronic opioid use, obesity, anabolic steroid abuse. Labs: low testosterone with low/normal LH/FSH."
            },
            {
              "id": 5,
              "question": "What is Kallmann syndrome?",
              "answer": "Congenital hypogonadotropic hypogonadism due to GnRH deficiency. Associated with anosmia (absent smell) from failed olfactory bulb development. Presents with delayed/absent puberty, low testosterone, low LH/FSH. X-linked or autosomal inheritance."
            },
            {
              "id": 6,
              "question": "How is testosterone deficiency diagnosed?",
              "answer": "Morning total testosterone <300 ng/dL on two separate occasions (testosterone peaks in AM). Confirm with free testosterone if SHBG abnormal. Measure LH/FSH to distinguish primary vs secondary. Check prolactin if secondary."
            },
            {
              "id": 7,
              "question": "What are indications for testosterone replacement therapy (TRT)?",
              "answer": "Symptomatic hypogonadism with documented low testosterone. Not for normal aging or 'low-T' marketing hype. Goals: restore libido, energy, muscle mass, bone density. Screen for contraindications first."
            },
            {
              "id": 8,
              "question": "What are contraindications to testosterone therapy?",
              "answer": "Prostate cancer, breast cancer (in men), untreated sleep apnea, severe BPH with obstruction, polycythemia (hematocrit >54%), uncontrolled heart failure. TRT can worsen these conditions."
            },
            {
              "id": 9,
              "question": "What are formulations of testosterone replacement?",
              "answer": "Injectable (testosterone cypionate/enanthate IM q2-4 weeks), transdermal (gel, patch - daily), buccal (adheres to gum - BID), subcutaneous pellets (q3-6 months), nasal gel. Choice based on patient preference and contraindications."
            },
            {
              "id": 10,
              "question": "What are side effects of testosterone therapy?",
              "answer": "Polycythemia (increased RBC production), acne, oily skin, gynecomastia (aromatization to estradiol), testicular atrophy, decreased sperm count (suppresses LH/FSH), fluid retention, sleep apnea exacerbation, mood changes."
            },
            {
              "id": 11,
              "question": "What monitoring is required on testosterone therapy?",
              "answer": "Testosterone levels (target 400-700 ng/dL), hematocrit (stop if >54% - risk of thrombosis), PSA and DRE (prostate cancer surveillance), lipid panel, liver function tests. Reassess symptoms and adjust dose."
            },
            {
              "id": 12,
              "question": "How does testosterone therapy affect fertility?",
              "answer": "TRT suppresses LH/FSH, reducing spermatogenesis and causing infertility. NOT a contraceptive (still possible to conceive). For men desiring fertility, use hCG ± FSH or clomiphene instead of TRT to stimulate endogenous testosterone while preserving sperm production."
            },
            {
              "id": 13,
              "question": "What is the role of clomiphene in male hypogonadism?",
              "answer": "Selective estrogen receptor modulator (SERM) that blocks negative feedback, increasing GnRH, LH, and FSH. Stimulates endogenous testosterone production while maintaining fertility. Off-label use for secondary hypogonadism in men wanting to preserve spermatogenesis."
            },
            {
              "id": 14,
              "question": "What is late-onset hypogonadism (andropause)?",
              "answer": "Gradual age-related decline in testosterone (~1-2% per year after age 30). Controversial whether to treat asymptomatic low-normal testosterone. TRT may improve some symptoms but risks (cardiovascular, prostate) unclear. Not universal like menopause."
            },
            {
              "id": 15,
              "question": "What is anabolic steroid abuse?",
              "answer": "Supraphysiologic doses of synthetic testosterone analogs (e.g., nandrolone, stanozolol) for muscle building. Suppresses HPG axis causing testicular atrophy, infertility, gynecomastia. Also: aggression, cardiovascular disease, liver toxicity. Recovery of fertility may take years after cessation."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {
              "left": "Primary hypogonadism",
              "right": "Low testosterone, elevated LH/FSH"
            },
            {
              "left": "Secondary hypogonadism",
              "right": "Low testosterone, low/normal LH/FSH"
            },
            {
              "left": "Kallmann syndrome",
              "right": "Hypogonadism with anosmia"
            },
            {
              "left": "Klinefelter (47,XXY)",
              "right": "Genetic primary hypogonadism"
            },
            {
              "left": "Clomiphene",
              "right": "Preserves fertility in hypogonadism"
            },
            {
              "left": "Polycythemia",
              "right": "Common side effect of TRT"
            }
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 12,
          "questions": [
            {
              "id": 1,
              "question": "Testosterone deficiency is diagnosed with level:",
              "options": ["<300 ng/dL on two morning samples", "<100 ng/dL anytime", "<500 ng/dL once", "<1000 ng/dL"],
              "correct_answer": "<300 ng/dL on two morning samples"
            },
            {
              "id": 2,
              "question": "Primary hypogonadism shows:",
              "options": ["Low testosterone, elevated LH/FSH", "Low testosterone, low LH/FSH", "High testosterone, low LH/FSH", "Normal testosterone, elevated LH/FSH"],
              "correct_answer": "Low testosterone, elevated LH/FSH"
            },
            {
              "id": 3,
              "question": "Absolute contraindication to TRT:",
              "options": ["Prostate cancer", "Mild BPH", "Age >65", "Diabetes"],
              "correct_answer": "Prostate cancer"
            },
            {
              "id": 4,
              "question": "TRT side effect requiring monitoring:",
              "options": ["Polycythemia", "Hyperkalemia", "Hypoglycemia", "Hypothyroidism"],
              "correct_answer": "Polycythemia"
            },
            {
              "id": 5,
              "question": "To preserve fertility in hypogonadism, use:",
              "options": ["Clomiphene or hCG", "Testosterone injections", "Finasteride", "Tamsulosin"],
              "correct_answer": "Clomiphene or hCG"
            },
            {
              "id": 6,
              "question": "Kallmann syndrome features:",
              "options": ["Hypogonadism with anosmia", "Hypogonadism with tall stature", "Hypogonadism with obesity", "Hypogonadism with hair loss"],
              "correct_answer": "Hypogonadism with anosmia"
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A 45-year-old man complains of fatigue, low libido, and ED for 6 months. Morning testosterone is 250 ng/dL (normal 300-1000), repeated at 280 ng/dL. LH and FSH are elevated. What type of hypogonadism?",
              "options": ["Primary (hypergonadotropic)", "Secondary (hypogonadotropic)", "Tertiary", "Normal variant"],
              "correct_answer": "Primary (hypergonadotropic)",
              "explanation": "Low testosterone with elevated LH/FSH indicates primary hypogonadism (testicular failure). Pituitary detects low testosterone and increases LH/FSH to compensate, but testes can't respond. Causes include Klinefelter, chemotherapy, trauma, or aging. TRT is appropriate if symptomatic."
            },
            {
              "id": 2,
              "scenario": "A 28-year-old man using chronic opioids for pain has low libido and ED. Testosterone is 200 ng/dL, LH and FSH are low-normal. What is the likely cause?",
              "options": ["Opioid-induced secondary hypogonadism", "Primary testicular failure", "Kallmann syndrome", "Prostate cancer"],
              "correct_answer": "Opioid-induced secondary hypogonadism",
              "explanation": "Chronic opioid use suppresses the hypothalamic-pituitary axis, reducing GnRH, LH, and FSH secretion. Results in secondary hypogonadism (low testosterone, low LH/FSH). First-line: reduce/stop opioids if possible. If TRT needed, monitor closely. Clomiphene alternative if fertility desired."
            },
            {
              "id": 3,
              "scenario": "A 50-year-old man with symptomatic hypogonadism (testosterone 250 ng/dL) wants TRT. He has BPH with moderate LUTS and PSA of 2.5 ng/mL. What should you do before starting TRT?",
              "options": ["Optimize BPH treatment and ensure stable PSA", "Refuse TRT due to BPH", "Start TRT immediately", "Perform prostate biopsy first"],
              "correct_answer": "Optimize BPH treatment and ensure stable PSA",
              "explanation": "TRT not absolutely contraindicated in BPH but can worsen symptoms. Optimize BPH treatment (α-blocker) first. PSA 2.5 is acceptable but monitor closely (TRT can increase PSA). Severe BPH with retention is contraindication. Informed consent about risks and close PSA monitoring essential."
            },
            {
              "id": 4,
              "scenario": "A man on testosterone gel for 3 months has improved libido but hematocrit rises from 45% to 56%. What is the appropriate management?",
              "options": ["Hold TRT until hematocrit <54%, consider dose reduction or phlebotomy", "Continue TRT unchanged", "Increase TRT dose", "Switch to oral testosterone"],
              "correct_answer": "Hold TRT until hematocrit <54%, consider dose reduction or phlebotomy",
              "explanation": "Hematocrit >54% is contraindication to TRT due to thrombosis risk. Hold TRT until hematocrit normalizes. Consider therapeutic phlebotomy, reduce dose when restarting, or switch formulation. Monitor hematocrit every 3-6 months on TRT. Note: There's no oral testosterone approved in US."
            },
            {
              "id": 5,
              "scenario": "A 32-year-old man with secondary hypogonadism (testosterone 220 ng/dL) wants children. What is the best treatment to restore testosterone AND preserve fertility?",
              "options": ["hCG injections ± FSH, or clomiphene", "Testosterone injections", "Finasteride", "No treatment available"],
              "correct_answer": "hCG injections ± FSH, or clomiphene",
              "explanation": "TRT suppresses LH/FSH, impairing fertility. For men desiring fertility: hCG mimics LH to stimulate testosterone production, FSH stimulates spermatogenesis. Alternative: clomiphene (SERM) blocks estrogen negative feedback, increasing endogenous LH/FSH. Both maintain/improve fertility while treating hypogonadism symptoms."
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Order the evaluation steps for suspected hypogonadism:",
          "steps_correct_order": [
            "Assess clinical symptoms (libido, energy, muscle mass)",
            "Check morning total testosterone on two occasions",
            "Measure LH and FSH to classify primary vs secondary",
            "Check prolactin if secondary hypogonadism",
            "Screen for contraindications before starting TRT"
          ]
        }
      }
    },
    {
      "section": "Gynecomastia",
      "game_modes": {
        "flashcards": {
          "game_mode": "flashcards",
          "cards": [
            {
              "id": 1,
              "question": "What is gynecomastia?",
              "answer": "Benign proliferation of glandular breast tissue in males, creating palpable, often tender subareolar mass (>0.5 cm diameter). Distinct from pseudogynecomastia (fat deposition without glandular tissue). Results from estrogen-androgen imbalance."
            },
            {
              "id": 2,
              "question": "What is the pathophysiology of gynecomastia?",
              "answer": "Increased estrogen-to-androgen ratio stimulates breast ductal proliferation. Causes: ↑ estrogen production (obesity, tumors), ↓ testosterone (hypogonadism), ↑ aromatase activity, or androgen receptor blockade. Estrogen stimulates breast epithelium."
            },
            {
              "id": 3,
              "question": "When is gynecomastia physiologic (normal)?",
              "answer": "Three peaks: neonatal (maternal estrogen), puberty (transient estrogen/testosterone imbalance in 50-60% of boys, resolves in 1-2 years), and elderly (decreased testosterone, increased aromatization). These are benign and self-limited."
            },
            {
              "id": 4,
              "question": "What medications cause gynecomastia?",
              "answer": "Antiandrogens (spironolactone, finasteride, flutamide), estrogens, GnRH agonists, antipsychotics (risperidone), antidepressants (TCAs), digoxin, calcium channel blockers, cimetidine, marijuana, anabolic steroids (aromatize to estrogen), chemotherapy."
            },
            {
              "id": 5,
              "question": "What endocrine disorders cause gynecomastia?",
              "answer": "Hypogonadism (low testosterone), hyperthyroidism (increased SHBG and aromatization), hyperprolactinemia (suppresses testosterone), Cushing syndrome, adrenal tumors, testicular tumors (hCG-secreting), pituitary adenomas."
            },
            {
              "id": 6,
              "question": "What is Klinefelter syndrome and its relation to gynecomastia?",
              "answer": "47,XXY karyotype causing primary hypogonadism. Features: tall stature, small firm testes, gynecomastia (50-75%), infertility, elevated FSH/LH, low testosterone. Most common genetic cause of hypogonadism and gynecomastia in men."
            },
            {
              "id": 7,
              "question": "What tumors can cause gynecomastia?",
              "answer": "Testicular tumors (Leydig, Sertoli cell, germ cell tumors secreting hCG or estrogen), adrenal tumors (excess estrogen), lung cancer (paraneoplastic hCG), liver tumors. hCG stimulates testicular estrogen production. Always examine testes."
            },
            {
              "id": 8,
              "question": "How does liver disease cause gynecomastia?",
              "answer": "Cirrhosis impairs estrogen metabolism and increases SHBG, raising free estrogen levels. Also decreases testosterone synthesis and increases aromatase activity. Gynecomastia common in alcoholic cirrhosis along with spider angiomata, testicular atrophy."
            },
            {
              "id": 9,
              "question": "How do you distinguish gynecomastia from pseudogynecomastia?",
              "answer": "Physical exam: palpate subareolar region. Gynecomastia has firm, rubbery glandular tissue concentrically beneath nipple. Pseudogynecomastia is soft, fatty tissue without discrete mass. True gynecomastia may be tender, especially if recent onset."
            },
            {
              "id": 10,
              "question": "How do you distinguish gynecomastia from male breast cancer?",
              "answer": "Gynecomastia: bilateral or symmetric, concentric subareolar, mobile, tender, soft-rubbery. Breast cancer: unilateral, eccentric hard mass, fixed, painless, skin changes, nipple retraction/discharge, lymphadenopathy. Cancer is rare but always consider if unilateral/hard/fixed."
            },
            {
              "id": 11,
              "question": "What workup is needed for gynecomastia?",
              "answer": "History (medications, substances, symptoms of hypogonadism/hyperthyroidism). Exam (breast, testes, liver stigmata). Labs: testosterone, LH, FSH, estradiol, hCG, prolactin, TSH, liver/kidney function. Imaging (testicular ultrasound) if mass or tumor suspected."
            },
            {
              "id": 12,
              "question": "What is the natural history of pubertal gynecomastia?",
              "answer": "Occurs in 50-60% of pubertal boys (age 12-14). Usually bilateral and tender. Spontaneously resolves within 1-2 years in majority. Reassurance and observation appropriate. Surgery considered only if persists >2 years or causes significant psychosocial distress."
            },
            {
              "id": 13,
              "question": "What is the treatment for gynecomastia?",
              "answer": "Address underlying cause (stop offending drug, treat hypogonadism/hyperthyroidism). Medical therapy (tamoxifen, raloxifene) effective if gynecomastia <12 months (before fibrosis). Surgery (reduction mammoplasty) for long-standing, symptomatic, or cosmetically concerning cases."
            },
            {
              "id": 14,
              "question": "What is the role of tamoxifen in gynecomastia?",
              "answer": "Selective estrogen receptor modulator (SERM) that blocks estrogen at breast tissue. Effective in reducing painful gynecomastia, especially if recent onset (<12 months). Off-label use. Dose: 10-20 mg daily for 3-6 months. Less effective for longstanding fibrotic tissue."
            },
            {
              "id": 15,
              "question": "When is surgical treatment indicated for gynecomastia?",
              "answer": "Indications: failed medical therapy, duration >12 months (unlikely to regress), severe psychosocial distress, suspected malignancy. Procedure: subcutaneous mastectomy or liposuction. Provides definitive treatment with good cosmetic results. Recurrence rare."
            }
          ]
        },
        "matching": {
          "game_mode": "matching",
          "pairs": [
            {
              "left": "Spironolactone",
              "right": "Medication commonly causing gynecomastia"
            },
            {
              "left": "Klinefelter (47,XXY)",
              "right": "Genetic cause of gynecomastia"
            },
            {
              "left": "Pseudogynecomastia",
              "right": "Fat deposition without glandular tissue"
            },
            {
              "left": "Tamoxifen",
              "right": "Medical treatment for gynecomastia"
            },
            {
              "left": "Pubertal gynecomastia",
              "right": "Affects 50-60% of adolescent boys"
            },
            {
              "left": "Male breast cancer",
              "right": "Unilateral, hard, fixed mass"
            }
          ]
        },
        "timed_quiz": {
          "game_mode": "timed_quiz",
          "time_limit_seconds": 12,
          "questions": [
            {
              "id": 1,
              "question": "Gynecomastia results from:",
              "options": ["Increased estrogen-to-androgen ratio", "High testosterone only", "Low estrogen only", "High prolactin only"],
              "correct_answer": "Increased estrogen-to-androgen ratio"
            },
            {
              "id": 2,
              "question": "Most common cause of drug-induced gynecomastia:",
              "options": ["Spironolactone", "Aspirin", "Metformin", "Lisinopril"],
              "correct_answer": "Spironolactone"
            },
            {
              "id": 3,
              "question": "Pubertal gynecomastia typically resolves in:",
              "options": ["1-2 years", "1-2 months", "5-10 years", "Never resolves"],
              "correct_answer": "1-2 years"
            },
            {
              "id": 4,
              "question": "Male breast cancer is characterized by:",
              "options": ["Unilateral, hard, fixed mass", "Bilateral, soft, mobile mass", "Tender subareolar tissue", "Always bilateral"],
              "correct_answer": "Unilateral, hard, fixed mass"
            },
            {
              "id": 5,
              "question": "Medical treatment for recent gynecomastia:",
              "options": ["Tamoxifen", "Testosterone", "Antibiotics", "Finasteride"],
              "correct_answer": "Tamoxifen"
            },
            {
              "id": 6,
              "question": "Klinefelter syndrome karyotype is:",
              "options": ["47,XXY", "45,X", "46,XX", "47,XYY"],
              "correct_answer": "47,XXY"
            }
          ]
        },
        "clinical_cases": {
          "game_mode": "clinical_cases",
          "cases": [
            {
              "id": 1,
              "scenario": "A 14-year-old boy is brought by his mother concerned about bilateral breast enlargement for 6 months. It's mildly tender. Tanner stage 3 puberty. Otherwise healthy. What is the most likely diagnosis and management?",
              "options": ["Physiologic pubertal gynecomastia - reassurance", "Klinefelter syndrome - genetic testing", "Breast cancer - biopsy", "Hyperthyroidism - check TSH"],
              "correct_answer": "Physiologic pubertal gynecomastia - reassurance",
              "explanation": "Pubertal gynecomastia affects 50-60% of adolescent boys, peaking at age 13-14 (Tanner 3-4). Bilateral, tender, self-limited. Resolves spontaneously in 1-2 years in most. Reassurance and observation appropriate. Surgery only if persists >2 years or severe psychosocial impact."
            },
            {
              "id": 2,
              "scenario": "A 55-year-old man on spironolactone for heart failure develops bilateral tender gynecomastia over 3 months. What is the mechanism and management?",
              "options": ["Spironolactone blocks androgen receptors - consider alternative diuretic", "Primary hypogonadism - check testosterone", "Breast cancer - mammography", "Normal aging - observation"],
              "correct_answer": "Spironolactone blocks androgen receptors - consider alternative diuretic",
              "explanation": "Spironolactone is the most common drug causing gynecomastia. It blocks androgen receptors and inhibits testosterone synthesis while stimulating estrogen receptors. Management: switch to alternative diuretic (e.g., eplerenone with less antiandrogenic effect) if heart failure permits. If spironolactone essential, tamoxifen may help."
            },
            {
              "id": 3,
              "scenario": "A 30-year-old man has bilateral gynecomastia, small firm testes, tall stature, and infertility. Testosterone is low, FSH/LH are elevated. What diagnosis should be confirmed with karyotype?",
              "options": ["Klinefelter syndrome (47,XXY)", "Kallmann syndrome", "Prostate cancer", "Normal variant"],
              "correct_answer": "Klinefelter syndrome (47,XXY)",
              "explanation": "Classic Klinefelter: gynecomastia, small firm testes, tall stature, infertility, primary hypogonadism (low testosterone, elevated LH/FSH). Confirm with karyotype showing 47,XXY. Treatment: testosterone replacement for symptoms, fertility options (micro-TESE), surgery for gynecomastia if desired. Screen for metabolic syndrome and osteoporosis."
            },
            {
              "id": 4,
              "scenario": "A 45-year-old man develops unilateral left breast mass over 2 months. Exam shows hard, 2 cm eccentric mass with nipple retraction. No tenderness. What is the concern and next step?",
              "options": ["Male breast cancer - mammography and biopsy", "Benign gynecomastia - observation", "Lipoma - reassurance", "Infection - antibiotics"],
              "correct_answer": "Male breast cancer - mammography and biopsy",
              "explanation": "Red flags for male breast cancer: unilateral, eccentric (not subareolar), hard/fixed mass, nipple changes, painless, lymphadenopathy. Gynecomastia is typically bilateral, subareolar, mobile, tender. Male breast cancer rare (<1% of all breast cancers) but must be excluded. Mammography and core needle biopsy required."
            },
            {
              "id": 5,
              "scenario": "A 60-year-old man with cirrhosis has bilateral gynecomastia, spider angiomata, and testicular atrophy. Labs show low testosterone and elevated estradiol. What is the mechanism?",
              "options": ["Impaired estrogen metabolism in liver disease", "Primary testicular tumor", "Medication effect", "Hyperthyroidism"],
              "correct_answer": "Impaired estrogen metabolism in liver disease",
              "explanation": "Cirrhosis causes gynecomastia via: impaired estrogen degradation, increased SHBG (raising free estrogen), decreased testosterone synthesis, increased aromatase. Combined with testicular atrophy and spider angiomata, this forms classic cirrhosis stigmata. Treatment focuses on underlying liver disease; tamoxifen or surgery for symptomatic gynecomastia."
            }
          ]
        },
        "ordering": {
          "game_mode": "ordering",
          "prompt": "Order the evaluation steps for gynecomastia:",
          "steps_correct_order": [
            "Detailed medication and substance use history",
            "Physical exam (breast palpation, testicular exam)",
            "Lab testing (testosterone, LH, FSH, estradiol, hCG, prolactin, TSH)",
            "Address underlying cause or stop offending medication",
            "Consider tamoxifen if recent onset or surgery if chronic/symptomatic"
          ]
        }
      }
    },
  ]
};
