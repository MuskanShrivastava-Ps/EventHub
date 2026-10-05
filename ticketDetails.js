const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const data = JSON.parse(localStorage.getItem('events'));
const container = document.querySelector('.event-details-card');
const btn = document.querySelector('.back-btn');

const card = data.find(element=>element.bookingId===id);

function render(){
    createEventCards(container,card);
}

render();

btn.addEventListener('click',()=>{
    window.history.back();
});

