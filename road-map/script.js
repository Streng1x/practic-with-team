function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function toggleDropdown2() {
  document.getElementById("myDropdown2").classList.toggle("show2");
}

// обработчик для первого меню
window.addEventListener("click", (event) => {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
});

// обработчик для второго меню
window.addEventListener("click", (event) => {
  if (!event.target.matches('.dropbtn_2')) {
    let dropdowns2 = document.getElementsByClassName("dropdown-content2");
    for (let i = 0; i < dropdowns2.length; i++) {
      let openDropdown2 = dropdowns2[i];
      if (openDropdown2.classList.contains('show2')) {
        openDropdown2.classList.remove('show2');
      }
    }
  }
});

// 

    // const burger = document.getElementById('burger');
    // const menu = document.getElementById('menu');

    // burger.addEventListener('click', () => {
    //   menu.classList.toggle('active');
    // });

    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    burger.addEventListener('click', () => {
      menu.classList.toggle('active');
      burger.classList.toggle('active'); // 🔥 переключаем крестик
    });


//




// window.addEventListener('scroll', () => {
//     const line = document.querySelector('.timeline-line');
//     const firstYear = document.querySelector('.linear_numbers'); // Первый год (2023)
//     const scrollTop = window.scrollY;
//     const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//     const firstYearTop = firstYear.getBoundingClientRect().top + scrollTop; // Абсолютная позиция первой секции

//     // Точка старта линии — когда первая секция входит в видимость (например, верх секции на 50% экрана)
//     const triggerPoint = firstYearTop - (window.innerHeight * 0.2);

//     if (scrollTop >= triggerPoint) {
//         const scrollPercent = ((scrollTop - triggerPoint) / (docHeight - triggerPoint)) * 100;
//         const maxHeight = 60; // Максимальная высота линии в %

//         let newHeight = Math.min(scrollPercent * 0.6 + 10, maxHeight); // От 10% до 60%
//         line.style.height = newHeight + '%';
//     } else {
//         line.style.height = '0'; // Линия не видна до триггера
//     }

//     // Опционально: анимация карточек
//     document.querySelectorAll('.card').forEach((card, index) => {
//         const cardTop = card.getBoundingClientRect().top + scrollTop;
//         if (scrollTop > cardTop - window.innerHeight) {
//             card.style.opacity = '1';
//             card.style.transform = 'translateY(0)';
//         }
//     });
// });

// // // Инициализация
// // document.addEventListener('DOMContentLoaded', () => {
// //     document.querySelector('.timeline-line').style.height = '0'; // Начальное состояние
// //     document.querySelectorAll('.linear_numbers, .card').forEach(el => {
// //         el.style.opacity = '0';
// //         el.style.transform = 'translateY(20px)';
// //         el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
// //     });
// // });


// window.addEventListener('scroll', function() {
//     const timeline = document.querySelector('.timeline-line');
//     const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//     const scrolled = window.scrollY;
//     const maxHeight = 150; // Максимальная высота полоски в процентах
//     const newHeight = (scrolled / scrollHeight) * (maxHeight * 10) + 10; // Плавное увеличение

//     if (newHeight <= maxHeight * 10) {
//         timeline.style.height = newHeight + 'px';
//     } else {
//         timeline.style.height = maxHeight + '%';
//     }
// });

window.addEventListener('scroll', function() {
    const timeline = document.querySelector('.timeline-line');
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const maxHeight = 150; // Максимальная высота полоски в процентах
    const endPoint = 2100; // Позиция конца (например, top пустого .linear_numbers)

    // Плавное увеличение высоты
    const newHeight = (scrolled / scrollHeight) * (maxHeight * 10) + 10;

    // Ограничиваем рост, если скролл достиг endPoint или больше
    if (scrolled < endPoint) {
        if (newHeight <= maxHeight * 10) {
            timeline.style.height = newHeight + 'px';
        } else {
            timeline.style.height = maxHeight * 10 + 'px'; // Максимальная высота в пикселях
        }
    } else {
        timeline.style.height = maxHeight * 10 + 'px'; // Фиксируем на максимальной высоте
    }
});