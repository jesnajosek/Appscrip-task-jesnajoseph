import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { Link, Navigate } from 'react-router-dom';

export const Checkout = () => {
    const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const [orderComplete, setOrderComplete] = useState(false);

    if (!user) {
        return <Navigate to="/auth" />;
    }

    if (orderComplete) {
        return (
            <div className="page">
                <div className="container">
                    <div className="order-success">
                        <h2 className="order-success-title">Thank You!</h2>
                        <p className="order-success-message">Your order has been successfully placed.</p>
                        <br />
                        <Link to="/" className="btn btn-primary">Return to Home</Link>
                    </div>
                </div>
            </div>
        );
    }

    if (cartItems.length === 0) {
        return <Navigate to="/cart" />;
    }

    const handleConfirmOrder = (e) => {
        e.preventDefault();
        clearCart();
        setOrderComplete(true);
    };

    return (
        <div className="page">
            <div className="container">
                <h2 className="page-title">Checkout</h2>
                <div className="checkout-container">
                    <div className="checkout-items">
                        <h3 className="checkout-section-title">Shipping Details</h3>
                        <form className="auth-form" onSubmit={handleConfirmOrder}>
                            <div className="form-group">
                                <label className="form-label">Full Name</label>
                                <input type="text" required className="form-input" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Address</label>
                                <input type="text" required className="form-input" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">City</label>
                                <input type="text" required className="form-input" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Credit Card</label>
                                <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" required className="form-input" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block btn-large" style={{marginTop: '2rem'}}>
                                Confirm Order
                            </button>
                        </form>
                    </div>
                    <div className="checkout-summary">
                        <h3 className="checkout-section-title">Order Total</h3>
                        <div className="checkout-total">
                            <span className="checkout-total-label">Subtotal</span>
                            <span className="checkout-total-value">${getCartTotal()}</span>
                        </div>
                        <div className="checkout-total">
                            <span className="checkout-total-label">Total</span>
                            <span className="checkout-total-final">${getCartTotal()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};