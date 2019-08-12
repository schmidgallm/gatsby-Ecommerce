import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const success = () => (
  <Layout>
    <SEO title="Success" />
    <h1>Success</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default success
