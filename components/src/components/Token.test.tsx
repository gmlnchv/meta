import * as React from "react"
import { render, fireEvent, waitFor } from "../test-utils"
import { Token } from "./Token"

describe("<Token />", () => {
  test("renders correctly", () => {
    render(<Token value="#E5E7EB">gray.200</Token>)
  })

  test("can open and close the popover", async () => {
    const utils = render(<Token value="value">open</Token>)

    // open the popover
    fireEvent.mouseOver(utils.getByText(/open/i))
    await waitFor(() => expect(utils.queryByText(/value/i)).toBeVisible())

    // close the popover
    fireEvent.mouseOut(utils.getByText(/open/i))

    // verify that content isn't displayed after closing
    await waitFor(() => expect(utils.queryByText(/value/i)).not.toBeVisible())
  })
})
