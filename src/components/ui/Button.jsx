'use client'

import { ArrowRight } from 'lucide-react'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon = false,
}) => {
  const baseStyles =
    'font-bold transition-all duration-300 inline-flex items-center justify-center space-x-2 group'

  const variants = {
    primary:
      'bg-green-500 hover:bg-green-600 text-slate-950 shadow-xl shadow-green-500/20 hover:shadow-green-500/40',
    secondary:
      'border-2 border-slate-800 hover:border-cyan-500/50 bg-slate-900/50 backdrop-blur-sm text-white',
    outline:
      'border-2 border-cyan-500/50 hover:bg-cyan-500/10 text-white',
    ghost: 'text-slate-400 hover:text-cyan-400',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs rounded-md',
    md: 'px-8 py-4 text-sm rounded-lg',
    lg: 'px-10 py-5 text-base rounded-xl',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  )
}

export default Button
