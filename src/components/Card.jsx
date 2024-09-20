import { MdLocationOn } from "react-icons/md";
import DelButton from "../components/DelButton";
import { FaSuitcase } from "react-icons/fa";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { deleteJob } from "../redux/slices/jobSlice";

const Card = ({ job }) => {
  const dispatch = useDispatch();
  const color = {
    Mülakat: "gold",
    Başvuru: "orange",
    Teklif: "lightblue",
    Değerlendirme: "darkgreen",
    Red: "red",
  };
  const handleDelete = () => {
    // 1) Api isteği atıp veritabanından işi kaldır.
    axios
      .delete(`http://localhost:4000/jobs/${job.id}`)
      .then(() => {
        dispatch(deleteJob(job.id));
        toast.info("Silme İşlemi Başarılı!");
      })
      .catch((err) => {
        toast.warn("Silme İşlemi Başarısız!!!");
      });
    // 2) Başarılı olursa store'dan da kaldır.
    // 3) Başarısız olursa uyarı ver.
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
          <DelButton handleDelete={handleDelete} />
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
