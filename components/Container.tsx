import clsx from 'clsx'

export interface ContainerProps {
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
}

function Container({
  size = 'md',
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={clsx(
        'mx-auto w-full px-6 md:px-8 xl:px-0',
        size === 'sm' && 'max-w-screen-sm',
        size === 'md' && 'max-w-screen-md',
        size === 'lg' && 'max-w-screen-lg',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
