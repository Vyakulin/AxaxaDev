const popup = document.getElementsByClassName('review_popup')[0];

function esc(e) {
    if (e.key == 'Escape') {
        Hide();
    };
}

function Show() {
    popup.style.display = 'flex';
    document.addEventListener('keydown', function(event) {
        esc(event);
    });
};

function Hide() {
    popup.style.display = 'none';
};