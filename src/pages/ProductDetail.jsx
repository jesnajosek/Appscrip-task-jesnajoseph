import { useParams, Link } from 'react-router-dom';
import { getProducts } from '../data/products';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ProductDetail() {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const product = getProducts().find(p => p.id === parseInt(id));

    if (!product) {
        return <div className="page"><div className="container"><h2>Product Not Found</h2><Link to="/products" className="btn btn-secondary">Back to Products</Link></div></div>;
    }

    return (
        <div className="page">
            <div className="container">
                <Link to="/products" className="btn btn-secondary" style={{marginBottom: '2rem', display: 'inline-block'}}>&larr; Back to Products</Link>
                <div className="product-detail">
                    <div className="product-detail-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div>
                        <h1 className="product-detail-name">{product.name}</h1>
                        <p className="product-detail-price">${product.price}</p>
                        <p className="product-detail-description">{product.description}</p>
                        <button className="btn btn-primary btn-large" onClick={() => {
                            addToCart(product);
                            alert("Added to cart!");
                        }}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
