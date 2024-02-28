import React from 'react'


interface ButtonProps {
    text: string,
    width: string,
    action: any
  }

const AppButton: React.FC<ButtonProps> = ({text, width, action = undefined}) => {
  const buttonClass = `btn btn-primary btn-block mb-4 w-${width}`

  return (
    <button type="submit" className={buttonClass} onClick={action}>
        {text}
    </button>
  )
}

export default AppButton