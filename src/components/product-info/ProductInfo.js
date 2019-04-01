import React, {Component} from 'react';
import './product-info.css';
import {getProductInfo} from '../../api/products.api';

const YOUR_PRICE = {
    title: 'Your Price',
    key: 'your_price',
};

const LOWEST_PRICE = {
    title: 'Lowest Price',
    key: 'lowest_price_value',
};

const HIGHEST_PRICE = {
    title: 'Highest Price',
    key: 'highest_price_value',
};

const POSITION = {
    title: 'Position',
    key: 'position',
};

const NUM_COMPETITORS = {
    title: 'Competitors',
    key: 'num_competitors',
};

const PRICE_GAP = {
    title: 'price gap',
    key: 'price_gap',
};

const PRICE_DECREASE = {
    title: 'Price Decrease',
    key: 'max_price_decreased_value',
};

const PRICE_INCREASE = {
    title: 'Price Increase',
    key: 'max_price_increased_value',
};

const STOCK = {
    title: 'Out Of Stock',
    key: 'stock',
};

const OUT_OF_STOCK_COMPETITORS = {
    title: 'Out of Stock Competitors',
    key: 'out_of_stock_competitors',
};

const TileInfo = (props) => {

    return (
        <div>
            <p className="txt-blue">{props.title}</p>
            {/*<p>{params.productInfo[YOUR_PRICE].toUpperCase() === 'NA'*/}
            {/*? '--'*/}
            {/*: productInfo[YOUR_PRICE]}</p>*/}
            <p>{props.value}</p>
            {props.children}
        </div>
    );
};
export default class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productInfo: [],
            selectedProduct: this.props.selectedProduct
        };
    }

    componentDidMount() {
        if (this.props.selectedProduct > 0) {
            getProductInfo({'bundle_id': this.props.selectedProduct}).then(productInfo => {

                this.setState({
                    productInfo: productInfo.data.data,
                });
            }).catch(error => {

            });
        }
    }

    render() {
        let {productInfo} = this.state;
        let {selectedProduct}= this.props;
        if(selectedProduct ===0) return <div> Select Product to View Details</div>;
        if (productInfo.length === 0) return <div>Loading...</div>;
        return <div className="desc-card">
            <div className="product-header">
                <h1>Header </h1>
            </div>
            <div className="product-desc">
                <div className="product-image">
                    <h1> Image here</h1>
                </div>
                <div className="product-detail-tiles">
                    <ul className="product-tiles">
                        <li className="border-bottom">
                            <div className="desc-tile border-right">
                                <TileInfo title={YOUR_PRICE.title}
                                          value={productInfo[YOUR_PRICE.key].toUpperCase() ===
                                          'NA'
                                              ? '-'
                                              : productInfo[YOUR_PRICE.key]}/>
                            </div>
                            <div className="desc-tile border-right">
                                <TileInfo title={LOWEST_PRICE.title}
                                          value={productInfo[LOWEST_PRICE.key]}/>
                            </div>
                            <div className="desc-tile">
                                <TileInfo title={HIGHEST_PRICE.title}
                                          value={productInfo[HIGHEST_PRICE.key]}/>
                            </div>
                        </li>
                        <li className="border-bottom">
                            <div className="desc-tile border-right">
                                <TileInfo title={POSITION.title}
                                          value={productInfo[POSITION.key]}/>
                            </div>
                            <div className="desc-tile border-right">
                                <TileInfo title={NUM_COMPETITORS.title}
                                          value={productInfo[NUM_COMPETITORS.key]}/>
                            </div>
                            <div className="desc-tile">
                                <TileInfo title={PRICE_GAP.title}
                                          value={productInfo[PRICE_GAP.key]}/>
                            </div>
                        </li>
                        <li className="border-bottom">
                            <div className="desc-tile border-right">
                                <TileInfo title={PRICE_INCREASE.title}
                                          value={productInfo[PRICE_INCREASE.key]}/>
                            </div>
                            <div className="desc-tile border-right">
                                <TileInfo title={PRICE_DECREASE.title}
                                          value={productInfo[PRICE_DECREASE.key]}/>
                            </div>
                            <div className="desc-tile">
                                <TileInfo title={STOCK.title}
                                          value={`${productInfo[STOCK.key].toUpperCase() ===
                                          'OUT OF STOCK'
                                              ? 0
                                              : productInfo[STOCK.key]}/${productInfo[OUT_OF_STOCK_COMPETITORS.key]}`}>
                                    <p>{OUT_OF_STOCK_COMPETITORS.title}</p>
                                </TileInfo>
                            </div>
                        </li>


                    </ul>
                </div>

            </div>
        </div>;
    }
}