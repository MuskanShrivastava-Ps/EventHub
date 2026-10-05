const data = events;
if (JSON.parse(localStorage.getItem('events'))==[]){
    localStorage.setItem('events',JSON.stringify(data));
}

const container = document.querySelector('#event-card-template');
const searchField = document.querySelector('#search-bar input');
const updatedData = JSON.parse(localStorage.getItem('events'));
const applybtn = document.querySelector('.apply');
const clearbtn = document.querySelector('.clear');
const page = document.querySelector('#main-container');
const back = document.querySelector('.back-btn');

console.log(updatedData);

render(container, updatedData);

searchField.addEventListener('input',()=>{
    const fieldValue = searchField.value.toLowerCase();

    const filtered = updatedData.filter(card=>card.name.toLowerCase().includes(fieldValue) ||
        card.organizer.toLowerCase().includes(fieldValue) ||
        card.venue.toLowerCase().includes(fieldValue)
);

    render(container,filtered);
});

applybtn.addEventListener('click',function(){
const category = document.querySelector('#category').value.toLowerCase();
const date = document.querySelector('#date').value;
const price = document.querySelector('#price').value;
const free = document.querySelector('#free').checked;
const paid = document.querySelector('#paid').checked;

const [min,max] = price ? price.split('-').map(Number) : [0,Infinity];

const filter = updatedData.filter(card=>{
    const cat = !category || card.category.toLowerCase()==category;
    const dat = !date || card.date>=date;
    const priceRange = card.ticketPrice>=min && card.ticketPrice<=max;
    const check = free === paid || (free && card.ticketPrice == 0) || (paid && card.ticketPrice>0);

    return cat && dat && priceRange && check;
});

    const type = document.querySelector('#sort-bar-select').value;
    sort(filter,type);

});

function sort(list,type){
    let sorted;
    if (type === "newest"){
        sorted = list.sort((a,b)=>{
            return new Date(a.date) - new Date(b.date);
        })
    }
    if (type === "oldest") {
        sorted = list.sort((a,b)=>{
            return new Date(b.date) - new Date(a.date);
        })
    }
    if (type === "lowest") {
        sorted = list.sort((a,b)=>{
            return a.ticketPrice - b.ticketPrice;
        })
    }
    if (type === "highest") {
        sorted = list.sort((a,b)=>{
            return b.ticketPrice - a.ticketPrice;
        })
    }
    if (type === "alphabetical") {
        sorted = list.sort((a,b)=>{
            return a.name.localeCompare(b.name);
        })
    }

    render(container,sorted);
}

clearbtn.addEventListener('click',function(){
    document.querySelector('#category').value='';
    document.querySelector('#date').value='';
    document.querySelector('#price').value='';
    render(container,updatedData)
});

page.addEventListener('click',function(event){
    const card = event.target.closest('.event-card');
    if(!card){
        return;
    }
    const valid = event.target.closest('.book-btn');
    const cardId = card.dataset.eventId;

    if(valid){
        window.location.href = `ticket.html?id=${cardId}`;
    }
    else{
        window.location.href = `ticketDetails.html?id=${cardId}`;
    } 
});

back.addEventListener('click',function(){
    window.location.href = 'index.html';
});

