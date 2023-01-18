import ReactPaginate from "react-paginate";
import styles from "./.module.styl";

function Pagination({ setCurrentPage }) {
	return (
		<ReactPaginate
			onPageChange={({ selected }) => setCurrentPage(++selected)}
			breakLabel="..."
			previousLabel="<"
			nextLabel=">"
			pageRangeDisplayed={4}
			pageCount={4}
			renderOnZeroPageCount={null}
			className={styles.pagination}
			previousClassName={styles.pagination__arrow}
			previousLinkClassName={styles.pagination__arrow__link}
			nextClassName={styles.pagination__arrow}
			nextLinkClassName={styles.pagination__arrow__link}
			disabledLinkClassName={styles.pagination__arrow__linkDisabled}
			pageClassName={styles.pagination__item}
			pageLinkClassName={styles.pagination__link}
			activeLinkClassName={styles.pagination__linkActive}
		/>
	);
}

export default Pagination;
