import {useRouter} from 'next/router';
import React from 'react';

const ProductDetails = ({product}) => {
    // For fallback is true 
    const router = useRouter();
    if(router.isFallback){
        return <h3>Loading...</h3>
    }

    return (
        <div>
            <h3>Product no. {product.id}</h3>
            <h3>{product.title} {product.price}</h3>
            <hr  className="mb-4"/>
        </div>
    );
};

export default ProductDetails;

export async function getStaticPaths(){
    return {
        paths : [
            {
                params : {productId : '1'}
            }
        ],
        fallback : true
    }
}

export async function getStaticProps(context) {
    const {params} = context;
    const res = await fetch(`http://localhost:4000/products/${params.productId}`);
    const data = await res.json();

    if(!data.id){
        return {
            notFound : true
        }
    }
    return {
        props : {
            product : data
        }
    }
}