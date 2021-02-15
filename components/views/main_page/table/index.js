import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import { makeStyles } from "@material-ui/core/styles";
import HeaderContext from "context/headerContext";
import numeral from "numeral";
import { BottomScrollListener } from "react-bottom-scroll-listener";
import { useContext } from "react";
import PageContext, { fetcher } from "src/pagecontext";
import { IconButton } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import { columns } from "./table-columns";
import PositionedPopper from "components/elements/popper";
import useSWR from "swr";
import Router from "next/router";

function TableCoins() {
  const { dark } = useContext(HeaderContext);
  const { coins, size, setSize } = useContext(PageContext);
  const { data = { rows: [] }, mutate, error } = useSWR(
    "/api/favorites",
    fetcher
  );
  const favorites = data.rows.flatMap((r) => r.id);

  const useStyles = makeStyles({
    container: {
      height: "100vh",
      backgroundColor: "transparent",
    },
    headerCell: {
      backgroundColor: dark ? "#fff" : "#1C1B1B",
      padding: "15px 12px 15px 20px",
      color: dark ? "#000" : "#fff",
      zIndex: "1000",
      borderBottom: dark
        ? "1px solid rgba(0, 0, 0, 0.25)"
        : "1px solid rgba(255,255,255,0.15)",
      fontSize: "0.7rem",
      fontWeight: "600",
    },
    cell: {
      padding: "9px 12px 9px 20px",
      border: "none",
      borderBottom: dark
        ? "1px solid rgba(0, 0, 0, 0.25)"
        : "1px solid rgba(255,255,255,0.15)",
    },
  });

  const classes = useStyles();

  function addFavorietsHandler(id) {
    fetch(`/api/favorite/${id}`, {
      method: favorites.some((f) => f === id) ? "DELETE" : "PUT",
      body: JSON.stringify(data.rows.find((i) => i.id === id)),
    });
    mutate();
  }

  return (
    <>
      <BottomScrollListener debounce="200" onBottom={() => setSize(size + 1)}>
        {(scrollRef) => (
          <TableContainer
            ref={scrollRef}
            className={`${classes.container} scroll`}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => {
                    return (
                      <TableCell
                        key={column.id}
                        style={{ width: column.minWidth }}
                        className={classes.headerCell}
                      >
                        <span className="text-base text-grey-dim opacity-5">
                          {column.label}
                        </span>
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {coins.map((coin, index) => {
                  return (
                    <TableRow
                      key={coin.id}
                      hover
                      onClick={() => {
                        Router.push(`/coins/${coin.id}`);
                      }}
                      className="pointer"
                    >
                      <TableCell className={classes.cell} align="left">
                        <div className="flex items-center">
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

                          <div
                            className={`${dark ? "dark" : "snow"}`}
                            style={{
                              fontSize: "0.85rem",
                              fontWeight: "300",
                            }}
                          >
                            {coin.rank}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className={classes.cell}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              height: "23px",
                              width: "23px",
                              marginRight: "10px",
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
                          <div>
                            <span
                              className={`${dark ? "dark" : "snow"}`}
                              style={{
                                fontSize: "0.85rem",
                              }}
                            >
                              {coin.name}
                            </span>
                            <span
                              style={{
                                color: dark
                                  ? "rgba(0, 0, 0, 0.5)"
                                  : "rgba(255,255,255,0.5)",
                              }}
                            >
                              {` \u2022 ${coin.symbol}`}
                            </span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className={classes.cell}>
                        <div className="display-flex">
                          <div
                            className={`${
                              Math.sign(+coin.priceChange1h) === 1
                                ? "arrow-up"
                                : "arrow-down"
                            }`}
                          ></div>
                          <div
                            className="display-flex"
                            style={{
                              color:
                                Math.sign(+coin.priceChange1h) === 1
                                  ? "#34c759"
                                  : "#ff3a30",
                            }}
                          >
                            {`${coin.priceChange1h}%`}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className={classes.cell}>
                        <div className="display-flex">
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
                      </TableCell>
                      <TableCell className={classes.cell}>
                        <div>
                          <div className="display-flex">
                            <div
                              className={`${
                                Math.sign(+coin.priceChange1w) === 1
                                  ? "arrow-up"
                                  : "arrow-down"
                              }`}
                            ></div>
                            <div
                              className="display-flex"
                              style={{
                                color:
                                  Math.sign(+coin.priceChange1w) === 1
                                    ? "#34c759"
                                    : "#ff3a30",
                              }}
                            >
                              {`${coin.priceChange1w}%`}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className={classes.cell}>
                        <div className={`${dark ? "dark" : "snow"}`}>
                          {numeral(coin.price).format(
                            String(coin.price)[0] === "0"
                              ? "$0.[000000]"
                              : "$0,0.[00]"
                          )}
                        </div>
                      </TableCell>
                      <TableCell className={`${classes.cell}`}>
                        <div className={`${dark ? "dark" : "snow"}`}>
                          {numeral(coin.priceBtc).format("0.00000000")}
                        </div>
                      </TableCell>
                      <TableCell className={classes.cell}>
                        <div className={`${dark ? "dark" : "snow"}`}>
                          {`${numeral(coin.marketCap)
                            .format("$0.0a")
                            .slice(0, -1)}B`}
                        </div>
                      </TableCell>
                      <TableCell className={classes.cell}>
                        <div className={`${dark ? "dark" : "snow"}`}>
                          {`${numeral(coin.volume)
                            .format("$0.0a")
                            .slice(0, -1)}B`}
                        </div>
                      </TableCell>
                      <TableCell className={classes.cell}>
                        <div
                          className={`flex items-center justify-center ${
                            dark ? "dark" : "snow"
                          }`}
                        >
                          {" "}
                          -{" "}
                        </div>
                      </TableCell>
                      <TableCell className={classes.cell}>
                        <PositionedPopper
                          key={coin.id}
                          favorites={favorites}
                          id={coin.id}
                          addFavorietsHandler={() => {
                            addFavorietsHandler(coin.id);
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </BottomScrollListener>
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
        .color-wite {
          color: #fff;
        }
        .font-weight-300 {
          font-weight: 300;
        }
      `}</style>
    </>
  );
}

export default TableCoins;
