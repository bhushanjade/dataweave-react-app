import React, {Component} from 'react';

import PropTypes from "prop-types";
import './product-card.css';

const PRODUCT_NOT_AVAILABLE = "product not available";
const STOCK = "Out of Stock from "
export default class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.handleProductDetailToggle = this.handleProductDetailToggle.bind(this);
    }

    handleProductDetailToggle() {

        if (typeof this.props.toggleProductDetail === 'function') {
            this.props.toggleProductDetail(this.props.product["bundle_id"]);
        }
    }

    render() {
        let {product,selectedProduct} = this.props;
        console.log("selectedProduct=",selectedProduct);
        console.log("bn", product["bundle_id"]);
        return (
            <div className={selectedProduct === product["bundle_id"] ? "product-list-card card solid-border-1 border-radius-4 product-selected" : "product-list-card card solid-border-1 border-radius-4"}
                 onClick={this.handleProductDetailToggle}>
                <div className="row">

                    <div className="column">
                        <p className="price text-bold">&#8377;{product.available_price}</p>
                        <h1 className="product-name" title={product.bundle_name}>{product.bundle_name}</h1>
                        <p className="text-muted text-bold product-sku">{product.sku}</p>
                        {!product.stock ? <p>{STOCK}<span>{`${product.stock}`}Day(s)</span></p> : null}
                        {!product.is_valid ? <p>{PRODUCT_NOT_AVAILABLE}</p> : null}
                    </div>
                    <div className="column">
                        <img className="solid-border-1 border-radius-4 product-thumbnail size-128 float-right"
                             src={product.thumbnail}/>

                    </div>
                </div>

            </div>
        )
        // return <div className="product-item">
        //     <img src={product.thumbnail} alt={product.bundle_name} width="32" height="32"/>
        //     <div>{product.bundle_name}</div>
        //
        // </div>
    }
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
}