function toggleAccordion(event) {
    const header = event.target;
    const content = header.nextElementSibling;

    // Toggle the 'open' class for the clicked section
    content.classList.toggle('open');

    // Close all other accordion items
    document.querySelectorAll('.accordion-content').forEach((item) => {
        if (item !== content) {
            item.classList.remove('open');
        }
    });
}
