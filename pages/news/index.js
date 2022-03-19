import React from 'react';

const NewsArticleList = ({articles}) => {
    return (
        <div>
            <h2>News article list</h2>
            {
                articles.map(article =><div key={article.id}>
                    <h2>{article.title} | {article.category} | {article.description}</h2>
                </div>)
            }
        </div>
    );
};

export default NewsArticleList;

export async function getServerSideProps(){
    const res = await fetch('http://localhost:4000/news');
    const data = await res.json();

    console.log('Pre-rendering news articles list');

    return {
        props : {
            articles : data
        }
    }
}