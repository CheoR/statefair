const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {

    let ticketPuchasedEvent

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

    if(clickEvent.target.id === "gameTicket") {
        ticketPuchasedEvent = new CustomEvent("gameTicketPurchased", {
            detail: {
                ticketType: "game"
            }
        })
    }

    if(ticketPuchasedEvent){
        eventHub.dispatchEvent(ticketPuchasedEvent)
    }
})


export const TicketBooth = () => {
    contentTarget.innerHTML += `
        <div class="ticketBooth attraction">
            <button id="rideTicket" >Ride Ticket</button>
            <button id="foodTicket" >Food Ticket</button>
            <button id="gameTicket" >Game Ticket</button>
        </div>
    `
}
