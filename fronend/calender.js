// script.js
document.addEventListener("DOMContentLoaded", function () {
    const monthYear = document.getElementById('monthYear');
    const datesElement = document.getElementById('dates');
    const prevMonthButton = document.getElementById('prevMonth');
    const nextMonthButton = document.getElementById('nextMonth');

    let currentDate = new Date();

    function renderCalendar() {
        datesElement.innerHTML = '';
        const firstDayIndex = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

        monthYear.innerText = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;

        for (let i = 0; i < firstDayIndex; i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('date');
            datesElement.appendChild(emptyDiv);
        }

        for (let i = 1; i <= lastDate; i++) {
            const dateDiv = document.createElement('div');
            dateDiv.classList.add('date');
            dateDiv.innerText = i;
            
            const today = new Date();
            if (i === today.getDate() && currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear()) {
                dateDiv.classList.add('current');
            }

            dateDiv.addEventListener('click', function () {
                const selected = document.querySelector('.date.selected');
                if (selected) {
                    selected.classList.remove('selected');
                }
                dateDiv.classList.add('selected');
            });

            datesElement.appendChild(dateDiv);
        }
    }

    prevMonthButton.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthButton.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});
