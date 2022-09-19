import React from 'react';

const Container = ({ title, children }) => (
  <div className="container">
    <header>
      <h1 className="title">{title}</h1>
    </header>
    <main className="main">{children}</main>
  </div>
)

export default Container
