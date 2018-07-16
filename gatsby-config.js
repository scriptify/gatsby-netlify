module.exports = {
    siteMetadata: {
        title: 'Gatsby + NetlifyCMS'
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-typography',
            options: {
              pathToConfigModule: 'src/utils/typography.js',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
              name: 'cms',
              path: `${__dirname}/cms/`,
            },
        },
        'gatsby-plugin-netlify-cms'
    ]
};