import React from 'react';
import {Card,Button} from 'react-bootstrap';

const ProductAbout = ()=>{
    return (
        <div >

         <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="https://static.pexels.com/photos/296886/pexels-photo-296886.jpeg"/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Inspect</Button>
            </Card.Body>
        </Card>
     </div>
    )
}

export default ProductAbout
