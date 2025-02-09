let scores = { romantic: 0, adventurous: 0, calm: 0 };

document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", function () {
        let type = this.getAttribute("data-type");
        scores[type]++;
        document.querySelectorAll(".choice").forEach(btn => btn.disabled = true);
    });
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
