import React, { useState } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsStickiesFill } from "react-icons/bs";
import "../index.css"

const ButtonCopy = ({ color }) => {

  const [copied, setCopied] = useState(false)

  const handleCopied = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2500);
  }
  return (
    <div className={`${copied && "border border-5 border-info bg-dark"} d-flex flex-column text-center`}>
      <p className={`${copied && "text-info"} my-0`}>{copied ? "copiado" : "copiar"}</p>
      <CopyToClipboard
        text={color}
        onCopy={handleCopied}>
        <span className='fs-4 button-copy'>
          <BsStickiesFill
            className={`${copied && "text-info"} my-0`}
          /></span>
      </CopyToClipboard>
    </div>
  )
}

export default ButtonCopy

