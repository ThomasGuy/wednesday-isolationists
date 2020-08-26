module.exports = {
  siteMetadata: {
    title: `Wednesday Isolationists`,
    description: `A collective of UK Artists had no name before the Covid Lockdown, but with this new way of working from home they became the 'Wednesday Isolationists'`,
    author: `TWGuy`,
    siteUrl: 'https://objective-khorana-6827da.netlify.app',
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `metad`,
        path: `${__dirname}/src/metad`,
      },
    },

    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WednesdayIsolationists`,
        short_name: `WednesdayIsolationists`,
        start_url: `/`,
        background_color: `#282c34`,
        theme_color: `#282c34`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      // options: {
      //   precachePages: [`/about-us/`, `/projects/*`],
      // },
    },
    `gatsby-plugin-netlify`, // make sure to put this last in the array
  ],
};
