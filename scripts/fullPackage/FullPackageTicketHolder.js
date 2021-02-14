const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolder = () => {
 eventHub.addEventListener("fullPackageTicketPurchased", customEvent => {
  if(customEvent.detail.ticketType === "package") {
   const attractions = document.getElementsByClassName("people")
   for(const attraction of attractions) {
    attraction.innerHTML += `<div class="person bigSpender"></div>`
   } // attractions.forEach
  } // end if
 }) // eventHub - fullPackageTicketPurchased
} // FullPackageTicketHolder