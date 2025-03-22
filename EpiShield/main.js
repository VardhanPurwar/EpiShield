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

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav_links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = 0; // Adjust this value to match your header height
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY + offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const doctorCards = document.querySelectorAll(".doctor_card");
    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");

    let startIndex = 0;
    const maxVisible = 3; // Number of visible cards at a time

    function updateCards() {
        doctorCards.forEach((card, index) => {
            card.classList.toggle("hidden", index < startIndex || index >= startIndex + maxVisible);
        });

        leftArrow.classList.toggle("hidden", startIndex === 0);
        rightArrow.classList.toggle("hidden", startIndex + maxVisible >= doctorCards.length);
    }

    rightArrow.addEventListener("click", function () {
        if (startIndex + maxVisible < doctorCards.length) {
            startIndex++;
            updateCards();
        }
    });

    leftArrow.addEventListener("click", function () {
        if (startIndex > 0) {
            startIndex--;
            updateCards();
        }
    });

    updateCards(); // Initialize card visibility
});
