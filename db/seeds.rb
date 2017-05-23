# Rails Projects

# Tutor Up!
tutorup = Project.create!(
  title: 'Tutor Up!',
  description: 'Built with Ruby on Rails for students and professors to connect and contact each other.',
  git_link: 'https://github.com/kelsonic/TutorUp',
  live_link: 'https://tutorup.herokuapp.com/',
  image: 'TutorUp.png',
  launched: '2015-12-27',
  category: 'Ruby on Rails, PostgreSQL'
)

tutorup.points.create!(body: 'Built contact form using MVC and implemented wrote validations.')
tutorup.points.create!(body: 'Integrated with SendGrid API (for emailing) and Stripe API (for payments)')
tutorup.points.create!(body: 'Implemented user auth with Devise gem and used AJAX calls for APIs.')
tutorup.points.create!(body: 'Used Paperclip gem for image uploads.')

# My Veg Recipes
myvegrecipes = Project.create!(
  title: 'My Veg Recipes',
  description: 'Built with Ruby on Rails for vegetarian recipes and chefs.',
  git_link: 'https://github.com/kelsonic/MyVegRecipes',
  live_link: 'https://myvegrecipes.herokuapp.com/',
  image: 'MyVegRecipes.png',
  launched: '2016-01-02',
  category: 'Ruby on Rails, PostgreSQL'
)

myvegrecipes.points.create!(body: 'Built chef profiles and recipes using associations and test driven development (TDD).')
myvegrecipes.points.create!(body: 'Built all chef and recipe routes, including forms with Gravatar and image upload features.')
myvegrecipes.points.create!(body: 'Built like/dislike feature, implemented pagination feature, and built user authentication from scratch.')
myvegrecipes.points.create!(body: 'Linked AWS S3 bucket to Heroku in order to store recipe image files.')

# My Dive Blog
mydiveblog = Project.create!(
  title: 'My Dive Blog',
  description: 'Built with Ruby on Rails to provide scuba divers with a blog for their dives.',
  git_link: 'https://github.com/kelsonic/MyDiveBlog',
  live_link: 'https://mydiveblog.herokuapp.com/',
  image: 'MyDiveBlog.png',
  launched: '2016-01-05',
  category: 'Ruby on Rails, PostgreSQL'
)

mydiveblog.points.create!(body: 'Built database architecture using SQLite3.')
mydiveblog.points.create!(body: 'Used CSS, SASS, Twitter Bootstrap, Font Awesome, JavaScript, and jQuery.')
mydiveblog.points.create!(body: 'Applied a test driven (TDD) approach through entire development process.')
mydiveblog.points.create!(body: 'Set up and connected to Amazon Web Services (AWS S3) for image uploads.')

# Photo App
photoapp = Project.create!(
  title: 'Photo App',
  description: 'Built with Ruby on Rails to provide users a place to upload and share all of their photos.',
  git_link: 'https://github.com/kelsonic/photoapp',
  live_link: 'https://kel-photo-app.herokuapp.com/',
  image: 'PhotoApp.png',
  launched: '2016-02-24',
  category: 'Ruby on Rails, PostgreSQL'
)

photoapp.points.create!(body: 'Built user auth with customized Devise.')
photoapp.points.create!(body: 'Linked AWS S3 bucket to Heroku in order to store image files.')
photoapp.points.create!(body: 'Used Carrierwave, Mini Magick, and Fog for image upload and image size validations.')
photoapp.points.create!(body: 'Implemented Stripe API for payment processing.')

# Social Stock
socialstock = Project.create!(
  title: 'Social Stock',
  description: 'Built stock tracking app in a single day with Ruby on Rails.',
  git_link: 'https://github.com/kelsonic/SocialStock',
  live_link: 'http://socialstock.herokuapp.com/users/sign_in',
  image: 'SocialStock.png',
  launched: '2016-01-19',
  category: 'Ruby on Rails, PostgreSQL'
)

socialstock.points.create!(body: 'Used Yahoo API for tracking stock markets and tickers.')
socialstock.points.create!(body: 'Implemented auto complete search function using AJAX, jQuery, and JavaScript.')
socialstock.points.create!(body: 'Implemented ‘adding friends’ functionality.')
socialstock.points.create!(body: 'Used PostgreSQL as the database for production on Heroku.')

