// ============================================================
// MOCK DATA - Structured exactly like real Supabase DB tables
// Replace these with actual Supabase queries when ready
// ============================================================

export const CATEGORIES = [
  { id: 1, name: "General Knowledge", icon: "🌍", color: "#6366f1", description: "Test your everyday knowledge", questionCount: 10, difficulty: "Mixed" },
  { id: 2, name: "Science",            icon: "🔬", color: "#06b6d4", description: "Explore the world of science", questionCount: 10, difficulty: "Medium" },
  { id: 3, name: "Technology",         icon: "💻", color: "#8b5cf6", description: "Stay ahead in tech",           questionCount: 10, difficulty: "Hard" },
  { id: 4, name: "Sports",             icon: "⚽", color: "#f59e0b", description: "For the sports enthusiast",    questionCount: 10, difficulty: "Easy" },
  { id: 5, name: "History", icon: "📜", color: "#ef4444", description: "Dive into the past", questionCount: 30, difficulty: "Medium" },
  { id: 6, name: "Mathematics", icon: "➗", color: "#10b981", description: "Test your math skills", questionCount: 30, difficulty: "Hard" },
  { id: 7, name: "Geography", icon: "🗺️", color: "#3b82f6", description: "Know your world", questionCount: 30, difficulty: "Mixed" },
  { id: 8, name: "Movies", icon: "🎬", color: "#ec4899", description: "Cinema & entertainment", questionCount: 30, difficulty: "Easy" },
  { id: 9,  name: "Geography Advanced", icon: "🌎", color: "#3b82f6", description: "Deep world geography", questionCount: 30, difficulty: "Medium" },

  { id: 10, name: "Indian Polity", icon: "🏛️", color: "#ef4444", description: "Indian constitution & politics", questionCount: 30, difficulty: "Hard" },

  { id: 11, name: "Economy", icon: "💰", color: "#10b981", description: "Economics & finance basics", questionCount: 30, difficulty: "Medium" },

  { id: 12, name: "Current Affairs", icon: "📰", color: "#f59e0b", description: "Latest global updates", questionCount: 30, difficulty: "Mixed" },

  { id: 13, name: "Mathematics Advanced", icon: "➗", color: "#6366f1", description: "Advanced math concepts", questionCount: 30, difficulty: "Hard" },

  { id: 14, name: "Physics", icon: "⚛️", color: "#06b6d4", description: "Concepts of physics", questionCount: 30, difficulty: "Hard" },

  { id: 15, name: "Chemistry", icon: "🧪", color: "#8b5cf6", description: "Chemical world", questionCount: 30, difficulty: "Medium" },

  { id: 16, name: "Biology", icon: "🧬", color: "#22c55e", description: "Life sciences", questionCount: 30, difficulty: "Medium" },

  { id: 17, name: "Computer Science", icon: "💻", color: "#0ea5e9", description: "Core CS concepts", questionCount: 30, difficulty: "Hard" },

  { id: 18, name: "Programming", icon: "👨‍💻", color: "#a855f7", description: "Coding fundamentals", questionCount: 30, difficulty: "Hard" },

  { id: 19, name: "Java", icon: "☕", color: "#f97316", description: "Java programming", questionCount: 30, difficulty: "Hard" },

  { id: 20, name: "Web Development", icon: "🌐", color: "#14b8a6", description: "Frontend & backend", questionCount: 30, difficulty: "Medium" },

  { id: 21, name: "Cyber Security", icon: "🔐", color: "#dc2626", description: "Security & hacking basics", questionCount: 30, difficulty: "Hard" },

  { id: 22, name: "Space & Astronomy", icon: "🚀", color: "#7c3aed", description: "Universe & space science", questionCount: 30, difficulty: "Medium" },

  { id: 23, name: "Environment", icon: "🌱", color: "#16a34a", description: "Nature & climate", questionCount: 30, difficulty: "Easy" },

  { id: 24, name: "Business & Startups", icon: "📈", color: "#facc15", description: "Entrepreneurship & companies", questionCount: 30, difficulty: "Medium" },

  { id: 25, name: "English Grammar", icon: "📖", color: "#2563eb", description: "Grammar & vocabulary", questionCount: 30, difficulty: "Easy" },

  { id: 26, name: "Logical Reasoning", icon: "🧠", color: "#9333ea", description: "Brain teasers & logic", questionCount: 30, difficulty: "Medium" },

  { id: 27, name: "Aptitude", icon: "📊", color: "#0891b2", description: "Quantitative aptitude", questionCount: 30, difficulty: "Medium" },

  { id: 28, name: "Indian Culture", icon: "🪔", color: "#ea580c", description: "Traditions & heritage", questionCount: 30, difficulty: "Easy" },

  { id: 29, name: "World Facts", icon: "🌍", color: "#0284c7", description: "Interesting global facts", questionCount: 30, difficulty: "Mixed" },

  { id: 30, name: "Inventions", icon: "💡", color: "#ca8a04", description: "Discoveries & inventions", questionCount: 30, difficulty: "Medium" },

  { id: 31, name: "Famous Personalities", icon: "👤", color: "#db2777", description: "Important people", questionCount: 30, difficulty: "Easy" },

  { id: 32, name: "Books & Authors", icon: "📚", color: "#4f46e5", description: "Literature & writers", questionCount: 30, difficulty: "Medium" },
];


