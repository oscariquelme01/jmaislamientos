// @ts-nocheck

import React from 'react'
import { twMerge } from 'tailwind-merge'

// determine the type of input we are rendering, this might be better done in different files but it was too much copy and pasting code
// and I think changing the input behaviour would become really difficult
const inputTypes = {
  simple: {
    isValidSpecificClassnames: '',
    hasErrorSpecificClassnames: '',
    labelSpecificClassnames:
      '-translate-y-6 top-3 peer-focus:start-0 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6',
    inputSpecificClassnames: 'py-2.5 px-0 bg-transparent border-0 border-b-2',
  },
  fill: {
    isValidSpecificClassnames: '',
    hasErrorSpecificClassnames: '',
    labelSpecificClassnames:
      '-translate-y-4 top-4 start-2.5 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4',
    inputSpecificClassnames:
      'rounded-t-lg px-2.5 pb-2.5 pt-5 bg-gray-100 border-0 border-b-2',
  },
  outline: {
    isValidSpecificClassnames: '',
    hasErrorSpecificClassnames: '',
    labelSpecificClassnames:
      '-translate-y-4 top-2 bg-white start-1 px-2 peer-focus:px-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4',
    inputSpecificClassnames:
      'px-2.5 pb-2.5 pt-4 bg-transparent rounded-lg border-[1px]',
  },
}

// The id prop will be passed as the id to the input variable so that you can access the value of the input, this could probably be a ref
// The lable is the placeholder that will float when the input is focused
// To configure the colors of the input, you can use the inputClassname and labelClassname props
// The inputClassname prop will affect the color of the text and border when its being written
// The labelClassname will affect the color of the text of the label that floats when focused
// The isValid and hasError Props must be reactive values and will allow the parent component of the input to set the state and provide some user feedback
// The isValidHint and hasErrorHint Props default to True and will control whether the input shows feedback when the input is valid or has errors. When ommited or when they are empty strings, the hints won't show
// The type prop can take 3 different values: simple | outline | fill, it will alter how it looks
// The onChange prop will be a function passed to the input element to update state most likely
function Input({
  id,
  label = '',
  inputClassname = '',
  labelClassname = '',
  isValid,
  hasError,
  isValidHint = '',
  hasErrorHint = '',
  type = 'simple',
  onChange,
}) {
  type = type.toLowerCase()
  if (!inputTypes[type]) {
    console.warn('Wrong Input type prop, defaulting to simple')
    type = 'simple'
  }

  const inputType = inputTypes[type]

  return (
    <div>
      <div className="relative">
        <input
          type="text"
          id={id}
          className={twMerge(
            'peer block w-full appearance-none border-gray-400 text-sm text-black focus:border-sky-600 focus:outline-none focus:ring-0',
            inputType.inputSpecificClassnames,
            inputClassname,
            isValid && 'border-green-600 focus:border-green-600',
            hasError && 'border-red-600 focus:border-red-600',
          )}
          autoComplete='off'
          placeholder=""
          onChange={onChange}
        />
        <label
          htmlFor={id}
          className={twMerge(
            'absolute z-10 origin-[0] scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:text-sky-500',
            inputType.labelSpecificClassnames,
            labelClassname,
            // TODO: should it overwrite on focus???
            isValid && 'text-green-500 peer-focus:text-green-500',
            hasError && 'text-red-500 peer-focus:text-red-500',
          )}
        >
          {label}
        </label>

        {/* Error & Success messages and feedback */}
      </div>
      {isValid && isValidHint && (
        <p id="" className="mt-2 text-xs text-green-600">
          {isValidHint}
        </p>
      )}
      {hasError && hasErrorHint && (
        <p id="" className="mt-2 text-xs text-red-600">
          {hasErrorHint}
        </p>
      )}
    </div>
  )
}

export default Input
