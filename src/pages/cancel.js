import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const cancel = () => (
  <Layout>
    <SEO title="Cancel" />
    <h1>Cancelled</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default cancel
