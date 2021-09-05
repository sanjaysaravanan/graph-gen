import "./App.css";

function App() {
  const onSubmit = (e) => {
    e.preventDefault();
    let data = Array.from(e.target.elements)
      .filter((f) => f.nodeName === "INPUT")
      .reduce(
        (ac, a) => (a.name !== "" ? { ...ac, [a.name]: a.value } : { ...ac }),
        {}
      );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{ lineHeight: "0px" }}>Generate Graphs</h2>
        <h3>Upload Your XLS file to see the axis fields</h3>
        <form onSubmit={onSubmit} noValidate>
          <input
            type="text"
            id="myName"
            placeholder="Enter a name"
            name="name"
          />
          <br />
          <input type="file" id="myFile" name="filename" />
          <br />
          <input type="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
