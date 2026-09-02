export const myTickets = [];

export function clearTickets() {
    myTickets.length = 0;
}

export function removeTicket(index) {
    myTickets.splice(index, 1);
}