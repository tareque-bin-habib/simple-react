import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Product.css'

function Product({ product, btnAddToCart }) {
    const { img, name, price, details } = product
    return (
        <div className='product'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>{details}</p>
                        <p>Price: <small>{price}</small>$</p>
                    </Card.Text>

                </Card.Body>
                <Button onClick={() => btnAddToCart(product)} className='btn-add-to-cart'>Add to Cart</Button>
            </Card>
        </div>
    );
}

export default Product;