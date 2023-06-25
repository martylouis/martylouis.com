import { IconProps } from "."

export const LogoMartyLouis = (props: IconProps) => {
  const size = props.size || "100%"
  const title = props.title || "Marty Louis Logo"
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      aria-hidden="false"
      focusable="false"
      {...props}
    >
      <title>{title}</title>
      {/* <rect width="256" height="256" fill="transparent" /> */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M127.1 141.155C127.5 140.455 128.5 140.455 128.9 141.155L154.292 186.773C154.492 187.073 154.791 187.273 155.191 187.273H254.96C255.759 187.273 256.259 186.473 255.859 185.773L235.666 149.458C235.466 149.158 235.166 148.958 234.766 148.958H176.485C176.085 148.958 175.785 148.758 175.585 148.458L128.9 64.5252C128.5 63.8249 127.5 63.8249 127.1 64.5252L99.1092 114.845C98.7093 115.545 97.7097 115.545 97.3098 114.845L69.3187 64.5252C68.9188 63.8249 67.9191 63.8249 67.5193 64.5252L0.140736 185.773C-0.259137 186.473 0.240706 187.273 1.04045 187.273H41.3276C41.7275 187.273 42.0274 187.073 42.2273 186.773L67.6192 141.155C68.0191 140.455 69.0188 140.455 69.4187 141.155L97.4097 191.475C97.8096 192.175 98.8093 192.175 99.2092 191.475L127.1 141.155Z"
        fill="currentColor"
      />
    </svg>
  )
}
