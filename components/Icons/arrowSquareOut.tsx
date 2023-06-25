import { IconProps } from "."

export const ArrowSquareOut = (props: IconProps) => {
  const size = props.size || "100%"
  const title = props.title || "arrow square out"

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
      <path
        fill="currentColor"
        d="M222 104a6 6 0 0 1-12 0V54.49l-69.75 69.75a6 6 0 0 1-8.48-8.48L201.51 46H152a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6Zm-38 26a6 6 0 0 0-6 6v72a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h72a6 6 0 0 0 0-12H48a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14v-72a6 6 0 0 0-6-6Z"
      />
    </svg>
  )
}
