export default function DishItem({img, title, description}){
    return (
        <div className="dish-item">
            <img src={img} alt={title}/>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}