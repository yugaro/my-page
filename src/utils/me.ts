export const specialitySkillList = () => {
  const data = [
    { name: 'Cyber-Physical System', level: '90%' },
    { name: 'Networked Control System', level: '88%' },
    { name: 'Machine Learning', level: '86%' },
    { name: 'Computer Science', level: '86%' },
    { name: 'Embedded System', level: '80%' },
    { name: 'Python, Django', level: '92%' },
    { name: 'C, C++', level: '85%' },
    { name: 'React, React Native, Redux', level: '90%' },
    { name: 'JavaScript, TypeScript', level: '85%' },
    { name: 'Next.js, Node.js', level: '88%' },
    { name: 'Flutter', level: '80%' },
    { name: 'Kotlin, Java', level: '60%' },
    { name: 'MATLAB', level: '70%' },
    { name: 'AWS / GCP', level: '68%' },
    { name: 'Docker', level: '76%' },
    { name: 'Google Analytics, Firebase', level: '76%' },
    { name: 'Design / Architect, Figma', level: '76%' },
    { name: 'Communication', level: '90%' },
  ]
  return data
}

export const educationList = () => {
  const data = [
    {
      name: 'Osaka University',
      year: 'Apr. 2021 - Mar. 2023 (expected)',
      place: 'Osaka, Japan',
      status: 'Master of Engineering (Major in Intelligent System Innovation)',
      contents: [
        {
          content:
            'My research area focuses on machine learning for uncertain CPS to achieve low-cost, safe, and high-performance control.',
        },
        {
          content:
            "I'm currently authoring a paper on learning-based event-triggered MPC via symbolic model with stability guarantees, which provides the novel framework for control of CPSs with statility and cost constraints.",
        },
        {
          content:
            'Participated in collaborative research to path planning in a completely unknown environment.',
        },
      ],
      specs: [
        { spec: 'Networked Control System' },
        { spec: 'Machine Learning' },
        { spec: 'Model Predictive Control' },
        { spec: 'Computer Science' },
        { spec: 'Network Science' },
        { spec: 'Embedded System' },
        { spec: 'Hybrid System' },
        { spec: 'Discrete-event System' },
        { spec: 'Financial Engineering' },
        { spec: 'Statistics' },
        { spec: 'Python' },
        { spec: 'C, C++' },
      ],
    },
    {
      name: 'Osaka University',
      year: 'Apr. 2017 - Mar. 2021',
      place: 'Osaka, Japan',
      status: 'Bachelor of Engineering ( Major in Intelligent System )',
      contents: [
        {
          content:
            'My research area focused on the the analysis and design of cyber physical systems, such as networked control systems that exchange information via communication networks, as well as software development for computer control.',
        },
        {
          content:
            ' I authored a paper on event-triggered control for mitigating deterministic SIS spreading processes, which is the novel research area for computer control.',
        },
      ],
      specs: [
        { spec: 'Networked Control System' },
        { spec: 'Machine Learning' },
        { spec: 'Computer Science' },
        { spec: 'Network Science' },
        { spec: 'Hybrid System' },
        { spec: 'Epidemiology' },
        { spec: 'Statistics' },
        { spec: 'Python' },
        { spec: 'C, C++' },
      ],
    },
  ]
  return data
}

