import React from "react";
import "./Studentlife.css";
import club_icon_1 from "../assets/images/Icon Container-1.png";
import club_icon_2 from "../assets/images/Icon Container-2.png";
import club_icon_3 from "../assets/images/Icon Container-3.png";
import club_icon_4 from "../assets/images/Icon Container-4.png";
import club_icon_5 from "../assets/images/Icon Container-5.png";
import club_icon_6 from "../assets/images/Icon Container-6.png";
import club_icon_7 from "../assets/images/Icon Container-7.png";
import club_icon_8 from "../assets/images/Icon Container-8.png";
import club_icon_9 from "../assets/images/Icon Container-9.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sps2 from "../assets/images/DSC_3528.jpeg";
import ImageWithPlaceholder from "../components/ImageWithPlaceholder";

import img_1 from "../assets/images/DSC_5195.jpeg";
import img_2 from "../assets/images/DSC_5621.jpeg";
import img_3 from "../assets/images/DSC_5591.jpeg";
import img_4 from "../assets/images/DSC_3380.jpeg";
import img_5 from "../assets/images/182A0720.jpeg";
import img_6 from "../assets/images/GC.jpeg";
import photo1 from "../assets/images/photo1.jpeg";
import photo7 from "../assets/images/DSC_5613.jpeg";
import celebration from "../assets/images/DSC_5504.jpeg";
import sps from "../assets/images/SpS.jpeg";

import placeholder from "../assets/images/placeholder-image.png";

