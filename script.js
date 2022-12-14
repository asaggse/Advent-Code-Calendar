const calendar = document.querySelector('.calendar');
const modal = document.querySelector('#modal');
const modalContent = document.querySelector('.modal-content');
const modalButton = document.querySelector('.modal-button');

let openedIndexs = [];
console.log(openedIndexs);

/* Main */
const previouslyOpenedIndexes = localStorage.getItem('myList');
if (previouslyOpenedIndexes) {
   openedIndexs = JSON.parse(previouslyOpenedIndexes);
   console.log(openedIndexs);
}

for (let i = 0; i < source.length; i++) {
   const box = createBox(i);

   calendar.innerHTML += box;
}

const boxes = document.querySelectorAll('.box');
for (let i = 0; i < boxes.length; i++) {
   const box = boxes[i];

   box.addEventListener('click', function () {
      box.classList.add('box-opened');

      insertModalContent(i)
      openModal();

      addToOpenedIdexes(i);
   });
}

modalButton.addEventListener('click', function () {
   closeModal();
});

/* Functions */
function createBox(i) {
   const date = i + 1;
   const icon = source[i].icon;
   let classes = "box";

   if(openedIndexs.includes(i)){
      classes = "box box-opened";
   }

   return `
      <div class="${classes}">
         <img class="box-icon" src="images/icons/${icon}.png" alt="icon">
         <div class="box-date">${date}</div>
      </div>`;
}

function openModal() {
   modal.classList.remove('modal-hidden')
}

function closeModal() {
   modal.classList.add('modal-hidden')
}

function insertModalContent(i) {
   const surprise = source[i];

   if (surprise.type == "image") {
      modalContent.innerHTML = `<img src="${surprise.url}" alt="${surprise.title}">`;
   } else if (surprise.type == "text") {
      modalContent.innerHTML = `<p>${surprise.text}</p>`;

   }
}

function addToOpenedIdexes(i) {
   if (!openedIndexs.includes(i)) {
      openedIndexs.push(i);

      localStorage.setItem('myList', JSON.stringify(openedIndexs));
   }
   console.log(openedIndexs);
}