# Crew Panda
crewpanda = Project.create!(
  title: 'Crew Panda',
  description: 'A SaaS Project Management app to manage projects between team members.',
  git_link: 'https://github.com/kelsonic/CrewPanda',
  live_link: 'http://crewpanda.herokuapp.com/',
  image: 'CrewPanda.png',
  launched: '2016-01-22',
  category: 'Ruby on Rails, PostgreSQL'
)

crewpanda.points.create!(body: 'Utilized Milia for multi-tenancy and customized Devise for user authentication.')
crewpanda.points.create!(body: 'Utilized SendGrid API for email handling.')
crewpanda.points.create!(body: 'Built project attachment feature and connected it with AWS.')
crewpanda.points.create!(body: 'Integrated Stripe API for subscription payment handling using JavaScript.')

# Techify
techify = Project.create!(
  title: 'Techify',
  description: 'Join the open forum for tech questions from technical professionals.',
  git_link: 'https://github.com/kelsonic/techify',
  live_link: 'http://techify.herokuapp.com',
  image: 'Techify.jpg',
  launched: '2016-02-01',
  category: 'Ruby on Rails, PostgreSQL'
)

techify.points.create!(body: 'Built using Behavior Driven Development (BDD) with Capybara.')
techify.points.create!(body: 'Built article and comment features.')
techify.points.create!(body: 'Integrated Devise and edited gem to accept additional user properties.')
techify.points.create!(body: 'Deployed using Heroku and integrated Faker gem.')

# How 2 Bee
how2bee = Project.create!(
  title: 'How 2 Bee',
  description: 'Learn how to start beekeeping from over 20+ articles and over 40,000 words of content.',
  git_link: 'http://www.how2bee.com/',
  live_link: 'http://www.how2bee.com/',
  image: 'how2bee.jpg',
  launched: '2016-03-04',
  category: 'Ruby on Rails, PostgreSQL'
)

how2bee.points.create!(body: 'Built with Materialize front-end framework.')
how2bee.points.create!(body: 'Integrated with the SendGrid API.')
how2bee.points.create!(body: 'Deployed with Heroku and linked with Amazon affiliate account.')
how2bee.points.create!(body: 'Integrated Google\'s reCAPTCHA API for user auth.')

# Exoplanet Analysis
exoplanet_analysis = Project.create!(
  title: 'Exoplanet Analysis',
  description: 'A presentation on data visualization that parses NASA\'s exoplanet data.',
  git_link: 'https://github.com/kelsonic/exoplanet-analysis',
  live_link: 'https://exoplanet-analysis.herokuapp.com/',
  image: 'exoplanetAnalysis.jpg',
  launched: '2016-05-05',
  category: 'Ruby on Rails, PostgreSQL'
)

exoplanet_analysis.points.create!(body: 'Built in 2 days and deployed on Heroku.')
exoplanet_analysis.points.create!(body: 'Integrated PapaParse API to convert CSV to JSON.')
exoplanet_analysis.points.create!(body: 'Integrated MaterializeCSS front-end framework.')
exoplanet_analysis.points.create!(body: 'Customized Highcharts API for data visualization.')

# --------------------------------
# UNITY VIDEO GAMES

# Prisoner
prisoner = Project.create!(
  title: 'Prisoner',
  description: 'A text-adventure game. You\'re a prisoner. Try to escape!',
  git_link: 'http://www.kongregate.com/games/kelsonic/prisoner-v0-2',
  live_link: 'http://www.kongregate.com/games/kelsonic/prisoner-v0-2',
  image: 'PrisonerImage1.png',
  launched: '2016-02-10',
  category: 'Unity Video Game'
)

prisoner.points.create!(body: 'Built using the Unity game engine.')
prisoner.points.create!(body: 'Wrote all scripts using C#.')
prisoner.points.create!(body: 'Created decision tree map for storyline.')

# Binary Splitter
binary_splitter = Project.create!(
  title: 'Binary Splitter',
  description: 'Implemented simple binary splitting algorithm to guess your number.',
  git_link: 'http://www.kongregate.com/games/kelsonic/binary-splitter-v0-2',
  live_link: 'http://www.kongregate.com/games/kelsonic/binary-splitter-v0-2',
  image: 'BinarySplitterImage1.png',
  launched: '2016-02-15',
  category: 'Unity Video Game'
)

