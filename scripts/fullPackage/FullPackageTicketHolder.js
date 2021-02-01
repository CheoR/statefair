import { TicketBooth } from "../TicketBooth.js"
import { increaseCounter, decreaseCounter } from "../ticketCounter/TicketCounter.js"

const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolder = () => {
 eventHub.addEventListener("fullPackageTicketPurchased", customEvent => {
  if(customEvent.detail.ticketType === "package") {
   increaseCounter()
   
   const ticketBoothBtns = document.querySelectorAll(".ticketBooth button")
   
   // So each attraction adds one more ticket
   ticketBoothBtns.forEach(( btn ) => {
    if(btn.id !== "fullPackageTicket") {
     btn.click()
     decreaseCounter()
    }
   }) // end ticketBoothBtns

   // Sigify last ticket was bought as a package ticket
   const attractions = document.querySelectorAll(".attractions .attraction")
   
   attractions.forEach(( attraction ) => {
    const lastPerson = attraction.querySelector(".person:last-child")

    lastPerson.classList.add("bigSpender")
   })
  } // end if
 })

}