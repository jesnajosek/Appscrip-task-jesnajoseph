import { getProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

export const Products = () => {
  const products = getProducts();

  return (
    <div className="page">
      <div className="container">
        <h2 className="page-title">All Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
