import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import DisplayJobs from "../components/Github/DisplayJobs"

const Wrapper = styled.section`
  display: block;
  width: 100%;
  height: auto;
`

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <DisplayJobs />
      </Wrapper>
    </Layout>
  )
}

export default Home
