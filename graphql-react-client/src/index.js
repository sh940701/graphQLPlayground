import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';
import React from 'react';
import ReactDOM from 'react-dom/client';

import 'graphiql/graphiql.css';
import './index.css'

const fetcher = createGraphiQLFetcher({ url: 'https://my.backend/graphql' });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GraphiQL fetcher={fetcher} />,
    </React.StrictMode>
);
