import {describe, test, expect} from "bun:test"
import React from "react"
import {render, fireEvent } from "@testing-library/react"
import { sum } from "./sum"

describe("sum komponens", () => {
    test("A sum függvény letesztelése", () => {
        expect(sum(1, 2)).toBe(3)
    })
})