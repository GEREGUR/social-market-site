interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Helper function to generate an array of page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <nav className="flex justify-center my-4">
      <ul className="pagination flex flex-row">
        {/* First page button */}
        <li className="mr-1">
          <button
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-10"
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
          >
            First
          </button>
        </li>

        {/* Previous page button */}
        <li className="mr-1">
          <button
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
        </li>

        {/* Display a range of visible page numbers */}
        {getPageNumbers().map((page) => (
          <li key={page} className="mr-1">
            <button
              className={`${
                page === currentPage ? 'bg-black text-white' : 'bg-white text-blue-500 hover:bg-gray-200'
              } font-bold py-2 px-4 rounded`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}

        {/* Next page button */}
        <li className="mr-1">
          <button
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>

        {/* Last page button */}
        <li>
          <button
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-10"
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            Last
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
