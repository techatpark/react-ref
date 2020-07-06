import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../assets/404.gif';

export function NotFoundPage () {
    return <div>
            <img alt="" src={PageNotFound}  />
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>;
}