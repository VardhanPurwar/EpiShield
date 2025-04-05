document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".bloodBank_card");
    const viewMoreBtn = document.getElementById("viewMoreBtn");
    const seeLessBtn = document.getElementById("seeLessBtn");

    cards.forEach((card, index) => {
        if (index >= 4) {
            card.classList.add("hidden");
        }
    });

    viewMoreBtn.addEventListener("click", function () {
        
        cards.forEach((card, index) => {
            if (index >= 4) {
                card.classList.remove("hidden");
            }
        });

        viewMoreBtn.classList.add("hidden");
        seeLessBtn.classList.remove("hidden");

        seeLessBtn.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    seeLessBtn.addEventListener("click", function () {
        
        cards.forEach((card, index) => {
            if (index >= 4) {
                card.classList.add("hidden");
            }
        });

        viewMoreBtn.classList.remove("hidden");
        seeLessBtn.classList.add("hidden");

        const container = document.querySelector(".card-container");
        container.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});
