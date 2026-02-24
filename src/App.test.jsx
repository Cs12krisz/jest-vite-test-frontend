import {describe, test, expect} from "bun:test"
import React from "react"
import {render, fireEvent } from "@testing-library/react"
import { App } from "./App"

describe("App komponens", () => {
    test("Ki kellene renderenie a usernév és jelszó mezőket", () => {
        const {getByPlaceholderText} = render(<App/>)
        expect(getByPlaceholderText('felhasználónév')).toBeInTheDocument();
        expect(getByPlaceholderText("jelszó")).toBeInTheDocument();
    })
    test("Engedélyeznie kell az űrlapmezők bevitelét", () => {
        const {getByPlaceholderText} = render(<App/>);
        const usernameInput = getByPlaceholderText('felhasználónév');
        const passwordInput = getByPlaceholderText('jelszó');
        fireEvent.change(usernameInput, {target: {value: 'user'}})
        fireEvent.change(passwordInput, {target: {value: 'password'}})
        expect(usernameInput.value).toBe('user')
        expect(passwordInput.value).toBe('password')

    })
} )