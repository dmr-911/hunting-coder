import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';
import HooksShopContainer from './HooksShopContainer';
import IceCreamContainer from './IceCreamContainer';

const ShopContainer = (props) => {
    // console.log(props.buySingleCake());
    return (
        <div className="text-center">
            <h4 className="text-center font-bold my-4">Number of cakes {props.numOfCakes}</h4>
            <button onClick={props.buyIceCream} className="rounded-full bg-cyan-600 px-8 py-2 text-white mx-auto">Buy cake</button>
            <HooksShopContainer/>
            <IceCreamContainer/>
        </div>
    );
};

const mapStateToProps = state =>{
    return {
        numOfCakes : state.cake.numOfCakes
    }
};

const mapDispatchToProps = dispatch => {
    return {
        buySingleCake : ()=> dispatch(buyCake())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ShopContainer);