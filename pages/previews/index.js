import React from 'react'

const Previews = ({data}) => {
  return (
    <div>{data}</div>
  )
}

export default Previews;

export async function getStaticProps(context) {
    console.log('Running getStaticProps', context.previewData);
    return {
        props: {
            data : context.preview ? 'List of draft articles' : 'List of published articles'
        }
    };
}