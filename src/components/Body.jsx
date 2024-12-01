import React from 'react';
import { Outlet } from 'react-router-dom';

function Project() {
  // will swap between the different pages according to the URL
  return (
    <>
      <Outlet />
    </>
  );
}

export default Project;