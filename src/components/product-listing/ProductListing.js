import React, {Component} from 'react';
import ProductFilter from './ProductFilter';
import ProductListingCard from './ProductListingCard';
import PropTypes from 'prop-types';


export default class ProductListing extends Component {
    render() {
        let {products} = this.props;
        return <div className="product-listing">
            <div className="filter-bar">
                <ProductFilter searchHandler={this.props.searchHandler}
                               totalProducts={this.props.totalProducts}
                               sortHandler={this.props.sortHandler}/>
            </div>
            <ProductListingCard selectedProduct={this.props.selectedProduct} products={products}
                                totalProducts={this.props.totalProducts}
                                start={this.props.start}
                                limit={this.props.limit}
                                handlePagination={this.props.handlePagination} toggleProductDetail={this.props.toggleProductDetail}/>

        </div>;
    }
}

ProductListing.propTypes = {
    searchHandler: PropTypes.func.isRequired,
    handlePagination: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    totalProducts: PropTypes.number.isRequired,
};