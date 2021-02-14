import { increaseCounter } from "../ticketCounter/TicketCounter.js"

let contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolder = () => {
    eventHub.addEventListener("gameTicketPurchased", customEvent => {
        increaseCounter()
        if(customEvent.detail.ticketType === "game") {
            contentTarget.innerHTML += `
            <div class="person player"></div>
            `
        }
    })
}
