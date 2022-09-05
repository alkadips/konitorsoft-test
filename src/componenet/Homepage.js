import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Homepage.css";
export default function Homepage() {
  return (
    <div className="main-container">
      <div className="header">
        <div className="logo">logo</div>
        <div>
          <MenuIcon />
        </div>
      </div>
      <div className="middel-text">
        <div className="un">Understanding Leadership</div>
        <div className="mt-3 text-secondary">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without
        </div>
        <div className="text-secondary">
          relying on meaningful content. Lorem ipsum may be used as a
          placeholder before final copy is available.{" "}
        </div>
      </div>
      <div className="green-back"></div>

      <div className="row row-section" style={{ padding: "30px" }}>
        <div className="col-md-4">
          <div className="card1">
            <div className="good-leader">Good Leaders</div>
            <div>
              <img
                src="avtar.png"
                style={{
                  width: "100%",
                  padding: "10px 50px 0px 50px",
                  borderRadius: "50%",
                }}
              ></img>
            </div>
            <div className="mt-3">
              <div className="text-secondary">
                relying on meaningful content. Lorem ipsum may be used as
              </div>
              <div className="text-secondary">
                relying on meaningful content. Lorem ipsum may be{" "}
              </div>
              <div className="text-secondary">
                relying on meaningful content. Lorem ipsum may be
              </div>
              <div className="text-secondary">
                relying on meaningful content. Lorem ipsum may be{" "}
              </div>
            </div>
            <div className="mt-5">
              LEARN MORE
              <div className="border-bottom-css"></div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card1">
            <div className="good-leader">Good Leaders</div>
            <div>
              <img
                src="avtar.png"
                style={{
                  width: "100%",
                  padding: "10px 50px 0px 50px",
                  borderRadius: "50%",
                }}
              ></img>
            </div>
            <div className="mt-3">
              <div className="text-secondary">
                relying on meaningful content. Lorem ipsum may be used as
              </div>
              <div className="text-secondary">
                relying on meaningful content. Lorem ipsum may be{" "}
              </div>
              <div className="text-secondary">
                relying on meaningful content. Lorem ipsum may be
              </div>
              <div className="text-secondary">
                relying on meaningful content. Lorem ipsum may be{" "}
              </div>
            </div>
            <div className="mt-5">
              LEARN MORE
              <div className="border-bottom-css"></div>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-4 ">
          <div className="card1">
            <div className="good-leader">Good Leaders</div>
            <div>
              <img
                src="avtar.png"
                style={{
                  width: "100%",
                  padding: "10px 50px 0px 50px",
                  borderRadius: "50%",
                }}
              ></img>
            </div>
            <div className="mt-3">
              <div className="text-secondary">
                relying on meaningful content. Lorem ipsum may be used as
              </div>
              <div className="text-secondary">
                relying on meaningful content. Lorem ipsum may be{" "}
              </div>
              <div className="text-secondary">
                relying on meaningful content. Lorem ipsum may be
              </div>
              <div className="text-secondary">
                relying on meaningful content. Lorem ipsum may be{" "}
              </div>
            </div>
            <div className="mt-5">
              LEARN MORE
              <div className="border-bottom-css"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section">Some text</div>
    </div>
  );
}
