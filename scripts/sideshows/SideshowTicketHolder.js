import { increaseCounter } from "../ticketCounter/TicketCounter.js"

let contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolder = () => {
    eventHub.addEventListener("sideshowTicketPurchased", customEvent => {
        if(customEvent.detail.ticketType === "sideshow") {
            increaseCounter()
            contentTarget.innerHTML += `
            <div class="person gawker"></div>
            `
        }
    })
}
