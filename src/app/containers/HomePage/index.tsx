import React, { useContext } from 'react';
import MyContext from '../../../context';
import { Helmet } from 'react-helmet-async';

export function HomePage(props: any) {
  const ctx = useContext(MyContext);
  const onClick = () => {
    ctx.authenticate();
    props.history.push('/login');
  };
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>
        HomePage container
        <button onClick={onClick}> logout</button>
      </span>
    </>
  );
}