import React from 'react';

const ListByCategory = ({articles, category}) => {
    return (
        <div>
            <h1>Showing news for {category}</h1>
            {
                articles.map(article => <div key={article}>
                    <h3>{article.title} | {category}</h3>
                </div>)
            }
        </div>
    );
};

export default ListByCategory;

export async function getServerSideProps(context){
    const {params, req, res, query} = context;
    console.log(query);
    res.setHeader('Set-Cookie', ['name = Mizan'])
    console.log(req.headers.cookie);

    const {category} = params;
    const response = await fetch(`http://localhost:4000/news?category=${category}`);
    const data = await response.json();

    console.log(`pre-rendering news article for category ${category}`);

    return {
        props : {
            articles : data,
            category
        }
    }
}