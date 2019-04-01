import React, {Component} from 'react';
import PropTypes from "prop-types";


export default class ProductSearch extends Component {
    render() {
        return <div className="product-search">
            <input type="text" name="search" placeholder={`Search from ${this.props.totalProducts} products`}
                   onChange={this.props.handleProductSearch}/>
        </div>
    }
}
ProductSearch.propTypes = {
    handleProductSearch: PropTypes.func.isRequired,
    totalProducts: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
}