const { override } = require('customize-cra');
const addLessLoader = require('customize-cra-less-loader');

module.exports = override(
  addLessLoader({
    lessLoaderOptions: {
      lessOptions: {
        modifyVars: {
          'primary-color': 'pink',
          'link-color': 'black',
          'text-color' : 'white', // major text color
          'border-radius-base': '2px',
          },
        javascriptEnabled: true,
      },
    },
  }),
);