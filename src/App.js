import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      country: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(value) {
    let inputValue = value;

    let requestUrl = `https://restcountries.eu/rest/v2/name/${inputValue}`;

    axios.get(requestUrl).then(response => {
      this.setState({ country: response.data })
    });
  }

  render() {

    return (
      <div className="App">
        <SearchForm onSubmit={this.handleSubmit} />


        <div className='container'>
          <section className="row">
            <div className="col-12 p-3">
              <table className="table table-condensed text-white text-center border">
                <thead>
                  <tr>
                    <th id="flag">Flag</th>
                    <th>Country</th>
                    <th>Capital</th>
                    <th>Region</th>
                    <th>Population</th>
                    <th>Currencies</th>
                    <th>Languages</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.country.map((country, i) =>
                    <tr className="country" key={i}>
                      <td> <img src={this.state.country[i].flag} className='flag' alt='flag' /></td>
                      <td>{this.state.country[i].name}</td>
                      <td>{this.state.country[i].capital}</td>
                      <td>{this.state.country[i].region}</td>
                      <td>{this.state.country[i].population}</td>
                      <td>{this.state.country[i].currencies[0].name}</td>
                      <td>{this.state.country[i].languages[0].name}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>


        {/* <div id="info">
          {this.state.country.map((country, i) =>
            <div className="country" key={i}>
              <div>{this.state.country[i].name}</div>
              <div>{this.state.country[i].capital}</div>
              <div>{this.state.country[i].region}</div>
              <div>{this.state.country[i].population}</div>
              <div>{this.state.country[i].currencies[0].name}</div>
              <div>{this.state.country[i].languages[0].name}</div>
              <img src={this.state.country[i].flag} className='flag' />
            </div>
          )}
        </div> */}
      </div>
    );
  }
}

export default App;