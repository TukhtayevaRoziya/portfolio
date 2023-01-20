import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Language from './Language'

describe('languages', () => {
  it('start', () => {
    render(<Language />)
    userEvent.selectOptions(screen.getByRole('listbox'), ['1', '3'])

    expect(screen.getByRole('option', { name: 'Ru' }).selected).toBe(false)
    expect(screen.getByRole('option', { name: 'En' }).selected).not.toBe(true)
    expect(screen.getByRole('option', { name: 'Uz' }).selected).toBe(true)

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug()
  })
})
