import { increaseCounter } from "../ticketCounter/TicketCounter.js"

let contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolder = () => {
 eventHub.addEventListener("foodTicketPurchased", customEvent => {

  increaseCounter()
  if(customEvent.detail.ticketType === "food") {
   contentTarget.innerHTML += `
    <div class="person eater"></div>
   `
  }
 })
}
