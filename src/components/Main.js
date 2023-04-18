import { Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import BookingPage from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";

export default function Main(){
    return (
        <main>
            <Components />
        </main>
    )
}

function Components(){
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
            <Route path="/booking-confirmation" element={<ConfirmedBooking />}></Route>
        </Routes>
    )
}