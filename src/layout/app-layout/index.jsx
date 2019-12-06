import React from 'react';

import './app-layout.scss';

export const Layout = ({children}) => {
  return (
    <main className="main">
      {children}
    </main>
  )
}
