import { statusOpt, typeOpt } from "../constant";

const AddJob = () => {
  return (
    <div className="add-page">
      <section className="add-sec">
        <h2>Yeni İş Ekle</h2>
        <form>
          <div>
            <label>Pozisyon</label>
            <input name="position" type="text" required />
          </div>
          <div>
            <label>Şirket</label>
            <input name="company" type="text" required />
          </div>
          <div>
            <label>Lokasyon</label>
            <input name="location" type="text" required />
          </div>
          <div>
            <label>Durum</label>
            <select name="status">
              <option value="" hidden>
                Seçiniz
              </option>
              {statusOpt.map((i) => (
                <option>{i}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Tür</label>
            <select name="type">
              <option value="" hidden>
                Seçiniz
              </option>
              {typeOpt.map((i) => (
                <option>{i}</option>
              ))}
            </select>
          </div>
          <div>
            <div className="button-borders">
              <button className="primary-button"> BUTTON</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddJob;
