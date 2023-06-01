import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styles from './Read.module.css';
import { PaginationItem } from './styles';

const Pagination = ({ pages, count, setCurrentPages, currentPage }) => {

    return (
        <div className={styles.pagination}>
            <p>Total: {count}</p>

            <div className={styles.paginationButton}>

                {currentPage > 1 && (
                    <div
                        className={styles.pagination_item}
                        onClick={() => setCurrentPages(currentPage - 1)}
                    >
                        <KeyboardArrowLeftIcon />
                    </div>
                )}
                {
                    pages.map((page) => (
                        <PaginationItem
                            key={page}
                            className={styles.pagination_item}
                            onClick={() => setCurrentPages(page)}
                            isSelect={page === currentPage}
                        >
                            <div className={styles.item}>{page}</div>

                        </PaginationItem>
                    ))
                }
                {currentPage < pages.length && (
                    <div
                        className={styles.pagination_item}
                        onClick={() => setCurrentPages(currentPage + 1)}
                    >
                        <KeyboardArrowRightIcon />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Pagination;