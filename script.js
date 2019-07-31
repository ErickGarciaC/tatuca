window.onload = () => {
    document.querySelector('#hbd-btn')
        .addEventListener('click', (e) => {
            const el = e.target;
            el.classList.add('clicked');
            setTimeout(() => {
                el.classList.remove('clicked');
            }, 1500);
        });
}