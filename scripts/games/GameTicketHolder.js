let contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolder = () => {
    eventHub.addEventListener("gameTicketPurchased", customEvent => {
        if(customEvent.detail.ticketType === "game") {
            contentTarget.innerHTML += `
            <div class="person player"></div>
            `
        }
    })
}
