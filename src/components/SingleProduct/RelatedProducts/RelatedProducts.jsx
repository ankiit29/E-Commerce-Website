import Product from "../../Products/Products";
import useFetch from "../../../hooks/useFetch";

const RelatedProducts = ({ categoryId, productId }) => {
  const { data } = useFetch(
    `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}`
  );
  return (
    <div className="related-products">
      <Product headingText="Related Products" products={data} />
    </div>
  );
};

export default RelatedProducts;
