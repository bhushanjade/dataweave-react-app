import React, {PureComponent} from 'react';
import ProductCard from './ProductCard';
import PropTypes from "prop-types";

export default class ProductListingCard extends PureComponent {
    render() {
        let {products} = this.props;
        return <>
            <div className="">
                {products.map((product) => <ProductCard selectedProduct={this.props.selectedProduct}
                                                        key={product.bundle_id} product={product}
                                                        toggleProductDetail={this.props.toggleProductDetail}/>)}

            </div>
            <span
                onClick={this.props.handlePagination}>{this.props.totalProducts - (this.props.start - 1 + this.props.limit)} To Load More</span>
        </>
    }
}

ProductListingCard.propTypes = {
    handlePagination: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    totalProducts: PropTypes.number.isRequired,
    start: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired
}