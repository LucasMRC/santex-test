import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import { ProductList } from '../components/ProductList';
import mocks from './mock_api';
import { Header } from '../components/Header';

describe('ProductList', () => {
	it('renders image, text and button', async () => {
		render(
			<MockedProvider
				mocks={mocks}
				addTypename={false}
			>
				<ProductList />
			</MockedProvider>
		);

		expect(await screen.findByAltText('This is used as an alt text')).toBeInTheDocument();
		expect(await screen.findByText('This is a description')).toBeInTheDocument();
		expect(await screen.findByRole('button')).toBeInTheDocument();
	});
});

describe('Header', () => {
	it('renders logo and subtotal price', async () => {
		render(
			<MockedProvider
				mocks={mocks}
				addTypename={false}
			>
				<Header />
			</MockedProvider>
		);

		expect(screen.getByRole('heading')).toBeInTheDocument();
		expect(screen.getByAltText('logo')).toBeInTheDocument();
	});
});
