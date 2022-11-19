import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product({ product }) {
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
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>

            </Card>
        </div>
    );
}

export default Product;