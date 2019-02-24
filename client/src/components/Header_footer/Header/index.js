import React, { Component } from 'react';

class Header extends Component {

    state = {
        page: [
            {
                name:'Home',
                linkTo: '/',
                public: true
            },
            {
                name:'Surfboards',
                linkTo: '/shop',
                public: true
            }
        ],
        user: [
            {
                name:'My Cart',
                linkTo: '/user/cart',
                public: false
            },
            {
                name:'My Account',
                linkTo: '/user/dashboard',
                public: false
            },
            {
                name:'Log in',
                linkTo: '/register_login',
                public: true
            },
            {
                name:'Log out',
                linkTo: '/user/logout',
                public: false
            }
        ]
    }

    render() {
        return (
            <header className="bck_b_light">
                <div className="container">
                    <div className="left">
                        <div className="logo">
                            SURFER'S DEPOT
                        </div>

                    </div>
                    <div className="right">
                        <div className="top">
                            LINKS
                        </div>
                        <div className="bottom">
                            LINKS
                        </div>

                    </div>

                </div>

                
            </header>
        );
    }
}

export default Header;