binary_splitter.points.create!(body: 'Built using the Unity game engine.')
binary_splitter.points.create!(body: 'Wrote all scripts using C#.')
binary_splitter.points.create!(body: 'Wrote recursive binary splitting algorithm.')

# SpaceX vs. Blue Origin
spacex_vs_blue_origin = Project.create!(
  title: 'SpaceX vs. Blue Origin',
  description: 'A laser defender game where you play as Elon Musk\'s best pilot against Jeff Bezos\' Blue Origin fleet.',
  git_link: 'http://www.kongregate.com/games/kelsonic/spacex-vs-blue-origin',
  live_link: 'http://www.kongregate.com/games/kelsonic/spacex-vs-blue-origin',
  image: 'SpaceXImage1.png',
  launched: '2016-02-20',
  category: 'Unity Video Game'
)

spacex_vs_blue_origin.points.create!(body: 'Built using the Unity game engine.')
spacex_vs_blue_origin.points.create!(body: 'Wrote all scripts using C#.')
spacex_vs_blue_origin.points.create!(body: 'Utilized particle generation for background.')

# Earth Destroyer
earth_destroyer = Project.create!(
  title: 'Earth Destroyer',
  description: 'Smash all the blocks and don\'t destroy Earth. Please.',
  git_link: 'http://www.kongregate.com/games/kelsonic/earth-destroyer',
  live_link: 'http://www.kongregate.com/games/kelsonic/earth-destroyer',
  image: 'EarthDestroyerImage1.png',
  launched: '2016-03-02',
  category: 'Unity Video Game'
)

earth_destroyer.points.create!(body: 'Built using the Unity game engine.')
earth_destroyer.points.create!(body: 'Wrote all scripts using C#.')
earth_destroyer.points.create!(body: 'Utilized physics engine to ignore friction and allow zero gravity.')

# ---------------------------------
# Sinatra

# Filosofize
filosofize = Project.create!(
  title: 'Filosofize',
  description: 'Based off StackOverflow, Filosofize allows you to ponder and theorize others\' ponders.',
  git_link: 'https://github.com/kelsonic/filosofize',
  live_link: 'http://filosofize.herokuapp.com/',
  image: 'filosofize.jpg',
  launched: '2016-05-02',
  category: 'Sinatra, PostgreSQL'
)

filosofize.points.create!(body: 'Used polymorphic associations to reduce amount of tables in db.')
filosofize.points.create!(body: 'Built backend tables, associations, and RESTful routes.')
filosofize.points.create!(body: 'Created db seeds with Star Wars faker data.')

# Best Friend Tales
bftales = Project.create!(
  title: 'Best Friend Tales',
  description: 'Find your new best friend, adopt them from local shelters, and post about their new story.',
  git_link: 'https://github.com/kelsonic/Best-Friend-Tales',
  live_link: 'http://bftales.com/',
  image: 'bftales.jpg',
  launched: '2016-05-22',
  category: 'Sinatra, PostgreSQL'
)

bftales.points.create!(body: 'Integrated Text-Processing Sentiment Analysis API')
bftales.points.create!(body: 'Used AJAX to find local pets for adoption with Petfinder API')
bftales.points.create!(body: 'Pre-write and send emails to local shelters with SendGrid API')
bftales.points.create!(body: 'Built RESTful routes and CRUD actions for pets, users, etc.')

# -----------------------------
# JavaScript

# Todo REST API
todorestapi = Project.create!(
  title: 'Todo REST API',
  description: 'A customizable Todo List REST API built primarily with ExpressJS and NodeJS.',
  git_link: 'https://github.com/kelsonic/todorestapi',
  live_link: 'http://todorestapi.herokuapp.com/',
  image: 'todoRESTapi.jpg',
  launched: '2016-06-5',
  category: 'Node.js, Express.js, PostgreSQL'
)

