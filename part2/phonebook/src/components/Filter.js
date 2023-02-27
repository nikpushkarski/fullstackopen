import React from 'react'

const Filter = ({ searchTerm, handleSearchChange }) => (
  <div>
    filter by name: <input value={searchTerm} onChange={handleSearchChange} />
  </div>
)

export default Filter