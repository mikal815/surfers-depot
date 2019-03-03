import React, { Component } from 'react';
import PageTop from '../utils/Form/page_top';

import { connect } from 'react-redux';
import { getBrands, getShapes } from '../../actions/products_actions';

import CollapseCheckbox from '../utils/Form/collapseCheckbox';

class Shop extends Component {

    componentDidMount(){
        this.props.dispatch(getBrands());
        this.props.dispatch(getShapes());
    }

    handleFilters = () => {

    }

    render() {
        const products = this.props.products;
        return (
            <div>
                <PageTop
                    title="Browse Products"
                />
                <div className="container">
                    <div className="shop_wrapper">
                        <div className="left">
                            <CollapseCheckbox
                                initState={true}
                                title="Brands"
                                list={products.brands}
                                handleFilters={(filters)=> this.handleFilters(filters, 'brand')}
                            />


                        </div>
                        <div className="right">
                            right
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}


export default connect(mapStateToProps)(Shop);