import { useState, useEffect } from 'react'

export const usePaginationClick = () => {
  const [isPaginationItemClicked, setPaginationItemClicked] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const isPaginationItem = event.target.closest('.page-link')

      if (isPaginationItem) {
        // Устанавливаем флаг клика по пагинации
        setPaginationItemClicked(true)
      } else if (isPaginationItemClicked) {
        // Сбрасываем флаг только если он установлен
        setPaginationItemClicked(false)
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [isPaginationItemClicked])

  return { isPaginationItemClicked, setPaginationItemClicked }
};
