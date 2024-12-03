import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function BtnBack(props:any) {
  return (
    <Svg
      width={50}
      height={50}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={25} cy={25} r={25} fill="#F9EF05" />
    </Svg>
  )
}

export default BtnBack