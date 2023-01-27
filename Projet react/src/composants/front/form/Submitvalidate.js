import { SubmissionError } from 'redux-form';
import validator from 'validator';
import { NavLink, useNavigate } from "react-router-dom";

const SubmitValidate = (values, submitOnSuccessValidate) => {

    const {
        name = '',
        email = '',
        adresse = '',
        commentaire = '',
    } = values;
    console.log("These are values", values);
    const error = {};
    let isError = false;

    if (name.trim() === '') {
        error.name = 'Required';
        isError = true;
    }
    if (email.trim() === '') {
        error.email = 'Required';
        isError = true;
    }
    if (adresse.trim() === '') {
        error.adresse = 'Required';
        isError = true;
    }
    if (!validator.isEmail(email)){
            error.email = 'Wrong adress format'
            isError = true;
    }
    if (commentaire.trim() === '') {
        error.commentaire = 'Required';
        isError = true;
    }
    if (isError) {
        throw new SubmissionError(error);
    } else {
        submitOnSuccessValidate(values);
    }
};

export default SubmitValidate;
