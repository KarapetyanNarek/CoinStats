import { useContext } from "react";
import HeaderContext from "context/headerContext";
import CoinHeader from "./coin-header";
import TabsPage from "components/elements/tabs";
import ChartContent from "./cart-content";

function CoinPage() {
  let { dark } = useContext(HeaderContext);
  return (
    <>
      <div className="coin-context">
        <CoinHeader />
        <div
          className="flex items-center"
          style={{
            paddingTop: "4rem",
            marginRight: "20rem",
            marginLeft: "20rem",
            paddingBottom: "1rem",
            borderBottom: dark ? "1px solid #DDDDDD" : "1px solid #3E3D3D",
          }}
        >
          <TabsPage
            tabs={[
              "OVERVIEW",
              "NEWS",
              "MARKETS",
              "HOLDINGS",
              "TEAM UPDATES",
              "ON-CHAIN DATA",
            ]}
          />
          <button className="widgets-btn">{`</> WIDGETS`}</button>
        </div>
        <ChartContent />
      </div>
      <style jsx>{`
        .coin-context {
          background-color: ${dark ? "#fff" : "#1c1b1b"};
          height: 100vh;
        }
        .widgets-btn {
          font-size: 0.9rem;
          color: #ffa959;
          font-weight: 700;
          background-color: ${dark ? "#fff" : "transparent"};
          padding: 14px 32px 14px 32px;
          border-radius: 25px;
          border: 1px solid #8e8d8d;
          transition: all 1s;
        }

        .widgets-btn:hover {
          color: #f9b779;
        }
      `}</style>
    </>
  );
}

export default CoinPage;
