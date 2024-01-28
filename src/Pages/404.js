import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div >
            <h2>Oops! Page not found! </h2>
            <p>Here are some helpful links:</p>
            <Link to='/'>Home</Link><br></br>
            <Link to='/favorites'>Favorites</Link>
        </div>
    )
}
export default NotFound;