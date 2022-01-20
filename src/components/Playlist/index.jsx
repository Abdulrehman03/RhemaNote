import React from "react";
import classes from "./stylePlaylist.module.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import useMediaQuery from "@mui/material/useMediaQuery";
import AudioIcon from "../../Assets/AudioVector.png";
import { VerseContext } from "../../context/Verse";

const Playlist = () => {
  const matches = useMediaQuery("(max-width:470px)");
  const {
    storeData,
    channel: CHANNEL,
    found,
    input: inputVerse,
  } = React.useContext(VerseContext);

  return (
    <>
      <Container>
        {/* <br/> */}
        <h1 className={classes.headingTop}>
          {storeData.playList.length && (
            <span className={classes.greenText}>
              {storeData.playList.length} &nbsp;Result {storeData.inputVerse}
            </span>
          )}
        </h1>
        {/* <p className={classes.result}>
          {storeData.playList.length}{" "}
          <span className={classes.greenText}>Jeremy</span>
        </p> */}

        {/* <Grid container>
          <Grid item md={6} sm={12}>
            <Grid container className={classes.topButton}>
              <Grid item sm={3}>
                <Button variant="outlined" className={classes.selected}>
                  Verse (12)
                </Button>
              </Grid>
              <Grid item sm={3} style={{ marginLeft: matches && "1rem" }}>
                <Button variant="outlined" className={classes.btn}>
                  Channel (7)
                </Button>
              </Grid>
              <Grid item sm={5} style={{ marginTop: matches && "1rem" }}>
                <Button variant="outlined" className={classes.btn}>
                  Verse on Channel (2)
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid> */}
      </Container>
      <div className={classes.listData}>
        <Container>
          <br />

          <Grid container spacing={2} justifyContent="center">
            {storeData.playList.length ? (
              storeData.playList.map((item, index) => {
                return (
                  <Grid item md={4} ey={index}>
                    <div className={classes.cardDiv}>
                      <div className={classes.cardImage}>
                        <p className={classes.title}>Genesis 1:1</p>
                      </div>
                      <div className={classes.description}>
                        <div>
                          <p className={classes.detail}>{item.title}</p>
                          <p className={classes.time}>
                            {item.date_published} &nbsp; {item.time}
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div className={matches && classes.audioIcon}>
                            <img src={AudioIcon} alt="icon is not found" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                );
              })
            ) : (
              <h4 style={{ marginTop: "3rem", textAlignLast: "center" }}>
                Result not found
              </h4>
            )}
          </Grid>
          <br />
        </Container>
      </div>

      <br />
    </>
  );
};
export default Playlist;
