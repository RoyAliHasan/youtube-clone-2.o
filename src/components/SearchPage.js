import React from "react";
import "../styles/SearchPage.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from "../components/ChannelRow";
import VideoRow from "../components/VideoRow";

function SearchPage() {
  return (
    <div className="SearchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        channelName="Roy Ali Hasan"
        image="https://scontent.flhe24-1.fna.fbcdn.net/v/t39.30808-6/299918859_108846528609442_9055812762408296362_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE1EQ2z-5vHPwkAInvXIp05awKmdhpimkxrAqZ2GmKaTPabdcpDCyAtsTo_OUsQHj2bdlbxYgOlcwBTJBZRYVYM&_nc_ohc=GLs0k4tWaO0AX--VJUK&_nc_oc=AQnQpi5SRYZdG5wdMHFhEkoJdulTB0pujIpwvroZayV4dYqoSiSkPP458Kstfndvzug&_nc_ht=scontent.flhe24-1.fna&oh=00_AfDXeNsgODPuz1bOGQ6yU3B6hC624_g6oqCkcGlNd2oRMA&oe=64006D4C"
        verified={true}
        subs={1000}
        noOfVideos={100}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
      />
      <hr />
      <VideoRow
        views={400}
        subs={1000}
        description="Do you want a FREE one hour training ..."
        timestamp="59 seconds ago"
        channel="Roy Ali Hasan"
        title="🔴Let's Build a YouTube Clone with REACT JS for Beginners"
        image="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/118596058/original/241cc44f7ea8e1b043df8e735c8fdea0975bcb1d/design-catchy-youtube-thumbnail.jpg"
      />
      <VideoRow
        views={400}
        subs={1000}
        description="Do you want a FREE one hour training ..."
        timestamp="59 seconds ago"
        channel="Roy Ali Hasan"
        title="🔴Let's Build a YouTube Clone with REACT JS for Beginners"
        image="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/118596058/original/241cc44f7ea8e1b043df8e735c8fdea0975bcb1d/design-catchy-youtube-thumbnail.jpg"
      />{" "}
      <VideoRow
        views={400}
        subs={1000}
        description="Do you want a FREE one hour training ..."
        timestamp="59 seconds ago"
        channel="Roy Ali Hasan"
        title="🔴Let's Build a YouTube Clone with REACT JS for Beginners"
        image="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/118596058/original/241cc44f7ea8e1b043df8e735c8fdea0975bcb1d/design-catchy-youtube-thumbnail.jpg"
      />{" "}
      <VideoRow
        views={400}
        subs={1000}
        description="Do you want a FREE one hour training ..."
        timestamp="59 seconds ago"
        channel="Roy Ali Hasan"
        title="🔴Let's Build a YouTube Clone with REACT JS for Beginners"
        image="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/118596058/original/241cc44f7ea8e1b043df8e735c8fdea0975bcb1d/design-catchy-youtube-thumbnail.jpg"
      />{" "}
      <VideoRow
        views={400}
        subs={1000}
        description="Do you want a FREE one hour training ..."
        timestamp="59 seconds ago"
        channel="Roy Ali Hasan"
        title="🔴Let's Build a YouTube Clone with REACT JS for Beginners"
        image="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/118596058/original/241cc44f7ea8e1b043df8e735c8fdea0975bcb1d/design-catchy-youtube-thumbnail.jpg"
      />{" "}
      <VideoRow
        views={400}
        subs={1000}
        description="Do you want a FREE one hour training ..."
        timestamp="59 seconds ago"
        channel="Roy Ali Hasan"
        title="🔴Let's Build a YouTube Clone with REACT JS for Beginners"
        image="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/118596058/original/241cc44f7ea8e1b043df8e735c8fdea0975bcb1d/design-catchy-youtube-thumbnail.jpg"
      />
    </div>
  );
}

export default SearchPage;
