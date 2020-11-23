import React, { useState } from "react"
import PreLoader from "./PreLoader"
import useFetchJobs from "./useFetchJobs"
import Job from "./Job"
import JobsPagination from "./JobsPagination"
import SearchForm from "./SearchForm"
import Wrapper from "./githubJobs.style"

const DisplayJobs = () => {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  const handleParmsChange = e => {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }
  console.log(`Error is ${error}`)

  return (
    <Wrapper>
      <h1 className="title">GitHub Jobs</h1>
      <SearchForm params={params} onParamChange={handleParmsChange} />
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <PreLoader />}
      {error && <h1>Error. Try Refreshing</h1>}
      {jobs.map(job => {
        return (
          <div key={job.id} className="cardContainer">
            <Job job={job} />
          </div>
        )
      })}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Wrapper>
  )
}

export default DisplayJobs