const responsive2 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 710 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 710, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Studentlife = () => {
  return (
    <div className="student-life">
      <div className="text-1">
        <h2>Our Features</h2>
        <h3>Extracurricular Activities</h3>

        <p>
          At Little Learners Academy, we believe in nurturing well-rounded
          individuals. Our extracurricular activities offer a diverse range of
          experiences that complement our academic curriculum and encourage
          students to explore their interests and passions. We offer a wide
          array of extracurricular activities, including
        </p>
        <div className="about-image-div">
          <ImageWithPlaceholder
            src={photo1}
            placeholder={placeholder}
            alt="students-image"
            className="about-image"
          />
        </div>
      </div>
      <div className="clubs">
        <Carousel showDots={true} responsive={responsive2}>
          <div className="club-card">
            <img src={club_icon_1} alt="" className="club-icon" />

            <h4>Sports and Athletics</h4>
            <p>
              Students can participate in various sports, from soccer and
              basketball to gymnastics and yoga. Sports help promote teamwork,
              physical fitness, and a sense of discipline.
            </p>
          </div>
          <div className="club-card">
            <img src={club_icon_2} alt="" className="club-icon" />
            <h4>Art and Creativity</h4>
            <p>
              Our art classes and creative workshops provide a platform for
              students to express their creativity through painting, drawing,
              and other artistic forms.
            </p>
          </div>
          <div className="club-card">
            <img src={club_icon_3} alt="" className="club-icon" />
            <h4>Music and Performing Arts</h4>
            <p>
              Students can discover their musical talents through singing,
              playing musical instruments, and participating in drama and
              theater performances.
            </p>
          </div>
          <div className="club-card">
            <img src={club_icon_4} alt="" className="club-icon" />
            <h4>Language Clubs</h4>
            <p>
              Language clubs offer an opportunity for students to immerse
              themselves in different languages and cultures, fostering global
              awareness.
            </p>
          </div>
          <div className="club-card">
            <img src={club_icon_5} alt="" className="club-icon" />
            <h4>Science Club</h4>
            <p>
              The science club allows young scientists to explore the wonders of
              science through fun experiments and hands-on learning.
            </p>
          </div>
          <div className="club-card">
            <img src={club_icon_6} alt="" className="club-icon" />
            <h4>Cooking and Culinary Arts</h4>
            <p>
              Cooking classes introduce students to the joys of preparing and
              tasting delicious and healthy meals.
            </p>
          </div>
        </Carousel>
      </div>
      <div className="text-1">
        <h2>Our Features</h2>
        <h3>Events & Celebrations</h3>
        <p>
          At Little Learners Academy, we celebrate every milestone and create
          cherished memories for our students. Throughout the year, we host a
          variety of events and celebrations that bring the entire school
          community together. Some of our memorable events include
        </p>
        <div className="about-image-div">
          <ImageWithPlaceholder
            src={photo7}
            placeholder={placeholder}
            alt="students-image"
            className="about-image"
          />
        </div>
        <div className="about-image-div">
          <ImageWithPlaceholder
            src={celebration}
            placeholder={placeholder}
            alt="students-image"
            className="about-image"
          />
        </div>
      </div>
      <div className="celebration">
        <div className="celebration-card celebration-bg-1">
          <ImageWithPlaceholder
            src={img_1}
            placeholder={placeholder}
            alt="sports-day"
            className=""
          />
          <h4>Annual Sports Day</h4>
          <p>
            A day filled with friendly competition, team spirit, and
            sportsmanship
          </p>
        </div>
        <div className="celebration-card celebrati1on-bg-2">
          <ImageWithPlaceholder
            src={img_2}
            placeholder={placeholder}
            alt="sports-day"
            className=""
          />
          <h4>Cultural Festivals</h4>
          <p>
            Celebrations of diverse cultural festivals, promoting cultural
            exchange and appreciation.
          </p>
        </div>
        <div className="celebration-card celebration-bg-1">
          <ImageWithPlaceholder
            src={img_3}
            placeholder={placeholder}
            alt="sports-day"
            className=""
          />
          <h4>Art Exhibitions</h4>
          <p>
            Showcasing our students' artistic talents through exhibitions and
            displays.
          </p>
        </div>
        <div className="celebration-card celebration-bg-1">
          <ImageWithPlaceholder
            src={img_4}
            placeholder={placeholder}
            alt="sports-day"
            className=""
          />
          <h4>Science Fair</h4>
          <p>
            A platform for budding scientists to present their innovative
            projects and experiments.
          </p>
        </div>
        <div className="celebration-card celebrati1on-bg-2 ">
          <ImageWithPlaceholder
            src={img_5}
            placeholder={placeholder}
            alt="sports-day"
            className=""
          />
          <h4>International Day</h4>
          <p>
            A vibrant celebration of our diverse community, embracing cultures
            from around the world.
          </p>
        </div>
        <div className="celebration-card celebrati1on-bg-1">
          <ImageWithPlaceholder
            src={img_6}
            placeholder={placeholder}
            alt="sports-day"
            className=""
          />
          <h4>Graduation Ceremony</h4>
          <p>
            A significant milestone as our Kindergarten students prepare to
            embark on their academic journey.
          </p>
        </div>
      </div>
      <div className="text-1 text-2">
        <h2>Our Achievements</h2>
        <h3>Student Support</h3>
        <p>
          At Little Learners Academy, we are committed to providing a supportive
          and nurturing environment that meets the unique needs of each student.
          Our student support services include
        </p>
      </div>
      <div className="about-image-div">
        
        <ImageWithPlaceholder
          src={sps}
          placeholder={placeholder}
          alt="teacher"
          className="about-image"
        />
      </div>
      <div className="clubs">
        <Carousel showDots={true} responsive={responsive2}>
          <div className="club-card">
            <img src={club_icon_7} alt="" className="club-icon" />
            <h4>Counseling</h4>
            <p>
              Professional counselors offer guidance and support to students,
              addressing their emotional and social well-being.
            </p>
          </div>
          <div className="club-card">
            <img src={club_icon_8} alt="" className="club-icon" />
            <h4>Learning Support</h4>
            <p>
              Our educators provide additional assistance to students who may
              require extra support in their academic journey.
            </p>
          </div>
          <div className="club-card">
            <img src={club_icon_9} alt="" className="club-icon" />
            <h4>Parent-Teacher Collaboration</h4>
            <p>
              We foster a strong partnership with parents to ensure seamless
              communication and mutual support in a child's development.
            </p>
          </div>
        </Carousel>
      </div>
      <div className="about-image-div">
        <ImageWithPlaceholder
          src={sps2}
          placeholder={placeholder}
          alt="students-image"
          className="about-image"
        />
      </div>
    </div>
  );
};

export default Studentlife;
