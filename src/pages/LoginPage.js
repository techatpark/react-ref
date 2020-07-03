import React from 'react';

export default class PlacesPage extends React.Component {
  onClick = async event => {
    event.preventDefault();
    localStorage.setItem('isAuthenticated', true);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="container text-center w-25">
        <form class="form-signin">
          <img
            class="mb-4"
            src="https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-solid.svg"
            alt=""
            width="72"
            height="72"
          />
          <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label for="inputEmail" class="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autoFocus
          />
          <label for="inputPassword" class="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
          />
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button
            class="btn btn-lg btn-primary btn-block"
            type="submit"
            onClick={this.onClick}
          >
            Sign in
          </button>
          <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
        </form>
      </div>
    );
  }
}