todorestapi.points.create!(body: 'Built API in 2 days and built RESTful routes using Express.')
todorestapi.points.create!(body: 'Built user auth and password encryption with CryptoJS/BcryptJS.')
todorestapi.points.create!(body: 'Built token generator with JSONWebToken npm.')
todorestapi.points.create!(body: 'Created SQLite / PostgreSQL db with Sequelize and UnderscoreJS.')

# ML portal
mlportal = Project.create!(
  title: 'ML portal',
  description: 'A list of articles on the most well-known Machine-Learning algorithms out there.',
  git_link: 'https://github.com/kelsonic/MLportal',
  live_link: 'https://mlportal.herokuapp.com/',
  image: 'mlportal.jpg',
  launched: '2016-06-10',
  category: 'Node.js, Express.js, Keystone.js, MongoDB'
)

mlportal.points.create!(body: 'Built in 1 day and created node-effect on homepage with JavaScript.')
mlportal.points.create!(body: 'Utilized Jade for templates and LESS for pre-compiled stylesheets.')
mlportal.points.create!(body: 'Integrated Mandrill API (for emailing) and Cloudinary API (for image cloud storage).')
mlportal.points.create!(body: 'Built with ExpressJS, KeystoneJS, NodeJS, and MongoDB.')

# LangSorts
langsorts = Project.create!(
  title: 'Lang Sorts',
  description: 'Discover how to code sorting algorithms in multiple programming languages.',
  git_link: 'https://github.com/kelsonic/langsorts',
  live_link: 'http://www.langsorts.com',
  image: 'langsorts.jpg',
  launched: '2016-06-14',
  category: 'React, Node.js, Express.js, MongoDB'
)

langsorts.points.create!(body: 'Built backend API (with seed data) using Node.js, Express.js, and MongoDB.')
langsorts.points.create!(body: 'Built client-side app with MaterializeCSS and React.')
langsorts.points.create!(body: 'Wrote Ruby and Javascript sorting algorithms, such as bubble / quick / merge sort.')
langsorts.points.create!(body: 'Built out each component using both React and Redux.')

# Investorgate
investorgate = Project.create!(
  title: 'Investorgate',
  description: 'Test your abilities as an investor on the public stock market.',
  git_link: 'https://github.com/kelsonic/investorgate',
  live_link: 'http://investorgate.trade',
  image: 'investorgate.jpg',
  launched: '2016-08-11',
  category: 'React.js, Redux, Webpack, Babel'
)

investorgate.points.create!(body: 'Implement React Highcarts for portfolio data visualization.')
investorgate.points.create!(body: 'Use Babel and Gulp to use ES6/7 React syntax.')
investorgate.points.create!(body: 'Implement redux middlewares for logging.')
investorgate.points.create!(body: 'Host website using cPanel and used LESS for pre-compiled stylesheets.')

# -------------------------------
# Machine Learning

# Daily Bike Rental Neural Network
daily_bike_rental_neural_network = Project.create!(
  title: 'Bike Rental Neural Net',
  description: 'Built a neural network to model daily bike rentals over a given period of time.',
  git_link: 'https://github.com/kelsonic/dailyBikeRentalNeuralNetwork',
  live_link: 'https://github.com/kelsonic/dailyBikeRentalNeuralNetwork',
  image: 'bikeRentalNeuralNetwork.jpg',
  launched: '2017-02-09',
  category: 'Machine Learning, Deep Learning, Numpy, Python'
)

daily_bike_rental_neural_network.points.create!(body: 'Built neural network in 1 day with Python and Numpy.')
daily_bike_rental_neural_network.points.create!(body: 'Achieved training loss of 0.044 and validation loss of 0.123')

# miniDriver
minidriver = Project.create!(
  title: 'miniDriver',
  description: 'Built a self-driving RC car that reacts to stop signs, obstacles, and lanes.',
  git_link: 'https://github.com/kelsonic/minidriver',
  live_link: 'http://minidriver.herokuapp.com/',
  image: 'miniDriver.jpg',
  launched: '2016-06-08',
  category: 'Machine Learning, Raspberry Pi, Python'
)

