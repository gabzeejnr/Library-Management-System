const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        links.forEach(item => item.classList.remove('active'));
        e.currentTarget.classList.add('active')
    })
})