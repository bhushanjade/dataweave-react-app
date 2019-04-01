
import React, {Component} from 'react';

import ProductView from './product-views/ProductView';
import ProductListing from './product-listing/ProductListing';
import ProductInfo from './product-info/ProductInfo';
import {getProductBy} from '../api/products.api';

const DEFAULT_BASE_VIEW = 'all_products';
const SELECT_TO_COUNT = "Select The View..";
export default class DashBoard extends Component {
    getProducts = (params) => {

        getProductBy(params).then(products => {

            this.setState({
                'products': [...products.data.data],
                'totalProducts': products.data.count,
                'productViewsCount':{...this.state.productViewsCount
                    ,[this.state.params.base_view ]:products.data.count}
            });
        }).catch(error => {

        });
    }

    constructor(props) {
        super(props);
        //&base_view=all_products&start=0&limit=20&sort_on=&sort_by=&filters={"search":""}&api_key=38430b87ac715c5858b7de91fb90b3f7
        this.state = {
            'params': {
                'sort_on': null,
                'base_view': DEFAULT_BASE_VIEW,
                'sort_by': '',
                'start': 0,
                'limit': 20,
                'filters': {"search": ""},
            },
            selectedProduct: 0,
            products: [],
            totalProducts: 0,
            productViewsCount: {
                'all_products': SELECT_TO_COUNT,
                'increase_opportunity': SELECT_TO_COUNT
            }
        };

        this.handleViewChange = this.handleViewChange.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
        this.sortHandler = this.sortHandler.bind(this);
        this.handlePagination = this.handlePagination.bind(this);
        this.getProducts = this.getProducts.bind(this);
        this.toggleProductDetail = this.toggleProductDetail.bind(this);
    }

    componentDidMount() {
        this.getProducts(this.state.params);
    }

    updateState(param) {
        let params = {'params': {...this.state.params, ...param}};
        console.log(params);
        this.setState({
            ...params
        });
        this.getProducts(params.params);
    }

    handleViewChange(viewName) {

        this.updateState({'base_view': viewName})
    }

    searchHandler(e) {
        this.updateState({'filters': {[e.target.name]: e.target.value}})
    }

    sortHandler(sortParams) {
        this.updateState(sortParams);
    }

    handlePagination() {
        let {start, limit} = this.state.params;

        start = start + limit + 1;
        console.log({'start': start});
        this.updateState({'start': start});
    }

    toggleProductDetail(bundleId) {

        this.setState(prevState => ({
                selectedProduct: prevState.selectedProduct === bundleId ? 0 : bundleId
            })
        )
    }

    render() {
        console.log(this.state);
        return (
            <>
                <div className="left">
                    <div className="header">
                        <h1 className="ft-16 p-5 txt-blue"> Views</h1>
                    </div>
                    <div className="views-list-container">
                        <ProductView handleViewChange={this.handleViewChange}
                                     selectedView={this.state.params.base_view} productViewsCount={this.state.productViewsCount}/>
                    </div>
                </div>
                <div className="middle">
                    <ProductListing selectedProduct={this.state.selectedProduct} products={this.state.products}
                                    totalProducts={this.state.totalProducts}
                                    searchHandler={this.searchHandler}
                                    sortHandler={this.sortHandler} handlePagination={this.handlePagination}
                                    start={this.state.params.start} limit={this.state.params.limit}
                                    toggleProductDetail={this.toggleProductDetail}/>

                </div>
                <div className="right">
                    {this.state.selectedProduct === 0 ? <div>Loading...</div> :
                        <div className="product-detail">
                            <ProductInfo selectedProduct={this.state.selectedProduct} key={this.state.selectedProduct}/>
                        </div>
                    }

                </div>

            </>
        );
    }
}