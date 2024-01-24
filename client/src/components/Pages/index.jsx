import Pagination from 'react-bootstrap/Pagination'
import { useNavigate } from 'react-router-dom'
import { usePaginationClick } from '../../hooks/usePaginationClick'

export function Pages({ currentPage, resource, totalCount, limit }) {
  const navigate = useNavigate()
  const { setPaginationItemClicked } = usePaginationClick()


  const totalPages = Math.ceil(totalCount / limit);

  const handlePageClick = (event, pageNumber) => {
    event.preventDefault()
    setPaginationItemClicked(true)
    setTimeout(() => {
      navigate(`/${resource}/${pageNumber}`)
    }, 0)
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <Pagination className='d-flex align-items-end justify-content-center'>
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={currentPage === page}
          onClick={(event) => handlePageClick(event, page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  )
}
