import { useState, useEffect } from "react";
export default function FetchApi() {
  const [exampleState, setExampleState] = useState();

  const exampleFetchFunction = () => {
    // modify this code
  }

  useEffect(() => {
    // modify this code
  }, []);

  const exampleHandleChange = () => {
    // modify this code
  };


  return (
    <div className="container mt-5">
      <div className="mb-3">
        <label className="fw-bold">Provinces</label>
        <select className="form-select">
          <option>Show province here</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="fw-bold">Regencies</label>
        <select className="form-select">
          <option>Show regency here</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="fw-bold">Subdistricts</label>
        <select className="form-select">
          <option>Show subdistict here</option>
        </select>
      </div>
    </div>
  );
}