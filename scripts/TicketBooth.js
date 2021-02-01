const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {

    if(clickEvent.target.id === "rideTicket") {
        // const rideEvent = new CustomEvent("rideTicketPurchased")
        // eventHub.dispatchEvent(rideEvent)

        eventHub.dispatchEvent(new CustomEvent("rideTicketPurchased"))
    }
})


export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}
