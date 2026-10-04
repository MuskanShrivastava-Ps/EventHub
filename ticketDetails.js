const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const data = JSON.parse(localStorage.getItem('events'));
const container = document.querySelector('.event-details-card');
const btn = document.querySelector('.back-btn');

function createEventCards(value){
   return `<h1 class="event-title">
                ${value.name}
            </h1>

            <section class="detail-section">
                <h2>About the Event</h2>
                <p class="event-description">
                    ${value.description}
                </p>
            </section>

            <section class="detail-section">
                <h2>Schedule</h2>

                <p>
                    <span class="label">Date:</span>
                    ${value.date}
                </p>

                <p>
                    <span class="label">Time:</span>
                    ${value.time}
                </p>
            </section>

            <section class="detail-section">
                <h2>Speakers</h2>

                <ul class="speakers">
                    ${value.speakers.map(item => `<li>${item.name} - ${item.role}</li>`).join('')}
                </ul>
            </section>

            <section class="detail-section">
                <h2>Venue</h2>
                <p>${value.venue}</p>
            </section>

            <section class="detail-section event-info">

                <div>
                    <span class="label">Available Seats:</span>
                    <span>${value.availableSeats}</span>
                </div>

                <div>
                    <span class="label">Ticket Price:</span>
                    <span>${value.ticketPrice}</span>
                </div>

            </section>

            <section class="detail-section">

                <h2>Organizer Details</h2>
                
                <p>
                    <span class="label">Organizer:</span>
                    ${value.organizerDetails.name}
                </p>

                <p>
                    <span class="label">Email:</span>
                    ${value.organizerDetails.email}
                </p>

                <p>
                    <span class="label">Phone:</span>
                    ${value.organizerDetails.phone}
                </p>

            </section>`
}

const card = data.find(element=>element.bookingId===id);
container.innerHTML = createEventCards(card);
btn.addEventListener('click',()=>{
    window.history.back();
});
