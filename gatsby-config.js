module.exports = {
    siteMetadata: {
        title: 'Gatsby + Directus'
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-typography',
            options: {
              pathToConfigModule: 'src/utils/typography.js',
            },
        },
        'gatsby-plugin-netlify-cms'
    ]
};