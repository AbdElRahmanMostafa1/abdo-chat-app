import React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';
const Cart = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}>
      <Path d="M8.25 20.248a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM18.75 20.248a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM2.25 3.748h3l2.25 12.75h12" />
      <Path d="M7.5 13.497h11.693a.374.374 0 0 0 .367-.301l1.35-6.75a.376.376 0 0 0-.367-.449H6" />
    </G>
  </Svg>
);
export default Cart;
