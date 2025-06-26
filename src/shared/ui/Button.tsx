'use client'

import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
}

const Button = ({ children, ...props }: ButtonProps) => {
	return <button {...props}>{children}</button>
}

export default Button
