<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  Gatsby and Stripe E-Commerce Store
</h1>

## Gatsby Set Up
### 1. Install Gatsby
  <p>Head over to <a href="https://www.gatsbyjs.org/docs/quick-start">Gatsby Quick Start</a> to get a quick start guide and template going.
  </p>

### 2. gatsby-config.js Set Up
<p>
Begin by editing the config set up to your liking. 
When adding gatsby plugins you will want to set them up here as well much like webpack plugins
</p>
<p>
  Here you can see we added a couple plugins such as gatsby-plugin-stripe and gatsby-source-stripe
</p>
<code>
plugins: [
    "gatsby-plugin-stripe",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: [`Product`, `Sku`],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
</code>
