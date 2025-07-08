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

// Render calendar using DOM methods for performance and correct class assignment
calendar.innerHTML = '';
for (let i = 0; i < source.length; i++) {
   const boxElem = document.createElement('div');
   boxElem.className = 'box';
   if (openedIndexs.includes(i)) {
      boxElem.classList.add('box-opened');
   }
   const icon = document.createElement('img');
   icon.className = 'box-icon';
   icon.src = `images/icons/${source[i].icon}.png`;
   icon.alt = 'icon';
   const dateDiv = document.createElement('div');
   dateDiv.className = 'box-date';
   dateDiv.textContent = i + 1;
   boxElem.appendChild(icon);
   boxElem.appendChild(dateDiv);
   calendar.appendChild(boxElem);
}

const boxes = document.querySelectorAll('.box');
for (let i = 0; i < boxes.length; i++) {
   const box = boxes[i];
   box.addEventListener('click', function () {
      box.classList.add('box-opened');
      insertModalContent(i);
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
   // Clear previous content
   modalContent.innerHTML = '';
   if (surprise.type == "image") {
      const img = document.createElement('img');
      img.src = surprise.url;
      img.alt = surprise.title;
      modalContent.appendChild(img);
   } else if (surprise.type == "text") {
      const p = document.createElement('p');
      p.textContent = surprise.text;
      modalContent.appendChild(p);
   }
}

function addToOpenedIdexes(i) {
   if (!openedIndexs.includes(i)) {
      openedIndexs.push(i);

      localStorage.setItem('myList', JSON.stringify(openedIndexs));
   }
   console.log(openedIndexs);
}