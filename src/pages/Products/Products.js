import React, { Suspense, useEffect, useState } from "react";
import ProductsUi from "../../components/Products/ProductsUi";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../RTK/slices/productSlice";
import Paginate from "../../components/ReactPaginate/ReactPaginate";
import SkeletonLoading from "../../components/LazyLoaing/SkeletonLoading";
import { setPage } from "../../RTK/slices/pagination";

const Products = () => {
  const dispatch = useDispatch();
  const { allProducts, count, loading } = useSelector(
    (state) => state.products
  );

  console.log(allProducts);

  const { page } = useSelector((state) => state.pagination);
  const [pageCount, setPageCount] = useState(0);
  const [name, setName] = useState("");
  const [state, setState] = useState(null);

  const calculatePageCount = (count) => {
    return Math.ceil(count / 6);
  };

  useEffect(() => {
    if (name.trim() !== "" || state !== "") {
      dispatch(
        fetchProducts({
          name,
          state,
        })
      );
    } else {
      dispatch(fetchProducts());
    }
    setPageCount(calculatePageCount(count));
  }, [page, count, dispatch]);

  const handlePageClick = (data) => {
    let currentPage = data.selected + 1;
    dispatch(setPage(currentPage));
  };
  return (
    <section className="content">
      <h1>Products</h1>
      {loading ? (
        <SkeletonLoading />
      ) : (
        <Suspense fallback={<SkeletonLoading />}>
          <ProductsUi data={allProducts} />
        </Suspense>
      )}

      <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
    </section>
  );
};

export default Products;
