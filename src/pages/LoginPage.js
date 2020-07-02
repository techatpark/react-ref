import React from 'react';
import { Button } from 'react-bootstrap';

export default class PlacesPage extends React.Component {
  onClick = async event => {
    event.preventDefault();
    localStorage.setItem('isAuthenticated', true);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="container">
        <Button variant="primary" onClick={this.onClick}>
          Login
        </Button>
      </div>
    );
  }
}
