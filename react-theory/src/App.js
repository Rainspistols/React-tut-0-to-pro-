import React, { Component } from "react";
import Radium from "radium";
import Car from "./Car/Car";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";
import AboutPage from "./components/AboutPage/AboutPage";

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
      showCars: true
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
      textAlign: "center"
    };
    let Style = {
      nav: {
        fontSize: "20px",
        ul: {
          "list-style": "none",
          padding: "0",
          a: {
            color: "black",
            textDecoration: "none"
          }
        }
      }
    };

    // const btnStyle = {
    //   width: 200,
    //   height: 50,
    //   transition: "background-color 0.3s",
    //   backgroundColor: "transparent",
    //   marginTop: 20,
    //   ":hover": {
    //     backgroundColor: "yellow",
    //     cursor: "pointer"
    //   }
    // };

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
        <div>
          <nav className="nav" style={Style.nav}>
            <ul style={Style.nav.ul}>
              <li>
                <a href="/" style={Style.nav.ul.a}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" style={Style.nav.ul.a}>
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <AboutPage title={"About Page"} />

        {/* <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider> */}
        {/* <hr /> */}
        {/* <button style={btnStyle} onClick={this.toggleCarsHandler}>
          Toggle cars
        </button> */}

        {/* <button onClick={() => this.setState({ clicked: true })}>
          Change clicked
        </button> */}

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
