import React, { useState, useContex } from "react";
import classes from "./style.module.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import list from "../JSON/list.js";
import channelsList from "../JSON/channels-list";
import check from "../../Assets/check.png";
import imges from "../../Assets/profile.jpeg";
import { VerseContext } from "../../context/Verse";

const ChannelSeasonSec = () => {
  const matches = useMediaQuery("(max-width:470px)");
  const [verses, setVerses] = useState([]);
  const [load, setLoad] = useState(4);
  const loadMoreFunc = () => {
    let loadMore = load + 4;
    setLoad(loadMore);
  };

  const {
    storeData,
    channel: CHANNEL,
    found,
    input: inputVerse,
  } = React.useContext(VerseContext);

  React.useEffect(() => {
    let listItem = list.responseItems.map((item, index) => {
      // let date = new Date(item.timestamp).toDateString();
      let time = new Date(item.timestamp).toLocaleTimeString().split(" ")[0];
      return {
        channel: channelsList.channels.find((data) => {
          return data.id === item.data.channel_id;
        }),
        title: item.data.title,
        createdDate: item.data.date_published,
        verse: item.data?.verse,
        time,
      };
    });
    setVerses([...listItem]);
  }, []);

  return (
    <div className={classes.TopNode}>
      {storeData.search ? (
        found && storeData.playList.length ? (
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
                  <h1 className={classes.headingTop}>
                    {storeData.playList.length} Result for{" "}
                    <span className={classes.greenText}>{storeData.verse}</span>
                  </h1>
                </div>
              </Grid>
            </Grid>
            {/* <div className={classes.boxChannel}>
              <Grid container>
                <Grid
                  item
                  md={9}
                  sm={8}
                  lg={9}
                  xm={12}
                  display={"flex"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  // className={matches ? classes.mobileParent : classes.parent}
                >
                  <div className={classes.sideDiv}>
                    <h2 className={classes.headingTopBox}>
                      Men's Advance 2021 Day 2, Session 2{" "}
                      <span
                        className={`${classes.greenText} ${classes.smallText}`}
                      >
                        by&nbsp;
                      </span>
                      <span className={classes.smallText}>
                        {CHANNEL && CHANNEL} <img src={check} />
                      </span>
                    </h2>
                    <p className={classes.textBox}>
                      ..mich gefragt Du hast mich{" "}
                      <span className={classes.greenText}>Jeremy</span> und ich
                      hab' nichts gesagt [Chorus] Will you until...
                    </p>
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
                  // className={matches ? classes.mobileParent : classes.parent}
                >
                  <div className={classes.sideDivButton}>
                    <Button variant="outlined">View</Button>
                  </div>
                </Grid>
              </Grid>
            </div> */}

            {/* <Grid container spacing={2}>
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
                  <p className={classes.channelText}>
                    From Channel &nbsp;
                    <span
                      className={classes.smallText}
                      style={{
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "14px",
                        marginBottom: "8px",
                      }}
                    >
                      {CHANNEL}
                      <img
                        src={check}
                        style={{
                          verticalAlign: "middle",
                          paddingLeft: "4px",
                        }}
                      />
                    </span>
                  </p>
                </div>
              </Grid>
            </Grid> */}

            {/* below area */}

            {storeData.playList.length &&
              storeData.playList.map((item) => {
                return (
                  <div className={classes.boxChannelTwo}>
                    <Grid container>
                      <Grid
                        item
                        md={9}
                        sm={8}
                        lg={9}
                        xm={12}
                        display={"flex"}o0
                        justifyContent={"center"}
                        flexDirection={"column"}
                        // className={matches ? classes.mobileParent : classes.parent}
                      >
                        <div className={classes.sideDiv}>
                          <List
                            sx={{
                              width: "100%",
                              maxWidth: 560,
                              bgcolor: "background.paper",
                            }}
                          >
                            <ListItem
                              alignItems="flex-start"
                              style={{ padding: "0px" }}
                            >
                              <ListItemAvatar style={{ width: 105 }}>
                                <Avatar
                                  style={{ width: 90, height: 90 }}
                                  alt="Remy Sharp"
                                  src={imges}
                                />
                              </ListItemAvatar>
                              <ListItemText
                                primary={
                                  <span
                                    style={{
                                      fontFamily: "Inter",
                                      fontSize: "20px",
                                      fontStyle: "normal",
                                      fontWeight: "700",
                                      lineHeight: "24px",
                                      letterSpacing: "0em",
                                      textSlign: "left",
                                    }}
                                  >
                                    {item.title}
                                  </span>
                                }
                                secondary={
                                  <React.Fragment>
                                    <Typography
                                      variant="body2"
                                      style={{
                                        fontFamily: "Inter",
                                        fontStyle: "normal",
                                        fontWeight: "600",
                                        fontSize: "14px",
                                        marginBottom: "8px",
                                      }}
                                    >
                                      {item.channel}
                                      <img
                                        src={check}
                                        style={{
                                          verticalAlign: "middle",
                                          paddingLeft: "4px",
                                        }}
                                      />
                                    </Typography>
                                    <Typography
                                      component="span"
                                      variant="body2"
                                      color="text.primary"
                                      style={{ lineHeight: "2" }}
                                    >
                                      <span
                                        style={{
                                          background: "rgba(0, 128, 128, 0.08)",
                                          padding: "5px 8px",
                                          borderRadius: 5,
                                        }}
                                      >
                                        {item.date_published}
                                      </span>
                                      &nbsp;
                                      <span
                                        style={{
                                          background: "#00808014",
                                          padding: "5px 8px",
                                          borderRadius: 5,
                                        }}
                                      >
                                        {" "}
                                        {item.time}
                                      </span>
                                      <span
                                        style={{
                                          background: "#00808014",
                                          padding: "5px 8px",
                                          borderRadius: 5,
                                          marginLeft: "5px",
                                        }}
                                      >
                                        {" "}
                                        {inputVerse}
                                      </span>
                                    </Typography>
                                  </React.Fragment>
                                }
                              />
                            </ListItem>
                          </List>
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
                        // className={matches ? classes.mobileParent : classes.parent}
                      >
                        <div className={classes.sideDivButton}>
                          <button>View</button>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                );
              })}
            <div className={classes.loadMoreButton}>
              {/* <button>
              <i className="fa fa-spin"></i> Load More
            </button> */}
            </div>
          </Container>
        ) : (
          <h4 style={{ marginTop: "3rem", textAlignLast: "center" }}>
            Result not found
          </h4>
        )
      ) : (
        <div>
          {verses.length &&
            verses.map((item, index) => {
              return (
                index < load && (
                  <Container>
                    <div className={classes.boxChannelTwo}>
                      <Grid container>
                        <Grid
                          item
                          md={9}
                          sm={8}
                          lg={9}
                          xm={12}
                          display={"flex"}
                          justifyContent={"center"}
                          flexDirection={"column"}
                          // className={matches ? classes.mobileParent : classes.parent}
                        >
                          <div className={classes.sideDiv}>
                            <List
                              sx={{
                                width: "100%",
                                maxWidth: 560,
                                bgcolor: "background.paper",
                              }}
                            >
                              <ListItem
                                alignItems="flex-start"
                                style={{ padding: "0px" }}
                              >
                                <ListItemAvatar style={{ width: 105 }}>
                                  <Avatar
                                    style={{ width: 90, height: 90 }}
                                    alt="Remy Sharp"
                                    src={imges}
                                  />
                                </ListItemAvatar>
                                <ListItemText
                                  primary={
                                    <span
                                      style={{
                                        fontFamily: "Inter",
                                        fontSize: "20px",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        lineHeight: "24px",
                                        letterSpacing: "0em",
                                        textSlign: "left",
                                      }}
                                    >
                                      {item.title}
                                    </span>
                                  }
                                  secondary={
                                    <React.Fragment>
                                      <Typography
                                        variant="body2"
                                        style={{
                                          fontFamily: "Inter",
                                          fontStyle: "normal",
                                          fontWeight: "600",
                                          fontSize: "14px",
                                          marginBottom: "8px",
                                        }}
                                      >
                                        {item?.channel?.name}
                                        <img
                                          src={check}
                                          style={{
                                            verticalAlign: "middle",
                                            paddingLeft: "4px",
                                          }}
                                        />
                                      </Typography>
                                      <Typography
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                        style={{ lineHeight: "2" }}
                                      >
                                        <span
                                          style={{
                                            background:
                                              "rgba(0, 128, 128, 0.08)",
                                            padding: "5px 8px",
                                            borderRadius: 5,
                                          }}
                                        >
                                          {item.createdDate}
                                        </span>
                                        &nbsp;
                                        <span
                                          style={{
                                            background: "#00808014",
                                            padding: "5px 8px",
                                            borderRadius: 5,
                                          }}
                                        >
                                          {" "}
                                          {item.time}
                                        </span>
                                        <span
                                          style={{
                                            background: "#00808014",
                                            padding: "5px 8px",
                                            borderRadius: 5,
                                            marginLeft: "5px",
                                          }}
                                        >
                                          {" "}
                                          {item?.verse}
                                        </span>
                                      </Typography>
                                    </React.Fragment>
                                  }
                                />
                              </ListItem>
                            </List>
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
                          // className={matches ? classes.mobileParent : classes.parent}
                        >
                          <div className={classes.sideDivButton}>
                            <button>View</button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </Container>
                )
              );
            })}
          <div className={classes.loadMoreButton}>
            <button
              onClick={() => {
                loadMoreFunc();
              }}
            >
              <i className="fa fa-spin"></i> Load More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default ChannelSeasonSec;
