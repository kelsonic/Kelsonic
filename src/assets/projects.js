const PROJECTS = [
  // Tutor Up!
  {
    title: 'Tutor Up!',
    description: 'Built with Ruby on Rails for students and professors to connect and contact each other.',
    git_link: 'https://github.com/kelsonic/TutorUp',
    live_link: 'https://tutorup.herokuapp.com/',
    image: 'TutorUp.png',
    launched: '2015-12-27',
    category: 'Ruby on Rails, PostgreSQL',
    points: [
      'Built contact form using MVC and implemented wrote validations.',
      'Integrated with SendGrid API (for emailing) and Stripe API (for payments)',
      'Implemented user auth with Devise gem and used AJAX calls for APIs.',
      'Used Paperclip gem for image uploads.',
    ],
  },

  // My Veg Recipes
  {
    title: 'My Veg Recipes',
    description: 'Built with Ruby on Rails for vegetarian recipes and chefs.',
    git_link: 'https://github.com/kelsonic/MyVegRecipes',
    live_link: 'https://myvegrecipes.herokuapp.com/',
    image: 'MyVegRecipes.png',
    launched: '2016-01-02',
    category: 'Ruby on Rails, PostgreSQL',
    points: [
      'Built chef profiles and recipes using associations and test driven development (TDD).',
      'Built all chef and recipe routes, including forms with Gravatar and image upload features.',
      'Built like/dislike feature, implemented pagination feature, and built user authentication from scratch.',
      'Linked AWS S3 bucket to Heroku in order to store recipe image files.',
    ],
  },

  // My Dive Blog
  {
    title: 'My Dive Blog',
    description: 'Built with Ruby on Rails to provide scuba divers with a blog for their dives.',
    git_link: 'https://github.com/kelsonic/MyDiveBlog',
    live_link: 'https://mydiveblog.herokuapp.com/',
    image: 'MyDiveBlog.png',
    launched: '2016-01-05',
    category: 'Ruby on Rails, PostgreSQL',
    points: [
      'Built database architecture using SQLite3.',
      'Used CSS, SASS, Twitter Bootstrap, Font Awesome, JavaScript, and jQuery.',
      'Applied a test driven (TDD) approach through entire development process.',
      'Set up and connected to Amazon Web Services (AWS S3) for image uploads.',
    ],
  },

  // Photo App
  {
    title: 'Photo App',
    description: 'Built with Ruby on Rails to provide users a place to upload and share all of their photos.',
    git_link: 'https://github.com/kelsonic/photoapp',
    live_link: 'https://kel-photo-app.herokuapp.com/',
    image: 'PhotoApp.png',
    launched: '2016-02-24',
    category: 'Ruby on Rails, PostgreSQL',
    points: [
      'Built user auth with customized Devise.',
      'Linked AWS S3 bucket to Heroku in order to store image files.',
      'Used Carrierwave, Mini Magick, and Fog for image upload and image size validations.',
      'Implemented Stripe API for payment processing.',
    ],
  },

  // Social Stock
  {
    title: 'Social Stock',
    description: 'Built stock tracking app in a single day with Ruby on Rails.',
    git_link: 'https://github.com/kelsonic/SocialStock',
    live_link: 'http://socialstock.herokuapp.com/users/sign_in',
    image: 'SocialStock.png',
    launched: '2016-01-19',
    category: 'Ruby on Rails, PostgreSQL',
    points: [
      'Used Yahoo API for tracking stock markets and tickers.',
      'Implemented auto complete search function using AJAX, jQuery, and JavaScript.',
      'Implemented ‘adding friends’ functionality.',
      'Used PostgreSQL as the database for production on Heroku.',
    ],
  },

  // Crew Panda
  {
    title: 'Crew Panda',
    description: 'A SaaS Project Management app to manage projects between team members.',
    git_link: 'https://github.com/kelsonic/CrewPanda',
    live_link: 'http://crewpanda.herokuapp.com/',
    image: 'CrewPanda.png',
    launched: '2016-01-22',
    category: 'Ruby on Rails, PostgreSQL',
    points: [
      'Utilized Milia for multi-tenancy and customized Devise for user authentication.',
      'Utilized SendGrid API for email handling.',
      'Built project attachment feature and connected it with AWS.',
      'Integrated Stripe API for subscription payment handling using JavaScript.',
    ],
  },

  // Techify
  {
    title: 'Techify',
    description: 'Join the open forum for tech questions from technical professionals.',
    git_link: 'https://github.com/kelsonic/techify',
    live_link: 'http://techify.herokuapp.com',
    image: 'Techify.jpg',
    launched: '2016-02-01',
    category: 'Ruby on Rails, PostgreSQL',
    points: [
      'Built using Behavior Driven Development (BDD) with Capybara.',
      'Built article and comment features.',
      'Integrated Devise and edited gem to accept additional user properties.',
      'Deployed using Heroku and integrated Faker gem.',
    ],
  },

  // How 2 Bee
  {
    title: 'How 2 Bee',
    description: 'Learn how to start beekeeping from over 20+ articles and over 40,000 words of content.',
    git_link: 'http://www.how2bee.com/',
    live_link: 'http://www.how2bee.com/',
    image: 'how2bee.jpg',
    launched: '2016-03-04',
    category: 'Ruby on Rails, PostgreSQL',
    points: [
      'Built with Materialize front-end framework.',
      'Integrated with the SendGrid API.',
      'Deployed with Heroku and linked with Amazon affiliate account.',
      'Integrated Google\'s reCAPTCHA API for user auth.',
    ],
  },

  // Exoplanet Analysis
  {
    title: 'Exoplanet Analysis',
    description: 'A presentation on data visualization that parses NASA\'s exoplanet data.',
    git_link: 'https://github.com/kelsonic/exoplanet-analysis',
    live_link: 'https://exoplanet-analysis.herokuapp.com/',
    image: 'exoplanetAnalysis.jpg',
    launched: '2016-05-05',
    category: 'Ruby on Rails, PostgreSQL',
    points: [
      'Built in 2 days and deployed on Heroku.',
      'Integrated PapaParse API to convert CSV to JSON.',
      'Integrated MaterializeCSS front-end framework.',
      'Customized Highcharts API for data visualization.',
    ],
  },

  // Prisoner
  {
    title: 'Prisoner',
    description: 'A text-adventure game. You\'re a prisoner. Try to escape!',
    git_link: 'http://www.kongregate.com/games/kelsonic/prisoner-v0-2',
    live_link: 'http://www.kongregate.com/games/kelsonic/prisoner-v0-2',
    image: 'PrisonerImage1.png',
    launched: '2016-02-10',
    category: 'Unity Video Game',
    points: [
      'Built using the Unity game engine.',
      'Wrote all scripts using C#.',
      'Created decision tree map for storyline.',
    ],
  },

  // Binary Splitter
  {
    title: 'Binary Splitter',
    description: 'Implemented simple binary splitting algorithm to guess your number.',
    git_link: 'http://www.kongregate.com/games/kelsonic/binary-splitter-v0-2',
    live_link: 'http://www.kongregate.com/games/kelsonic/binary-splitter-v0-2',
    image: 'BinarySplitterImage1.png',
    launched: '2016-02-15',
    category: 'Unity Video Game',
    points: [
      'Built using the Unity game engine.',
      'Wrote all scripts using C#.',
      'Wrote recursive binary splitting algorithm.',
    ],
  },

  // SpaceX vs. Blue Origin
  {
    title: 'SpaceX vs. Blue Origin',
    description: 'A laser defender game where you play as Elon Musk\'s best pilot against Jeff Bezos\' Blue Origin fleet.',
    git_link: 'http://www.kongregate.com/games/kelsonic/spacex-vs-blue-origin',
    live_link: 'http://www.kongregate.com/games/kelsonic/spacex-vs-blue-origin',
    image: 'SpaceXImage1.png',
    launched: '2016-02-20',
    category: 'Unity Video Game',
    points: [
      'Built using the Unity game engine.',
      'Wrote all scripts using C#.',
      'Utilized particle generation for background.',
    ],
  },

  // Earth Destroyer
  {
    title: 'Earth Destroyer',
    description: 'Smash all the blocks and don\'t destroy Earth. Please.',
    git_link: 'http://www.kongregate.com/games/kelsonic/earth-destroyer',
    live_link: 'http://www.kongregate.com/games/kelsonic/earth-destroyer',
    image: 'EarthDestroyerImage1.png',
    launched: '2016-03-02',
    category: 'Unity Video Game',
    points: [
      'Built using the Unity game engine.',
      'Wrote all scripts using C#.',
      'Utilized physics engine to ignore friction and allow zero gravity.',
    ],
  },

  // Filosofize
  {
    title: 'Filosofize',
    description: 'Based off StackOverflow, Filosofize allows you to ponder and theorize others\' ponders.',
    git_link: 'https://github.com/kelsonic/filosofize',
    live_link: 'http://filosofize.herokuapp.com/',
    image: 'filosofize.jpg',
    launched: '2016-05-02',
    category: 'Sinatra, PostgreSQL',
    points: [
      'Used polymorphic associations to reduce amount of tables in db.',
      'Built backend tables, associations, and RESTful routes.',
      'Created db seeds with Star Wars faker data.',
    ],
  },

  // Best Friend Tales
  {
    title: 'Best Friend Tales',
    description: 'Find your new best friend, adopt them from local shelters, and post about their new story.',
    git_link: 'https://github.com/kelsonic/Best-Friend-Tales',
    live_link: 'http://bftales.com/',
    image: 'bftales.jpg',
    launched: '2016-05-22',
    category: 'Sinatra, PostgreSQL',
    points: [
      'Integrated Text-Processing Sentiment Analysis API',
      'Used AJAX to find local pets for adoption with Petfinder API',
      'Pre-write and send emails to local shelters with SendGrid API',
      'Built RESTful routes and CRUD actions for pets, users, etc.',
    ],
  },

  // Todo REST API
  {
    title: 'Todo REST API',
    description: 'A customizable Todo List REST API built primarily with ExpressJS and NodeJS.',
    git_link: 'https://github.com/kelsonic/todorestapi',
    live_link: 'http://todorestapi.herokuapp.com/',
    image: 'todoRESTapi.jpg',
    launched: '2016-06-5',
    category: 'Node.js, Express.js, PostgreSQL',
    points: [
      'Built API in 2 days and built RESTful routes using Express.',
      'Built user auth and password encryption with CryptoJS/BcryptJS.',
      'Built token generator with JSONWebToken npm.',
      'Created SQLite / PostgreSQL db with Sequelize and UnderscoreJS.',
    ],
  },

  // ML portal
  {
    title: 'ML portal',
    description: 'A list of articles on the most well-known Machine-Learning algorithms out there.',
    git_link: 'https://github.com/kelsonic/MLportal',
    live_link: 'https://mlportal.herokuapp.com/',
    image: 'mlportal.jpg',
    launched: '2016-06-10',
    category: 'Node.js, Express.js, Keystone.js, MongoDB',
    points: [
      'Built in 1 day and created node-effect on homepage with JavaScript.',
      'Utilized Jade for templates and LESS for pre-compiled stylesheets.',
      'Integrated Mandrill API (for emailing) and Cloudinary API (for image cloud storage).',
      'Built with ExpressJS, KeystoneJS, NodeJS, and MongoDB.',
    ],
  },

  // LangSorts
  {
    title: 'Lang Sorts',
    description: 'Discover how to code sorting algorithms in multiple programming languages.',
    git_link: 'https://github.com/kelsonic/langsorts',
    live_link: 'http://www.langsorts.com',
    image: 'langsorts.jpg',
    launched: '2016-06-14',
    category: 'React, Node.js, Express.js, MongoDB',
    points: [
      'Built backend API (with seed data) using Node.js, Express.js, and MongoDB.',
      'Built client-side app with MaterializeCSS and React.',
      'Wrote Ruby and Javascript sorting algorithms, such as bubble / quick / merge sort.',
      'Built out each component using both React and Redux.',
    ],
  },

  // Investorgate
  {
    title: 'Investorgate',
    description: 'Test your abilities as an investor on the public stock market.',
    git_link: 'https://github.com/kelsonic/investorgate',
    live_link: 'http://investorgate.trade',
    image: 'investorgate.jpg',
    launched: '2016-08-11',
    category: 'React.js, Redux, Webpack, Babel',
    points: [
      'Implement React Highcarts for portfolio data visualization.',
      'Use Babel and Gulp to use ES6/7 React syntax.',
      'Implement redux middlewares for logging.',
      'Host website using cPanel and used LESS for pre-compiled stylesheets.',
    ],
  },

  // Daily Bike Rental Neural Network
  {
    title: 'Bike Rental Neural Net',
    description: 'Built a neural network to model daily bike rentals over a given period of time.',
    git_link: 'https://github.com/kelsonic/dailyBikeRentalNeuralNetwork',
    live_link: 'https://github.com/kelsonic/dailyBikeRentalNeuralNetwork',
    image: 'bikeRentalNeuralNetwork.jpg',
    launched: '2017-02-09',
    category: 'Machine Learning, Deep Learning, Numpy, Python',
    points: [
      'Built neural network in 1 day with Python and Numpy.',
      'Achieved training loss of 0.044 and validation loss of 0.123',
    ],
  },

  // miniDriver
  {
    title: 'miniDriver',
    description: 'Built a self-driving RC car that reacts to stop signs, obstacles, and lanes.',
    git_link: 'https://github.com/kelsonic/minidriver',
    live_link: 'http://minidriver.herokuapp.com/',
    image: 'miniDriver.jpg',
    launched: '2016-06-08',
    category: 'Machine Learning, Raspberry Pi, Python',
    points: [
      'Built in 7 days with Python.',
      'Used GPIO pins to connect to camera, ultrasonic sensors, RC controller, and 2 Raspberry Pis.',
      'Trained Haar cascade classifier with OpenCV to recognize stop signs in video frames.',
      'Wrote lane detection algorithm in Python with Numpy and MatPlotLib libraries.',
      'Utilized TCP server, websockets, and multithreading.',
    ],
  },
];

export default PROJECTS;
