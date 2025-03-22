
// Department and event data for the symposium

export interface Event {
  id: string;
  title: string;
  department: string;
  shortDescription: string;
  description: string;
  image: string;
  rules: string[];
  formLink: string;
  qrCode?: string;
}

export interface Department {
  id: string;
  name: string;
  shortName: string;
  description: string;
  color: string;
  image: string;
  events: Event[];
}

export const departments: Department[] = [
  {
    id: "it",
    name: "Information Technology",
    shortName: "IT",
    description: "The Department of Information Technology focuses on cutting-edge technologies and software development.",
    color: "bg-gradient-to-r from-blue-500 to-cyan-400",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    events: [
      {
        id: "codex",
        title: "Codex Coding Challenge",
        department: "it",
        shortDescription: "Test your coding skills in a competitive environment",
        description: "Codex is a competitive coding challenge where participants solve algorithmic problems under time constraints. Show off your coding skills and compete with other talented programmers!",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
        rules: [
          "Individual participation only",
          "Time limit: 2 hours",
          "Languages allowed: C, C++, Java, Python",
          "Internet access is not allowed during the competition",
          "Participants must bring their own laptops"
        ],
        formLink: "https://forms.google.com/codex-registration"
      },
      {
        id: "itiq",
        title: "ITIQ",
        department: "it",
        shortDescription: "IT quiz competition to test your technical knowledge",
        description: "ITIQ is a technical quiz competition that tests participants' knowledge in various fields of Information Technology, including programming, networks, databases, and current tech trends.",
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80",
        rules: [
          "Teams of 2 members",
          "Multiple rounds including prelims and finals",
          "Questions from various IT domains",
          "Use of electronic devices is prohibited",
          "Judge's decision is final"
        ],
        formLink: "https://forms.google.com/itiq-registration"
      },
      {
        id: "tech-connections",
        title: "Tech Connections",
        department: "it",
        shortDescription: "Connect technologies to solve real-world problems",
        description: "Tech Connections challenges participants to integrate multiple technologies to solve a given problem. This event tests both technical knowledge and creative problem-solving abilities.",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
        rules: [
          "Teams of 3-4 members",
          "Duration: 4 hours",
          "All resources will be provided",
          "Solutions will be judged on innovation, practicality, and technical implementation",
          "Final presentation is mandatory"
        ],
        formLink: "https://forms.google.com/tech-connections-registration"
      },
      {
        id: "big-busters",
        title: "Big Busters",
        department: "it",
        shortDescription: "Debug complex code and fix critical issues",
        description: "Big Busters is a debugging competition where participants are given buggy code that they need to analyze and fix within a time limit. Test your debugging skills and logical reasoning!",
        image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&w=800&q=80",
        rules: [
          "Individual participation",
          "Time limit: 90 minutes",
          "Bugs range from syntax errors to logical errors",
          "Points awarded based on number of bugs fixed and time taken",
          "Participants must explain their solutions"
        ],
        formLink: "https://forms.google.com/big-busters-registration"
      },
      {
        id: "crypto-mind",
        title: "Crypto Mind",
        department: "it",
        shortDescription: "Solve cryptographic puzzles and security challenges",
        description: "Crypto Mind focuses on cryptography and security challenges. Participants will solve various cryptographic puzzles, break codes, and tackle cybersecurity problems.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
        rules: [
          "Teams of 2 members",
          "Multiple rounds of increasing difficulty",
          "Basic knowledge of cryptography required",
          "No external tools allowed except those provided",
          "Time limits apply for each round"
        ],
        formLink: "https://forms.google.com/crypto-mind-registration"
      },
      {
        id: "ai-poster",
        title: "AI Poster Competition",
        department: "it",
        shortDescription: "Create innovative posters on AI technologies",
        description: "The AI Poster Competition invites participants to create informative and visually appealing posters on artificial intelligence topics, showcasing both design skills and technical knowledge.",
        image: "https://images.unsplash.com/photo-1677442135968-6d89783607f2?auto=format&fit=crop&w=800&q=80",
        rules: [
          "Individual or team (max 2 members) participation",
          "Poster size: A1 (594 x 841 mm)",
          "Both digital and hand-drawn posters accepted",
          "Must include technical content related to AI",
          "Submission deadline: One day before the symposium"
        ],
        formLink: "https://forms.google.com/ai-poster-registration"
      },
      {
        id: "couple-coding",
        title: "Couple Coding",
        department: "it",
        shortDescription: "Collaborative coding challenge for pairs",
        description: "Couple Coding is a pair programming contest where two participants work together to solve programming challenges. One writes code while the other can only give verbal instructions.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
        rules: [
          "Teams of 2 members",
          "One person types, one person directs",
          "No swapping roles during a problem",
          "Time limit: 2 hours",
          "Languages allowed: C++, Java, Python"
        ],
        formLink: "https://forms.google.com/couple-coding-registration"
      },
      {
        id: "fun-zone",
        title: "Fun Zone",
        department: "it",
        shortDescription: "Tech-themed fun activities and games",
        description: "Fun Zone features a variety of tech-themed games and recreational activities that test both technical knowledge and problem-solving skills in an entertaining format.",
        image: "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=800&q=80",
        rules: [
          "Open to all symposium participants",
          "Activities include tech puzzles, mini-games, and challenges",
          "Some activities may require team participation",
          "Points awarded for each activity completed",
          "Prizes for highest point accumulators"
        ],
        formLink: "https://forms.google.com/fun-zone-registration"
      },
      {
        id: "code-in-the-dark",
        title: "Code in the Dark",
        department: "it",
        shortDescription: "UI challenge without preview",
        description: "Code in the Dark challenges participants to implement a user interface based on a given design, but without the ability to see the output until submission. Test your HTML/CSS knowledge!",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
        rules: [
          "Individual participation",
          "No previewing of code output until submission",
          "Time limit: 45 minutes",
          "Only HTML, CSS, and vanilla JavaScript allowed",
          "No external libraries or frameworks"
        ],
        formLink: "https://forms.google.com/code-in-dark-registration"
      },
      {
        id: "meme-the-code",
        title: "Meme the Code",
        department: "it",
        shortDescription: "Create tech and programming memes",
        description: "Meme the Code is a creative contest where participants create original memes related to programming, technology, and IT. Show your humor and technical knowledge!",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
        rules: [
          "Individual participation",
          "Memes must be original creations",
          "Must be related to programming/technology",
          "Submission limit: 3 memes per participant",
          "No offensive or inappropriate content allowed"
        ],
        formLink: "https://forms.google.com/meme-code-registration"
      }
    ]
  },
  {
    id: "cse",
    name: "Computer Science and Engineering",
    shortName: "CSE",
    description: "The Department of Computer Science and Engineering focuses on computer systems, algorithms, and software development.",
    color: "bg-gradient-to-r from-purple-500 to-indigo-500",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    events: [
      {
        id: "algo-battle",
        title: "Algorithm Battle",
        department: "cse",
        shortDescription: "Competitive algorithm design and optimization",
        description: "Algorithm Battle challenges participants to design efficient algorithms for complex problems and optimize for both time and space complexity.",
        image: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=800&q=80",
        rules: [
          "Individual participation",
          "Time limit: 3 hours",
          "Languages allowed: C++, Java, Python",
          "Scoring based on correctness, efficiency, and elegance",
          "Internet access is restricted"
        ],
        formLink: "https://forms.google.com/algo-battle-registration"
      },
      {
        id: "hackathon",
        title: "24-Hour Hackathon",
        department: "cse",
        shortDescription: "Build innovative solutions in 24 hours",
        description: "The 24-Hour Hackathon gives teams the opportunity to develop innovative software solutions to real-world problems within a 24-hour time constraint.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
        rules: [
          "Teams of 3-5 members",
          "Duration: 24 hours",
          "Theme will be announced at the start",
          "Participants must bring their own hardware",
          "Final presentation is required"
        ],
        formLink: "https://forms.google.com/hackathon-registration"
      }
    ]
  },
  {
    id: "ei",
    name: "Electronics & Instrumentation",
    shortName: "E&I",
    description: "The Department of Electronics & Instrumentation focuses on electronic systems and precision measurement technologies.",
    color: "bg-gradient-to-r from-red-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80",
    events: [
      {
        id: "circuit-design",
        title: "Circuit Design Challenge",
        department: "ei",
        shortDescription: "Design and implement electronic circuits",
        description: "The Circuit Design Challenge tests participants' abilities to design, simulate, and implement electronic circuits to meet specific requirements.",
        image: "https://images.unsplash.com/photo-1580584126903-c17d41830450?auto=format&fit=crop&w=800&q=80",
        rules: [
          "Teams of 2 members",
          "Time limit: 4 hours",
          "Components will be provided",
          "Both simulation and physical implementation required",
          "Judging based on functionality, efficiency, and creativity"
        ],
        formLink: "https://forms.google.com/circuit-design-registration"
      }
    ]
  },
  {
    id: "ece",
    name: "Electronics & Communication Engineering",
    shortName: "ECE",
    description: "The Department of Electronics & Communication Engineering focuses on communication systems and signal processing.",
    color: "bg-gradient-to-r from-green-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    events: [
      {
        id: "signal-quest",
        title: "Signal Quest",
        department: "ece",
        shortDescription: "Signal processing and analysis competition",
        description: "Signal Quest challenges participants to analyze and process various signals to extract important information and features.",
        image: "https://images.unsplash.com/photo-1563770660941-10a8206f21d9?auto=format&fit=crop&w=800&q=80",
        rules: [
          "Individual or teams of 2",
          "Multiple rounds with increasing difficulty",
          "MATLAB/Python knowledge required",
          "Time limits for each round",
          "Both theoretical problems and hands-on tasks"
        ],
        formLink: "https://forms.google.com/signal-quest-registration"
      }
    ]
  },
  {
    id: "chemical",
    name: "Chemical Engineering",
    shortName: "Chemical",
    description: "The Department of Chemical Engineering focuses on chemical processes and materials science.",
    color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    events: [
      {
        id: "chem-innovate",
        title: "Chem-Innovate",
        department: "chemical",
        shortDescription: "Innovative chemical engineering solutions",
        description: "Chem-Innovate challenges participants to develop innovative solutions to chemical engineering problems with a focus on sustainability and efficiency.",
        image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=800&q=80",
        rules: [
          "Teams of 3-4 members",
          "Proposal submission required beforehand",
          "Presentation duration: 15 minutes",
          "Q&A session: 5 minutes",
          "Judging based on innovation, feasibility, and presentation"
        ],
        formLink: "https://forms.google.com/chem-innovate-registration"
      }
    ]
  },
  {
    id: "mechanical",
    name: "Mechanical Engineering",
    shortName: "Mechanical",
    description: "The Department of Mechanical Engineering focuses on machinery, thermal systems, and manufacturing.",
    color: "bg-gradient-to-r from-gray-600 to-gray-800",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80",
    events: [
      {
        id: "cad-masters",
        title: "CAD Masters",
        department: "mechanical",
        shortDescription: "3D modeling and CAD design competition",
        description: "CAD Masters tests participants' skills in 3D modeling and Computer-Aided Design. Create detailed models based on specifications within time constraints.",
        image: "https://images.unsplash.com/photo-1606676539940-12768ce0e762?auto=format&fit=crop&w=800&q=80",
        rules: [
          "Individual participation",
          "Time limit: 2 hours",
          "Software: AutoCAD, SolidWorks, or Fusion 360",
          "Models judged on accuracy, detail, and time taken",
          "Specifications provided at the start of the event"
        ],
        formLink: "https://forms.google.com/cad-masters-registration"
      }
    ]
  },
  {
    id: "civil",
    name: "Civil Engineering",
    shortName: "Civil",
    description: "The Department of Civil Engineering focuses on infrastructure design, construction, and environmental engineering.",
    color: "bg-gradient-to-r from-blue-700 to-blue-900",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    events: [
      {
        id: "structure-craft",
        title: "Structure Craft",
        department: "civil",
        shortDescription: "Build efficient and stable structures",
        description: "Structure Craft challenges participants to design and build small-scale structures that can withstand specific loads while using minimal materials.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
        rules: [
          "Teams of 2-3 members",
          "Materials provided (popsicle sticks, glue, etc.)",
          "Time limit: 3 hours",
          "Structures tested for load-bearing capacity",
          "Scoring based on strength-to-weight ratio"
        ],
        formLink: "https://forms.google.com/structure-craft-registration"
      }
    ]
  },
  {
    id: "eee",
    name: "Electrical & Electronics Engineering",
    shortName: "EEE",
    description: "The Department of Electrical & Electronics Engineering focuses on power systems, control systems, and electronic devices.",
    color: "bg-gradient-to-r from-amber-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1620283085439-39aed867630b?auto=format&fit=crop&w=800&q=80",
    events: [
      {
        id: "power-innovators",
        title: "Power Innovators",
        department: "eee",
        shortDescription: "Innovations in power systems and energy",
        description: "Power Innovators challenges participants to develop innovative solutions for energy efficiency, renewable energy integration, and smart grid technologies.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
        rules: [
          "Teams of 2-4 members",
          "Project proposal submission",
          "Prototype demonstration if applicable",
          "Presentation: 10 minutes",
          "Judging based on innovation, feasibility, and impact"
        ],
        formLink: "https://forms.google.com/power-innovators-registration"
      }
    ]
  },
  {
    id: "mechatronics",
    name: "Mechatronics",
    shortName: "Mechatronics",
    description: "The Department of Mechatronics focuses on the integration of mechanical, electronic, and control systems.",
    color: "bg-gradient-to-r from-sky-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    events: [
      {
        id: "robo-wars",
        title: "Robo Wars",
        department: "mechatronics",
        shortDescription: "Robot design and combat competition",
        description: "Robo Wars is a robot combat competition where teams design and build remote-controlled robots to compete in an arena-style tournament.",
        image: "https://images.unsplash.com/photo-1564156280315-1d42b4651629?auto=format&fit=crop&w=800&q=80",
        rules: [
          "Teams of 3-5 members",
          "Weight limit: 5kg",
          "Size limit: 40cm x 40cm x 30cm",
          "Safety requirements must be met",
          "Round-robin followed by knockout rounds"
        ],
        formLink: "https://forms.google.com/robo-wars-registration"
      }
    ]
  }
];

// Function to get a department by ID
export const getDepartmentById = (id: string): Department | undefined => {
  return departments.find((dept) => dept.id === id);
};

// Function to get an event by ID
export const getEventById = (id: string): Event | undefined => {
  for (const dept of departments) {
    const event = dept.events.find((event) => event.id === id);
    if (event) return event;
  }
  return undefined;
};

// Function to get all events from all departments
export const getAllEvents = (): Event[] => {
  return departments.flatMap((dept) => dept.events);
};
