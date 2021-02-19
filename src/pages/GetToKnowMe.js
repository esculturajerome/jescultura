import React, { Component } from "react";
import ProjectList from "../components/ProjectList";
import Sidebar from "../components/Sidebar";
import { Spring } from "react-spring/renderprops";

class GetToKnowMe extends Component {
  state = {
    projects: [
      {
        id: 1,
        name: "High School",
        coverImage: "/img/highschool/1.jpg",
        url:"",
      },
      {
        id: 2,
        name: "High School",
        coverImage: "/img/highschool/2.jpg",
        url:"",
      },
      {
        id: 3,
        name: "Youth Org",
        coverImage: "/img/youth/3.jpg",
        url:"",
      },
      {
        id: 4,
        name: "Youth Org",
        coverImage: "/img/youth/4.jpg",
        url:"",
      },
      {
        id: 5,
        name: "Youth Org",
        coverImage: "/img/youth/5.jpg",
        url:"",
      },
      {
        id: 6,
        name: "Youth Org",
        coverImage: "/img/youth/6.jpg",
        url:"",
      },
      {
        id: 7,
        name: "Youth Org",
        coverImage: "/img/youth/7.jpg",
        url:"",
      },
      {
        id: 8,
        name: "Youth Org",
        coverImage: "/img/youth/8.jpg",
        url:"",
      },
      {
        id: 9,
        name: "Youth Org",
        coverImage: "/img/youth/9.jpg",
        url:"",
      },
      {
        id: 10,
        name: "Youth Org",
        coverImage: "/img/youth/10.jpg",
        url:"",
      },
      {
        id: 11,
        name: "Youth Org",
        coverImage: "/img/youth/11.jpg",
        url:"",
      },
      {
        id: 12,
        name: "Youth Org",
        coverImage: "/img/youth/12.jpg",
        url:"",
      },
      {
        id: 13,
        name: "Youth Org",
        coverImage: "/img/youth/13.jpg",
        url:"",
      },
      {
        id: 14,
        name: "Youth Org",
        coverImage: "/img/youth/14.png",
        url:"",
      },
      {
        id: 15,
        name: "Youth Org",
        coverImage: "/img/youth/15.jpg",
        url:"",
      },
      {
        id: 16,
        name: "Youth Org",
        coverImage: "/img/youth/16.jpg",
        url:"",
      },
      {
        id: 17,
        name: "Youth Org",
        coverImage: "/img/pets/17.jpg",
        url:"",
      },{
        id: 18,
        name: "Youth Org",
        coverImage: "/img/pets/18.jpg",
        url:"",
      },{
        id: 19,
        name: "Youth Org",
        coverImage: "/img/pets/19.jpg",
        url:"",
      },{
        id: 20,
        name: "Youth Org",
        coverImage: "/img/pets/20.jpg",
        url:"",
      },{
        id: 21,
        name: "Youth Org",
        coverImage: "/img/pets/21.jpg",
        url:"",
      },{
        id: 22,
        name: "Youth Org",
        coverImage: "/img/pets/22.jpg",
        url:"",
      },{
        id: 23,
        name: "Youth Org",
        coverImage: "/img/pets/23.jpg",
        url:"",
      },{
        id: 24,
        name: "Hobbies",
        coverImage: "/img/hobbies/24.jpg",
        url:"",
      },{
        id: 25,
        name: "Hobbies",
        coverImage: "/img/hobbies/25.jpg",
        url:"",
      },{
        id: 26,
        name: "Hobbies",
        coverImage: "/img/hobbies/26.jpg",
        url:"",
      },
      {
        id: 27,
        name: "Hobbies",
        coverImage: "/img/hobbies/27.jpg",
        url:"",
      },
      {
        id: 28,
        name: "Hobbies",
        coverImage: "/img/hobbies/28.jpg",
        url:"",
      },
      {
        id: 29,
        name: "Hobbies",
        coverImage: "/img/hobbies/29.jpg",
        url:"",
      },
      {
        id: 30,
        name: "Previous Work",
        coverImage: "/img/prevwork/30.jpg",
        url:"",
      },
      {
        id: 31,
        name: "Previous Work",
        coverImage: "/img/prevwork/31.jpg",
        url:"",
      },
      {
        id: 32,
        name: "Previous Work",
        coverImage: "/img/prevwork/32.jpg",
        url:"",
      },
      {
        id: 33,
        name: "Previous Work",
        coverImage: "/img/prevwork/33.jpg",
        url:"",
      },
      {
        id: 34,
        name: "Previous Work",
        coverImage: "/img/prevwork/34.jpg",
        url:"",
      },
      {
        id: 35,
        name: "Wife",
        coverImage: "/img/wife/35.jpg",
        url:"",
      },
      {
        id: 36,
        name: "Wife",
        coverImage: "/img/wife/36.jpg",
        url:"",
      },
      {
        id: 37,
        name: "Wife",
        coverImage: "/img/wife/37.jpg",
        url:"",
      },
      {
        id: 38,
        name: "Wife",
        coverImage: "/img/wife/38.jpg",
        url:"",
      },
      {
        id: 39,
        name: "Other",
        coverImage: "/img/minimalist/39.jpg",
        url:"",
      },
      {
        id: 40,
        name: "Other",
        coverImage: "/img/minimalist/40.jpg",
        url:"",
      },
    ],
  };
  render() {
    return (
      <div>
        <main id="main">
          <div className="main-outer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div id="works-grid">
                    <Spring from={{ marginRight: -70 }} to={{ marginRight: 0 }}>
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

export default GetToKnowMe;
