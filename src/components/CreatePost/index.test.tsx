/**
 * @jest-environment jsdom
 */

import * as React from "react"
import { axe, toHaveNoViolations } from 'jest-axe'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import {
  render,
  screen
} from "components/CustomRender"
import CreatePost from '.'

expect.extend(toHaveNoViolations)

describe('CreatePost', () => {
  test('Should have user profile image', async () => {
    render(
      <CreatePost />
    )

    expect(screen.getByAltText(/CreatePost user profile/i)).toBeInTheDocument()
  })

  test('Should have description field', async () => {
    render(
      <CreatePost />
    )

    expect(screen.getByPlaceholderText(/What's in your mind/i)).toBeInTheDocument()
  })

  test('Should have Photo or Video ElementItem', async () => {
    render(
      <CreatePost />
    )

    expect(screen.getByText(/Photo or Video/i)).toBeInTheDocument()
  })

  test('Should have Tag ElementItem', async () => {
    render(
      <CreatePost />
    )


    expect(screen.getByText(/Tag/i)).toBeInTheDocument()
  })

  test('Should have Location ElementItem', async () => {
    render(
      <CreatePost />
    )

    expect(screen.getByText(/Location/i)).toBeInTheDocument()
  })

  test('Should have Feelings ElementItem', async () => {
    render(
      <CreatePost />
    )

    expect(screen.getByText(/Feelings/i)).toBeInTheDocument()
  })

  test('Should be able to change post description', async () => {
    render(
      <CreatePost />
    )

    const postDescription = screen.getByPlaceholderText(/What's in your mind/i)
    userEvent.type(postDescription, "post_description")
    
    expect(postDescription).toHaveDisplayValue("post_description")
  })
  
  test('Should have Create button', async () => {
    render(
      <CreatePost />
    )

    expect(screen.getByText(/Create/i)).toBeInTheDocument()
  })

  test('Should be able to upload media file', async () => {
    render(
      <CreatePost />
    )

    const file = new File(['hello'], 'hello.png', { type: 'image/png' })
    const input = screen.getAllByTestId(/elementItem input/i)

    const inputOne = input[0] as HTMLInputElement

    userEvent.upload(inputOne, file)
    
    const inputFiles = (inputOne.files as FileList)

    expect(inputFiles[0]).toBe(file)
    expect(inputFiles.item(0)).toBe(file)
    expect(inputFiles).toHaveLength(1)
  })

  test('Should be able to create a post', async () => {
    render(
      <CreatePost />
    )

    const postDescription = screen.getByPlaceholderText(/What's in your mind/i)
    userEvent.type(postDescription, "post_description")

    expect(postDescription).toHaveDisplayValue("post_description")

    const createPostBtn = screen.getByText(/Create/i)
    userEvent.click(createPostBtn)

    expect(postDescription).toHaveDisplayValue("post_description")

    const file = new File(['hello'], 'hello.png', { type: 'image/png' })
    const input = screen.getAllByTestId(/elementItem input/i)

    screen.debug(input)
    userEvent.upload(input[0], file)

    const inputOne = input[0] as HTMLInputElement
    const inputFiles = (inputOne.files as FileList)

    expect(inputFiles[0]).toBe(file)
    expect(inputFiles.item(0)).toBe(file)
    expect(inputFiles).toHaveLength(1)
  })

  test('Should be an acessible component', async () => {
    jest.mock('axios', () => ({
      __esModule: true,
      default: jest.fn(() => Promise.resolve({ data: 'data' })),
    }))

    const { container } = render(
      <CreatePost />
    )

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})