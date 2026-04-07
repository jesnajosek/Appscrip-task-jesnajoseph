import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useContext(CartContext);

    if (cartItems.length === 0) {
        return (
            <div className="page">
                <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
                    <h2>Your cart is empty</h2>
                    <br />
                    <Link to="/products" className="btn btn-primary">Continue Shopping</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="page">
            <div className="container">
                <h2 className="page-title">Your Cart</h2>
                <div className="checkout-container">
                    <div className="checkout-items">
                        {cartItems.map(item => (
                            <div key={item.id} className="checkout-item">
                                <img src={item.image} alt={item.name} className="checkout-item-image" />
                                <div className="checkout-item-details">
                                    <h3 className="checkout-item-name">{item.name}</h3>
                                    <p className="checkout-item-price">${item.price} each</p>
                                </div>
                                <div className="checkout-item-controls">
                                    <div className="quantity-controls">
                                        <button className="quantity-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
                                        <span className="quantity-value">{item.quantity}</span>
                                        <button className="quantity-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                                    </div>
                                    <p className="checkout-item-total">${item.price * item.quantity}</p>
                                    <button className="btn btn-small btn-secondary" onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="checkout-summary">
                        <h3 className="checkout-section-title">Order Summary</h3>
                        <div className="checkout-total">
                            <span className="checkout-total-label">Subtotal</span>
                            <span className="checkout-total-value">${getCartTotal()}</span>
                        </div>
                        <div className="checkout-total">
                            <span className="checkout-total-label">Shipping</span>
                            <span className="checkout-total-value">Free</span>
                        </div>
                        <div className="checkout-total">
                            <span className="checkout-total-label">Total</span>
                            <span className="checkout-total-final">${getCartTotal()}</span>
                        </div>
                        <Link to="/checkout" className="btn btn-primary btn-block">Proceed to Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
