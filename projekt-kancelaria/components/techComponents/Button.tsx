import clsx from 'clsx'

type ButtonProps = {
    name?: string
    type: 'button'
    icon?: React.ReactElement
    variant?: 
    | 'opacity'
    | 'blueOpacity'
    onClick?: any
    className?: string
    children?: any
}

const Button: React.FC<ButtonProps> = ({
    name,
    type,
    icon,
    variant,
    className,
    onClick,
    children,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={clsx(
                'flex text-white items-center justify-center text-ButtonFont',
                {
                    'flex h-40 text-ButtonFont items-center justify-center ': variant === 'opacity'
                },
                className
            )}
        >
            {name}
            {icon && <span className='inline-block'>{icon}</span>}
            {children}
        </button>
    )
}

export default Button