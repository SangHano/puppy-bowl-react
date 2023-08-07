import { Link } from "react-router-dom";

const NavBar = ()=>{
    return( 
        <>
            <Link id="homelink" to="/">Home</Link>
            <Link id= "playelistlink" to="/playerlist">List of Players</Link>
        </>
    )
}
export default NavBar