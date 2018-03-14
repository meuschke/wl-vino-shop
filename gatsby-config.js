module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        // One convention is to place your Netlify CMS customization code in a
        // `src/cms` directory.
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-source-shopify-storefront',
      options: {
        // Your Shopify instance name (e.g. 'shopify-store-name',
        // if your shopify shop is located at https://shopify-store-name.myshopify.com/)
        siteName: 'vinomore-test',
        // Your Shopify Storefront API access token
        // generated in the private apps section of your store admin.
        // Refer to Shopify's Storefront API Documentation for more information
        // https://help.shopify.com/api/storefront-api/getting-started
        accessToken: 'd4d827b50bddf07a893ee70a8b8d0e68',
        collectionQuery: `title:'Test Shop'`
      },
    }
  ]
};
