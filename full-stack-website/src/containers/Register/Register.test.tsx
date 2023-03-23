const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

import axios from 'axios';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, waitFor, fireEvent, queryByLabelText } from '@testing-library/react';
import { RegisterInterface } from './Register';
import "@testing-library/jest-dom";
import Register from './Register';
import React from 'react';

jest.mock('axios')

describe('checking if register page correctly fetches data', () => {
  const exampleRegisterUserData = {
    firstname: 'test',
    lastname: 'man',
    username: 'testman',
    email: 'test@test.com',
    password: 'test123',
    confirmpassword: 'test123'
  }

  const exampleRegisterUserDataInterface = {
    firstname: expect.any(String),
    lastname: expect.any(String),
    username: expect.any(String),
    email: expect.any(String),
    password: expect.any(String),
    confirmpassword: expect.any(String)
  }

  test('making sure that register user is working correctly', async () => {

    const { getByTestId } = render(<Register />, { wrapper: MemoryRouter });

    const form = getByTestId('Register')

    fireEvent.change(getByTestId('firstname-input'), {
      target: { value: exampleRegisterUserData.firstname },
    });
    fireEvent.change(getByTestId('lastname-input'), {
      target: { value: exampleRegisterUserData.lastname },
    });
    fireEvent.change(getByTestId('username-input'), {
      target: { value: exampleRegisterUserData.username },
    });
    fireEvent.change(getByTestId('email-input'), {
      target: { value: exampleRegisterUserData.email },
    });
    fireEvent.change(getByTestId('password-input'), {
      target: { value: exampleRegisterUserData.password },
    });
    fireEvent.change(getByTestId('confirmpassword-input'), {
      target: { value: exampleRegisterUserData.confirmpassword },
    });

    fireEvent.submit(form);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(`http://localhost:${process.env.REACT_APP_PORT}/registerUser`, exampleRegisterUserData)
    })
  })

  test('testing to see if info that is being submitted is adhering to register interface', () => {
    expect(exampleRegisterUserData).toMatchObject<RegisterInterface>(exampleRegisterUserDataInterface)
  })
})