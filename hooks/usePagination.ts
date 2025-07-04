import { useMemo } from 'react'

function usePagination(currentPage: number, totalPages: number) {
  return useMemo(() => {
    const groupSize = 5

    const currentGroup = Math.floor((currentPage - 1) / groupSize)
    const startPage = currentGroup * groupSize + 1
    const endPage = Math.min(startPage + groupSize - 1, totalPages)

    const pages = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    )

    const hasPrev = currentPage > 1
    const hasNext = currentPage < totalPages

    return {
      pages,
      hasPrev,
      hasNext,
      prevPage: hasPrev ? currentPage - 1 : null,
      nextPage: hasNext ? currentPage + 1 : null,
    }
  }, [currentPage, totalPages])
}

export default usePagination
