import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Statistics } from './pages/Statistics';
import { Dashboard } from './pages/Dashboard';
import { Settings } from './pages/Settings';
import { Help } from './pages/Help';
import { NotFound } from './pages/NotFound';
import { Calendar } from './pages/Calendar';
import Sidebar from './Components/sidebar/Sidebar';

// @ts-ignore
const App: React.FC = ({ isVisible }) => {

  return (
      <BrowserRouter>
          <main className='flex flex-row'>
              <Sidebar />
              <section className='relative right-0 overflow-y-scroll pl-6 pr-6 main-content w-full bg-gray-50'>
                  <Switch>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/dashboard' exact component={Dashboard} />
                    <Route path='/statistics' exact component={Statistics} />
                    <Route path='/help' exact component={Help} />
                    <Route path='/settings' exact component={Settings} />
                    <Route path='/calendar' exact component={Calendar} />
                    <Route path='/' component={NotFound} />
                </Switch>
              </section>
          </main>
      </BrowserRouter>

  );
}

export default App;