export type Question = {
  id: number;
  category_id: number;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: "A" | "B" | "C" | "D";
  explanation: string;
};

export const QUESTIONS: Record<number, Question[]> = {
  1: [
    { id: 1,  category_id: 1, question: "What is the capital of Australia?",             option_a: "Sydney",    option_b: "Melbourne", option_c: "Canberra",   option_d: "Brisbane",  correct_answer: "C", explanation: "Canberra is the capital city of Australia, chosen as a compromise between Sydney and Melbourne." },
    { id: 2,  category_id: 1, question: "How many continents are there on Earth?",        option_a: "5",         option_b: "6",         option_c: "7",          option_d: "8",         correct_answer: "C", explanation: "There are 7 continents: Africa, Antarctica, Asia, Australia, Europe, North America, and South America." },
    { id: 3,  category_id: 1, question: "Who painted the Mona Lisa?",                     option_a: "Van Gogh",  option_b: "Picasso",   option_c: "Da Vinci",   option_d: "Raphael",   correct_answer: "C", explanation: "Leonardo da Vinci painted the Mona Lisa between 1503 and 1519." },
    { id: 4,  category_id: 1, question: "What is the largest ocean on Earth?",            option_a: "Atlantic",  option_b: "Indian",    option_c: "Arctic",     option_d: "Pacific",   correct_answer: "D", explanation: "The Pacific Ocean is the largest, covering more than 60 million square miles." },
    { id: 5,  category_id: 1, question: "Which country has the most natural lakes?",      option_a: "USA",       option_b: "Canada",    option_c: "Russia",     option_d: "Brazil",    correct_answer: "B", explanation: "Canada has over 60% of the world's natural lakes." },
    { id: 6,  category_id: 1, question: "What is the hardest natural substance?",         option_a: "Gold",      option_b: "Iron",      option_c: "Diamond",    option_d: "Platinum",  correct_answer: "C", explanation: "Diamond is the hardest natural substance known, scoring 10 on the Mohs scale." },
    { id: 7,  category_id: 1, question: "How many bones are in the adult human body?",   option_a: "196",       option_b: "206",       option_c: "216",        option_d: "226",       correct_answer: "B", explanation: "An adult human body has 206 bones." },
    { id: 8,  category_id: 1, question: "Which planet is known as the Red Planet?",       option_a: "Venus",     option_b: "Jupiter",   option_c: "Mars",       option_d: "Saturn",    correct_answer: "C", explanation: "Mars is called the Red Planet due to iron oxide (rust) on its surface." },
    { id: 9,  category_id: 1, question: "What is the longest river in the world?",        option_a: "Amazon",    option_b: "Nile",      option_c: "Yangtze",    option_d: "Mississippi",correct_answer: "B", explanation: "The Nile River, at approximately 6,650 km, is the longest river in the world." },
    { id: 10, category_id: 1, question: "Which element has the symbol 'Au'?",             option_a: "Silver",    option_b: "Aluminum",  option_c: "Argon",      option_d: "Gold",      correct_answer: "D", explanation: "Au comes from the Latin word 'aurum', meaning gold." },
  ],
  2: [
    { id: 11, category_id: 2, question: "What is the speed of light?",                    option_a: "299,792 km/s", option_b: "199,792 km/s", option_c: "399,792 km/s", option_d: "499,792 km/s", correct_answer: "A", explanation: "The speed of light in a vacuum is approximately 299,792 kilometers per second." },
    { id: 12, category_id: 2, question: "DNA stands for?",                                option_a: "Deoxyribonucleic Acid", option_b: "Dioxyribonucleic Acid", option_c: "Deoxyribose Nucleic Acid", option_d: "None of the above", correct_answer: "A", explanation: "DNA stands for Deoxyribonucleic Acid, the molecule that carries genetic information." },
    { id: 13, category_id: 2, question: "How many chromosomes do humans have?",           option_a: "44",        option_b: "46",        option_c: "48",         option_d: "42",        correct_answer: "B", explanation: "Humans have 46 chromosomes arranged in 23 pairs." },
    { id: 14, category_id: 2, question: "What is the chemical formula for water?",        option_a: "HO",        option_b: "H2O2",      option_c: "H2O",        option_d: "HO2",       correct_answer: "C", explanation: "Water is composed of two hydrogen atoms bonded to one oxygen atom: H2O." },
    { id: 15, category_id: 2, question: "Which gas do plants absorb for photosynthesis?", option_a: "Oxygen",    option_b: "Nitrogen",  option_c: "Carbon Dioxide", option_d: "Hydrogen", correct_answer: "C", explanation: "Plants absorb carbon dioxide (CO2) during photosynthesis." },
    { id: 16, category_id: 2, question: "What is the powerhouse of the cell?",            option_a: "Nucleus",   option_b: "Ribosome",  option_c: "Golgi Body", option_d: "Mitochondria", correct_answer: "D", explanation: "Mitochondria produce ATP, the energy currency of the cell." },
    { id: 17, category_id: 2, question: "What force keeps planets in orbit?",             option_a: "Magnetism", option_b: "Gravity",   option_c: "Friction",   option_d: "Inertia",   correct_answer: "B", explanation: "Gravity is the force that keeps planets in orbit around the Sun." },
    { id: 18, category_id: 2, question: "What is the atomic number of Carbon?",           option_a: "4",         option_b: "6",         option_c: "8",          option_d: "12",        correct_answer: "B", explanation: "Carbon has atomic number 6, meaning it has 6 protons in its nucleus." },
    { id: 19, category_id: 2, question: "What type of energy does the Sun produce?",      option_a: "Chemical",  option_b: "Nuclear Fission", option_c: "Nuclear Fusion", option_d: "Electrical", correct_answer: "C", explanation: "The Sun produces energy through nuclear fusion, combining hydrogen atoms into helium." },
    { id: 20, category_id: 2, question: "How many planets are in the solar system?",      option_a: "7",         option_b: "8",         option_c: "9",          option_d: "10",        correct_answer: "B", explanation: "There are 8 planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune." },
  ],
  3: [
    { id: 21, category_id: 3, question: "Who co-founded Apple Inc.?",                     option_a: "Bill Gates", option_b: "Steve Jobs", option_c: "Elon Musk", option_d: "Jeff Bezos", correct_answer: "B", explanation: "Steve Jobs co-founded Apple Inc. with Steve Wozniak and Ronald Wayne in 1976." },
    { id: 22, category_id: 3, question: "What does HTML stand for?",                      option_a: "HyperText Markup Language", option_b: "HighText Machine Language", option_c: "Hyperloop Tech Markup", option_d: "HyperTech Markup Language", correct_answer: "A", explanation: "HTML stands for HyperText Markup Language, the standard language for web pages." },
    { id: 23, category_id: 3, question: "Which company created the Java language?",        option_a: "Microsoft", option_b: "Apple",     option_c: "Sun Microsystems", option_d: "IBM",  correct_answer: "C", explanation: "Java was created by Sun Microsystems in 1995, now owned by Oracle." },
    { id: 24, category_id: 3, question: "What does CPU stand for?",                       option_a: "Central Process Unit", option_b: "Central Processing Unit", option_c: "Computer Processing Unit", option_d: "Core Processing Unit", correct_answer: "B", explanation: "CPU stands for Central Processing Unit, the primary component of a computer." },
    { id: 25, category_id: 3, question: "Which language is used for styling web pages?",  option_a: "HTML",      option_b: "Python",    option_c: "CSS",        option_d: "Java",      correct_answer: "C", explanation: "CSS (Cascading Style Sheets) is used for describing the presentation of web pages." },
    { id: 26, category_id: 3, question: "What does 'HTTP' stand for?",                    option_a: "HyperText Transfer Protocol", option_b: "High Tech Transfer Protocol", option_c: "Host Transfer Transmission Protocol", option_d: "HyperTool Transfer Protocol", correct_answer: "A", explanation: "HTTP stands for HyperText Transfer Protocol, used for transmitting web data." },
    { id: 27, category_id: 3, question: "What is the full form of 'Wi-Fi'?",              option_a: "Wireless Fidelity", option_b: "Wide Fidelity", option_c: "Wireless Frequency", option_d: "Wide Frequency", correct_answer: "A", explanation: "Wi-Fi stands for Wireless Fidelity, a wireless networking technology." },
    { id: 28, category_id: 3, question: "Which is considered the first high-level language?", option_a: "FORTRAN", option_b: "COBOL",   option_c: "BASIC",      option_d: "Pascal",    correct_answer: "A", explanation: "FORTRAN (1957) is generally considered the first high-level programming language." },
    { id: 29, category_id: 3, question: "What does RAM stand for?",                       option_a: "Random Access Memory", option_b: "Read Access Memory", option_c: "Rapid Access Memory", option_d: "Random Array Memory", correct_answer: "A", explanation: "RAM stands for Random Access Memory, temporary storage that your computer uses actively." },
    { id: 30, category_id: 3, question: "Who invented the World Wide Web?",               option_a: "Bill Gates", option_b: "Tim Berners-Lee", option_c: "Vint Cerf", option_d: "Steve Jobs", correct_answer: "B", explanation: "Tim Berners-Lee invented the World Wide Web in 1989 at CERN." },
  ],
  4: [
    { id: 31, category_id: 4, question: "How many players are in a soccer team?",         option_a: "9",         option_b: "10",        option_c: "11",         option_d: "12",        correct_answer: "C", explanation: "A standard soccer (football) team has 11 players on the field." },
    { id: 32, category_id: 4, question: "Which country has won the most FIFA World Cups?",option_a: "Germany",   option_b: "Argentina", option_c: "Brazil",     option_d: "Italy",     correct_answer: "C", explanation: "Brazil has won the FIFA World Cup 5 times (1958, 1962, 1970, 1994, 2002)." },
    { id: 33, category_id: 4, question: "In tennis, what is a score of zero called?",    option_a: "Nil",       option_b: "Love",      option_c: "Zero",       option_d: "Blank",     correct_answer: "B", explanation: "In tennis, a score of zero is called 'Love'." },
    { id: 34, category_id: 4, question: "What is the highest score in bowling?",          option_a: "200",       option_b: "250",       option_c: "300",        option_d: "350",       correct_answer: "C", explanation: "A perfect game in bowling is 300, achieved by hitting 12 consecutive strikes." },
    { id: 35, category_id: 4, question: "How many holes are in a standard golf course?",  option_a: "9",         option_b: "18",        option_c: "27",         option_d: "36",        correct_answer: "B", explanation: "A standard golf course has 18 holes." },
    { id: 36, category_id: 4, question: "Which sport uses the term 'love' for scoring?",  option_a: "Badminton", option_b: "Squash",    option_c: "Tennis",     option_d: "Table Tennis", correct_answer: "C", explanation: "Tennis uses 'love' to denote a score of zero." },
    { id: 37, category_id: 4, question: "How long is a marathon?",                        option_a: "40 km",     option_b: "42.195 km", option_c: "45 km",      option_d: "38 km",     correct_answer: "B", explanation: "A marathon is exactly 42.195 kilometers (26.219 miles) long." },
    { id: 38, category_id: 4, question: "In basketball, how many points is a free throw?",option_a: "1",         option_b: "2",         option_c: "3",          option_d: "4",         correct_answer: "A", explanation: "A free throw is worth 1 point in basketball." },
    { id: 39, category_id: 4, question: "Which country invented cricket?",                option_a: "Australia", option_b: "India",     option_c: "England",    option_d: "South Africa", correct_answer: "C", explanation: "Cricket was invented in England in the 16th century." },
    { id: 40, category_id: 4, question: "How many sets needed to win men's Wimbledon?",   option_a: "2",         option_b: "3",         option_c: "4",          option_d: "5",         correct_answer: "B", explanation: "Men's singles at Wimbledon is best of 5 sets; the winner must win 3 sets." },
  ],
  5: [
  { id: 101, category_id: 5, question: "Who was the first President of the United States?", option_a: "Abraham Lincoln", option_b: "George Washington", option_c: "Thomas Jefferson", option_d: "John Adams", correct_answer: "B", explanation: "George Washington was the first U.S. President (1789–1797)." },

  { id: 102, category_id: 5, question: "In which year did World War II end?", option_a: "1943", option_b: "1945", option_c: "1947", option_d: "1950", correct_answer: "B", explanation: "World War II ended in 1945." },

  { id: 103, category_id: 5, question: "Who discovered America?", option_a: "Vasco da Gama", option_b: "Christopher Columbus", option_c: "Magellan", option_d: "Cook", correct_answer: "B", explanation: "Columbus reached America in 1492." },

  { id: 104, category_id: 5, question: "Which empire built the Colosseum?", option_a: "Greek", option_b: "Roman", option_c: "Ottoman", option_d: "Persian", correct_answer: "B", explanation: "The Roman Empire built the Colosseum." },

  { id: 105, category_id: 5, question: "Who was known as the Iron Man of India?", option_a: "Gandhi", option_b: "Nehru", option_c: "Sardar Patel", option_d: "Subhash Bose", correct_answer: "C", explanation: "Sardar Vallabhbhai Patel unified India." },

  // ADD MORE...
  { id: 106, category_id: 5, question: "When did India gain independence?", option_a: "1945", option_b: "1947", option_c: "1950", option_d: "1930", correct_answer: "B", explanation: "India became independent on August 15, 1947." },

  { id: 107, category_id: 5, question: "Who was the first Emperor of Rome?", option_a: "Julius Caesar", option_b: "Augustus", option_c: "Nero", option_d: "Caligula", correct_answer: "B", explanation: "Augustus was the first Roman Emperor." },

  { id: 108, category_id: 5, question: "What wall fell in 1989?", option_a: "China Wall", option_b: "Berlin Wall", option_c: "Hadrian Wall", option_d: "None", correct_answer: "B", explanation: "The Berlin Wall fell in 1989." },

  { id: 109, category_id: 5, question: "Who led the Salt March?", option_a: "Bhagat Singh", option_b: "Gandhi", option_c: "Nehru", option_d: "Tilak", correct_answer: "B", explanation: "Mahatma Gandhi led the Salt March in 1930." },

  { id: 110, category_id: 5, question: "Which war was fought between North and South USA?", option_a: "WW1", option_b: "Civil War", option_c: "Cold War", option_d: "Vietnam War", correct_answer: "B", explanation: "The American Civil War." },

  // Continue till 130
],
6: [
  { id: 131, category_id: 6, question: "What is 2 + 2?", option_a: "3", option_b: "4", option_c: "5", option_d: "6", correct_answer: "B", explanation: "2 + 2 = 4." },
  { id: 132, category_id: 6, question: "What is the square root of 16?", option_a: "2", option_b: "3", option_c: "4", option_d: "5", correct_answer: "C", explanation: "√16 = 4." },
  { id: 133, category_id: 6, question: "What is 10 × 5?", option_a: "50", option_b: "40", option_c: "60", option_d: "55", correct_answer: "A", explanation: "10 × 5 = 50." },
  { id: 134, category_id: 6, question: "What is 100 ÷ 4?", option_a: "20", option_b: "25", option_c: "30", option_d: "40", correct_answer: "B", explanation: "100 ÷ 4 = 25." },
  { id: 135, category_id: 6, question: "What is 7²?", option_a: "14", option_b: "49", option_c: "21", option_d: "28", correct_answer: "B", explanation: "7² = 49." },

  { id: 136, category_id: 6, question: "Value of π (approx)?", option_a: "2.14", option_b: "3.14", option_c: "4.14", option_d: "3.41", correct_answer: "B", explanation: "π ≈ 3.14." },
  { id: 137, category_id: 6, question: "What is 15% of 200?", option_a: "20", option_b: "25", option_c: "30", option_d: "35", correct_answer: "C", explanation: "15% of 200 = 30." },
  { id: 138, category_id: 6, question: "What is 9 × 9?", option_a: "81", option_b: "72", option_c: "99", option_d: "90", correct_answer: "A", explanation: "9 × 9 = 81." },
  { id: 139, category_id: 6, question: "What is 144 ÷ 12?", option_a: "10", option_b: "11", option_c: "12", option_d: "13", correct_answer: "C", explanation: "144 ÷ 12 = 12." },
  { id: 140, category_id: 6, question: "What is 3³?", option_a: "6", option_b: "9", option_c: "27", option_d: "18", correct_answer: "C", explanation: "3³ = 27." },

  { id: 141, category_id: 6, question: "What is 50% of 80?", option_a: "30", option_b: "40", option_c: "50", option_d: "60", correct_answer: "B", explanation: "50% of 80 = 40." },
  { id: 142, category_id: 6, question: "What is 8 × 7?", option_a: "54", option_b: "56", option_c: "64", option_d: "48", correct_answer: "B", explanation: "8 × 7 = 56." },
  { id: 143, category_id: 6, question: "What is 1/2 of 50?", option_a: "20", option_b: "25", option_c: "30", option_d: "35", correct_answer: "B", explanation: "Half of 50 = 25." },
  { id: 144, category_id: 6, question: "What is 6²?", option_a: "12", option_b: "18", option_c: "36", option_d: "24", correct_answer: "C", explanation: "6² = 36." },
  { id: 145, category_id: 6, question: "What is 200 − 75?", option_a: "100", option_b: "115", option_c: "125", option_d: "150", correct_answer: "C", explanation: "200 − 75 = 125." },

  { id: 146, category_id: 6, question: "What is 11 × 11?", option_a: "121", option_b: "111", option_c: "131", option_d: "101", correct_answer: "A", explanation: "11 × 11 = 121." },
  { id: 147, category_id: 6, question: "What is 90 ÷ 9?", option_a: "9", option_b: "10", option_c: "11", option_d: "12", correct_answer: "B", explanation: "90 ÷ 9 = 10." },
  { id: 148, category_id: 6, question: "What is 5³?", option_a: "15", option_b: "25", option_c: "125", option_d: "100", correct_answer: "C", explanation: "5³ = 125." },
  { id: 149, category_id: 6, question: "What is 18 × 2?", option_a: "36", option_b: "28", option_c: "38", option_d: "40", correct_answer: "A", explanation: "18 × 2 = 36." },
  { id: 150, category_id: 6, question: "What is 75 ÷ 5?", option_a: "10", option_b: "15", option_c: "20", option_d: "25", correct_answer: "B", explanation: "75 ÷ 5 = 15." },
],
7: [
  { id: 151, category_id: 7, question: "Which is the largest continent?", option_a: "Africa", option_b: "Asia", option_c: "Europe", option_d: "Australia", correct_answer: "B", explanation: "Asia is the largest continent." },
  { id: 152, category_id: 7, question: "Which is the longest river?", option_a: "Amazon", option_b: "Nile", option_c: "Yangtze", option_d: "Mississippi", correct_answer: "B", explanation: "Nile is longest." },
  { id: 153, category_id: 7, question: "Capital of India?", option_a: "Mumbai", option_b: "Delhi", option_c: "Chennai", option_d: "Kolkata", correct_answer: "B", explanation: "New Delhi is the capital." },
  { id: 154, category_id: 7, question: "Largest ocean?", option_a: "Atlantic", option_b: "Indian", option_c: "Pacific", option_d: "Arctic", correct_answer: "C", explanation: "Pacific Ocean is largest." },
  { id: 155, category_id: 7, question: "Mount Everest is in?", option_a: "India", option_b: "Nepal", option_c: "China", option_d: "Bhutan", correct_answer: "B", explanation: "Everest lies in Nepal." },

  { id: 156, category_id: 7, question: "Smallest continent?", option_a: "Europe", option_b: "Australia", option_c: "Antarctica", option_d: "South America", correct_answer: "B", explanation: "Australia is smallest." },
  { id: 157, category_id: 7, question: "Desert largest?", option_a: "Sahara", option_b: "Gobi", option_c: "Thar", option_d: "Kalahari", correct_answer: "A", explanation: "Sahara is largest hot desert." },
  { id: 158, category_id: 7, question: "Capital of USA?", option_a: "New York", option_b: "Washington DC", option_c: "Los Angeles", option_d: "Chicago", correct_answer: "B", explanation: "Washington DC." },
  { id: 159, category_id: 7, question: "Which country has most population?", option_a: "India", option_b: "China", option_c: "USA", option_d: "Indonesia", correct_answer: "A", explanation: "India currently has highest population." },
  { id: 160, category_id: 7, question: "Which is coldest continent?", option_a: "Europe", option_b: "Antarctica", option_c: "Asia", option_d: "Australia", correct_answer: "B", explanation: "Antarctica is coldest." },

  // continue pattern till 180
],

8: [
  { id: 181, category_id: 8, question: "Who directed Titanic?", option_a: "Spielberg", option_b: "James Cameron", option_c: "Nolan", option_d: "Scorsese", correct_answer: "B", explanation: "James Cameron directed Titanic." },
  { id: 182, category_id: 8, question: "Which movie has character Iron Man?", option_a: "DC", option_b: "Marvel", option_c: "Sony", option_d: "Pixar", correct_answer: "B", explanation: "Iron Man is Marvel character." },
  { id: 183, category_id: 8, question: "Which Bollywood actor is King Khan?", option_a: "Salman", option_b: "Aamir", option_c: "Shah Rukh Khan", option_d: "Akshay", correct_answer: "C", explanation: "SRK is King Khan." },
  { id: 184, category_id: 8, question: "Which movie won Oscar 2023?", option_a: "RRR", option_b: "Everything Everywhere All at Once", option_c: "Avatar", option_d: "Top Gun", correct_answer: "B", explanation: "It won Best Picture." },
  { id: 185, category_id: 8, question: "Who played Spider-Man (MCU)?", option_a: "Andrew Garfield", option_b: "Tom Holland", option_c: "Tobey Maguire", option_d: "Chris Evans", correct_answer: "B", explanation: "Tom Holland in MCU." },

  { id: 186, category_id: 8, question: "Which Indian movie got Oscar song award?", option_a: "KGF", option_b: "RRR", option_c: "Pathaan", option_d: "Dangal", correct_answer: "B", explanation: "RRR's Naatu Naatu won Oscar." },
  { id: 187, category_id: 8, question: "Who directed Inception?", option_a: "Nolan", option_b: "Spielberg", option_c: "Cameron", option_d: "Tarantino", correct_answer: "A", explanation: "Christopher Nolan." },
  { id: 188, category_id: 8, question: "Which movie has Joker?", option_a: "Marvel", option_b: "DC", option_c: "Pixar", option_d: "Universal", correct_answer: "B", explanation: "Joker is DC character." },
  { id: 189, category_id: 8, question: "Which is highest grossing movie?", option_a: "Titanic", option_b: "Avatar", option_c: "Endgame", option_d: "Frozen", correct_answer: "B", explanation: "Avatar is highest grossing." },
  { id: 190, category_id: 8, question: "Who is Bollywood Mr. Perfectionist?", option_a: "Salman", option_b: "Aamir Khan", option_c: "Akshay", option_d: "Ranbir", correct_answer: "B", explanation: "Aamir Khan." },

  // continue till 210
] ,
9: [
  { id: 211, category_id: 9, question: "Which country has the most time zones?", option_a: "USA", option_b: "Russia", option_c: "France", option_d: "China", correct_answer: "C", explanation: "France has the most time zones due to overseas territories." },
  { id: 212, category_id: 9, question: "Which is the deepest ocean trench?", option_a: "Mariana Trench", option_b: "Tonga Trench", option_c: "Java Trench", option_d: "Puerto Rico Trench", correct_answer: "A", explanation: "Mariana Trench is the deepest." },
  { id: 213, category_id: 9, question: "Which river flows through Egypt?", option_a: "Amazon", option_b: "Nile", option_c: "Danube", option_d: "Yangtze", correct_answer: "B", explanation: "Nile flows through Egypt." },
  { id: 214, category_id: 9, question: "Largest island in the world?", option_a: "Greenland", option_b: "Australia", option_c: "Madagascar", option_d: "Borneo", correct_answer: "A", explanation: "Greenland is largest island." },
  { id: 215, category_id: 9, question: "Which country is both in Europe and Asia?", option_a: "Turkey", option_b: "Germany", option_c: "France", option_d: "Spain", correct_answer: "A", explanation: "Turkey spans two continents." },
],
10: [
  { id: 221, category_id: 10, question: "Who is the head of state in India?", option_a: "Prime Minister", option_b: "President", option_c: "Chief Justice", option_d: "Governor", correct_answer: "B", explanation: "President is head of state." },
  { id: 222, category_id: 10, question: "Indian Constitution came into force in?", option_a: "1947", option_b: "1950", option_c: "1952", option_d: "1949", correct_answer: "B", explanation: "26 Jan 1950." },
  { id: 223, category_id: 10, question: "How many fundamental rights?", option_a: "5", option_b: "6", option_c: "7", option_d: "8", correct_answer: "B", explanation: "6 fundamental rights." },
  { id: 224, category_id: 10, question: "Who appoints the Prime Minister?", option_a: "President", option_b: "Parliament", option_c: "Chief Justice", option_d: "People", correct_answer: "A", explanation: "President appoints PM." },
  { id: 225, category_id: 10, question: "Lok Sabha tenure?", option_a: "4 years", option_b: "5 years", option_c: "6 years", option_d: "3 years", correct_answer: "B", explanation: "5 years." },
],
11: [
  { id: 231, category_id: 11, question: "GDP stands for?", option_a: "Gross Domestic Product", option_b: "General Domestic Product", option_c: "Global Data Product", option_d: "Gross Data Product", correct_answer: "A", explanation: "GDP = Gross Domestic Product." },
  { id: 232, category_id: 11, question: "Who controls monetary policy in India?", option_a: "Finance Ministry", option_b: "RBI", option_c: "SEBI", option_d: "NITI Aayog", correct_answer: "B", explanation: "RBI controls it." },
  { id: 233, category_id: 11, question: "Inflation means?", option_a: "Price decrease", option_b: "Price increase", option_c: "Stable price", option_d: "Tax rise", correct_answer: "B", explanation: "Inflation = price rise." },
],
12: [
  { id: 241, category_id: 12, question: "G20 Summit 2023 held in?", option_a: "USA", option_b: "India", option_c: "China", option_d: "UK", correct_answer: "B", explanation: "Held in India." },
  { id: 242, category_id: 12, question: "Chandrayaan-3 belongs to?", option_a: "NASA", option_b: "ISRO", option_c: "ESA", option_d: "SpaceX", correct_answer: "B", explanation: "ISRO mission." },
],
13: [
  { id: 251, category_id: 13, question: "Derivative of x²?", option_a: "x", option_b: "2x", option_c: "x²", option_d: "2", correct_answer: "B", explanation: "d/dx x² = 2x." },
  { id: 252, category_id: 13, question: "Value of log₁₀(100)?", option_a: "1", option_b: "2", option_c: "10", option_d: "0", correct_answer: "B", explanation: "log10(100)=2." },
],
14: [
  { id: 261, category_id: 14, question: "Unit of force?", option_a: "Newton", option_b: "Joule", option_c: "Watt", option_d: "Pascal", correct_answer: "A", explanation: "Force unit is Newton." },
],
15: [
  { id: 271, category_id: 15, question: "Atomic number of Oxygen?", option_a: "6", option_b: "7", option_c: "8", option_d: "9", correct_answer: "C", explanation: "Oxygen = 8." },
],
16: [
  { id: 281, category_id: 16, question: "Basic unit of life?", option_a: "Cell", option_b: "Atom", option_c: "Organ", option_d: "Tissue", correct_answer: "A", explanation: "Cell is basic unit." },
],
17: [
  { id: 291, category_id: 17, question: "What is algorithm?", option_a: "Code", option_b: "Step-by-step solution", option_c: "Language", option_d: "Compiler", correct_answer: "B", explanation: "Algorithm is step-by-step process." },
],
18: [
  { id: 301, category_id: 18, question: "Which is a programming language?", option_a: "HTML", option_b: "CSS", option_c: "Java", option_d: "HTTP", correct_answer: "C", explanation: "Java is programming language." },
],
19: [
  { id: 311, category_id: 19, question: "Java is?", option_a: "Compiled", option_b: "Interpreted", option_c: "Both", option_d: "None", correct_answer: "C", explanation: "Java is both compiled and interpreted." },
],
20: [
  { id: 321, category_id: 20, question: "HTML used for?", option_a: "Structure", option_b: "Style", option_c: "Logic", option_d: "Database", correct_answer: "A", explanation: "HTML = structure." },
],
21: [
  { id: 331, category_id: 21, question: "Phishing is?", option_a: "Attack", option_b: "Game", option_c: "Software", option_d: "Protocol", correct_answer: "A", explanation: "Phishing is cyber attack." },
],
22: [
  { id: 341, category_id: 22, question: "Closest planet to Sun?", option_a: "Venus", option_b: "Mercury", option_c: "Earth", option_d: "Mars", correct_answer: "B", explanation: "Mercury is closest." },
],
23: [
  { id: 351, category_id: 23, question: "Ozone layer protects from?", option_a: "UV rays", option_b: "Heat", option_c: "Wind", option_d: "Rain", correct_answer: "A", explanation: "Protects from UV." },
],
24: [
  { id: 361, category_id: 24, question: "Startup means?", option_a: "Old company", option_b: "New business", option_c: "Government job", option_d: "NGO", correct_answer: "B", explanation: "Startup = new business." },
],
25: [
  { id: 371, category_id: 25, question: "Noun is?", option_a: "Action", option_b: "Name", option_c: "Feeling", option_d: "Quality", correct_answer: "B", explanation: "Noun = name." },
],
26: [
  { id: 381, category_id: 26, question: "Odd one: 2,4,6,9", option_a: "2", option_b: "4", option_c: "6", option_d: "9", correct_answer: "D", explanation: "9 is odd." },
],
27: [
  { id: 391, category_id: 27, question: "Speed formula?", option_a: "D/T", option_b: "T/D", option_c: "D×T", option_d: "None", correct_answer: "A", explanation: "Speed = Distance/Time." },
],
28: [
  { id: 401, category_id: 28, question: "Classical dance of Tamil Nadu?", option_a: "Kathak", option_b: "Bharatanatyam", option_c: "Odissi", option_d: "Kuchipudi", correct_answer: "B", explanation: "Bharatanatyam." },
],
29: [
  { id: 411, category_id: 29, question: "Largest country?", option_a: "USA", option_b: "China", option_c: "Russia", option_d: "India", correct_answer: "C", explanation: "Russia largest." },
],
30: [
  { id: 421, category_id: 30, question: "Telephone invented by?", option_a: "Edison", option_b: "Bell", option_c: "Tesla", option_d: "Newton", correct_answer: "B", explanation: "Alexander Graham Bell." },
],
31: [
  { id: 431, category_id: 31, question: "Father of India?", option_a: "Nehru", option_b: "Gandhi", option_c: "Patel", option_d: "Bose", correct_answer: "B", explanation: "Mahatma Gandhi." },
],
32: [
  { id: 441, category_id: 32, question: "Harry Potter author?", option_a: "Rowling", option_b: "Tolkien", option_c: "Shakespeare", option_d: "Dan Brown", correct_answer: "A", explanation: "J.K. Rowling." },
]
};


