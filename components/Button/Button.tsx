import { forwardRef } from "react"
import clsx from "clsx"

interface LinkProps {
  to?: string
  href?: string
  target?: string
  rel?: string
  type?: string
  title?: string
  onClick?: () => void
}

interface ButtonProps extends LinkProps {
  children: React.ReactNode
  variant?: "default" | "primary" | "text"
  size?: "sm" | "md" | "lg"
  as?: React.ElementType
  ref?: React.Ref<HTMLButtonElement>
}

const ButtonWrapper = ({
  as = "button",
  variant = "default",
  size = "md",
  children,
  ...props
}: ButtonProps) => {
  const Component = as
  return (
    <Component
      className={clsx(
        "relative inline-flex cursor-pointer items-center border font-semibold transition-colors",
        variant === "default" &&
          "hover:border-gray-high hover:bg-gray-high border-background hover:text-gray-100",
        variant === "primary" &&
          "hover:border-gray-high hover:text-gray-high bg-background text-gray-100 hover:bg-gray-100",
        variant === "text" && "",
        size === "sm" && "h-8 rounded px-2 text-sm",
        size === "md" && "h-11 gap-2 rounded-full px-4",
        size === "lg" && "h-16 gap-3 rounded-full px-6 text-2xl font-bold"
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export const Button = ({ variant, size, children }: ButtonProps) => {
  return (
    <ButtonWrapper variant={variant} size={size}>
      {children}
    </ButtonWrapper>
  )
}

// button link forwardRef
// eslint-disable-next-line react/display-name
export const ButtonLink = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <ButtonWrapper as="a" target="_blank" {...props} ref={ref}>
        {children}
      </ButtonWrapper>
    )
  }
)
