import { IconProps } from '.'

export const PaperPlane = (props: IconProps) => {
  const size = props.size || '100%'
  const title = props.title || 'send'

  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      aria-hidden="false"
      focusable="false"
      {...props}
    >
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M30.65,1.24a1,1,0,0,0-.976-.185l-29,10A1,1,0,0,0,.4,12.8l6.183,4.638L17.638,11,9,19.25V30a1,1,0,0,0,.587.91A.983.983,0,0,0,10,31a1,1,0,0,0,.659-.247l6.313-5.524L24.4,30.8a1,1,0,0,0,1.584-.624l5-28A1,1,0,0,0,30.65,1.24Z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}
