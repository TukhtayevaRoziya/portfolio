import { render, screen } from "@testing-library/react"
import Header from './Header';

describe('header test', () => {
  it('get test', ()=>{
    render(<Header/>)
    expect(screen.getByText(/React Developer/i)).toBeInTheDocument()
    expect(screen.getByText(/myName/i)).toBeInTheDocument()
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug()
  })
})
