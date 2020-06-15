module.exports = {
  siteMetadata: {
    title: `martylouis.com`,
    description: `Design and Code by Marty Louis`,
    author: `@martylouis`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-postcss`,
      // options: {
      //   postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      // },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `martylouis-com`,
        short_name: `martylouis-com`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/martylouis-logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: `xgr1ass`,
        },
        google: {
          families: [`Inter:300,400,600,700,900`],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: `Palenight Theme`,
              extensions: [`material-palenight-theme`],
              wrapperClassName: `vscode`,
              injectStyles: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        develop: false,
        tailwind: true,
        // purgeOnly: [`src/css/global.css`],
      },
    },
  ],
};