export const jobList = () => {
  const data = [
    {
      name: 'e-dash Co., Ltd.',
      year: 'May. 2023 - ',
      place: 'Tokyo, Japan',
      status: '',
      contents: [
        // {
        //   content:
        //     'Designed iOS/Anderoid application for Jalan at Recruit Co., Ltd., a social platform that specializes in travels such as lodging, leisure activity, and sightseeing guid.',
        // },
        // {
        //   content:
        //     'Proposed and developed new functions for detail screens of leisure activity, and measured the effectiveness based on AB test.',
        // },
        // {
        //   content:
        //     'Developed new original proposals to prevent those who view Jalan from leaving the site such as elimination of information noise, satisfaction of important information, and new function for pricing of coupon, where the price is dynamically changed corresponding to UX.',
        // },
      ],
      specs: [
        // { spec: 'Power BI' },
      ],
    },
    {
      name: 'Recruit Co., Ltd.',
      year: 'Feb. 2022 - Mar. 2022',
      place: 'Tokyo, Japan',
      status: 'UX Director',
      contents: [
        {
          content:
            'Designed iOS/Anderoid application for Jalan at Recruit Co., Ltd., a social platform that specializes in travels such as lodging, leisure activity, and sightseeing guid.',
        },
        {
          content:
            'Proposed and developed new functions for detail screens of leisure activity, and measured the effectiveness based on AB test.',
        },
        {
          content:
            'Developed new original proposals to prevent those who view Jalan from leaving the site such as elimination of information noise, satisfaction of important information, and new function for pricing of coupon, where the price is dynamically changed corresponding to UX.',
        },
      ],
      specs: [
        { spec: 'BigQuery' },
        { spec: 'Python' },
        { spec: 'Adobe Analytics' },
      ],
    },
    {
      name: 'HACARUS, Inc ',
      year: 'Nov. 2020 - Jan. 2022',
      place: 'Kyoto, Japan',
      status: 'Data Scientist',
      contents: [
        {
          content:
            'As a data scientist, analyzing medical data from other companies and researched the latest tools.',
        },
        {
          content:
            'In the analysis of medical data, proposed an approach for extracting RR intervals with high accuracy from remote sensing data of heartbeats using millimeter-wave radar.',
        },
        {
          content:
            'Providing high interpretability in medical and mission-critical areas where it is essential but challenging to understand AI’s decision-making process.',
        },
        {
          content:
            'Sparse modeling technology that can extract features with a small amount of training data or without any training data is developed.',
        },
        {
          content:
            'Most common deep learning processes, in which the decision-making mechanism of artificial intelligence is a black box, ours is visualized in a form that can be interpreted by humans.',
        },
      ],
      specs: [{ spec: 'Python' }, { spec: 'AWS' }, { spec: 'Docker' }],
    },
    {
      name: 'Liberty Fish co., LTD',
      year: 'Jan. 2020 - Apr. 2020',
      place: 'Osaka, Japan',
      status: 'System Engineer',
      contents: [
        {
          content:
            'Developed a base application for linking other products in the instrumentation systems, which are measuring instruments used for indicating, measuring, and recording physical quantities.',
        },
        {
          content:
            'Evaluated the performance of air conditioners intending to improve their qualities, such as creating test cases based on the specifications, confirming that the specifications are satisfied, and finding defects.',
        },
      ],
      specs: [{ spec: 'C++' }, { spec: 'Python' }],
    },
    {
      name: 'Star Form, Inc',
      year: 'Mar. 2019 - Jan. 2020',
      place: 'Osaka, Japan',
      status: 'Web App Engineer',
      contents: [
        {
          content:
            'Launched and managed an ecommerce store, “SpoGift”, which is a service that allows customers easily to create their own sports team original memorabilia. ',
        },
        {
          content:
            'Assigned as UI/UX design, front-end development, and management. ',
        },
        {
          content:
            'Designed and developed iOS/Android application and web application for the service, incorporating the latest technology (React, React Native, Typescript, etc.)',
        },
        {
          content:
            'Improved them through analyzing user behaviors with Google Analytics and Firebase.',
        },
        {
          content:
            'Transferred parts of the UI/UX of the app to a venture company.',
        },
      ],
      specs: [
        { spec: 'React' },
        { spec: 'React Native' },
        { spec: 'Node.js' },
        { spec: 'HTML & CSS' },
        { spec: 'jQuery' },
        { spec: 'Google Analytics' },
        { spec: 'Firebase' },
      ],
    },
    {
      name: 'Daintree Manor',
      year: 'Feb. 2019 - Mar. 2019',
      place: 'Forest Creek, Australia',
      status: 'Bell Person, Workawayer',
      contents: [
        {
          content:
            'Worked for about two months as a bellperson taking advantage of "workaway", which is an international program that allows travelers to pay for their room and food by helping their host with household work needs, projects, or odd jobs.',
        },
        {
          content:
            'Guided guests to the rooms, explained how to use the facilities, and worked as a cook for a staff shortage.',
        },
      ],
      specs: [{ spec: 'Communication' }, { spec: 'English' }],
    },
    {
      name: 'MSK Anshin Station, Mitsui Sumitomo Insurance Company, Inc',
      year: 'Dec. 2017 - Sep. 2020',
      place: 'Osaka, Japan',
      status: 'Customer Service Operator',
      contents: [
        {
          content:
            'Took accident reports from the insurance policyholders over the phone and provided initial responses, e.g., contacting the other party, arranging towing services and rented cars, and request for withholding the treatment costs.',
        },
        {
          content:
            'Understood requests from the confused customers accurately and advised them in precise terms, considering their feelings.',
        },
        {
          content:
            'Among the departments of accident report center, I had the best record of the number of accidents handled per day.',
        },
      ],
      specs: [{ spec: 'Communication' }, { spec: 'Flexibility' }],
    },
  ]
  return data
}

