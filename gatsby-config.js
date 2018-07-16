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
        'gatsby-transformer-remark',
        'gatsby-plugin-netlify-cms'
    ]
};