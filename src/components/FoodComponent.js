const FoodComponent = (props)=>{

    const {foodName,image_url} = props

    return(
        <div className="single-food">
            <img src={image_url} alt={foodName}/>
            <h2>{foodName}</h2>
        </div>
    )
}

export default FoodComponent