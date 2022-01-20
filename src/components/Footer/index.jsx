import React from "react";
import classes from "./style.module.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import logo from "../../Assets/logo.png";
import tiktok from "../../Assets/tiktok.png";
import insta from "../../Assets/insta.png";
import linkin from "../../Assets/linkin.png";
import twiter from "../../Assets/twiter.png";

const Footer = () => {
  const matches = useMediaQuery("(max-width:470px)");
  console.log(matches, "true");
  return (
    <div className={classes.TopNode}>
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            md={9}
            sm={6}
            xm={12}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            className={matches ? classes.mobileParent : classes.parent}
          >
            <div className={classes.sideDiv}>
              <div className={classes.logoImage}>
                <img src={logo} width="200px" />
              </div>
              <p className={classes.solo}>Solo, Indonesia</p>
              <p className={classes.contact}>Call us : 123-456-7890</p>
              <br />
              <div className={classes.icons}>
                <div>
                  <img src={insta} />
                </div>
                <div>
                  <img src={linkin} />
                </div>
                <div>
                  <img src={tiktok} />
                </div>
                <div>
                  <img src={twiter} />
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            item
            md={3}
            sm={6}
            xm={12}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            className={matches ? classes.mobileParent : classes.parent}
          >
            <div className={classes.sideDiv}>
              <p className={classes.heading}>Subscribe</p>
              <p className={classes.subscribe}>
                Subscribe to get the latest news from us
              </p>
              <div className={classes.inutField}>
                <TextField
                  id="input-with-icon-textfield"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <ArrowCircleRightOutlinedIcon
                          style={{ color: "#008080" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Email Address"
                  variant="outlined"
                />
              </div>
            </div>
          </Grid>
        </Grid>
        <p
          style={{
            textAlign: "center",
            color: "#647D94",
          }}
        >
          Copyright © 2022. Crafted with love
        </p>
        <br />
      </Container>
    </div>
  );
};
export default Footer;
