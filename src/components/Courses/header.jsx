import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export default function Header() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Button>
              <img alt="True Lessons" className={classes.logo} />
            </Button>
            <div className={classes.title}>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/"
                color="inherit"
              >
                <Button color="inherit">Home</Button>
              </Link>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/courses"
                color="inherit"
              >
                <Button color="inherit">Courses</Button>
              </Link>
              <Button color="inherit">About Us</Button>
              <Button color="inherit">Contact Us</Button>
            </div>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    </Router>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "'Exo 2'",
  },
  header: {
    padding: 0,
  },
  headerImage: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    width: "100px",
  },
  title: {
    flexGrow: 1,
  },
}));
