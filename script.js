
const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

const createCalendar = () => {
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.getElementById('days');

  decemberDaysList.forEach(day => {
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = day;
    dayListItem.classList.add('day');

    if ([24, 25, 31].includes(day)) {
      dayListItem.classList.add('holiday');
    }

    if ([4, 11, 18, 25].includes(day)) {
      dayListItem.classList.add('friday');
    }

    daysList.appendChild(dayListItem);
  });
}

createCalendar();

const btnHoliday = document.getElementById('btn-holiday');

btnHoliday.addEventListener('click', function() {
  const holidays = document.querySelectorAll('.holiday');
  holidays.forEach(day => {
    if (day.style.backgroundColor !== 'red') {
      day.style.backgroundColor = 'red';
    } else {
      day.style.backgroundColor = 'rgb(238, 238, 238)';
    }
  });
});

const btnFriday = document.getElementById('btn-friday');

btnFriday.addEventListener('click', () => {
  const fridays = document.querySelectorAll('.friday');
  fridays.forEach((day, index) => {
    if (day.innerHTML !== 'Sextou!') {
      day.innerHTML = 'Sextou!';
    } else {
      day.innerHTML = index + 1;
    }
  });
});

const days = document.querySelectorAll('.day');

days.forEach(day => {
  day.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px';
  });

  day.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
  });
});

const tasks = document.querySelectorAll('.task');

tasks.forEach(task => {
  task.addEventListener('click', ()=> {
    if (task.classList.contains('selected')) {
      task.classList.remove('selected');
    } else {
      tasks.forEach(task => task.classList.remove('selected'));
      task.classList.add('selected');
    }
  });
});

const calendarDays = document.querySelectorAll('.day');
calendarDays.forEach(day => {
  day.addEventListener('click', function() {
    const selectedTask = document.querySelector('.task.selected');
    if (selectedTask) {
      this.style.color = window.getComputedStyle(selectedTask).getPropertyValue('background-color');
      this.addEventListener('click', function() {
        this.style.color = 'rgb(119, 119, 119)';
      }, { once: true });
    }
  });
});

const selectedTasks = document.querySelectorAll('.task.selected');

selectedTasks.forEach(task => {
  task.addEventListener('click', ()=> {
    task.classList.remove('selected');
  });
});
