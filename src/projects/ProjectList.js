import React from 'react';
import ProductAbout from './productAbout'
import { Link } from 'react-router-dom';

const ProjectList=({products})=>{
    return(
        <div >
            {products && products.map(product=>{
                return(
                    <Link to={'/product'+product.id}>
                    <ProductAbout product={product} key={product.id } />
                    </Link>
                )
            })
                
            }
        </div>
    )
}

export default ProjectList