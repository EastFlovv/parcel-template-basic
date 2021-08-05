// ESM -> import, export : nodeJS에서 미지원
//CommonJS : nodeJS에서 지원

//import autoprefixer from 'autoprefixer'
const autoprefixer = require('autoprefixer');

//export {
//   plugins : [
//     autoprefixer
//   ]
// };
module.exports = {
  plugins : [
    autoprefixer
  ]
};