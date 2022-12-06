const calendar = document.querySelector('.calendar');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalButton = document.querySelector('.modal-button');

for (let i = 0; i < source.length; i++) {
   const box = createBox(i);

   calendar.innerHTML += box;
}

/* Functions */
function createBox(i) {
   const date = i + 1;
   const icon = source[i].icon;

   return `
      <div class="box">
         <img class="box-icon" src="images/icons/${icon}.png" alt="icon">
         <div class="box-date">${date}</div>
      </div>`;
}