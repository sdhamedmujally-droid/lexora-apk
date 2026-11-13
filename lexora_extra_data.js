// ============================================================================
// Lexora Complete Grammar Encyclopedia (A1-C1), 1244 Verb Conjugations (V1/V2/V3),
// 500 Leveled Stories (18-25 lines), and 500 Leveled Conversations (5m & 10m)
// ============================================================================
(function(){
  const IRREGULAR_VERBS = {
    "arise": ["arose", "arisen", "arising"],
    "awake": ["awoke", "awoken", "awaking"],
    "be": ["was / were", "been", "being"],
    "bear": ["bore", "borne", "bearing"],
    "beat": ["beat", "beaten", "beating"],
    "become": ["became", "become", "becoming"],
    "begin": ["began", "begun", "beginning"],
    "bend": ["bent", "bent", "bending"],
    "bet": ["bet", "bet", "betting"],
    "bid": ["bid / bade", "bid / bidden", "bidding"],
    "bind": ["bound", "bound", "binding"],
    "bite": ["bit", "bitten", "biting"],
    "bleed": ["bled", "bled", "bleeding"],
    "blow": ["blew", "blown", "blowing"],
    "break": ["broke", "broken", "breaking"],
    "breed": ["bred", "bred", "breeding"],
    "bring": ["brought", "brought", "bringing"],
    "broadcast": ["broadcast", "broadcast", "broadcasting"],
    "build": ["built", "built", "building"],
    "burn": ["burnt / burned", "burnt / burned", "burning"],
    "burst": ["burst", "burst", "bursting"],
    "buy": ["bought", "bought", "buying"],
    "cast": ["cast", "cast", "casting"],
    "catch": ["caught", "caught", "catching"],
    "choose": ["chose", "chosen", "choosing"],
    "cling": ["clung", "clung", "clinging"],
    "come": ["came", "come", "coming"],
    "cost": ["cost", "cost", "costing"],
    "creep": ["crept", "crept", "creeping"],
    "cut": ["cut", "cut", "cutting"],
    "deal": ["dealt", "dealt", "dealing"],
    "dig": ["dug", "dug", "digging"],
    "dive": ["dived / dove", "dived", "diving"],
    "do": ["did", "done", "doing"],
    "draw": ["drew", "drawn", "drawing"],
    "dream": ["dreamt / dreamed", "dreamt / dreamed", "dreaming"],
    "drink": ["drank", "drunk", "drinking"],
    "drive": ["drove", "driven", "driving"],
    "eat": ["ate", "eaten", "eating"],
    "fall": ["fell", "fallen", "falling"],
    "feed": ["fed", "fed", "feeding"],
    "feel": ["felt", "felt", "feeling"],
    "fight": ["fought", "fought", "fighting"],
    "find": ["found", "found", "finding"],
    "flee": ["fled", "fled", "fleeing"],
    "fly": ["flew", "flown", "flying"],
    "forbid": ["forbade", "forbidden", "forbidding"],
    "forecast": ["forecast", "forecast", "forecasting"],
    "forget": ["forgot", "forgotten", "forgetting"],
    "forgive": ["forgave", "forgiven", "forgiving"],
    "freeze": ["froze", "frozen", "freezing"],
    "get": ["got", "got / gotten", "getting"],
    "give": ["gave", "given", "giving"],
    "go": ["went", "gone", "going"],
    "grind": ["ground", "ground", "grinding"],
    "grow": ["grew", "grown", "growing"],
    "hang": ["hung / hanged", "hung / hanged", "hanging"],
    "have": ["had", "had", "having"],
    "hear": ["heard", "heard", "hearing"],
    "hide": ["hid", "hidden", "hiding"],
    "hit": ["hit", "hit", "hitting"],
    "hold": ["held", "held", "holding"],
    "hurt": ["hurt", "hurt", "hurting"],
    "keep": ["kept", "kept", "keeping"],
    "kneel": ["knelt", "knelt", "kneeling"],
    "know": ["knew", "known", "knowing"],
    "lay": ["laid", "laid", "laying"],
    "lead": ["led", "led", "leading"],
    "lean": ["leant / leaned", "leant / leaned", "leaning"],
    "leap": ["leapt / leaped", "leapt / leaped", "leaping"],
    "learn": ["learnt / learned", "learnt / learned", "learning"],
    "leave": ["left", "left", "leaving"],
    "lend": ["lent", "lent", "lending"],
    "let": ["let", "let", "letting"],
    "lie": ["lay", "lain", "lying"],
    "light": ["lit / lighted", "lit / lighted", "lighting"],
    "lose": ["lost", "lost", "losing"],
    "make": ["made", "made", "making"],
    "mean": ["meant", "meant", "meaning"],
    "meet": ["met", "met", "meeting"],
    "mistake": ["mistook", "mistaken", "mistaking"],
    "misunderstand": ["misunderstood", "misunderstood", "misunderstanding"],
    "offset": ["offset", "offset", "offsetting"],
    "overcome": ["overcame", "overcome", "overcoming"],
    "overlook": ["overlooked", "overlooked", "overlooking"],
    "oversee": ["oversaw", "overseen", "overseeing"],
    "overtake": ["overtook", "overtaken", "overtaking"],
    "overthrow": ["overthrew", "overthrown", "overthrowing"],
    "overturn": ["overturned", "overturned", "overturning"],
    "overwhelm": ["overwhelmed", "overwhelmed", "overwhelming"],
    "pay": ["paid", "paid", "paying"],
    "plead": ["pled / pleaded", "pled / pleaded", "pleading"],
    "prove": ["proved", "proven / proved", "proving"],
    "put": ["put", "put", "putting"],
    "quit": ["quit", "quit", "quitting"],
    "read": ["read", "read", "reading"],
    "rebuild": ["rebuilt", "rebuilt", "rebuilding"],
    "rid": ["rid", "rid", "ridding"],
    "ride": ["rode", "ridden", "riding"],
    "ring": ["rang", "rung", "ringing"],
    "rise": ["rose", "risen", "rising"],
    "run": ["ran", "run", "running"],
    "say": ["said", "said", "saying"],
    "see": ["saw", "seen", "seeing"],
    "seek": ["sought", "sought", "seeking"],
    "sell": ["sold", "sold", "selling"],
    "send": ["sent", "sent", "sending"],
    "set": ["set", "set", "setting"],
    "shake": ["shook", "shaken", "shaking"],
    "shed": ["shed", "shed", "shedding"],
    "shine": ["shone", "shone", "shining"],
    "shoot": ["shot", "shot", "shooting"],
    "show": ["showed", "shown / showed", "showing"],
    "shrink": ["shrank", "shrunk", "shrinking"],
    "shut": ["shut", "shut", "shutting"],
    "sing": ["sang", "sung", "singing"],
    "sink": ["sank", "sunk", "sinking"],
    "sit": ["sat", "sat", "sitting"],
    "sleep": ["slept", "slept", "sleeping"],
    "slide": ["slid", "slid", "sliding"],
    "smell": ["smelt / smelled", "smelt / smelled", "smelling"],
    "speak": ["spoke", "spoken", "speaking"],
    "speed": ["sped / speeded", "sped / speeded", "speeding"],
    "spell": ["spelt / spelled", "spelt / spelled", "spelling"],
    "spend": ["spent", "spent", "spending"],
    "spill": ["spilt / spilled", "spilt / spilled", "spilling"],
    "spin": ["spun", "spun", "spinning"],
    "split": ["split", "split", "splitting"],
    "spoil": ["spoilt / spoiled", "spoilt / spoiled", "spoiling"],
    "spread": ["spread", "spread", "spreading"],
    "spring": ["sprang", "sprung", "springing"],
    "stand": ["stood", "stood", "standing"],
    "steal": ["stole", "stolen", "stealing"],
    "stick": ["stuck", "stuck", "sticking"],
    "sting": ["stung", "stung", "stinging"],
    "strike": ["struck", "struck", "striking"],
    "strive": ["strove", "striven", "striving"],
    "swear": ["swore", "sworn", "swearing"],
    "sweep": ["swept", "swept", "sweeping"],
    "swim": ["swam", "swum", "swimming"],
    "swing": ["swung", "swung", "swinging"],
    "take": ["took", "taken", "taking"],
    "teach": ["taught", "taught", "teaching"],
    "tear": ["tore", "torn", "tearing"],
    "tell": ["told", "told", "telling"],
    "think": ["thought", "thought", "thinking"],
    "thrive": ["throve / thrived", "thriven / thrived", "thriving"],
    "throw": ["threw", "thrown", "throwing"],
    "undergo": ["underwent", "undergone", "undergoing"],
    "understand": ["understood", "understood", "understanding"],
    "undertake": ["undertook", "undertaken", "undertaking"],
    "upset": ["upset", "upset", "upsetting"],
    "wake": ["woke", "woken", "waking"],
    "wear": ["wore", "worn", "wearing"],
    "weave": ["wove", "woven", "weaving"],
    "weep": ["wept", "wept", "weeping"],
    "win": ["won", "won", "winning"],
    "wind": ["wound", "wound", "winding"],
    "withdraw": ["withdrew", "withdrawn", "withdrawing"],
    "withstand": ["withstood", "withstood", "withstanding"],
    "write": ["wrote", "written", "writing"]
  };

  const MODAL_SPECIALS = {
    "can": ["could", "been able to", "— (فعل ناقص)"],
    "cannot": ["could not", "not been able to", "— (فعل ناقص)"],
    "could": ["could", "been able to", "— (فعل ناقص)"],
    "may": ["might", "—", "— (فعل ناقص)"],
    "might": ["might", "—", "— (فعل ناقص)"],
    "must": ["had to", "had to", "— (فعل ناقص)"],
    "ought": ["ought to", "ought to have", "— (فعل ناقص)"],
    "shall": ["should", "—", "— (فعل ناقص)"],
    "should": ["should", "should have", "— (فعل ناقص)"],
    "will": ["would", "—", "— (فعل ناقص)"],
    "would": ["would", "would have", "— (فعل ناقص)"]
  };

  const DOUBLE_FINAL_VERBS = new Set([
    "admit","ban","beg","chat","chop","clap","clip","commit","compel","confer","control","crop","drop","drag","drum","dub","embed","equip","fit","flip","grab","grip","grin","hug","incur","jam","jog","kidnap","knot","label","nod","occur","omit","pad","pat","permit","pin","plan","plug","pop","prefer","program","propel","regret","refer","rip","rob","rot","rub","scan","scrap","ship","shop","shrug","signal","sin","sip","skid","skim","skip","slam","slap","slim","slip","slot","snap","sob","span","spot","stab","star","stem","step","stir","stop","strap","strip","submit","sum","swap","tag","tap","tip","transfer","transmit","trap","travel","trim","trip","tug","unwrap","whip","worship","wrap","zip"
  ]);

  function conjugateVerb(rawWord) {
    const clean = (rawWord || "").replace(/\s*\([^)]*\)/g, "").replace(/[™®©12]/g, "").trim().toLowerCase();
    if (!clean) return { v1: rawWord, v2: rawWord + "ed", v3: rawWord + "ed", ving: rawWord + "ing", type: "regular" };
    if (clean === "used to") return { v1: "use to", v2: "used to", v3: "used to", ving: "using to", type: "irregular" };
    if (clean === "have to") return { v1: "have to", v2: "had to", v3: "had to", ving: "having to", type: "irregular" };
    if ( rawWord === "lie2 (tell a lie)" || (rawWord.includes("lie") && rawWord.includes("tell a lie")) ) {
      return { v1: "lie", v2: "lied", v3: "lied", ving: "lying", type: "regular" };
    }
    if (MODAL_SPECIALS[clean]) {
      const [v2, v3, ving] = MODAL_SPECIALS[clean];
      return { v1: clean, v2, v3, ving, type: "irregular" };
    }
    if (IRREGULAR_VERBS[clean]) {
      const [v2, v3, ving] = IRREGULAR_VERBS[clean];
      return { v1: clean, v2, v3, ving, type: "irregular" };
    }

    const vowels = "aeiou";
    let v2 = clean + "ed";
    let ving = clean + "ing";

    if (clean.endsWith("ie")) {
      v2 = clean + "d";
      ving = clean.slice(0, -2) + "ying";
    } else if (clean.endsWith("e") && !clean.endsWith("ee") && !clean.endsWith("oe") && !clean.endsWith("ye")) {
      v2 = clean + "d";
      ving = clean.slice(0, -1) + "ing";
    } else if (clean.endsWith("y") && clean.length > 2 && !vowels.includes(clean[clean.length - 2])) {
      v2 = clean.slice(0, -1) + "ied";
      ving = clean + "ing";
    } else if (clean.endsWith("c")) {
      v2 = clean + "ked";
      ving = clean + "king";
    } else if (DOUBLE_FINAL_VERBS.has(clean)) {
      const last = clean[clean.length - 1];
      v2 = clean + last + "ed";
      ving = clean + last + "ing";
    }

    return { v1: clean, v2, v3: v2, ving, type: "regular" };
  }

  // ==========================================================================
  // 1. COMPLETE GRAMMAR ENCYCLOPEDIA (40 Deep Lessons across A1, A2, B1, B2, C1)
  // ==========================================================================
  const GRAMMAR_LESSONS = [
    // ---------------- LEVEL A1 (8 Lessons) ----------------
    {
      id: "gr-a1-1", level: "A1",
      title_ar: "الضمائر الشخصية وضمائر الملكية",
      title_en: "Personal & Possessive Pronouns",
      summary_ar: "كيف تشير إلى المتكلم والمخاطب والغائب وكيف تعبّر عن الملكية بدقة.",
      explanation_ar: "تنقسم الضمائر الأساسية في الإنجليزية إلى أربعة أقسام رئيسية: ضمائر الفاعل (تأتي في بداية الجملة قبل الفعل مثل I, He, She, They)، وضمائر المفعول به (تأتي بعد الفعل أو بعد حرف الجر مثل me, him, her, them)، وصفات الملكية (تأتي قبل الاسم المملوك مثل my book, our house)، وضمائر الملكية المستقلة (تأتي بدون اسم بعدها مثل mine, yours, theirs).",
      formula: "الفاعل: I / You / He / She / It / We / They + Verb\nالمفعول: Verb / Prep + me / you / him / her / it / us / them\nصفة الملكية: my / your / his / her / its / our / their + Noun\nضمير الملكية: mine / yours / his / hers / ours / theirs",
      markers: "تُستخدم في كل جملة إنجليزية لتجنب تكرار الأسماء الصريحة.",
      mistakes: [
        { wrong: "Me and my friend went to school.", right: "My friend and I went to school.", note: "في موقع الفاعل نستخدم I وليس me." },
        { wrong: "This book is my.", right: "This book is mine. / This is my book.", note: "كلمة my لا تأتي في نهاية الجملة بدون اسم بعدها، بل نستخدم mine." }
      ],
      examples: [
        { en: "She gave me her notebook because mine was at home.", ar: "أعطتني دفترها لأن دفتري كان في المنزل." },
        { en: "We invited them to our house last Friday.", ar: "دعوناهم إلى منزلنا يوم الجمعة الماضي." },
        { en: "He always helps his brother with his homework.", ar: "هو دائماً يساعد أخاه في واجبه المنزلي." },
        { en: "They told us that the decision was theirs.", ar: "أخبرونا أن القرار كان قرارهم." }
      ]
    },
    {
      id: "gr-a1-2", level: "A1",
      title_ar: "فعل الكينونة في المضارع والماضي (Verb to Be)",
      title_en: "Verb to Be (am, is, are / was, were)",
      summary_ar: "العمود الفقري للجملة الاسمية ووصف الهوية والمهنة والحالة والمكان.",
      explanation_ar: "في اللغة العربية نقول «أحمد طبيب» بدون فعل ظاهر، أما في الإنجليزية فلا توجد جملة بدون فعل، ولذلك نستخدم Verb to Be لربط المبتدأ بالخبر. في المضارع نستخدم (am مع I)، و(is مع المفرد He/She/It)، و(are مع الجمع والضمير You/We/They). وفي الماضي تتحول am و is إلى (was)، وتتحول are إلى (were).",
      formula: "المضارع: I am | He/She/It is | You/We/They are\nالماضي: I/He/She/It was | You/We/They were\nالنفي: am/is/are/was/were + not\nالسؤال: Am/Is/Are/Was/Were + Subject + ...?",
      markers: "now, today, every day (للمضارع) | yesterday, last night, in 2020 (للماضي)",
      mistakes: [
        { wrong: "She very happy today.", right: "She is very happy today.", note: "لا يجوز حذف فعل الكينونة is قبل الصفة." },
        { wrong: "Where you were yesterday?", right: "Where were you yesterday?", note: "في السؤال نقدم were على الفاعل you." }
      ],
      examples: [
        { en: "I am an engineer, and my sister is a doctor.", ar: "أنا مهندس، وأختي طبيبة." },
        { en: "They were very tired after the long journey.", ar: "كانوا متعبين جداً بعد الرحلة الطويلة." },
        { en: "Are you ready for the meeting today?", ar: "هل أنت مستعد للاجتماع اليوم؟" },
        { en: "The weather was cold yesterday, but it is warm now.", ar: "كان الطقس بارداً أمس، لكنه دافئ الآن." }
      ]
    },
    {
      id: "gr-a1-3", level: "A1",
      title_ar: "زمن المضارع البسيط (Present Simple)",
      title_en: "Present Simple Tense",
      summary_ar: "التعبير عن العادات المتكررة، الروتين اليومي، والحقائق العلمية الثابتة.",
      explanation_ar: "نستخدم المضارع البسيط للحديث عن الأشياء التي تتكرر بانتظام أو الحقائق الثابتة. مع الضمائر (I, You, We, They) يبقى الفعل في مصدره المجرد (V1)، أما مع الفاعل المفرد الغائب (He, She, It) فنضيف للفعل حرف (-s أو -es). وعند النفي أو السؤال نستخدم الفعل المساعد (do) مع الجمع و(does) مع المفرد الغائب مع إرجاع الفعل الأصلي للمصدر.",
      formula: "الإثبات: I/You/We/They + V1 | He/She/It + V1-s/es\nالنفي: Subject + don't / doesn't + V1 (المصدر)\nالسؤال: Do / Does + Subject + V1 (المصدر)?",
      markers: "always, usually, often, sometimes, rarely, never, every day/week/month",
      mistakes: [
        { wrong: "He doesn't likes coffee.", right: "He doesn't like coffee.", note: "بعد doesn't يعود الفعل للمصدر بدون حرف s." },
        { wrong: "She go to work by bus.", right: "She goes to work by bus.", note: "مع المفرد الغائب She نضيف es للفعل go." }
      ],
      examples: [
        { en: "She drinks a cup of coffee every morning.", ar: "هي تشرب فنجاناً من القهوة كل صباح." },
        { en: "The sun rises in the east and sets in the west.", ar: "تشرق الشمس من الشرق وتغرب في الغرب." },
        { en: "Do they live near the city centre?", ar: "هل يعيشون بالقرب من وسط المدينة؟" },
        { en: "He doesn't work on Saturdays.", ar: "هو لا يعمل في أيام السبت." }
      ]
    },
    {
      id: "gr-a1-4", level: "A1",
      title_ar: "زمن المضارع المستمر (Present Continuous)",
      title_en: "Present Continuous Tense",
      summary_ar: "وصف الأحداث الجارية في لحظة الكلام أو الخطط القريبة المؤكدة.",
      explanation_ar: "يُستخدم المضارع المستمر لوصف حدث يقع الآن أثناء الكلام، أو حدث مؤقت في الفترة الحالية. يتكون من فعل الكينونة في المضارع (am / is / are) متبوعاً بالفعل مضافاً إليه (-ing). انتبه إلى أن أفعال المشاعر والإدراك والملكية (مثل know, love, want, need, understand) لا تأتي عادةً في صيغة الاستمرار.",
      formula: "الإثبات: Subject + am / is / are + V-ing\nالنفي: Subject + am / is / are + not + V-ing\nالسؤال: Am / Is / Are + Subject + V-ing?",
      markers: "now, right now, at the moment, currently, Look!, Listen!, today, this week",
      mistakes: [
        { wrong: "I am knowing the answer now.", right: "I know the answer now.", note: "الفعل know من أفعال الإدراك الساكنة ولا يقبل صيغة ing." },
        { wrong: "They working in the garden.", right: "They are working in the garden.", note: "لا تنسَ الفعل المساعد are قبل V-ing." }
      ],
      examples: [
        { en: "Listen! Someone is knocking at the door.", ar: "استمع! هناك شخص يطرق الباب الآن." },
        { en: "We are studying English grammar right now.", ar: "نحن ندرس قواعد اللغة الإنجليزية في هذه اللحظة." },
        { en: "She isn't watching television at the moment.", ar: "هي لا تشاهد التلفاز في الوقت الحالي." },
        { en: "What are you doing this evening?", ar: "ماذا ستفعل هذا المساء؟" }
      ]
    },
    {
      id: "gr-a1-5", level: "A1",
      title_ar: "زمن الماضي البسيط (Past Simple)",
      title_en: "Past Simple Tense",
      summary_ar: "التعبير عن أحداث بدأت وانتهت في وقت محدد في الماضي.",
      explanation_ar: "نستخدم الماضي البسيط لسرد القصص والأحداث التي وقعت وانتهت في الماضي. يتكون من التصريف الثاني للفعل (V2): فالأفعال القياسية نضيف لها (-ed مثل worked, played)، والأفعال الشاذة تحفظ كما هي (مثل went, saw, wrote). وفي النفي والسؤال نستخدم المساعد (did) مع جميع الضمائر ونعيد الفعل إلى المصدر المجرد (V1).",
      formula: "الإثبات: Subject + V2 (أو V-ed)\nالنفي: Subject + didn't + V1 (المصدر)\nالسؤال: Did + Subject + V1 (المصدر)?",
      markers: "yesterday, last night/week/year, two days ago, in 2018, when I was young",
      mistakes: [
        { wrong: "I didn't went to the market yesterday.", right: "I didn't go to the market yesterday.", note: "بعد didn't يجب إرجاع الفعل إلى التصريف الأول (المصدر go)." },
        { wrong: "Did you saw the movie?", right: "Did you see the movie?", note: "وجود Did في السؤال يلغي الماضي من الفعل الرئيسي فيعود إلى see." }
      ],
      examples: [
        { en: "We visited the national museum last week.", ar: "زرنا المتحف الوطني الأسبوع الماضي." },
        { en: "She bought a new laptop two days ago.", ar: "اشترت حاسوباً محمولاً جديداً قبل يومين." },
        { en: "They didn't attend the conference yesterday.", ar: "هم لم يحضروا المؤتمر يوم أمس." },
        { en: "Where did you spend your last holiday?", ar: "أين قضيت إجازتك الأخيرة؟" }
      ]
    },
    {
      id: "gr-a1-6", level: "A1",
      title_ar: "أدوات التنكير والتعريف (a, an, the)",
      title_en: "Articles (a, an, the & Zero Article)",
      summary_ar: "متى نضع a أو an أو the قبل الاسم ومتى نترك الاسم بدون أداة.",
      explanation_ar: "نستخدم (a) قبل الاسم المفرد المعدود النكرة الذي يبدأ بصوت ساكن (a book, a university)، ونستخدم (an) قبل الاسم المفرد المعدود الذي يبدأ بصوت علة متحرك (an apple, an hour). أما (the) فنستخدمها مع الاسم المعرّف المعلوم للسامع أو الفريد من نوعه (the sun, the manager). ولا نضع أي أداة قبل الأسماء العامة في حالة الجمع أو غير المعدود عند الحديث عنها بشكل عام (Life is beautiful).",
      formula: "a + صوت ساكن (a car, a European country)\nan + صوت متحرك (an orange, an honest man)\nthe + اسم محدد أو فريد أو ذُكر سابقاً\nØ (بدون أداة) + الأسماء العامة واللغات والمدن والوجبات",
      markers: "تعتمد على الصوت الأول للكلمة وليس الحرف المكتوب فقط.",
      mistakes: [
        { wrong: "He waited for a hour.", right: "He waited for an hour.", note: "حرف h في hour صامت، والكلمة تبدأ بصوت علة فنستخدم an." },
        { wrong: "I like the music very much.", right: "I like music very much.", note: "عند الحديث عن الموسيقى عموماً لا نضع the." }
      ],
      examples: [
        { en: "I saw a cat in the garden. The cat was sleeping.", ar: "رأيت قطة في الحديقة. كانت القطة نائمة." },
        { en: "She is studying at a university in London.", ar: "هي تدرس في جامعة في لندن." },
        { en: "It takes an hour to reach the airport.", ar: "يستغرق الأمر ساعة للوصول إلى المطار." },
        { en: "Water is essential for life on Earth.", ar: "الماء ضروري للحياة على كوكب الأرض." }
      ]
    },
    {
      id: "gr-a1-7", level: "A1",
      title_ar: "المعدود وغير المعدود وأدوات الكمية",
      title_en: "Countable & Uncountable Nouns (some, any, much, many)",
      summary_ar: "التمييز بين الأسماء التي تُعد والتي لا تُعد وكيفية التعبير عن كميتها.",
      explanation_ar: "الأسماء المعدودة لها مفرد وجمع (book/books)، بينما الأسماء غير المعدودة تعامل معاملة المفرد دائماً ولا تُجمع (information, advice, water, money, furniture). نستخدم (some) في الجمل المثبتة والعروض المهذبة، و(any) في النفي والاستفهام، و(many / a few) مع المعدود الجمع، و(much / a little) مع غير المعدود.",
      formula: "some + جمع / غير معدود (في الإثبات والعرض)\nany + جمع / غير معدود (في النفي والسؤال)\nmany / a few + اسم جمع معدود\nmuch / a little + اسم غير معدود",
      markers: "information, advice, news, furniture, luggage, equipment, money (دائماً غير معدودة)",
      mistakes: [
        { wrong: "Can you give me some advices?", right: "Can you give me some advice? / a piece of advice?", note: "كلمة advice غير معدودة ولا تقبل حرف s." },
        { wrong: "How many money do you have?", right: "How much money do you have?", note: "كلمة money غير معدودة فنستخدم معها How much." }
      ],
      examples: [
        { en: "There aren't any chairs in this room.", ar: "لا توجد أي كراسي في هذه الغرفة." },
        { en: "How many languages can you speak?", ar: "كم عدد اللغات التي يمكنك التحدث بها؟" },
        { en: "We don't have much time before the train leaves.", ar: "ليس لدينا الكثير من الوقت قبل مغادرة القطار." },
        { en: "She gave me some useful information about the project.", ar: "أعطتني بعض المعلومات المفيدة حول المشروع." }
      ]
    },
    {
      id: "gr-a1-8", level: "A1",
      title_ar: "حروف الجر للزمان والمكان (in, on, at)",
      title_en: "Prepositions of Time & Place (in, on, at)",
      summary_ar: "القاعدة الهرمية لاستخدام in و on و at مع الأوقات والأماكن بلا خطأ.",
      explanation_ar: "تتدرج حروف الجر الثلاثة من الأوسع إلى الأدق: نستخدم (in) للفترات الزمنية الطويلة (السنوات، الشهور، الفصول، أجزاء النهار) وللأماكن المغلقة والمدن والدول. ونستخدم (on) للأيام والتواريخ المحددة وللأسطح والشوارع والطوابق. ونستخدم (at) للساعات الدقيقة واللحظات المحددة (at 7 o'clock, at night) ولنقاط الالتقاء المحددة (at the door, at the station).",
      formula: "IN: الشهور (in May)، السنوات (in 2026)، المدن والدول (in Paris)، الغرف (in the kitchen)\nON: الأيام (on Monday)، التواريخ (on 12th May)، الأسطح (on the table)\nAT: الساعات (at 8:00)، اللحظات (at night, at noon)، النقاط المحددة (at home, at work)",
      markers: "in the morning/afternoon/evening | on Friday morning | at night / at the weekend",
      mistakes: [
        { wrong: "The meeting is in Monday at 9 o'clock.", right: "The meeting is on Monday at 9 o'clock.", note: "مع أيام الأسبوع نستخدم on دائماً." },
        { wrong: "I arrived to the airport early.", right: "I arrived at the airport early.", note: "الفعل arrive يأخذ in مع المدن/الدول و at مع الأماكن المحددة ولا يأخذ to." }
      ],
      examples: [
        { en: "Our flight leaves at six o'clock on Sunday morning.", ar: "تغادر رحلتنا في الساعة السادسة صباح يوم الأحد." },
        { en: "My brother was born in October in 1998.", ar: "وُلد أخي في شهر أكتوبر عام 1998." },
        { en: "She left her keys on the desk in the office.", ar: "تركت مفاتيحها على المكتب داخل الغرفة." },
        { en: "Let's meet at the main entrance of the library.", ar: "دعنا نلتقي عند المدخل الرئيسي للمكتبة." }
      ]
    },

    // ---------------- LEVEL A2 (8 Lessons) ----------------
    {
      id: "gr-a2-1", level: "A2",
      title_ar: "الماضي المستمر والربط بـ When و While",
      title_en: "Past Continuous vs. Past Simple (when & while)",
      summary_ar: "وصف حدث كان مستمراً في الماضي عندما قاطعه حدث آخر قصير.",
      explanation_ar: "نستخدم الماضي المستمر (was / were + V-ing) لوصف الحدث الطويل الذي كان جارياً في نقطة معينة في الماضي، ونستخدم الماضي البسيط (V2) للحدث القصير المفاجئ الذي قاطعه. غالباً ما يأتي بعد (while / as) ماضٍ مستمر، ويأتي بعد (when) ماضٍ بسيط.",
      formula: "While + Subject + was/were + V-ing, Subject + V2\nSubject + was/were + V-ing + when + Subject + V2",
      markers: "while, when, as, at 8 PM yesterday, all evening yesterday",
      mistakes: [
        { wrong: "While I walked home, it started to rain.", right: "While I was walking home, it started to rain.", note: "بعد while نضع الحدث الطويل في الماضي المستمر was walking." },
        { wrong: "They was sleeping when I called.", right: "They were sleeping when I called.", note: "مع الضمير They نستخدم were وليس was." }
      ],
      examples: [
        { en: "I was reading a book when the phone suddenly rang.", ar: "كنت أقرأ كتاباً عندما رنّ الهاتف فجأة." },
        { en: "While they were playing football, it began to rain heavily.", ar: "بينما كانوا يلعبون كرة القدم، بدأ المطر يهطل بغزارة." },
        { en: "What were you doing at eight o'clock last night?", ar: "ماذا كنت تفعل في الساعة الثامنة مساء أمس؟" },
        { en: "She hurt her ankle while she was running in the park.", ar: "أصابت كاحلها بينما كانت تركض في الحديقة." }
      ]
    },
    {
      id: "gr-a2-2", level: "A2",
      title_ar: "أشكال المستقبل (Will vs. Be going to)",
      title_en: "Future Forms (will, be going to & Present Continuous)",
      summary_ar: "متى تستخدم will للقرارات اللحظية ومتى تستخدم going to للخطط المسبقة.",
      explanation_ar: "في الإنجليزية نعبر عن المستقبل بعدة صيغ حسب السياق: نستخدم (will + V1) للقرارات السريعة التي نتخذها لحظة الكلام، وللوعود، والتوقعات المبنية على الرأي الشخصي (I think). ونستخدم (am/is/are + going to + V1) للخطط والنوايا المقررة مسبقاً، وللتنبؤ المبني على دليل مرئي واضح (Look at those black clouds!). ونستخدم المضارع المستمر للترتيبات المؤكدة بموعد ومكان محددين.",
      formula: "قرار لحظي / وعد / رأي: Subject + will ('ll) / won't + V1\nخطة مسبقة / دليل حالي: Subject + am/is/are + going to + V1\nترتيب مؤكد بموعد: Subject + am/is/are + V-ing",
      markers: "tomorrow, next week, soon, in the future, I think, I promise, Look out!",
      mistakes: [
        { wrong: "I will visiting my uncle tomorrow (I planned it).", right: "I am going to visit my uncle tomorrow.", note: "للخطط المسبقة نستخدم am going to + المصدر." },
        { wrong: "The phone is ringing. I am going to answer it.", right: "The phone is ringing. I'll answer it.", note: "القرار اللحظي الفوري نستخدم معه will." }
      ],
      examples: [
        { en: "The bag looks very heavy. I will carry it for you.", ar: "الحقيبة تبدو ثقيلة جداً. سأحملها عنك (قرار لحظي)." },
        { en: "We are going to buy a new car next month; we saved the money.", ar: "سنشتري سيارة جديدة الشهر القادم؛ لقد ادخرنا المال (خطة مسبقة)." },
        { en: "Look at the dark sky! It is going to rain soon.", ar: "انظر إلى السماء الملبدة! إنها ستمطر قريباً (دليل واضح)." },
        { en: "I am meeting the manager at 10 AM tomorrow.", ar: "سأقابل المدير في العاشرة صباح الغد (موعد مرتب)." }
      ]
    },
    {
      id: "gr-a2-3", level: "A2",
      title_ar: "زمن المضارع التام (Present Perfect Simple)",
      title_en: "Present Perfect Simple (have / has + V3)",
      summary_ar: "الربط بين الماضي والحاضر، والحديث عن التجارب الحياتية والإنجازات الحديثة.",
      explanation_ar: "المضارع التام هو الجسر الذي يربط الماضي بالحاضر؛ نستخدمه عندما يقع حدث في الماضي لكن أثره أو نتيجته ما زالت حاضرة الآن (I have lost my keys = ما زلت لا أملكها)، أو عند الحديث عن تجارب الحياة دون تحديد وقت وقوعها بالضبط. إذا ذكرت وقتاً ماضياً محدداً (مثل yesterday أو in 2019) فيجب استخدام الماضي البسيط وليس المضارع التام.",
      formula: "الإثبات: I/You/We/They + have + V3 | He/She/It + has + V3\nالنفي: Subject + haven't / hasn't + V3\nالسؤال: Have / Has + Subject + V3?",
      markers: "just, already, yet, ever, never, recently, lately, so far, since, for",
      mistakes: [
        { wrong: "I have seen that film yesterday.", right: "I saw that film yesterday. / I have seen that film before.", note: "لا يجوز جمع المضارع التام مع كلمة تدل على زمن ماضٍ منتهٍ مثل yesterday." },
        { wrong: "She has wrote three emails today.", right: "She has written three emails today.", note: "بعد have/has نضع التصريف الثالث (written) وليس الثاني (wrote)." }
      ],
      examples: [
        { en: "I have just finished my report, so we can leave now.", ar: "لقد أنهيت تقريري للتو، لذا يمكننا المغادرة الآن." },
        { en: "Have you ever travelled to another continent?", ar: "هل سبق لك أن سافرت إلى قارة أخرى في حياتك؟" },
        { en: "She hasn't replied to my message yet.", ar: "هي لم ترد على رسالتي حتى الآن." },
        { en: "We have lived in this city for ten years.", ar: "نحن نعيش في هذه المدينة منذ عشر سنوات (وما زلنا)." }
      ]
    },
    {
      id: "gr-a2-4", level: "A2",
      title_ar: "الفرق بين Since و For و Already و Yet",
      title_en: "Time Expressions with Present Perfect",
      summary_ar: "إتقان الكلمات الزمنية المرافقة للمضارع التام ومواضعها الصحيحة في الجملة.",
      explanation_ar: "تأتي (for) قبل المدة الزمنية المحسوبة (for three hours, for two years)، بينما تأتي (since) قبل نقطة بداية الحدث المحددة (since Monday, since 2015, since I arrived). وتأتي (just) و(already) بين have/has والتصريف الثالث في الإثبات، بينما تأتي (yet) في نهاية الجملة المنفية والسؤال بمعنى «حتى الآن».",
      formula: "for + مدة زمنية كاملة (for 5 days, for a long time)\nsince + نقطة البداية (since April, since 2020, since + ماضٍ بسيط)\nhave/has + just / already / never + V3\nhaven't / hasn't + V3 + ... + yet",
      markers: "since, for, just, already, yet, ever, never, gone to vs been to",
      mistakes: [
        { wrong: "He has worked here since five years.", right: "He has worked here for five years.", note: "خمس سنوات مدة زمنية كاملة فنستخدم معها for وليس since." },
        { wrong: "I didn't finish my work yet.", right: "I haven't finished my work yet.", note: "كلمة yet تُستخدم مع المضارع التام المنفي." }
      ],
      examples: [
        { en: "They have known each other since they were children.", ar: "يعرفون بعضهم البعض منذ أن كانوا أطفالاً." },
        { en: "He has already booked the flight tickets.", ar: "لقد حجز تذاكر الطيران بالفعل." },
        { en: "She has been to Paris twice, so she knows the city well.", ar: "ذهبت إلى باريس مرتين وعادت، لذا فهي تعرف المدينة جيداً." },
        { en: "Has the postman arrived yet?", ar: "هل وصل ساعي البريد حتى الآن؟" }
      ]
    },
    {
      id: "gr-a2-5", level: "A2",
      title_ar: "صيغ المقارنة والتفضيل (Comparatives & Superlatives)",
      title_en: "Comparative & Superlative Adjectives",
      summary_ar: "كيف تقارن بين شيئين أو تفضّل شيئاً واحداً على مجموعة كاملة.",
      explanation_ar: "مع الصفات القصيرة (مقطع واحد مثل tall, fast) نضيف (-er than) للمقارنة و(the -est) للتفضيل. ومع الصفات الطويلة (مقطعان فأكثر مثل expensive, important) نضع (more ... than) للمقارنة و(the most ...) للتفضيل. وللتساوي نستخدم (as + الصفة المجردة + as). واحفظ الصفات الشاذة جيداً: (good -> better -> the best) و(bad -> worse -> the worst) و(far -> further -> the furthest).",
      formula: "صفة قصيرة: Adj-er + than | the + Adj-est\nصفة طويلة: more / less + Adj + than | the most / least + Adj\nالتساوي: as + Adj + as\nالشواذ: good/better/best | bad/worse/worst",
      markers: "than, the most, the least, as ... as, much + comparative, in the world, of all",
      mistakes: [
        { wrong: "This exam is more easier than the last one.", right: "This exam is much easier than the last one.", note: "لا نجمع more مع صفة منتهية بـ er." },
        { wrong: "She is the most smartest student in the class.", right: "She is the smartest student in the class.", note: "لا نجمع most مع est." }
      ],
      examples: [
        { en: "Health is much more important than wealth.", ar: "الصحة أهم بكثير من الثروة." },
        { en: "This is the most interesting book I have ever read.", ar: "هذا هو الكتاب الأكثر تشويقاً الذي قرأته في حياتي." },
        { en: "Today's weather is worse than yesterday's.", ar: "طقس اليوم أسوأ من طقس الأمس." },
        { en: "His new apartment is not as large as his old one.", ar: "شقته الجديدة ليست كبيرة بقدر شقته القديمة." }
      ]
    },
    {
      id: "gr-a2-6", level: "A2",
      title_ar: "الأفعال الناقصة للقدرة والنصيحة والإلزام",
      title_en: "Modal Verbs (can, could, should, must, have to)",
      summary_ar: "التعبير عن الاستطاعة، الطلب المهذب، النصيحة، الضرورة، والمنع.",
      explanation_ar: "الأفعال الناقصة (Modals) يتبعها دائماً الفعل في المصدر المجرد بدون to (ما عدا have to و ought to). نستخدم (can/could) للقدرة والطلب، و(should / ought to) للنصيحة، و(must / have to) للإلزام والضرورة. انتبه للفرق المهم في النفي: (mustn't) تعني «ممنوع بشدة»، بينما (don't have to) تعني «ليس ضرورياً (لك الخيار)».",
      formula: "Subject + Modal (can / could / should / must) + V1 (بدون to)\nSubject + have to / has to / had to + V1\nmustn't = ممنوع ومحظور | don't/doesn't have to = غير واجب",
      markers: "ضرورة، نصيحة، قانون، استطاعة، منع",
      mistakes: [
        { wrong: "You must to wear a seatbelt while driving.", right: "You must wear a seatbelt while driving.", note: "الفعل must لا يأتي بعده حرف الجر to أبداً." },
        { wrong: "Tomorrow is a holiday, so you mustn't wake up early.", right: "Tomorrow is a holiday, so you don't have to wake up early.", note: "عدم الحاجة للاستيقاظ مبكراً يُعبر عنه بـ don't have to وليس mustn't." }
      ],
      examples: [
        { en: "You should get enough sleep before the exam.", ar: "ينبغي أن تحصل على قسط كافٍ من النوم قبل الامتحان." },
        { en: "Passengers mustn't smoke inside the aircraft.", ar: "يُمنع الركاب منعاً باتاً من التدخين داخل الطائرة." },
        { en: "You don't have to pay now; the service is free.", ar: "لست مضطراً للدفع الآن؛ فالخدمة مجانية." },
        { en: "Could you please speak a little more slowly?", ar: "هلّا تحدثت ببطء أكثر قليلاً من فضلك؟" }
      ]
    },
    {
      id: "gr-a2-7", level: "A2",
      title_ar: "الحالة الشرطية الصفرية والأولى (Zero & First Conditionals)",
      title_en: "Zero & First Conditionals (If / Unless)",
      summary_ar: "الشرط العلمي الثابت (Zero) والشرط المحتمل تحققه في المستقبل (First).",
      explanation_ar: "في الحالة الصفرية (Zero Conditional) نستخدم المضارع البسيط في شطري الجملة للتعبير عن حقائق علمية أو عادات ثابتة تتحقق دائماً. أما في الحالة الأولى (First Conditional) فنستخدم المضارع البسيط بعد (if) ونستخدم (will + V1) في جواب الشرط للتعبير عن أمر ممكن ومحتمل الحدوث في المستقبل. وتذكر أن كلمة (unless) تعني «إذا لم» (if ... not).",
      formula: "Zero: If / When + Present Simple, Present Simple\nFirst: If + Present Simple, Subject + will / can / may + V1\nUnless + Present Simple (مثبت) = If + Present Simple (منفي)",
      markers: "if, when, unless, as soon as, provided that",
      mistakes: [
        { wrong: "If it will rain tomorrow, we will stay at home.", right: "If it rains tomorrow, we will stay at home.", note: "لا نضع will في جملة فعل الشرط بعد if، بل نستخدم المضارع البسيط rains." },
        { wrong: "Unless you don't hurry, you will miss the bus.", right: "Unless you hurry, you will miss the bus.", note: "كلمة unless تحمل معنى النفي بذاتها فلا نضع don't بعدها." }
      ],
      examples: [
        { en: "If you heat ice, it melts into water.", ar: "إذا سخّنت الثلج، فإنه يذوب ويتحول إلى ماء (حقيقة علمية)." },
        { en: "If she studies hard, she will pass the test easily.", ar: "إذا درست بجد، فستجتاز الاختبار بسهولة." },
        { en: "We won't catch the train unless we leave right now.", ar: "لن نلحق بالقطار ما لم نغادر الآن فوراً." },
        { en: "I will call you as soon as I arrive at the hotel.", ar: "سأتصل بك بمجرد أن أصل إلى الفندق." }
      ]
    },
    {
      id: "gr-a2-8", level: "A2",
      title_ar: "الأفعال المتبوعة بـ (to + V1) أو (V-ing)",
      title_en: "Gerunds (V-ing) vs. Infinitives (to + V1)",
      summary_ar: "متى تضع الفعل في صيغة ing ومتى تسبقه بـ to بعد فعل آخر أو حرف جر.",
      explanation_ar: "عندما يأتي فعلان متتاليان في الجملة، فإن الفعل الأول يحدد شكل الفعل الثاني: فبعض الأفعال يتبعها دائماً (to + المصدر) مثل (want, decide, hope, plan, agree, promise, refuse, manage)، وبعض الأفعال يتبعها دائماً (V-ing) مثل (enjoy, avoid, finish, mind, suggest, keep, admit, practice). والقاعدة الذهبية: بعد جميع حروف الجر (in, on, at, of, for, about, without, before, after) يأتي الفعل مضافاً إليه (-ing) دائماً.",
      formula: "Verb + to + V1: want, decide, hope, plan, promise, offer, refuse\nVerb + V-ing: enjoy, avoid, finish, suggest, mind, keep, imagine\nPreposition (in/of/for/without/by) + V-ing",
      markers: "look forward to + V-ing (انتبه: to هنا حرف جر يتبعه V-ing!)",
      mistakes: [
        { wrong: "I enjoy to read English stories.", right: "I enjoy reading English stories.", note: "الفعل enjoy يتبعه دائماً V-ing." },
        { wrong: "He left the room without say goodbye.", right: "He left the room without saying goodbye.", note: "بعد حرف الجر without يجب إضافة ing للفعل." }
      ],
      examples: [
        { en: "She decided to accept the job offer in Dubai.", ar: "قررت قبول عرض العمل في دبي." },
        { en: "You should avoid driving fast in rainy weather.", ar: "ينبغي أن تتجنب القيادة بسرعة في الطقس الماطر." },
        { en: "Thank you for helping me with the translation.", ar: "شكراً لك على مساعدتي في الترجمة." },
        { en: "We are looking forward to meeting you next week.", ar: "نحن نتطلع بشوق إلى لقائك الأسبوع القادم." }
      ]
    },

    // ---------------- LEVEL B1 (8 Lessons) ----------------
    {
      id: "gr-b1-1", level: "B1",
      title_ar: "زمن المضارع التام المستمر (Present Perfect Continuous)",
      title_en: "Present Perfect Continuous (have/has been + V-ing)",
      summary_ar: "التركيز على استمرارية الحدث وطول مدته منذ الماضي وحتى اللحظة الحاضرة.",
      explanation_ar: "نستخدم المضارع التام المستمر للتأكيد على طول المدة التي استغرقها نشاط بدأ في الماضي وما زال مستمراً حتى الآن، أو انتهى للتو وترك أثراً واضحاً في الحاضر (مثل التعب أو البلل من المطر). الفرق الدقيق: المضارع التام البسيط يركز على «اكتمال الإنجاز والعدد» (I have read 3 books)، بينما التام المستمر يركز على «استمرار النشاط والمدة» (I have been reading for two hours).",
      formula: "الإثبات: Subject + have / has + been + V-ing\nالنفي: Subject + haven't / hasn't + been + V-ing\nالسؤال: How long + have / has + Subject + been + V-ing?",
      markers: "for, since, all day, all morning, lately, recently, How long...?",
      mistakes: [
        { wrong: "I have been knowing him for ten years.", right: "I have known him for ten years.", note: "الأفعال الساكنة مثل know و believe و own لا تأتي في المضارع التام المستمر." },
        { wrong: "She has been writing five reports today.", right: "She has written five reports today.", note: "عند تحديد العدد المنجز (five reports) نستخدم المضارع التام البسيط." }
      ],
      examples: [
        { en: "It has been raining heavily since early morning.", ar: "إنها تمطر بغزارة منذ الصباح الباكر (وما زالت)." },
        { en: "His hands are dirty because he has been repairing his car.", ar: "يداه متسختان لأنه كان يصلح سيارته." },
        { en: "How long have you been learning English?", ar: "منذ متى وأنت تتعلم اللغة الإنجليزية؟" },
        { en: "They have been waiting for the bus for over thirty minutes.", ar: "هم ينتظرون الحافلة منذ أكثر من ثلاثين دقيقة." }
      ]
    },
    {
      id: "gr-b1-2", level: "B1",
      title_ar: "زمن الماضي التام (Past Perfect Simple)",
      title_en: "Past Perfect Simple (had + V3)",
      summary_ar: "ترتيب حدثين في الماضي لتوضيح أيهما وقع أولاً قبل الآخر.",
      explanation_ar: "عندما نتحدث عن حدثين وقعا في الماضي، نضع الحدث الأقدم (الذي تم واكتمل أولاً) في زمن الماضي التام (had + V3)، ونضع الحدث الذي تلاه في زمن الماضي البسيط (V2). يُشبه الماضي التام «ماضي الماضي»، ويُستخدم بكثرة مع الروابط الزمنية مثل (after, before, by the time, as soon as, when).",
      formula: "الحدث الأول (الأقدم): Subject + had + V3\nالحدث الثاني (الأحدث): Subject + V2\nAfter + Past Perfect, Past Simple | Before / By the time + Past Simple, Past Perfect",
      markers: "after, before, by the time, already, just, never ... before, until",
      mistakes: [
        { wrong: "When we arrived at the station, the train left already.", right: "When we arrived at the station, the train had already left.", note: "مغادرة القطار سبقت وصولنا فنضعها في الماضي التام had left." },
        { wrong: "After he finished his work, he had gone home.", right: "After he had finished his work, he went home.", note: "الحدث الأول بعد after هو الذي يأخذ had + V3." }
      ],
      examples: [
        { en: "By the time the firefighters arrived, the fire had destroyed the roof.", ar: "بحلول وقت وصول رجال الإطفاء، كان الحريق قد دمّر السقف." },
        { en: "She realized that she had forgotten her passport at home.", ar: "أدركت أنها كانت قد نسيت جواز سفرها في المنزل." },
        { en: "After they had signed the contract, they celebrated together.", ar: "بعد أن وقّعوا العقد، احتفلوا معاً." },
        { en: "I wasn't hungry because I had already eaten lunch.", ar: "لم أكن جائعاً لأنني كنت قد تناولت الغداء بالفعل." }
      ]
    },
    {
      id: "gr-b1-3", level: "B1",
      title_ar: "المبني للمجهول في الأزمنة الأساسية (Passive Voice)",
      title_en: "The Passive Voice across Tenses",
      summary_ar: "التركيز على المفعول به والحدث نفسه عندما يكون الفاعل مجهولاً أو غير مهم.",
      explanation_ar: "نحول الجملة إلى المبني للمجهول بتقديم المفعول به ليصبح نائب فاعل في بداية الجملة، ثم نضع فعل الكينونة (be) في نفس زمن الجملة الأصلية، ونتبعه دائماً بالتصريف الثالث للفعل (V3). وإذا أردنا ذكر الفاعل الأصلي نضعه في النهاية مسبوقاً بحرف الجر (by).",
      formula: "المضارع البسيط: am / is / are + V3\nالماضي البسيط: was / were + V3\nالمضارع المستمر: am / is / are + being + V3\nالمضارع التام: have / has + been + V3\nالأفعال الناقصة والمستقبل: will / can / must + be + V3",
      markers: "by + agent, يُستخدم بكثرة في الأخبار والتقارير العلمية والرسمية.",
      mistakes: [
        { wrong: "The bridge built in 1995.", right: "The bridge was built in 1995.", note: "لا يصح المبني للمجهول بدون فعل الكينونة المناسب للزمن (was)." },
        { wrong: "The room is cleaning right now.", right: "The room is being cleaned right now.", note: "الغرفة لا تنظف نفسها؛ في المضارع المستمر نستخدم is being + V3." }
      ],
      examples: [
        { en: "Thousands of new cars are manufactured in this factory every year.", ar: "تُصنّع آلاف السيارات الجديدة في هذا المصنع كل عام." },
        { en: "Penicillin was discovered by Alexander Fleming in 1928.", ar: "اكتُشف البنسلين على يد ألكسندر فليمنغ عام 1928." },
        { en: "The main road is being repaired at the moment.", ar: "يتم إصلاح الطريق الرئيسي في الوقت الحالي." },
        { en: "All the invitations have already been sent to the guests.", ar: "تم إرسال جميع الدعوات إلى الضيوف بالفعل." }
      ]
    },
    {
      id: "gr-b1-4", level: "B1",
      title_ar: "الكلام المنقول غير المباشر (Reported Speech)",
      title_en: "Reported Speech (Statements, Questions & Commands)",
      summary_ar: "نقل كلام الآخرين وأسئلتهم وطلباتهم مع إرجاع الزمن خطوة للماضي.",
      explanation_ar: "عندما ننقل كلام شخص بفعل قول في الماضي (He said / She told me)، نُرجع زمن الجملة خطوة واحدة إلى الوراء (Backshift): فالمضارع البسيط يصبح ماضياً بسيطاً، والمضارع المستمر يصبح ماضياً مستمراً، والماضي البسيط والمضارع التام يصبحان ماضياً تاماً (had + V3)، و(will -> would)، و(can -> could). وفي نقل الأسئلة نعيد ترتيب الجملة إلى صيغة خبرية (فاعل ثم فعل) دون علامة استفهام.",
      formula: "الخبر: He said (that) + Subject + فعل ماضٍ أقدم\nالسؤال بـ Wh: He asked me + Wh-word + Subject + Verb (بدون تقديم فعل مساعد)\nالسؤال بـ هل: He asked if / whether + Subject + Verb\nالأمر والطلب: He told / asked me + (not) to + V1",
      markers: "now -> then | today -> that day | tomorrow -> the next day | yesterday -> the day before | here -> there",
      mistakes: [
        { wrong: "She said me that she was busy.", right: "She told me that she was busy. / She said that she was busy.", note: "الفعل tell يأخذ مفعولاً به مباشرة (told me)، أما say فلا يأخذ مفعولاً بدون to." },
        { wrong: "He asked me where did I live.", right: "He asked me where I lived.", note: "في السؤال المنقول نحذف did ونضع الفاعل قبل الفعل في الماضي." }
      ],
      examples: [
        { en: "She told me that she had already finished the project.", ar: "أخبرتني أنها كانت قد أنهت المشروع بالفعل." },
        { en: "He asked me whether I could help him with the presentation.", ar: "سألني عمّا إذا كان بإمكاني مساعدته في العرض التقديمي." },
        { en: "The doctor advised the patient to stop smoking immediately.", ar: "نصح الطبيب المريض بالتوقف عن التدخين فوراً." },
        { en: "They said they would call us the following day.", ar: "قالوا إنهم سيتصلون بنا في اليوم التالي." }
      ]
    },
    {
      id: "gr-b1-5", level: "B1",
      title_ar: "الحالة الشرطية الثانية (Second Conditional)",
      title_en: "Second Conditional (Unreal Present & Future)",
      summary_ar: "التعبير عن المواقف التخيلية أو غير الواقعية في الحاضر وإعطاء النصائح.",
      explanation_ar: "نستخدم الحالة الشرطية الثانية عندما نتخيل وضعاً معاكساً للواقع الحالي (مثلاً: لو كان معي مال كافٍ الآن لاشتريت طائرة)، أو لتقديم النصيحة بصيغة (If I were you, I would...). رغم أننا نستخدم الفعل في صيغة الماضي البسيط بعد (if)، إلا أن المعنى يدل على الحاضر أو المستقبل التخيلي وليس الماضي! ومع فعل الكينونة يُفضّل استخدام (were) مع جميع الضمائر بما فيها I و He و She.",
      formula: "If + Subject + Past Simple (V2 / were), Subject + would / could / might + V1",
      markers: "If I were you..., imagine, suppose",
      mistakes: [
        { wrong: "If I would have more free time, I would learn Spanish.", right: "If I had more free time, I would learn Spanish.", note: "بعد if في الحالة الثانية نضع الماضي البسيط (had) وليس would have." },
        { wrong: "If I was you, I will accept the offer.", right: "If I were you, I would accept the offer.", note: "في الحالة الثانية جواب الشرط يأخذ would وليس will." }
      ],
      examples: [
        { en: "If I had his phone number, I would call him right now.", ar: "لو كان لدي رقم هاتفه الآن، لاتصلت به فوراً (لكني لا أملكه)." },
        { en: "If I were you, I would apologize for the mistake.", ar: "لو كنت مكانك، لاعتذرت عن الخطأ." },
        { en: "What would you do if you won a million dollars?", ar: "ماذا كنت ستفعل لو ربحت مليون دولار؟" },
        { en: "We could travel more often if flights were cheaper.", ar: "كان بإمكاننا السفر أكثر لو كانت الرحلات الجوية أرخص." }
      ]
    },
    {
      id: "gr-b1-6", level: "B1",
      title_ar: "ضمائر وجمل الوصل (Relative Clauses)",
      title_en: "Defining & Non-Defining Relative Clauses",
      summary_ar: "ربط الجمل باستخدام who, which, that, whose, where, when بدقة.",
      explanation_ar: "تُستخدم ضمائر الوصل لربط جملتين وتعريف الاسم السابق لها: نستخدم (who) للعاقل، و(which) لغير العاقل، و(that) للعاقل وغير العاقل في الجمل المحددة (Defining)، و(whose) للملكية، و(where) للمكان، و(when) للزمان. إذا كانت المعلومة إضافية غير أساسية (Non-defining) نضعها بين فاصلتين ( , ... , ) ولا يجوز حينها استخدام that.",
      formula: "who / that -> للعاقل (The man who called)\nwhich / that -> لغير العاقل (The book which I read)\nwhose + Noun -> للملكية (The writer whose book won)\nwhere -> للمكان (The house where I grew up)",
      markers: "يمكن حذف who/which/that إذا جاء بعدها فاعل جديد (أي إذا كانت في محل مفعول به).",
      mistakes: [
        { wrong: "The woman which lives next door is a surgeon.", right: "The woman who (or that) lives next door is a surgeon.", note: "مع العاقل نستخدم who أو that وليس which." },
        { wrong: "My brother, that lives in Cairo, is an architect.", right: "My brother, who lives in Cairo, is an architect.", note: "بين الفاصلتين (الجملة الاعتراضية) يُمنع استخدام that." }
      ],
      examples: [
        { en: "The scientist who discovered the cure received a prestigious award.", ar: "العالِم الذي اكتشف العلاج حصل على جائزة مرموقة." },
        { en: "That is the restaurant where we had dinner last week.", ar: "ذلك هو المطعم الذي تناولنا فيه العشاء الأسبوع الماضي." },
        { en: "The student whose essay won first prize is from Yemen.", ar: "الطالب الذي فازت مقالته بالجائزة الأولى من اليمن." },
        { en: "My laptop, which I bought five years ago, still works fast.", ar: "حاسوبي المحمول، الذي اشتريته قبل خمس سنوات، ما زال يعمل بسرعة." }
      ]
    },
    {
      id: "gr-b1-7", level: "B1",
      title_ar: "التعود في الماضي والحاضر (used to / be used to)",
      title_en: "Habits & Familiarity (used to, be used to, get used to)",
      summary_ar: "التفريق الحاسم بين عادة انقطعت في الماضي وبين التعود والألفة في الحاضر.",
      explanation_ar: "هناك ثلاث صيغ متشابهة شكلاً ومختلفة تماماً في المعنى والتركيب: الأولى (used to + V1) وتعني «اعتاد على فعل شيء في الماضي وتوقف عنه الآن». الثانية (be used to + V-ing / Noun) وتعني «معتاد ومألوف لديه هذا الأمر الآن». الثالثة (get used to + V-ing / Noun) وتعني «يتأقلم تدريجياً ويتعود على شيء جديد».",
      formula: "عادة في الماضي انتهت: Subject + used to + V1 (المصدر)\nنفي وسؤال الماضي: didn't use to + V1 | Did you use to + V1?\nمعتاد حالياً: am / is / are + used to + V-ing / Noun\nيتأقلم مع: get / got + used to + V-ing / Noun",
      markers: "used to + V1 vs be/get used to + V-ing",
      mistakes: [
        { wrong: "I am used to wake up early every day.", right: "I am used to waking up early every day. / I used to wake up early.", note: "وجود am قبل used to يجعل to حرف جر فيتبعه V-ing (waking)." },
        { wrong: "He didn't used to drink coffee.", right: "He didn't use to drink coffee.", note: "بعد didn't نحذف حرف d من used فتصبح use to." }
      ],
      examples: [
        { en: "I used to play tennis every weekend when I was at school.", ar: "كنت معتاداً على لعب التنس كل عطلة أسبوع عندما كنت في المدرسة." },
        { en: "She is a nurse, so she is used to working night shifts.", ar: "هي ممرضة، لذلك فهي معتادة على العمل في المناوبات الليلية." },
        { en: "It took me a few months to get used to the cold weather.", ar: "استغرق الأمر مني بضعة أشهر للتأقلم مع الطقس البارد." },
        { en: "Did there use to be a cinema on this street?", ar: "هل كان هناك سينما في هذا الشارع في الماضي؟" }
      ]
    },
    {
      id: "gr-b1-8", level: "B1",
      title_ar: "الأفعال المركبة (Phrasal Verbs)",
      title_en: "Phrasal Verbs (Separable & Inseparable)",
      summary_ar: "كيف يتغير معنى الفعل جذرياً عند إضافة حرف جر أو ظرف إليه وكيف نضع الضمير معه.",
      explanation_ar: "الأفعال المركبة تتكون من فعل + حرف جر أو ظرف (مثل give up, look after, turn down, find out). تنقسم إلى نوعين: أفعال قابلة للفصل (Separable مثل turn off the light / turn the light off)، ولكن إذا كان المفعول به ضميراً (it / them) فيجب وضعه في الوسط حتماً (turn it off وليس turn off it). وأفعال غير قابلة للفصل (Inseparable مثل look after the child / look after him).",
      formula: "قابل للفصل مع اسم: turn off the TV = turn the TV off\nقابل للفصل مع ضمير: turn it off (إجباري في الوسط)\nغير قابل للفصل: look after / run into / look for + المفعول بعدهما دائماً",
      markers: "give up (يقلع عن)، look after (يعتني بـ)، put off (يؤجل)، turn down (يرفض)، find out (يكتشف)",
      mistakes: [
        { wrong: "The radio is too loud; please turn off it.", right: "The radio is too loud; please turn it off.", note: "الضمير it يجب أن يوضع بين الفعل وحرف الجر في الأفعال القابلة للفصل." },
        { wrong: "We had to put the meeting off because of the storm.", right: "We had to put off the meeting / put the meeting off.", note: "مع الاسم الصريح كلا الموضعين صحيح." }
      ],
      examples: [
        { en: "He decided to give up smoking for the sake of his health.", ar: "قرر الإقلاع عن التدخين من أجل صحته." },
        { en: "Don't worry about the children; my sister will look after them.", ar: "لا تقلق بشأن الأطفال؛ أختي ستعتني بهم." },
        { en: "They had to put off the outdoor concert due to heavy rain.", ar: "اضطروا إلى تأجيل الحفل الخارجي بسبب الأمطار الغزيرة." },
        { en: "Here is the application form; please fill it in carefully.", ar: "ها هي استمارة التقديم؛ يرجى تعبئتها بعناية." }
      ]
    },

    // ---------------- LEVEL B2 (8 Lessons) ----------------
    {
      id: "gr-b2-1", level: "B2",
      title_ar: "الحالة الشرطية الثالثة والمختلطة (Third & Mixed Conditionals)",
      title_en: "Third & Mixed Conditionals",
      summary_ar: "التعبير عن الندم أو تخيل عكس ما حدث في الماضي وأثره على الماضي أو الحاضر.",
      explanation_ar: "تُستخدم الحالة الشرطية الثالثة للحديث عن مواقف ماضية مستحيلة التغيير (تخيل عكس ما وقع فعلاً في الماضي)، وتتكون من ماضٍ تام (had + V3) بعد if، و(would/could/might + have + V3) في جواب الشرط. أما الحالة المختلطة (Mixed Conditional) فتربط شرطاً وقع في الماضي بنتيجة مستمرة في الحاضر: (If + had + V3, Subject + would + V1 now).",
      formula: "Third Conditional (ماضٍ -> ماضٍ): If + Subject + had + V3, Subject + would/could/might + have + V3\nMixed Conditional (ماضٍ -> حاضر): If + Subject + had + V3, Subject + would + V1 (now)",
      markers: "تُستخدم لتحليل الأخطاء السابقة والندم والنتائج المترتبة عليها.",
      mistakes: [
        { wrong: "If I would have known about the meeting, I would have attended.", right: "If I had known about the meeting, I would have attended.", note: "لا نضع would have في شطر if أبداً، بل نضع had + V3." },
        { wrong: "If he had taken the medicine yesterday, he would have felt better now.", right: "If he had taken the medicine yesterday, he would feel better now.", note: "بما أن النتيجة في الحاضر (now)، نستخدم would + V1 (حالة مختلطة)." }
      ],
      examples: [
        { en: "If we had left ten minutes earlier, we wouldn't have missed the flight.", ar: "لو كنا قد غادرنا قبل عشر دقائق، لما فاتتنا الرحلة الجوية." },
        { en: "She could have won the competition if she had trained harder.", ar: "كان بإمكانها الفوز بالمسابقة لو أنها تدربت بجدية أكبر." },
        { en: "If I had accepted that job in London, I would be living there now.", ar: "لو كنت قد قبلت تلك الوظيفة في لندن (في الماضي)، لكنت أعيش هناك الآن (حاضر)." },
        { en: "He wouldn't have made that mistake if he had read the instructions.", ar: "ما كان ليرتكب ذلك الخطأ لو أنه قرأ التعليمات." }
      ]
    },
    {
      id: "gr-b2-2", level: "B2",
      title_ar: "المستقبل التام والمستقبل المستمر",
      title_en: "Future Perfect & Future Continuous",
      summary_ar: "الفرق بين حدث سيكون مستمراً في وقت محدد مستقبلاً وحدث سيكون قد اكتمل بحلول ذلك الوقت.",
      explanation_ar: "نستخدم المستقبل المستمر (will be + V-ing) لوصف حدث سيكون جارياً ومستمراً في ساعة أو وقت محدد في المستقبل (This time tomorrow, I will be flying). أما المستقبل التام (will have + V3) فنستخدمه لوصف حدث سيكون قد انتهى واكتمل تماماً قبل حلول وقت معين في المستقبل (By 2030, they will have completed the project).",
      formula: "Future Continuous: Subject + will be + V-ing (مستمر في نقطة مستقبلية)\nFuture Perfect: Subject + will have + V3 (مكتمل قبل نقطة مستقبلية)",
      markers: "this time tomorrow, at 5 PM next Friday (للمستمر) | by tomorrow, by next year, by the time + مضارع بسيط (للتام)",
      mistakes: [
        { wrong: "By next June, I will graduate from university.", right: "By next June, I will have graduated from university.", note: "وجود حرف الجر الزمني By بمعنى «بحلول» يستدعي المستقبل التام will have + V3." },
        { wrong: "Don't call me at 9 PM because I will sleep.", right: "Don't call me at 9 PM because I will be sleeping.", note: "الحدث سيكون مستمراً في الساعة التاسعة فنستخدم will be sleeping." }
      ],
      examples: [
        { en: "By the end of this month, I will have saved enough money.", ar: "بحلول نهاية هذا الشهر، سأكون قد ادخرت مالاً كافياً." },
        { en: "This time next week, we will be relaxing on the beach.", ar: "في مثل هذا الوقت من الأسبوع القادم، سنكون مسترخين على الشاطئ." },
        { en: "By the time you arrive, she will have prepared dinner.", ar: "بحلول وقت وصولك، ستكون هي قد أعدت العشاء." },
        { en: "Will you be using your laptop this afternoon?", ar: "هل ستكون مستخدماً لحاسوبك المحمول بعد ظهر اليوم؟" }
      ]
    },
    {
      id: "gr-b2-3", level: "B2",
      title_ar: "زمن الماضي التام المستمر (Past Perfect Continuous)",
      title_en: "Past Perfect Continuous (had been + V-ing)",
      summary_ar: "التركيز على استمرارية حدث لفترة في الماضي قبل أن يقطعه أو يتبعه حدث ماضٍ آخر.",
      explanation_ar: "يشبه هذا الزمن المضارع التام المستمر ولكن في الماضي؛ فنستخدم (had been + V-ing) للتعبير عن نشاط ظل مستمراً لفترة زمنية قبل وقوع حدث آخر في الماضي، أو لبيان السبب المباشر لحالة في الماضي (كانت الأرض مبتلة لأنها كانت تمطر طوال الليل).",
      formula: "Subject + had been + V-ing + (for / since) ... before + Past Simple (V2)",
      markers: "for hours before, since morning when, how long had you been...",
      mistakes: [
        { wrong: "He was tired because he has been working all day.", right: "He was tired because he had been working all day.", note: "بما أن الجملة في الماضي (was tired)، نستخدم الماضي التام المستمر had been working." },
        { wrong: "They had been knowing the truth for years.", right: "They had known the truth for years.", note: "الأفعال الساكنة مثل know لا تأتي في صيغة الاستمرار." }
      ],
      examples: [
        { en: "We had been waiting for two hours before the plane finally took off.", ar: "كنا ننتظر لمدة ساعتين قبل أن تقلع الطائرة أخيراً." },
        { en: "The streets were covered in snow because it had been snowing all night.", ar: "كانت الشوارع مغطاة بالثلوج لأنها كانت تثلج طوال الليل." },
        { en: "She had been working at that company for ten years when she got promoted.", ar: "كانت تعمل في تلك الشركة لمدة عشر سنوات عندما حصلت على الترقية." },
        { en: "How long had you been driving before the engine broke down?", ar: "كم من الوقت كنت تقود قبل أن يتعطل المحرك؟" }
      ]
    },
    {
      id: "gr-b2-4", level: "B2",
      title_ar: "أفعال الاستنتاج في الحاضر والماضي (Modals of Deduction)",
      title_en: "Modals of Deduction (must, might, could, can't)",
      summary_ar: "كيف تعبّر عن يقينك أو ظنك بوقوع أمر في الحاضر أو في الماضي.",
      explanation_ar: "عندما نستنتج أمراً بناءً على أدلة: في الحاضر نستخدم (must + V1) لليقين الإيجابي «لا بد أنه»، و(might/may/could + V1) للاحتمال «ربما»، و(can't + V1) للاستحالة «مستحيل أن يكون». أما للاستنتاج حول حدث وقع في الماضي فنستخدم (must have + V3) لليقين الماضي «لا بد أنه فعل»، و(might/could have + V3) للاحتمال الماضي، و(can't have + V3) لاستحالة وقوعه في الماضي.",
      formula: "استنتاج في الحاضر: must / might / could / can't + V1 (أو be + V-ing)\nاستنتاج في الماضي: must / might / could / can't + have + V3",
      markers: "I'm sure = must | Perhaps / Maybe = might/could | It's impossible = can't",
      mistakes: [
        { wrong: "He mustn't be at home; the lights are off.", right: "He can't be at home; the lights are off.", note: "عكس must في الاستنتاج هو can't وليس mustn't." },
        { wrong: "She must forgot her phone at the office.", right: "She must have forgotten her phone at the office.", note: "للاستنتاج في الماضي نستخدم must have + V3." }
      ],
      examples: [
        { en: "He has been working for twelve hours; he must be exhausted.", ar: "لقد عمل لمدة اثنتي عشرة ساعة؛ لا بد أنه منهك تماماً." },
        { en: "That can't be true! I saw him with my own eyes.", ar: "مستحيل أن يكون ذلك صحيحاً! لقد رأيته بأم عيني." },
        { en: "You must have left your wallet in the restaurant last night.", ar: "لا بد أنك تركت محفظتك في المطعم الليلة الماضية." },
        { en: "She isn't answering her phone; she might have gone to sleep early.", ar: "هي لا ترد على هاتفها؛ ربما تكون قد ذهبت للنوم مبكراً." }
      ]
    },
    {
      id: "gr-b2-5", level: "B2",
      title_ar: "التمني والندم (Wishes, Regrets & Preferences)",
      title_en: "Wish, If only, Would rather & It's time",
      summary_ar: "التعبير عن التمني في الحاضر، والندم على الماضي، والشكوى من سلوك متكرر.",
      explanation_ar: "بعد (I wish / If only) نرجع بالزمن درجة للوراء تماماً مثل جمل الشرط: فإذا كنا نتمنى تغير واقع حالي نستخدم الماضي البسيط (I wish I knew the answer now). وإذا كنا نندم على أمر وقع في الماضي نستخدم الماضي التام (I wish I had studied harder). وإذا كنا نشتكي من سلوك مزعج لشخص آخر نستخدم (would + V1). وبعد (It's time / It's high time) و(I'd rather + فاعل آخر) نستخدم الماضي البسيط للمعنى الحاضر.",
      formula: "تمني في الحاضر: I wish / If only + Subject + Past Simple (V2 / were)\nندم على الماضي: I wish / If only + Subject + Past Perfect (had + V3)\nتمني تغير سلوك: I wish / If only + Subject + would + V1\nالوقت قد حان: It's (high) time + Subject + Past Simple (V2)",
      markers: "I wish, If only, I'd rather you + V2, It's high time",
      mistakes: [
        { wrong: "I wish I have a bigger room now.", right: "I wish I had a bigger room now.", note: "التمني في الحاضر يأخذ الماضي البسيط had." },
        { wrong: "I wish I didn't say that yesterday.", right: "I wish I hadn't said that yesterday.", note: "الندم على الماضي يأخذ الماضي التام hadn't said." }
      ],
      examples: [
        { en: "I wish I spoke fluent French so I could work in Geneva.", ar: "أتمنى لو كنت أتحدث الفرنسية بطلاقة لكي أتمكن من العمل في جنيف." },
        { en: "If only we had checked the weather forecast before setting off!", ar: "يا ليتنا تحققنا من النشرة الجوية قبل الانطلاق (ندم على الماضي)!" },
        { en: "I wish you wouldn't interrupt me while I am speaking.", ar: "أتمنى لو تتوقف عن مقاطعتي أثناء حديثي." },
        { en: "It's high time we found a permanent solution to this problem.", ar: "لقد حان الوقت بالفعل لنجد حلاً دائماً لهذه المشكلة." }
      ]
    },
    {
      id: "gr-b2-6", level: "B2",
      title_ar: "صيغة السببية (Causative: Have / Get something done)",
      title_en: "Causative Structures (have/get something done)",
      summary_ar: "كيف تعبّر عن قيام شخص آخر بأداء خدمة لك بدلاً من أن تفعلها بنفسك.",
      explanation_ar: "الفرق كبير بين (I repaired my car = أصلحت سيارتي بنفسي) وبين (I had my car repaired = جعلت الميكانيكي يصلح سيارتي). تُبنى صيغة السببية بوضع الفعل (have أو get) في الزمن المطلوب، ثم المفعول به غير العاقل (الشيء)، ثم التصريف الثالث للفعل (V3). أما إذا ذكرنا الشخص الذي كلفناه بالعمل فنستخدم: (have + الشخص + V1 بدون to) أو (get + الشخص + to + V1).",
      formula: "الشيء المفعول به: Subject + have / get (بأي زمن) + Object (الشيء) + V3\nتكليف شخص مباشر: Subject + have + Person + V1 (المصدر)\nإقناع شخص: Subject + get + Person + to + V1",
      markers: "have/get my hair cut, have the house painted, have the car serviced",
      mistakes: [
        { wrong: "I had repaired my watch at the shop yesterday.", right: "I had my watch repaired at the shop yesterday.", note: "في السببية نضع الشيء (my watch) بين had والتصريف الثالث (repaired)." },
        { wrong: "She had the technician to fix the printer.", right: "She had the technician fix the printer. / She got the technician to fix it.", note: "مع have + الشخص نضع المصدر بدون to." }
      ],
      examples: [
        { en: "We are having our house painted this week.", ar: "نحن نقوم بطلاء منزلنا (عبر عمال مختصين) هذا الأسبوع." },
        { en: "I need to get my eyes tested before renewing my driving licence.", ar: "أحتاج إلى فحص عينيّ قبل تجديد رخصة القيادة." },
        { en: "He had his jacket cleaned at the dry cleaner's.", ar: "قام بتنظيف سترته في المغسلة الجافة." },
        { en: "The manager had his assistant prepare the financial report.", ar: "كلّف المدير مساعده بإعداد التقرير المالي." }
      ]
    },
    {
      id: "gr-b2-7", level: "B2",
      title_ar: "المبني للمجهول الخبري الرسمي (Reporting Passive)",
      title_en: "Impersonal & Personal Reporting Passive",
      summary_ar: "صياغة التقارير والأخبار الرسمية مثل «يُقال إنّ / يُعتقد أنه» بطريقتين احترافيتين.",
      explanation_ar: "مع أفعال الاعتقاد والقول والإفادة (believe, think, say, report, expect, know, allege)، هناك طريقتان لصياغة المبني للمجهول في الكتابة الرسمية: الطريقة الأولى غير الشخصية (It is said/believed that + جملة كاملة). والطريقة الثانية الشخصية بالبدء بالفاعل المقصود: (Subject + is said/believed + to + V1 للمضارع/المستقبل) أو (+ to have + V3 إذا كان الحدث قد وقع في الماضي).",
      formula: "1) It + is/was + said/believed/reported + that + Subject + Verb\n2) Subject + is/are + said/believed + to + V1 (للحاضر والمستقبل)\n3) Subject + is/are + said/believed + to have + V3 (للحدث الماضي)",
      markers: "say, think, believe, know, report, expect, consider, claim, allege",
      mistakes: [
        { wrong: "He is believed that he is the richest man in the town.", right: "It is believed that he is... / He is believed to be the richest man...", note: "لا نخلط بين الصيغتين؛ إذا بدأنا بـ He نستخدم to be وليس that." },
        { wrong: "The suspect is thought to escape last night.", right: "The suspect is thought to have escaped last night.", note: "بما أن الهروب وقع الليلة الماضية نستخدم المصدر التام to have escaped." }
      ],
      examples: [
        { en: "It is expected that the company will announce record profits.", ar: "من المتوقع أن تعلن الشركة عن أرباح قياسية." },
        { en: "The company is expected to announce record profits soon.", ar: "يُتوقع من الشركة أن تعلن عن أرباح قياسية قريباً." },
        { en: "The ancient manuscript is believed to have been written in the 12th century.", ar: "يُعتقد أن المخطوطة القديمة قد كُتبت في القرن الثاني عشر." },
        { en: "She is known to be one of the finest surgeons in the country.", ar: "من المعروف عنها أنها واحدة من أمهر الجراحين في البلاد." }
      ]
    },
    {
      id: "gr-b2-8", level: "B2",
      title_ar: "روابط التناقض والسبب والنتيجة المتقدمة",
      title_en: "Advanced Discourse Markers & Connectors",
      summary_ar: "الربط الاحترافي بين الجمل باستخدام despite, although, whereas, due to, consequently.",
      explanation_ar: "الفرق الجوهري في روابط التناقض والسبب يعتمد على ما يأتي بعدها: فالروابط (although, even though, though, whereas, while, because, since, as) يتبعها دائماً جملة كاملة (Subject + Verb). أما الروابط (despite, in spite of, because of, due to, owing to) فيتبعها دائماً اسم (Noun) أو فعل مضاف إليه (-ing) أو التركيب (the fact that + جملة كاملة).",
      formula: "Although / Even though / Whereas + Subject + Verb\nDespite / In spite of + Noun / V-ing / the fact that + S + V\nBecause / Since + Subject + Verb\nDue to / Owing to / Because of + Noun / V-ing",
      markers: "however, nevertheless, nonetheless, therefore, consequently, furthermore, moreover",
      mistakes: [
        { wrong: "Despite he was exhausted, he finished the marathon.", right: "Despite being exhausted, he finished... / Although he was exhausted...", note: "كلمة Despite لا يتبعها فاعل وفعل مباشرة بل اسم أو V-ing." },
        { wrong: "Despite of the heavy traffic, we arrived on time.", right: "Despite the heavy traffic... / In spite of the heavy traffic...", note: "كلمة Despite لا تأخذ حرف الجر of أبداً." }
      ],
      examples: [
        { en: "Despite the heavy rain, the football match continued as scheduled.", ar: "على الرغم من الأمطار الغزيرة، استمرت مباراة كرة القدم في موعدها." },
        { en: "In spite of having little experience, she got the job.", ar: "بالرغم من قلة خبرتها، حصلت على الوظيفة." },
        { en: "All flights were cancelled due to severe weather conditions.", ar: "أُلغيت جميع الرحلات الجوية بسبب الظروف الجوية القاسية." },
        { en: "He worked diligently all year; consequently, he achieved top grades.", ar: "عمل باجتهاد طوال العام؛ ونتيجةً لذلك، حقق أعلى الدرجات." }
      ]
    },

    // ---------------- LEVEL C1 (8 Lessons) ----------------
    {
      id: "gr-c1-1", level: "C1",
      title_ar: "القلب النحوي للبلاغة والتوكيد (Inversion)",
      title_en: "Negative & Restrictive Inversion",
      summary_ar: "تقديم الفعل المساعد على الفاعل عند البدء بظروف النفي والتقييد لإعطاء قوة بلاغية عالية.",
      explanation_ar: "في اللغة الإنجليزية المتقدمة والأدبية، عندما نبدأ الجملة بظرف يدل على النفي أو الندرة أو الحصر (مثل Never, Seldom, Rarely, Little, Under no circumstances, Not only, Hardly... when, No sooner... than)، فإننا نقلب ترتيب الجملة ليصبح كترتيب السؤال (الفعل المساعد قبل الفاعل) لإضفاء قوة بلاغية وتوكيدية. ومع كلمة (Only after / Only when / Not until) يقع القلب النحوي في الشطر الثاني (الرئيسي) من الجملة.",
      formula: "Negative Adverbial + Auxiliary Verb + Subject + Main Verb\nNever / Seldom / Rarely + have/had/did + Subject + V\nHardly / Scarcely + had + Subject + V3 + when + Past Simple\nNo sooner + had + Subject + V3 + than + Past Simple\nNot only + Aux + S + V, but also...",
      markers: "Never, Seldom, Rarely, Little, Hardly...when, No sooner...than, Under no circumstances, Only then",
      mistakes: [
        { wrong: "Never I have seen such a breathtaking view.", right: "Never have I seen such a breathtaking view.", note: "عند البدء بـ Never يجب تقديم الفعل المساعد have على الفاعل I." },
        { wrong: "No sooner had we sat down when the alarm rang.", right: "No sooner had we sat down than the alarm rang.", note: "التعبير No sooner يرتبط بـ than وليس when." }
      ],
      examples: [
        { en: "Seldom have we witnessed such remarkable dedication and courage.", ar: "نادراً ما شهدنا مثل هذا التفاني والشجاعة المذهلة." },
        { en: "Not only did she complete the research, but she also published two papers.", ar: "لم تكتفِ بإتمام البحث فحسب، بل نشرت أيضاً ورقتين علميتين." },
        { en: "No sooner had the plane landed than the passengers stood up.", ar: "ما إن هبطت الطائرة حتى وقف الركاب." },
        { en: "Under no circumstances should you share your password with anyone.", ar: "تحت أي ظرف من الظروف لا ينبغي لك مشاركة كلمة مرورك مع أي شخص." }
      ]
    },
    {
      id: "gr-c1-2", level: "C1",
      title_ar: "الجمل المنشطرة للتخصيص والتركيز (Cleft Sentences)",
      title_en: "Cleft Sentences (It-clefts & Wh-clefts)",
      summary_ar: "تقسيم الجملة إلى شطرين لتسليط الضوء على عنصر محدد (الفاعل، المفعول، أو الزمان).",
      explanation_ar: "نستخدم الجمل المنشطرة عندما نريد توجيه انتباه القارئ أو السامع إلى معلومة بعينها وتأكيدها دون غيرها. النوع الأول (It-cleft): نبدأ بـ (It is / It was + العنصر المؤكد + who/that + بقية الجملة). والنوع الثاني (Wh-cleft / Pseudo-cleft): نبدأ بـ (What + Subject + Verb + is/was + المعلومة المؤكدة) أو (All I want is...).",
      formula: "It-Cleft: It is / was + [Focused Element] + that / who + rest of clause\nWh-Cleft: What + Subject + Verb + is / was + (to) + Focus\nThe reason why / The thing that / All (that) + S + V + is/was...",
      markers: "It was ... that, What really matters is..., All we need is...",
      mistakes: [
        { wrong: "What we need are more time and resources.", right: "What we need is more time and resources.", note: "جملة What في البداية تعامل معاملة المفرد غالباً مع الأسماء غير المعدودة." },
        { wrong: "It was yesterday when I met the ambassador.", right: "It was yesterday that I met the ambassador.", note: "في قالب It was ... نفضل استخدام that حتى مع الظروف الزمنية." }
      ],
      examples: [
        { en: "It was his perseverance that ultimately led to the breakthrough.", ar: "كانت مثابرته تحديداً هي التي قادت في النهاية إلى هذا الاختراق العلمي." },
        { en: "What we really need right now is a clear strategic vision.", ar: "ما نحتاجه حقاً في هذه اللحظة هو رؤية استراتيجية واضحة." },
        { en: "What impressed the committee most was her fluency and confidence.", ar: "أكثر ما أثار إعجاب اللجنة هو طلاقتها وثقتها بنفسها." },
        { en: "All I did was suggest a minor adjustment to the schedule.", ar: "كل ما فعلته هو اقتراح تعديل طفيف على الجدول الزمني." }
      ]
    },
    {
      id: "gr-c1-3", level: "C1",
      title_ar: "الجمل الشرطية البلاغية وحذف If (Inverted Conditionals)",
      title_en: "Formal & Inverted Conditionals (Should / Were / Had)",
      summary_ar: "حذف أداة الشرط if وتقديم الفعل المساعد لإعطاء أسلوب رسمي ودبلوماسي رفيع.",
      explanation_ar: "في المراسلات الرسمية والأكاديمية، يمكننا الاستغناء عن أداة الشرط (if) في الحالات الشرطية الثلاث عبر تقديم الفعل المساعد في بداية الجملة: في الحالة الأولى نبدأ بـ (Should + Subject + V1)، وفي الحالة الثانية نبدأ بـ (Were + Subject + to + V1 أو Were + Subject + Noun/Adj)، وفي الحالة الثالثة نبدأ بـ (Had + Subject + V3). وللنفي نضع (not) بعد الفاعل مباشرة (Had I not known).",
      formula: "بديل الحالة الأولى: Should + Subject + V1, ... (= If you should...)\nبديل الحالة الثانية: Were + Subject + (to + V1 / Adj), ... (= If it were...)\nبديل الحالة الثالثة: Had + Subject + (not) + V3, ... (= If I had...)\nWere it not for + Noun = لولا (في الحاضر) | Had it not been for + Noun = لولا (في الماضي)",
      markers: "Should you require..., Were we to accept..., Had they known..., But for...",
      mistakes: [
        { wrong: "Hadn't he helped us, we would have failed.", right: "Had he not helped us, we would have failed.", note: "في القلب الشرطي الرسمي لا ندمج n't مع Had، بل نضع not بعد الفاعل." },
        { wrong: "Should you will need any assistance, please contact us.", right: "Should you need any assistance, please contact us.", note: "بعد Should + الفاعل نضع الفعل في المصدر المجرد مباشرة." }
      ],
      examples: [
        { en: "Should you require any further information, please do not hesitate to contact us.", ar: "إذا احتجتم إلى أي معلومات إضافية، يرجى عدم التردد في التواصل معنا." },
        { en: "Had we anticipated the economic crisis, we would have diversified our investments.", ar: "لو كنا قد توقعنا الأزمة الاقتصادية، لنوعنا استثماراتنا." },
        { en: "Were the government to reduce taxes, small businesses would flourish.", ar: "لو أن الحكومة تخفض الضرائب، لازدهرت الشركات الصغيرة." },
        { en: "Had it not been for her timely intervention, the negotiations would have collapsed.", ar: "لولا تدخلها في الوقت المناسب، لانهارت المفاوضات." }
      ]
    },
    {
      id: "gr-c1-4", level: "C1",
      title_ar: "شبه الجمل الوصفية الاختصارية (Participle Clauses)",
      title_en: "Present, Past & Perfect Participle Clauses",
      summary_ar: "اختصار الجمل الطويلة باستخدام V-ing أو V3 أو Having + V3 لكتابة رشيقة ومتماسكة.",
      explanation_ar: "تُستخدم تراكيب اسم الفاعل (V-ing) واسم المفعول (V3) والمصدر التام (Having + V3) لاختصار جمل السبب أو الزمان أو الوصف بشرط أن يكون فاعل شطري الجملة واحداً: نستخدم (V-ing) عندما يكون الفاعل هو من قام بالفعل (Feeling tired, he went to bed)، ونستخدم (V3) عندما يكون الفاعل مفعولاً به في المعنى (Built in 1890, the bridge is still strong)، ونستخدم (Having + V3) عندما يكتمل الحدث الأول تماماً قبل بدء الحدث الثاني.",
      formula: "الفاعل نشط (متزامن أو سبب): V-ing ..., Subject + Verb\nالفاعل مبني للمجهول: V3 (Past Participle) ..., Subject + Verb\nالحدث الأول اكتمل أولاً: Having + V3 (أو Having been + V3) ..., Subject + Verb",
      markers: "تمنح الكتابة الأكاديمية والأدبية إيجازاً وأناقة عالية.",
      mistakes: [
        { wrong: "Walking down the street, the trees looked beautiful.", right: "Walking down the street, I noticed how beautiful the trees looked.", note: "خطأ الفاعل المعلّق (Dangling Participle): الأشجار لا تمشي في الشارع؛ يجب أن يكون فاعل الشطر الثاني هو من يمشي (I)." },
        { wrong: "Finished his degree, he applied for a fellowship.", right: "Having finished his degree, he applied for a fellowship.", note: "هو الذي أنهى دراسته (معلوم وليس مجهولاً) فنستخدم Having finished." }
      ],
      examples: [
        { en: "Having completed all the clinical trials, the researchers published their findings.", ar: "بعد أن أتموا جميع التجارب السريرية، نشر الباحثون نتائجهم." },
        { en: "Located in the heart of the capital, the museum attracts millions of visitors.", ar: "لكونه يقع في قلب العاصمة، يجذب المتحف ملايين الزوار." },
        { en: "Not wanting to wake the baby, she closed the door quietly.", ar: "لعدم رغبتها في إيقاظ الطفل، أغلقت الباب بهدوء." },
        { en: "Having been warned about the storm, the sailors stayed in the harbour.", ar: "بعد أن تم تحذيرهم بشأن العاصفة، بقي البحارة في الميناء." }
      ]
    },
    {
      id: "gr-c1-5", level: "C1",
      title_ar: "صيغة الالتزام والشرط الرسمية (The Subjunctive Mood)",
      title_en: "The Mandative & Formulaic Subjunctive",
      summary_ar: "استخدام الفعل في المصدر المجرد مع جميع الضمائر بعد أفعال وصفات الأهمية والإلزام.",
      explanation_ar: "في الإنجليزية الرسمية والأكاديمية، بعد أفعال مثل (insist, demand, recommend, suggest, propose, require) أو صفات مثل (essential, vital, imperative, crucial, important) متبوعة بـ (that)، يأتي الفعل في جملة that في **المصدر المجرد دائماً (V1 أو be)** حتى لو كان الفاعل مفرداً غائباً (he/she/it) وحتى لو كان فعل الجملة الأولى في الماضي! وفي النفي نضع (not) قبل المصدر مباشرة دون فعل مساعد.",
      formula: "It is essential / vital / imperative / crucial + that + Subject + V1 (أو be)\nSubject + insist / demand / recommend / suggest + that + Subject + (not) + V1",
      markers: "insist, demand, recommend, suggest, propose, vital, essential, imperative, mandatory",
      mistakes: [
        { wrong: "The committee recommended that the director resigns immediately.", right: "The committee recommended that the director resign immediately.", note: "في صيغة Subjunctive نضع الفعل resign في المصدر المجرد بدون s." },
        { wrong: "It is vital that the data isn't lost.", right: "It is vital that the data not be lost.", note: "نفي Subjunctive يكون بوضع not + be مباشرة." }
      ],
      examples: [
        { en: "It is imperative that every applicant submit the documents before Friday.", ar: "من الضروري والحتمي أن يقدّم كل متقدم الوثائق قبل يوم الجمعة." },
        { en: "The judge insisted that the witness be protected at all times.", ar: "أصرّ القاضي على أن تتم حماية الشاهد في جميع الأوقات." },
        { en: "Medical experts recommend that patients not stop the medication abruptly.", ar: "يوصي الخبراء الطبيون بأن لا يوقف المرضى الدواء بشكل مفاجئ." },
        { en: "They demanded that the company disclose the full financial audit.", ar: "طالبوا بأن تفصح الشركة عن التدقيق المالي الكامل." }
      ]
    },
    {
      id: "gr-c1-6", level: "C1",
      title_ar: "الحذف والاستبدال لتجنب التكرار (Ellipsis & Substitution)",
      title_en: "Ellipsis & Substitution in Advanced Discourse",
      summary_ar: "كيف يتجنب المتحدث المتقدم تكرار الكلمات والجمل باستخدام so, not, do so, one.",
      explanation_ar: "من أبرز علامات مستوى C1 القدرة على ربط الجمل دون تكرار ممل: نستخدم (do so / did so) لاستبدال فعل ومفعوله ذُكرا سابقاً، ونستخدم (I think so / I hope so / I suppose so) وفي النفي (I don't think so / I hope not / I guess not) لاستبدال جملة كاملة، ونستخدم (if so = إن كان الأمر كذلك) و(if not = وإلا)، كما نحذف الفاعل والفعل المساعد بعد (while / when / if / although) عندما يكون الفاعل واحداً.",
      formula: "استبدال الفعل ومكمّله: do so / doing so / did so\nاستبدال جملة خبرية: believe / expect / hope / suppose + so / not\nحذف بعد الروابط: while / when / if / once + Adj / V-ing / V3",
      markers: "do so, if so, if not, I hope not, I'm afraid so, one / ones",
      mistakes: [
        { wrong: "Will it rain tomorrow? — I don't hope so.", right: "Will it rain tomorrow? — I hope not.", note: "الفعل hope في النفي الاستبدالي يأخذ I hope not وليس I don't hope so." },
        { wrong: "He promised to send the files, and he did it yesterday.", right: "He promised to send the files, and he did so yesterday.", note: "في الأسلوب المتقدم نستخدم did so لاستبدال الحدث كاملاً." }
      ],
      examples: [
        { en: "The board asked him to resign, and he eventually did so last month.", ar: "طلب منه مجلس الإدارة الاستقالة، وقد فعل ذلك في نهاية المطاف الشهر الماضي." },
        { en: "Are the results ready yet? — I'm afraid not, but they should be soon.", ar: "هل النتائج جاهزة بعد؟ — أخشى أن لا، لكن ينبغي أن تجهز قريباً." },
        { en: "When stored in a cool place, this medicine remains effective for years.", ar: "عند حفظه في مكان بارد، يظل هذا الدواء فعالاً لسنوات." },
        { en: "Check if the file is corrupted; if so, download a fresh backup.", ar: "تحقق مما إذا كان الملف تالفاً؛ وإن كان كذلك، فحمّل نسخة احتياطية جديدة." }
      ]
    },
    {
      id: "gr-c1-7", level: "C1",
      title_ar: "التلطيف الأكاديمي والتعبير الحذر (Hedging & Modality)",
      title_en: "Academic Hedging & Cautious Language",
      summary_ar: "كيف تصوغ الآراء العلمية والتحليلات بدقة وموضوعية دون تعميم جازم.",
      explanation_ar: "في الكتابة الأكاديمية والتقارير الاحترافية، يتجنب الكتّاب إطلاق أحكام قطعية مطلقة، ويستخدمون أسلوب التلطيف العلمي (Hedging) عبر أفعال مثل (tend to, appear to, seem to, suggest, indicate)، وظروف مثل (arguably, apparently, presumably, predominantly, relatively)، وتراكيب مثل (There is a tendency for..., The evidence points to...).",
      formula: "Subject + tend(s) / appear(s) / seem(s) + to + V1\nIt could be argued that / The data suggests that + Clause\nArguably / Presumably / Predominantly / Relatively + Adj/Verb",
      markers: "arguably, presumably, allegedly, reportedly, tend to, appear to, to a certain extent",
      mistakes: [
        { wrong: "This study proves 100% that remote work is always better.", right: "This study suggests that remote work tends to be more productive in many sectors.", note: "الأسلوب الأكاديمي يستخدم suggests و tends to بدلاً من الأحكام المطلقة." }
      ],
      examples: [
        { en: "The findings seem to indicate a strong correlation between sleep and memory.", ar: "يبدو أن النتائج تشير إلى وجود علاقة قوية بين النوم والذاكرة." },
        { en: "This is arguably the most comprehensive reform in the institution's history.", ar: "يمكن القول إن هذا هو الإصلاح الأكثر شمولاً في تاريخ المؤسسة." },
        { en: "Consumers tend to prioritize quality and reliability over low prices.", ar: "يميل المستهلكون إلى إعطاء الأولوية للجودة والموثوقية على حساب الأسعار المنخفضة." },
        { en: "Presumably, the delay was caused by unexpected technical constraints.", ar: "على الأرجح، نتج التأخير عن قيود تقنية غير متوقعة." }
      ]
    },
    {
      id: "gr-c1-8", level: "C1",
      title_ar: "التكثيف الاسمي والأسلوب الأكاديمي (Nominalization)",
      title_en: "Nominalization & Advanced Academic Style",
      summary_ar: "تحويل الأفعال والصفات إلى أسماء مركزة لبناء جمل رسمية وعلمية رصينة.",
      explanation_ar: "من أسرار الكتابة المتقدمة في مستوى C1 تحويل الجمل الفعلية البسيطة إلى تراكيب اسمية مكثفة (Nominalization): فبدلاً من قول (The city grew rapidly, and this caused pollution) نصوغها بأسلوب أكاديمي رفيع: (The rapid growth of the city led to an increase in pollution). هذا الأسلوب يمنح النص موضوعية وقوة تحليلية عالية.",
      formula: "Verb -> Noun: analyze -> analysis | implement -> implementation | evolve -> evolution\nAdjective -> Noun:diverse -> diversity | accurate -> accuracy | efficient -> efficiency\n[Adjective + Nominalized Noun + of + Noun] + Formal Verb (lead to / result in / facilitate)",
      markers: "implementation, acquisition, proliferation, deterioration, correlation, discrepancy",
      mistakes: [
        { wrong: "Because they implemented the law quickly, crime dropped.", right: "The rapid implementation of the law resulted in a significant decline in crime.", note: "التكثيف الاسمي يرفع مستوى الجملة من B1 إلى C1." }
      ],
      examples: [
        { en: "The rapid expansion of renewable energy has reduced carbon emissions.", ar: "أدى التوسع السريع في الطاقة المتجددة إلى تقليل انبعاثات الكربون." },
        { en: "A thorough evaluation of the curriculum revealed several areas for improvement.", ar: "كشف التقييم الشامل للمنهج الدراسي عن عدة مجالات للتحسين." },
        { en: "The preservation of cultural heritage requires international cooperation.", ar: "يتطلب الحفاظ على التراث الثقافي تعاوناً دولياً." },
        { en: "Any modification to the original contract must receive formal approval.", ar: "أي تعديل على العقد الأصلي يجب أن يحصل على موافقة رسمية." }
      ]
    }
    ,
    // ---------------- ADDITIONAL 20 LESSONS FOR 100% COMPLETE GRAMMAR COVERAGE (60 TOTAL) ----------------
    {
      id: "gr-a1-9", level: "A1",
      title_ar: "تركيب (يوجد للمفرد والجمع: There is / There are)",
      title_en: "There is & There are (Existence & Quantity)",
      summary_ar: "كيف تعبّر عن وجود الأشياء والأشخاص في مكان معين في الإثبات والنفي والسؤال.",
      explanation_ar: "نستخدم (There is) متبوعة باسم مفرد معدود أو اسم غير معدود بمعنى «يوجد»، ونستخدم (There are) متبوعة باسم جمع بمعنى «يوجد للجمع». وفي الماضي تصبحان (There was / There were). انتبه إلى أن الفعل يتبع الاسم الأول مباشرة بعده.",
      uses_list: [
        "1. الإشارة إلى وجود شخص أو شيء لأول مرة في مكان ما (There is a book on the desk).",
        "2. ذكر عدد العناصر الموجودة في غرفة أو مدينة (There are twenty students in the classroom).",
        "3. السؤال عن توفر شيء في مكان معين (Is there a bank near here?)."
      ],
      signal_words_list: [
        "a / an / one (بعد There is للمفرد المعدود)",
        "some / many / two / three (بعد There are للجمع في الإثبات)",
        "any (بعد There isn't / There aren't وفي السؤال Is there / Are there)",
        "much / a little (بعد There is مع غير المعدود)"
      ],
      formula: "الإثبات: There is + مفرد / غير معدود | There are + جمع\nالنفي: There isn't + مفرد / غير معدود | There aren't + any + جمع\nالسؤال: Is there + مفرد/غير معدود؟ | Are there + any + جمع؟",
      golden_notes: "إذا جاء بعد There قائمة تبدأ بمفرد ثم جمع (مثل: a table and four chairs)، فإننا نستخدم (There is) لأن الكلمة الأولى مفردة!",
      markers: "a/an, some, any, many, much, how many ... are there?",
      mistakes: [
        { wrong: "There is many people in the hall.", right: "There are many people in the hall.", note: "كلمة people جمع شاذ فنستخدم معها There are." },
        { wrong: "Are there any milk in the fridge?", right: "Is there any milk in the fridge?", note: "كلمة milk غير معدودة تعامل معاملة المفرد فنستخدم Is there." }
      ],
      examples: [
        { en: "There is a pharmacy at the end of this street.", ar: "توجد صيدلية في نهاية هذا الشارع." },
        { en: "There are seven days in a week.", ar: "يوجد سبعة أيام في الأسبوع." },
        { en: "There isn't any sugar left in the jar.", ar: "لا يوجد أي سكر متبقٍّ في الوعاء." },
        { en: "How many rooms are there in your apartment?", ar: "كم عدد الغرف الموجودة في شقتك؟" }
      ]
    },
    {
      id: "gr-a1-10", level: "A1",
      title_ar: "أسماء الإشارة للمفرد والجمع (this, that, these, those)",
      title_en: "Demonstratives (this, that, these, those)",
      summary_ar: "الإشارة إلى القريب والبعيد في حالتي الإفراد والجمع للزمان والمكان.",
      explanation_ar: "تُستخدم أسماء الإشارة لتحديد القريب والبعيد: فـ (this) للمفرد القريب «هذا/هذه»، و(that) للمفرد البعيد «ذلك/تلك»، و(these) للجمع القريب «هؤلاء/هذه»، و(those) للجمع البعيد «أولئك/تلك». ويمكن أن يأتي بعدها اسم مباشرة (this car) أو يأتي بعدها فعل الكينونة مباشرة (This is my car).",
      uses_list: [
        "1. الإشارة إلى الأشياء القريبة في متناول اليد باستخدام (this للمفرد / these للجمع).",
        "2. الإشارة إلى الأشياء البعيدة مكانياً أو زمانياً باستخدام (that للمفرد / those للجمع).",
        "3. التعريف بالنفس أو السؤال عن الهوية عبر الهاتف (Hello, this is Omar speaking)."
      ],
      signal_words_list: [
        "here (تدل على القريب -> this / these)",
        "over there (تدل على البعيد -> that / those)",
        "now / today (ترتبط بـ this: this morning, this week)",
        "then / in the past (ترتبط بـ that / those: in those days)"
      ],
      formula: "القريب: This + اسم مفرد (is) | These + اسم جمع (are)\nالبعيد: That + اسم مفرد (is) | Those + اسم جمع (are)\nالسؤال: What is this/that? | What are these/those?",
      golden_notes: "عند الإجابة عن سؤال بـ (What is this/that?) نستخدم الضمير (It is...)، وعند الإجابة عن (What are these/those?) نستخدم (They are...).",
      markers: "here, there, over there, this morning, those days",
      mistakes: [
        { wrong: "These shoes is very comfortable.", right: "These shoes are very comfortable.", note: "كلمة These للجمع فيجب أن يتبعها فعل جمع are." },
        { wrong: "Can you pass me this books over there?", right: "Can you pass me those books over there?", note: "الكتب جمع وبعيدة (over there) فنستخدم those." }
      ],
      examples: [
        { en: "This cup of tea is for you, and that one over there is for me.", ar: "هذا الفنجان من الشاي لك، وذلك الفنجان هناك لي." },
        { en: "These apples are fresh, but those bananas look old.", ar: "هذا التفاح طازج، لكن ذلك الموز يبدو قديماً." },
        { en: "Who are those people standing outside the building?", ar: "من هم أولئك الأشخاص الواقفون خارج المبنى؟" },
        { en: "Hello, this is Dr. Tariq calling from the hospital.", ar: "مرحباً، معك الدكتور طارق يتصل من المستشفى." }
      ]
    },
    {
      id: "gr-a1-11", level: "A1",
      title_ar: "صيغة الأمر والتعليمات (Imperatives)",
      title_en: "Imperative Sentences (Orders, Instructions & Warnings)",
      summary_ar: "كيف توجه أمراً أو نصيحة أو إرشادات الطريق أو تحذيراً مباشراً.",
      explanation_ar: "تُبنى جملة الأمر في اللغة الإنجليزية بوضع الفعل في المصدر المجرد (V1) في بداية الجملة مباشرة بدون ذكر الفاعل (You). وفي حالة النفي أو التحذير نبدأ بـ (Don't + V1). ولجعل الطلب أكثر أدباً نضيف كلمة (Please)، ولحثّ المتكلم مع المخاطبين نبدأ بـ (Let's + V1 = دعنا نفعل).",
      uses_list: [
        "1. إعطاء التعليمات والإرشادات ووصف الطريق (Turn left at the traffic lights).",
        "2. تقديم التحذيرات والتنبيهات السريعة (Don't touch the hot wire! / Be careful!).",
        "3. تقديم الاقتراحات الجماعية باستخدام (Let's + V1، ونفيها Let's not + V1)."
      ],
      signal_words_list: [
        "Please (للطلب المهذب في أول الجملة أو آخرها)",
        "Always / Never (قبل فعل الأمر للتأكيد: Always wear your seatbelt / Never give up)",
        "Let's = Let us (للاقتراح الجماعي)",
        "Don't / Do not (للنهي والتحذير)"
      ],
      formula: "الأمر المثبت: V1 (المصدر المجرد) + تكملة الجملة (Open the window)\nالنهي والتحذير: Don't + V1 + تكملة الجملة (Don't be late)\nالاقتراح الجماعي: Let's + V1 | النفي: Let's not + V1",
      golden_notes: "مع الصفات (مثل quiet, careful, polite) لا بد من وضع فعل الكينونة في المصدر (Be) قبلها، فنقول: Be quiet! / Don't be afraid!",
      markers: "Please, Always, Never, Don't, Let's, Be + Adjective",
      mistakes: [
        { wrong: "No smoke in the hospital.", right: "Don't smoke in the hospital. / No smoking.", note: "للنهي بالفعل نستخدم Don't + المصدر المجرد." },
        { wrong: "Quiet please, the baby is sleeping.", right: "Be quiet please, the baby is sleeping.", note: "كلمة quiet صفة وليست فعلاً، لذا نسبقها بـ Be." }
      ],
      examples: [
        { en: "Please read the instructions carefully before starting the test.", ar: "يرجى قراءة التعليمات بعناية قبل بدء الاختبار." },
        { en: "Don't forget to lock the front door when you leave.", ar: "لا تنسَ قفل الباب الأمامي عندما تغادر." },
        { en: "Let's take a short break and drink some coffee.", ar: "دعنا نأخذ استراحة قصيرة ونشرب بعض القهوة." },
        { en: "Always check both sides of the road before crossing.", ar: "تحقق دائماً من جانبي الطريق قبل العبور." }
      ]
    },
    {
      id: "gr-a1-12", level: "A1",
      title_ar: "تكوين الأسئلة وأدوات الاستفهام (Question Words)",
      title_en: "Wh- Questions & Yes/No Questions",
      summary_ar: "القواعد الذهبية لصياغة أي سؤال في اللغة الإنجليزية باستخدام أدوات الاستفهام.",
      explanation_ar: "ينقسم السؤال في الإنجليزية إلى نوعين: سؤال يبدأ بفعل مساعد (Am/Is/Are/Do/Does/Did/Can/Will) وتكون إجابته بـ Yes أو No، وسؤال يبدأ بأداة استفهام (Wh-word مثل What, Where, When, Why, Who, How) لطلب معلومة محددة. القاعدة الثابتة هي وضع الفعل المساعد قبل الفاعل دائماً (إلا إذا كنا نسأل عن الفاعل نفسه بـ Who أو What).",
      uses_list: [
        "1. السؤال عن الأشياء بـ (What)، وعن المكان بـ (Where)، وعن الزمان بـ (When / What time).",
        "2. السؤال عن السبب بـ (Why)، وعن الأشخاص بـ (Who / Whose للملكية)، وعن الاختيار بـ (Which).",
        "3. السؤال عن الكيفية والعدد والكمية والمدة والسرعة بـ (How / How many / How much / How long / How often)."
      ],
      signal_words_list: [
        "What (ما/ماذا) | Where (أين) | When (متى) | Why (لماذا)",
        "Who (مَن للعاقل) | Whose (لمن للملكية) | Which (أيّ للاختيار)",
        "How (كيف) | How often (كم مرة) | How long (كم المدة) | How far (كم المسافة)"
      ],
      formula: "سؤال المعلومات: Question Word + Auxiliary (do/does/did/is/are/can) + Subject + Main Verb?\nسؤال عن الفاعل نفسه (بدون do/does/did): Who / What + Verb (بزمن الجملة) + Object?\nسؤال نعم/لا: Auxiliary Verb + Subject + Main Verb?",
      golden_notes: "عندما تسأل عن الفاعل نفسه (مثل: مَن كسر النافذة؟) لا نستخدم did أو does، بل نقول مباشرة: Who broke the window? / What happened?",
      markers: "What, Where, When, Why, Who, Whose, Which, How many/much/long/often",
      mistakes: [
        { wrong: "Where you live?", right: "Where do you live?", note: "في المضارع البسيط لا بد من وضع الفعل المساعد do قبل الفاعل you." },
        { wrong: "Who did call you last night?", right: "Who called you last night?", note: "لأن Who هنا تسأل عن الفاعل الذي اتصل، نضع الفعل في الماضي مباشرة بدون did." }
      ],
      examples: [
        { en: "How often do you practice English conversation?", ar: "كم مرة تمارس محادثة اللغة الإنجليزية؟" },
        { en: "Whose jacket is this on the sofa?", ar: "لمن هذه السترة الموجودة على الأريكة؟" },
        { en: "Who invented the telephone in the nineteenth century?", ar: "من الذي اخترع الهاتف في القرن التاسع عشر؟" },
        { en: "How long does it take to fly from Sana'a to Cairo?", ar: "كم يستغرق الطيران من صنعاء إلى القاهرة؟" }
      ]
    },

    // ---------------- LEVEL A2 EXTRA 4 LESSONS ----------------
    {
      id: "gr-a2-9", level: "A2",
      title_ar: "الملكية بإضافة ('s) و (of)",
      title_en: "Possessive 's, s' and 'of' Phrases",
      summary_ar: "كيف تنسب ملكية شيء لشخص أو مجموعة أو جماد بالطريقة الصحيحة.",
      explanation_ar: "للتعبير عن ملكية الأشخاص والكائنات الحية والتعبيرات الزمنية نستخدم فاصلة الملكية العلوية: إذا كان المالك مفرداً أو جمعاً شاذاً لا ينتهي بـ s نضيف ('s) مثل (Omar's car, children's books). وإذا كان المالك جمعاً ينتهي بحرف s نضع الفاصلة العلوية فقط بعد الـ s (s') مثل (my parents' house). أما مع الجمادات والأشياء غير الحية فنستخدم حرف الجر (of) مثل (the door of the room).",
      uses_list: [
        "1. التعبير عن ملكية الأشخاص والحيوانات (Sarah's laptop, the cat's tail).",
        "2. التعبير عن العلاقات العائلية وأماكن العمل والعيادات (at the doctor's, my uncle's shop).",
        "3. التعبير عن المدة الزمنية والوقت (today's news, a two weeks' holiday)."
      ],
      signal_words_list: [
        "'s (مع المفرد والجمع الشاذ مثل men's, women's, children's, people's)",
        "s' (مع الجمع المنتظم المنتهي بـ s مثل students', teachers', parents')",
        "of the (مع الجمادات والأفكار المجردة مثل the roof of the building)"
      ],
      formula: "مفرد / جمع شاذ: Singular Noun + 's + Owned Noun (the boy's bike / children's toys)\nجمع منتظم منتهٍ بـ s: Plural Noun-s' + Owned Noun (the students' classroom)\nجماد: the + Part + of the + Whole (the end of the movie)",
      golden_notes: "إذا اشترك شخصان في ملكية شيء واحد نضع ('s) على الاسم الأخير فقط (Ali and Sami's room = غرفة مشتركة لهما)، أما إذا كان لكل منهما غرفته المستقلة فنضع ('s) على الاسمين (Ali's and Sami's rooms).",
      markers: "'s, s', of the, Whose...?",
      mistakes: [
        { wrong: "The childrens' bags are in the bus.", right: "The children's bags are in the bus.", note: "كلمة children جمع شاذ لا ينتهي بـ s، لذلك تكتب children's." },
        { wrong: "I need a three days rest.", right: "I need three days' rest.", note: "مع المدة الجمع في موضع الوصف نضع الفاصلة بعد s (days')." }
      ],
      examples: [
        { en: "My parents' house is located near the coast.", ar: "يقع منزل والديّ بالقرب من الساحل." },
        { en: "Have you read today's newspaper yet?", ar: "هل قرأت صحيفة اليوم حتى الآن؟" },
        { en: "We need to repair the roof of the garage before winter.", ar: "نحتاج إلى إصلاح سقف المرآب قبل فصل الشتاء." },
        { en: "This store sells men's and children's clothing.", ar: "يبيع هذا المتجر ملابس الرجال والأطفال." }
      ]
    },
    {
      id: "gr-a2-10", level: "A2",
      title_ar: "ظروف الكيفية وظروف التكرار والدرجة (Adverbs)",
      title_en: "Adverbs of Manner, Frequency & Degree",
      summary_ar: "كيف تصف طريقة حدوث الفعل ومدى تكراره ودرجة قوة الصفة وموقع الظرف في الجملة.",
      explanation_ar: "بينما تصف الصفة (Adjective) الاسم وتأتي قبله، يصف الظرف (Adverb) الفعل أو الصفة. تتكون أغلب ظروف الكيفية بإضافة (-ly) للصفة (quick -> quickly, careful -> carefully). واحفظ الظروف الشاذة التي لا تأخذ ly: (good -> well) و(fast -> fast) و(hard -> hard) و(late -> late). وتذكر أن ظروف التكرار (always, usually, often) تأتي قبل الفعل الرئيسي وبعد فعل الكينونة (am/is/are).",
      uses_list: [
        "1. وصف كيف قام الفاعل بالفعل باستخدام ظروف الكيفية (He drives carefully).",
        "2. تحديد عدد مرات تكرار الحدث باستخدام ظروف التكرار (She is always on time).",
        "3. تقوية أو تخفيف الصفات والظروف الأخرى باستخدام ظروف الدرجة (very, quite, extremely, rather)."
      ],
      signal_words_list: [
        "ظروف الكيفية (-ly): quickly, slowly,fluent->fluently, happy->happily",
        "ظروف شاذة: well (بشكل جيد), fast (بسرعة), hard (بجد), early (مبكراً), late (متأخراً)",
        "تنبيه مهم: كلمة hardly تعني «بالكاد / قلّما» ولا تعني «بجد»، وكلمة lately تعني «مؤخراً»!"
      ],
      formula: "تكوين الظرف: Adjective + ly (slow -> slowly | easy -> easily)\nموقع ظرف الكيفية: Subject + Verb + (Object) + Adverb of Manner\nموقع ظرف التكرار: Subject + always/often + Main Verb | Subject + am/is/are + always/often",
      golden_notes: "بعد أفعال الحواس والشعور (look, sound, smell, taste, feel, seem) نستخدم الصفة (Adjective) وليس الظرف، فنقول: The soup tastes delicious (وليس deliciously).",
      markers: "-ly, well, fast, hard, hardly, lately, always, extremely, quite",
      mistakes: [
        { wrong: "She speaks English very good.", right: "She speaks English very well.", note: "لوصف الفعل speaks نستخدم الظرف well وليس الصفة good." },
        { wrong: "He works hardly to support his family.", right: "He works hard to support his family.", note: "للعمل بجد نستخدم hard؛ لأن hardly تعني «بالكاد يعمل»!" }
      ],
      examples: [
        { en: "She explained the grammar rule clearly and patiently.", ar: "شرحت قاعدة النحو بوضوح وصبر." },
        { en: "He is always polite to his colleagues at work.", ar: "هو دائماً مهذب مع زملائه في العمل." },
        { en: "The team played remarkably well in the final match.", ar: "لعب الفريق بشكل جيد للغاية في المباراة النهائية." },
        { en: "Your idea sounds really interesting to me.", ar: "فكرتك تبدو مثيرة للاهتمام حقاً بالنسبة لي." }
      ]
    },
    {
      id: "gr-a2-11", level: "A2",
      title_ar: "ترتيب الصفات المتعددة قبل الاسم (Order of Adjectives)",
      title_en: "Royal Order of Adjectives (OSASCOMP)",
      summary_ar: "القاعدة العالمية لترتيب أكثر من صفة واحدة قبل الاسم دون ارتباك.",
      explanation_ar: "عندما نضع صفتين أو أكثر لوصف اسم واحد في الإنجليزية، فإننا لا نرتبها عشوائياً بل نتبع ترتيباً منطقياً ثابتاً يُعرف بقاعدة (OSASCOMP): نبدأ بصفة الرأي العام (Opinion)، ثم الحجم (Size)، ثم العمر (Age)، ثم الشكل (Shape)، ثم اللون (Color)، ثم الأصل أو الجنسية (Origin)، ثم المادة المصنوع منها (Material)، وأخيراً الغرض (Purpose) قبل الاسم مباشرة.",
      uses_list: [
        "1. وصف المنتجات والمقتنيات بدقة طبيعية كما ينطقها المتحدث الأصلي (a beautiful small old Italian wooden table).",
        "2. تقديم الرأي الشخصي أولاً قبل الصفات الحقيقية الثابتة كاللون والمادة.",
        "3. كتابة جمل وصفية غنية في القصص والتقارير."
      ],
      signal_words_list: [
        "1. الرأي (Opinion): beautiful, nice, comfortable, delicious",
        "2. الحجم (Size): big, small, tall, huge | 3. العمر (Age): old, new, young, ancient",
        "4. الشكل (Shape): round, square | 5. اللون (Color): black, green, white",
        "6. الجنسية (Origin): Yemeni, British, Italian | 7. المادة (Material): wooden, leather, cotton, metal"
      ],
      formula: "Determiner (a/the) + [1. الرأي] + [2. الحجم] + [3. العمر] + [4. الشكل] + [5. اللون] + [6. الجنسية] + [7. المادة] + Noun",
      golden_notes: "في الحياة العملية نادراً ما نستخدم أكثر من 3 صفات معاً، وتذكر دائماً أن «اللون والجنسية والمادة» تأتي في النهاية ملاصقة للاسم الموصوف.",
      markers: "Opinion -> Size -> Age -> Shape -> Color -> Origin -> Material -> Noun",
      mistakes: [
        { wrong: "She bought a leather black nice bag.", right: "She bought a nice black leather bag.", note: "الرأي (nice) يأتي أولاً، ثم اللون (black)، ثم المادة (leather) قبل الاسم مباشرة." },
        { wrong: "He lives in a stone old big house.", right: "He lives in a big old stone house.", note: "الحجم (big) ثم العمر (old) ثم المادة (stone)." }
      ],
      examples: [
        { en: "He bought a comfortable new black leather jacket.", ar: "اشترى سترة جلدية سوداء جديدة ومريحة." },
        { en: "They sat around a large round wooden table.", ar: "جلسوا حول طاولة خشبية دائرية كبيرة." },
        { en: "She found a beautiful small ancient gold coin.", ar: "وجدت عملة ذهبية قديمة وصغيرة وجميلة." },
        { en: "I love drinking hot Yemeni coffee in the morning.", ar: "أحب شرب القهوة اليمنية الساخنة في الصباح." }
      ]
    },
    {
      id: "gr-a2-12", level: "A2",
      title_ar: "التفرقة بين (Too) و (Enough) مع الصفات والأسماء",
      title_en: "Too & Enough with Adjectives, Adverbs and Nouns",
      summary_ar: "كيف تعبّر عن الزيادة المفرطة غير المرغوبة بـ too، وعن الكفاية بـ enough.",
      explanation_ar: "كلمة (too) تعني «أكثر من اللازم (بشكل سلبي يعيق الفعل)» وتأتي قبل الصفة أو الظرف (too hot to drink). أما كلمة (enough) فتعني «بما يكفي / كافٍ»، ولها موقعان مختلفان يجب الانتباه لهما: فهي تأتي **بعد** الصفة أو الظرف (tall enough, fast enough)، ولكنها تأتي **قبل** الاسم (enough money, enough time).",
      uses_list: [
        "1. التعبير عن وجود مانع بسبب الإفراط في الصفة باستخدام (too + Adj + to + V1).",
        "2. التعبير عن بلوغ الحد الكافي أو عدم بلوغه باستخدام (Adj + enough + to + V1).",
        "3. التعبير عن كفاية الكمية أو العدد مع الأسماء باستخدام (enough + Noun)."
      ],
      signal_words_list: [
        "too + صفة/ظرف (قبل الصفة دائماً)",
        "too many + اسم معدود جمع | too much + اسم غير معدود",
        "صفة/ظرف + enough (بعد الصفة دائماً)",
        "enough + اسم (قبل الاسم دائماً)"
      ],
      formula: "too + Adjective / Adverb + (for someone) + to + V1\nAdjective / Adverb + enough + (for someone) + to + V1\nenough + Noun + to + V1",
      golden_notes: "لا تستخدم too بمعنى «جداً» في الجمل الإيجابية المحمودة؛ فلا تقل (The cake is too delicious) بل قل (very delicious)، لأن too تحمل معنى «أكثر مما ينبغي».",
      markers: "too ... to, enough to, too much, too many",
      mistakes: [
        { wrong: "He isn't enough old to drive a car.", right: "He isn't old enough to drive a car.", note: "مع الصفات (old) تأتي كلمة enough بعد الصفة وليس قبلها." },
        { wrong: "We don't have time enough to finish.", right: "We don't have enough time to finish.", note: "مع الأسماء (time) تأتي كلمة enough قبل الاسم." }
      ],
      examples: [
        { en: "The coffee is too hot for me to drink right now.", ar: "القهوة ساخنة أكثر من اللازم بحيث لا أستطيع شربها الآن." },
        { en: "Is the room warm enough for you, or should I turn on the heater?", ar: "هل الغرفة دافئة بما يكفي لك، أم ينبغي لي تشغيل المدفأة؟" },
        { en: "We have enough chairs for all the guests.", ar: "لدينا كراسي كافية لجميع الضيوف." },
        { en: "There is too much noise in the street to concentrate.", ar: "هناك ضجيج أكثر من اللازم في الشارع يمنع التركيز." }
      ]
    },

    // ---------------- LEVEL B1 EXTRA 4 LESSONS ----------------
    {
      id: "gr-b1-9", level: "B1",
      title_ar: "الأسئلة المذيلة للتأكيد (Question Tags)",
      title_en: "Question Tags (isn't it?, don't you?, shall we?)",
      summary_ar: "السؤال القصير في نهاية الجملة بمعنى «أليس كذلك؟» وكيفية مطابقته لزمن الجملة.",
      explanation_ar: "السؤال المذيل هو سؤال قصير يوضع في نهاية الجملة الخبرية للتأكد من المعلومة أو طلب موافقة المستمع. قاعدته الأساسية هي «العكس»: إذا كانت الجملة مثبتة يكون السؤال المذيل منفياً، وإذا كانت الجملة منفية يكون السؤال المذيل مثبتاً. ونستخدم فيه نفس الفعل المساعد الموجود في الجملة (أو do/does/did إذا لم يوجد فعل مساعد) مع ضمير يعود على الفاعل.",
      uses_list: [
        "1. التأكد من صحة معلومة نعرفها (بخفض نبرة الصوت في النهاية).",
        "2. الاستفسار الحقيقي عن أمر لسنا متأكدين منه (برفع نبرة الصوت في النهاية).",
        "3. تلطيف الطلبات والاقتراحات في المحادثات اليومية."
      ],
      signal_words_list: [
        "حالة خاصة 1: الجملة المبدوءة بـ (I am ...) سؤالها المذيل هو (aren't I?)",
        "حالة خاصة 2: الاقتراح بـ (Let's ...) سؤاله المذيل هو (shall we?)",
        "حالة خاصة 3: جملة الأمر أو النهي سؤالها المذيل هو (will you?)",
        "حالة خاصة 4: الكلمات (never, hardly, seldom, rarely, nothing, nobody) تجعل الجملة منفية فيكون سؤالها المذيل مثبتاً!"
      ],
      formula: "جملة مثبتة (+) -> Auxiliary + n't + Subject Pronoun? (She is a doctor, isn't she?)\nجملة منفية (-) -> Auxiliary + Subject Pronoun? (You don't smoke, do you?)\nI am -> aren't I? | Let's -> shall we? | Everyone/Somebody -> ...they?",
      golden_notes: "الضمائر مثل (everyone, someone, anybody, nobody) تعامل معاملة المفرد في الجملة، لكن في السؤال المذيل نستخدم معها الضمير الجمع (they): Everyone is ready, aren't they?",
      markers: "isn't it?, don't you?, didn't he?, aren't I?, shall we?, will you?",
      mistakes: [
        { wrong: "I am in the right classroom, amn't I?", right: "I am in the right classroom, aren't I?", note: "السؤال المذيل المنفي لـ I am هو aren't I دائماً." },
        { wrong: "He never arrives late, doesn't he?", right: "He never arrives late, does he?", note: "كلمة never تفيد النفي، لذلك يجب أن يكون السؤال المذيل مثبتاً does he." }
      ],
      examples: [
        { en: "You have visited Cairo before, haven't you?", ar: "لقد زرت القاهرة من قبل، أليس كذلك؟" },
        { en: "She doesn't work on Fridays, does she?", ar: "هي لا تعمل أيام الجمعة، أليس كذلك؟" },
        { en: "I am on the guest list for tonight, aren't I?", ar: "أنا مسجل في قائمة الضيوف لهذه الليلة، أليس كذلك؟" },
        { en: "Let's review the vocabulary together, shall we?", ar: "دعنا نراجع المفردات معاً، ما رأيك؟" }
      ]
    },
    {
      id: "gr-b1-10", level: "B1",
      title_ar: "الصفات المنتهية بـ (-ed) مقابل الصفات المنتهية بـ (-ing)",
      title_en: "Participial Adjectives (-ed vs. -ing Adjectives)",
      summary_ar: "الفرق الحاسم بين وصف شعورك الداخلي (-ed) ووصف الشيء المسبب لذلك الشعور (-ing).",
      explanation_ar: "يخلط الكثير من المتعلمين بين الصفات المنتهية بـ (-ed) مثل (interested, bored, tired, amazed) والمنتهية بـ (-ing) مثل (interesting, boring, tiring, amazing). القاعدة البسيطة والحاسمة: الصفة المنتهية بـ (-ed) تصف **الشعور الداخلي** للشخص (كيف يشعر؟)، بينما الصفة المنتهية بـ (-ing) تصف **المؤثر أو السبب** (الشيء أو الموقف أو الشخص الذي يبعث على هذا الشعور).",
      uses_list: [
        "1. استخدام (-ed) لوصف الحالة النفسية أو الشعور المؤقت للإنسان (I felt exhausted after the trip).",
        "2. استخدام (-ing) لوصف طبيعة الأشياء أو الكتب أو الأفلام أو المواقف أو حتى الأشخاص من حيث تأثيرهم على غيرهم (The trip was exhausting).",
        "3. الربط بحروف الجر المناسبة مثل (interested in, bored with, surprised at/by, frightened of)."
      ],
      signal_words_list: [
        "أزواج شائعة: interested / interesting | bored / boring | excited / exciting",
        "tired / tiring | exhausted / exhausting | amazed / amazing | surprised / surprising",
        "confused / confusing | disappointed / disappointing | embarrassed / embarrassing"
      ],
      formula: "الشاعر بالحالة (مفعول الشعور): Subject + be/feel/get + Adjective-ed (She is bored)\nمسبّب الشعور (فاعل الشعور): Subject + be/seem + Adjective-ing (The lecture is boring)",
      golden_notes: "إذا قلت عن شخص (He is boring) فهذا يعني أنه شخص مملّ يبعث الملل في الآخرين! أما إذا أردت القول إنه يشعر بالملل فتقول (He is bored).",
      markers: "-ed (الشعور الداخلي) vs -ing (المسبب الخارجي)",
      mistakes: [
        { wrong: "I am very interesting in learning English history.", right: "I am very interested in learning English history.", note: "لوصف شعورك بالاهتمام نستخدم interested in." },
        { wrong: "The journey across the mountains was very tired.", right: "The journey across the mountains was very tiring.", note: "الرحلة هي المسبب للتعب فنصفها بـ tiring." }
      ],
      examples: [
        { en: "The documentary about space exploration was truly fascinating.", ar: "كان الفيلم الوثائقي عن استكشاف الفضاء مذهلاً ومشوقاً حقاً." },
        { en: "We were disappointed because the concert was cancelled.", ar: "شعرنا بخيبة أمل لأن الحفل قد أُلغي." },
        { en: "The instructions were so confusing that nobody understood them.", ar: "كانت التعليمات مربكة للغاية لدرجة أن أحداً لم يفهمها." },
        { en: "Are you excited about starting your new job next Monday?", ar: "هل أنت متحمس لبدء وظيفتك الجديدة يوم الإثنين القادم؟" }
      ]
    },
    {
      id: "gr-b1-11", level: "B1",
      title_ar: "الضمائر الانعكاسية والتوكيدية (Reflexive Pronouns)",
      title_en: "Reflexive & Emphatic Pronouns (myself, yourself, themselves)",
      summary_ar: "متى تستخدم myself و himself و themselves وعبارة by myself.",
      explanation_ar: "تُستخدم الضمائر الانعكاسية عندما يكون الفاعل والمفعول به في الجملة هما نفس الشخص (I cut myself = جرحتُ نفسي)، أو للتأكيد على أن الفاعل قام بالعمل بنفسه دون مساعدة أحد (I repaired the engine myself). وإذا سبقتها كلمة (by) مثل (by myself / by herself) فإنها تعني «بمفرده / وحيداً أو دون مساعدة».",
      uses_list: [
        "1. عندما يقع الفعل من الفاعل على نفسه (He looked at himself in the mirror).",
        "2. للتوكيد المعنوي بأن الشخص أنجز الأمر بذاته (The director himself signed the letter).",
        "3. مع حرف الجر (by) بمعنى «لوحده / دون معونة أحد» (She lives by herself)."
      ],
      signal_words_list: [
        "مفرد (-self): myself (نفسي) | yourself (نفسك/نفسكِ) | himself (نفسه) | herself (نفسها) | itself (نفسه لغير العاقل)",
        "جمع (-selves): ourselves (أنفسنا) | yourselves (أنفسكم) | themselves (أنفسهم)",
        "تعبيرات ثابتة: Enjoy yourself! (استمتع بوقتك) | Help yourself to food (تفضل بتناول الطعام) | Behave yourself! (تأدب)"
      ],
      formula: "الانعكاس: Subject + Verb + Reflexive Pronoun (مطابق للفاعل)\nالتوكيد: Subject + Reflexive Pronoun + Verb (أو في نهاية الجملة)\nالاستقلال: by + myself / yourself / himself / herself / ourselves / themselves (= alone)",
      golden_notes: "انتبه للفرق بين (themselves = كل واحد فعل ذلك لنفسه) وبين (each other / one another = فعلوا ذلك لبعضهم البعض بالتبادل): They looked at themselves in the mirror مقابل They looked at each other (نظر أحدهما إلى الآخر).",
      markers: "myself, yourself, himself, herself, itself, ourselves, yourselves, themselves, each other",
      mistakes: [
        { wrong: "They painted the whole house by theirselves.", right: "They painted the whole house by themselves.", note: "الصيغة الصحيحة للغائبين هي themselves وليست theirselves." },
        { wrong: "My friend and I helped themselves to some tea.", right: "My friend and I helped ourselves to some tea.", note: "My friend and I تعادل الضمير We، فينعكس بـ ourselves." }
      ],
      examples: [
        { en: "He taught himself how to write computer programs.", ar: "علّم نفسه بنفسه كيفية كتابة برامج الحاسوب." },
        { en: "Did you assemble all this furniture by yourself?", ar: "هل قمت بتركيب كل هذا الأثاث بمفردك دون مساعدة؟" },
        { en: "Please make yourselves comfortable while I prepare the tea.", ar: "تفضلوا بالجلوس براحتكم ريثما أُعدّ الشاي." },
        { en: "Good friends always support each other in difficult times.", ar: "الأصدقاء الحقيقيون يدعمون بعضهم البعض دائماً في الأوقات الصعبة." }
      ]
    },
    {
      id: "gr-b1-12", level: "B1",
      title_ar: "روابط الغرض والنتيجة (so that, in order to, so/such...that)",
      title_en: "Clauses of Purpose & Result (in order to, so that, so/such...that)",
      summary_ar: "كيف تعبّر عن الهدف من الفعل وعن النتيجة المترتبة على شدة الصفة.",
      explanation_ar: "للتعبير عن الغرض والهدف («لكي»): نستخدم (to / in order to / so as to) متبوعة بالفعل في المصدر المجرد (V1)، وفي النفي (in order not to / so as not to + V1). أما إذا أردنا وضع جملة كاملة بعدها فنستخدم (so that + Subject + can/will/could/would + V1). وللتعبير عن النتيجة («لدرجة أن»): نستخدم (so + صفة/ظرف + that)، ونستخدم (such + [a/an] + صفة + اسم + that).",
      uses_list: [
        "1. بيان الهدف من القيام بعمل ما باستخدام (in order to / so as to + V1) أو (so that + جملة).",
        "2. بيان غرض استخدام أداة أو جهاز باستخدام (for + V-ing) مثل: A thermometer is used for measuring temperature.",
        "3. التعبير عن شدة الصفة والنتيجة المترتبة عليها باستخدام (so ... that) و (such ... that)."
      ],
      signal_words_list: [
        "للغرض مع مصدر: to / in order (not) to / so as (not) to + V1",
        "للغرض مع جملة: so that / in order that + Subject + can/could/will/would + V1",
        "للنتيجة مع صفة فقط: so + Adjective/Adverb + that",
        "للنتيجة مع صفة واسم: such + (a/an) + Adjective + Noun + that"
      ],
      formula: "الغرض: ... in order (not) to + V1 | ... so that + S + can/could + V1\nالنتيجة 1: Subject + Verb + so + Adj/Adv + that + Clause\nالنتيجة 2: Subject + Verb + such + (a/an) + Adj + Noun + that + Clause",
      golden_notes: "مع الكلمات الدالة على الكثرة والقلة (much, many, little, few) حتى لو جاء بعدها اسم، نستخدم معها (so) وليس (such)، فنقول: so many people that... / so much time that...",
      markers: "in order to, so as to, so that, so ... that, such (a/an) ... that",
      mistakes: [
        { wrong: "It was so a cold day that the lake froze.", right: "It was such a cold day that the lake froze. / The day was so cold that...", note: "لوجود الاسم الموصوف (a cold day) نستخدم such وليس so." },
        { wrong: "He left early for not miss the flight.", right: "He left early in order not to (or so as not to) miss the flight.", note: "نفي الغرض يكون بـ in order not to + V1." }
      ],
      examples: [
        { en: "She took notes during the lecture so as not to forget the key points.", ar: "دوّنت ملاحظات أثناء المحاضرة لكي لا تنسى النقاط الرئيسية." },
        { en: "I will send you the map so that you can find the office easily.", ar: "سأرسل لك الخريطة لكي تتمكن من العثور على المكتب بسهولة." },
        { en: "The book was so captivating that I finished it in one evening.", ar: "كان الكتاب آسراً لدرجة أنني أنهيته في أمسية واحدة." },
        { en: "It was such a difficult question that nobody could answer it.", ar: "كان سؤالاً صعباً للغاية لدرجة أن أحداً لم يستطع الإجابة عنه." }
      ]
    },

    // ---------------- LEVEL B2 EXTRA 4 LESSONS ----------------
    {
      id: "gr-b2-9", level: "B2",
      title_ar: "المقارنة المزدوجة والتناسب الطردي (Double Comparatives)",
      title_en: "Correlative Comparatives (The more..., the more...)",
      summary_ar: "التعبير عن تغيّر أمرين معاً بصيغة «كلما زاد كذا... زاد/قلّ كذا».",
      explanation_ar: "نستخدم تركيب المقارنة المزدوجة (The + صيغة مقارنة ..., the + صيغة مقارنة ...) لبيان أن تغير شيء ما يعتمد طردياً أو عكسياً على تغير شيء آخر، وهو ما يقابل في العربية أسلوب الشرط التناسبي «كلما ...، كلما ...». كما نستخدم (comparative + and + comparative) للتعبير عن التزايد التدريجي المستمر مثل (better and better = يتحسن أكثر فأكثر).",
      uses_list: [
        "1. ربط سبب متزايد بنتيجة متزايدة أو متناقصة (The more you read, the more you learn).",
        "2. التعبير عن التطور التدريجي المستمر بـ (harder and harder / more and more expensive).",
        "3. صياغة الحكم والأمثال المختصرة مثل (The sooner, the better = كلما كان أبكر، كان أفضل)."
      ],
      signal_words_list: [
        "The + comparative (+ S + V), the + comparative (+ S + V)",
        "Adj-er and Adj-er (للصفات القصيرة: colder and colder)",
        "more and more + Adjective (للصفات الطويلة: more and more popular)"
      ],
      formula: "التناسب: The + (more / less / Adj-er) + Subject + Verb, the + (more / less / Adj-er) + Subject + Verb\nالتدرج: Subject + become/get + Adj-er and Adj-er (أو more and more + Adj)",
      golden_notes: "لاحظ أننا في هذا التركيب نضع أداة التعريف (The) وجوباً قبل صيغة المقارنة (The higher..., the colder...) على خلاف القاعدة العادية التي تضع the مع التفضيل فقط!",
      markers: "The more..., the more..., The sooner, the better, more and more",
      mistakes: [
        { wrong: "As much as you practice, you will become more fluent.", right: "The more you practice, the more fluent you will become.", note: "للتعبير عن «كلما... كلما» نستخدم The + comparative في شطري الجملة." },
        { wrong: "The weather is getting more and more cold.", right: "The weather is getting colder and colder.", note: "مع الصفة القصيرة cold نقول colder and colder." }
      ],
      examples: [
        { en: "The more you listen to native conversations, the more confident you become.", ar: "كلما استمعت أكثر للمحادثات الأصلية، أصبحت أكثر ثقة بنفسك." },
        { en: "The higher we climbed up the mountain, the colder the air became.", ar: "كلما صعدنا أعلى في الجبل، أصبح الهواء أكثر برودة." },
        { en: "Digital technology is becoming more and more advanced every year.", ar: "تزداد التكنولوجيا الرقمية تطوراً أكثر فأكثر كل عام." },
        { en: "When should we submit the application? — The sooner, the better.", ar: "متى ينبغي لنا تقديم الطلب؟ — كلما كان أبكر، كان أفضل." }
      ]
    },
    {
      id: "gr-b2-10", level: "B2",
      title_ar: "الأفعال والصفات المقترنة بحروف جر ثابتة (Dependent Prepositions)",
      title_en: "Verbs, Nouns & Adjectives with Dependent Prepositions",
      summary_ar: "إتقان حروف الجر الملازمة لأهم الأفعال والصفات لتجنب الترجمة الحرفية الخاطئة.",
      explanation_ar: "من أكثر الأخطاء شيوعاً لدى متعلمي الإنجليزية ترجمة حرف الجر حرفياً من العربية (فنقول مثلاً في العربية «يعتمد على» فيخطئ المتعلم ويقول depend on صحيحة، لكن «مهتم بـ» ليست interested by بل interested in، و«يتكون من» هي consist of وليست consist from). حفظ كل فعل أو صفة مع حرف الجر الملازم لها يرفع دقة لغتك إلى مستوى المتحدث الأصلي.",
      uses_list: [
        "1. استخدام الأفعال مع حروف جرها الصحيحة قبل الأسماء أو قبل (V-ing).",
        "2. استخدام الصفات متبوعة بحرف الجر الملازم لها (proud of, responsible for, capable of).",
        "3. التمييز بين حروف الجر المختلفة مع نفس الفعل حسب المعنى (apologize to someone for something)."
      ],
      signal_words_list: [
        "أفعال مهمة: depend/rely/insist ON | consist/approve/accuse OF | succeed/result/believe IN | belong/lead/object TO",
        "صفات مهمة: afraid/proud/capable/aware OF | responsible/famous/suitable FOR | interested/involved IN | good/bad/surprised AT | keen/dependent ON",
        "أفعال بدون حرف جر أصلاً: discuss (يناقش)، enter (يدخل المكان)، marry (يتزوج)، reach (يصل)، resemble (يشبه)"
      ],
      formula: "Subject + Verb + Preposition + Noun / V-ing\nSubject + be + Adjective + Preposition + Noun / V-ing\nتذكر: بعد أي حرف جر (حتى to في object to / look forward to) يأتي الفعل بصيغة V-ing!",
      golden_notes: "احذر من الأفعال الخمسة التي لا تأخذ حرف جر في الإنجليزية رغم أنها تأخذ حرف جر في العربية: (discuss the issue وليس discuss about)، و(marry someone وليس marry with)، و(enter the room وليس enter into).",
      markers: "depend on, consist of, succeed in, responsible for, capable of, object to + V-ing",
      mistakes: [
        { wrong: "The committee consists from ten members.", right: "The committee consists of ten members.", note: "الفعل consist يأخذ حرف الجر of دائماً (ولا يُبنى للمجهول)." },
        { wrong: "We discussed about the budget during the meeting.", right: "We discussed the budget during the meeting.", note: "الفعل discuss متعدٍّ بنفسه ولا يأخذ about." }
      ],
      examples: [
        { en: "Success in learning a language depends largely on daily practice.", ar: "يعتمد النجاح في تعلم اللغة بدرجة كبيرة على الممارسة اليومية." },
        { en: "She is fully capable of managing the international project.", ar: "هي قادرة تماماً على إدارة المشروع الدولي." },
        { en: "Many residents objected to building a factory near the park.", ar: "اعترض العديد من السكان على بناء مصنع بالقرب من الحديقة." },
        { en: "He apologized to the manager for arriving late.", ar: "اعتذر للمدير عن وصوله متأخراً." }
      ]
    },
    {
      id: "gr-b2-11", level: "B2",
      title_ar: "أزمنة السرد القصصي المتكاملة (Narrative Tenses)",
      title_en: "Narrative Tenses in Storytelling",
      summary_ar: "كيف تمزج الماضي البسيط والمستمر والتام والتام المستمر لسرد أي قصة أو موقف ببراعة.",
      explanation_ar: "عند سرد قصة أو حادثة وقعت في الماضي، لا نعتمد على زمن واحد فقط، بل نوظف أزمنة الماضي الأربعة بتناغم: نستخدم (Past Continuous) لرسم المشهد الخلفي ووصف الجو العام وما كان مستمراً، ونستخدم (Past Simple) للأحداث الرئيسية المتتالية التي تدفع القصة للأمام، ونستخدم (Past Perfect Simple & Continuous) للرجوع بالذاكرة إلى ما وقع قبل بداية أحداث القصة.",
      uses_list: [
        "1. تهيئة المشهد والبيئة المحيطة في بداية القصة بالماضي المستمر (The sun was shining and birds were singing).",
        "2. سرد الأحداث المتعاقبة بالماضي البسيط (He opened the door, walked in, and turned on the light).",
        "3. استرجاع حدث أسبق بالماضي التام أو التام المستمر (He realized someone had been searching the room)."
      ],
      signal_words_list: [
        "فجأة وللأحداث السريعة (Past Simple): suddenly, immediately, then, next, finally",
        "لوصف الخلفية المستمرة (Past Continuous): while, as, in the background, all evening",
        "للحدث الأسبق (Past Perfect): earlier, before that, by the time, had already / had been + V-ing"
      ],
      formula: "خلفية المشهد: was / were + V-ing\nالحدث الرئيسي المفاجئ: V2 (Past Simple)\nحدث سبق القصة: had + V3 | نشاط استمر قبل الحدث: had been + V-ing",
      golden_notes: "إذا جاءت عدة أفعال في الماضي البسيط على الترتيب الزمني الطبيعي مع حرف العطف (and / then)، لا نحتاج للماضي التام؛ إنما نستخدم الماضي التام عندما نكسر التسلسل الزمني ونعود للخلف!",
      markers: "while, suddenly, by the time, earlier that day, had been + V-ing",
      mistakes: [
        { wrong: "While the passengers boarded, the captain had checked the instruments.", right: "While the passengers were boarding, the captain checked the instruments.", note: "صعود الركاب كان الحدث الخلفي المستمر (were boarding)." }
      ],
      examples: [
        { en: "A cold wind was blowing when the explorers finally reached the summit.", ar: "كانت ريح باردة تهبّ عندما وصل المستكشفون أخيراً إلى القمة." },
        { en: "They were exhausted because they had been climbing for eight hours.", ar: "كانوا منهكين لأنهم كانوا يتسلقون لمدة ثماني ساعات." },
        { en: "Suddenly, he remembered where he had hidden the spare key.", ar: "فجأة، تذكر المكان الذي كان قد خبأ فيه المفتاح الاحتياطي." },
        { en: "She opened the envelope, read the letter, and smiled with relief.", ar: "فتحت المظروف، وقرأت الرسالة، وابتسمت بارتياح." }
      ]
    },
    {
      id: "gr-b2-12", level: "B2",
      title_ar: "الأفعال الخبرية المتقدمة وتراكيبها (Advanced Reporting Verbs)",
      title_en: "Reporting Verbs & Their Grammatical Patterns",
      summary_ar: "نقل الكلام بدقة بلاغية باستخدام admit, deny, insist, accuse, apologize, suggest.",
      explanation_ar: "في المستوى المتقدم، بدلاً من تكرار (said / told) في الكلام المنقول، نستخدم أفعالاً دقيقة تعبر عن نية المتحدث (مثل وعد، اعترف، أنكر، اتهم، اقترح، حذر). وتنقسم هذه الأفعال حسب التركيب النحوي الذي يليها إلى ثلاث مجموعات رئيسية يجب إتقانها.",
      uses_list: [
        "1. أفعال يتبعها المصدر مع to: (agree, offer, promise, refuse, threaten, claim + to + V1).",
        "2. أفعال يتبعها مفعول به ثم المصدر مع to: (advise, remind, warn, encourage, persuade, urge, invite + Person + to + V1).",
        "3. أفعال يتبعها (V-ing) أو حرف جر + (V-ing): (admit, deny, suggest, recommend + V-ing) و (accuse sb of / apologize for / insist on / congratulate sb on + V-ing)."
      ],
      signal_words_list: [
        "+ to V1: agree, offer, promise, refuse, threaten",
        "+ Object + (not) to V1: advise, remind, warn, persuade, encourage",
        "+ V-ing: admit, deny, suggest, recommend, regret",
        "+ Prep + V-ing: insist on, apologize for, accuse sb of, blame sb for"
      ],
      formula: "Pattern 1: Verb + (not) to + V1 (He offered to help)\nPattern 2: Verb + Object + (not) to + V1 (She warned me not to touch it)\nPattern 3: Verb (+ Prep) + (not) V-ing (He denied stealing / insisted on paying)",
      golden_notes: "انتبه للفعل (suggest) و(recommend): لا نقول أبداً (He suggested me to go)! بل نقول إما (He suggested going) أو (He suggested that we go / should go).",
      markers: "suggest + V-ing, advise sb to, accuse sb of + V-ing, insist on + V-ing",
      mistakes: [
        { wrong: "My colleague suggested me to apply for the scholarship.", right: "My colleague suggested applying (or suggested that I apply) for the scholarship.", note: "الفعل suggest لا يأخذ مفعولاً + to + مصدر أبداً." },
        { wrong: "The suspect denied to take the confidential files.", right: "The suspect denied taking the confidential files.", note: "الفعل deny يتبعه V-ing وليس to + مصدر." }
      ],
      examples: [
        { en: "The consultant advised the company to invest in renewable energy.", ar: "نصح المستشار الشركة بالاستثمار في الطاقة المتجددة." },
        { en: "He insisted on paying for everyone's dinner at the restaurant.", ar: "أصرّ على دفع ثمن عشاء الجميع في المطعم." },
        { en: "She reminded me to send the contract before noon.", ar: "ذكّرتني بإرسال العقد قبل الظهر." },
        { en: "They congratulated him on winning the international award.", ar: "هنّأوه على فوزه بالجائزة الدولية." }
      ]
    },

    // ---------------- LEVEL C1 EXTRA 4 LESSONS ----------------
    {
      id: "gr-c1-9", level: "C1",
      title_ar: "التوكيد بالفعل المساعد في الإثبات (Emphatic 'Do / Does / Did')",
      title_en: "Emphatic Do in Affirmative & Imperative Sentences",
      summary_ar: "كيف تستخدم do و does و did في الجمل المثبتة لإبراز صدق المشاعر أو نفي الشك.",
      explanation_ar: "في القواعد الأساسية نستخدم (do / does / did) في النفي والسؤال فقط، ولكن في المستوى المتقدم (C1) ندخل (do / does / did) قبل الفعل الرئيسي في **الجملة المثبتة** (مع إرجاع الفعل الرئيسي للمصدر المجرد V1) لغرضين بلاغيين: الأول هو التأكيد العاطفي الصادق («أنا فعلاً أقدّر جهودك»: I do appreciate your efforts)، والثاني هو دحض شك أو نفي سابق («بل لقد اتصلت بك أمس فعلاً!»: I did call you yesterday!).",
      uses_list: [
        "1. إظهار التقدير والامتنان أو الاعتذار الحار في المخاطبات الراقية (I do apologize for the delay).",
        "2. مقابلة نفي سابق أو توضيح التضاد (He doesn't speak French, but he does speak fluent Italian).",
        "3. تقوية جملة الأمر أو الدعوة الودية المهذبة (Do sit down, please! / Do come in!)."
      ],
      signal_words_list: [
        "do + V1 (مع I/You/We/They وفي بداية الأمر المهذب)",
        "does + V1 (مع المفرد الغائب He/She/It مع حذف الـ s من الفعل الرئيسي!)",
        "did + V1 (في الماضي المثبت مع إرجاع الفعل من V2 إلى المصدر V1!)"
      ],
      formula: "المضارع التوكيدي: Subject + do / does + V1 (المصدر المجرد بدون s)\nالماضي التوكيدي: Subject + did + V1 (المصدر المجرد)\nالأمر التوكيدي المهذب: Do + V1 (Do have a seat!)",
      golden_notes: "مع الفعل (be) لا نستخدم Emphatic do في الخبر، بل نبرز الصوت على فعل الكينونة نفسه أو نستخدم ظروف التوكيد (indeed / certainly)، إلا في الأمر العاطفي مثل: Do be careful!",
      markers: "I do appreciate, She does know, We did try, Do come in!",
      mistakes: [
        { wrong: "She does knows the truth about the incident.", right: "She does know the truth about the incident.", note: "وجود does التوكيدية يسحب حرف s من الفعل الرئيسي فيعود إلى know." },
        { wrong: "I did went to the bank this morning.", right: "I did go to the bank this morning.", note: "بعد did التوكيدية يعود الفعل للمصدر المجرد go." }
      ],
      examples: [
        { en: "I do appreciate all the effort you have put into this project.", ar: "إنني أقدّر حقاً كل الجهد الذي بذلته في هذا المشروع." },
        { en: "We didn't win the first prize, but we did gain valuable experience.", ar: "لم نفز بالجائزة الأولى، لكننا اكتسبنا بالفعل خبرة قيّمة." },
        { en: "She rarely speaks in meetings, yet when she does speak, everyone listens.", ar: "نادراً ما تتحدث في الاجتماعات، غير أنها حين تتحدث فعلاً، ينصت إليها الجميع." },
        { en: "Do let me know if you need any further assistance.", ar: "تفضل بإبلاغي حتماً إذا احتجت إلى أي مساعدة إضافية." }
      ]
    },
    {
      id: "gr-c1-10", level: "C1",
      title_ar: "أدوات الشرط المتقدمة والبديلة عن If (Advanced Conditional Linkers)",
      title_en: "Alternative Conditional Conjunctions (Provided that, Suppose, In case)",
      summary_ar: "التفريق الدقيق بين provided that و as long as و in case و suppose و otherwise.",
      explanation_ar: "في العقود والقوانين والحوارات المتقدمة، نستبدل (if) بروابط شرطية أدق معنىً: فنستخدم (provided that / providing that / on condition that / as long as / so long as) بمعنى «بشرط أن / طالما أن»، ونستخدم (suppose / supposing / what if) لافتراض السيناريوهات «لنفترض أن / ماذا لو»، ونستخدم (in case) بمعنى «تحسباً لـ / احتياطاً من»، ونستخدم (otherwise) بمعنى «وإلا».",
      uses_list: [
        "1. وضع شرط حازم للموافقة باستخدام (on condition that / provided that).",
        "2. اتخاذ إجراء احترازي مسبق قبل وقوع الحدث باستخدام (in case + Present Simple).",
        "3. طرح الفرضيات في النقاشات باستخدام (Supposing / What if)."
      ],
      signal_words_list: [
        "بشرط أن / طالما: provided (that), providing (that), on condition that, as long as, so long as",
        "تحسباً لـ (احتياط مسبق): in case + جملة | in case of + اسم (in case of fire)",
        "لنفترض أن: suppose, supposing, what if | وإلا: otherwise, or else"
      ],
      formula: "Provided that / As long as + Present Simple, Subject + will/can + V1\nTake an umbrella in case + Present Simple (احتياطاً قبل المطر)\nSuppose / Supposing + Past Simple (للتخيل الحاضر) أو Past Perfect (للماضي)",
      golden_notes: "انتبه للفرق الجوهري بين (if) و(in case): جملة (I will buy some food if Sami comes) تعني أنني سأنتظر حتى يأتي سامي ثم أشتري الطعام؛ أما (I will buy some food in case Sami comes) فتعني أنني سأشتري الطعام الآن مقدماً احتياطاً لاحتمال مجيء سامي!",
      markers: "provided that, on condition that, as long as, in case, in case of, supposing, otherwise",
      mistakes: [
        { wrong: "Write down the address in case you will forget it.", right: "Write down the address in case you forget it.", note: "بعد الرابط الشرطي والزمني in case نستخدم المضارع البسيط وليس will." },
        { wrong: "In case of the alarm rings, leave the building.", right: "In case the alarm rings... / In case of fire, leave the building.", note: "in case of يتبعها اسم فقط، أما الجملة الكاملة فتأخذ in case بدون of." }
      ],
      examples: [
        { en: "You may borrow my laptop provided that you return it by tomorrow morning.", ar: "يمكنك استعارة حاسوبي المحمول بشرط أن تعيده بحلول صباح الغد." },
        { en: "Keep a backup copy of your files in case your computer crashes.", ar: "احتفظ بنسخة احتياطية من ملفاتك تحسباً لتعطل حاسوبك." },
        { en: "Supposing you were offered a position abroad, would you accept it?", ar: "لنفترض أنه عُرض عليك منصب في الخارج، فهل كنت ستقبله؟" },
        { en: "We must reserve our seats today; otherwise, the flight will be fully booked.", ar: "يجب أن نحجز مقاعدنا اليوم؛ وإلا فستكون الرحلة محجوزة بالكامل." }
      ]
    },
    {
      id: "gr-c1-11", level: "C1",
      title_ar: "التراكيب الشمولية بـ (Whatever, Whoever, However, No matter)",
      title_en: "Universal Concession Clauses (-ever words & No matter)",
      summary_ar: "التعبير عن أن النتيجة ثابتة «مهما حدث، وأياً كان، وكيفما كان، وأينما كان».",
      explanation_ar: "تُستخدم الكلمات المنتهية بـ (-ever) ومرادفاتها المبدوءة بـ (No matter + Wh-word) لبناء جمل التنازل الشمولي (Concession) بمعنى أن النتيجة في الشطر الثاني ستتحقق بغض النظر عن المتغير في الشطر الأول. القاعدة الأدق هنا هي الانتباه لـ (however / no matter how): فكلاهما يأتي بعده **الصفة أو الظرف مباشرة** قبل الفاعل والفعل (However hard he tries = No matter how hard he tries).",
      uses_list: [
        "1. التعبير عن عدم تغير الحكم مهما تغير الشيء (Whatever / No matter what) أو الشخص (Whoever / No matter who).",
        "2. التعبير عن ثبات النتيجة مهما بلغت درجة الصفة أو الطريقة باستخدام (However + Adj/Adv + S + V).",
        "3. التعبير عن شمول الزمان والمكان بـ (Whenever = No matter when) و (Wherever = No matter where)."
      ],
      signal_words_list: [
        "whatever = no matter what (مهما) | whoever = no matter who (أياً كان مَن)",
        "whichever = no matter which (أياً كان الاختيار) | whenever = no matter when (متى ما)",
        "wherever = no matter where (أينما) | however + Adj/Adv = no matter how + Adj/Adv (مهما بلغ)"
      ],
      formula: "Whatever / Whoever / Wherever / Whenever + Subject + Present Simple, Main Clause\nHowever + Adjective / Adverb + Subject + Verb, Main Clause\nNo matter + what / who / where / when / which + S + V | No matter how + Adj/Adv + S + V",
      golden_notes: "لا تخلط بين (However,) المتبوعة بفاصلة في بداية الجملة والتي تعني «ومع ذلك / غير أن»، وبين (However + صفة/ظرف) بدون فاصلة والتي تعني «مهما كان مدى...»!",
      markers: "whatever, whoever, whichever, whenever, wherever, however + adj, no matter how",
      mistakes: [
        { wrong: "No matter how he tries hard, he cannot solve the puzzle.", right: "No matter how hard he tries (or However hard he tries), he cannot solve the puzzle.", note: "الصفة أو الظرف (hard) يجب أن تلتصق مباشرة بـ how أو however قبل الفاعل." },
        { wrong: "Whatever will happen, we will stand together.", right: "Whatever happens, we will stand together.", note: "بعد whatever الشرطية نستخدم المضارع البسيط للدلالة على المستقبل." }
      ],
      examples: [
        { en: "However complex the problem may seem, there is always a logical solution.", ar: "مهما بدت المشكلة معقدة، فهناك دائماً حل منطقي." },
        { en: "No matter how busy she is, she always finds time to read every evening.", ar: "مهما بلغ انشغالها، فإنها تجد دائماً وقتاً للقراءة كل مساء." },
        { en: "Whoever wins the election will face significant economic challenges.", ar: "أياً كان من سيفوز في الانتخابات فسيواجه تحديات اقتصادية كبيرة." },
        { en: "You are welcome to visit us whenever you come to the capital.", ar: "مرحباً بك لزيارتنا متى ما قدمتَ إلى العاصمة." }
      ]
    },
    {
      id: "gr-c1-12", level: "C1",
      title_ar: "المستقبل من منظور الماضي والتراكيب الزمنية المتقدمة",
      title_en: "Future in the Past & Advanced Aspectual Structures (be about to, be due to, be bound to)",
      summary_ar: "التعبير عن الأحداث التي كانت على وشك الوقوع أو المجدولة رسمياً أو المؤكدة الحدوث.",
      explanation_ar: "في المستوى C1 نستخدم تراكيب دقيقة لتحديد طبيعة الحدث المستقبلي أو الحديث عن المستقبل كما كان يُنظر إليه في نقطة ماضية (Future in the Past): نستخدم (be about to / be on the verge of / be on the point of) للحدث الوشيك جداً «على وشك»، ونستخدم (be due to + V1) للمواعيد المجدولة رسمياً كالقطارات والمؤتمرات، ونستخدم (be bound to / be sure to + V1) للأمر الحتمي المؤكد عقلاً.",
      uses_list: [
        "1. وصف حدث على وشك الوقوع خلال لحظات بـ (be about to + V1) أو (be on the verge of + V-ing).",
        "2. ذكر الجداول الرسمية الدقيقة بـ (be due to + V1) والأوامر البيروقراطية بـ (be to + V1).",
        "3. التعبير عن «المستقبل في الماضي» بتحويل (is going to -> was going to) و(will -> would) و(is about to -> was about to) عند سرد خطط ماضية."
      ],
      signal_words_list: [
        "وشيك جداً: be about to + V1 | be on the verge of / on the point of / on the brink of + V-ing",
        "مجدول رسمياً بوقت: be due to + V1 (The train is due to arrive at 6:00)",
        "حتمي ومؤكد الوقوع: be bound to / be certain to + V1",
        "أمر رسمي أو قدر محتوم: be to + V1 (The president is to visit Cairo)"
      ],
      formula: "الوشيك: am/is/are/was/were + about to + V1 | on the verge of + V-ing/Noun\nالمجدول رسمياً: am/is/are/was/were + due to + V1\nالحتمي: am/is/are + bound to + V1\nالمستقبل في الماضي: was/were going to + V1 | would + V1",
      golden_notes: "تركيب (was/were going to + V1) و(was/were about to + V1) يوحي غالباً بأن الخطة كانت وشيكة في الماضي لكن أمراً ما قاطعها فلم تتم (I was about to call you when you walked in).",
      markers: "be about to, on the verge of, be due to, be bound to, was going to",
      mistakes: [
        { wrong: "The company is on the verge to announce a major merger.", right: "The company is on the verge of announcing a major merger.", note: "التعبير on the verge of ينتهي بحرف الجر of فيتبعه دائماً V-ing أو اسم." },
        { wrong: "With such hard work, she is bound winning the scholarship.", right: "With such hard work, she is bound to win the scholarship.", note: "التعبير be bound يتبعه to + المصدر المجرد." }
      ],
      examples: [
        { en: "I was just about to leave the office when the director called an urgent meeting.", ar: "كنت على وشك مغادرة المكتب تماماً عندما دعا المدير إلى اجتماع عاجل." },
        { en: "The international conference is due to take place in November.", ar: "من المقرر رسمياً أن يُعقد المؤتمر الدولي في شهر نوفمبر." },
        { en: "Scientists are on the verge of discovering a revolutionary treatment.", ar: "العلماء على وشك اكتشاف علاج ثوري." },
        { en: "If you keep practicing every day, you are bound to achieve fluency.", ar: "إذا واصلت التدرب كل يوم، فمن الحتمي والمؤكد أن تصل إلى الطلاقة." }
      ]
    }
  ];

  // Build 10-question quiz for a grammar lesson dynamically
  function buildGrammarQuiz(lesson, allLessons) {
    const questions = [];
    const sameLevel = allLessons.filter(l => l.id !== lesson.id && l.level === lesson.level);
    const pool = sameLevel.length >= 3 ? sameLevel : allLessons.filter(l => l.id !== lesson.id);

    // 1. Examples fill-in-the-blank & meaning (4 questions)
    (lesson.examples || []).forEach((ex, idx) => {
      const words = ex.en.split(/\s+/);
      const targetIdx = Math.min(words.length - 1, Math.max(1, Math.floor(words.length / 3)));
      const cleanTarget = words[targetIdx].replace(/[^a-zA-Z']/g, "");
      const blanked = words.map((w, i) => i === targetIdx ? "_______" : w).join(" ");
      const distractors = ["have", "having", "been", "would", "should", "which", "whose", "despite", "although", "unless", "since", "were"]
        .filter(d => d.toLowerCase() !== cleanTarget.toLowerCase())
        .slice(idx, idx + 3);
      questions.push({
        id: `${lesson.id}-q-${idx}`,
        prompt: `أكمل الجملة التالية وفق قاعدة (${lesson.title_ar}):\n"${blanked}"`,
        subPrompt: `المستوى ${lesson.level} · تطبيق القاعدة في السياق`,
        answer: cleanTarget,
        options: [cleanTarget, ...distractors].sort((a,b) => a.localeCompare(b)),
        explanation: `${ex.en} — ${ex.ar}`
      });
    });

    // 2. Common Mistakes correction (2 questions)
    (lesson.mistakes || []).forEach((m, idx) => {
      const otherExamples = pool.flatMap(p => p.examples.map(e => e.en)).slice(0, 2);
      questions.push({
        id: `${lesson.id}-m-${idx}`,
        prompt: `أي الجمل التالية صحيحة نحوياً وفق قاعدة (${lesson.title_ar})؟`,
        subPrompt: "تصحيح الأخطاء النحوية الشائعة",
        answer: m.right,
        options: [m.right, m.wrong, ...otherExamples].slice(0, 4),
        explanation: m.note
      });
    });

    // 3. Formula, Markers & Concept questions to reach 10 questions
    const formulaMain = (lesson.formula || "").split("\n")[0];
    const otherFormulas = pool.map(p => (p.formula || "").split("\n")[0]).slice(0, 3);
    questions.push({
      id: `${lesson.id}-f-1`,
      prompt: `ما الصيغة التركيبية الصحيحة لدرس (${lesson.title_ar})؟`,
      subPrompt: "الصيغة والمعادلة النحوية",
      answer: formulaMain,
      options: [formulaMain, ...otherFormulas],
      explanation: lesson.summary_ar
    });

    questions.push({
      id: `${lesson.id}-f-2`,
      prompt: `ما الغرض اللغوي الرئيسي من استخدام قاعدة (${lesson.title_en})؟`,
      subPrompt: "الاستخدام والمعنى النحوي",
      answer: lesson.summary_ar,
      options: [lesson.summary_ar, ...pool.map(p => p.summary_ar).slice(0, 3)],
      explanation: lesson.explanation_ar
    });

    questions.push({
      id: `${lesson.id}-f-3`,
      prompt: `أي من العلامات أو الدلالات التالية يرتبط بقاعدة (${lesson.title_ar})؟`,
      subPrompt: "الكلمات الدالة والمؤشرات",
      answer: lesson.markers,
      options: [lesson.markers, ...pool.map(p => p.markers).slice(0, 3)],
      explanation: `الدلالات: ${lesson.markers}`
    });

    while (questions.length < 10) {
      const ex = lesson.examples[questions.length % lesson.examples.length];
      const otherAr = pool.flatMap(p => p.examples.map(e => e.ar)).slice(0, 3);
      questions.push({
        id: `${lesson.id}-extra-${questions.length}`,
        prompt: `ما الترجمة الدقيقة للجملة التطبيقية التالية:\n"${ex.en}"`,
        subPrompt: `${lesson.title_ar} · فهم المعنى`,
        answer: ex.ar,
        options: [ex.ar, ...otherAr],
        explanation: `${ex.en} = ${ex.ar}`
      });
    }

    return questions.slice(0, 10);
  }

  // Ensure all 60 Grammar Lessons have complete 7-section pedagogical data (Uses, Signal Words, 3-part Formula, Golden Notes)
  GRAMMAR_LESSONS.forEach(lesson => {
    if (!lesson.uses_list || !lesson.uses_list.length) {
      lesson.uses_list = [
        `1. الاستخدام الرئيسي: ${lesson.summary_ar}`,
        `2. في المحادثات والكتابة اليومية والأكاديمية للمستوى (${lesson.level}): لتطبيق تركيب (${lesson.title_en}) بدقة ووضوح.`,
        `3. في سياق الجمل المثبتة والمنفية والاستفهامية لربط المعنى بالزمن أو الوظيفة النحوية الصحيحة.`
      ];
    }
    if (!lesson.signal_words_list || !lesson.signal_words_list.length) {
      const rawMarkers = (lesson.markers || "").split(/[|,،]/).map(s => s.trim()).filter(Boolean);
      lesson.signal_words_list = rawMarkers.length
        ? rawMarkers.map((m, idx) => `${idx + 1}. المؤشر / الدلالة: (${m})`)
        : [`المؤشر السياقي: يعتمد على تركيب الجملة ومعنى الفعل في قاعدة (${lesson.title_ar}).`];
    }
    if (!lesson.golden_notes) {
      lesson.golden_notes = (lesson.mistakes && lesson.mistakes[0] && lesson.mistakes[0].note)
        ? `قاعدة ذهبية: ${lesson.mistakes[0].note} — راجع الأمثلة التطبيقية أدناه لتثبيت التركيب الصحيح في الإثبات والنفي والسؤال.`
        : `تأكد دائماً من مطابقة الفاعل مع الفعل المساعد والصيغة الصحيحة للفعل في قاعدة (${lesson.title_ar}).`;
    }
  });

  // Sort GRAMMAR_LESSONS cleanly by level (A1, A2, B1, B2, C1)
  const lvlOrder = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5 };
  GRAMMAR_LESSONS.sort((a, b) => (lvlOrder[a.level] || 9) - (lvlOrder[b.level] || 9));

  GRAMMAR_LESSONS.forEach(lesson => {
    lesson.quiz = buildGrammarQuiz(lesson, GRAMMAR_LESSONS);
  });

  // ==========================================================================
  // 2. BUILD ALL VERB CONJUGATIONS (V1, V2, V3, V-ing) FROM OXFORD 5000
  // ==========================================================================
  const allWords = (typeof window !== "undefined" && (window.lexoraWordsData || window.wordsData)) || [];
  const VERB_CONJUGATIONS = [];
  const seenVerbClean = new Set();

  allWords.forEach(w => {
    const verbSense = (w.senses || []).find(s => (s.pos || []).some(p => p === "v" || p === "modal v" || p === "aux"));
    if (!verbSense) return;
    const conj = conjugateVerb(w.word);
    const key = w.word.toLowerCase();
    if (seenVerbClean.has(key)) return;
    seenVerbClean.add(key);

    const arMeaning = verbSense.ar || verbSense.meaning_ar || "";
    const shortAr = arMeaning.split(/[؛،,/]/)[0].trim() || arMeaning;
    const v1Clean = conj.v1;
    const v2First = (conj.v2 || "").split("/")[0].trim();
    const v3First = (conj.v3 || "").split("/")[0].trim();

    // Build 3 distinct illustrative sentences for V1 (Present), V2 (Past Simple), and V3 (Present/Past Perfect)
    const exV1En = (verbSense.example_en && new RegExp("\\b" + v1Clean.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i").test(verbSense.example_en))
      ? verbSense.example_en
      : `People often ${v1Clean} carefully in everyday situations.`;
    const exV1Ar = (exV1En === verbSense.example_en && verbSense.example_ar)
      ? verbSense.example_ar
      : `كثيراً ما يقوم الناس بـ (${shortAr}) بعناية في المواقف اليومية. [مضارع V1: ${v1Clean}]`;

    const exV2En = v2First === "was" || v1Clean === "be"
      ? `Yesterday, everything was ready on time.`
      : `Last week, they ${v2First} the matter with great attention.`;
    const exV2Ar = v2First === "was" || v1Clean === "be"
      ? `بالأمس، كان كل شيء جاهزاً في الوقت المحدد. [ماضٍ بسيط V2: ${conj.v2}]`
      : `في الأسبوع الماضي، قاموا بـ (${shortAr}) للأمر باهتمام كبير. [ماضٍ بسيط V2: ${v2First}]`;

    const exV3En = v3First.startsWith("—")
      ? `They could have handled the situation earlier.`
      : `She has already ${v3First} this step successfully.`;
    const exV3Ar = v3First.startsWith("—")
      ? `كان بإمكانهم التعامل مع الموقف في وقت أبكر. [صيغة تامة للمودال]`
      : `لقد أتمّت بالفعل (${shortAr}) هذه الخطوة بنجاح. [تصريف ثالث تام V3: has ${v3First}]`;

    const exVingEn = conj.ving.startsWith("—")
      ? null
      : `Right now, they are ${conj.ving} together step by step.`;
    const exVingAr = conj.ving.startsWith("—")
      ? null
      : `في هذه اللحظة، هم مستمرون في (${shortAr}) معاً خطوة بخطوة. [مستمر V-ing: ${conj.ving}]`;

    VERB_CONJUGATIONS.push({
      id: w.id,
      wordObj: w,
      word: w.word,
      v1: conj.v1,
      v2: conj.v2,
      v3: conj.v3,
      ving: conj.ving,
      type: conj.type,
      level: verbSense.level || (w.levels && w.levels[0]) || "B1",
      ar: arMeaning,
      example_en: verbSense.example_en || "",
      example_ar: verbSense.example_ar || "",
      conjugationExamples: [
        { tag: "V1 · المضارع البسيط / المصدر", form: conj.v1, en: exV1En, ar: exV1Ar },
        { tag: "V2 · الماضي البسيط (Past Simple)", form: conj.v2, en: exV2En, ar: exV2Ar },
        { tag: "V3 · التصريف الثالث (Present Perfect)", form: `have / has ${v3First}`, en: exV3En, ar: exV3Ar },
        ...(exVingEn ? [{ tag: "V-ing · صيغة الاستمرار (Continuous)", form: `am / is / are ${conj.ving}`, en: exVingEn, ar: exVingAr }] : [])
      ]
    });
  });

  // ==========================================================================
  // 3. GENERATE 500 STORIES (100 PER LEVEL, 18-25 LINES / 6 PARAGRAPHS EACH)
  //    AND 500 CONVERSATIONS (100 PER LEVEL: 5 MIN FOR A1-B1, 10 MIN FOR B2-C1)
  // ==========================================================================
  const STORY_THEMES = [
    { en: "A New Beginning in the City", ar: "بداية جديدة في المدينة", setting_en: "central neighbourhood", setting_ar: "الحي المركزي" },
    { en: "The Unexpected Journey", ar: "الرحلة غير المتوقعة", setting_en: "mountain station", setting_ar: "المحطة الجبلية" },
    { en: "Lessons from the Old Library", ar: "دروس من المكتبة القديمة", setting_en: "historic archive", setting_ar: "الأرشيف التاريخي" },
    { en: "Secrets of the Ocean Breeze", ar: "أسرار نسيم المحيط", setting_en: "coastal harbour", setting_ar: "الميناء الساحلي" },
    { en: "The Inventor's Workshop", ar: "ورشة المخترع الطموح", setting_en: "science laboratory", setting_ar: "المختبر العلمي" },
    { en: "A Promise Across Generations", ar: "وعد عبر الأجيال", setting_en: "family village", setting_ar: "قرية العائلة" },
    { en: "Voices in the Market Square", ar: "أصوات في ساحة السوق", setting_en: "traditional market", setting_ar: "السوق التقليدي" },
    { en: "Beyond the Horizon", ar: "ما وراء الأفق البعيد", setting_en: "desert expedition", setting_ar: "البعثة الاستكشافية" },
    { en: "The Art of Patience", ar: "فن الصبر والمثابرة", setting_en: "art studio", setting_ar: "المرسم الفني" },
    { en: "Light in the Winter Storm", ar: "نور في عاصفة الشتاء", setting_en: "northern valley", setting_ar: "الوادي الشمالي" },
    { en: "The Digital Turning Point", ar: "نقطة التحول الرقمي", setting_en: "innovation hub", setting_ar: "مركز الابتكار" },
    { en: "Footsteps on the Ancient Bridge", ar: "خطوات على الجسر القديم", setting_en: "river valley", setting_ar: "وادي النهر" },
    { en: "The Silent Accomplishment", ar: "الإنجاز الهادئ", setting_en: "university campus", setting_ar: "الحرم الجامعي" },
    { en: "A Letter Never Sent", ar: "رسالة لم تُرسل أبداً", setting_en: "post office", setting_ar: "مكتب البريد" },
    { en: "Champions of Tomorrow", ar: "أبطال الغد المشرق", setting_en: "sports stadium", setting_ar: "الملعب الرياضي" },
    { en: "The Doctor's Midnight Decision", ar: "قرار الطبيب في منتصف الليل", setting_en: "central clinic", setting_ar: "العيادة المركزية" },
    { en: "Harvest of Golden Fields", ar: "حصاد الحقول الذهبية", setting_en: "green countryside", setting_ar: "الريف الأخضر" },
    { en: "Mystery of the Missing Manuscript", ar: "لغز المخطوطة المفقودة", setting_en: "national museum", setting_ar: "المتحف الوطني" },
    { en: "The Architect's Vision", ar: "رؤية المهندس المعماري", setting_en: "modern tower", setting_ar: "البرج الحديث" },
    { en: "Harmony in Diversity", ar: "الانسجام في التنوع", setting_en: "cultural festival", setting_ar: "المهرجان الثقافي" }
  ];

  const PROTAGONISTS = [
    { en: "Tariq", ar: "طارق", role_en: "young researcher", role_ar: "الباحث الشاب" },
    { en: "Nadia", ar: "نادية", role_en: "dedicated teacher", role_ar: "المعلمة المتفانية" },
    { en: "Omar", ar: "عمر", role_en: "ambitious engineer", role_ar: "المهندس الطموح" },
    { en: "Layla", ar: "ليلى", role_en: "skilled doctor", role_ar: "الطبيبة الماهرة" },
    { en: "Sami", ar: "سامي", role_en: "creative writer", role_ar: "الكاتب المبدع" },
    { en: "Huda", ar: "هدى", role_en: "experienced architect", role_ar: "المهندسة المعمارية" },
    { en: "Karim", ar: "كريم", role_en: "curious student", role_ar: "الطالب الشغوف" },
    { en: "Salma", ar: "سلمى", role_en: "project leader", role_ar: "قائدة المشروع" },
    { en: "Yasser", ar: "ياسر", role_en: "local journalist", role_ar: "الصحفي المحلي" },
    { en: "Mariam", ar: "مريم", role_en: "scientific analyst", role_ar: "المحللة العلمية" }
  ];

  const CONV_SCENARIOS = [
    { en: "At the International Airport", ar: "في المطار الدولي", spA: "Omar", spA_ar: "عمر", genderA: "male", spB: "Officer Sarah", spB_ar: "الموظفة سارة", genderB: "female" },
    { en: "Planning a University Research Project", ar: "التخطيط لمشروع بحثي جامعي", spA: "Nadia", spA_ar: "نادية", genderA: "female", spB: "Prof. Miller", spB_ar: "البروفيسور ميلر", genderB: "male" },
    { en: "A Job Interview at a Tech Company", ar: "مقابلة عمل في شركة تقنية", spA: "Tariq", spA_ar: "طارق", genderA: "male", spB: "Director Emma", spB_ar: "المديرة إيما", genderB: "female" },
    { en: "Medical Consultation at the Clinic", ar: "استشارة طبية في العيادة", spA: "Layla", spA_ar: "ليلى", genderA: "female", spB: "Dr. James", spB_ar: "الدكتور جيمس", genderB: "male" },
    { en: "Booking Accommodation & Travel Tour", ar: "حجز إقامة وجولة سياحية", spA: "Karim", spA_ar: "كريم", genderA: "male", spB: "Receptionist Anna", spB_ar: "موظفة الاستقبال آنا", genderB: "female" },
    { en: "Solving a Customer Service Issue", ar: "حل مشكلة في خدمة العملاء", spA: "Salma", spA_ar: "سلمى", genderA: "female", spB: "Manager David", spB_ar: "المدير ديفيد", genderB: "male" },
    { en: "Discussing Books at the Cultural Cafe", ar: "مناقشة الكتب في المقهى الثقافي", spA: "Sami", spA_ar: "سامي", genderA: "male", spB: "Claire", spB_ar: "كلير", genderB: "female" },
    { en: "Financial & Budget Planning Meeting", ar: "اجتماع التخطيط المالي والميزانية", spA: "Huda", spA_ar: "هدى", genderA: "female", spB: "Consultant Mark", spB_ar: "المستشار مارك", genderB: "male" },
    { en: "Organizing a Community Charity Event", ar: "تنظيم فعالية خيرية مجتمعية", spA: "Mariam", spA_ar: "مريم", genderA: "female", spB: "Coordinator Paul", spB_ar: "المنسق بول", genderB: "male" },
    { en: "Scientific & Environmental Debate", ar: "حوار علمي وبيئي معمّق", spA: "Yasser", spA_ar: "ياسر", genderA: "male", spB: "Dr. Helen", spB_ar: "الدكتورة هيلين", genderB: "female" }
  ];

  // Partition words by level
  const wordsByLevel = { A1: [], A2: [], B1: [], B2: [], C1: [] };
  allWords.forEach(w => {
    const lvl = (w.levels && w.levels[0]) || "B1";
    if (wordsByLevel[lvl]) wordsByLevel[lvl].push(w);
  });

  function pickWordsForUnit(lvl, unitIdx, count) {
    const list = wordsByLevel[lvl] || [];
    if (!list.length) return [];
    const result = [];
    const start = (unitIdx * count) % list.length;
    for (let i = 0; i < count; i++) {
      result.push(list[(start + i) % list.length]);
    }
    return result;
  }

  function cleanHead(w) {
    return (w?.word || "").replace(/\s*\([^)]*\)/g, "").replace(/[™®©12]/g, "").trim();
  }

  // Generate 500 Stories (100 per level, 6 paragraphs / ~22 lines each)
  const ALL_STORIES = [];
  ["A1", "A2", "B1", "B2", "C1"].forEach((lvl) => {
    for (let i = 0; i < 100; i++) {
      const theme = STORY_THEMES[i % STORY_THEMES.length];
      const prot = PROTAGONISTS[(i + Math.floor(i / 20)) % PROTAGONISTS.length];
      const chapterNum = i + 1;
      const unitWords = pickWordsForUnit(lvl, i, 12);
      const wList = unitWords.map(w => ({
        id: w.id,
        word: cleanHead(w),
        ar: w.senses?.[0]?.ar || w.senses?.[0]?.meaning_ar || "",
        ex_en: w.senses?.[0]?.example_en || `They learned how to use ${cleanHead(w)} properly.`,
        ex_ar: w.senses?.[0]?.example_ar || `تعلموا كيفية استخدام «${w.senses?.[0]?.ar || cleanHead(w)}» بشكل صحيح.`
      }));

      const paragraphs = [
        {
          en: `In the heart of the ${theme.setting_en}, ${prot.en}, a ${prot.role_en}, began a memorable chapter focused on ${wList[0]?.word} and ${wList[1]?.word}. Every morning brought a new opportunity to observe how people around the community dealt with daily challenges. ${wList[0]?.ex_en} At the same time, ${prot.en} noticed another important truth: ${wList[1]?.ex_en}`,
          ar: `في قلب ${theme.setting_ar}، بدأ ${prot.ar} (${prot.role_ar}) فصلاً لا يُنسى يرتكز على مفهوم «${wList[0]?.ar}» و«${wList[1]?.ar}». كان كل صباح يحمل فرصة جديدة لملاحظة كيف يتعامل الناس في المجتمع مع التحديات اليومية. ${wList[0]?.ex_ar} وفي الوقت ذاته، لاحظ ${prot.ar} حقيقة مهمة أخرى: ${wList[1]?.ex_ar}`
        },
        {
          en: `As the days progressed, the situation required careful attention to ${wList[2]?.word} and ${wList[3]?.word}. ${prot.en} wrote detailed notes in a personal journal to remember every lesson learned along the way. ${wList[2]?.ex_en} Furthermore, the experience proved that ${wList[3]?.word} played a vital role in achieving steady progress: ${wList[3]?.ex_en}`,
          ar: `ومع مضيّ الأيام، تطلب الموقف اهتماماً دقيقاً بـ «${wList[2]?.ar}» و«${wList[3]?.ar}». دوّن ${prot.ar} ملاحظات مفصلة في مفكرته الشخصية ليتذكر كل درس تعلمه في هذا المسار. ${wList[2]?.ex_ar} وعلاوة على ذلك، أثبتت التجربة أن «${wList[3]?.ar}» يلعب دوراً حيوياً في تحقيق التقدم المستمر: ${wList[3]?.ex_ar}`
        },
        {
          en: `By the middle of the week, an unexpected turning point tested everyone's understanding of ${wList[4]?.word} and ${wList[5]?.word}. Instead of giving up when difficulties appeared, ${prot.en} gathered colleagues in the ${theme.setting_en} to discuss practical solutions. ${wList[4]?.ex_en} Everyone agreed on the next step: ${wList[5]?.ex_en}`,
          ar: `وبحلول منتصف الأسبوع، جاءت نقطة تحول غير متوقعة اختبرت فهم الجميع لـ «${wList[4]?.ar}» و«${wList[5]?.ar}». وبدلاً من الاستسلام عند ظهور الصعوبات، جمع ${prot.ar} زملاءه في ${theme.setting_ar} لمناقشة الحلول العملية. ${wList[4]?.ex_ar} واتفق الجميع على الخطوة التالية: ${wList[5]?.ex_ar}`
        },
        {
          en: `During the afternoon session, the conversation shifted naturally toward ${wList[6]?.word} and ${wList[7]?.word}. Looking closely at past examples helped the team avoid common mistakes and build stronger confidence. ${wList[6]?.ex_en} In addition, ${prot.en} shared a clear example from real life: ${wList[7]?.ex_en}`,
          ar: `وخلال جلسة ما بعد الظهر، انتقل الحديث بشكل طبيعي نحو «${wList[6]?.ar}» و«${wList[7]?.ar}». إن النظر عن كثب في الأمثلة السابقة ساعد الفريق على تجنب الأخطاء الشائعة وبناء ثقة أقوى. ${wList[6]?.ex_ar} وبالإضافة إلى ذلك، شارك ${prot.ar} مثالاً واضحاً من واقع الحياة: ${wList[7]?.ex_ar}`
        },
        {
          en: `As evening approached, the results of their dedication became clear through ${wList[8]?.word} and ${wList[9]?.word}. What started as a difficult question in the morning transformed into a practical achievement by sunset. ${wList[8]?.ex_en} Reflecting on the journey, ${prot.en} reminded everyone of an essential principle: ${wList[9]?.ex_en}`,
          ar: `ومع اقتراب المساء، ظهرت ثمار تفانيهم بوضوح من خلال «${wList[8]?.ar}» و«${wList[9]?.ar}». فما بدأ كسؤال صعب في الصباح تحوّل إلى إنجاز عملي ملموس عند الغروب. ${wList[8]?.ex_ar} وفي تأملٍ لهذه الرحلة، ذكّر ${prot.ar} الجميع بمبدأ أساسي: ${wList[9]?.ex_ar}`
        },
        {
          en: `In the end, this story in the ${theme.setting_en} taught ${prot.en} that mastering ${wList[10]?.word} and ${wList[11]?.word} opens doors to wider horizons. Every challenge became a stepping stone toward deeper wisdom and lasting success. ${wList[10]?.ex_en} And as a final takeaway for the future: ${wList[11]?.ex_en}`,
          ar: `في النهاية، علّمت هذه القصة في ${theme.setting_ar} ${prot.ar} أن إتقان «${wList[10]?.ar}» و«${wList[11]?.ar}» يفتح الأبواب نحو آفاق أوسع. فقد أصبح كل تحدٍّ نقطة انطلاق نحو حكمة أعمق ونجاح دائم. ${wList[10]?.ex_ar} وكخلاصة ختامية للمستقبل: ${wList[11]?.ex_ar}`
        }
      ];

      ALL_STORIES.push({
        id: `story-${lvl}-${chapterNum}`,
        level: lvl,
        number: chapterNum,
        title_en: `${theme.en} (${lvl} · Story #${chapterNum})`,
        title_ar: `${theme.ar} (المستوى ${lvl} · القصة ${chapterNum})`,
        protagonist_en: prot.en,
        protagonist_ar: prot.ar,
        setting_ar: theme.setting_ar,
        linesCount: 22,
        readingMinutes: lvl === "B2" || lvl === "C1" ? 6 : 4,
        keyWords: unitWords,
        paragraphs
      });
    }
  });

  // Generate 500 Conversations (100 per level: 5 mins / 30 lines for A1-B1, 10 mins / 58 lines for B2-C1)
  const ALL_CONVERSATIONS = [];
  ["A1", "A2", "B1", "B2", "C1"].forEach((lvl) => {
    const isAdvanced = (lvl === "B2" || lvl === "C1");
    const durationMinutes = isAdvanced ? 10 : 5;
    const wordsCount = isAdvanced ? 14 : 8;

    for (let i = 0; i < 100; i++) {
      const sc = CONV_SCENARIOS[i % CONV_SCENARIOS.length];
      const convNum = i + 1;
      const unitWords = pickWordsForUnit(lvl, i + 37, wordsCount);
      const lines = [];

      // Expressive Human Reactions & Natural Fillers (Laughs, Hmm, Umm, Oh, Aha, Phew)
      const EXPRESSIVE_OPENERS_A = [
        { en: "Hmm... let me think about that for a second.", ar: "هممم... دعني أفكر في ذلك للحظة." },
        { en: "Well, umm... to be completely honest with you,", ar: "حسناً، أممم... لأكون صادقاً معك تماماً،" },
        { en: "Oh, by the way! That reminds me of an important point.", ar: "أوه، بالمناسبة! هذا يذكرني بنقطة مهمة." },
        { en: "Haha, I know exactly what you mean!", ar: "هاها، أعرف تماماً ما تقصده!" },
        { en: "You know, umm... I was actually wondering about the next part.", ar: "تعلم، أممم... كنت أتساءل فعلاً عن الجزء التالي." },
        { en: "Aha! Right, that makes so much sense now!", ar: "آها! صحيح، هذا منطقي جداً الآن!" },
        { en: "Oh, really? Wow, that's a great way to look at it!", ar: "أوه، حقاً؟ واو، هذه زاوية رائعة للنظر إلى الأمر!" },
        { en: "Phew! I'm glad we are covering this step by step, haha.", ar: "أوف! يسعدني أننا نغطي هذا الأمر خطوة بخطوة، هاها." }
      ];

      const EXPRESSIVE_REACTIONS_B = [
        { en: "Haha, don't worry at all! It's actually much simpler than it looks.", ar: "هاها، لا تقلق إطلاقاً! الأمر في الواقع أبسط بكثير مما يبدو." },
        { en: "Hmm... that's a very thoughtful question! Let's look at how it works:", ar: "هممم... هذا سؤال ذكي وعميق جداً! دعنا نرى كيف يعمل ذلك:" },
        { en: "Oh, I'm glad you asked that! Well, in real life:", ar: "أوه، يسعدني أنك سألت عن ذلك! حسناً، في واقع الحياة:" },
        { en: "Uh-huh, exactly! You hit the nail on the head:", ar: "أها، بالضبط! لقد أصبت كبد الحقيقة:" },
        { en: "Well, umm... let me give you a real example so it becomes crystal clear:", ar: "حسناً، أممم... دعني أعطيك مثالاً واقعياً لكي يصبح الأمر واضحاً كالشمس:" },
        { en: "Hehe, I used to wonder about the exact same thing! Here is the secret:", ar: "هيهي، كنت أتساءل عن نفس الشيء تماماً! إليك السر:" }
      ];

      // Opening Exchange (4 lines with warm human rapport)
      lines.push(
        { speaker: sc.spA, speaker_ar: sc.spA_ar, role: "A", gender: sc.genderA || "male", en: `Hi ${sc.spB}! Oh, thank you so much for meeting with me today regarding ${sc.en.toLowerCase()}.`, ar: `أهلاً ${sc.spB_ar}! أوه، شكراً جزيلاً للقائي اليوم بخصوص ${sc.ar}.` },
        { speaker: sc.spB, speaker_ar: sc.spB_ar, role: "B", gender: sc.genderB || "female", en: `Haha, you are most welcome, ${sc.spA}! Please, have a seat. I have prepared all the details so we can go through everything smoothly.`, ar: `هاها، أهلاً وسهلاً بك يا ${sc.spA_ar}! تفضل بالجلوس. لقد جهزتُ كل التفاصيل لنمرّ على كل شيء بسلاسة.` },
        { speaker: sc.spA, speaker_ar: sc.spA_ar, role: "A", gender: sc.genderA || "male", en: `Phew, that's a relief! Hmm... where do you think we should start our conversation today?`, ar: `أوف، هذا مريح جداً! هممم... من أين تعتقد أنه ينبغي لنا أن نبدأ محادثتنا اليوم؟` },
        { speaker: sc.spB, speaker_ar: sc.spB_ar, role: "B", gender: sc.genderB || "female", en: `Well, umm... let's start with the key points first and discuss real-life examples together.`, ar: `حسناً، أممم... دعنا نبدأ بالنقاط الرئيسية أولاً ونناقش أمثلة واقعية معاً.` }
      );

      // Core Vocabulary Exchanges with Expressive Human Reactions
      unitWords.forEach((w, wIdx) => {
        const wClean = cleanHead(w);
        const wAr = w.senses?.[0]?.ar || w.senses?.[0]?.meaning_ar || "";
        const exEn = w.senses?.[0]?.example_en || `We really need to focus on ${wClean} in this situation.`;
        const exAr = w.senses?.[0]?.example_ar || `نحن بحاجة فعلاً للتركيز على «${wAr}» في هذا الموقف.`;
        const expA = EXPRESSIVE_OPENERS_A[(i + wIdx) % EXPRESSIVE_OPENERS_A.length];
        const expB = EXPRESSIVE_REACTIONS_B[(i + wIdx) % EXPRESSIVE_REACTIONS_B.length];

        lines.push(
          {
            speaker: sc.spA, speaker_ar: sc.spA_ar, role: "A", gender: sc.genderA || "male",
            en: `${expA.en} How should we deal with "${wClean}" when it comes up in this situation?`,
            ar: `${expA.ar} كيف ينبغي لنا التعامل مع مسألة «${wAr}» (${wClean}) عندما تواجهنا في هذا الموقف؟`
          },
          {
            speaker: sc.spB, speaker_ar: sc.spB_ar, role: "B", gender: sc.genderB || "female",
            en: `${expB.en} ${exEn}`,
            ar: `${expB.ar} ${exAr}`
          },
          {
            speaker: sc.spA, speaker_ar: sc.spA_ar, role: "A", gender: sc.genderA || "male",
            en: `Aha! I see what you mean now! So keeping "${wClean}" in mind really makes a big difference.`,
            ar: `آها! فهمتُ ما تقصده الآن! إذن وضع «${wAr}» في الحسبان يصنع فرقاً كبيراً فعلاً.`
          }
        );

        if (isAdvanced) {
          lines.push({
            speaker: sc.spB, speaker_ar: sc.spB_ar, role: "B", gender: sc.genderB || "female",
            en: `Uh-huh, spot on! And if you think about it, umm... mastering "${wClean}" at the ${lvl} level gives you much greater confidence in professional discussions.`,
            ar: `أها، بالضبط تماماً! وإذا فكرت في الأمر، أممم... فإن إتقان «${wAr}» في المستوى ${lvl} يمنحك ثقة أكبر بكثير في النقاشات المهنية.`
          });
        }
      });

      // Closing Exchange (2 lines)
      lines.push(
        { speaker: sc.spA, speaker_ar: sc.spA_ar, role: "A", gender: sc.genderA || "male", en: `Haha, time flew by so fast! Thank you so much, ${sc.spB}. This chat was super enjoyable and clear.`, ar: `هاها، لقد مرّ الوقت بسرعة كبيرة! شكراً جزيلاً لك يا ${sc.spB_ar}. كانت هذه المحادثة ممتعة وواضحة للغاية.` },
        { speaker: sc.spB, speaker_ar: sc.spB_ar, role: "B", gender: sc.genderB || "female", en: `My absolute pleasure, ${sc.spA}! Whenever you're ready, let's take the 10-question quiz to test what we've covered!`, ar: `بكل سرور يا ${sc.spA_ar}! متى ما كنتَ مستعداً، دعنا نخوض اختبار الـ 10 أسئلة لنختبر ما غطيناه اليوم!` }
      );

      ALL_CONVERSATIONS.push({
        id: `conv-${lvl}-${convNum}`,
        level: lvl,
        number: convNum,
        title_en: `${sc.en} (${lvl} · Dialogue #${convNum})`,
        title_ar: `${sc.ar} (المستوى ${lvl} · المحادثة ${convNum})`,
        speakerA: sc.spA,
        speakerA_ar: sc.spA_ar,
        speakerB: sc.spB,
        speakerB_ar: sc.spB_ar, genderA: sc.genderA, genderB: sc.genderB,
        durationMinutes,
        linesCount: lines.length,
        keyWords: unitWords,
        lines
      });
    }
  });

  // Build a 10-Question Comprehension & Contextual Vocabulary Quiz for any Story or Conversation
  function generateImmersionQuiz(item, isStory=true) {
    const lvl = item.level || "B1";
    const difficulty = (lvl === "A1" || lvl === "A2") ? "easy" : (lvl === "B1" ? "medium" : "difficult");
    const optCount = difficulty === "difficult" ? 5 : 4;
    const levelPool = wordsByLevel[lvl] || allWords;
    const kwList = item.keyWords || [];
    const questions = [];

    for (let i = 0; i < 10; i++) {
      const targetW = kwList[i % kwList.length] || levelPool[i % levelPool.length];
      const sense = targetW?.senses?.[0] || {};
      const cleanW = cleanHead(targetW);
      const targetAr = sense.ar || sense.meaning_ar || "";
      const distractorWords = levelPool.filter(w => w.id !== targetW.id).slice((i * 7) % Math.max(1, levelPool.length - 10), ((i * 7) % Math.max(1, levelPool.length - 10)) + optCount + 3);

      if (i % 3 === 0) {
        // Contextual Sentence Fill-in-the-blank from the Story/Conversation (NO Arabic translation shown!)
        const rawSent = sense.example_en || `In this ${isStory ? "story" : "conversation"}, ${cleanW} was very important.`;
        const blanked = rawSent.replace(new RegExp("\\b" + cleanW.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "gi"), "_______");
        const dOpts = [...new Set(distractorWords.map(w => w.word))].filter(w => w !== targetW.word).slice(0, optCount - 1);
        questions.push({
          mode: "sentence",
          wordId: targetW.id,
          wordItem: targetW,
          word: targetW.word,
          level: lvl,
          pos: sense.pos || ["n"],
          questionPrompt: blanked,
          subPrompt: isStory ? `استيعاب سياق القصة (${item.title_ar})` : `استيعاب سياق المحادثة (${item.title_ar})`,
          answer: targetW.word,
          options: [targetW.word, ...dOpts].sort((a,b) => a.localeCompare(b)),
          exampleEn: sense.example_en,
          exampleAr: sense.example_ar,
          difficulty
        });
      } else if (i % 3 === 1) {
        // Meaning in Context
        const dMeanings = [...new Set(distractorWords.map(w => w.senses?.[0]?.ar || w.senses?.[0]?.meaning_ar))].filter(m => m && m !== targetAr).slice(0, optCount - 1);
        questions.push({
          mode: "meaning_ar",
          wordId: targetW.id,
          wordItem: targetW,
          word: targetW.word,
          level: lvl,
          pos: sense.pos || ["n"],
          questionPrompt: targetW.word,
          subPrompt: `ما معنى هذه الكلمة كما وردت في ${isStory ? "القصة" : "المحادثة"}؟`,
          answer: targetAr,
          options: [targetAr, ...dMeanings].sort((a,b) => a.localeCompare(b)),
          exampleEn: sense.example_en,
          exampleAr: sense.example_ar,
          difficulty
        });
      } else {
        // Word Selection from Arabic Meaning
        const dWords = [...new Set(distractorWords.map(w => w.word))].filter(w => w !== targetW.word).slice(0, optCount - 1);
        questions.push({
          mode: "word_en",
          wordId: targetW.id,
          wordItem: targetW,
          word: targetW.word,
          level: lvl,
          pos: sense.pos || ["n"],
          questionPrompt: targetAr,
          subPrompt: `اختر الكلمة الإنجليزية المطابقة لهذا المعنى من ${isStory ? "القصة" : "المحادثة"}`,
          answer: targetW.word,
          options: [targetW.word, ...dWords].sort((a,b) => a.localeCompare(b)),
          exampleEn: sense.example_en,
          exampleAr: sense.example_ar,
          difficulty
        });
      }
    }
    return questions;
  }

  // Build Fast Lookup Map + Smart Morphological Lemmatizer for ALL Words in Stories & Conversations
  const wordByExact = new Map();
  const verbByForm = new Map();

  allWords.forEach(w => {
    const cl = cleanHead(w).toLowerCase();
    if (cl && !wordByExact.has(cl)) wordByExact.set(cl, w);
  });

  VERB_CONJUGATIONS.forEach(vc => {
    const forms = [vc.v1, ...(vc.v2 || "").split("/"), ...(vc.v3 || "").split("/"), vc.ving]
      .map(s => (s || "").trim().toLowerCase())
      .filter(Boolean);
    forms.forEach(f => {
      if (!verbByForm.has(f)) verbByForm.set(f, vc);
    });
  });

  const EXTRA_COMMON_WORDS = {
    "omar": { ar: "عمر (اسم علم)", pos: "اسم علم" },
    "sarah": { ar: "سارة (اسم علم)", pos: "اسم علم" },
    "tariq": { ar: "طارق (اسم علم)", pos: "اسم علم" },
    "nadia": { ar: "نادية (اسم علم)", pos: "اسم علم" },
    "layla": { ar: "ليلى (اسم علم)", pos: "اسم علم" },
    "karim": { ar: "كريم (اسم علم)", pos: "اسم علم" },
    "salma": { ar: "سلمى (اسم علم)", pos: "اسم علم" },
    "sami": { ar: "سامي (اسم علم)", pos: "اسم علم" },
    "huda": { ar: "هدى (اسم علم)", pos: "اسم علم" },
    "mariam": { ar: "مريم (اسم علم)", pos: "اسم علم" },
    "yasser": { ar: "ياسر (اسم علم)", pos: "اسم علم" },
    "miller": { ar: "ميلر (اسم علم)", pos: "اسم علم" },
    "james": { ar: "جيمس (اسم علم)", pos: "اسم علم" },
    "emma": { ar: "إيما (اسم علم)", pos: "اسم علم" },
    "anna": { ar: "آنا (اسم علم)", pos: "اسم علم" },
    "david": { ar: "ديفيد (اسم علم)", pos: "اسم علم" },
    "claire": { ar: "كلير (اسم علم)", pos: "اسم علم" },
    "mark": { ar: "مارك (اسم علم)", pos: "اسم علم" },
    "paul": { ar: "بول (اسم علم)", pos: "اسم علم" },
    "helen": { ar: "هيلين (اسم علم)", pos: "اسم علم" },
    "haha": { ar: "هاها (تعبير ضحك لطيف)", pos: "تعبير صوتي" },
    "hehe": { ar: "هيهي (ابتسامة صوتية)", pos: "تعبير صوتي" },
    "hmm": { ar: "هممم (تعبير تفكير وتأمل)", pos: "تعبير صوتي" },
    "umm": { ar: "أممم (تردد طبيعي أثناء الحديث)", pos: "تعبير صوتي" },
    "aha": { ar: "آها! (تعبير فهم واكتشاف)", pos: "تعبير صوتي" },
    "phew": { ar: "أوف! (تعبير ارتياح بعد جهد)", pos: "تعبير صوتي" },
    "wow": { ar: "واو! (تعبير دهشة وإعجاب)", pos: "تعبير صوتي" },
    "oh": { ar: "أوه! (تعبير تفاعل وانتباه)", pos: "تعبير صوتي" },
    "hi": { ar: "أهلاً / مرحباً", pos: "تحية" },
    "hello": { ar: "مرحباً", pos: "تحية" },
    "regarding": { ar: "بخصوص؛ فيما يتعلق بـ", pos: "حرف جر" },
    "memorable": { ar: "لا يُنسى؛ جدير بالذكر", pos: "صفة" },
    "colleagues": { ar: "زملاء العمل", pos: "اسم جمع" },
    "sunset": { ar: "غروب الشمس", pos: "اسم" },
    "takeaway": { ar: "خلاصة مستفادة؛ درس رئيسي", pos: "اسم" },
    "stepping": { ar: "خطوة ارتقاء / نقطة انطلاق", pos: "اسم/صفة" },
    "horizons": { ar: "آفاق", pos: "اسم جمع" },
    "dedication": { ar: "تفانٍ؛ إخلاص", pos: "اسم" },
    "progressed": { ar: "تقدّم؛ مضى قدماً", pos: "فعل" },
    "truth": { ar: "حقيقة", pos: "اسم" },
    "properly": { ar: "بشكل صحيح؛ كما ينبغي", pos: "ظرف" },
    "smoothly": { ar: "بسلاسة؛ بيسر", pos: "ظرف" }
  };

  function resolveAnyClickedWord(rawToken) {
    if (!rawToken) return null;
    const cleaned = rawToken.replace(/^[^a-zA-Z]+|[^a-zA-Z]+$/g, "");
    if (!cleaned) return null;
    const lower = cleaned.toLowerCase();

    // Handle contractions like don't, didn't, I'm, we're, can't
    const stemToken = lower.replace(/(n't|'re|'ve|'ll|'d|'m|'s)$/i, "");

    const candidates = [lower, stemToken];
    if (lower.endsWith("ies") && lower.length > 4) candidates.push(lower.slice(0, -3) + "y");
    if (lower.endsWith("ied") && lower.length > 4) candidates.push(lower.slice(0, -3) + "y");
    if (lower.endsWith("es") && lower.length > 3) candidates.push(lower.slice(0, -2), lower.slice(0, -1));
    if (lower.endsWith("s") && lower.length > 2) candidates.push(lower.slice(0, -1));
    if (lower.endsWith("ed") && lower.length > 3) {
      const baseEd = lower.slice(0, -2);
      candidates.push(baseEd, lower.slice(0, -1));
      if (baseEd.length > 2 && baseEd[baseEd.length - 1] === baseEd[baseEd.length - 2]) {
        candidates.push(baseEd.slice(0, -1));
      }
    }
    if (lower.endsWith("ing") && lower.length > 4) {
      const baseIng = lower.slice(0, -3);
      candidates.push(baseIng, baseIng + "e");
      if (baseIng.length > 2 && baseIng[baseIng.length - 1] === baseIng[baseIng.length - 2]) {
        candidates.push(baseIng.slice(0, -1));
      }
    }
    if (lower.endsWith("ly") && lower.length > 4) candidates.push(lower.slice(0, -2));
    if (lower.endsWith("er") && lower.length > 4) candidates.push(lower.slice(0, -2), lower.slice(0, -1));
    if (lower.endsWith("est") && lower.length > 5) candidates.push(lower.slice(0, -3), lower.slice(0, -2));

    let matchedVerb = verbByForm.get(lower) || verbByForm.get(stemToken) || null;
    let matchedWord = null;

    for (let i = 0; i < candidates.length; i++) {
      const cand = candidates[i];
      if (!matchedVerb && verbByForm.has(cand)) matchedVerb = verbByForm.get(cand);
      if (!matchedWord && wordByExact.has(cand)) matchedWord = wordByExact.get(cand);
      if (matchedWord && matchedVerb) break;
    }

    if (!matchedWord && matchedVerb && matchedVerb.wordObj) {
      matchedWord = matchedVerb.wordObj;
    }

    if (matchedWord) {
      const allMeanings = [...new Set((matchedWord.senses || []).map(s => s.ar || s.meaning_ar).filter(Boolean))].join(" ؛ ");
      return {
        clickedText: cleaned,
        baseWord: cleanHead(matchedWord),
        level: (matchedWord.levels && matchedWord.levels[0]) || "B1",
        posList: [...new Set((matchedWord.senses || []).flatMap(s => s.pos || []))],
        ar: allMeanings || "مفردة إنجليزية",
        wordObj: matchedWord,
        verbConj: matchedVerb || null
      };
    }

    if (EXTRA_COMMON_WORDS[lower] || EXTRA_COMMON_WORDS[stemToken]) {
      const info = EXTRA_COMMON_WORDS[lower] || EXTRA_COMMON_WORDS[stemToken];
      return {
        clickedText: cleaned,
        baseWord: cleaned,
        level: "A1",
        posList: [info.pos],
        ar: info.ar,
        wordObj: null,
        verbConj: null
      };
    }

    return {
      clickedText: cleaned,
      baseWord: cleaned,
      level: "B1",
      posList: ["word"],
      ar: "كلمة سياقية في النص (اضغط للاستماع لنطقها)",
      wordObj: null,
      verbConj: null
    };
  }

  if (typeof window !== "undefined") {
    window.resolveAnyClickedWord = resolveAnyClickedWord;
    window.conjugateVerb = conjugateVerb;
    window.lexoraGrammarLessons = GRAMMAR_LESSONS;
    window.lexoraVerbConjugations = VERB_CONJUGATIONS;
    window.lexoraStories = ALL_STORIES;
    window.lexoraConversations = ALL_CONVERSATIONS;
    window.generateImmersionQuiz = generateImmersionQuiz;
  }
})();
