import React from "react"
import HeaderWrapper from "./headerWrapper.style"
import Icon from "../../images/gatsby-icon.png"
import gitHub from "../../images/github.png"
import portfolio from "../../images/link_site.png"

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="headerWrapper">
        <div className="header">
          <div className="iconContainer">
            <img src={Icon} alt="icon" className="icon" />
          </div>
          <div className="externalLinks">
            <div className="links">
              <img src={gitHub} alt="gitHub" className="socialIcons" />
              <a
                href="https://github.com/kishore007k"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </div>
            <div className="links">
              <img
                src={portfolio}
                alt="Portfolio Site"
                className="socialIcons"
              />
              <a
                href="https://kishore.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default Header
