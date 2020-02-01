import React, { Component } from "react";
import Car from "./Car/Car";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  render() {
    console.log("App render");
    const divStyle = {
      textAlign: "left",
      marginLeft: "20px"
    };

    let cars = null;
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={car + index}
            name={car.name}
            year={car.year}
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={e => {
              this.onChangeName(e.target.value, index);
            }}
          />
        );
      });
    }

    return (
      <div className="App" style={divStyle}>
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>

        <button onClick={this.toggleCarsHandler}>Toggle cars</button>
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

export default App;
