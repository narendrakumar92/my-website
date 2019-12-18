module.exports = {
  siteMetadata: {
    title: 'Welcome',
    author: 'Narendra'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    { //change it to object so we can set up options 
      resolve:  'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              // automatically resize your image
              maxWidth: 750,
              linkImagesToOriginal: false //click image doesnot go to original
            }
          }
        ]
      }
    }
   
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
