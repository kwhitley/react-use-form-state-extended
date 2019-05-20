import { useState, useEffect } from 'react'
import { useFormState as ufs } from 'react-use-form-state'

const onlyChanges = original => item => {
  const changes = Object.keys(item).reduce((final, k) => {
    if (original[k] !== item[k]) {
      final[k] = item[k]
    }

    return final
  }, {})

  const hasChanges = Boolean(Object.keys(changes).length)

  return {
    changes: hasChanges ? changes : undefined,
    hasChanges,
  }
}

export const useFormState = (original) => {
  let formState = ufs(original)
  let [ state, controls ] = formState
  let [ meta, setMeta ] = useState({
    numberOfErrors: 0,
    hasErrors: false,
    hasChanges: false,
    onlyChanges: undefined,
    isValid: false,
  })

  const changesFromOriginal = onlyChanges(original)

  useEffect(() => {
    let { changes, hasChanges } = changesFromOriginal(state.values)
    let numberOfErrors = Object.keys(state.errors).length
    let hasErrors = numberOfErrors !== 0
    let isValid = !Object.values(state.validity).includes(false)

    setMeta({
      numberOfErrors,
      hasErrors,
      changes,
      hasChanges,
      isValid,
    })
  }, [state.values])

  return [ { ...state, ...meta }, controls ]
}
