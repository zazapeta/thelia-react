import React from 'react';
import {connect} from 'react-redux';
import * as CategoryActions from './Category.actions';
import CategoryView from './Category.view.jsx';
class CategoryContainer extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.onCategoryClick = this.onCategoryClick.bind(this);
    }

    onCategoryClick(c_id){
        console.log('category clicker : ', c_id);
        this.props.dispatch(CategoryActions.fetch(c_id));
    }

    componentWillMount() {
        this.props.dispatch(CategoryActions.fetch('*'));
    }

    render() {
        console.log('category container : ', this.props.categories);
        return (
            <CategoryView
                fetchStatus={this.props.status}
                categories={this.props.categories}
                onCategoryClick={this.onCategoryClick}
            />
        );
    }
}

function mapStateToProps(state) {
    console.log('map to props: ', state);
    return {
        status: state.Category.get('status'),
        categories: state.Category.get('categories')
    };
}
export default connect(mapStateToProps)(CategoryContainer);