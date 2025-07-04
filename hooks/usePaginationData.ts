import { useMemo } from 'react'

function usePaginationData<T>(data: T[], currentPage: number) {
  return useMemo(() => {
    const itemsPerPage = 9

    const totalPages = Math.ceil(data.length / itemsPerPage)
    const startIdx = (currentPage - 1) * itemsPerPage
    const currentPageData = data.slice(
      startIdx,
      startIdx + itemsPerPage,
    )

    return { currentPageData, totalPages }
  }, [data, currentPage])
}

export default usePaginationData
