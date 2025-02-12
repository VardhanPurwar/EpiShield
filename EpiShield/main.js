document.addEventListener("DOMContentLoaded", function () {
    const viewMoreBtn = document.getElementById("viewMoreBtn");
    const seeLessBtn = document.getElementById("seeLessBtn");
    const hiddenCards = document.querySelectorAll(".service_card.hidden");
    const serviceSection = document.querySelector(".service_container"); // Section to scroll back to

    function smoothScrollTo(element, offset = 0) {
        const targetPosition = element.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }

    viewMoreBtn.addEventListener("click", function () {
        hiddenCards.forEach(card => card.classList.remove("hidden")); // Show hidden cards
        viewMoreBtn.classList.add("hidden"); // Hide "View More" button
        seeLessBtn.classList.remove("hidden"); // Show "See Less" button

        // Smooth scroll to the first revealed card with slight offset for better alignment
        setTimeout(() => smoothScrollTo(hiddenCards[0], -50), 200);
    });

    seeLessBtn.addEventListener("click", function () {
        hiddenCards.forEach(card => card.classList.add("hidden")); // Hide extra cards
        seeLessBtn.classList.add("hidden"); // Hide "See Less" button
        viewMoreBtn.classList.remove("hidden"); // Show "View More" button

        // Smooth scroll back to the top of the service section
        setTimeout(() => smoothScrollTo(serviceSection, -50), 200);
    });
});
