import { Link } from "react-router-dom";
import ButtonFatch from "../../../Utility/button/ButtonFatch";
import Tilt from "react-parallax-tilt";
import "./box.css";

function Box({ title, asal, gambar, paragraf, allItem }) {
  return (
    <Tilt glareEnable={true} glareMaxOpacity={0.2}>
      <div className="box">
        <div className="container">
          <div className="img">
            <img src={gambar} alt={title} />
          </div>
          <div className="deskripsi">
            <div className="title">
              <h3>
                {title}-{asal}
              </h3>
            </div>
            <p className="boxParagraf">{paragraf}</p>
            <ButtonFatch
              action="Details"
              valueContext={allItem}
              navigateLink={title}
            />
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default Box;
