const Header = (props) => {
    return ( 
            <div>
                <h3>{props.number}</h3>
                <p>{props.text}</p>
            </div>
    );
}

export default Header;