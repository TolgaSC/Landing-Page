

const Main = (props) => {
    return ( 
        <section className="info">
            <div className="icons">
            <img src={props.image} alt="different-icons" />
            </div>
            <div className="headtext">
            <h4>{props.headtext}</h4>
            <p>{props.text}</p>
            </div>
        </section>
    );
}

export default Main;