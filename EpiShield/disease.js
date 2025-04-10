const faders = document.querySelectorAll('.fade-in-section');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -20px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


const searchInput = document.querySelector('.search-bar input');
const diseaseSsections = document.querySelectorAll('.disease-main-wrapper');
const searchMessage = document.getElementById('search-message');

// Initially hide all disease sections
window.addEventListener('DOMContentLoaded', () => {
    diseaseSections.forEach(section => section.classList.add('hidden'));
});

// Helper to format disease names for the message
function formatDiseaseName(name) {
    return name
        .replace(/-/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase());
}

// On pressing Enter inside search input
searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const query = searchInput.value.toLowerCase().trim();
        let matched = false;

        diseaseSections.forEach(section => {
            const keywords = section.getAttribute('data-keywords').toLowerCase();
            if (keywords.includes(query)) {
                section.classList.remove('hidden');
                matched = true;
            } else {
                section.classList.add('hidden');
            }
        });

        if (matched && query !== '') {
            const diseaseName = formatDiseaseName(query);
            searchMessage.textContent = `Scroll down to know about ${diseaseName}`;
        } else if (query === '') {
            searchMessage.textContent = '';
            diseaseSections.forEach(section => section.classList.add('hidden'));
        } else {
            searchMessage.textContent = `No results found for "${query}"`;
        }
    }
});

// Optional: Clear message when typing again
searchInput.addEventListener('input', function () {
    if (searchInput.value.trim() === '') {
        searchMessage.textContent = '';
        diseaseSections.forEach(section => section.classList.add('hidden'));
    }
});


const filterButtons = document.querySelectorAll('.tags button');
const diseaseSections = document.querySelectorAll('.disease-main-wrapper');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const keyword = button.getAttribute('data-keyword').toLowerCase();

    diseaseSections.forEach(section => {
      const sectionKeywords = section.getAttribute('data-keywords').toLowerCase();

      if (sectionKeywords.includes(keyword)) {
        section.classList.remove('hidden');

        // 👇 Smooth scroll to the matching section
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100); // small delay to ensure it's visible before scrolling
      } else {
        section.classList.add('hidden');
      }
    });
  });
});
