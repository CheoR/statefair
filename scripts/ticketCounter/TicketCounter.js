let _counter = 0

const customersEle = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")

export const TicketCounter = () => {
 customersEle.innerHTML = `
  Total tickets purchased: ${_counter}
 `
}

eventHub.addEventListener("click", clickEvent => {
 _counter++
 TicketCounter()
}) // eventHub - click