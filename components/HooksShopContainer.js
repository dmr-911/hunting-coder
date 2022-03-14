import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux';

function HooksShopContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();
  return (
    <div className="text-center">
    <h4 className="text-center font-bold my-4">Hooks Number of cakes {numOfCakes}</h4>
    <button onClick={()=> dispatch(buyCake())} className="rounded-full bg-cyan-600 px-8 py-2 text-white mx-auto">Buy cake</button>
</div>
  )
}

export default HooksShopContainer