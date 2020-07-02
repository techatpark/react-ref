import React from 'react';
const MyContext = React.createContext({
  auth: false,
  authenticate: () => {},
});
export default MyContext;
