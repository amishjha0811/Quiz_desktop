  // Quiz Questions Database
    const questions = {
      programming: [
        {
          question: "Which of the following is NOT a JavaScript data type?",
          options: ["String", "Boolean", "Float", "Number"],
          correct: 2
        },
        {
          question: "What does CSS stand for?",
          options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
          correct: 1
        },
        {
          question: "Which HTML tag is used to create a hyperlink?",
          options: ["<link>", "<href>", "<a>", "<url>"],
          correct: 2
        },
        {
          question: "What is the correct way to declare a variable in JavaScript?",
          options: ["var myVar;", "variable myVar;", "v myVar;", "declare myVar;"],
          correct: 0
        },
        {
          question: "Which of these is a Python web framework?",
          options: ["React", "Angular", "Django", "Vue"],
          correct: 2
        },
        {
          question: "What does SQL stand for?",
          options: ["Structured Query Language", "Standard Query Language", "Simple Query Language", "System Query Language"],
          correct: 0
        },
        {
          question: "Which method is used to add an element to the end of an array in JavaScript?",
          options: ["append()", "push()", "add()", "insert()"],
          correct: 1
        },
        {
          question: "What is the latest version of HTML?",
          options: ["HTML4", "HTML5", "HTML6", "XHTML"],
          correct: 1
        },
        {
          question: "Which of these is NOT a programming paradigm?",
          options: ["Object-Oriented", "Functional", "Procedural", "Conditional"],
          correct: 3
        },
        {
          question: "What does API stand for?",
          options: ["Application Programming Interface", "Advanced Programming Interface", "Automated Programming Interface", "Application Process Interface"],
          correct: 0
        },
        {
          question: "Which operator is used for string concatenation in Python?",
          options: ["&", "+", ".", "concat"],
          correct: 1
        },
        {
          question: "What is the purpose of the 'git clone' command?",
          options: ["Create a new repository", "Copy a repository", "Delete a repository", "Merge repositories"],
          correct: 1
        },
        {
          question: "Which of these is a NoSQL database?",
          options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
          correct: 2
        },
        {
          question: "What does IDE stand for?",
          options: ["Integrated Development Environment", "Internet Development Environment", "Internal Development Environment", "Interactive Development Environment"],
          correct: 0
        },
        {
          question: "Which HTTP status code indicates 'Not Found'?",
          options: ["200", "400", "404", "500"],
          correct: 2
        }
      ],
      science: [
        {
          question: "What is the chemical symbol for gold?",
          options: ["Go", "Gd", "Au", "Ag"],
          correct: 2
        },
        {
          question: "Which planet is known as the Red Planet?",
          options: ["Venus", "Mars", "Jupiter", "Saturn"],
          correct: 1
        },
        {
          question: "What is the speed of light in vacuum?",
          options: ["300,000 km/s", "299,792,458 m/s", "186,000 mph", "All of the above"],
          correct: 3
        },
        {
          question: "Which gas makes up about 78% of Earth's atmosphere?",
          options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
          correct: 2
        },
        {
          question: "What is the smallest unit of matter?",
          options: ["Molecule", "Atom", "Electron", "Proton"],
          correct: 1
        },
        // ...existing code...
        {
          question: "Which scientist developed the theory of relativity?",
          options: ["Newton", "Einstein", "Galileo", "Curie"],
          correct: 1
        },
        {
          question: "What is H2O commonly known as?",
          options: ["Oxygen", "Hydrogen", "Water", "Salt"],
          correct: 2
        },
        {
          question: "Which organelle is known as the powerhouse of the cell?",
          options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
          correct: 1
        },
        {
          question: "What is the boiling point of water at sea level?",
          options: ["100°C", "0°C", "50°C", "212°C"],
          correct: 0
        },
        {
          question: "Which particle has a negative charge?",
          options: ["Proton", "Neutron", "Electron", "Photon"],
          correct: 2
        },
        {
          question: "What is the main gas found in the air we breathe?",
          options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
          correct: 1
        },
        {
          question: "What is the center of an atom called?",
          options: ["Electron", "Nucleus", "Proton", "Neutron"],
          correct: 1
        },
        {
          question: "Which planet is closest to the Sun?",
          options: ["Venus", "Earth", "Mercury", "Mars"],
          correct: 2
        },
        {
          question: "What is the process by which plants make their food?",
          options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
          correct: 1
        },
        {
          question: "What is the largest organ in the human body?",
          options: ["Heart", "Liver", "Skin", "Lungs"],
          correct: 2
        }
      ],
      history: [
        {
          question: "Who was the first President of the United States?",
          options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
          correct: 1
        },
        {
          question: "In which year did World War II end?",
          options: ["1945", "1939", "1918", "1950"],
          correct: 0
        },
        {
          question: "Who discovered America?",
          options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "James Cook"],
          correct: 0
        },
        {
          question: "Which empire built the Colosseum?",
          options: ["Greek", "Roman", "Ottoman", "Persian"],
          correct: 1
        },
        {
          question: "Who was known as the Maid of Orléans?",
          options: ["Cleopatra", "Joan of Arc", "Queen Victoria", "Marie Curie"],
          correct: 1
        },
        {
          question: "The Great Wall is located in which country?",
          options: ["India", "China", "Japan", "Korea"],
          correct: 1
        },
        {
          question: "Who wrote the Declaration of Independence?",
          options: ["Benjamin Franklin", "Thomas Jefferson", "George Washington", "John Hancock"],
          correct: 1
        },
        {
          question: "Which civilization built Machu Picchu?",
          options: ["Aztec", "Inca", "Maya", "Olmec"],
          correct: 1
        },
        {
          question: "Who was the British Prime Minister during WWII?",
          options: ["Winston Churchill", "Neville Chamberlain", "Margaret Thatcher", "Tony Blair"],
          correct: 0
        },
        {
          question: "What was the name of the ship on which the Pilgrims traveled to America?",
          options: ["Santa Maria", "Mayflower", "Endeavour", "Discovery"],
          correct: 1
        }
      ],
      geography: [
        {
          question: "What is the largest continent?",
          options: ["Africa", "Asia", "Europe", "North America"],
          correct: 1
        },
        {
          question: "Which is the longest river in the world?",
          options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
          correct: 1
        },
        {
          question: "Mount Everest is located in which mountain range?",
          options: ["Andes", "Rockies", "Himalayas", "Alps"],
          correct: 2
        },
        {
          question: "What is the capital of Australia?",
          options: ["Sydney", "Melbourne", "Canberra", "Perth"],
          correct: 2
        },
        {
          question: "Which country has the most population?",
          options: ["India", "USA", "China", "Russia"],
          correct: 2
        },
        {
          question: "Which ocean is the largest?",
          options: ["Atlantic", "Indian", "Arctic", "Pacific"],
          correct: 3
        },
        {
          question: "What is the smallest country in the world?",
          options: ["Monaco", "Vatican City", "Nauru", "San Marino"],
          correct: 1
        },
        {
          question: "Which desert is the largest in the world?",
          options: ["Sahara", "Gobi", "Kalahari", "Arabian"],
          correct: 0
        },
        {
          question: "Which US state is known as the 'Sunshine State'?",
          options: ["California", "Florida", "Texas", "Arizona"],
          correct: 1
        },
        {
          question: "What is the capital of Japan?",
          options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
          correct: 2
        }
      ],
      sports: [
        {
          question: "How many players are there in a football (soccer) team?",
          options: ["9", "10", "11", "12"],
          correct: 2
        },
        {
          question: "Which country won the FIFA World Cup in 2018?",
          options: ["Brazil", "Germany", "France", "Argentina"],
          correct: 2
        },
        {
          question: "What is the national sport of Japan?",
          options: ["Karate", "Sumo Wrestling", "Judo", "Baseball"],
          correct: 1
        },
        {
          question: "How many rings are there in the Olympic symbol?",
          options: ["4", "5", "6", "7"],
          correct: 1
        },
        {
          question: "Who is known as the fastest man in the world?",
          options: ["Usain Bolt", "Tyson Gay", "Yohan Blake", "Justin Gatlin"],
          correct: 0
        },
        {
          question: "Which sport uses a shuttlecock?",
          options: ["Tennis", "Badminton", "Squash", "Table Tennis"],
          correct: 1
        },
        {
          question: "Which country is famous for the sport of cricket?",
          options: ["USA", "India", "China", "Russia"],
          correct: 1
        },
        {
          question: "In which sport would you perform a slam dunk?",
          options: ["Volleyball", "Basketball", "Tennis", "Football"],
          correct: 1
        },
        {
          question: "What is the maximum score in a single frame of snooker?",
          options: ["147", "155", "100", "120"],
          correct: 0
        },
        {
          question: "Which Grand Slam tennis tournament is played on grass?",
          options: ["Australian Open", "French Open", "Wimbledon", "US Open"],
          correct: 2
        }
      ],
      entertainment: [
        {
          question: "Who played Iron Man in the Marvel Cinematic Universe?",
          options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
          correct: 1
        },
        {
          question: "Which movie won the Oscar for Best Picture in 2020?",
          options: ["1917", "Joker", "Parasite", "Ford v Ferrari"],
          correct: 2
        },
        {
          question: "Who is known as the King of Pop?",
          options: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"],
          correct: 1
        },
        {
          question: "Which TV series features the Stark family?",
          options: ["Breaking Bad", "Game of Thrones", "Stranger Things", "The Crown"],
          correct: 1
        },
        {
          question: "What is the name of Harry Potter's pet owl?",
          options: ["Crookshanks", "Scabbers", "Hedwig", "Fawkes"],
          correct: 2
        },
        {
          question: "Who directed 'Jurassic Park'?",
          options: ["James Cameron", "Steven Spielberg", "George Lucas", "Peter Jackson"],
          correct: 1
        },
        {
          question: "Which singer is known for the song 'Shape of You'?",
          options: ["Ed Sheeran", "Justin Bieber", "Adele", "Taylor Swift"],
          correct: 0
        },
        {
          question: "Which animated movie features a snowman named Olaf?",
          options: ["Frozen", "Moana", "Tangled", "Brave"],
          correct: 0
        },
        {
          question: "Who is the main character in the video game series 'The Legend of Zelda'?",
          options: ["Mario", "Link", "Samus", "Kirby"],
          correct: 1
        },
        {
          question: "Which movie franchise features a character named Jack Sparrow?",
          options: ["Pirates of the Caribbean", "Indiana Jones", "Star Wars", "The Matrix"],
          correct: 0
        }
      ]
    };
    