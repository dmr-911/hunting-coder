import React from 'react';
import Link from 'next/link';

const Products = ({products}) => {
    return (
        <div>
            <h1>List of Products</h1>
            {
                products.map(product => <div key={product.id}>
                    <Link href={`products/${product.id}`} passHref><h3 className="cursor-pointer">{product.id} {product.title} {product.price}</h3></Link>
                    <hr  className="mb-4"/>
                </div>)
            }
        </div>
    );
};

export default Products;

export async function getStaticProps(){
    console.log('Generating / Regenerating Products');
    const res = await fetch('http://localhost:4000/products');
    const data = await res.json();

    return {
        props :{
            products : data
        }, 
        revalidate : 30 /* ISR */
    }
}