minidriver.points.create!(body: 'Built in 7 days with Python.')
minidriver.points.create!(body: 'Used GPIO pins to connect to camera, ultrasonic sensors, RC controller, and 2 Raspberry Pis.')
minidriver.points.create!(body: 'Trained Haar cascade classifier with OpenCV to recognize stop signs in video frames.')
minidriver.points.create!(body: 'Wrote lane detection algorithm in Python with Numpy and MatPlotLib libraries.')
minidriver.points.create!(body: 'Utilized TCP server, websockets, and multithreading.')

# ================================
# SKILLS

# Languages

Skill.create!(
  name: 'JavaScript',
  rating: 5,
  skill_type: 'Languages'
)

Skill.create!(
  name: 'Ruby',
  rating: 5,
  skill_type: 'Languages'
)

Skill.create!(
  name: 'Python',
  rating: 4,
  skill_type: 'Languages'
)

Skill.create!(
  name: 'Golang',
  rating: 3,
  skill_type: 'Languages'
)

Skill.create!(
  name: 'HTML5',
  rating: 5,
  skill_type: 'Languages'
)

Skill.create!(
  name: 'CSS3',
  rating: 5,
  skill_type: 'Languages'
)

Skill.create!(
  name: 'Jade',
  rating: 4,
  skill_type: 'Languages'
)

Skill.create!(
  name: 'Handlebars',
  rating: 4,
  skill_type: 'Languages'
)

Skill.create!(
  name: 'HAML',
  rating: 4,
  skill_type: 'Languages'
)

Skill.create!(
  name: 'LESS',
  rating: 5,
  skill_type: 'Languages'
)

Skill.create!(
  name: 'SASS',
  rating: 4,
  skill_type: 'Languages'
)

# Frameworks

Skill.create!(
  name: 'React.js',
  rating: 5,
  skill_type: 'Frameworks'
)

Skill.create!(
  name: 'Ruby on Rails',
  rating: 5,
  skill_type: 'Frameworks'
)

Skill.create!(
  name: 'Sinatra',
  rating: 5,
  skill_type: 'Frameworks'
)

Skill.create!(
  name: 'Express.js',
  rating: 5,
  skill_type: 'Frameworks'
)

Skill.create!(
  name: 'Node.js',
  rating: 5,
  skill_type: 'Frameworks'
)

Skill.create!(
  name: 'Materialize',
  rating: 5,
  skill_type: 'Frameworks'
)

Skill.create!(
  name: 'Bootstrap',
  rating: 4,
  skill_type: 'Frameworks'
)

Skill.create!(
  name: 'Vue.js',
  rating: 4,
  skill_type: 'Frameworks'
)

Skill.create!(
  name: 'Unity3D',
  rating: 4,
  skill_type: 'Frameworks'
)

Skill.create!(
  name: 'Angular2',
  rating: 3,
  skill_type: 'Frameworks'
)

# Libraries

Skill.create!(
  name: 'Redux',
  rating: 5,
  skill_type: 'Libraries'
)

Skill.create!(
  name: 'Webpack',
  rating: 5,
  skill_type: 'Libraries'
)

Skill.create!(
  name: 'React-router',
  rating: 5,
  skill_type: 'Libraries'
)

Skill.create!(
  name: 'Redux-saga',
  rating: 5,
  skill_type: 'Libraries'
)

Skill.create!(
  name: 'React-reselect',
  rating: 5,
  skill_type: 'Libraries'
)

Skill.create!(
  name: 'Immutable.js',
  rating: 5,
  skill_type: 'Libraries'
)

Skill.create!(
  name: 'Mocha',
  rating: 5,
  skill_type: 'Libraries'
)

Skill.create!(
  name: 'Chai',
  rating: 5,
  skill_type: 'Libraries'
)

Skill.create!(
  name: 'Sinon',
  rating: 5,
  skill_type: 'Libraries'
)

Skill.create!(
  name: 'Enzyme',
  rating: 5,
  skill_type: 'Libraries'
)

Skill.create!(
  name: 'Jest',
  rating: 5,
  skill_type: 'Libraries'
)

Skill.create!(
  name: 'jQuery',
  rating: 5,
  skill_type: 'Libraries'
)

Skill.create!(
  name: 'Tensorflow',
  rating: 4,
  skill_type: 'Libraries'
)

Skill.create!(
  name: 'OpenCV',
  rating: 4,
  skill_type: 'Libraries'
)

