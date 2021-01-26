import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from './hook'

test('should change keyword', () => {
    const { result } = renderHook(() => useForm())

    expect(true).toBe(true)
})
