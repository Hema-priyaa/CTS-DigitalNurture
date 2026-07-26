import './App.css';
import office from './office.jpeg';

function App() {

  const heading = "Office Space";

  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image: office
    },
    {
      Name: "WeWork",
      Rent: 70000,
      Address: "Bangalore",
      Image: office
    },
    {
      Name: "SmartWorks",
      Rent: 55000,
      Address: "Hyderabad",
      Image: office
    },
    {
      Name: "Regus",
      Rent: 85000,
      Address: "Mumbai",
      Image: office
    }
  ];

  return (

    <div className="App">

      <h1>{heading}, at Affordable Range</h1>

      {
        officeList.map((item, index) => (

          <div key={index} className="card">

            <img
              src={item.Image}
              alt="Office Space"
              width="25%"
              height="25%"
            />

            <h2>Name: {item.Name}</h2>

            <h3
              className={
                item.Rent <= 60000 ? "textRed" : "textGreen"
              }
            >
              Rent: Rs. {item.Rent}
            </h3>

            <h3>Address: {item.Address}</h3>

          </div>

        ))
      }

    </div>

  );

}

export default App;