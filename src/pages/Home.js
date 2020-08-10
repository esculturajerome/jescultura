import React, { Component } from "react";
import ProjectList from "./../components/ProjectList";
import Sidebar from "./../components/Sidebar";
import { Spring } from "react-spring/renderprops";

class Home extends Component {
  state = {
    projects: [
      {
        id: 12,
        dateCreated: "August 2020",
        name: "Netflix Clone",
        category: "Website",
        url: "https://netflix-mockup.web.app/",
        desc1: "Netflix website clone with trailer",
        desc2: "-Reactjs and Firebase",
        desc3: "",
        coverImage: "/img/works/netflix.png",
        projectImg1: "/img/project/netflix.png",
        projectImg2: "/img/project/netflix2.png",
        projectImg3: "",
      },
      {
        id: 11,
        dateCreated: "Under Development",
        name: "Youth Power Club",
        category: "Website",
        url: "https://youthpower.netlify.app/",
        desc1: "Where every book lover is enjoined in the circle.",
        desc2: "-Reactjs and Expressjs",
        desc3: "",
        coverImage: "/img/works/yp.jpg",
        projectImg1: "/img/project/yp1.png",
        projectImg2: "/img/project/yp2.png",
        projectImg3: "/img/project/yp3.jpg",
      },
      {
        id: 10,
        dateCreated: "July 2020",
        name: "Romblon National Institute of Technology",
        category: "Website",
        url: "https://rnit-tesda.tech/",
        desc1:
          "Designed, developed and host a website using Wordpress and Godaddy to help their students inquire and enroll online.",
        desc2: "",
        desc3: "",
        coverImage: "/img/works/rnit.png",
        projectImg1: "/img/project/rnit1.png",
        projectImg2: "/img/project/rnit2.png",
        projectImg3: "/img/project/rnit3.png",
      },
      {
        id: 9,
        dateCreated: "June 2020",
        name: "Panahon PWA",
        category: "Website",
        url: "https://panahonph.netlify.app/",
        desc1:
          "A Progressive Web Application for getting information about the weather.",
        desc2:
          "Libraries and Framework used are ReactJS, Axios and React-places-autocomplete",
        desc3:
          "API used for this project are Google Maps API and OpenWeather API.",
        coverImage: "/img/works/panahon.png",
        projectImg1: "/img/project/panahon1.png",
        projectImg2: "/img/project/panahon2.png",
        projectImg3: "/img/project/panahon3.png",
        projectImg4: "/img/project/panahon4.png",
        projectImg5: "/img/project/panahon5.png",
        projectImg6: "/img/project/panahon6.png",
      },
      {
        id: 8,
        dateCreated: "January 2020",
        name: "Finest Aluminum Brochure",
        category: "Design",
        url: "",
        desc1: "",
        desc2: "",
        desc3: "",
        coverImage: "/img/works/finest-brochure.png",
        projectImg1: "/img/works/finest-brochure.png",
        projectImg2: "/img/project/finestbrochure1.png",
      },
      {
        id: 7,
        dateCreated: "January 2020",
        name: "Finest Aluminum Catalogue",
        category: "Design",
        url: "",
        desc1: "",
        desc2: "",
        desc3: "",
        coverImage: "/img/works/finest-catalogue.png",
        projectImg1: "/img/project/finest-cat1.png",
        projectImg2: "/img/project/finest-cat2.png",
        projectImg3: "/img/project/finest-cat3.png",
        projectImg4: "/img/project/finest-cat4.png",
        projectImg5: "",
        projectImg6: "",
      },

      {
        id: 6,
        dateCreated: "April 2019",
        name: "P&G Event",
        category: "Design",
        url: "",
        desc1:
          "Aloha design is used during the Procter & Gamble company event in the Philippines.",
        desc2: "",
        desc3: "",
        coverImage: "/img/works/pandg.png",
        projectImg1: "/img/project/pandg1.png",
        projectImg2: "/img/project/pandg2.png",
        projectImg3: "",
        projectImg4: "",
        projectImg5: "",
        projectImg6: "",
      },
      {
        id: 5,
        dateCreated: "February 2018",
        name: "DEPED K12 Infographics",
        category: "Design",
        url: "",
        desc1:
          "The K to 12 Program covers Kindergarten and 12 years of basic education (six years of primary education, four years of Junior High School, and two years of Senior High School [SHS]) to provide sufficient time for mastery of concepts and skills, develop lifelong learners, and prepare graduates for tertiary education, middle-level skills development, employment, and entrepreneurship.",
        desc2:
          "Its a new curriculum in the Philippines, together with Children International Inc, We created Infographics that helps the community to be familiar with K12 Program.",
        desc3: "",
        coverImage: "/img/works/deped.png",
        projectImg1: "/img/project/deped1.png",
        projectImg2: "/img/project/deped2.png",
        projectImg3: "/img/project/deped3.png",
        projectImg4: "",
        projectImg5: "",
        projectImg6: "",
      },
      {
        id: 4,
        dateCreated: "August 2018",
        name: "Family Run",
        category: "Design",
        url: "",
        desc1:
          "The FAMRUN project purpose of this project is to strengthen the relationship of the families in the community and encourage them to start the prevention and education about the detrimental effect of abusing drugs. FAMRUN project will help the community of Bagong Silang to strive in eradicating drug addiction through strengthening family relationships. Also, it will make our community advocates of the illegal drug free community.",
        desc2:
          "The event will not only bring more effective partnership within the community of Bagong Silang but also ignite the cooperation of community people to solve more pressing issues aside from drugs. Fam Run project is a second version of the 2017 SCP FunRun project which aimed to increase awareness in illegal drugs. This year, incorporating the essence of family, the FamRun will focus on family empowerment through a run and interactive activities as a start in building good family relations.",
        desc3: "",
        coverImage: "/img/works/funrun.png",
        projectImg1: "/img/project/famrun1.png",
        projectImg2: "/img/project/famrun2.png",
        projectImg3: "/img/project/famrun3.png",
        projectImg4: "",
        projectImg5: "",
        projectImg6: "",
      },

      {
        id: 3,
        dateCreated: "July 2018",
        name: "Tesda Womens Center",
        category: "Website",
        url: "http://twc.tesda.gov.ph/",
        desc1:
          "As the lead TVET Institution of excellence in women empowerment, TESDA Women’s Center advocates and provides programs and services geared towards quality-assured, inclusive and gender-fair TVET.",
        desc2:
          "I provided technical expertise in the development of TWC website and made it more user-friendly, simple but attractive corporate design and more responsive to visitors of their website. I also improved its usability to have a good presentation of information and choices in a clear and concise way and proper placement of important items in appropriate areas. Part of the development requirements is also its functionality to make it more interactive which allows the visitor to respond in some way turning the visitor into a customer. ",
        desc3: "",
        coverImage: "/img/works/twc.png",
        projectImg1: "/img/project/twc1.png",
        projectImg2: "/img/project/twc2.png",
        projectImg3: "/img/project/twc3.png",
        projectImg4: "/img/project/twc4.png",
        projectImg5: "",
        projectImg6: "",
      },
      {
        id: 2,
        dateCreated: "March 2018",
        name: "Booklandia",
        category: "Website",
        url: "https://booklandia.netlify.app/",
        desc1: "Is an educational app empowering children through reading.",
        desc2:
          "It enhance the way kids read books, using the latest technology of AR and 3D models, Story books can transform into interactive materials and help the kids to deeply understand the story.",
        desc3:
          "Booklandia aim to enhance the kids reads books and encourage them to read more, by developing an application that can run both android and IOS platform, Booklandia will educate and entertain kids by importing virtual world into real world.",
        coverImage: "/img/works/booklandia-site.png",
        projectImg1: "/img/project/booklandia-site1.png",
        projectImg2: "/img/project/booklandia-site2.png",
        projectImg3: "/img/project/booklandia-site3.png",
        projectImg4: "/img/project/booklandia-site4.png",
        projectImg5: "/img/project/booklandia-site5.png",
        projectImg6: "",
      },

      {
        id: 1,
        dateCreated: "March 2018",
        name: "Booklandia",
        category: "Application",
        url: "https://www.youtube.com/watch?v=EPmKaRmBiyI&feature=youtu.be",
        desc1: "Is an educational app empowering children through reading.",
        desc2:
          "It enhance the way kids read books, using the latest technology of AR and 3D models, Story books can transform into interactive materials and help the kids to deeply understand the story.",
        desc3:
          "Booklandia aim to enhance the kids reads books and encourage them to read more, by developing an application that can run both android and IOS platform, Booklandia will educate and entertain kids by importing virtual world into real world.",
        coverImage: "/img/works/booklandia.png",
        projectImg1: "/img/project/booklandia1.png",
        projectImg2: "/img/project/booklandia2.png",
        projectImg3: "/img/project/booklandia3.png",
        projectImg4: "/img/project/booklandia4.png",
        projectImg5: "",
        projectImg6: "",
      },
    ],
  };
  render() {
    return (
      <div>
        <Sidebar />
        <main id="main">
          <div className="main-outer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div id="works-grid">
                    <Spring
                      from={{ opacity: 0, marginRight: -70 }}
                      to={{ opacity: 1, marginRight: 0 }}
                    >
                      {(props) => (
                        <div style={props}>
                          <ProjectList projects={this.state.projects} />
                        </div>
                      )}
                    </Spring>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
