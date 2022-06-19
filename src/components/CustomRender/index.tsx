import React, {FC, ReactElement} from "react"
import { render, RenderOptions } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import { AuthContextProvider } from "context/AuthContext"

const Wrapper: FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <AuthContextProvider>
      <MemoryRouter>
        {children}
      </MemoryRouter>
    </AuthContextProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) =>
  render(ui, { wrapper: Wrapper, ...options })

export * from "@testing-library/react"

export { customRender as render }