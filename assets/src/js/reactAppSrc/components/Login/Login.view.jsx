import React from 'react';
import { withRouter } from 'react-router'

class LoginView extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                MySuper login !
            </div>
        );
    }
}
LoginView.title = 'Login';
LoginView.propTypes = {
    //onLogin : React.PropTypes.func.isRequired,
    //status: React.PropTypes.string.isRequired
};

export default withRouter(LoginView);