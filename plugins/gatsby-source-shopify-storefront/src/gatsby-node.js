const crypto = require('crypto');
const productQuery = require('./product-query');

exports.sourceNodes = async (
  { boundActionCreators },
  { siteName, accessToken, collectionQuery }
) => {
  const { createNode } = boundActionCreators;
  const client = require('graphql-client')({
    url: `https://${siteName}.myshopify.com/api/graphql`,
    headers: {
      'X-Shopify-Storefront-Access-Token': accessToken
    }
  });

  const response = await client.query(productQuery, {query: collectionQuery});
  console.log(response)
  if (
    response &&
    response.data &&
    response.data.shop &&
    response.data.shop.collections &&
    response.data.shop.collections.edges &&
    response.data.shop.collections.edges[0].node &&
    response.data.shop.collections.edges[0].node.products &&
    response.data.shop.collections.edges[0].node.products.edges
  ) {
    response.data.shop.collections.edges[0].node.products.edges.forEach(({ node }) => {
      node.parent = null;
      node.children = [];
      node.internal = {
        mediaType: 'application/json',
        type: 'ShopifyProducts',
        contentDigest: crypto
          .createHash('md5')
          .update(JSON.stringify(node))
          .digest('hex'),
        content: JSON.stringify(node)
      };

      createNode(node);
    });
  }

  return;
};
