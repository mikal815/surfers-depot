import React, { Component } from 'react';
import UserLayout from '../../hoc/user';
import UserProductBlock from '../utils/User/product_block';

import { connect } from 'react-redux';
import { getCartItems } from '../../actions/user_actions';

import fontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFrown from '@fortawesome/fontawesome-free-solid/faFrown';
import faSmile from '@fortawesome/fontawesome-free-solid/faSmile';

class UserCart extends Component {

    state = {
        loading: false,
        total: 0,
        showTotal: false,
        showSuccess: false
    }

    componentDidMount(){
        let cartItems = [];
        let user = this.props.user;

        if(user.userData.cart){
            if(user.userData.cart.length > 0){
                
                user.userData.cart.forEach(item=>{
                    cartItems.push(item.id)
                });

                this.props.dispatch(getCartItems(cartItems,user.userData.cart))
                .then(()=>{

                })

            }
        }
    }

    removeFromCart = () => {

    }

    render() {
        return (
            <UserLayout>
                <div>
                    <h1>My cart</h1>
                    <div className="user_cart">
                        <UserProductBlock
                            products={this.props.user}
                            type="cart"
                            removeItem={(id)=> this.removeFromCart(id)}
                        />
                    </div>
                </div>
            </UserLayout>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserCart);