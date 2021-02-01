let contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolder = () => {
    eventHub.addEventListener("rideTicketPurchased", customEvent => {
        if(customEvent.detail.ticketType === "ride") {
            contentTarget.innerHTML += `
            <div class="person rider"></div>
            `
        }
    })
}
