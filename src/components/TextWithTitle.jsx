import React from 'react';

const TextWithTitle = ({ title, children }) => (
  <div className="text-with-title-block">
    <div className="title-field">{title}</div>
      {children}
</div>
);

export default TextWithTitle;