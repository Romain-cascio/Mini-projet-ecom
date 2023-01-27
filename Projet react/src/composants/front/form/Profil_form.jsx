import {reduxForm, Field } from "redux-form/dist/redux-form";
import React, { Component } from 'react';
import {
    Input,
    Button,
} from 'reactstrap';
import SubmitValidate from './Submitvalidate';
import FieldError from "./FieldError";

const renderField = ({
    input,
    label,
    type,
    placeholder,
    meta: { touched, error },
    disabled,
    onChangeval,
    defaultValue,
}) => (
    <div className="mx-auto mb-3">
        <div className="text-center">
                <Input {...input} placeholder={placeholder} type={type} disabled={disabled} onChange={onChangeval} value={defaultValue}/>
            {touched && error && <FieldError text={error} />}
        </div>
    </div>
);

class Profil_form extends Component {
    constructor(props) {
        super(props);
        const {  } = this.props;
        this.state = {
            
        };

        
    }

    componentDidMount() {
        
    }

    render() {
        const {
            handleSubmit,
            submitting,
            submitOnSuccessValidate
        } = this.props;
        const {
           
        } = this.state;
        return (
    <div>
        <h2>Votre profil</h2>
        <div className="row">
                <form className="col-12" onSubmit={handleSubmit(values => {
                    const valuesDropDown = values;
                    return SubmitValidate(
                        valuesDropDown,
                        submitOnSuccessValidate,
                    );
                })}
                >
                    <Field
                        name="name"
                        type="text"
                        component={renderField}
                        placeholder="First name"
                    />
                    <Field
                        name="email"
                        type="text"
                        component={renderField}
                        placeholder="exemple@exemple.com"
                    />
                    <Field
                        name="adresse"
                        type="text"
                        component={renderField}
                        placeholder="Votre Rue / Code Postal / Ville"
                    />
                    <Field
                        name="commentaire"
                        type="text"
                        component={renderField}
                        placeholder="Votre message"
                    />
                    <Button
                            outline
                            color="danger"
                            type="submit"
                            disabled={submitting}
                        >
                            Commander
                        </Button>
                </form>
        </div>
    </div>
        );
    }
}
Profil_form = reduxForm({
    form: 'editForm' 
  })(Profil_form)
  export default Profil_form;
