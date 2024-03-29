import React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';
const Search = (props: SvgProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <G stroke="#37424D" strokeMiterlimit={10} strokeWidth={1.5}>
      <Path d="M10.864 2.997a7.364 7.364 0 1 0 0 14.727 7.364 7.364 0 0 0 0-14.727Z" />
      <Path strokeLinecap="round" d="M16.357 15.856 21.5 21" />
    </G>
  </Svg>
);
export default Search;
