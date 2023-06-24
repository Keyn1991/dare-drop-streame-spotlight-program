import {PaginationProps} from "../../interface/interface";
import Button from "@mui/material/Button";

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, handlePrevPage, handleNextPage }) => {
    return (
        <div>
            <Button variant="contained" disabled={currentPage === 1} onClick={handlePrevPage} style={{ margin: '10px' }}>
                Previous Page
            </Button>
            <span>
        Page {currentPage} of {totalPages}
      </span>
            <Button variant="contained" disabled={currentPage === totalPages} onClick={handleNextPage} style={{ marginLeft: '10px' }}>
                Next Page
            </Button>
        </div>
    );
};

export default Pagination;