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

    if(clickEvent.target.id === "sideshowTicket") {
        ticketPuchasedEvent = new CustomEvent("sideshowTicketPurchased", {
            detail: {
                ticketType: "sideshow"
            }
        })
    }

    if(clickEvent.target.id === "fullPackageTicket") {
    ticketPuchasedEvent = new CustomEvent("fullPackageTicketPurchased", {
        detail: {
            ticketType: "package"
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
            <button id="sideshowTicket" >Sideshow Ticket</button>
            <button id="fullPackageTicket" >Full Package Ticket</button>
        </div>
    `
}
