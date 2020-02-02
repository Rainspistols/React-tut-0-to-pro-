import React, { Component } from "react";
import Radium from "radium";
import Car from "./Car/Car";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";

export const ClickedContext = React.createContext(false);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      cars: [
        { name: "Ford", year: 2018 },
        { name: "Audi", year: 2016 },
        { name: "Mazda 3", year: 2010 }
      ],
      pageTitle: "React components",
      showCars: false
    };
  }

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars
    });
  }

  deleteHandler(index) {
    const cars = [...this.state.cars];
    cars.splice(index, 1);

    this.setState({ cars });
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  };

  componentDidMount() {
    console.log("App componentDidMount");
  }

  render() {
    const divStyle = {
      textAlign: "left",
      marginLeft: "20px"
    };

    const btnStyle = {
      width: 200,
      height: 50,
      transition: "background-color 0.3s",
      backgroundColor: "transparent",
      marginTop: 20,
      ":hover": {
        backgroundColor: "yellow",
        cursor: "pointer"
      }
    };

    let cars = null;
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={car + index}>
            <Car
              name={car.name}
              year={car.year}
              index={index}
              onDelete={this.deleteHandler.bind(this, index)}
              onChangeName={e => {
                this.onChangeName(e.target.value, index);
              }}
            />
          </ErrorBoundary>
        );
      });
    }

    return (
      <div className="App" style={divStyle}>
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>

        <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider>
        <hr />
        <button style={btnStyle} onClick={this.toggleCarsHandler}>
          Toggle cars
        </button>

        <button onClick={() => this.setState({ clicked: true })}>
          Change clicked
        </button>

        <div
          style={{
            width: "400",
            margin: "auto",
            paddingTop: "20px"
          }}
        >
          {cars}
        </div>
      </div>
    );
  }
}

export default Radium(App);
