import { MdLocationOn } from "react-icons/md";
import DelButton from "../components/DelButton";
import { FaSuitcase } from "react-icons/fa";
import { BsFillCalendar2DateFill } from "react-icons/bs";

const Card = ({ job }) => {
  const color = {
    Mülakat: "gold",
    Başvuru: "orange",
    Teklif: "lightblue",
    Değerlendirme: "darkgreen",
    Red: "red",
  };

  return (
    <div className="card">
      <div className="head">
        <div className="left">
          <div className="letter">
            <span>K</span>
          </div>
          <div className="info">
            <p>Frontend</p>
            <p>Udemig</p>
          </div>
        </div>
        <div className="rigth">
          <DelButton />
        </div>
      </div>
      <div className="body">
        <div className="field">
          <MdLocationOn />
          <p>İzmir</p>
        </div>
        <div className="field">
          <FaSuitcase />
          <p>Tam Zamanlı</p>
        </div>
        <div className="field">
          <BsFillCalendar2DateFill />
          <p>2022-02-02</p>
        </div>
        <div className="status">
          <p style={{ background: color[job.status] }}>{job.status} </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
