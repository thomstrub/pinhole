/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Puget Sound Pinhole Society`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`,`https://fonts.gstatic.com`],
        web: [
          {
            name: `Karla`,
            file: `https://fonts.googleapis.com/css?family=Karla`,
          },
          {
            name: `Karla`,
            file: `https://fonts.googleapis.com/css2?family=Karla:wght@800&display=swap`,
          },
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
          }
        ],
      },
    },
  ],
}
