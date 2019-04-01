import React, {Component} from 'react';


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

    <li key={props.view.key} className={props.view.key === props.selectedView ? "selected" : null}
        onClick={props.onClick}>{props.view.name}
        <span
        className="float-right txt-blue text-bold">{props.productViewsCount[props.view.key] || 0}</span>
    </li>
);
export default class ProductView extends Component {


    render() {
        return <ul className="views-list">
            {
                views.map(view => <ViewItem selectedView={this.props.selectedView} key={view.key} view={view} productViewsCount={this.props.productViewsCount}
                                            onClick={this.props.handleViewChange.bind(
                                                this, view.key)}/>)
            }
        </ul>;
    }
}
