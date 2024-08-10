import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Loader from '../../components/Loader';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import TrendingProducts from '../../components/TrendingProducts';
import { useProducts, useProduct } from '../../hooks';
import { updateCart } from '../../actions/cart';
import errorMesajes from '../../constants/errorMesajes';
import ResponsiveContainer from '../../components/ResponsiveMainContainer';

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [generalError, setGeneralError] = useState(null);
  const [isCartLoading, setIsCartLoading] = useState(false);
  const { id } = useParams();
  const { product, error: productError, loading } = useProduct(id);
  const containerRef = useRef(null);
  const dispatch = useDispatch();
  const { products } = useProducts(5);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    setGeneralError(productError);
  }, [productError]);

  const increaseQuantity = useCallback(
    () => setQuantity((prevQuantity) => prevQuantity + 1),
    []
  );

  const decreaseQuantity = useCallback(
    () =>
      setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1)),
    []
  );

  const onBeforeUpdatingCart = () => {
    setIsCartLoading(true);
    setGeneralError(null);
  };

  const handleAddToCart = useCallback(async () => {
    onBeforeUpdatingCart();
    try {
      await dispatch(updateCart({ ...product, quantity })).unwrap();
    } catch {
      setGeneralError(errorMesajes.UPDATE_CART);
    } finally {
      setIsCartLoading(false);
    }
  }, [product, quantity, dispatch]);

  const trendingProductsFiltered = useMemo(
    () =>
      products
        .filter((similarProduct) => similarProduct?.id !== product?.id)
        .slice(0, 4),
    [product, products]
  );

  return (
    <ResponsiveContainer customClass="pt-16">
      {loading && <Loader />}
      {generalError && (
        <p className="text-center text-red-500 mb-10">{generalError}</p>
      )}
      {product && (
        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          <ProductImage image={product.image} title={product.title} />
          <ProductInfo
            product={product}
            quantity={quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            handleAddToCart={handleAddToCart}
            disabledButtons={isCartLoading}
          />
        </div>
      )}
      {product && (
        <div className="mt-8">
          <TrendingProducts products={trendingProductsFiltered} />
        </div>
      )}
    </ResponsiveContainer>
  );
}

export default ProductDetail;
