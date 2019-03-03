import React from 'react';
import CardBlockShop from '../utils/Form/card_block_shop';

const LoadmoreCards = (props) => {
    return (
        <div>
            <div>
                <CardBlockShop
                grid={props.grid}
                list={props.products}

                />
            </div>
            {
                props.size > 0 && props.size >= props.limit ?

                :null
            }
            <div className="load_more_container">
                <span onClick={()=>props.loadMore()}>
                    Load More
                </span>

            </div>
            
        </div>
    );
};

export default LoadmoreCards;