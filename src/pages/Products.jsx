import { Link } from "react-router-dom";
import products from "../data";
const Products = () => {
  return (
    <>
      <section className="section">
        <h2>products</h2>
        <div className="products"></div>
        {products.map((product, index) => {
          return (
            <article key={product.id}>
              <h4>{product.name}</h4>
              <Link to={`/products/${product.id}`} className="btn">
                More info
              </Link>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Products;
