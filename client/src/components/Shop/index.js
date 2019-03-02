import React, { Component } from 'react';
import PageTop from '../utils/Form/page_top';

import { connect } from 'react-redux';

class Shop extends Component {

    render() {
        const products = this.props.products;
        return (
            <div>
                <PageTop
                    title="Browse Products"
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


export default connect()(Shop);