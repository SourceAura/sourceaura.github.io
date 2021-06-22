// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: "@SourceAura",
  domain: "sourceaura.netlify.app", // add without https:// , used in meta tags and share urls
  image: "/images/peach-avi.png",
  email: "mail@sourceaura.com",
  googleAnalyticsV4: {
    enabled: false,
    id: ""
  },
  plausibleAnalytics: {
    enabled: false,
    domain: "sourceaura.netlify.app", // add without https:// , used in meta tags and share urls
    trackLocalhost: false,
    // leave it empty if plausible is not self hosted
    apiHost: "https://analytics.lookatx.dev" // default: https://plausible.io
  },
  // enable if you want comments and likes on posts
  // see how it looks on karngyan.com
  firebase: {
    enabled: true,
  },
  social: {
    github: "sourceaura",
    linkedin: "sourceaura",
    facebook: "sourceaura",
    twitter: "sourceaura",
    instagram: "sourceaura",
    codestats: "sourceaura" // https://codestats.net make a profile if you dont already have one.
  },
  buyMeACoffee: {
    enabled: true,
    url: "https://www.buymeacoffee.com/sourcaura.dev"
  },
  projects: {
    enabled: true
  },
  log: {
    enabled: true
  },
  // blog: {
  //   enabled: true
  // },
  resume: {
    enabled: true,
    pdfUrl: "/RESUME_GYAN_KARN_DARK.pdf" // add files in static folder
  },
  uses: {
    enabled: true,
    meta: [
      { title: "OS", value: "macOS Big Sur - Version 11.1" },
      { title: "Memory", value: "8 GB 2133 MHz LPDDR3" },
      { title: "Mouse", value: "Logitech M570 x MX Ergo" },
      { title: "Monitor", value: "Retina Display 13.3-inch (2560 × 1600)" },
      {
        title: "Laptop",
        value: "MacBook Pro (13.3-inch, 2019) • 1.4 GHz Quad-Core Intel Core i5"
      }
    ]
  },
  pulses: {
    enabled: true,
    meta: [
      { title: "OS", value: "macOS Big Sur - Version 11.1" },
      { title: "Memory", value: "8 GB 2133 MHz LPDDR3" },
      { title: "Mouse", value: "Logitech M570 x MX Ergo" },
      { title: "Monitor", value: "Retina Display 13.3-inch (2560 × 1600)" },
      {
        title: "Laptop",
        value: "MacBook Pro (13.3-inch, 2019) • 1.4 GHz Quad-Core Intel Core i5"
      }
    ]
  },
  theStack: {
    // add logos in static and at max add 3/4
    enabled: true,
    meta: [
      {
        name: "JavaScript",
        src: "/images/sendpost.png",
        url: "https://sendpost.io"
      },
      {
        name: "Nuxt/VueJs",
        src: "/images/amazon.png",
        url: "https://amazon.in"
      },
      {
        name: "Laravel",
        src: "/images/interviewready-io.png",
        url: "https://get.interviewready.io"
      },
      { name: "Firebase", src: "/images/crio.png", url: "https://crio.do" }
    ]
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: false,
    meta: [
      {
        name: "SendPost",
        src: "/images/sendpost.png",
        url: "https://sendpost.io"
      },
      { name: "Amazon", src: "/images/amazon.png", url: "https://amazon.in" },
      {
        name: "InterviewReady",
        src: "/images/interviewready-io.png",
        url: "https://get.interviewready.io"
      },
      { name: "CrioDo", src: "/images/crio.png", url: "https://crio.do" }
    ]
  },
  loadingIndicator: {
    name: "pulse"
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  strings: {
    en_US: {
      download: "download",
      nav: {
        home: "home",
        log: "log",
        // blog: "blog",
        projects: "projects",
        pulses: "pulses",
        // uses: "uses",
        // resume: "résumé",
        buyMeACoffee: "buy me a beer",
        signIn: "sign in",
        signOut: "sign out"
      },
      // Author Info
      hero: {
        namaste: "namasté...",
        explore: "explore a bit",
        iAm: "an 'eclectic'",
        terms: [
          "poet",
          "programmer",
          "developer",
          "designer",
          "caligraphist",
          "coder",
          "eclectic. "
        ],
        aboutMe: "weird wiz 🧙🏾 || UI/UX Designer"
      },
      // GitHub Data
      gitData: {
        header: "contributions",
        subtext: "github heatmap"
      },
      githubCalendar: {
        header: "contributions",
        subtext: "github calendar heatmap"
      },
      // Journal - Log
      log: {
        header: "log",
        subtext:
          "always been a poet at my purest. figured i'd share here sometimes. feel free to join in.."
      },
      recentLog: {
        header: "recent logs",
        subtext: "balance may all ways be the challenge."
      },
      projects: {
        header: "projects",
        subtext:
          "this page lists some of my personal and work projects. every project has some story, click on the title to read"
      },
      // Journal - Log End
      // blog: {
      //   header: "blog",
      //   subtext:
      //     "i try to write once in a while. let me know your thoughts in comments or mail@karngyan.com"
      // },

      // recentBlog: {
      //   header: "recent blogs",
      //   subtext: "it takes a lot of time to write man"
      // },
      //
      // pulses - real-time activity
      pulses: {
        header: "pulses",
        subtext:
          "a quick 👀 at what i use on a daily basis to code 💻. "
      },
      // uses: {
      //   header: "uses",
      //   subtext:
      //     "a quick summary of what I use on a daily basis to code and some codestats.net flex"
      // }
    }
  }
};
