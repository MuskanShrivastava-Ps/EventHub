
function createEventCard(card){
    return `<article class="event-card" data-event-id="${card.bookingId}">

        <img class="event-image" src="${card.image}" alt="Image">

            <div class="event-body">

                <h3 class="event-title">${card.name}</h3>

                <div class="event-meta">
                    <p class="event-organizer">
                        <span class="label">Organizer:</span>
                        <span class="value organizer-name">${card.organizer}</span>
                    </p>
                    <p class="event-category-row">
                        <span class="label">Category:</span>
                        <span class="value event-category">${card.category}</span>
                    </p>
                </div>

                <ul class="event-details">
                    <li class="event-date">
                        <span class="icon">📅</span>
                        <span class="label">Date:</span>
                        <span class="value event-date-value">${card.date}</span>
                    </li>
                    <li class="event-time">
                        <span class="icon">🕐</span>
                        <span class="label">Time:</span>
                        <span class="value event-time-value">${card.time}</span>
                    </li>
                    <li class="event-venue">
                        <span class="icon">📍</span>
                        <span class="label">Venue:</span>
                        <span class="value event-venue-value">${card.venue}</span>
                    </li>
                </ul>

                <div class="event-footer">
                    <div class="event-info">
                        <p class="event-seats">
                            <span class="label">Available Seats:</span>
                            <span class="value seats-count">${card.availableSeats}</span>
                        </p>
                        <p class="event-price">
                            <span class="label">Ticket Price:</span>
                            <span class="currency">₹</span>
                            <span class="value price-amount">${card.ticketPrice}</span>
                        </p>
                    </div>
                    <div><button class="book-btn" type="button">Book Now</button></div>
                </div>

            </div>
    </article>`
}

function render(container,data){
    container.innerHTML = data.length==0 ? `<p class="mode">Events Not Found</p>` : data.map(createEventCard).join('');
}