# Databases

Skill.create!(
  name: 'SQLite3',
  rating: 5,
  skill_type: 'Databases'
)

Skill.create!(
  name: 'PostgreSQL',
  rating: 5,
  skill_type: 'Databases'
)

Skill.create!(
  name: 'MongoDB',
  rating: 5,
  skill_type: 'Databases'
)

# Other

Skill.create!(
  name: 'Git',
  rating: 5,
  skill_type: 'Other Skills'
)

Skill.create!(
  name: 'TDD',
  rating: 5,
  skill_type: 'Other Skills'
)

Skill.create!(
  name: 'BDD',
  rating: 5,
  skill_type: 'Other Skills'
)

Skill.create!(
  name: 'MVC',
  rating: 5,
  skill_type: 'Other Skills'
)

Skill.create!(
  name: 'AWS',
  rating: 5,
  skill_type: 'Other Skills'
)

Skill.create!(
  name: 'Heroku',
  rating: 5,
  skill_type: 'Other Skills'
)

Skill.create!(
  name: 'English',
  rating: 5,
  skill_type: 'Other Skills'
)

Skill.create!(
  name: 'Italian',
  rating: 5,
  skill_type: 'Other Skills'
)

Skill.create!(
  name: 'Dutch',
  rating: 4,
  skill_type: 'Other Skills'
)

Skill.create!(
  name: 'Spanish',
  rating: 3,
  skill_type: 'Other Skills'
)

# Life Cards
# ===================================

# COLORADO
Lifecard.create!(
  image: 'colorado.jpg',
  location: 'Colorado',
  years: '1993-2011',
  para1: 'I was born and raised in Colorado. In high school, when I wasn\'t skiing the slopes of Vail or Winter Park, I was either studying for my 7 AP classes or working 35+ hours per week at a local hospital.',
  para2: 'While I loved the nature in Colorado, I deeply wanted to explore and learn about the various perspectives in the world - an education that would require learning outside a classroom.',
  para3: 'I applied only to one university (an American university in Rome, Italy) and was accepted. So I packed my bags and got ready to leave for the other side of the planet.'
)

# ITALY
Lifecard.create!(
  image: 'italy.jpg',
  location: 'Italy',
  years: '2011-2015',
  para1: "I moved to Italy right after high school where I attended an American university in Rome. While I traveled all around Italy and 10+ other countries in Europe during my 4 years at the university, my studies were rigorous as I took enough courses to obtain both a Bachelor's of Arts in International Affairs and International Business.",
  para2: 'While in Italy, I taught myself Italian when socializing with friends there. I also met my Dutch wife in the process, so I decided to learn Dutch as well.',
  para3: "When I wasn't studying, I created How2Bee.com with my friend from Kenya. Despite the website getting over 12,000 visitors in less than 3 weeks, WordPress proved very frustrating to customize, which pushed me to reprogram the website using Ruby on Rails."
)

# NETHERLANDS
Lifecard.create!(
  image: 'netherlands.jpg',
  location: 'Netherlands',
  years: '2015-2016',
  para1: 'After I graduated from the American university in Rome, my wife and I moved to the Netherlands. There I worked as the Marketing Manager of a tech startup that teaches kids how to code.',
  para2: 'As we waited for my wife\'s US Visa, I became interested in programming. At one point, my wife and I both started a Ruby on Rails online bootcamp - and we were immediately hooked.',
  para3: 'In less than 1.5 months, we created 8 Rails projects and 4 Unity video games. We fell in love with coding. So I decided to refine my skills at Dev Bootcamp in San Francisco.'
)

# SAN FRANCISCO
Lifecard.create!(
  image: 'sf.jpg',
  location: 'San Francisco',
  years: '2016',
  para1: 'While studying at Dev Bootcamp, there wasn\'t more than 10 hours that went by (including the weekends) that I wasn\'t coding. I pushed myself to build at least one project per week, and it paid off.',
  para2: 'At the end of the bootcamp, I had built over 20+ projects, most of which use different technologies that I had to learn in only a couple of days.',
  para3: 'For the final project, I was the team lead to build a self-driving RC car using recurrent neural networks, Raspberry Pis, Python, and many machine learning libraries.'
)
