import React, { useContext } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import classes from "./landing.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Layout from "../../components/Layout/";
import ChannelSeasonSec from "../../components/channelSeasonSec";
import { VerseContext } from "../../context/Verse";
import Playlist from "../../components/Playlist/";

const index = () => {
  const matches = useMediaQuery("(min-width:400px)");
  const { showCard } = React.useContext(VerseContext);
  return (
    <Layout>
      <div style={{ background: "#e5e5e5", padding: "3rem" }}>
        {showCard ? <Playlist /> : <ChannelSeasonSec />}
      </div>
      <br />
      <Container>
        <Grid
          container
          className={matches ? classes.containerDiv : classes.removeMargin}
        >
          <Grid
            item
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ maxHeight: "370px" }}
          >
            <div className={classes.leftDiv}>
              <p className={classes.help}>How we can help?</p>
              <p className={classes.helpDescription}>
                Would love to let you know how we can help to take your video
                content to the next level
              </p>
              <Button variant="contained" className={classes.helpButton}>
                Request consultation
              </Button>
            </div>
          </Grid>
          <Grid
            item
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ maxHeight: "370px" }}
          >
            <div className={classes.rightDiv}>
              <p className={classes.work}>Work with us</p>
              <p className={classes.workDescription}>
                Want to help us build products reaching millions of music lovers
                worldwide?
              </p>
              <Button variant="contained" className={classes.workButton}>
                Collaborate
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default index;
