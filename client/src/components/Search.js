import React, { useState } from "react";
import "./search.css";
import fetchData from "./store/FetchData";
import { useSelector } from "react-redux";
function Search() {
  fetchData();
  const companies = useSelector((state) => state.data?.companies);
  const ads = useSelector((state) => state.ads?.ads);
  const [search, setSearch] = useState("");
  const [btnValue, setButtonValue] = useState("Search");
  function searchKeyProduct(e) {
    setButtonValue("Lets Go");
    let k = e.target.value;
    setSearch(k);
    if (k === "") {
      setButtonValue("Search");
    }
  }
  return (
    <>
      <div className="searchdiv">
        <input
          type="text"
          placeholder="Search a product"
          onChange={(e) => searchKeyProduct(e)}
        />
        <input type="button" value={btnValue} />
      </div>
      <h1 className="text-center font">Companies</h1>
      <div className="d-flex align-items-center justify-content-center container ">
        <div className="text-center row ">
          {companies
            .filter((entry) => {
              return search.toLowerCase() === ""
                ? entry
                : entry.name.toLowerCase().includes(search);
            })
            .map((entry, index) => {
              return (
                <div
                  key={entry._id}
                  className="card m-3 shadow-lg col-sm-3"
                  style={{ width: "15rem", height: "10rem" }}
                >
                  <img
                    className="card-img-top "
                    src={entry.img}
                    alt="logo"
                    style={{ width: "100%", height: "5rem" }}
                  />
                  <div className="card-body border">
                    <h5 className="card-title">{entry.name}</h5>
                    <a href={entry.url} style={{ fontSize: "10px" }}>
                      Shop Now
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <h1 className="mt-5 text-center font">Advertisements</h1>
      <div className="d-flex align-items-center justify-content-center container">
        <div className=" row">
          {ads
            .filter((entry) => {
              return search.toLowerCase() === ""
                ? entry
                : entry.desc.toLowerCase().includes(search) ||
                    entry.primaryText.toLowerCase().includes(search);
            })
            .map((entry, index) => {
              return (
                <div
                  key={entry.companyId}
                  className="card m-4 shadow-lg col-lg-3"
                  style={{ width: "20rem", height: "25rem" }}
                >
                  <img
                    className="card-img-top "
                    src={entry.img}
                    alt="logo"
                    style={{ width: "100%", height: "15rem" }}
                  />
                  <div className="card-body border">
                    <p style={{ fontSize: "10px" }}>{entry.headline}</p>
                    <p style={{ fontSize: "13px" }}>{entry.desc}</p>
                    <a
                      className="card-text"
                      style={{ fontSize: "10px" }}
                      href="/"
                    >
                      {entry.cta}
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Search;
