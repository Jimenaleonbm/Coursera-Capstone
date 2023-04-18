import { useState } from "react"
import fetchAPI from "../api/api"
import submitAPI from "../api/submit"
import { useNavigate } from "react-router-dom";

export default function BookingForm(){
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [initialTimes, setInitialTimes] = useState(["17:00","18:00","19:00","20:00","21:00","22:00"]);
    const navigate = useNavigate();

    const updateTimes = (date) => {
        setDate(date);
        setInitialTimes(fetchAPI(new Date(date)))
    }

    const submitForm = (e) => {
        e.preventDefault();
        if(submitAPI()){
            navigate("/booking-confirmation");
        }
    }

    return (
        <div className="booking-form">
            <h3>Book Now</h3>
            <form onSubmit={submitForm}>
                <label htmlFor="res-date">
                    Date:
                    <input type="date" id="res-date" value={date} onChange={(e) => updateTimes(e.target.value)}  />
                </label>

                <label htmlFor="res-time">
                    Time:
                    <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                        {initialTimes.map((i, index) => {
                            return <option key={'time' + index}>{i}</option>
                        })}
                    </select>
                </label>

                <label htmlFor="guests">
                    Number of guests:
                    <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
                </label>

                <label htmlFor="occasion">
                    Occasion:
                    <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </label>


                <button type="submit" className="main-btn">Submit</button>

                {/* <br />
                date: {date} <br />
                time: {time} <br />
                guests: {guests} <br />
                occasion: {occasion} <br /> */}

            </form>
        </div>
    )
}