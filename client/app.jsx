class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: -1,
      name: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.clearFormData = this.clearFormData.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.home = this.home.bind(this);
  }

  next() {
    this.setState({
      current: this.state.current + 1
    });
  }

  previous() {
    this.setState({
      current: this.state.current - 1
    });
  }

  home() {
    this.setState({
      current: -1
    });
  }

  clearFormData() {
    const formFields = ['name', 'email', 'password'];

    for (const field of formFields) {
      this.setState({
        [field]: ''
      });
    }
  }

  validateInput(name, value) {
    if (name === 'password') {
      if (value.length < 5) {
        this.setState({
          invalidInputs: true
        })
      } else {
        this.setState({
          invalidInputs: false
        })
      }
    }
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    }, () => this.validateInput(name, value));
  }

  render() {
    const forms = [
        <F1 handleInputChange={this.handleInputChange} formInput={this.state} />,
        <Confirm home={this.home} formInput={this.state} clearFormData={this.clearFormData} />
    ];

    return (
      <div>
        {this.state.current < 0 ? (
          <button onClick={this.next}>Checkout</button>
        ) : (
          <div>
            {forms[this.state.current]}
            <Navigation
              next={this.next}
              previous={this.previous}
              current={this.state.current}
              invalidInputs={this.state.invalidInputs}
            />
          </div>
        )}
      </div>
    );
  }
}

const Navigation = ({next, previous, current, invalidInputs}) => {
  return (
    <div>
      {current > -1 ? <button onClick={previous}>Previous</button> : ''}
      {current < 3 ? <button onClick={next} disabled={invalidInputs}>Next</button> : ''}
    </div>
  );
};

const TextBox = ({name, label, handleInputChange, formInput={formInput}}) => (
  <label>
    {label}
    <input
      type={name === 'password' ? 'password' : 'text'}
      value={formInput[name]}
      name={name}
      onChange={handleInputChange}
    ></input>
  </label>
);

const F1 = ({handleInputChange, formInput}) => (
  <div>
    <TextBox name="name" label="Name" handleInputChange={handleInputChange} formInput={formInput} />
    <TextBox name="email" label="Email" handleInputChange={handleInputChange} formInput={formInput} />
    <TextBox name="password" label="Password" handleInputChange={handleInputChange} formInput={formInput} />
  </div>
);

const Confirm = ({home, formInput, clearFormData}) => {
  const submitData = () => {
    const endpoint = 'http://localhost:3100/formSubmit';

    fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(formInput),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        clearFormData();
        home(); // add conditional to change only if sumitted OK?
      });
  };

  return (
    <div>
      <p>{formInput.name}</p>
      <p>{formInput.email}</p>
      <p>{formInput.password}</p>
      <br />
      <button onClick={submitData}>Purchase</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));