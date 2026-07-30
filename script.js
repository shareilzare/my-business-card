
{/* animeyshen progress bar */}
window.addEventListener('load', function() {
    setTimeout(function () {
        document.querySelectorAll('.skill-fill').forEach(function (bar) {
            bar.style.width = bar.dataset.width + '%';
        });
    }, 300);
});
