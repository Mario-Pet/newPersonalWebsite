document.querySelector("select").addEventListener("change", e => {
    if (document.querySelector("select").value == "english") {
        document.querySelector("#makiHeadline").innerHTML = 'hello, i am <span class="maki">maki;</span>';
        document.querySelector("#makiHeadline").classList.remove("makiHeadline")
        document.querySelector("#makiHeadline").classList.add("makiHeadlineEnglish")
        document.querySelector("#underHeadline").textContent = "I love to code and I love to learn."
        document.querySelector("#projectsHeadline").textContent = "PROJECTS";
        document.querySelector("#projectsBankApp").textContent = "bank app;";
        document.querySelector("#projectsCinemaApp").textContent = "cinema seat booking app;";
        document.querySelector("#projectsCountdown").textContent = "countdown till new years;";
        document.querySelector("#projectsTyperacer").textContent = "typeracer;";
        document.querySelector("#about").textContent = "ABOUT ME";
        document.querySelector("#contact").textContent = "CONTACT";
        document.querySelector("#aboutLine").textContent = "I often read books, play the piano and i love music.";
        document.querySelector("#secondSectionThirdColumn").classList.toggle("secondSectionThirdColumnEnglish")

    } else {
        document.querySelector("#makiHeadline").innerHTML = 'hallo, ich bin <span class="maki">maki;</span>';
        document.querySelector("#makiHeadline").classList.remove("makiHeadlineEnglish")
        document.querySelector("#makiHeadline").classList.add("makiHeadline")
        document.querySelector("#underHeadline").textContent = "Ich liebe zu programmieren und ich liebe zu lernen."
        document.querySelector("#projectsHeadline").textContent = "PROJEKTE";
        document.querySelector("#projectsBankApp").textContent = "Bank App;";
        document.querySelector("#projectsCinemaApp").textContent = "Kinoplatzreservierung;";
        document.querySelector("#projectsCountdown").textContent = "Countdown bis zum neuen Jahr;";
        document.querySelector("#projectsTyperacer").textContent = "Typeracer;";
        document.querySelector("#about").textContent = "ÜBER MICH";
        document.querySelector("#contact").textContent = "KONTAKT";
        document.querySelector("#aboutLine").textContent = "Ich lese Bücher oft, spiele Klavier und liebe Musik";
        document.querySelector("#secondSectionThirdColumn").classList.toggle("secondSectionThirdColumnEnglish")

    }
})

document.querySelector("#theme").addEventListener("click", e => {
    if (e.target.value == "white") {
        document.querySelector("#body").classList.toggle("darkBG");
        document.querySelector("#makiHeadline").classList.toggle("white");
        document.querySelector("#underHeadline").classList.toggle("white");
        document.querySelector("#projectsHeadline").classList.toggle("white");
        document.querySelector("#projectsBankApp").classList.toggle("white");
        document.querySelector("#projectsCinemaApp").classList.toggle("white");
        document.querySelector("#projectsCountdown").classList.toggle("white");
        document.querySelector("#projectsTyperacer").classList.toggle("white");
        document.querySelector("#about").classList.toggle("white");
        document.querySelector("#contact").classList.toggle("white");
        document.querySelector("#aboutLine").classList.toggle("white");
        document.querySelector("#underContact").classList.toggle("white");

    }
})