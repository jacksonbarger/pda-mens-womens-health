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
    }
  ]
};
