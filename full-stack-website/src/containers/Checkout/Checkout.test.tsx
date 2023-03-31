import React from 'react';
import Checkout from './Checkout';
import {
	render
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserEmailInfoInterface } from './Checkout';
import '@testing-library/jest-dom';

describe('creating tests for checkout container', () => {
	const exampleUserEmailInfo: UserEmailInfoInterface = {
		firstname: 'test',
		country: 'USA',
		city: 'Compton',
		state: 'California',
		zip: '90220',
		email: 'test@test.com'
	}

	const exampleUserEmailInfoInterface = {
		firstname: expect.any(String),
		country: expect.any(String),
		city: expect.any(String),
		state: expect.any(String),
		zip: expect.any(String),
		email: expect.any(String)
	}

	test('making sure that checkout renders', () => {
		const { getByTestId } = render(<Checkout />, { wrapper: MemoryRouter })
		let checkoutTest = getByTestId('Checkout')
		expect(checkoutTest).toBeDefined();
	})

	test('make sure that cart button renders', () => {
		const { getByTestId } = render(<Checkout />, { wrapper: MemoryRouter })
		let cartButton = getByTestId('cart-button-test')
		expect(cartButton).toBeInTheDocument();
		expect(cartButton).toBeDefined();
	})

	test('testing to see if info that is being submitted is adhering to user email info interface', () => {
		expect(exampleUserEmailInfo).toMatchObject<UserEmailInfoInterface>(exampleUserEmailInfoInterface)
	})
})