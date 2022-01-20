import React, { createContext, useState } from "react";
export const VerseContext = createContext();
import dummyData from "../components/JSON/list";
import dummyChannelList from "../components/JSON/channels-list";

const initialState = {
  verse: "",
  playList: [],
  channel: "",
  channelName: "",
  search: false,
};
const VerseContextData = ({ children }) => {
  const [storeData, setStore] = useState(initialState);
  const [channel, setChannel] = useState("");
  const [found, setFound] = useState(false);
  const [input, setInput] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const setInputVerse = (value) => {
    setInput(value);
  };

  const setSearchDetail = (channel, verse) => {
    let channelData;
    let listItem = [];
    setInput(verse);
    setStore({ ...storeData, search: true });
    if (!input && channel) {
      let filterList = dummyData.responseItems.filter((item) => {
        return item.data.channel_id === channel;
      });
      if (filterList.length) {
        let verseArray = filterList.map((item) => {
          let date = new Date(item.timestamp).toDateString();
          let time = new Date(item.timestamp)
            .toLocaleTimeString()
            .split(" ")[0];
          return {
            title: item.data.title,
            date_published: item.data.date_published,
            timestamp: item.timestamp,
            date,
            time,
          };
        });
        // setChannel(channelData.name);
        listItem = verseArray.map((item, index) => {
          let date = new Date(item.timestamp).toDateString();
          let time = new Date(item.timestamp)
            .toLocaleTimeString()
            .split(" ")[0];

          return {
            title: item.title,
            date_published: item.date_published,
            date,
            time,
          };
        });
        setShowCard(true);
        setFound(true);
        setStore({
          ...storeData,
          playList: [...listItem],
          verse,
          channel,
          search: true,
        });
      } else {
        setStore({ ...storeData, search: true });
        setShowCard(true);
        setFound(false);
      }
    } else if (channel && verse) {
      setShowCard(false);
      let filterList = dummyData.responseItems.filter((item) => {
        return item.data.verse === verse && item.data.channel_id === channel;
      });
      if (filterList.length) {
        channelData = dummyChannelList.channels.find((item) => {
          return item.id === channel;
        });
        setChannel(channelData.name);
        listItem = filterList.map((item, index) => {
          let date = new Date(item.timestamp).toDateString();
          let time = new Date(item.timestamp)
            .toLocaleTimeString()
            .split(" ")[0];

          return {
            title: item.data.title,
            date_published: item.data.date_published,
            channel: channelData?.name,
            date,
            time,
          };
        });
        setFound(true);
        setStore({
          ...storeData,
          playList: [...listItem],
          verse,
          channel,
          search: true,
        });
      } else {
        setStore({ ...storeData, search: true });
        setFound(false);
      }
    } else if (verse) {
      let filterList = dummyData.responseItems.filter((item) => {
        return item.data.verse === verse;
      });
      if (filterList.length) {
        // channelData = dummyChannelList.channels.find((item) => {
        //   return item.id === channel;
        // });
        let verseArray = filterList.map((item) => {
          let date = new Date(item.timestamp).toDateString();
          let time = new Date(item.timestamp)
            .toLocaleTimeString()
            .split(" ")[0];
          return {
            title: item.data.title,
            date_published: item.data.date_published,
            channel: dummyChannelList.channels.find((data) => {
              return data.id === item.data.channel_id;
            }),
            timestamp: item.timestamp,
            date,
            time,
          };
        });
        // setChannel(channelData.name);
        listItem = verseArray.map((item, index) => {
          let date = new Date(item.timestamp).toDateString();
          let time = new Date(item.timestamp)
            .toLocaleTimeString()
            .split(" ")[0];

          return {
            title: item.title,
            date_published: item.date_published,
            channel: item.channel.name,
            date,
            time,
          };
        });
        setFound(true);
        setStore({
          ...storeData,
          playList: [...listItem],
          verse,
          channel,
          search: true,
        });
      } else {
        setStore({ ...storeData, search: true });
        setFound(false);
      }
    }
  };

  return (
    <VerseContext.Provider
      value={{
        storeData,
        setSearchDetail,
        setStore,
        setInputVerse,
        channel,
        found,
        input,
        showCard,
      }}
    >
      {children}
    </VerseContext.Provider>
  );
};

export default VerseContextData;
