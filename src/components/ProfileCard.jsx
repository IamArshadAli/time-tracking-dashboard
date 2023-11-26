/* eslint-disable react/prop-types */
import { jeremyImage } from "../assets/images";
import { reportList } from "../utils/constants";

const ProfileCard = ({ report, handleReport }) => {
  return (
    <section className="main__profile">
      <div className="main__profile__info">
        <figure className="">
          <img
            src={jeremyImage}
            alt="Jeremy Robson"
            className="profile__info__image"
          />
        </figure>
        <div>
          <p className="profile__info__report">Report for</p>
          <p className="profile__info__name">
            Jeremy Robson
          </p>
        </div>
      </div>
      {/* REPORT NAV */}
      <div className="main__profile__nav">
        {reportList.map((item, index) => (
          <button
            key={index}
            value={item}
            className={`${
              report === item ? "text-white" : "text-DesaturatedBlue"
            } profile__nav__button`}
            onClick={handleReport}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProfileCard;
