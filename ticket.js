const data = JSON.parse(localStorage.getItem('events')) || [];
const backbtn = document.querySelector('.back-btn');
const form = document.querySelector('#booking-form');


function getcard(datavalue, id){
    return datavalue.find((ticket) => ticket.bookingId === id);
}

form.addEventListener('submit',function(event){
    event.preventDefault();
    const fullname = document.querySelector('#full-name');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const ticket = document.querySelector('#tickets');
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (!id) {
        return;
    }
    let singleCard = getcard(data, id);

    if (!singleCard) {
        return;
    }

    const booking = JSON.parse(localStorage.getItem('booking')) || [];

    const bookcard = {
        eventName: singleCard.name,
        id: id,
        uniqueId: Date.now(),
        date: singleCard.date,
        ticketStatus: "confirmed",
        fullName: fullname.value,
        email: email.value,
        phone: phone.value,
        tickets: ticket.value,
    }

    booking.push(bookcard);
    localStorage.setItem('booking', JSON.stringify(booking));

    const eventdata = JSON.parse(localStorage.getItem('events'));
    const findcard = eventdata.find((card) => card.bookingId===id);

    if(!findcard){
        return;
    }

    findcard.availableSeats = findcard.availableSeats - ticket.value;
    localStorage.setItem('events',JSON.stringify(eventdata));

    form.reset();
    console.log("true");
});

backbtn.addEventListener('click',function(){
    window.history.back();
});

