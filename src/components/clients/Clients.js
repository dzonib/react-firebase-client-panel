import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Clients extends Component {
  render() {
    const clients = [
      {
        id: "sdasd",
        firstName: 'Bob',
        lastname: 'Jonson',
        email: 'asd@fuckyou.com',
        phone: "555-55-5555-5",
        balanse: '30'
      }
    ]
    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                <i className="fas fa-users"></i>
                Clients
              </h2>
            </div>
            <div className="col-md-6"></div>
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>name</th>
                <th>email</th>
                <th>balanse</th>
                <th/>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>{client.firstName}</td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balanse).toFixed(2)}</td>
                  <td>
                    <Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm">
                      <i className="fas fa-arrow-circle-right"></i> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      )
    } else {
      return <h1>Loading...</h1>
    }

  }
}

export default Clients