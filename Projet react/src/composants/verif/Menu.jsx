import { NavLink , useNavigate } from "react-router-dom"

function Menu() {
    const navigate = useNavigate()
    return ( 
        <div className="bg-dark mb-3">
            <nav className="navbar navbar-expand navbar-dark container">
                <span className="navbar-brand fs-3">
                    Mini E-Commerce
                </span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className={({isActive}) => {
                            return isActive ? "nav-link active text-light" : "nav-link"
                        }}>Accueil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/panier" className={({isActive}) => {
                            return isActive ? "nav-link active text-light" : "nav-link"
                        }}>Panier</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink to="/bon-de-commande" className={({isActive}) => {
                            return isActive ? "nav-link active text-light" : "nav-link"
                        }}>Bon de Commande</NavLink>
                    </li> */}
                </ul>
            </nav>
        </div>
     );
}

export default Menu;