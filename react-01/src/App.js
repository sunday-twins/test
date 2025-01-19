import './scss/common/reset.scss';
import './scss/layout/layout.scss'
import './scss/pages/main.scss'
import './scss/pages/sub.scss'

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './layout';
import Main from './pages/main';
import Sub1 from './pages/sub1';
import Sub2 from './pages/sub2';
import Sub3 from './pages/sub3';
import Sub4 from './pages/sub4';
import Sub5 from './pages/sub5';
import Sub6 from './pages/sub6';
import Sub7 from './pages/sub7';

function App() {
  return (
    <div className="wrap">
      <Layout.Header />
      <Layout.Nav />

      <main className='container'>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/sub1" element={<Sub1 />} />
          <Route path="/sub2" element={<Sub2 />} />
          <Route path="/sub3" element={<Sub3 />} />
          <Route path="/sub4" element={<Sub4 />} />
          <Route path="/sub5" element={<Sub5 />} />
          <Route path="/sub6" element={<Sub6 />} />
          <Route path="/sub7" element={<Sub7 />} />
        </Routes>
      </main>

      <Layout.Footer />
    </div>
  );
}

export default App;
