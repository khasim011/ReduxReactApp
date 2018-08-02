import React, {  
  Component,
} from 'react';
import { Link } from 'react-router-dom';

export class Login extends Component {
  render() {
    return (
      <div>
        <table>
        <tr>
            <td colspan="2">Login</td>
          </tr>
          <tr>
            <td>Username</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td>Password</td>
            <td><input type="password" /></td>
          </tr>
          <tr>
            <td colspan="2"><button type="submit">Submit</button></td>
          </tr>
          <tr>
            <td colspan="2"><Link to='/Register'>Register</Link></td>
          </tr>
          <tr>
            <td colspan="2"><Link to='/AppContainer'>AppContainer</Link></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Login;  