import React from 'react';
import {withRouter} from 'react-router';
class _404View extends  React.Component{
    //constructor(props){
    //    super(props);
    //    console.log('404 constructed');
    //    console.log(this.props);
    //    window.location = './' + window.location.hash;
    //}
    //
    //componentWillMount(){
    //    console.log('404 mounted');
    //    console.log(this.props);
    //    window.location = './' + window.location.hash;
    //}

    render(){
        return (
            <div class="main">
                <article class="col-main" role="main" aria-labelledby="main-label">
                    <h1 id="main-label">
                        404
                        <span>The page cannot be found</span>
                    </h1>
                </article>
            </div>
        )
    }
}
export default withRouter(_404View);