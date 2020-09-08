module.exports = {
  siteMetadata: {
    title: `Wednesday Isolationists`,
    description: `A collective of UK Artists had no name before the Covid Lockdown, but with this new way of working from home they became the 'Wednesday Isolationists'`,
    author: `TWGuy`,
    siteUrl: 'https://wednesday-isolationists.co.uk',
  },
  plugins: [
    `gatsby-plugin-advanced-sitemap`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-preload-fonts`,
      options: {
        crossOrigin: `use-credentials`,
      },
    },
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
        // icons: [
        //   {
        //     src: 'src/icons/gatsby-icon.png',
        //     type: 'image/png',
        //     sizes: '196x196',
        //     purpose: 'any maskable',
        //   },
        // ],
        icon: 'src/icons/gatsby-icon.png',
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`, // make sure to put this last in the array
  ],
};
