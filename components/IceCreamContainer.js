import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux';

function IceCreamContainer() {
    const selector = useSelector(state => state.iceCream.numOfIceCream);
    const dispatch = useDispatch();
  return (
    <div className="text-center">
    <h4 className="text-center font-bold my-4">Number of Ice cream available {selector}</h4>
    <button onClick={()=> dispatch(buyIceCream())} className="rounded-full bg-cyan-600 px-8 py-2 text-white mx-auto">Buy cake</button>
</div>
  )
}

export default IceCreamContainer