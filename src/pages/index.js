import React from "react"
import Layout from "../components/layout"
import Products from '../components/products'
import SEO from "../components/seo"

const IndexPage = () => {
 
  return (
    <Layout>
      <SEO title="Home" />
      <Products />
    </Layout>
  )
}

export default IndexPage
