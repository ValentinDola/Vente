import * as React from "react"
import Svg, { RadialGradient, Stop, Path, Circle } from "react-native-svg"

const Instagram = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={30}
    height={30}
    {...props}
  >
    <RadialGradient
      id="a"
      cx={19.38}
      cy={42.035}
      r={44.899}
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset={0} stopColor="#fd5" />
      <Stop offset={0.328} stopColor="#ff543f" />
      <Stop offset={0.348} stopColor="#fc5245" />
      <Stop offset={0.504} stopColor="#e64771" />
      <Stop offset={0.643} stopColor="#d53e91" />
      <Stop offset={0.761} stopColor="#cc39a4" />
      <Stop offset={0.841} stopColor="#c837ab" />
    </RadialGradient>
    <Path
      fill="url(#a)"
      d="m34.017 41.99-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008z"
    />
    <RadialGradient
      id="b"
      cx={11.786}
      cy={5.54}
      r={29.813}
      gradientTransform="matrix(1 0 0 .6663 0 1.849)"
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset={0} stopColor="#4168c9" />
      <Stop offset={0.999} stopColor="#4168c9" stopOpacity={0} />
    </RadialGradient>
    <Path
      fill="url(#b)"
      d="m34.017 41.99-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008z"
    />
    <Path
      fill="#fff"
      d="M24 31c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
    />
    <Circle cx={31.5} cy={16.5} r={1.5} fill="#fff" />
    <Path
      fill="#fff"
      d="M30 37H18c-3.859 0-7-3.14-7-7V18c0-3.86 3.141-7 7-7h12c3.859 0 7 3.14 7 7v12c0 3.86-3.141 7-7 7zM18 13c-2.757 0-5 2.243-5 5v12c0 2.757 2.243 5 5 5h12c2.757 0 5-2.243 5-5V18c0-2.757-2.243-5-5-5H18z"
    />
  </Svg>
)

export default Instagram;
