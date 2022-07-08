import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';

// Components
import { ProductList } from '../components/ProductList';
import { Header } from '../components/Header';
import { Modal } from '../components/Modal';

// Helpers
import { parseItems } from '../helpers';

// MockApi
import mocks, { fetchedItem } from './mock_api';

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
		expect(await screen.findByText('Super product')).toBeInTheDocument();
	});
});

describe('Header', () => {
	it('renders logo and subtotal price', () => {
		render(
			<Header />
		);

		expect(screen.getByRole('heading')).toBeInTheDocument();
		expect(screen.getByAltText('logo')).toBeInTheDocument();
		expect(screen.getByText('Start adding items to the cart')).toBeInTheDocument();
	});
});

describe('Modal', () => {
	it('renders information about the product', async () => {
		const item = parseItems(fetchedItem.data)[0];

		render(
			<Modal
				item={item}
				closeModal={() => {}}
				addItemToOrder={() => {}}
			/>
		);

		expect(screen.getAllByRole('button').length).toBe(2);
		expect(screen.getByText('Super product')).toBeInTheDocument();
		expect(screen.getByText('This is a description')).toBeInTheDocument();
		expect(screen.getByAltText('This is used as an alt text')).toBeInTheDocument();
	});
});
