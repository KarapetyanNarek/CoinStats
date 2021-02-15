import React, { useContext, useRef } from "react";
import HeaderContext from "context/headerContext";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import useOutsideClickEvent from "utils/hooks";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function PositionedPopper({
  addFavorietsHandler,
  favorites,
  id,
}) {
  const ref = useRef(null);
  const contentRef = useRef(null);
  const { dark } = useContext(HeaderContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();

  const handleClick = (newPlacement) => (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const closePopper = () => {
    if (open) {
      setOpen(false);
      setAnchorEl(null);
    }
  };

  useOutsideClickEvent(ref, closePopper, contentRef);

  return (
    <div className={classes.root} ref={ref}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper
              style={{
                backgroundColor: dark ? "#fff" : "#1C1B1B",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "15px",
              }}
            >
              <div className="flex flex-col items-start" ref={contentRef}>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    addFavorietsHandler();
                  }}
                >
                  <span className="popper-fields">
                    {favorites.some((f) => f === id)
                      ? "Remove to Favorites"
                      : "Add to Favorites"}
                  </span>
                </Button>
                <Button>
                  <sapn className="popper-fields">Track in Portfolio</sapn>
                </Button>
                <Button>
                  <span className="popper-fields">Watch in News</span>
                </Button>
                <Button>
                  <span className="popper-fields">Markets</span>
                </Button>
                <Button>
                  <span className="popper-fields">Holdings</span>
                </Button>
              </div>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Button onClick={handleClick("bottom-end")}>
        <span className="popper-button">{`\u2022 \u2022 \u2022`}</span>
      </Button>
      <style jsx>{`
        .popper-button {
          color: ${open
            ? "#f6b578"
            : dark
            ? "rgba(0, 0, 0, 0.5)"
            : "rgba(255, 255, 255, 0.5)"};
        }
        .popper-button:hover {
          color: #f6b578;
        }
        .popper-fields {
          color: ${dark ? "rgba(0, 0, 0, 0.5)" : "#fff"};
          transition: all 0.3s;
        }

        .popper-fields:hover {
          color: #f6b578;
        }
      `}</style>
    </div>
  );
}
