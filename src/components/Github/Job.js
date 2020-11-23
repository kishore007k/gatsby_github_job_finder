import React, { useState } from "react"
import ReactMarkdown from "react-markdown"
import Default from "../../images/default.png"

const Job = ({ job }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="card">
      <div className="titleAndImage">
        <div className="contents">
          <div className="titleAndDate">
            <h2 className="companyTitle">
              {job.title} - <span>{job.company}</span>
            </h2>
            <h4 className="dateCreated">
              {new Date(job.created_at).toLocaleDateString()}
            </h4>
          </div>

          <div className="preAndCode">
            <pre>
              <code variant="primary" className="jobType">
                {job.type}
              </code>
            </pre>
            <pre>
              <code variant="secondary">{job.location}</code>
            </pre>
          </div>
          <div className="hotToApply">
            <p>How to Apply:-</p>
            <ReactMarkdown source={job.how_to_apply} />
          </div>
          <div className="viewAndHideBtn">
            <button
              onClick={() => setOpen(prevOpen => !prevOpen)}
              variant="primary"
            >
              {!open ? "View Details" : "Hide Details"}
            </button>
          </div>
        </div>
        <div className="companyImgContainer">
          {job.company_logo ? (
            <img
              src={job.company_logo}
              alt={job.company_logo}
              className="companyImage"
              height="50"
            />
          ) : (
            <img src={Default} alt="Company logo" className="companyImage" />
          )}
        </div>
      </div>
      <div className="details">
        {open && (
          <div>
            <ReactMarkdown source={job.description} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Job
