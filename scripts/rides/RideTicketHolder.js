import { increaseCounter } from "../ticketCounter/TicketCounter.js"
let contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolder = () => {
    eventHub.addEventListener("rideTicketPurchased", customEvent => {
        if(customEvent.detail.ticketType === "ride") {
            increaseCounter()
            contentTarget.innerHTML += `
            <div class="person rider"></div>
            `
        }
    })
}