export const articleList = () => {
  const data = [
    {
      image: '/images/event-triggered-control-state.jpg',
      link: 'https://qiita.com/yugaro/items/998750fa78b5efc79a9c',
      title: 'Reactive Computer and Communication Technologies',
      reader: 'For Network Control System Leaners',
    },
    {
      image: '/images/event-triggered-control-output.jpg',
      link: 'https://qiita.com/yugaro/items/6d6dc8b7526b4ad30efd',
      title: 'Reactive Computer and Communication Technologies',
      reader: 'For Network Control System Leaners',
    },
    {
      image: '/images/self-triggered-control.jpg',
      link: 'https://qiita.com/yugaro/items/a1273b67b867ccae5752',
      title: 'Proactive Computer and Communication Technologies',
      reader: 'For Network Control System Leaners',
    },
    {
      image: '/images/bilinear-stability.jpg',
      link: 'https://qiita.com/yugaro/items/ab6e5ccd966942495985',
      title: 'Control of Uncertain Models by BMI Approach',
      reader: 'For Bilinear System Leaners',
    },
    {
      image: '/images/learning-based_self-triggered_controller.jpg',
      link: 'https://qiita.com/yugaro/items/b1d31587857b193141bb',
      title: 'Gaussian Processes for Learning Self-triggered Controller',
      reader: 'For Network Control System and Machine Learning Leaners',
    },
    {
      image: '/images/learning-based_mpc_with_stability_guarantee.jpg',
      link: 'https://qiita.com/yugaro/items/a0b9030161a0478b25b1',
      title: 'Stability Analysis for Leaning-based MPC',
      reader: 'For Network Control System and Machine Learning Leaners',
    },
  ]
  return data
}

export const journalList = () => {
  const data = [
    {
      title:
        'Yuga Onoue, Kazumune Hashimoto, Learning-based Event-triggered MPC with Gaussian processes and terminal constraints, International Journal Robust and Nonlinear Control, Model Predictive Control (MPC) under Disturbances and Uncertainties: Safety, Stability and Learning, preprint.',
      link: 'https://arxiv.org/pdf/2110.12214.pdf',
    },
    {
      title:
        'Yuga Onoue, Kazumune Hashimoto, Masaki Ogura, and Toshimitsu Ushio. Event-Triggered Control for Mitigating SIS Spreading Processes. Annual Reviews in Control, 2021.',
      link: 'https://arxiv.org/pdf/2012.15146v1.pdf',
    },
  ]
  return data
}

export const conferenceList = () => {
  const data = [
    {
      id: 1,
      title:
        'W. Hashimoto, K. Hashimoto, Y. Onoue, S. Takai, Learning-Based Iterative Optimal Control for Unknown Systems Using Gaussian Process Regression, European Control Conference (ECC), 2022 (to appear)',
    },
  ]
  return data
}

export const qualificationList = () => {
  const data = [
    { id: 1, title: 'TOEIC, Nov. 2022, SCORE: 905' },
    { id: 2, title: 'Advanced Diver (PADI), Jul. 2022' },
    { id: 3, title: "First-Class Boat's Operator, Jul. 2022" },
  ]
  return data
}
