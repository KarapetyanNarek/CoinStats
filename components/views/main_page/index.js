import React, { useState, useContext } from "react";
import TableCoins from "./table";
import Tabs from "components/elements/tabs";
import svg from "public/img/1.svg";
import HeaderContext from "context/headerContext";

function CoinState() {
  const { dark } = useContext(HeaderContext);
  return (
    <div
      style={{
        backgroundColor: dark ? "#fff" : "#1C1B1B",
      }}
    >
      <div
        style={{
          paddingTop: "150px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "2rem",
                color: dark ? "#1C1B1B" : "#E7E6E6",
              }}
            >
              Crypto Tracker
            </span>
          </div>
          <div
            style={{
              marginTop: "30px",
              marginBottom: "30px",
              borderTop: "1px solid #3E3D3D",
              borderBottom: "1px solid #3E3D3D",
              display: "flex",
              alignItems: "center",
              paddingTop: "6px",
              paddingBottom: "6px",
            }}
          >
            <button
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                alignContent: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <span
                  style={{
                    letterSpacing: "2px",
                    fontSize: "0.8rem",
                    color: dark ? "#1C1B1B" : "#E7E6E6",
                  }}
                >
                  MARKET CAP
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  fontSize: "1rem",
                  marginTop: "4px",
                }}
              >
                <div
                  style={{
                    color: dark ? "#1C1B1B" : "#E7E6E6",
                    marginRight: "8px",
                  }}
                >
                  $1,506,242,984,627
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    className={`${
                      Math.sign(1.77) === 1 ? "arrow-up" : "arrow-down"
                    }`}
                  ></div>
                  <div
                    className="display-flex"
                    style={{
                      color: Math.sign(1.77) === 1 ? "#34c759" : "#ff3a30",
                    }}
                  >
                    {`${1.77}%`}
                  </div>
                </div>
              </div>
            </button>
            <button
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                alignContent: "flex-start",
                marginRight: "20px",
                marginLeft: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <span
                  style={{
                    letterSpacing: "2px",
                    fontSize: "0.8rem",
                    color: dark ? "#1C1B1B" : "#E7E6E6",
                  }}
                >
                  VALUME 24H
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  fontSize: "1rem",
                  marginTop: "4px",
                }}
              >
                <div
                  style={{
                    color: dark ? "#1C1B1B" : "#E7E6E6",
                    marginRight: "8px",
                  }}
                >
                  $200,715,423,914
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    className={`${
                      Math.sign(1.71) === 1 ? "arrow-up" : "arrow-down"
                    }`}
                  ></div>
                  <div
                    className="display-flex"
                    style={{
                      color: Math.sign(1.71) === 1 ? "#34c759" : "#ff3a30",
                    }}
                  >
                    {`${1.71}%`}
                  </div>
                </div>
              </div>
            </button>
            <button
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                alignContent: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <span
                  style={{
                    letterSpacing: "2px",
                    fontSize: "0.8rem",
                    color: dark ? "#1C1B1B" : "#E7E6E6",
                  }}
                >
                  BTC DOMINANCE
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  fontSize: "1rem",
                  marginTop: "4px",
                }}
              >
                <div
                  style={{
                    color: dark ? "#1C1B1B" : "#E7E6E6",
                    marginRight: "8px",
                  }}
                >
                  58.87%
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    className={`${
                      Math.sign(-3.17) === 1 ? "arrow-up" : "arrow-down"
                    }`}
                  ></div>
                  <div
                    className="display-flex"
                    style={{
                      color: Math.sign(-3.17) === 1 ? "#34c759" : "#ff3a30",
                    }}
                  >
                    {`${-3.17}%`}
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "100px",
        }}
      ></div>
      <div
        style={{
          margin: "20px",
        }}
      >
        <div
          style={{
            marginRight: "14rem",
            marginLeft: "14rem",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <Tabs
              tabs={[
                "CRYPTOCURRENCIES",
                "EXCHANGES",
                "FAVORITES",
                "DEFI",
                "HEATMAP",
              ]}
            />
          </div>
          <TableCoins />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginRight: "16rem",
            marginLeft: "16rem",
            marginTop: "4rem",
          }}
        >
          <div
            style={{
              width: "100%",
              paddingBottom: "6rem",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                color: dark ? "#000" : "#fff",
              }}
            >
              Track Your Crypto Portfolio
            </div>
            <div
              style={{
                fontSize: "1.5rem",
                color: dark ? "#000" : "#fff",
                marginTop: "2rem",
              }}
            >
              <div>Auto sync your exchanged and wallets</div>
              <div
                style={{
                  marginTop: "0.9rem",
                  marginBottom: "0.9rem",
                }}
              >
                Personalized crypto news feed
              </div>
              <div>
                More than 8000 cryptocurrencies and 300 exchanges available
              </div>
            </div>
            <div
              style={{
                width: "100%",
                marginTop: "3rem",
              }}
            >
              <div
                className={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <button className="started">GET STARTED</button>
                  </div>
                  <div
                    className="button-bottom-field"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <span>NO CREDIT CARD NEEDED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="image"
            style={{
              width: "32.36111%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img src={svg} alt="banner" />
            <img
              className="floating"
              src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNDkzLjEgMzc0IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGU+LnN0OXtlbmFibGUtYmFja2dyb3VuZDpuZXd9LnN0MTB7ZmlsbDojZjI4NTIyfTwvc3R5bGU+PGcgY2xhc3M9InN0OSI+PHBhdGggY2xhc3M9InN0MTAiIGQ9Ik0yNjYuMiAxNzIuMmwtMS43LTEuNy0uMS0uMWMtMS0xLjEtMS41LTIuNS0xLjUtNC4ybDEuNyAxLjdjLS4xIDEuNy40IDMgMS41IDQuMmwuMS4xem0tMS42LTQuM2wtMS43LTEuNy4xLTUuNCAxLjcgMS44em0xMi0xNy4zbC0xLjctMS43YzEuOS0uOCAzLjQtMS44IDQuNi0zbDEuNyAxLjdjLTEuMiAxLjItMi44IDIuMi00LjYgM3oiLz48cGF0aCBjbGFzcz0ic3QxMCIgZD0iTTI3OS4yIDEzNi40bDEuNyAxLjdjLjIuMy41LjUuNy44IDEgMS4zIDEuNCAyLjggMS40IDQuNiAwIDEuNS0uNyAyLjgtMS44IDQuMWwtMS43LTEuN2MxLjItMS4yIDEuOC0yLjYgMS44LTQuMS4xLTEuOC0uNC0zLjMtMS40LTQuNi0uMi0uMy0uNC0uNi0uNy0uOHptOS42LTcuOWwxLjcgMS43Yy0yLjctMi44LTcuMS00LjktMTMuMS02LjNsLTEuNy0xLjdjNiAxLjQgMTAuNCAzLjUgMTMuMSA2LjN6bS0yMy43IDIyLjlsLTEuNy0xLjcuNS0xOC42IDEuOCAxLjd6Ii8+PHBhdGggY2xhc3M9InN0MTAiIGQ9Ik0yNDYuOSAxNTQuOGwtMS43LTEuN2MtMS40LTEuNC0yLjEtMy0yLTQuNyAwLTEuNS42LTIuNyAxLjctMy45IDEuMS0xLjEgMi40LTEuNyA0LTEuNyAxLjIgMCAyLjMuNCAzLjIgMS4xIDEuOSAxLjYgMy44IDIuOCA1LjUgMy44IDEuOC45IDMuNyAxLjUgNS44IDEuOWwxLjcgMS43Yy0yLjEtLjMtNC0uOS01LjgtMS45LTEuOC0uOS0zLjYtMi4yLTUuNS0zLjgtLjktLjgtMi0xLjEtMy4yLTEuMS0xLjUgMC0yLjguNi00IDEuNy0xLjEgMS4xLTEuNyAyLjQtMS43IDMuOS0uMSAxLjguNiAzLjMgMiA0Ljd6bTQzLjYtNTUuMmwxLjcgMS43Yy0uMi0uMi0uNS0uNS0uOC0uN2wtMS43LTEuN2MuMy4zLjYuNS44Ljd6bS0zMC4zIDE4LjdsLTEuNy0xLjdjMS4zIDEuMyAzLjIgMi4zIDUuOCAzLjFsMS43IDEuN2MtMi42LS44LTQuNS0xLjgtNS44LTMuMXoiLz48cGF0aCBjbGFzcz0ic3QxMCIgZD0iTTI3OC4zIDk0LjdsLTEuNy0xLjdjNS40IDEgOS44IDIuOSAxMy4yIDUuOWwxLjcgMS43Yy0zLjUtMi45LTcuOS00LjktMTMuMi01Ljl6TTI2NiAxMjEuNGwtMS43LTEuOC41LTE1LjggMS43IDEuN3ptLjgtMjdsLTEuNy0xLjguMS0zLjEgMS43IDEuN3ptOC4zLTkuMmwxLjcgMS43Yy0xLTEtMi4zLTEuNi0zLjktMS42cy0zLjEuNi00LjIgMS43LTEuNyAyLjUtMS44IDQuMWwtMS43LTEuN2MuMS0xLjYuNy0zIDEuOC00LjEgMS4xLTEuMSAyLjYtMS43IDQuMi0xLjcgMS42LjEgMi45LjYgMy45IDEuNnoiLz48cGF0aCBjbGFzcz0ic3QxMCIgZD0iTTI1MS42IDEyNi4zbC0xLjctMS43Yy0zLjItMy4yLTQuNy03LjQtNC41LTEyLjcuMi01LjMgMi4xLTkuNiA1LjctMTMgMy43LTMuNCA4LjMtNS41IDE0LTYuMmwxLjcgMS43Yy01LjcuOC0xMC40IDIuOC0xNCA2LjItMy43IDMuNC01LjYgNy43LTUuNyAxMy0uMiA1LjMgMS4zIDkuNSA0LjUgMTIuN3oiLz48cGF0aCBjbGFzcz0ic3QxMCIgZD0iTTI5MC42IDEzMC40YzIuNyAyLjggNCA3IDMuOCAxMi40LS4yIDQuOS0xLjkgOS01LjMgMTIuNHMtNy43IDUuNi0xMi45IDYuOGwtLjIgNS45Yy0uMSAxLjctLjcgMy0xLjggNC4yLTEuMiAxLjEtMi42IDEuNy00LjIgMS43cy0yLjktLjYtNC0xLjdjLTEtMS4xLTEuNS0yLjUtMS41LTQuMmwuMi01LjNjLTMuNC0uMy02LjUtMS4xLTkuMy0yLjItMi44LTEuMS01LjUtMi45LTguMS01LjEtMS43LTEuNS0yLjUtMy4yLTIuNC01LjEgMC0xLjUuNi0yLjcgMS43LTMuOSAxLjEtMS4xIDIuNC0xLjcgNC0xLjcgMS4yIDAgMi4zLjQgMy4yIDEuMSAxLjkgMS42IDMuOCAyLjggNS41IDMuOCAxLjguOSAzLjcgMS41IDUuOCAxLjlsLjYtMTguNmMtMTIuNy0yLjMtMTguOS04LjctMTguNi0xOS4yLjItNS4zIDIuMS05LjYgNS43LTEzIDMuNy0zLjQgOC4zLTUuNSAxNC02LjJsLjEtMy4yYy4xLTEuNi43LTMgMS44LTQuMSAxLjEtMS4xIDIuNi0xLjcgNC4yLTEuN3MyLjkuNiA0IDEuN2MxIDEuMSAxLjUgMi41IDEuNSA0LjFsLS4xIDMuNWM1LjQgMSA5LjggMi45IDEzLjIgNS45IDEuOCAxLjUgMi43IDMuMSAyLjYgNS4xIDAgMS41LS42IDIuNy0xLjcgMy45LTEuMSAxLjEtMi40IDEuNy0zLjkgMS43LS45IDAtMS44LS4zLTIuNS0uOS0xLjktMS42LTQuNS0zLTgtNC4xbC0uNSAxNy42YzYgMS41IDEwLjQgMy43IDEzLjEgNi41em0tMjQuNi05bC41LTE1LjhjLTIuNi41LTQuNiAxLjQtNiAyLjgtMS40IDEuMy0yLjEgMy0yLjIgNC45LS4xIDIuMS42IDMuOCAxLjkgNS4xIDEuMyAxLjIgMy4yIDIuMiA1LjggM20xNS4xIDI2LjFjMS4yLTEuMiAxLjgtMi42IDEuOC00LjEuMS0xLjgtLjQtMy4zLTEuNC00LjZzLTIuNS0yLjQtNC42LTMuM2wtLjUgMTVjMi0uNyAzLjYtMS43IDQuNy0zIi8+PGcgY2xhc3M9InN0OSI+PGRlZnM+PHBhdGggaWQ9IlNWR0lEXzhfIiBkPSJNMjkwLjYgMTMwLjRjMi43IDIuOCA0IDcgMy44IDEyLjQtLjIgNC45LTEuOSA5LTUuMyAxMi40cy03LjcgNS42LTEyLjkgNi44bC0uMiA1LjljLS4xIDEuNy0uNyAzLTEuOCA0LjItMS4yIDEuMS0yLjYgMS43LTQuMiAxLjdzLTIuOS0uNi00LTEuN2MtMS0xLjEtMS41LTIuNS0xLjUtNC4ybC4yLTUuM2MtMy40LS4zLTYuNS0xLjEtOS4zLTIuMi0yLjgtMS4xLTUuNS0yLjktOC4xLTUuMS0xLjctMS41LTIuNS0zLjItMi40LTUuMSAwLTEuNS42LTIuNyAxLjctMy45IDEuMS0xLjEgMi40LTEuNyA0LTEuNyAxLjIgMCAyLjMuNCAzLjIgMS4xIDEuOSAxLjYgMy44IDIuOCA1LjUgMy44IDEuOC45IDMuNyAxLjUgNS44IDEuOWwuNi0xOC42Yy0xMi43LTIuMy0xOC45LTguNy0xOC42LTE5LjIuMi01LjMgMi4xLTkuNiA1LjctMTMgMy43LTMuNCA4LjMtNS41IDE0LTYuMmwuMS0zLjJjLjEtMS42LjctMyAxLjgtNC4xIDEuMS0xLjEgMi42LTEuNyA0LjItMS43czIuOS42IDQgMS43YzEgMS4xIDEuNSAyLjUgMS41IDQuMWwtLjEgMy41YzUuNCAxIDkuOCAyLjkgMTMuMiA1LjkgMS44IDEuNSAyLjcgMy4xIDIuNiA1LjEgMCAxLjUtLjYgMi43LTEuNyAzLjktMS4xIDEuMS0yLjQgMS43LTMuOSAxLjctLjkgMC0xLjgtLjMtMi41LS45LTEuOS0xLjYtNC41LTMtOC00LjFsLS41IDE3LjZjNiAxLjUgMTAuNCAzLjcgMTMuMSA2LjV6bS0yNC42LTlsLjUtMTUuOGMtMi42LjUtNC42IDEuNC02IDIuOC0xLjQgMS4zLTIuMSAzLTIuMiA0LjktLjEgMi4xLjYgMy44IDEuOSA1LjEgMS4zIDEuMiAzLjIgMi4yIDUuOCAzbTE1LjEgMjYuMWMxLjItMS4yIDEuOC0yLjYgMS44LTQuMS4xLTEuOC0uNC0zLjMtMS40LTQuNnMtMi41LTIuNC00LjYtMy4zbC0uNSAxNWMyLS43IDMuNi0xLjcgNC43LTMiLz48L2RlZnM+PGNsaXBQYXRoIGlkPSJTVkdJRF85XyI+PHVzZSB4bGluazpocmVmPSIjU1ZHSURfOF8iIG92ZXJmbG93PSJ2aXNpYmxlIi8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjU1ZHSURfOV8pIj48cGF0aCBmaWxsPSIjZmZhOTU5IiBkPSJNMzAwLjUgNzkuOWgtNjUuMWwtMi45IDk0LjloNjUuMWwyLjktOTQuOSIvPjwvZz48L2c+PC9nPjwvc3ZnPg=="
              alt="banner"
            />
            <img
              className="floating"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTMuMSAzNzQiPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI5NTM4Ljg1MSIgeTE9Ijc2OS4xNSIgeDI9Ijk1NzMuMDUxIiB5Mj0iNzY5LjE1IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDk3ODUuNjUgLTcwNCkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmYTk1OSIvPjxzdG9wIG9mZnNldD0iLjQzMSIgc3RvcC1jb2xvcj0iI2ZmYjA1ZSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmYzE2YiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNhKSIgZD0iTTI0Ni44IDY1LjJsLTE3LTEwLTE3LjIgMTAgMTcuMSA5Ljl6Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJiIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ijk1MzguNzg3IiB5MT0iNzcxLjYiIHgyPSI5NTczLjA1IiB5Mj0iNzcxLjYiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgOTc4NS42NSAtNzA0KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZhOTU5Ii8+PHN0b3Agb2Zmc2V0PSIuNDMxIiBzdG9wLWNvbG9yPSIjZmZiMDVlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZjMTZiIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBvcGFjaXR5PSIuMjUiIGZpbGw9InVybCgjYikiIGQ9Ik0yNDYuOSA2Ny42bC0xNy4xLTkuOS0xNy4yIDkuOSAxNy4xIDkuOXoiLz48bGluZWFyR3JhZGllbnQgaWQ9ImMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjEzLjUyMiIgeTE9Ijc4OC4zNzgiIHgyPSIyNDMuNTIzIiB5Mj0iNzc1Ljg3OCIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgwIC03MDQpIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmE5NTkiLz48c3RvcCBvZmZzZXQ9Ii40MzEiIHN0b3AtY29sb3I9IiNmZmIwNWUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmMxNmIiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIG9wYWNpdHk9Ii42NSIgZmlsbD0idXJsKCNjKSIgZD0iTTI0Ni45IDY3LjZsLTE3LjIgOS45LTE3LjEtOS45IDE3LjEgMjcuMnoiLz48bGluZWFyR3JhZGllbnQgaWQ9ImQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iOTU1NS45MTgiIHkxPSI3ODUuMiIgeDI9Ijk1NzMuMDUiIHkyPSI3ODUuMiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA5Nzg1LjY1IC03MDQpIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmE5NTkiLz48c3RvcCBvZmZzZXQ9Ii40MzEiIHN0b3AtY29sb3I9IiNmZmIwNWUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmMxNmIiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIG9wYWNpdHk9Ii41IiBmaWxsPSJ1cmwoI2QpIiBkPSJNMjEyLjYgNjcuNmwxNy4xIDkuOXYxNy4zeiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iZSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMzEuNjM3IiB5MT0iNzc5Ljg2OCIgeDI9IjIyNC43NjIiIHkyPSI3NDEuOTkzIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTcwNCkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmYTk1OSIvPjxzdG9wIG9mZnNldD0iLjQzMSIgc3RvcC1jb2xvcj0iI2ZmYjA1ZSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmYzE2YiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNlKSIgZD0iTTIyOS43IDc1LjFsMTcuMS05LjktMTcuMS0zMC40LTE3LjEgMzAuNHoiLz48bGluZWFyR3JhZGllbnQgaWQ9ImYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iOTU1NS45MTgiIHkxPSI3NTguOTUiIHgyPSI5NTczLjAxOCIgeTI9Ijc1OC45NSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA5Nzg1LjY1IC03MDQpIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmE5NTkiLz48c3RvcCBvZmZzZXQ9Ii40MzEiIHN0b3AtY29sb3I9IiNmZmIwNWUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmMxNmIiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjZikiIGQ9Ik0yMTIuNiA2NS4ybDE3LjEtMzAuNHY0MC4zeiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iZyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNDYuOCIgeTE9Ijc2OSIgeDI9IjIxMi42IiB5Mj0iNzY5IiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTcwNCkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmYTk1OSIvPjxzdG9wIG9mZnNldD0iLjQzMSIgc3RvcC1jb2xvcj0iI2ZmYjA1ZSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmYzE2YiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggb3BhY2l0eT0iLjY3IiBmaWxsPSJ1cmwoI2cpIiBkPSJNMjI5LjcgNzUuMWwtMTcuMS05LjkgMTcuMS0xMC4zIDE3LjEgMTAuM3oiLz48L3N2Zz4="
              alt="banner"
            />
            <img
              className="floating"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTMuMSAzNzQiPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI5NTY3LjY3NyIgeTE9IjgzMS4wNSIgeDI9Ijk1OTAuMjA3IiB5Mj0iODMxLjA1IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDk3ODUuNjUgLTcwNCkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmYTk1OSIvPjxzdG9wIG9mZnNldD0iLjQzMSIgc3RvcC1jb2xvcj0iI2ZmYjA1ZSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmYzE2YiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNhKSIgZD0iTTIxOCAxMjcuMWwtMTEuMi02LjYtMTEuNCA2LjYgMTEuMyA2LjV6Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJiIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ijk1NjcuNjUiIHkxPSI4MzIuNyIgeDI9Ijk1OTAuMjIyIiB5Mj0iODMyLjciIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgOTc4NS42NSAtNzA0KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZhOTU5Ii8+PHN0b3Agb2Zmc2V0PSIuNDMxIiBzdG9wLWNvbG9yPSIjZmZiMDVlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZjMTZiIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBvcGFjaXR5PSIuMjUiIGZpbGw9InVybCgjYikiIGQ9Ik0yMTggMTI4LjdsLTExLjMtNi41LTExLjMgNi41IDExLjMgNi41eiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxOTYuMDM0IiB5MT0iODQzLjc0IiB4Mj0iMjE1Ljc5NyIgeTI9IjgzNS41MDUiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNzA0KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZhOTU5Ii8+PHN0b3Agb2Zmc2V0PSIuNDMxIiBzdG9wLWNvbG9yPSIjZmZiMDVlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZjMTZiIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBvcGFjaXR5PSIuNjUiIGZpbGw9InVybCgjYykiIGQ9Ik0yMTggMTI4LjdsLTExLjMgNi41LTExLjMtNi41IDExLjMgMTcuOXoiLz48bGluZWFyR3JhZGllbnQgaWQ9ImQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iOTU3OC45NSIgeTE9Ijg0MS42NSIgeDI9Ijk1OTAuMjM2IiB5Mj0iODQxLjY1IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDk3ODUuNjUgLTcwNCkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmYTk1OSIvPjxzdG9wIG9mZnNldD0iLjQzMSIgc3RvcC1jb2xvcj0iI2ZmYjA1ZSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmYzE2YiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggb3BhY2l0eT0iLjUiIGZpbGw9InVybCgjZCkiIGQ9Ik0xOTUuNCAxMjguN2wxMS4zIDYuNXYxMS40eiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iZSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMDguMDUxIiB5MT0iODM4LjU0MyIgeDI9IjIwMy41MjIiIHkyPSI4MTMuNTkyIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTcwNCkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmYTk1OSIvPjxzdG9wIG9mZnNldD0iLjQzMSIgc3RvcC1jb2xvcj0iI2ZmYjA1ZSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmYzE2YiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNlKSIgZD0iTTIwNi43IDEzMy42bDExLjMtNi41LTExLjMtMjAuMS0xMS4zIDIwLjF6Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJmIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ijk1NzguOTUiIHkxPSI4MjQuMyIgeDI9Ijk1OTAuMjE2IiB5Mj0iODI0LjMiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgOTc4NS42NSAtNzA0KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZhOTU5Ii8+PHN0b3Agb2Zmc2V0PSIuNDMxIiBzdG9wLWNvbG9yPSIjZmZiMDVlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZjMTZiIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI2YpIiBkPSJNMTk1LjQgMTI3LjFsMTEuMy0yMC4xdjI2LjZ6Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJnIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIxNy45NzQiIHkxPSI4MzAuOTUiIHgyPSIxOTUuNDQ0IiB5Mj0iODMwLjk1IiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTcwNCkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmYTk1OSIvPjxzdG9wIG9mZnNldD0iLjQzMSIgc3RvcC1jb2xvcj0iI2ZmYjA1ZSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmYzE2YiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggb3BhY2l0eT0iLjY3IiBmaWxsPSJ1cmwoI2cpIiBkPSJNMjA2LjcgMTMzLjZsLTExLjMtNi41IDExLjMtNi44IDExLjMgNi44eiIvPjwvc3ZnPg=="
              alt="banner"
            />
            <img
              className="floating"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTMuMSAzNzQiPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIzNDEuMyIgeTE9IjkzMy4yMjIiIHgyPSIzNDEuMyIgeTI9IjkyOS4zMSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgwIC03MDQpIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmE5NTkiLz48c3RvcCBvZmZzZXQ9Ii40MzEiIHN0b3AtY29sb3I9IiNmZmIwNWUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmMxNmIiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Ik0zNDIuOSAyMjYuN2MwIC45LS43IDEuNi0xLjYgMS42cy0xLjYtLjctMS42LTEuNi43LTEuNiAxLjYtMS42Yy45IDAgMS42LjcgMS42IDEuNnoiIGZpbGw9InVybCgjYSkiLz48bGluZWFyR3JhZGllbnQgaWQ9ImIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzg2LjIiIHkxPSI5MDIuMDM3IiB4Mj0iMzg2LjIiIHkyPSI4OTguMTI1IiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTcwNCkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmYTk1OSIvPjxzdG9wIG9mZnNldD0iLjQzMSIgc3RvcC1jb2xvcj0iI2ZmYjA1ZSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmYzE2YiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTM4Ny44IDE5NS41YzAgLjktLjcgMS42LTEuNiAxLjZzLTEuNi0uNy0xLjYtMS42YzAtLjkuNy0xLjYgMS42LTEuNnMxLjYuNyAxLjYgMS42eiIgZmlsbD0idXJsKCNiKSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxMjQuOCIgeTE9IjkyNC45MjkiIHgyPSIxMjQuOCIgeTI9IjkyMS4wMTciIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNzA0KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZhOTU5Ii8+PHN0b3Agb2Zmc2V0PSIuNDMxIiBzdG9wLWNvbG9yPSIjZmZiMDVlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZjMTZiIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJNMTI2LjQgMjE4LjRjMCAuOS0uNyAxLjYtMS42IDEuNnMtMS42LS43LTEuNi0xLjYuNy0xLjYgMS42LTEuNmMuOCAwIDEuNi43IDEuNiAxLjZ6IiBmaWxsPSJ1cmwoI2MpIi8+PGxpbmVhckdyYWRpZW50IGlkPSJkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjExNC43IiB5MT0iODQ4LjYyNCIgeDI9IjExNC43IiB5Mj0iODQ0LjcxMiIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgwIC03MDQpIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmE5NTkiLz48c3RvcCBvZmZzZXQ9Ii40MzEiIHN0b3AtY29sb3I9IiNmZmIwNWUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmMxNmIiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Ik0xMTYuMyAxNDIuMWMwIC45LS43IDEuNi0xLjYgMS42cy0xLjYtLjctMS42LTEuNi43LTEuNiAxLjYtMS42Yy45IDAgMS42LjcgMS42IDEuNnoiIGZpbGw9InVybCgjZCkiLz48bGluZWFyR3JhZGllbnQgaWQ9ImUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjA3LjIiIHkxPSI3ODguNDczIiB4Mj0iMjA3LjIiIHkyPSI3ODUuOTYxIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTcwNCkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmYTk1OSIvPjxzdG9wIG9mZnNldD0iLjQzMSIgc3RvcC1jb2xvcj0iI2ZmYjA1ZSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmYzE2YiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTIwOC4yIDgyLjhjMCAuNi0uNSAxLTEgMS0uNiAwLTEtLjUtMS0xIDAtLjYuNS0xIDEtMXMxIC41IDEgMXoiIGZpbGw9InVybCgjZSkiLz48bGluZWFyR3JhZGllbnQgaWQ9ImYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjY3LjkiIHkxPSI3NjQuNTE0IiB4Mj0iMjY3LjkiIHkyPSI3NjIuMDAyIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTcwNCkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmYTk1OSIvPjxzdG9wIG9mZnNldD0iLjQzMSIgc3RvcC1jb2xvcj0iI2ZmYjA1ZSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmYzE2YiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTI2OC45IDU4LjljMCAuNi0uNSAxLTEgMS0uNiAwLTEtLjUtMS0xcy41LTEgMS0xIDEgLjQgMSAxeiIgZmlsbD0idXJsKCNmKSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iZyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyODIuOCIgeTE9Ijc0MS4zODQiIHgyPSIyODIuOCIgeTI9IjczOC44NzEiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNzA0KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZhOTU5Ii8+PHN0b3Agb2Zmc2V0PSIuNDMxIiBzdG9wLWNvbG9yPSIjZmZiMDVlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZjMTZiIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJNMjgzLjggMzUuOGMwIC42LS41IDEtMSAxLS42IDAtMS0uNS0xLTEgMC0uNi41LTEgMS0xIC41LS4xIDEgLjQgMSAxeiIgZmlsbD0idXJsKCNnKSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iaCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxOTAuNSIgeTE9Ijc1MS44NTciIHgyPSIxOTAuNSIgeTI9Ijc0OS4zNDUiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNzA0KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZhOTU5Ii8+PHN0b3Agb2Zmc2V0PSIuNDMxIiBzdG9wLWNvbG9yPSIjZmZiMDVlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZjMTZiIi8+PC9saW5lYXJHcmFkaWVudD48Y2lyY2xlIGN4PSIxOTAuNSIgY3k9IjQ2LjIiIHI9IjEiIGZpbGw9InVybCgjaCkiLz48L3N2Zz4="
              alt="banner"
            />
            <img
              className="floating"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTMuMSAzNzQiPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIzNDguNiIgeTE9Ii00NzYuNjYyIiB4Mj0iMzQ4LjYiIHkyPSItNDcyLjc1IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgLTMyOCkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmYTk1OSIvPjxzdG9wIG9mZnNldD0iLjQzMSIgc3RvcC1jb2xvcj0iI2ZmYjA1ZSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmYzE2YiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTM1MC4yIDE0Ni4xYzAgLjktLjcgMS42LTEuNiAxLjZzLTEuNi0uNy0xLjYtMS42YzAtLjkuNy0xLjYgMS42LTEuNnMxLjYuOCAxLjYgMS42eiIgZmlsbD0idXJsKCNhKSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIzMzguMiIgeTE9Ii00MDMuODIiIHgyPSIzMzguMiIgeTI9Ii0zOTkuOTA3IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgLTMyOCkiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmYTk1OSIvPjxzdG9wIG9mZnNldD0iLjQzMSIgc3RvcC1jb2xvcj0iI2ZmYjA1ZSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmYzE2YiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTMzOS44IDczLjNjMCAuOS0uNyAxLjYtMS42IDEuNnMtMS42LS43LTEuNi0xLjYuNy0xLjYgMS42LTEuNiAxLjYuNyAxLjYgMS42eiIgZmlsbD0idXJsKCNiKSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxNjQuNiIgeTE9Ii00OTIuMDgxIiB4Mj0iMTY0LjYiIHkyPSItNDg4LjE2OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIC0zMjgpIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmE5NTkiLz48c3RvcCBvZmZzZXQ9Ii40MzEiIHN0b3AtY29sb3I9IiNmZmIwNWUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmMxNmIiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Ik0xNjYuMiAxNjEuNWMwIC45LS43IDEuNi0xLjYgMS42cy0xLjYtLjctMS42LTEuNmMwLS45LjctMS42IDEuNi0xLjZzMS42LjggMS42IDEuNnoiIGZpbGw9InVybCgjYykiLz48bGluZWFyR3JhZGllbnQgaWQ9ImQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTQ2LjIiIHkxPSItNDI1LjAxNCIgeDI9IjE0Ni4yIiB5Mj0iLTQyMS4xMDEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAtMzI4KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZhOTU5Ii8+PHN0b3Agb2Zmc2V0PSIuNDMxIiBzdG9wLWNvbG9yPSIjZmZiMDVlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZjMTZiIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJNMTQ3LjggOTQuNWMwIC45LS43IDEuNi0xLjYgMS42LS45IDAtMS42LS43LTEuNi0xLjZzLjctMS42IDEuNi0xLjYgMS42LjcgMS42IDEuNnoiIGZpbGw9InVybCgjZCkiLz48bGluZWFyR3JhZGllbnQgaWQ9ImUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzEyLjUiIHkxPSItNDMzLjI2MyIgeDI9IjMxMi41IiB5Mj0iLTQzMS42MzIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAtMzI4KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZhOTU5Ii8+PHN0b3Agb2Zmc2V0PSIuNDMxIiBzdG9wLWNvbG9yPSIjZmZiMDVlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZjMTZiIi8+PC9saW5lYXJHcmFkaWVudD48Y2lyY2xlIGN4PSIzMTIuNSIgY3k9IjEwNC4yIiByPSIuNyIgZmlsbD0idXJsKCNlKSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iZiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNDIuMiIgeTE9Ii0zNTQuNDIxIiB4Mj0iMjQyLjIiIHkyPSItMzUxLjkwOSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIC0zMjgpIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmE5NTkiLz48c3RvcCBvZmZzZXQ9Ii40MzEiIHN0b3AtY29sb3I9IiNmZmIwNWUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmMxNmIiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Ik0yNDMuMiAyNC44YzAgLjYtLjUgMS0xIDFzLTEtLjUtMS0xYzAtLjYuNS0xIDEtMXMxIC40IDEgMXoiIGZpbGw9InVybCgjZikiLz48bGluZWFyR3JhZGllbnQgaWQ9ImciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzAwLjYiIHkxPSItNDg4LjE5MyIgeDI9IjMwMC42IiB5Mj0iLTQ4NS42ODEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAtMzI4KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZhOTU5Ii8+PHN0b3Agb2Zmc2V0PSIuNDMxIiBzdG9wLWNvbG9yPSIjZmZiMDVlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZjMTZiIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJNMzAxLjYgMTU4LjZjMCAuNi0uNSAxLTEgMS0uNiAwLTEtLjUtMS0xIDAtLjYuNS0xIDEtMXMxIC40IDEgMXoiIGZpbGw9InVybCgjZykiLz48L3N2Zz4="
              alt="banner"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
      .started {
        font-size: 0.9rem;
        font-weight: 600;
        color: ${dark ? "#fff" : "#1C1B1B"};
        cursor: pointer;
        background-color: #fda859;
        padding: 16px 46px 16px 46px;
        border-radius: 30px;
        transition: all 1s;
      }

      .button-bottom-field {
        font-size: 0.3rem
        display: flex;
        justify-content: center;
        margin-top: 0.3rem;
        color: ${dark ? "#000" : "#fff"};
      }

      .started:hover {
        background-color: #febb7c;
      }
        button {
          border: none;
          background-color: transparent;
          cursor: pointer;
          padding-top: 6px;
          padding-bottom: 6px;
          transition: all 1s;s
        }
        button:focus {
          outline: none;
        }

        button:hover {
          background-color:  ${dark ? "#F7F7F7" : "#232222"} ;
        }
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
        .image img {
          display: block;
          width: 100%;
        }
        .image img~img {
          position: absolute;
          top: 0;
          left: 0;
        }
        .image img~img:nth-child(2) {
          -webkit-animation-delay: 500ms;
          animation-delay: 500ms;
        }
        .image img~img:nth-child(3) {
          animation-delay: 1s;
        }
        .image img~img:nth-child(4) {
          animation-delay: 1.5s;
        }
        .image img~img:nth-child(5) {
          animation-delay: 2s;
        }
        .image img~img:nth-child(6) {
          animation-delay: 2.5s;
        }
        .floating {   
          animation-name: floating; 
          animation-duration: 3s; 
          animation-iteration-count: infinite; 
          animation-timing-function: ease-in-out; 
          margin-left: 8px; 
          margin-top: 5px; 
        } 
        
        @keyframes floating { 
            0% { transform: translate(0,  0px); } 
            50%  { transform: translate(0, 15px); } 
            100%   { transform: translate(0, -0px); }     
        } 
      `}</style>
    </div>
  );
}

export default CoinState;
