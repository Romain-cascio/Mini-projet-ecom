import {useRef} from "react"
import { useContext } from "react";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import React from "react";
import { usePop } from "../reducer/Error";
import { CardContext} from "../context/CardContext"
import { authVerif } from "./auth/auth";
import  Profil_form  from "./form/Profil_form"


const Panier = () => {
    

    const { cart, RemoveCart } = useContext(CardContext);

    const [alerte , setAlerte , getError] = usePop(authVerif)

    const navigate = useNavigate();

    const handleFocus = () => {
        setAlerte({});
    }
    
    
    const useEffect = (values) => {
      console.log("Useeffect", values);
      if (values){

        navigate('/bon-de-commande');
      }
          
      } 

      return ( <>
      <h1>Votre Panier</h1>
    <table className="table table-striped">
        <thead>
            <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Nom</th>
                <th scope='col'>Prix</th>
                <th scope='col'>Action</th>
            </tr>
        </thead>
        <tbody>
         {cart.map(article => {
          return (
          <tr key={article.id}>
            <th scope="row">{article.id}</th>
            <td>{article.titre}</td>
            <td>{ new Intl.NumberFormat("fr-FR", { style: 'currency', currency: 'EUR' }).format(article.prix)}</td>
            <td>
                <button className="btn border-danger text-danger" onClick={ () => RemoveCart(article)}>Supprimer</button>
            </td>
          </tr>  
        )})}
        </tbody>
    </table>
    <hr/>

            {<Profil_form
            submitOnSuccessValidate={useEffect}
            />}
</>);
}

export default Panier;
