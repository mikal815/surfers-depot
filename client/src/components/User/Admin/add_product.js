import React, { Component } from 'react';
import UserLayout from '../../../hoc/user';

import FormField from '../../utils/Form/formfield';
import { update, generateData, isFormValid } from '../../utils/Form/formActions';

import { connect } from 'react-redux';
import { getBrands, getShapes } from '../../../actions/products_actions';

class AddProduct extends Component {

    state = {
        formError:false,
        formSuccess:false,
        formdata:{
            name:{
                element: 'input',
                value: '',
                config:{
                    label: 'Product name',
                    name: 'name_input',
                    type: 'text',
                    placeholder:'Enter your name'
                },
                validation:{
                    required: true,
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel:true
            },
            description:{
                element: 'textarea',
                value: '',
                config:{
                    label: 'Product description',
                    name: 'description_input',
                    type: 'text',
                    placeholder:'Enter your description'
                },
                validation:{
                    required: true,
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel:true
            },
            price:{
                element: 'input',
                value: '',
                config:{
                    label: 'Product price',
                    name: 'price_input',
                    type: 'number',
                    placeholder:'Enter your price'
                },
                validation:{
                    required: true,
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },
            brand:{
                element: 'select',
                value: '',
                config:{
                    label: 'Product Brand',
                    name: 'brands_input',
                    options: []
                },
                validation:{
                    required: true  
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel:true
            },
            shipping: {
                element: 'select',
                value: '',
                config:{
                    label: 'Shipping',
                    name: 'shipping_input',
                    options:[
                        {key:true,value:'Yes'},
                        {key:false,value:'No'},
                    ]
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },
            available:{
                element: 'select',
                value: '',
                config:{
                    label: 'Available, in stock.',
                    name: 'available_input',
                    options:[
                        {key:true,value:'Yes'},
                        {key:false,value:'No'},

                    ]
                },
                validation:{
                    required: true,
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel:true
            },
            shape:{
                element: 'select',
                value: '',
                config:{
                    label: 'Board shape',
                    name: 'shape_input',
                    options:[]
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel:true
            },
            publish:{
                element: 'select',
                value: '',
                config:{
                    label: 'Publish',
                    name: 'publish_input',
                    options:[
                        {key:true,value:'Public'},
                        {key:false,value:'Hidden'},

                    ]
                },
                validation:{
                    required: true,
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel:true
            }
        }
    }

    componentDidMount(){
        const formdata = this.state.formdata;

        // this.props.dispatch(getBrands()).then(response =>{
        //     console.log(this.products.brands)
        // })
    }


    render() {
        return (
            <UserLayout>
                <div>
                    <h1>Add product</h1>
                    <form onSubmit={(event)=> this.submitForm(event)}>

                        <FormField
                            id={'name'}
                            formdata={this.state.formdata.name}
                            change={(element)=> this.updateForm(element)}
                        />

                        <FormField
                            id={'description'}
                            formdata={this.state.formdata.description}
                            change={(element)=> this.updateForm(element)}
                        />

                        <FormField
                            id={'price'}
                            formdata={this.state.formdata.price}
                            change={(element)=> this.updateForm(element)}
                        />
                    <div className="form_devider"></div>   

                         <FormField
                            id={'brand'}
                            formdata={this.state.formdata.brand}
                            change={(element)=> this.updateForm(element)}
                        /> 

                        <FormField
                            id={'shipping'}
                            formdata={this.state.formdata.shipping}
                            change={(element)=> this.updateForm(element)}
                        /> 

                        <FormField
                            id={'available'}
                            formdata={this.state.formdata.available}
                            change={(element)=> this.updateForm(element)}
                        /> 

                    <div className="form_devider"></div>     

                         <FormField
                            id={'shape'}
                            formdata={this.state.formdata.shape}
                            change={(element)=> this.updateForm(element)}
                        /> 

                    <div className="form_devider"></div>     

                        <FormField
                            id={'publish'}
                            formdata={this.state.formdata.publish}
                            change={(element)=> this.updateForm(element)}
                        /> 

                        {this.state.formSuccess ?
                            <div className="form_success">
                                Success
                            </div>
                        :null}

                        {this.state.formError ?
                            <div className="error_label">
                                Please check your data
                                    </div>
                            : null}
                        <button onClick={(event) => this.submitForm(event)}>
                            Add product
                                    </button>
                    </form>
                </div>

            </UserLayout>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products    
    }
}

export default connect(mapStateToProps)(AddProduct);