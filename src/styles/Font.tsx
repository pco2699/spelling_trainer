import OverPassEotIe from './fonts/overpass-v4-latin-regular.eot';
import OverPassEotWoff2 from './fonts/overpass-v4-latin-regular.woff2'; /* Super Modern Browsers */
import OverPassEotWoff from './fonts/overpass-v4-latin-regular.woff'; /* Modern Browsers */
import OverPassEotTtf from './fonts/overpass-v4-latin-regular.ttf'; /* Safari, Android, iOS */
import OverPassSvg from './fonts/overpass-v4-latin-regular.svg';


export const overpass = {
    fontFamily: 'Overpass',
    fontStyle: 'normal',
    fontWeight: 400,
    src: `
        local('Overpass Regular'), local('Overpass-Regular'),
        url(${OverPassEotIe}?#iefix) format('embedded-opentype'), /* IE6-IE8 */
        url(${OverPassEotWoff2}) format('woff2'), /* Super Modern Browsers */
         url(${OverPassEotWoff}) format('woff'), /* Modern Browsers */
         url(${OverPassEotTtf}) format('truetype'), /* Safari, Android, iOS */
         url(${OverPassSvg}#Overpass) format('svg'); /* Legacy iOS */
    `
}