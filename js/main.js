const items = document.querySelectorAll('.accordion-item');
    items.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            items.forEach(i => i.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.onscroll = function () {
        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            scrollTopBtn.parentElement.style.display = "block";
        } else {
            scrollTopBtn.parentElement.style.display = "none";
        }
    };

    scrollTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active')
        navList.classList.toggle('active')
    })

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active')
        navList.classList.remove('active')
    }))

    function showImage(index) {
        const buttons = document.querySelectorAll('.tab-button');
        const images = document.querySelectorAll('.tab-image');
  
        buttons.forEach(btn => btn.classList.remove('active'));
        images.forEach(img => img.classList.remove('active'));
  
        buttons[index].classList.add('active');
        images[index].classList.add('active');
      }