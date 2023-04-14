export default function Main(){
    return (
        <main>
            <section>
                <h2>Fruit Cake</h2>
                <button>Order Now</button>
            </section>
            <section>
                <h2>Specials</h2>
                <div>
                    <div>
                        <img src={require("../assets/img/baguette.png")} alt="Classic Baguette"/>
                        <h4>Classic Baguette</h4>
                        <p>French bread shaped like a long, thin loaf with a crisp and crunchy crust, filled with a variety of fresh vegetables.</p>
                    </div>
                    <div>
                        <img src={require("../assets/img/toast.png")} alt="Spring Toast"/>
                        <h4>Spring Toast</h4>
                        <p>French bread shaped like a long, thin loaf with a crisp and crunchy crust, filled with a variety of fresh vegetables.</p>
                    </div>
                    <div>
                        <img src={require("../assets/img/salad.png")} alt="Greek Salad"/>
                        <h4>Greek Salad</h4>
                        <p>French bread shaped like a long, thin loaf with a crisp and crunchy crust, filled with a variety of fresh vegetables.</p>
                    </div>
                </div>
            </section>
            <section>
                <h2>Reserve a Table</h2>
                <button>Book Now</button>
            </section>
            <section>
                <h2>Menu</h2>
                <div>
                    <div>
                        <img src={require("../assets/img/pasta.png")} alt="Garlic Pasta"/>
                        <h4>Garlic Pasta</h4>
                        <p>French bread shaped like a long, thin loaf with a crisp and crunchy crust, filled with a variety of fresh vegetables.</p>
                    </div>
                    <div>
                        <img src={require("../assets/img/fish.png")} alt="Roasted Salmon"/>
                        <h4>Roasted Salmon</h4>
                        <p>French bread shaped like a long, thin loaf with a crisp and crunchy crust, filled with a variety of fresh vegetables.</p>
                    </div>
                    <div>
                        <img src={require("../assets/img/baguette.png")} alt="Classic Baguette"/>
                        <h4>Classic Baguette</h4>
                        <p>French bread shaped like a long, thin loaf with a crisp and crunchy crust, filled with a variety of fresh vegetables.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}