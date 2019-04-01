import React, {Component} from 'react';
import {fetchProductsByView} from '../../api/products.api';

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
const HIGHTOLOW = 'High TO Low'
const sortFilters = [
    {
        name: `Price ${HIGHTOLOW}`,
        value: 'available_price'
    },
    {
        name: `DISCOUNT% ${HIGHTOLOW}`,
        value: 'discount'
    },
    {
        name: `INCREASE% ${HIGHTOLOW}`,
        value: 'price_opportunity_increase_by_percentage'
    },
    {
        name: `DECREASE% ${HIGHTOLOW}`,
        value: 'not_lowest_decrease_by_percentage'
    },
]
const ViewListItem = ({item, onClick}) => {

    return <li key={item.key} onClick={onClick}>{item.name}</li>
}
export default class ViewsFilterList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.handlerSearch = this.handlerSearch.bind(this);
    }

    sortFilterChange() {

    }

    handlerSearch(e) {
        console.log(e);
    }

    handleClick(viewName) {
        fetchProductsByView();
        console.log(viewName);
    }

    render() {
        return (
            <div>
                <ul>{views.map((item) => <ViewListItem item={item}
                                                       onClick={this.handleClick.bind(this, item.key)}/>)}</ul>
                <div>
                    <input type="text" placeholder="Search" onChange={this.handlerSearch}/>
                    <select name="sortFilter" onChange={this.sortFilterChange.bind(this)}>
                        {
                            sortFilters.map((option) => <option value={option.value}>{option.name}</option>)
                        }
                    </select>
                    <div>Products</div>
                </div>
            </div>
        )
    }
}