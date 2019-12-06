import React from 'react';

export const LeftMenu = () => {
  const leftMenuItems = ["item 1", "item 2", "item 3"];

  return (
    <ul className="left-menu">
      {leftMenuItems.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}
