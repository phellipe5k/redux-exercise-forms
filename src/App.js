import React, { Component } from 'react';
import './App.css';
import Cargo from './Components/Cargo';
import Cidade from './Components/Cidade';
import Cpf from './Components/Cpf';
import DescCargo from './Components/DescCargo';
import Email from './Components/Email';
import Endereco from './Components/Endereco';
import Estado from './Components/Estado';
import Name from './Components/Name';
import Resumo from './Components/Resumo';
import FormErrors from './FormErrors';


class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      addressType: '',
      resume: '',
      role: '',
      roleDescription: '',
      hasEntered: false,
      formErrors: {email: '', password: ''},
    };
  }

  changeHandler = event => {
    let { name, value } = event.target;

    if(name === 'name') value = value.toUpperCase()

    if(name === 'address') value = this.validateAddress(value)

    this.updateState(name, value)
  }

  onBlurHandler = event => {
    let { name, value } = event.target;

    if(name === 'city') value = value.match(/^\d/) ? '' : value

    this.updateState(name, value)
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
      formErrors: {
        ...state.formErrors,
        [name]: this.validateField(name, value)
      }
    }));
  }

  validateAddress = address => address.replace(/[^\w\s]/gi, '')

  handleSubmit = event => {
    event.preventDefault();
  }

  validateField(fieldName, value) {

    switch(fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
        return isValid ? '' : ' is invalid';
      default:
        break;
    }

    return '';
  }

  render () {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Dados pessoais</legend>
           <Name />
           <Email />
           <Cpf />
           <Endereco />
           <Cidade />
           <Estado />
          </fieldset>
          <fieldset>
            <legend>Dados profissionais:</legend>
              <Resumo/>
              <Cargo/>
              <DescCargo/>
            </fieldset>
          </form>
        <div className="container">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
      </div>
    );
  }
}

export default App;