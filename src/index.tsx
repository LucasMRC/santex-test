import {
	ApolloClient,
	ApolloLink,
	createHttpLink,
	InMemoryCache
} from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

// This is needed to fix auth-token not being set before refreshing the screen
import { setContext } from '@apollo/client/link/context';

const commerceLink = createHttpLink({
	uri: 'https://shrouded-wave-86340.herokuapp.com/shop-api'
});

/**
 * I spent a couple of hours trying to figure out why
 * I had to refresh the page so that the `addItemToOrder`
 * mutation would stop creatinga new order on every request.
 * 
 * Turns out that when `commerceLink`is instantiated for the
 * first time, there's no Auth-Token on the locaStorage, so
 * the `authorization` header would never be set.
 * 
 * I'm using the `setContext` function from Apollo to set
 * the token dinamically.
 * 
 * More info at {@link https://www.apollographql.com/docs/react/api/link/apollo-link-context/ Apollo Context Link }
 */
const ApolloAuthContext = setContext(async (_, { headers }) => ({
	headers: {
		...headers,
		Authorization: localStorage.getItem('Auth-Token')
			? `Bearer ${localStorage.getItem('Auth-Token')}`
			: ''
	}
}));

/* ========================================================= */
/* ========================================================= */
/* ========================================================= */


const afterwareLink = new ApolloLink((operation, forward) => {
	return forward(operation).map((response) => {
		const context = operation.getContext();
		const authHeader = context.response.headers.get('Vendure-Auth-Token');

		if (authHeader) {
			localStorage.setItem('Auth-Token', authHeader);
		}
		return response;
	});
});

const client = new ApolloClient({
	cache: new InMemoryCache(),
	// Now concatenating the Context with the ApolloLink
	link: ApolloAuthContext.concat(ApolloLink.from([ afterwareLink, commerceLink ]))
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider
			client={client}
		>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
