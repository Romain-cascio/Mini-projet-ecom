import React, { Component } from 'react'

class FieldError extends Component {
    render() {
        const { text } = this.props;
        return (
            <span className="fieldError" >
                        <hr />{text}
            </span>
        )
    }
}

FieldError.defaultProps = {
    text: "Required",
}

export default FieldError;