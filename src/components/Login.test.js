import { render, screen } from '@testing-library/react';
import Login from './Login';

test("username input should be rendered", () => {
    render(<Login />)
    const userInputEl = screen.getByPlaceholderText(/username/i)
    expect(userInputEl).toBeInTheDocument()
})

test("password input should be rendered", () => {
    render(<Login />)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)
    expect(passwordInputEl).toBeInTheDocument()
})

test("username input should be rendered", () => {
    render(<Login />)
    const buttonEl = screen.getByRole("button")
    expect(buttonEl).toBeInTheDocument()
})

test("username input should be empty", () => {
    render(<Login />)
    const userInputEl = screen.getByPlaceholderText(/username/i)
    expect(userInputEl.value).toBe("")
})

test("username input should be empty", () => {
    render(<Login />)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)
    expect(passwordInputEl.value).toBe("")
})

test("button should be disabled", () => {
    render(<Login />)
    const buttonEl = screen.getByRole("button")
    expect(buttonEl).toBeDisabled()
})
