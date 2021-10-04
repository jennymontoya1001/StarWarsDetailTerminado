
const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();


import {data} from '../data/data.js';


const loadData = data => {

    data.forEach(personaje => {
        const {id, name, image } = personaje;
        templateCard.querySelector('h5').textContent = name;
        templateCard.querySelector('img').setAttribute('src', image);
        templateCard.querySelector('.btn-dark').dataset.id = id;
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
        
    });

    items.appendChild(fragment);
}


document.addEventListener('DOMContentLoaded', loadData(data))

items.addEventListener('click', (e) => {

 
          if(e.target.classList.contains('btn-dark')){
              console.log(e.target.dataset.id)
              const id = e.target.dataset.id
              const per = data.find(p => p.id == id)
              console.log(`el personaje ${JSON.stringify(per)}`)
              localStorage.setItem('Detail',JSON.stringify(per))
              window.location.href = 'detail.html';
          }
})