import React, { Component } from 'react';
import HomeSlider from './home_slider';
import HomePromotion from './home_promotion';
import CardBlock from '../utils/Form/card_block';

import { connect } from 'react-redux';
import { getProductsBySell, getProductsByArrival } from '../../actions/products_actions';

class Home extends Component {

    componentDidMount(){
        this.props.dispatch(getProductsBySell());
        this.props.dispatch(getProductsByArrival());
    }

    render() {
        return (
            <div>
                <div className="homeslider">
                <HomeSlider/>
                </div>
                <div className="row">
                <CardBlock
                    list={this.props.products.bySell}
                    title="Best selling boards"
                />
                </div>
                <HomePromotion/>
                <CardBlock
                    list={this.props.products.byArrival}
                    title="New arrivals"
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Home);