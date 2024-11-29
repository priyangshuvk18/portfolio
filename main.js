
/* ================================= toggle icon navbar======================================*/


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}
/* ================================= scroll section active link==============================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* ================================= sticky navbar===========================================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ================================= remove toggle icon navbar===============================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
/*=====================================SCROLL REVEAL====================================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,

});
ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, services-container, .portfolio-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*=====================================SCROLL REVEAL====================================*/
const typed = new Typed('.multiple-text', {
    strings: ['Developer', 'Web Designer', 'Gamer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

document.querySelectorAll('.read-more-btn').forEach((button) => {
    button.addEventListener('click', function () {
        // Find all `.more-text` elements in the closest parent container
        const parent = this.closest('div'); // Adjust to the correct parent selector
        const moreTextElements = parent.querySelectorAll('.more-text');

        // Toggle visibility for all `.more-text` elements
        moreTextElements.forEach((element) => {
            if (element.style.display === 'none' || element.style.display === '') {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        });

        // Toggle the button text
        this.textContent = this.textContent === 'Read More' ? 'Read Less' : 'Read More';
    });
});

function doPost(e) {
    Logger.log(e); // Logs the incoming request
    try {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        var data = JSON.parse(e.postData.contents); // Parse JSON payload
        sheet.appendRow([data.name, data.email, data.phone, data.address, data.message]);
        return ContentService.createTextOutput("Success");
    } catch (error) {
        Logger.log(error); // Logs errors for debugging
        return ContentService.createTextOutput("Error: " + error.message);
    }
}
function showPopup(message) {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");
    popupMessage.textContent = message;
    popup.style.display = "block";

    // Automatically hide the popup after 2 seconds
    setTimeout(() => {
        popup.style.display = "none";
    }, 2000);
}
