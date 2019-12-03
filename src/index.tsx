import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch} from 'react-router-dom';
import { history } from './store';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/test' render={()=>(<h1>Test Page</h1>)}/>
                <Route path='*' render={()=>(<h1>Page not found</h1>)}/>
            </Switch>      
        </ConnectedRouter> 
    </Provider>   
,document.getElementById('root'));
