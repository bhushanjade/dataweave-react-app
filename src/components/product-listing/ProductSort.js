import React, {Component} from 'react';
import PropTypes from "prop-types";

const HIGH_TO_LOW = 'High To Low';
const LOW_TO_HIGH = "Low To High";

const HIGH_DIRECTION = '↿⇂';//'&#8639;&#8642;'
const LOW_DIRECTION = '⇃↾';//'&#8639;&#8642;'
const Sort_Options = [
    {
        name: `Price `,
        value: 'available_price'
    },
    {
        name: `DISCOUNT% `,
        value: 'discount'
    },
    {
        name: `INCREASE% `,
        value: 'price_opportunity_increase_by_percentage'
    },
    {
        name: `DECREASE% `,
        value: 'not_lowest_decrease_by_percentage'
    },
];


export default class ProductSort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'direction': true,
            value: ''
        };
        this.handleSortChange = this.handleSortChange.bind(this);
        this.changeDirection = this.changeDirection.bind(this);
    }

    changeDirection() {
        let direction = !this.state.direction;
        this.setState({direction});

        if (typeof this.props.sortHandler === 'function' ) {
            this.props.sortHandler({
                'sort_on': this.state.value,
                'sort_by': direction ? 'asc' : 'desc'
            });
        }
    }

    handleSortChange(event) {
        let value = event.target.value;
        this.setState({value});
        if (typeof this.props.sortHandler === 'function') {
            this.props.sortHandler({
                'sort_on': value,
                'sort_by': this.state.direction ? 'asc' : 'desc'
            });
        }
    }

    render() {
        console.log(this.state);

        let {direction} = this.state;
        let directionText = direction ? HIGH_TO_LOW : LOW_TO_HIGH;
        return <div className="product-sort">
            <span onClick={this.changeDirection}>{direction ? `${HIGH_DIRECTION}` : `${LOW_DIRECTION}`} </span>
            <select name="sortBy" value={this.state.value} onChange={this.handleSortChange}>
                <option></option>
                {Sort_Options.map((sortOption) => <option key={sortOption.value}
                                                          value={sortOption.value}>{sortOption.name} {directionText}</option>)}
            </select>
        </div>
    }
}

ProductSort.propTypes = {
    sortHandler: PropTypes.func.isRequired,
}