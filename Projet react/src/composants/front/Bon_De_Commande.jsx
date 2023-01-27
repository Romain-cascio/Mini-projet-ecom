import { useContext } from "react";
import { CardContext } from "../context/CardContext";
import { formContext } from "../context/formContext";


const Bondecommande = () => {
    const { cart } = useContext(CardContext);
    const { formData, handleChange, handleSubmit, formDataCopy } = useContext(formContext);

    return ( <>
    <h1 className="text-success">Bon de commande n°</h1>
    <p>Merci pour votre commande !</p>
    <table className="table table-striped">
        <thead>
            <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Nom</th>
                <th scope='col'>Prix</th>
            </tr>
        </thead>
        <tbody>
        {cart.map(article => {
          return (
          <tr key={article.id}>
            <th scope="row">{article.id}</th>
            <td>{article.titre}</td>
            <td>{ new Intl.NumberFormat("fr-FR", { style: 'currency', currency: 'EUR' }).format(article.prix)}</td>
          </tr>  
        )})}
        </tbody>
    </table>
    <hr />
    <h2>Détail de livraison</h2>
    <ul>
        <li>Nom : {formDataCopy.nom} </li>
        <li>Email : {formDataCopy.email}</li>
        <li>Adresse : {formDataCopy.adresse}</li>
        <li>Commentaire : {formDataCopy.commentaire}</li>
    </ul>
    </> );
}
 
export default Bondecommande;