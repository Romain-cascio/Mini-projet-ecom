import { createContext , useState } from "react"
import React from "react";
import { useContext } from "react";
import { CardContext } from "./CardContext";

export const formContext = React.createContext();

export function FormProvider({children}) {
    const [formData, setFormData] = useState({ nom : "", email : "", adresse: "", commentaire :""});
    const [formDataCopy, setFormDataCopy] = useState({nom : "", email : "", adresse: "", commentaire :""});
    const [submitted, setSubmitted] = useState(false);
    const { cart, removeFromCart } = useContext(CardContext);

 /*    function handleChange(event) {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
      setFormDataCopy({...formData, [name]: value});
    } */

    function handleSubmit() {
      /* event.preventDefault();
        setSubmitted(true);
      setFormData({ name: '', email: '', address: '', comments: '' }); */
      console.log("handlesubmit");
    }
  
    return (
      <formContext.Provider value={{ formData, formDataCopy, handleSubmit, submitted }}>
        {children}
      </formContext.Provider>
    );
  }
  export default FormProvider ; 