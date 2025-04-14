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


document.addEventListener("DOMContentLoaded", function () {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxEwdKW20RhYpDY5WSfjA_7x5KEDWZx_sAOEBqrTK5kI9d9SXUMgZe4IrDAPJld5OqGNQ/exec';
    const form = document.forms['submit-to-google-sheet'];
  
    form.addEventListener('submit', e => {
      e.preventDefault();
  
      document.getElementById("signupPopup").style.display = "none";
  
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          form.reset();
        })
        .catch(error => {
          alert("Error submitting form: " + error.message);
        });
    });
  });
