import React from "react";
import "../../../Style/ArtArtistProf.css";
const ArtistsProfile = () => {
  return (
    <div className="artprofContainer">
      <h1>Your profile matters.</h1>

      <div className="section1">
        <div className="section1Cont">
          <div>
            {/* <h2>Focus on what you love.</h2> */}
            <h1>Update your profile to inhance visibility to your audience.</h1>
          </div>
          <div className="secondImg">
            <img
              src="https://i.postimg.cc/NF1PL2KT/Hindi-Art-for-Busniness-Leaders.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="section1">
        <div className="section1Cont" id="learn">
          <div>
            {/* <h2>Room to learn</h2> */}
            {/* <h1>A platform tailored to your need.</h1> */}
            <h1>
              Your profile is your identity, insure you have high quality
              artworks for your audience.{" "}
            </h1>
            <h3>Bellow are tips on how to Improve your profile.</h3>
          </div>
          {/* <div className='secondImg'>
<img src='https://wow.fluxrotherham.org.uk/wp-content/uploads/2023/05/Life-Drawing-1024x684.jpg'  alt=''/>
</div> */}
        </div>
      </div>

      <h1>Tips</h1>

      <div className="section1">
        <div className="section1Cont">
          <div>
            {/* <h2>Focus on what you love.</h2> */}
            <h2>- Update profile</h2>
            <h2>- High quality artworks</h2>
            <h2>- Up to date with trends</h2>
            <h2>- Share profie</h2>
          </div>
          {/* <div className="secondImg">
            <img
              src="https://images.unsplash.com/photo-1501366062246-723b4d3e4eb6?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ArtistsProfile;
