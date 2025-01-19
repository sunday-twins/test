import '../scss/components/button.scss'
import { SUB3_BUTTON } from "../mock/mock_sub3";

const Sub3 = () => {
  return (
    <section className="page_sub">
      <div className="inner">
        <h2>sub 3</h2>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}>

          <h3 style={{
            marginTop: "10px",
            paddingTop: "10px",
            borderTop: "1px solid #eee",
          }}>button</h3>

          <div className="box_common_btn">
            <button type="button" className="btn_common">취소</button>
            <button type="button" className="btn_common type_point">확인</button>
          </div>

          <div className="box_common_btn">
            <button type="button" className="btn_common" disabled>취소</button>
            <button type="button" className="btn_common type_point" disabled>확인</button>
          </div>

          <div style={{
            display: "flex",
          }}>
            <a href="#" className="btn_download">download</a>
          </div>

        </div>
      </div>
    </section >
  )
};

export default Sub3;