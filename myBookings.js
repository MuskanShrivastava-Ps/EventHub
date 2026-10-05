const btn = document.querySelector('.back-btn');
const container = document.querySelector('.bookings-container');
const bookings = JSON.parse(localStorage.getItem('booking'))|| [];
const detail = document.querySelector('#details');
const page = document.querySelector('.bookings-container');

btn.addEventListener('click',()=>{
    window.history.back();
});


function createbookings(data){
    const cancelled = data.ticketStatus;
    return `<div class="booking-card" data-id="${data.id}" data-unique-id="${data.uniqueId}" data-tickets=${data.tickets}">
                <h2>${data.eventName}</h2>
                <p>Booking ID:${data.id}</p>
                <p>Date: ${data.date}</p>
                <p>Tickets: ${data.tickets}</p>
                <p>Status: ${data.ticketStatus}</p>
                <div class="user-details">
                    <p>Name:${data.fullName}</p>
                    <p>Email: ${data.email}</p>
                    <p>Phone: ${data.phone}</p>
                </div>
                <div class="booking-actions"> <button class="details">View Details</button> 
                ${cancelled === 'cancelled' ? '' : `<button class="edit">Edit</button> <button class="cancel">Cancel</button>`}  
                </div>
            </div>`
}



function renderBooking(bookings,container){
    container.innerHTML = bookings.length==0 ? `<p class="mode">No Bookings Found</p>` : bookings.map(createbookings).join('');
}

renderBooking(bookings,container);

page.addEventListener('click',(event)=>{
    const card = event.target.closest('.booking-card');
    if(!card){
        return;
    }
    const detailbtn = event.target.closest('.details');

    if(!detailbtn){
        return;
    }

    window.location.href = `ticketDetails.html?id=${card.dataset.id}`;
});



page.addEventListener('click',(event)=>{
    const iscard = event.target.closest('.booking-card');
    if(!iscard){
        console.log("Found!");
        return;
    }
    
    const cancelbtn = event.target.closest('.cancel');

    if(!cancelbtn){
        console.log("cancel");
        return;
    }


    const cardid = iscard.dataset.uniqueId;

    const events = JSON.parse(localStorage.getItem('booking')) || [];

    const singlecard = events.find((card)=>card.uniqueId===Number(cardid));  

    if(!singlecard){
        console.log("card");
        return;
    }

    singlecard.ticketStatus = 'cancelled';

    localStorage.setItem('booking',JSON.stringify(events));
    renderBooking(events, container);

    console.log("render");

    const eventdata = JSON.parse(localStorage.getItem('events'));
    const findcard = eventdata.find((card) => card.bookingId === iscard.dataset.id);

    if (!findcard){
        return;
    }

    findcard.availableSeats = findcard.availableSeats + Number(singlecard.tickets);
    localStorage.setItem('events', JSON.stringify(eventdata));
    console.log("event");
});


let savedId;
const overlay = document.querySelector('.edit-overlay');
const closebtn = document.querySelector('.close-btn');

page.addEventListener('click',(event)=>{
    const editcard = event.target.closest('.booking-card');
    if(!editcard){
        return;
    }
    const editbtn = event.target.closest('.edit');
    if(!editbtn){
        return;
    }
    const id = editcard.dataset.uniqueId;
    savedId = Number(id);
    const book = JSON.parse(localStorage.getItem('booking')) || [];
    const cardfind = book.find((card)=>card.uniqueId===Number(id));

    if(!cardfind){
        return;
    }

    document.querySelector('#edit-name').value = cardfind.fullName;
    document.querySelector('#edit-phone').value = cardfind.phone;
    document.querySelector('#edit-tickets').value = cardfind.tickets;
    document.querySelector('#edit-email').value = cardfind.email;

    overlay.classList.add('active');
});


closebtn.addEventListener('click',()=>{
    overlay.classList.remove('active');
});

const form = document.querySelector('#edit-form');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const name = document.querySelector('#edit-name').value;
    const phone = document.querySelector('#edit-phone').value;
    const ticket = document.querySelector('#edit-tickets').value;
    const email = document.querySelector('#edit-email').value;

    const book2 = JSON.parse(localStorage.getItem('booking')) || [];
    const cardfind2 = book2.find((card) => card.uniqueId === savedId);

    if(!cardfind2){
        return;
    }

    cardfind2.fullName = name;
    cardfind2.phone = phone;
    cardfind2.email = email;
    cardfind2.tickets = ticket;

    localStorage.setItem('booking',JSON.stringify(book2));
    
    overlay.classList.remove('active');
    renderBooking(book2,container);
});