import usePagination from '@/hooks/usePagination'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination'
import React from 'react'

type ListPaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

function ListPagination({
  currentPage,
  totalPages,
  onPageChange,
}: ListPaginationProps) {
  const { pages, hasPrev, hasNext, prevPage, nextPage } =
    usePagination(currentPage, totalPages)

  const handleClick = (e: React.MouseEvent, page: number | null) => {
    e.preventDefault()
    if (page && page !== currentPage) onPageChange(page)
  }

  return (
    <Pagination>
      <PaginationContent>
        {hasPrev && (
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => handleClick(e, prevPage)}
            />
          </PaginationItem>
        )}
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              isActive={page === currentPage}
              onClick={(e) => handleClick(e, page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {hasNext && (
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => handleClick(e, nextPage)}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}

export default ListPagination
