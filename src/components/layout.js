import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "../components/Footer/footer"
import Header from "./Header/header"
import "./layout.css"
import styled from "styled-components"

const Wrapper = styled.section`
  max-width: 1170px;
  margin: auto;
  min-height: 100vh;
  display: block;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {children}
      <Footer />
    </Wrapper>
  )
}

export default Layout
