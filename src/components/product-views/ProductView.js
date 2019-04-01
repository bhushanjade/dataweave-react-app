import React, { Component } from 'react';
import { fetchProductBYViews } from '../../api/product.api';

const views = [
    {
        'name': 'All matched products',
        'key': 'all_products'
    },

    {
        'name': 'Margin gain opportunities',
        'key': 'increase_opportunity'
    }
];

const ViewItem = (props) => (
    <li key={props.view.key} className={props.view.key === props.selectedView ? "selected" : null} onClick={props.onClick}>{props.view.name}</li>
);
export default class ProductView extends Component {


    render() {
        return <ul className="views-list">
            {
                views.map(view => <ViewItem selectedView={this.props.selectedView} key={view.key} view={view}
                                            onClick={this.props.handleViewChange.bind(
                                                this, view.key)} />)
            }
        </ul>;
    }
}