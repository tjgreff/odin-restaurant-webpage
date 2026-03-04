export function buildContactTab() {
    const content = document.getElementById("content");
    const container = document.createElement("div");

    container.innerHTML = `
        <h1 class="title">Contact Us</h1>
        <h2 class="contact-location">Main Restaurant</h2>
        <p class="contact-info">123 Old Town Blvd, Lafayette, CO 80026</p>
        <p class="contact-info">(303) 555-0192</p>
        <h2 class="contact-location">Office</h2>
        <p class="contact-info">456 Corporate Dr, Suite 200, Boulder, CO 80301</p>
        <p class="contact-info">(303) 555-0847</p>
        <p class="contact-info">info@osterialuigi.com</p>
    `;

    content.appendChild(container);
}
