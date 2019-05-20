import { renderHook, cleanup, act, unmount } from 'react-hooks-testing-library'

// test files
import { useFormState } from '../src/index.js'

const VALUE = 0
const SETTER = 1

describe('react-use-form-state-extended', () => {
  describe('useFormState()', () => {
    let defaultForm = { email: '' }

    test('exports via { useFormState } named export', () => {
      expect(typeof useFormState).toBe('function')
    })

    describe('.isValid [boolean]', () => {
      test('defaults to true', () => {
        const { result } = renderHook(() => useFormState(defaultForm))
        let [ form ] = result.current

        expect(form.isValid).toBe(true)
      })
    })

    describe('.numberOfErrors [number]', () => {
      test('defaults to 0', () => {
        const { result } = renderHook(() => useFormState(defaultForm))
        let [ form ] = result.current

        expect(form.numberOfErrors).toBe(0)
      })
    })

    describe('.hasErrors [boolean]', () => {
      test('defaults to false', () => {
        const { result } = renderHook(() => useFormState(defaultForm))
        let [ form ] = result.current

        expect(form.hasErrors).toBe(false)
      })

      test('returns true if any errors', () => {
        const { result } = renderHook(() => useFormState(defaultForm))
        let [ form ] = result.current

        act(() => form.setField('email', 'foo'))

        expect(result.current[0].hasErrors).toBe(true)
      })
    })

    describe('.hasChanges [boolean]', () => {
      test('defaults to false', () => {
        const { result } = renderHook(() => useFormState(defaultForm))
        let [ form ] = result.current

        expect(form.hasChanges).toBe(false)
      })

      test('returns true if any changes', () => {
        const { result } = renderHook(() => useFormState(defaultForm))
        let [ form ] = result.current

        act(() => form.setField('email', 'foo'))

        expect(result.current[0].hasChanges).toBe(true)
      })
    })

    describe('.changes [object | undefined]', () => {
      test('defaults to undefined', () => {
        const { result } = renderHook(() => useFormState(defaultForm))
        let [ form ] = result.current

        expect(form.changes).toBe(undefined)
      })

      test('returns a change object with any changes', () => {
        const { result } = renderHook(() => useFormState(defaultForm))
        let [ form ] = result.current

        act(() => form.setField('email', 'foo'))

        expect(result.current[0].changes).toEqual({ email : 'foo' })
      })
    })
  })
})
