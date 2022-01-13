

function App() {
  return (
    <div>
      <div className="w3-sidebar w3-light-grey w3-bar-block" style={{ width: "25%" }}>
        <h3 className="w3-bar-item">Menu</h3>
        <p className="w3-bar-item w3-button">Link 1</p>
        <p className="w3-bar-item w3-button">Link 2</p>
        <p className="w3-bar-item w3-button">Link 3</p>
      </div>
      <div style={{ marginLeft: "25%" }}>
        <div className="w3-container w3-teal">
          <h1>My Page</h1>
        </div>
        <img style={{ width: "100 %" }} />
        <div className="w3-container">
          <h2>Sidebar</h2>
          <p>Contents here</p>
          <p>Contents will be displayed here </p>
        </div>
      </div>
    </div >
  );
}

export default App;
