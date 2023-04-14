import DishItem from "./DishItem"
import { Link } from "react-router-dom"
export default function HomePage(){
    const specials = [
        {
            img: require("../assets/img/baguette.png"),
            title: "Classic Baguette",
            description: "French bread shaped like a long, thin loaf with a crisp and crunchy crust, filled with a variety of fresh vegetables."
        },
        {
            img: require("../assets/img/toast.png"),
            title: "Spring Toast",
            description: "French bread shaped like a long, thin loaf with a crisp and crunchy crust, filled with a variety of fresh vegetables."
        },
        {
            img: require("../assets/img/salad.png"),
            title: "Greek Salad",
            description: "French bread shaped like a long, thin loaf with a crisp and crunchy crust, filled with a variety of fresh vegetables."
        }
    ]

    const menu = [
        {
            img: require("../assets/img/pasta.png"),
            title: "Garlic Pasta",
            description: "French bread shaped like a long, thin loaf with a crisp and crunchy crust, filled with a variety of fresh vegetables."
        },
        {
            img: require("../assets/img/fish.png"),
            title: "Roasted Salmon",
            description: "French bread shaped like a long, thin loaf with a crisp and crunchy crust, filled with a variety of fresh vegetables."
        },
        {
            img: require("../assets/img/baguette.png"),
            title: "Classic Baguette",
            description: "French bread shaped like a long, thin loaf with a crisp and crunchy crust, filled with a variety of fresh vegetables."
        }
    ]
    return (
        <>
            <section className="reserve-table-section">
                <h2>Reserve a Table</h2>
                <Link to="/booking" className="main-btn">Book Now</Link>
            </section>
            <section>
                <h2>Specials</h2>
                <div className="dish-container">
                    {
                        specials.map((i, index) => {
                            return(<DishItem key={i.title + index} img={i.img} title={i.title} description={i.description} />)
                        })
                    }
                </div>
            </section>
            <section>
                <h2>Menu</h2>
                <div className="dish-container">
                    {
                        menu.map((i, index) => {
                            return(<DishItem key={i.title + index} img={i.img} title={i.title} description={i.description} />)
                        })
                    }
                </div>
            </section>
        </>
    )
}