import React from 'react';
import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { StackNavigator } from 'react-navigation';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { addGraphQLSubscriptions } from 'add-graphql-subscriptions';
import { Provider } from 'react-redux';
import LandingPage from './components/LandingPage';
import SignUpPage from './components/SignupPage';

const wsClient = new SubscriptionClient('wss://subscriptions.graph.cool/v1/cj9y5vwd52g6c0136n0xaz7tn', {
  reconnect: true
});

const uri = 'https://api.graph.cool/simple/v1/cj9y5vwd52g6c0136n0xaz7tn';

const httpLink =
new HttpLink({ uri });

const linkWithSubscriptions = addGraphQLSubscriptions(
  httpLink,
  wsClient
);

const client = new ApolloClient({
  link: linkWithSubscriptions,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

const store = createStore(combineReducers({
  form: formReducer
}));

const Nav = StackNavigator({
  LandingPage: { screen: LandingPage },
  SignUpPage: { screen: SignUpPage }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
            <Nav />
        </ApolloProvider>
      </Provider>
    );
  }
}

