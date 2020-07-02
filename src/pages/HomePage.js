import React from 'react';

export default class HomePage extends React.Component {
  onClick = async event => {
    event.preventDefault();
    localStorage.setItem('isAuthenticated', true);
    this.props.history.push('/login');
  };
  render() {
    return (
      <div className="container">
        <div className="container-small">
          <h3>Welocome to Home</h3>
        </div>
        <button onClick={this.onClick}>logout</button>
      </div>
    );
  }
}
