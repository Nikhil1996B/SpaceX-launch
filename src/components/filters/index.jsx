import React, { useState, useEffect } from "react";
import filterLaunch from "./selector";
// import style from "./style";

function Filter(allLaunch = []) {
  const [launchFilter, setLaunchFilter] = useState([]);

  const filteredList = filterLaunch(allLaunch);
  return (
    <>
      <section className="filter-container">
        <div className="filter-box">
          <h4>Filters</h4>
          <div className="launch-year">
            <p>Launch Year</p>
            <hr />
            <div className="years">
              <ul className="year-list" id="year-list">
                <li>
                  <button type="submit" className="btn" id="2006">
                    2006
                  </button>
                </li>
                <li>
                  <button type="submit" className="btn" id="2007">
                    2007
                  </button>
                </li>
                <li>
                  <button type="submit" className="btn" id="2008">
                    2008
                  </button>
                </li>
                <li>
                  <button type="submit" className="btn" id="2009">
                    2009
                  </button>
                </li>
                <li>
                  <button type="submit" className="btn" id="2010">
                    2010
                  </button>
                </li>
                <li>
                  <button type="submit" className="btn" id="2011">
                    2011
                  </button>
                </li>
                <li>
                  <button type="submit" className="btn" id="2012">
                    2012
                  </button>
                </li>
                <li>
                  <button type="submit" className="btn" id="2013">
                    2013
                  </button>
                </li>
                <li>
                  <button type="submit" className="btn" id="2014">
                    2014
                  </button>
                </li>
                <li>
                  <button type="submit" className="btn" id="2015">
                    2015
                  </button>
                </li>
                <li>
                  <button type="submit" className="btn" id="2016">
                    2016
                  </button>
                </li>
                <li>
                  <button type="submit" className="btn" id="2017">
                    2017
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="success-launch">
            <p>Successful Launch</p>
            <hr />
            <div className="launch-result">
              <button className="btn" id="launch-success-true">
                True
              </button>
              <button className="btn" id="launch-success-false">
                False
              </button>
            </div>
          </div>
          <div className="success-landing">
            <p>Successful Landing</p>
            <hr />
            <div className="landing-result">
              <button className="btn" id="landing-success-true">
                True
              </button>
              <button className="btn" id="lading-success-false">
                False
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Filter;
