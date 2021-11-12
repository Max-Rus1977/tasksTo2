let allForms = document.forms;

for (let i = 0; i < allForms.length; i++) {
  allForms[i].addEventListener('click', cancelingReboot);
}

function cancelingReboot(event) {
  event.preventDefault();
}

const allContainers = document.querySelectorAll('.container');
const btnPrevTask = document.querySelector('#btn-task4');
const btnNextTask = document.querySelector('#btn-task5');

function getNextTask() {
  btnPrevTask.classList.remove('non-active-js');
  btnPrevTask.disabled = false;

  for (let i = 0; i < allContainers.length; i++) {

    if (allContainers[i].classList.contains('visible-js')) {
      allContainers[i].classList.remove('visible-js');
      allContainers[i + 1].classList.add('visible-js');
      if (i + 1 === allContainers.length - 1) {
        btnNextTask.classList.add('non-active-js');
        btnNextTask.disabled = true;
      }
      break
    }
  }
}

function getPrevTask() {
  btnNextTask.classList.remove('non-active-js');
  btnNextTask.disabled = false;

  for (let i = 0; i < allContainers.length; i++) {

    if (allContainers[i].classList.contains('visible-js')) {
      allContainers[i].classList.remove('visible-js');
      allContainers[i - 1].classList.add('visible-js');
      if (i - 1 === 0) {
        btnPrevTask.classList.add('non-active-js');
        btnPrevTask.disabled = true;
      }
      break
    }
  }
}

/* __Задача 1__ */
btnPrevTask.addEventListener('click', getPrevTask)
btnNextTask.addEventListener('click', getNextTask)

const btnTask1 = document.querySelector('#btn-task1');

function alertUry() {
  alert('уря')
}

btnTask1.addEventListener('click', alertUry);

/* __Задача 2__ */
const inputTask2 = document.querySelector('#input-task2');

function setBlur() {
  alert('ждем возвращения')
}

inputTask2.addEventListener('blur', setBlur);

/* __Задача 3__ */
const textInput = document.querySelector('.text-input');
const btnPublish = document.querySelector('#btn-task3');

function getValueTextInput() {
  if (textInput.value === '') {
    textInput.classList.add('err-input-js');
    alert('Заполните поле')
  }
  if (textInput.value !== '') {
    textInput.classList.remove('err-input-js');
    btnPublish.textContent = textInput.value;
    textInput.value = '';
  }

}

btnPublish.addEventListener('click', getValueTextInput)