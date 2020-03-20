import React from 'react'
import {Card,Button} from 'react-bootstrap';

const ProductDetails=({products})=>{
    return (
        <div>
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
               <Card.Body>
                    <Card.Title>{products.title}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductDetails