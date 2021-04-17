import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Website Freelancer',
          type: 'deposit',
          category: 'Dev',
          amount: 3000,
          createdAt: new Date('2021-04-14 09:00:00')
        },
        {
          id: 2,
          title: 'University fee',
          type: 'withdraw',
          category: 'Scholl',
          amount: 400,
          createdAt: new Date('2021-04-31 12:00:00')
        },
      ],
    })
    
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema,request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

