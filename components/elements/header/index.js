import Router from "next/router";
import React, { useState, useEffect, useRef, useContext } from "react";
import HeaderContext from "context/headerContext";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: "#fff",
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: "#E47223",
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "#8E8D8D",
  },
  checked: {},
}))(Switch);

function Header({}) {
  const { dark, setDark } = useContext(HeaderContext);
  const [dropdownContent, setDropDownContent] = useState(false);
  const innerRef = useOuterClick((ev) => {
    setDropDownContent((prev) => {
      if (prev) {
        return false;
      }
    });
  });

  function useOuterClick(callback) {
    const callbackRef = useRef();
    const innerRef = useRef();

    useEffect(() => {
      callbackRef.current = callback;
    });
    useEffect(() => {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
      function handleClick(e) {
        if (
          innerRef.current &&
          callbackRef.current &&
          !innerRef.current.contains(e.target)
        )
          callbackRef.current(e);
      }
    }, []);

    return innerRef;
  }

  return (
    <div ref={innerRef}>
      <div
        className="header"
        style={{
          backgroundColor: dark ? "#fff" : "#1C1B1B",
        }}
      >
        <div>
          <button onClick={() => Router.push("/")}>
            <span className="coin-style">Coin</span>
            <span className="stats-style">Stats</span>
          </button>
        </div>
        <div
          className="flex-display"
          style={{
            marginLeft: "52px",
          }}
        >
          <div className="flex-display">
            <label
              htmlFor={"light"}
              className={`${dark ? "dark-or" : "light-or"}`}
            >
              {dark ? "DARK" : "LIGHT"}
            </label>
            <AntSwitch
              key={"darkOrLight"}
              checked={dark}
              onChange={(event) => setDark(event.target.checked)}
              name="darkOrLight"
              id="light"
            />
          </div>
          <nav>
            <button className="button-wrap">Portfolio Tracker</button>
            <button
              style={{
                fontSize: "1rem",
                color: "#fda859",
                marginLeft: "20px",
                fontWeight: "500",
              }}
            >
              Live Prices
            </button>
            <button className="button-hover-wrap">Pricing</button>
            <button className="alerts-hover-wrap">Alerts</button>
            <button
              className="dropdown-hover-wrap"
              onClick={(e) => {
                e.stopPropagation();
                setDropDownContent((prev) => !prev);
              }}
            >{`\u2022 \u2022 \u2022`}</button>
          </nav>
          <div
            style={{
              height: "26px",
              borderLeft: "1px solid #6B6B6B",
              marginRight: "8px",
              marginLeft: "8px",
            }}
          ></div>
          <div>
            <buton className="login">LOGIN</buton>
          </div>
          <button className="started">GET STARTED</button>
        </div>
        <style jsx>{`
          .flex-display {
            display: flex;
            align-items: center;
          }
          button {
            border: none;
            background-color: transparent;
            cursor: pointer;
          }
          button:focus {
            outline: none;
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 70px;
            background-color: grey;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1200;
          }
          button:hover .coin-style {
            color: #fda859;
          }
          button:hover .stats-style {
            color: #fda859;
          }

          .login {
            font-size: 1rem;
            font-weight: 600;
            color: #fda859;
            cursor: pointer;
            padding-rigth: 12px;
            padding-left: 12px;
          }

          .started {
            font-size: 0.9rem;
            font-weight: 600;
            color: ${dark ? "#fff" : "#1C1B1B"};
            cursor: pointer;
            background-color: #fda859;
            padding: 12px 30px 12px 30px;
            border-radius: 30px;
            margin-left: 30px;
            transition: all 1s;
          }

          .started:hover {
            background-color: #febb7c;
          }

          .login:hover {
            color: #f6b578;
          }

          .coin-style {
            font-size: 1.5rem;
            font-weight: 0;
            transition: all 1s;
            color: ${dark ? "#000" : "#fff"};
          }
          .stats-style {
            font-size: 1.5rem;
            font-weight: 600;
            transition: all 1s;
            color: ${dark ? "#000" : "#fff"};
          }

          .button-wrap {
            background-color: ${dark ? "#EFEFEF" : "#2c2b2b"};
            font-size: 1rem;
            color: ${dark ? "#000" : "#fff"};
            transition: all 1s;
            padding: 5px 10px 5px 10px;
            border-radius: 12px;
            margin-left: 20px;
          }

          .button-wrap:hover {
            color: #fda859;
          }

          .button-hover-wrap {
            font-size: 1rem;
            color: ${dark ? "#000" : "#fff"};
            transition: all 1s;
            margin-left: 20px;
          }

          .alerts-hover-wrap {
            font-size: 1rem;
            color: ${dark ? "#000" : "#fff"};
            transition: all 1s;
            margin-left: 20px;
          }

          .dropdown-hover-wrap {
            font-size: 1rem;
            color: ${dark ? "#6B6B6B" : "#6B6B6B"};
            transition: all 1s;
            margin-left: 25px;
          }

          .dropdown-hover-wrap:hover {
            color: #fda859;
          }

          .button-hover-wrap:hover {
            color: #fda859;
          }

          .alerts-hover-wrap:hover {
            color: #fda859;
          }

          .light-or {
            letter-spacing: 2px;
            font-size: 0.6rem;
            font-weight: 500;
            color: #fff;
            cursor: pointer;
            transition: all 1s;
            margin-right: 4px;
          }
          .dark-or {
            letter-spacing: 2px;
            font-size: 0.6rem;
            font-weight: 500;
            color: #000;
            cursor: pointer;
            transition: all 1s;
            margin-right: 4px;
          }
          .alerts-hover-wrap:after {
            content: "new";
            font-family: "Roboto", sans-serif;
            font-size: 8px;
            text-transform: uppercase;
            color: #000;
            padding: 2px;
            position: absolute;
            margin-top: -10px;
            background: #fda859;
            border-radius: 3px;
            line-height: 7px;
          }
        `}</style>
      </div>
      <>
        <div
          style={{
            height: "0",
            overflow: "hidden",
            backgroundColor: dark ? "#fff" : "#1B1A1A",
            position: "fixed",
            width: "100vw",
            top: "70px",
            transition: "all 1s",
            zIndex: "1200",
          }}
          className="transition-dropdown"
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              height: "100%",
              marginRight: "26.4rem",
              marginLeft: "26.4rem",
              paddingTop: "1.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>
                <div>
                  <button className="button-on-dropdown">24h Report</button>
                </div>
                <div style={{ marginTop: "38px" }}>
                  <button className="button-on-dropdown">Widgets</button>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>
                <div>
                  <button className="button-on-dropdown">Press Kit</button>
                </div>
                <div style={{ marginTop: "38px" }}>
                  <button className="button-on-dropdown">News</button>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>
                <button className="button-on-dropdown">API Docs</button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>
                <button className="button-on-dropdown">Blog</button>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .transition-dropdown {
            height: ${dropdownContent ? "150px !important" : "0"};
          }
          .button-on-dropdown {
            border: none;
            background-color: transparent;
            cursor: pointer;
            font-size: 1rem;
            color: ${dark ? "#000" : "#fff"};
            transition: all 1s;
          }
          .button-on-dropdown:focus {
            outline: none;
          }
          .button-on-dropdown:hover {
            color: #fda859;
          }
        `}</style>
      </>
    </div>
  );
}

export default Header;
