const Food = (props) => {
    return ( 
        <div className="head-div">
            <div className="images">
            <img src={props.image} alt="food-images" />
            </div>
            <h4>{props.headline}</h4>
            <p>{props.info}</p>
            <p>{props.price}</p>
        </div>
    );
}

export default Food;