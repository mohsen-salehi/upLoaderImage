import { useState } from "react";
import "./styles.css";

function App() {
  const [files, setFiles]: any = useState();
  const uploadHandler = (e: any) => {
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        setFiles(reader.result);
      },
      false
    );

    let file: Blob = e.target.files[0];
    if (e.target.files && file) {
      if (file) {
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <div className="main">
      <h1 className="text">Choese Your Image / File</h1>
      <h1 className="text">click this icon </h1>
      <form className="form">
        <input onChange={uploadHandler} type="file" name="file" id="file" />
      </form>
      <figure>
        <img src={files} alt="Your img" />
      </figure>
    </div>
  );
}

export default App;
