import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Panier from './composants/front/Panier';
import Accueil from './composants/front/Accueil';
import BonDeCommande from './composants/front/Bon_De_Commande';
import NotFound from './composants/front/NotFound';
import { CardContextProvider } from "./composants/context/CardContext";
import { FormProvider } from "./composants/context/formContext";
import {  BrowserRouter , Routes , Route } from "react-router-dom"
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
<CardContextProvider>
<Provider store={store}>
<FormProvider>
<BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Accueil />} />
          <Route path='panier' element={<Panier />} />
          <Route path='bon-de-commande' element={<BonDeCommande />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  </BrowserRouter>
  </FormProvider>
  </Provider>
</CardContextProvider>
)
