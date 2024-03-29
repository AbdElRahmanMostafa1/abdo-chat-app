import React from 'react';
import Svg, {SvgProps, Mask, Path, G} from 'react-native-svg';
const Filter = (props: SvgProps) => (
  <Svg width={29} height={28} fill="none" {...props}>
    <Mask id="a" width={29} height={28} x={0} y={0} maskUnits="userSpaceOnUse">
      <Path fill="#D9D9D9" d="M.5 0h28v28H.5z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#fff"
        d="M13.333 24.5v-7h2.334v2.333H25v2.334h-9.333V24.5h-2.334ZM4 22.167v-2.334h7v2.334H4ZM8.667 17.5v-2.333H4v-2.334h4.667V10.5H11v7H8.667Zm4.666-2.333v-2.334H25v2.334H13.333ZM18 10.5v-7h2.333v2.333H25v2.334h-4.667V10.5H18ZM4 8.167V5.833h11.667v2.334H4Z"
      />
    </G>
  </Svg>
);
export default Filter;
