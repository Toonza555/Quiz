const questions = [
    {
        img: "images/love.jpg",
        text: "1. กิจกรรมที่คุณชอบทำที่สุด?",
        choices: [
            { text: "💖 ดูหนังรัก", type: "romantic" },
            { text: "🌍 ออกไปเที่ยว", type: "adventurous" },
            { text: "📚 อ่านหนังสือ", type: "calm" }
        ]
    },
    {
        img: "images/beach.jpg",
        text: "2. สถานที่เดตในฝันของคุณ?",
        choices: [
            { text: "🍽️ ร้านอาหารสุดหรู", type: "romantic" },
            { text: "🏝️ ทะเล / ภูเขา", type: "adventurous" },
            { text: "☕ คาเฟ่เงียบ ๆ", type: "calm" }
        ]
    },
    {
        img: "images/food.jpg",
        text: "3. อาหารที่คุณชอบ?",
        choices: [
            { text: "🍣 ซูชิสุดหรู", type: "romantic" },
            { text: "🍔 ฟาสต์ฟู้ด", type: "adventurous" },
            { text: "🥗 อาหารสุขภาพ", type: "calm" }
        ]
    },
    {
        img: "images/music.jpg",
        text: "4. แนวเพลงที่คุณชอบฟัง?",
        choices: [
            { text: "🎶 เพลงรักหวานๆ", type: "romantic" },
            { text: "🎸 เพลงร็อคสุดมันส์", type: "adventurous" },
            { text: "🎻 เพลงบรรเลงผ่อนคลาย", type: "calm" }
        ]
    }
];

let scores = { romantic: 0, adventurous: 0, calm: 0 };

const quizContainer = document.getElementById("quiz");

questions.forEach((q, index) => {
    let questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    let img = document.createElement("img");
    img.src = q.img;

    let p = document.createElement("p");
    p.innerText = q.text;

    let choicesDiv = document.createElement("div");
    choicesDiv.classList.add("choices");

    q.choices.forEach(choice => {
        let button = document.createElement("button");
        button.classList.add("choice");
        button.innerText = choice.text;
        button.dataset.type = choice.type;

        button.addEventListener("click", function () {
            scores[choice.type]++;
            document.querySelectorAll(".choice").forEach(btn => btn.disabled = true);
        });

        choicesDiv.appendChild(button);
    });

    questionDiv.appendChild(img);
    questionDiv.appendChild(p);
    questionDiv.appendChild(choicesDiv);
    quizContainer.appendChild(questionDiv);
});

document.getElementById("submit").addEventListener("click", function () {
    let resultText;
    if (scores.romantic > scores.adventurous && scores.romantic > scores.calm) {
        resultText = "💖 คุณเป็นคนโรแมนติก! คุณรักความอบอุ่นและความหวานของความรัก 💖";
    } else if (scores.adventurous > scores.romantic && scores.adventurous > scores.calm) {
        resultText = "🌍 คุณเป็นนักผจญภัย! คุณรักการเดินทางและเปิดรับสิ่งใหม่ๆ 🌍";
    } else {
        resultText = "🍃 คุณเป็นคนใจเย็น! คุณชอบความสงบและมีโลกส่วนตัว 🍃";
    }

    document.getElementById("personality").innerText = resultText;
    document.getElementById("result").classList.remove("hidden");
});
