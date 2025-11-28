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
              "correct_answer": "α1-blockers"
            },
            {
              "id": 2,
              "question": "PDE-5 inhibitors enhance erection by:",
              "options": ["Increasing cGMP", "Increasing testosterone", "Blocking α1 receptors", "Increasing DHT"],
              "correct_answer": "Increasing cGMP"
            },
            {
              "id": 3,
              "question": "Which drug is contraindicated with nitrates?",
              "options": ["Sildenafil", "Tamsulosin", "Finasteride", "Oxybutynin"],
              "correct_answer": "Sildenafil"
            },
            {
              "id": 4,
              "question": "Anticholinergics treat urinary incontinence by:",
              "options": ["Blocking detrusor contractions", "Relaxing prostate", "Increasing ADH", "Inhibiting PDE-5"],
              "correct_answer": "Blocking detrusor contractions"
            },
            {
              "id": 5,
              "question": "Which α1-blocker is most selective for the prostate?",
              "options": ["Tamsulosin", "Prazosin", "Doxazosin", "Terazosin"],
              "correct_answer": "Tamsulosin"
            },
            {
              "id": 6,
              "question": "Finasteride works by blocking conversion of:",
              "options": ["Testosterone to DHT", "cGMP to GMP", "NO to cGMP", "Estrogen to testosterone"],
              "correct_answer": "Testosterone to DHT"
            },
            {
              "id": 7,
              "question": "Mirabegron is a:",
              "options": ["β3-agonist", "α1-antagonist", "Anticholinergic", "PDE-5 inhibitor"],
              "correct_answer": "β3-agonist"
            },
            {
              "id": 8,
              "question": "Which has the longest duration of action among PDE-5 inhibitors?",
              "options": ["Tadalafil", "Sildenafil", "Vardenafil", "Alprostadil"],
              "correct_answer": "Tadalafil"
            },
            {
              "id": 9,
              "question": "Which α1-blocker has the HIGHEST α1A selectivity?",
              "options": ["Silodosin", "Tamsulosin", "Alfuzosin", "Prazosin"],
              "correct_answer": "Silodosin"
            },
            {
              "id": 10,
              "question": "What is the chemical class of α1-antagonists?",
              "options": ["Quinazolines", "Pyrazolopyrimidinones", "Benzodiazepines", "Phenothiazines"],
              "correct_answer": "Quinazolines"
            },
            {
              "id": 11,
              "question": "Which anticholinergic is M3-selective to reduce cognitive side effects?",
              "options": ["Darifenacin", "Oxybutynin", "Tolterodine", "Solifenacin"],
              "correct_answer": "Darifenacin"
            },
            {
              "id": 12,
              "question": "Why does sildenafil cause blue-tinted vision?",
              "options": ["Inhibits PDE-6 in retina", "Blocks α1 receptors", "Increases DHT", "Activates M3 receptors"],
              "correct_answer": "Inhibits PDE-6 in retina"
            },
            {
              "id": 13,
              "question": "Which PDE-5 inhibitor has the fastest onset of action?",
              "options": ["Avanafil", "Sildenafil", "Tadalafil", "Vardenafil"],
              "correct_answer": "Avanafil"
            },
            {
              "id": 14,
              "question": "Terazosin and doxazosin were originally developed as:",
              "options": ["Antihypertensives", "Antibiotics", "Antidepressants", "Antihistamines"],
              "correct_answer": "Antihypertensives"
            },
            {
              "id": 15,
              "question": "What structural feature allows PDE-5 inhibitors to work?",
              "options": ["Mimic guanine structure", "Resemble acetylcholine", "Look like testosterone", "Similar to dopamine"],
              "correct_answer": "Mimic guanine structure"
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
              "correct_answer": "Tamsulosin"
            },
            {
              "id": 2,
              "scenario": "A 55-year-old man on nitroglycerin for angina develops ED. Which ED treatment is contraindicated?",
              "options": ["Sildenafil", "Alprostadil", "Psychotherapy", "Vacuum device"],
              "correct_answer": "Sildenafil"
            },
            {
              "id": 3,
              "scenario": "An elderly woman with urgency incontinence starts an anticholinergic. What side effect should you warn about?",
              "options": ["Dry mouth and confusion", "Hypertension", "Hypoglycemia", "Increased libido"],
              "correct_answer": "Dry mouth and confusion"
            },
            {
              "id": 4,
              "scenario": "A patient with BPH has been on tamsulosin for 3 months with partial improvement. Adding which drug could provide long-term prostate shrinkage?",
              "options": ["Finasteride", "Sildenafil", "Oxybutynin", "Mirabegron"],
              "correct_answer": "Finasteride"
            },
            {
              "id": 5,
              "scenario": "A 6-year-old child has nocturnal enuresis despite behavioral interventions. Which pharmacologic option reduces nighttime urine production?",
              "options": ["Desmopressin", "Tamsulosin", "Finasteride", "Tadalafil"],
              "correct_answer": "Desmopressin"
            },
            {
              "id": 6,
              "scenario": "A 70-year-old man with BPH and orthostatic hypotension needs an α1-blocker. Which drug minimizes risk of worsening hypotension?",
              "options": ["Tamsulosin (α1A-selective)", "Prazosin (non-selective)", "Terazosin (non-selective)", "Doxazosin (non-selective)"],
              "correct_answer": "Tamsulosin (α1A-selective)"
            },
            {
              "id": 7,
              "scenario": "An 80-year-old woman with urge incontinence and mild dementia needs anticholinergic therapy. Which drug has the best cognitive safety profile?",
              "options": ["Darifenacin (M3-selective)", "Oxybutynin (M1-M3)", "Tolterodine (M2-M3)", "None are safe"],
              "correct_answer": "Darifenacin (M3-selective)"
            },
            {
              "id": 8,
              "scenario": "A 50-year-old man needs ED treatment and wants the fastest-acting medication for spontaneity. Which PDE-5 inhibitor works in 15-30 minutes?",
              "options": ["Avanafil", "Sildenafil", "Tadalafil", "Vardenafil"],
              "correct_answer": "Avanafil"
            },
            {
              "id": 9,
              "scenario": "A patient on tamsulosin reports retrograde ejaculation. You switch to which α1-blocker with lower ejaculatory dysfunction risk?",
              "options": ["Alfuzosin (uroselective)", "Silodosin (highest α1A)", "Prazosin (non-selective)", "Doxazosin (non-selective)"],
              "correct_answer": "Alfuzosin (uroselective)"
            },
            {
              "id": 10,
              "scenario": "A 60-year-old man complains of blue-tinted vision after taking sildenafil. What is the mechanism?",
              "options": ["PDE-6 inhibition in retina", "α1 blockade", "Anticholinergic effect", "DHT reduction"],
              "correct_answer": "PDE-6 inhibition in retina"
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
    }
  ]
};
