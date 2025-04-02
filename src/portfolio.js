/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hyunsoo Chang",
  usernameKorean: "장현수  🚀",
  title: "혹시 저를 만나보셨나요? ",
  subTitle: [
    emoji(
      "새로운 기술을 탐구하고, 문제를 주도적으로 해결하며, \n 프로젝트의 본질적인 가치를 고민하는  프론트엔드 개발자."
    )
  ],
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/HeathChang",
  gmail: "jannhyunsoo@gmail.com",
  stackoverflow: "https://heathworld.tistory.com/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "기술 스택",
  subTitle: "새로운 프론트엔드 기술을 끊임없이 탐구하는 개발자",
  skills: [
    {key: emoji("⚡ CI/CD, 배포 및 서버 관리"), value: "효율적인 CI/CD 파이프라인과 서버 환경를 구축하는"},
    {key: emoji("⚡ 프론트엔드 컴포넌트화"), value: "컴포넌트화에 열정적인 프론트엔드"},
    {key: emoji("⚡ AtoZ 참여하는 개발자"), value: "기획부터 QA까지 모든 개발 과정에 적극 참여하는"},
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JS/TS",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "VueJS",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Spring",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "상명대학교",
      subHeader: "경제금융학과(전공), 빅데이터과학(연계전공)",
      duration: "2013.03 ~ 2020.02",
    },
    {
      schoolName: "Auckland International College",
      subHeader: "뉴질랜드 (오클랜드) 소재 고등학교",
      duration: "2009.08 ~ 2012.05",
    },
    {
      schoolName: "자바(JAVA) 기반 백엔드 개발자 양성과정 [NCS] 수료",
      subHeader: "@에이콘아카데미",
      duration: "2021.03",
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "대리",
      company: "공업사 스토어",
      companylogo: require("./assets/images/gongupsaLogo.png"),
      color: [3, 30, 113],
      date: "24.05 ~ 현재",
      desc: "자사 관리프로그램 개발,\n  CI/CD 구축, AWS 배포/서버 관리.\n",
      descBullets: [
        "Cafe24 기반 & Ecount 을  통합 사용가능한 자사 관리 프로그램 개발",
        "IndexedDB와 React Query 를 통한 데이터 처리 속도 개선",
        "CI/CD 파이프라인 구축을 통해 배포 자동화 및 AWS 배포 및 서버 환경 관리",
        "기획 & UIUX 설계 & ERD 설계",
      ]
    },
    {
      role: "SW 엔지니어",
      company: "스페클립스",
      companylogo: require("./assets/images/speclipseLogo.png"),
      color: [245, 151, 42],
      date: "2023.02 ~ 2024.05",
      desc: "어드민 페이지 개발,\n 테스트 서버 구축 및 \n Three.JS 신체 부위 판별 개발.",
      descBullets: [
        "디자인 프레임워크를 활용한 어드민 페이지 개발",
        "Nginx 및 Docker를 활용한 Test Server 환경 구축",
        "마우스 인터랙션을 통해 신체 부위를 판별하는 기능 개발"
      ]
    },
    {
      role: "연구원",
      company: "앱지",
      companylogo: require("./assets/images/appgLogo.png"),
      color: [232, 24, 25],
      date: "2022.07 ~ 2022.11",
      desc: "하이브리드 웹/앱 개발\n\n",
      descBullets: [
        "LVMC 하이브리드앱 개발",
        "코리아컨벤션 이벤트관리 및 좌석예약 개발",
      ]
    }
  ]

};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "경험",
  subtitle: "배움과 도전을 거듭하며, 더 나은 개발과 협업을 위한 경험을 쌓아왔습니다.",
  projects: [
    {
      projectName: "공업사 스토어 관리 페이지",
      projectDesc: "Cafe24 기반 & Ecount 등을\n 통합 사용가능한 자사 관리 프로그램 개발",
      image: require("./assets/images/gongupsaLogo.png"),
      disabled: true,
      footerLink: [
        {
          name: "상세 보기",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "스페클립스 어드민 페이지",
      projectDesc: "데이터 CRUD 와 정산, 통계 등\n 다양한 기능을 내포한 관리 페이지",
      image: require("./assets/images/speclipseLogo.png"),
      disabled: true,
      footerLink: [
        {
          name: "상세 보기",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      projectName: "버디버디",
      projectDesc: "3D 캐릭터와  상호작용하며\n 키우는 다마고치 스타일의 웹 앱",
      image: require("./assets/images/projects/buddyLogo.png"),
      disabled: false,
      footerLink: [
        {
          name: "상세 보기",
          url: "https://github.com/Janku-Projects/buddybuddy-fe"
        }
      ]
    },
    {
      projectName: "그 외,",
      projectDesc: "CICD, AWS 부터 기획,\n UIUX 레이아웃 구성 및 ERD 등 다양한 경험",
      image: require("./assets/images/projects/logos.png"),
      disabled: false,
      footerLink: [
        {
          name: "상세 보기",
          url: "https://www.notion.so/1c9cbd8e9cb1800595a0f425929a1442"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("달성 🏆 "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "커피챗은 언제든 환영합니다!",
  number: "010-2488-9287",
  email_address: "jannhyunsoo@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
