const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

import axios from 'axios';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, waitFor, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import Register from './Register';
import React from 'react';

jest.mock('axios')

describe('checking if register page correctly fetches data', () => {
  test('making sure that register user is working correctly', async () => {
    const exampleRegisterUserData = {
      firstname: 'test',
      lastname: 'man',
      username: 'testman',
      email: 'test@test.com',
      password: 'test123',
      confirmpassword: 'test123'
    }

    const { getByTestId, getByLabelText } = render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    const form = getByTestId('Register')

    fireEvent.change(getByLabelText('First Name'), {
      target: { value: exampleRegisterUserData.firstname },
    });
    fireEvent.change(getByLabelText('Last Name'), {
      target: { value: exampleRegisterUserData.lastname },
    });
    fireEvent.change(getByLabelText('Username'), {
      target: { value: exampleRegisterUserData.username },
    });
    fireEvent.change(getByLabelText('Email'), {
      target: { value: exampleRegisterUserData.email },
    });
    fireEvent.change(getByLabelText('Password'), {
      target: { value: exampleRegisterUserData.password },
    });
    fireEvent.change(getByLabelText('Confirm Password'), {
      target: { value: exampleRegisterUserData.confirmpassword },
    });

    fireEvent.submit(form);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(`http://localhost:${process.env.REACT_APP_PORT}/registerUser`, exampleRegisterUserData)
    })
  })
})