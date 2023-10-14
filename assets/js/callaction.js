document.getElementById("callAction").addEventListener("click", function() {
    scrollToFooter();
});

function scrollToFooter() {
    const footerElement = document.getElementById("footer");
    const offset = footerElement.offsetTop;
    window.scrollTo({
        top: offset,
        behavior: "smooth"
    });
}