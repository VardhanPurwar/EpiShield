document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const downArrow = document.getElementById("downarrow");
    const upArrow = document.getElementById("uparrow");

    let visibleIndex = 0;

    function updateArrows() {
        upArrow.style.visibility = visibleIndex === 0 ? "hidden" : "visible";

        if (visibleIndex >= cards.length - 2) {
            downArrow.style.visibility = "hidden";
        } else {
            downArrow.style.visibility = "visible";
        }
    }

    downArrow.addEventListener("click", function () {
        if (visibleIndex < cards.length - 2) {
            cards[visibleIndex].classList.add("hidden");
            visibleIndex++;
            cards[visibleIndex + 1].classList.remove("hidden");
            updateArrows();
        }
    });

    upArrow.addEventListener("click", function () {
        if (visibleIndex > 0) {
            cards[visibleIndex + 1].classList.add("hidden");
            visibleIndex--;
            cards[visibleIndex].classList.remove("hidden");
            updateArrows();
        }
    });
    
    updateArrows();
});
