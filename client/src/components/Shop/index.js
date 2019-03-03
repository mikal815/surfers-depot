import React, { Component } from 'react';
import PageTop from '../utils/Form/page_top';

import { inches, price } from '../utils/Form/fixed_categories';

import { connect } from 'react-redux';
import { getProductsToShop, getBrands, getShapes } from '../../actions/products_actions';

import CollapseCheckbox from '../utils/Form/collapseCheckbox';
import CollapseRadio from '../utils/Form/collapseRadio';

class Shop extends Component {

    state = {
        grid: '',
        limit:6,
        skip:0,
        filters:{
            brand:[],
            inches:[],
            shape:[],
            price:[]
        }

    }

    componentDidMount(){
        this.props.dispatch(getBrands());
        this.props.dispatch(getShapes());

        this.props.dispatch(getProductsToShop(
            this.state.skip,
            this.state.limit,
            this.state.filters
        ))
    }

    handlePrice = (value) =>{
        const data = price;
        let array = [];

        for(let key in data){
            if(data[key]._id === parseInt(value,10)){
                array = data[key].array
            }
        }
        return array;

    }

    handleFilters = (filters,category) => {
        const newFilters = {...this.state.filters};
        newFilters[category] = filters;

        if(category === "price"){
            let priceValues = this.handlePrice(filters);
            newFilters[category] = priceValues
        }

        this.setState({
            filters: newFilters
        })
    }

    render() {
        console.log(this.state.filters)
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
                            <CollapseCheckbox
                                initState={false}
                                title="Inches"
                                list={inches}
                                handleFilters={(filters)=> this.handleFilters(filters, 'inches')}
                            />
                            <CollapseCheckbox
                                initState={false}
                                title="Shape"
                                list={products.shapes}
                                handleFilters={(filters)=> this.handleFilters(filters, 'shape')}
                            />
                            <CollapseRadio
                                initState={true}
                                title="Price"
                                list={price}
                                handleFilters={(filters)=> this.handleFilters(filters, 'price')}
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