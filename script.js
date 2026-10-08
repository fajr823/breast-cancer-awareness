const questions = [
    {
        question: "سرطان الثدي يصيب النساء فقط.",
        answer: false,
        explanation: "خرافة ❌ سرطان الثدي يمكن أن يصيب الرجال والنساء، لكنه أكثر شيوعًا عند النساء. أقل من 1% من حالات سرطان الثدي تحدث لدى الرجال."
    },
    {
        question: "اكتشاف سرطان الثدي مبكرًا يمكن أن يساعد في تحسين فرص العلاج.",
        answer: true,
        explanation: "حقيقة ✅ الاكتشاف المبكر يساعد على اكتشاف المرض في مرحلة مبكرة، مما قد يحسن فرص العلاج."
    },
    {
        question: "وجود كتلة في الثدي يعني دائمًا أنها سرطان.",
        answer: false,
        explanation: "خرافة ❌ وجود كتلة لا يعني بالضرورة وجود سرطان، فقد تكون لها أسباب أخرى. أي تغير غير معتاد يستحق التقييم الطبي."
    },
    {
        question: "سرطان الثدي ينتقل من شخص لآخر عن طريق اللمس.",
        answer: false,
        explanation: "خرافة ❌ سرطان الثدي ليس مرضًا معديًا ولا ينتقل عن طريق اللمس."
    },
    {
        question: "الوعي بالتغيرات غير المعتادة في الثدي مهم.",
        answer: true,
        explanation: "حقيقة ✅ معرفة التغيرات غير المعتادة تساعد على طلب التقييم الطبي عند ملاحظتها."
    }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("quiz").classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];

    document.getElementById("question").textContent = question.question;
    document.getElementById("result").textContent = "";

    document.getElementById("answers").innerHTML = `
        <button onclick="checkAnswer(true)">حقيقة</button>
        <button onclick="checkAnswer(false)">خرافة</button>
    `;

    document.getElementById("nextBtn").style.display = "none";
}

function checkAnswer(answer) {
    const result = document.getElementById("result");

    if (answer === questions[currentQuestion].answer) {
        score++;
        result.textContent =
            "إجابة صحيحة! 🎉\n" +
            questions[currentQuestion].explanation;
    } else {
        result.textContent =
            "إجابة غير صحيحة 💗\n" +
            questions[currentQuestion].explanation;
    }

    document.getElementById("nextBtn").style.display = "block";

    document.querySelectorAll("#answers button").forEach(button => {
        button.disabled = true;
    });
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    document.getElementById("question").textContent =
        "خلصتي الاختبار! 🎀";

    document.getElementById("answers").innerHTML = "";

    if (score === questions.length) {
        document.getElementById("result").textContent =
            "مبروك! 🎉 جاوبتي كل الأسئلة صح! 🎀 خذي البروش حقك!";
    } else {
        document.getElementById("result").textContent =
            `نتيجتك: ${score} من ${questions.length} 🎀\nقريبة! 💗 جربي مرة ثانية وشوفي إذا تقدرين تجيبينها كاملة!`;
    }

    document.getElementById("nextBtn").style.display = "none";
}