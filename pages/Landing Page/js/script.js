javascript
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector('.nav-btn.active')?.classList.remove('active');

        this.classList.add('active');

        const chosenColor = this.getAttribute('data-color');
        if (chosenColor) {
            document.body.style.backgroundColor = chosenColor;
        }
    });
});