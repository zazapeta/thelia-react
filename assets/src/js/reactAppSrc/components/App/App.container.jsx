/**
 * Created by Sami on 13/05/2016.
 */
import React from 'react';
import {withRouter} from 'react-router';
import Category from '../Category';
class AppContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount(){
        if(window.path){
            this.props.router.push(window.path);
        }
    }

    render() {
        return (
            <div>
                <h1>Awesome APP !</h1>
                {this.props.children}
                <button onClick={
                () => {
                    this.props.router.push('login');
                }}
               >Login</button>
            </div>);
    }
}

export default withRouter(AppContainer);