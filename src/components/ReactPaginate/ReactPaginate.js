import styles from "./style.module.css";
import ReactPaginate from "react-paginate";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Paginate = ({ pageCount, handlePageClick }) => {
  return (
    <ReactPaginate
      previousLabel={<MdKeyboardDoubleArrowLeft />}
      previousClassName={`page-item ${styles["page-item"]}`}
      previousLinkClassName={`page-link ${styles["page-link"]}`}
      nextLabel={<MdKeyboardDoubleArrowRight />}
      nextClassName={`page-item ${styles["page-item"]}`}
      nextLinkClassName={`page-link ${styles["page-link"]}`}
      breakClassName="d-none"
      pageCount={pageCount}
      onPageChange={handlePageClick}
      containerClassName={`pagination justify-content-center ${styles.pagination}`}
      pageClassName={`page-item ${styles["page-item"]}`}
      pageLinkClassName={`page-link ${styles["page-link"]}`}
      activeLinkClassName={styles["active_pagination"]}
    />
  );
};

export default Paginate;
