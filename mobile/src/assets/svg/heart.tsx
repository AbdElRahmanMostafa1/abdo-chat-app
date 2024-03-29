import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Heart = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.543 3.75c-3.043 0-4.543 3-4.543 3s-1.5-3-4.543-3C4.984 3.75 3.025 5.82 3 8.288c-.052 5.125 4.065 8.77 8.578 11.832a.75.75 0 0 0 .844 0c4.512-3.062 8.63-6.707 8.578-11.832-.025-2.469-1.984-4.538-4.457-4.538v0Z"
    />
  </Svg>
);
export default Heart;
