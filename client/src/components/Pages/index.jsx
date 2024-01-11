import Pagination from 'react-bootstrap/Pagination';
import { useNavigate } from 'react-router-dom';

export function Pages({ currentPage, resource, totalCount, limit }) {
  const navigate = useNavigate();

  const totalPages = Math.ceil(totalCount / limit);

  const handlePageClick = (pageNumber) => {
    navigate(`/${resource}/${pageNumber}`);
  };

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <Pagination className='d-flex align-items-end justify-content-center'>
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={currentPage === page}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
}
