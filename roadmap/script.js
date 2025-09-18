    function toggleDropdown() {
      document.getElementById("myDropdown").classList.toggle("show");
    }

    // закрытие при клике вне меню
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    };

// 

    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    burger.addEventListener('click', () => {
      menu.classList.toggle('active');
    });

// 

    function toggleDropdown2() {
      document.getElementById("myDropdown2").classList.toggle("show2");
    }

    // закрытие при клике вне меню
    window.onclick = function(event2) {
      if (!event2.target.matches('.dropbtn2')) {
        let dropdowns = document.getElementsByClassName("dropdown-content2");
        for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show2')) {
            openDropdown.classList.remove('show2');
          }
        }
      }
    };