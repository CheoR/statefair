const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {

    let ticketPuchasedEvent

    console.log("click event")
    console.log(clickEvent.target.id)

    if(clickEvent.target.id === "rideTicket") {
        ticketPuchasedEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                ticketType: "ride"
            }
        })
    }

    if(clickEvent.target.id === "foodTicket") {
        ticketPuchasedEvent = new CustomEvent("foodTicketPurchased", {
            detail: {
                ticketType: "food"
            }
        })
    }

    if(ticketPuchasedEvent){
        eventHub.dispatchEvent(ticketPuchasedEvent)
    }
})


export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="foodTicket">Food Ticket</button>
        </div>
    `
}
