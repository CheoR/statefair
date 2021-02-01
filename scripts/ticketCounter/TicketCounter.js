let _counter = 0

const customersEle = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")

export const TicketCounter = () => {
 customersEle.innerHTML = `
  Total tickets purchased: ${_counter}
 `
}

export const increaseCounter = () => {
 _counter++
 TicketCounter()
}

export const decreaseCounter = () => {
 _counter -= 1
 TicketCounter()
}
