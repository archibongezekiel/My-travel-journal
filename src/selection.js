import React from "react";
function Selection(props) {
  return (
    <>
      <div>
        <div className="selection-container">
          <img src={props.image} alt="places" className="photo-style" />
          {/* country and map*/}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "8px",
            }}
          >
            {/*  */}
            <div className="country-map-container">
              <span class="material-symbols-outlined" id="location-icon">
                location_on
              </span>
              <p className="country-text">{props.country}</p>
              <a href="https://www.google.com/maps" className="google-map">
                View on Google Map
              </a>
            </div>
            {/*  */}
            <div className="description-location-date-container">
              <h1 className="location-text">{props.location}</h1>
              <h4 className="date-text">{props.dates}</h4>
              <p className="description-text">{props.description}</p>
            </div>
            {/*  */}
          </div>
          {/* location */}
        </div>
      </div>
    </>
  );
}
export default Selection;
