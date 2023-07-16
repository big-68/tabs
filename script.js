document.addEventListener('DOMContentLoaded', () => {
    const tab = document.querySelectorAll('.tabs-header__title'),
        tabContent = document.querySelectorAll('.tabs-box__items'),
        tabHeader = document.querySelector('.tabs-header');  
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.add('hide');
            tabContent[i].classList.remove('show');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        tabContent[b].classList.add('show');
        tabContent[b].classList.remove('hide');
    }

    tabHeader.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('tabs-header__title')) {
            for(let i = 0; i < tab.length; i++) {
                if (e.target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                } 
            }
        } 
    });
});