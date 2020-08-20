import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  title: emoji("I'm Mohammad Fayaz"),

  subTitle: emoji(
    "I Figure out things, learn new tech and I can read errors correctly. I enjoy getting wired in! 💸"
  ),
  experience: emoji(
    "A Software Developer 🚀 having an experience of building Mobile 📱 applications and Backend api's."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1mNZ4w8k71aIYNnozgyT5yl74aBqGqWhZ/view?usp=sharing",
};

// Your Social Media Link
const socialMediaLinks = {
  github: "https://github.com/fayaz07",
  linkedin: "https://www.linkedin.com/in/fayaz07/",
  gmail: "fayazfz07@gmail.com",
  instagram: "https://www.instagram.com/fayaz_7_",
  twitter: "https://twitter.com/fayaz7_",
};

const dart = { name: "Dart", color: "#00B4AB" };
const java = { name: "Java", color: "#b07219" };
const javaScript = { name: "JavaScript", color: "#f1e05a" };

const projects = [
  {
    id: 1,
    name: "Brillwork",
    description:
      " Brillwork app is an information platform that supports with situational needs of the employees and the employers. It helps with the workplace conflicts and learn- ability issues and boosts motivation and productivity. We empower employees and employers by offering them the solutions they need, at their fingertips.",
    stargazers: 0,
    forkCount: 0,
    primaryLanguage: dart,
    repo_url:
      "https://play.google.com/store/apps/details?id=com.brillwork.brill_work",
    diskUsage: "11864",
    playstore_url:
      "https://play.google.com/store/apps/details?id=com.brillwork.brill_work",
    mobile_app: true,
  },
  {
    id: 2,
    name: "Benefacto",
    description:
      "Benefacto is an app creating an environment of giving and sharing with sustainable impact on the society.",
    stargazers: 0,
    forkCount: 0,
    primaryLanguage: dart,
    repo_url:
      "https://play.google.com/store/apps/details?id=com.bizmarvel.benefacto",
    diskUsage: "13044",
    playstore_url:
      "https://play.google.com/store/apps/details?id=com.bizmarvel.benefacto",
    mobile_app: true,
  },
  {
    id: 3,
    name: "progress_dialog",
    description:
      " A light weight library to easily manage a progress dialog with simple steps whenever you need to do it. You can easily show and hide it.",
    stargazers: 185,
    forkCount: 73,
    primaryLanguage: dart,
    repo_url: "https://github.com/fayaz07/progress_dialog",
    diskUsage: "1024",
  },
  {
    id: 4,
    name: "flutter_firebase",
    description: "Implementing features of firebase with flutter ",
    stargazers: 49,
    forkCount: 57,
    primaryLanguage: dart,
    repo_url: "https://github.com/fayaz07/flutter_firebase",
    diskUsage: "80000",
  },
  {
    id: 4,
    name: "node-rest-api-starter",
    description:
      "This repository is a template to avoid rewriting all the basic authentication code for REST API's built with Express.js, MongoDB. ",
    stargazers: 15,
    forkCount: 2,
    primaryLanguage: javaScript,
    repo_url: "https://github.com/stackinflow/node-rest-api-starter",
    diskUsage: "35545",
    rest_api: true,
  },
  {
    id: 5,
    name: "animated_splash",
    description:
      "A light weight package for flutter apps, that easily shows a splash screen with a nice fade animation. ",
    stargazers: 45,
    forkCount: 14,
    primaryLanguage: dart,
    repo_url: "https://github.com/fayaz07/animated_splash",
    diskUsage: "685",
  },
  {
    id: 6,
    name: "ots(Over the screen)",
    description:
      "An widget that can show loaders, notifications, internet connectivity changes as Overlay. ",
    stargazers: 6,
    forkCount: 1,
    primaryLanguage: dart,
    repo_url: "https://github.com/fayaz07/ots",
    diskUsage: "786",
  },
  {
    id: 7,
    name: "Promethean 2k18",
    description:
      "Official app for National Level Technical Symposium by BV Raju Institute of Technology, Narsapur, Telangana ",
    stargazers: 2,
    forkCount: 3,
    primaryLanguage: java,
    repo_url: "https://github.com/fayaz07/Promethean2k18",
    diskUsage: "3426",
    mobile_app: true,
  },
  {
    id: 8,
    name: "vHelp",
    description: "College details exposure mobile app",
    stargazers: 2,
    forkCount: 1,
    primaryLanguage: dart,
    repo_url: "https://github.com/fayaz07/vhelp",
    diskUsage: "21245",
    mobile_app: true,
  },
  {
    id: 9,
    name: "Bus tracker",
    description: "GPS based realtime bus tracking app",
    stargazers: 0,
    forkCount: 0,
    primaryLanguage: java,
    repo_url: "https://github.com/fayaz07/BusTracker",
    diskUsage: "4215",
    mobile_app: true,
  },
];

export { greeting, socialMediaLinks, projects };
