let contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolder = () => {
 eventHub.addEventListener("foodTicketPurchased", customEvent => {
  console.log("in food event hub")
  if(customEvent.detail.ticketType === "food") {
   console.log("food ticket bought")
   contentTarget.innerHTML += `
    <div class="person eater"></div>
   `
  }
 })
}
