import React from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

const JobsPagination = ({ page, setPage, hasNextPage }) => {
  const adjustPage = amount => {
    setPage(prevPage => prevPage + amount)
  }

  return (
    <div className="buttonContainer">
      {page !== 1 && (
        <button className="arrow" onClick={() => adjustPage(-1)}>
          <FaArrowLeft />
        </button>
      )}
      {page !== 1 && <button onClick={() => adjustPage(1)}>1</button>}
      {page > 2 && <button onClick={() => adjustPage(-1)} />}
      {page > 2 && <button>{page - 1}</button>}
      <button active>{page}</button>
      {hasNextPage && <button onClick={() => adjustPage(1)}>{page + 1}</button>}
      {hasNextPage && (
        <button className="arrow" onClick={() => adjustPage(1)}>
          <FaArrowRight />
        </button>
      )}
    </div>
  )
}

export default JobsPagination
