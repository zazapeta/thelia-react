import React from 'react';
import * as categoryActionTypes from './Category.actionTypes';
import CategoryElement from './Category.element.jsx';
import Error, {Errors} from '../Error';
export default class CategoryView extends React.Component {
    render() {
        switch (this.props.fetchStatus) {
            case categoryActionTypes.FETCH_ERROR :
                return (
                    <Error type={Errors.FETCH_ERROR} message='Ooops, categories fetch failed !'/>
                );
            case categoryActionTypes.FETCH_IN_PROGRESS:
                return (
                    <div>{this.props.fetchStatus}</div>
                );
            case categoryActionTypes.FETCH_SUCCESS:
            case categoryActionTypes.FETCH_ONE_SUCCESS:
            {
                let c = this.props.categories.map((category, i) => {
                        return <CategoryElement key={i} data={category} onClick={this.props.onCategoryClick}/>
                    });
                return <div>{c}</div>
            }
        }
    }

}
CategoryView.propTypes = {
    categories: React.PropTypes.array.isRequired,
    fetchStatus: React.PropTypes.string.isRequired,
    onCategoryClick: React.PropTypes.func.isRequired
};