/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  MuiThemeProvider,
  responsiveFontSizes,
  ThemeProvider
} from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import 'layout/index.css';
import Page from 'Page';
import { Provider } from 'next-auth/client';

import theme from './theme';

// the URL to /api/graphql
const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache
});

function MyApp({ Component, pageProps }: AppProps) {
  const responsiveTheme = responsiveFontSizes(theme);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <MuiThemeProvider theme={responsiveTheme}>
      <ThemeProvider theme={responsiveTheme}>
        <ApolloProvider client={client}>
          <Provider session={pageProps.session}>
            <CssBaseline />
            <Page>
              <Component {...pageProps} />
            </Page>
          </Provider>
        </ApolloProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default MyApp;
