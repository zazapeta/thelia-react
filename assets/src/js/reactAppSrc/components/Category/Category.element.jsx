import React from 'react';
import styles from './Category.style';
export default class CategoryElement extends React.Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        this.props.onClick(this.props.data.ID);
    }

    render() {
        return (
            <div onClick={this.onClick} style={styles.categoryElement}>
                <img src='./../assets/frontOffice/react/template-assets/assets/dist/img/slider1.jpg' alt="face" />
                    <div className="caption">
                        <h3>{this.props.data.TITLE}</h3>
                        <p>{this.props.data.DESCRIPTION}</p>
                    </div>
            </div>);
    }
}

CategoryElement.propTypes = {
    data: React.PropTypes.object.isRequired,
    onClick: React.PropTypes.func.isRequired
};