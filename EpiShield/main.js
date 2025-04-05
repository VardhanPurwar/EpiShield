document.addEventListener("DOMContentLoaded", function () {
    const viewMoreBtn = document.getElementById("viewMoreBtn");
    const seeLessBtn = document.getElementById("seeLessBtn");
    const hiddenCards = document.querySelectorAll(".service_card.hidden");
    const serviceSection = document.querySelector(".service_container");

    function smoothScrollTo(element, offset = 0) {
        const targetPosition = element.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }

    viewMoreBtn.addEventListener("click", function () {
        hiddenCards.forEach(card => card.classList.remove("hidden"));
        viewMoreBtn.classList.add("hidden");
        seeLessBtn.classList.remove("hidden");

        setTimeout(() => smoothScrollTo(hiddenCards[0], -50), 200);
    });

    seeLessBtn.addEventListener("click", function () {
        hiddenCards.forEach(card => card.classList.add("hidden"));
        seeLessBtn.classList.add("hidden");
        viewMoreBtn.classList.remove("hidden");

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
                const offset = 0;
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
    const maxVisible = 3;

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

    updateCards();
});

document.addEventListener("DOMContentLoaded", function () {
    const signUpBtn = document.querySelector(".btn-24");
    const popup = document.getElementById("signupPopup");
    const closeBtn = popup.querySelector(".close-btn");

    signUpBtn.addEventListener("click", function () {
        popup.style.display = "flex";
    });

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });
});


ddocument.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = new FormData(this);
    var jsonData = new URLSearchParams(formData).toString();

    fetch('https://script.google.com/macros/s/AKfycbzjV8F-4DX64Te4w8SfGTJTvp0q0fu8DveAYC8qedjRyYW5c3_UXfadGXTpwVrjUkqt/exec', { // Replace with your Web App URL
        method: "POST",
        body: jsonData,
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === "success") {
            alert("Sign-up successful!");
            document.getElementById("signupForm").reset();
        } else {
            alert("Error: " + data.error);
        }
    })
    .catch(error => console.error("Error:", error));

    function doGet(e) {
        return ContentService.createTextOutput("Hello, this is the GET request response.");
      }
      
});
