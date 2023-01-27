import { useContext } from "react";
import { Use_Article } from "../reducer/Use_Article";
import { CardContext } from "../context/CardContext";
import { formContext } from "../context/formContext";


const Home = () => {
    
    const [articles] = Use_Article()
    const { cart, AddCart } = useContext(CardContext);
    const {submitted, setSubmitted} = useContext(formContext);

    return ( <div className="row">
    <h1>Découvrez nos articles !</h1>
    {articles.map(article => {
        return <article className="col-4 mb-4"  key={article.id}>
            <div className="card">
                <h2 className="card-header">{article.titre}</h2>
                <img src={article.img} alt="" className="img-fluid txt-center" />
                <div className="card-body">
                    {article.contenu }
                </div>
            <footer className="card-footer d-flex justify-content-between" >
                    <button className="btn border-primary text-primary m-1 " onClick={() => AddCart(article)}>
                        Ajouter au panier
                    </button>
                   
                    <p className="m-1 fw-bold fs-4">
                        { new Intl.NumberFormat("fr-FR", { style: 'currency', currency: 'EUR' }).format(article.prix)}
                    </p>
                </footer>
            </div>
        </article>
    })}
</div> );



}
export default Home;
