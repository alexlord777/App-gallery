import React from 'react'
import Card from './Card'
import Loadings from './Loadings';
import Form from './Form';
import { useFetchImages } from '../hooks/useFetchImages';

const Cards = () => {
    const [images,loading,handleSubmit]=useFetchImages();
    return (
        <div className='text-center'>
  
            <Form handleSubmit={handleSubmit}/>

            <hr />

            {loading && <Loadings/>}   

            <div className='row'>
                {
                    images.map((img) => {
                        return <div key={img.id} className='col'>
                            <Card img={img.urls.regular} />
                        </div>
                    })
                }
            </div>


        </div>
    )
}

export default Cards
