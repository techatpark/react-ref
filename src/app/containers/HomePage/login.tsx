import React, { useContext } from 'react';
import MyContext from '../../../context';
import { Helmet } from 'react-helmet-async';

export function Login(props: any) {
  const ctx = useContext(MyContext);
  const onClick = () => {
    ctx.authenticate();
    props.history.push('/');
  };
  return (
    <>
      <Helmet>
        <title>Login Here</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>
        Login
        <button onClick={() => onClick()}>Login </button>
      </span>
    </>
  );
}
