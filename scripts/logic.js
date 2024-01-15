import { images } from '../media/images.js';

document.addEventListener('DOMContentLoaded', function () {
    fetch('content/content.json')
        .then(response => response.json())
        .then(data => {
            // Update hero section
            let heroTitle = document.getElementById('hero-title');
            let heroSubtitle = document.getElementById('hero-subtitle');
            if (heroTitle) heroTitle.textContent = data.heroTitle;
            if (heroSubtitle) heroSubtitle.textContent = data.heroSubtitle;

            // Update main content
            let aboutEvent = document.getElementById('about-event-text');
            let workshops = document.getElementById('workshops-text');
            let getInvolved = document.getElementById('get-involved-text');
            let tickets = document.getElementById('tickets-travel-text');
            if (aboutEvent) aboutEvent.innerHTML = `<h2>About the Event</h2><p>${data.aboutEvent}</p>`;
            if (workshops) workshops.innerHTML = `<h2>${data.workshopsHeader}</h2><p>${data.workshopsDescription}</p>`;
            if (getInvolved) getInvolved.innerHTML = `<h2>${data.getInvolved}</h2><p>${data.volunteerOpportunities}</p>`;
            if (tickets && data.ticketsHeader && data.ticketsDescription) tickets.innerHTML = `<h2>${data.ticketsHeader}</h2><p>${data.ticketsDescription}</p>`;

            // Update footer text
            let footerText = document.getElementById('footer-text');
            if (footerText) footerText.textContent = data.footerText;

            // Set the background images
            // document.getElementById('hero-section').style.backgroundImage = `url(${images.heroImage})`;
            document.getElementById('about-event').style.backgroundImage = `url(${images.about})`;
            document.getElementById('workshops-section').style.backgroundImage = `url(${images.workshop})`;
            document.getElementById('get-involved').style.backgroundImage = `url(${images.involved})`;
            document.getElementById('tickets-travel').style.backgroundImage = `url(${images.buyTickets})`;
        })
        .catch(error => console.error('Error loading content:', error));
});