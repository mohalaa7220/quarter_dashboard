import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductDetails } from "../../RTK/slices/productSlice";
import ProductDetailsUi from "../../components/Products/ProductDetailsUi";
import SkeletonLoading from "../../components/LazyLoaing/SkeletonLoading";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { productDetails, loading } = useSelector((state) => state.products);

  console.log(productDetails);

  useEffect(() => {
    dispatch(getProductDetails(productId));
  }, [dispatch, productId]);

  return (
    <>
      {loading ? (
        <SkeletonLoading />
      ) : (
        <Suspense fallback={<SkeletonLoading />}>
          <ProductDetailsUi product={productDetails} />
        </Suspense>
      )}
    </>
  );
};

export default ProductDetails;
