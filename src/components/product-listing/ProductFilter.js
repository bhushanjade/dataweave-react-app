import React, {Component} from 'react';
import ProductSearch from './ProductSearch';
import ProductSort from './ProductSort';
import PropTypes from "prop-types";

export default class ProductFilter extends Component {
    render() {
        return (
            <div className="product-filter">
                <span className="float-left"><ProductSearch handleProductSearch={this.props.searchHandler} totalProducts={this.props.totalProducts}/></span>
                <span className="float-right"><ProductSort sortHandler={this.props.sortHandler}/></span>
            </div>
        )
    }
}
ProductFilter.defaultProps = {
    productCount: 0
}
ProductFilter.propTypes = {
    searchHandler: PropTypes.func.isRequired,
    sortHandler: PropTypes.func.isRequired,
    totalProducts: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
}