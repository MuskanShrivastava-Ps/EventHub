const totalevents = JSON.parse(localStorage.getItem('events')) || [];

function getDate(){
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth()+1).padStart(2,'0');
    const day = String(date.getDay()).padStart(2,'0');

    return `${day}-${month}-${year}`;
}

const todaysevents = totalevents.filter((card)=>card.date===getDate());
const upcommingevents = totalevents.filter((card)=>card.date>getDate());
const totalbookings = JSON.parse(localStorage.getItem('booking')) || [];

document.querySelector('#total-event').innerHTML=`${totalevents.length}`;
document.querySelector('#upcoming-event').innerHTML=`${todaysevents.length}`;
document.querySelector('#total-booking').innerHTML=`${upcommingevents.length}`;
document.querySelector('#todays-event').innerHTML=`${totalbookings.length}`;

