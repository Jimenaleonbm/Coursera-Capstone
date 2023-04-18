import { render, fireEvent, screen } from "@testing-library/react"
import BookingPage from "./Booking"
import BookingForm from "./BookingForm"

test("Test Title", () => {
    // render the component
    render(<BookingPage />)
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})
