import { createContext, useState } from "react";

export const TicketContext = createContext();

export function TicketProvider({ children }) {
    const [tickets, setTickets] = useState([]);

    function addTicket(ticket) {
        setTickets((prev) => [...prev, ticket]);
    }

    function removeTicket(index) {
        setTickets((prev) =>
            prev.filter((_, i) => i !== index)
        );
    }

    function clearTickets() {
        setTickets([]);
    }

    return (
        <TicketContext.Provider
            value={{
                tickets,
                addTicket,
                removeTicket,
                clearTickets,
            }}
        >
            {children}
        </TicketContext.Provider>
    );
}