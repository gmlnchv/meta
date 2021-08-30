import * as React from "react"
import { render } from "../test-utils"
import { Token } from "./Token"

describe("<Token />", () => {
  test("renders correctly", () => {
    render(<Token>gray.200</Token>)
  })
})
