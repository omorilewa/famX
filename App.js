import React, { Component } from 'react';
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
import {
  SignupForm,
  LoginForm,
  LandingPage,
  CreateFamilyPage
} from './components';

const wsClient = new SubscriptionClient('wss://subscriptions.graph.cool/v1/cja8r6dcn33ui0154xhdkhlel', {
  reconnect: true
});

const uri = 'https://api.graph.cool/simple/v1/cja8r6dcn33ui0154xhdkhlel';

const httpLink = new HttpLink({ uri });

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
  SignupPage: { screen: SignupForm },
  LoginPage: { screen: LoginForm },
  CreateFamilyPage: { screen: CreateFamilyPage }
});

export default class App extends Component {
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

