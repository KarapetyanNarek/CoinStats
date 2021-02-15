import { useContext } from "react";
import CoinContext from "context/coinContext";
import HeaderContext from "context/headerContext";
import { IconButton } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import { fetcher } from "src/pagecontext";
import numeral from "numeral";
import LanguageIcon from "@material-ui/icons/Language";
import TwitterIcon from "@material-ui/icons/Twitter";
import RedditIcon from "@material-ui/icons/Reddit";
import TelegramIcon from "@material-ui/icons/Telegram";
import useSWR from "swr";

function CoinHeader() {
  const { coin } = useContext(CoinContext);
  const { dark } = useContext(HeaderContext);
  const { data = { rows: [] }, mutate, error } = useSWR(
    "/api/favorites",
    fetcher
  );
  const favorites = data.rows.flatMap((r) => r.id);

  async function addFavorietsHandler(id) {
    try {
      await fetch(`/api/favorite/${id}`, {
        method: favorites.some((f) => f === id) ? "DELETE" : "PUT",
        body: JSON.stringify(data.rows.find((i) => i.id === id)),
      });
      mutate();
    } catch (e) {
      console.log(e.error.message);
    }
  }

  return (
    <div
      style={{
        paddingTop: "6rem",
        paddingRight: "20rem",
        paddingLeft: "20rem",
      }}
    >
      <div
        className="flex"
        style={{
          justifyContent: "space-between",
        }}
      >
        <div>
          <div className="flex items-center">
            <div
              style={{
                height: "40px",
                width: "40px",
                marginRight: "25px",
              }}
            >
              <img
                src={coin.icon}
                alt="icon"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              className={`${dark ? "dark" : "snow"} flex items-center`}
              style={{
                fontSize: "1.5rem",
              }}
            >
              <div>
                {coin.name} {`(${coin.symbol})`}
              </div>
              <div
                className="flex items-center justify-center"
                style={{
                  paddingLeft: "4px",
                  paddingRight: "4px",
                  overflow: "hidden",
                  backgroundColor: "#FDA859",
                  borderRadius: "4px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <div
                  style={{
                    objectFit: "contain",
                    fontSize: "0.9rem",
                    color: "#000",
                  }}
                >{`#${coin.rank}`}</div>
              </div>
              <IconButton
                style={{
                  color: favorites.some((f) => f === coin.id)
                    ? "yellow"
                    : "#9c9c9c",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  addFavorietsHandler(coin.id);
                }}
              >
                <StarIcon />
              </IconButton>
            </div>
          </div>
          <div
            className="flex items-center"
            style={{
              marginTop: "1.5rem",
            }}
          >
            <div
              className={`${dark ? "dark" : "snow"}`}
              style={{
                fontSize: "2rem",
                marginLeft: "4rem",
              }}
            >
              {numeral(coin.price).format(
                String(coin.price)[0] === "0" ? "$0.[000000]" : "$0,0.[00]"
              )}
            </div>
            <div
              className="display-flex"
              style={{ fontSize: "1.3rem", marginLeft: "1rem" }}
            >
              <div
                className={`${
                  Math.sign(+coin.priceChange1d) === 1
                    ? "arrow-up"
                    : "arrow-down"
                }`}
              ></div>
              <div
                className="display-flex"
                style={{
                  color:
                    Math.sign(+coin.priceChange1d) === 1
                      ? "#34c759"
                      : "#ff3a30",
                }}
              >
                {`${coin.priceChange1d}%`}
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex"
          style={{
            flex: "1 1 0%",
            justifyContent: "space-around",
          }}
        >
          <div>
            <div>
              <div
                style={{
                  color: dark ? "#000" : "rgba(225, 225, 255, 0.5)",
                  fontSize: "0.75rem",
                }}
              >
                MARKET CAP
              </div>
              <div
                className={`${dark ? "dark" : "snow"}`}
                style={{
                  fontSize: "1.25rem",
                }}
              >
                {`${numeral(coin.marketCap).format("$0.0a").slice(0, -1)}B`}
              </div>
            </div>
            <div
              style={{
                marginTop: "1.5rem",
              }}
            >
              <div
                style={{
                  color: dark ? "#000" : "rgba(225, 225, 255, 0.5)",
                  fontSize: "0.75rem",
                }}
              >
                VALUME 24H
              </div>
              <div
                className={`${dark ? "dark" : "snow"}`}
                style={{
                  fontSize: "1.25rem",
                }}
              >
                {`${numeral(coin.volume).format("$0.0a").slice(0, -1)}B`}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div
                style={{
                  color: dark ? "#000" : "rgba(225, 225, 255, 0.5)",
                  fontSize: "0.75rem",
                }}
              >
                AVAILABLE SUPPLY
              </div>
              <div
                className={`${dark ? "dark" : "snow"}`}
                style={{
                  fontSize: "1.25rem",
                }}
              >
                {`${numeral(coin.availableSupply).format("0,0")}`}
              </div>
            </div>
            <div
              style={{
                marginTop: "1.5rem",
              }}
            >
              <div
                style={{
                  color: dark ? "#000" : "rgba(225, 225, 255, 0.5)",
                  fontSize: "0.75rem",
                }}
              >
                TOTAL SUPPLAY
              </div>
              <div
                className={`${dark ? "dark" : "snow"}`}
                style={{
                  fontSize: "1.25rem",
                }}
              >
                {`${numeral(coin.totalSupply).format("0,0")}`}
              </div>
            </div>
          </div>
          <div>
            <div>
              <button className="btn site-btn">
                <LanguageIcon
                  className={`${dark ? "icons-light" : "icons-dark"}`}
                />
                <div
                  className={`${dark ? "site-lable-light" : "site-lable-dark"}`}
                >
                  Website
                </div>
              </button>
            </div>
            <div>
              <button className="site-btn btn">
                <TwitterIcon
                  className={`${dark ? "icons-light" : "icons-dark"}`}
                />
                <div
                  className={`${dark ? "site-lable-light" : "site-lable-dark"}`}
                >
                  Twitter
                </div>
              </button>
            </div>
            <div>
              <button className="site-btn btn">
                <RedditIcon
                  className={`${dark ? "icons-light" : "icons-dark"}`}
                />
                <div
                  className={`${dark ? "site-lable-light" : "site-lable-dark"}`}
                >
                  Reddit
                </div>
              </button>
            </div>
            <div>
              <button className="telegram-btn">
                <TelegramIcon
                  className={`${
                    dark ? "telegram-icons-light" : "telegram-icons-dark"
                  }`}
                />
                <div
                  className={`${
                    dark ? "telegram-lable-light" : "telegram-lable-dark"
                  }`}
                >
                  Telegram
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginLeft: "4rem",
          marginTop: "4rem",
          display: "flex",
        }}
      >
        <div className="coin-btn">
          <button className="coin-btn-child">ADD TRANSACTION</button>
        </div>
        <div className="coin-btn coin-btn-left">
          <button className="coin-btn-child">TRADE BITCOIN</button>
        </div>
        <div className="coin-btn-left">
          <button className="coin-btn-child">BUY BITCOIN</button>
        </div>
      </div>
      <style jsx>{`
        .arrow-up {
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 8px solid #34c759;
          margin-right: 4px;
        }
        .arrow-down {
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 8px solid #ff3a30;
          margin-right: 4px;
        }

        .display-flex {
          display: flex;
          align-items: center;
        }
        .site-btn {
          background-color: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .site-btn:focus {
          outline: none;
        }

        .telegram-btn {
          background-color: transparent;
          border: none;
          display: flex;
          align-items: center;
        }
        .telegram-btn:focus {
          outline: none;
        }
        .coin-btn {
          padding-right: 2rem;
          border-right: ${dark ? "1px solid #dddddd" : "1px solid #3E3D3D"};
        }
        .coin-btn-left {
          padding-left: 2rem;
        }

        .coin-btn-child {
          color: #ffa959;
          font-size: 1rem;
          font-weight: 700;
          background-color: transparent;
          border: none;
          cursor: pointer;
        }

        .coin-btn-child:hover {
          color: #daa16c;
          transition: all 0.5s;
        }

        .coin-btn-child:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
}

export default CoinHeader;
