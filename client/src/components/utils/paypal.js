import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Paypal extends Component {
    render() {

        const onSuccess = (payment) =>{
            console.log(JSON.stringify(payment))

        // {   
        //     "paid":true,
        //     "cancelled":false,
        //     "payerID":"RRCVJ9HP38PV2",
        //     "paymentID":"PAYID-LUHIBEI2U2462349M221443N",
        //     "paymentToken":"EC-7JR7531351693734F","returnUrl":"https://www.paypal.com/checkoutnow/error?paymentId=PAYID-LUHIBEI2U2462349M221443N&token=EC-7JR7531351693734F&PayerID=RRCVJ9HP38PV2",
        //     "address":{
        //         "recipient_name":"test buyer",
        //         "line1":"1 Main St",
        //         "city":"San Jose",
        //         "state":"CA",
        //         "postal_code":"95131",
        //         "country_code":"US"
        //     },
        //     "email":"mikal815-buyer@yahoo.com"
        // }

        }

        const onCancel = (data) => {
            console.log(JSON.stringify(data))
        }

        const onError = (er) => {
            console.log(JSON.stringify(er))
        }

        let env = 'sandbox';
        let currency = 'USD';
        let total = this.props.toPay;

        const client = {
            sandbox:'AYQlpBFlNdm4j78hC_RWMeNdTS5_fg0MbnUBbc_p2kkbGvHl9ScIxVx1j8cLa8AV5vnfl_48b_uzz82E',
            production:''
        }


        return (
            <div>
                <PaypalExpressBtn
                    env={env}
                    client={client}
                    currency={currency}
                    total={total}
                    onError={onError}
                    onSuccess={onSuccess}
                    onCancel={onCancel}
                    style={{
                        size: 'large',
                        color: 'blue',
                        shape: 'rect',
                        label: 'checkout'
                    }}
                
                />
            </div>
        );
    }
}

export default Paypal;