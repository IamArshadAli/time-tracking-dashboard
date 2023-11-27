/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import { ellipsisIcon } from "../assets/images";
import { iconBG, icons, timeLapse } from "../utils/constants";

const ReportCard = ({ report }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await fetch("./data.json")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  return (
    <section className="main__stats">
      {data?.map((item, index) => (
        <div
          key={index}
          className="stats__card"
          style={{
            backgroundImage: `url("${icons[index + 1]}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "calc(100% - 18px) -8px",
            backgroundColor: iconBG[index + 1],
          }}
        >
          <div className="stats__section">
            <div className="stats__header">
              <h4 className="stats__header__title">{item.title}</h4>
              <img
                src={ellipsisIcon}
                className="stats__header__icon"
                alt="ellipsis"
              />
            </div>
            <div className="stats__data">
              <h4 className="stats__data__current">
                {item.timeframes[report].current}hrs
              </h4>
              <p className="stats__data__previous">
                {timeLapse[report]} - {item.timeframes[report].previous}hrs
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ReportCard;
