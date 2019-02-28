import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import { defaultFunction, resetReduxForm } from './actions';
import FormCode from './FormCode';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData : [],
      isSubmitClicked: false,
      aboutUs : '',
    }
  }

  componentDidMount() {
    // call default function to display redux operation
    this.props.defaultFunction();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      aboutUs: nextProps.Suntist.data.results[0].description
    })
  }

  submit = (values) => {
    let submittedData = this.state.formData;
    submittedData.push(values);
    this.setState({
      formData: submittedData,
      isSubmitClicked: true,
    });
    this.props.resetReduxForm()
  }

  render() {
    return (
      <MuiThemeProvider>
      <div>
        <header>
          <div className="suntist__header">
            <div className="suntist__logo">SUNTIST</div>
          </div>
        </header>
        <FormCode onSubmit={this.submit} />
         {
          this.state.isSubmitClicked &&
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className='card'>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Age</th>
                      <th scope="col">Gender</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.formData.map((obj, index) => {
                        return (
                          <tr key={index}>
                            <th>{obj.name}</th>
                            <td>{obj.email}</td>
                            <td>{obj.age}</td>
                            <td>{obj.sex}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        }
          <div className="row" style={{ marginTop: '5%' }}>
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className='card'>
                <p style={{ color: 'black'}}>{this.state.aboutUs}</p>
              </div>
            </div>
          </div>
         
      </div>
      </MuiThemeProvider>
    );
  }
}


// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    Suntist: state.default
  };
}

// wrapping the component within the connect HOC and calling the default function directly
export default connect(mapStateToProps, { defaultFunction, resetReduxForm })(App);
