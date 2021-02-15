import React, { useEffect, useContext } from "react";
import HeaderContext from "context/headerContext";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Router from "next/router";

const AntTabs = withStyles({
  indicator: {
    backgroundColor: "#f6b578",
  },
})(Tabs);

export default function TabsPage({ tabs }) {
  const { dark } = useContext(HeaderContext);
  const [value, setValue] = React.useState(0);

  // useEffect(() => {
  //   switch (value) {
  //     case 0:
  //       Router.push("/");
  //       break;
  //     case 1:
  //       Router.push("/exchanges");
  //       break;
  //     case 2:
  //       Router.push("/favorites");
  //       break;
  //     case 3:
  //       Router.push("/defi");
  //       break;
  //     case 4:
  //       Router.push("/heatmap");
  //       break;
  //     default:
  //       null;
  //   }
  // }, [value]);

  const AntTab = withStyles((theme) => ({
    root: {
      textTransform: "none",
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(4),
      color: dark ? "#000" : "#fff",
      letterSpacing: "2px",
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    selected: {},
  }))((props) => <Tab disableRipple {...props} />);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AntTabs value={value} onChange={handleChange}>
      {tabs.map((tab, index) => {
        return <AntTab key={index.toString()} label={tab} />;
      })}
    </AntTabs>
  );
}
