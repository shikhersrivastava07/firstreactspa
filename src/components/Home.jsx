import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        Home
        <main>
          <h1>React JS</h1>
          <p>Single Page Application</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            This website was created using HTML, CSS, Javascript and ReactJs.
            Libraries like React Router was used to make it a single page application. The website is dynamic in nature and therefore it can be used in several devices with UI anomalies. This SPA was only created to demonstrate the implementation of various React modules.
            
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad
            eos commodi veritatis, nobis sed! Deserunt at molestias illum
            commodi harum quisquam consequuntur magnam vitae et quae. Sint,
            corrupti odio!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Icons</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;




