import React from 'react';
import ErrorTypes from './Error.constants.js';
import styles from './Error.style';
export default class Error extends React.Component {
    render() {
        let {type, message} = this.props;
        console.error(type, ' : ', message);
        return (
            <div style={styles.ERROR_CONTAINER}>
                <div className="alert alert-danger alert-dismissible" role="alert" style={styles[type]}>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                    <strong>Error : </strong> {message}
                </div>
            </div>
        );
    }
}

Error.propTypes = {
    type: React.PropTypes.oneOf(Object.keys(ErrorTypes)).isRequired,
    message: React.PropTypes.string.isRequired
};
