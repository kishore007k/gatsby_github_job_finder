import React from "react"

const SearchForm = ({ params, onParamChange }) => {
  return (
    <form>
      <div>
        <label htmlFor="description">Description</label>
        <input
          onChange={onParamChange}
          value={params.description}
          name="description"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          onChange={onParamChange}
          value={params.location}
          name="location"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="checkbox">Only Full Time</label>
        <input
          onChange={onParamChange}
          value={params.full_time}
          type="checkbox"
          className="mb-2"
        />
      </div>
    </form>
  )
}

export default SearchForm