export const LEADERBOARD = [
  { rank: 1,  name: "Priya Sharma",   avatar: "PS", score: 980, quizzes: 42, accuracy: 98 },
  { rank: 2,  name: "Arjun Patel",    avatar: "AP", score: 950, quizzes: 38, accuracy: 95 },
  { rank: 3,  name: "Riya Mehta",     avatar: "RM", score: 920, quizzes: 35, accuracy: 92 },
  { rank: 4,  name: "Dev Kumar",      avatar: "DK", score: 900, quizzes: 40, accuracy: 90 },
  { rank: 5,  name: "Sneha Joshi",    avatar: "SJ", score: 870, quizzes: 33, accuracy: 87 },
  { rank: 6,  name: "Rahul Singh",    avatar: "RS", score: 850, quizzes: 31, accuracy: 85 },
  { rank: 7,  name: "Anita Gupta",    avatar: "AG", score: 820, quizzes: 28, accuracy: 82 },
  { rank: 8,  name: "Vikram Nair",    avatar: "VN", score: 800, quizzes: 26, accuracy: 80 },
  { rank: 9,  name: "Pooja Verma",    avatar: "PV", score: 780, quizzes: 30, accuracy: 78 },
  { rank: 10, name: "Amit Desai",     avatar: "AD", score: 760, quizzes: 22, accuracy: 76 },
];

export const DASHBOARD_STATS = {
  totalAttempted: 24,
  averageScore: 76,
  bestCategory: "Technology",
  totalCorrect: 182,
  totalQuestions: 240,
  streak: 5,
  monthlyData: [
    { month: "Jan", score: 60, attempts: 3 },
    { month: "Feb", score: 65, attempts: 4 },
    { month: "Mar", score: 70, attempts: 3 },
    { month: "Apr", score: 68, attempts: 5 },
    { month: "May", score: 75, attempts: 4 },
    { month: "Jun", score: 80, attempts: 5 },
  ],
  categoryPerformance: [
    { category: "General Knowledge", score: 80 },
    { category: "Science",           score: 72 },
    { category: "Technology",        score: 88 },
    { category: "Sports",            score: 65 },
  ],
};
