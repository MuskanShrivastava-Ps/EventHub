const events = [
    {
        bookingId: "BK-1001",
        image: "https://picsum.photos/seed/event1/600/400",
        name: "AI & Machine Learning Summit",
        organizer: "TechNova Events",
        category: "Tech",
        date: "2026-11-05",
        time: "10:00 AM",
        venue: "Jio World Convention Centre, Mumbai",
        availableSeats: 320,
        ticketPrice: 1499,
        description: "A full-day summit on practical AI and machine learning, covering real-world deployments, model tooling and responsible AI.",
        schedule: [
            { time: "10:00 AM", activity: "Registration and Welcome" },
            { time: "11:00 AM", activity: "Keynote: AI in Production" },
            { time: "02:00 PM", activity: "Panel: Building Responsible AI" }
        ],
        speakers: [
            { name: "Dr. Ananya Rao", role: "Head of AI Research" },
            { name: "Vikram Shah", role: "ML Engineer" }
        ],
        organizerDetails: { name: "TechNova Events", email: "hello@technovaevents.in", phone: "+91 98200 11001" }
    },
    {
        bookingId: "BK-1002",
        image: "https://picsum.photos/seed/event2/600/400",
        name: "Cloud Computing Conference",
        organizer: "CloudCraft Network",
        category: "Tech",
        date: "2026-11-12",
        time: "09:30 AM",
        venue: "Bombay Exhibition Centre, Mumbai",
        availableSeats: 450,
        ticketPrice: 1299,
        description: "Explore cloud architecture, cost optimisation and multi-cloud strategies with engineers from leading cloud teams.",
        schedule: [
            { time: "09:30 AM", activity: "Check-in and Networking" },
            { time: "10:30 AM", activity: "Talk: Designing for Scale" },
            { time: "03:00 PM", activity: "Workshop: Serverless in Practice" }
        ],
        speakers: [
            { name: "Rohit Menon", role: "Cloud Architect" },
            { name: "Sneha Iyer", role: "DevOps Lead" }
        ],
        organizerDetails: { name: "CloudCraft Network", email: "contact@cloudcraft.in", phone: "+91 98200 11002" }
    },
    {
        bookingId: "BK-1003",
        image: "https://picsum.photos/seed/event3/600/400",
        name: "Cybersecurity Expo 2026",
        organizer: "SecureNet Forum",
        category: "Tech",
        date: "2026-11-19",
        time: "10:00 AM",
        venue: "Hyatt Regency, Pune",
        availableSeats: 210,
        ticketPrice: 1799,
        description: "Hands-on sessions and live demos on threat detection, ethical hacking and building secure applications.",
        schedule: [
            { time: "10:00 AM", activity: "Opening Keynote" },
            { time: "12:00 PM", activity: "Live Demo: Ethical Hacking" },
            { time: "03:30 PM", activity: "Panel: Future of Cyber Defence" }
        ],
        speakers: [
            { name: "Karan Malhotra", role: "Security Researcher" },
            { name: "Priya Nambiar", role: "CISO" }
        ],
        organizerDetails: { name: "SecureNet Forum", email: "info@securenetforum.in", phone: "+91 98200 11003" }
    },
    {
        bookingId: "BK-1004",
        image: "https://picsum.photos/seed/event4/600/400",
        name: "Web3 & Blockchain Meetup",
        organizer: "ChainWorks India",
        category: "Tech",
        date: "2026-11-26",
        time: "05:00 PM",
        venue: "WeWork Galaxy, Bengaluru",
        availableSeats: 120,
        ticketPrice: 499,
        description: "An evening meetup for developers and founders to discuss smart contracts, decentralised apps and the state of Web3.",
        schedule: [
            { time: "05:00 PM", activity: "Networking and Refreshments" },
            { time: "06:00 PM", activity: "Talk: Smart Contract Basics" },
            { time: "07:30 PM", activity: "Open Discussion" }
        ],
        speakers: [
            { name: "Aditya Kulkarni", role: "Blockchain Developer" },
            { name: "Meera Joshi", role: "Web3 Founder" }
        ],
        organizerDetails: { name: "ChainWorks India", email: "team@chainworks.in", phone: "+91 98200 11004" }
    },
    {
        bookingId: "BK-1005",
        image: "https://picsum.photos/seed/event5/600/400",
        name: "DevOps Days India",
        organizer: "OpsGuild",
        category: "Tech",
        date: "2026-12-03",
        time: "09:00 AM",
        venue: "Hitex Exhibition Center, Hyderabad",
        availableSeats: 380,
        ticketPrice: 1199,
        description: "Two tracks on CI/CD, observability and platform engineering, with case studies from fast-growing engineering teams.",
        schedule: [
            { time: "09:00 AM", activity: "Registration" },
            { time: "10:00 AM", activity: "Track 1: CI/CD at Scale" },
            { time: "02:00 PM", activity: "Track 2: Observability Deep Dive" }
        ],
        speakers: [
            { name: "Suresh Pillai", role: "Platform Engineer" },
            { name: "Nisha Verma", role: "SRE Manager" }
        ],
        organizerDetails: { name: "OpsGuild", email: "support@opsguild.in", phone: "+91 98200 11005" }
    },
    {
        bookingId: "BK-1006",
        image: "https://picsum.photos/seed/event6/600/400",
        name: "Startup Pitch Fest",
        organizer: "LaunchPad Mumbai",
        category: "Startup",
        date: "2026-11-07",
        time: "11:00 AM",
        venue: "Nehru Centre, Mumbai",
        availableSeats: 250,
        ticketPrice: 799,
        description: "Early-stage founders pitch to a panel of investors, followed by feedback sessions and open networking.",
        schedule: [
            { time: "11:00 AM", activity: "Welcome and Judges Introduction" },
            { time: "12:00 PM", activity: "Pitch Round" },
            { time: "04:00 PM", activity: "Results and Networking" }
        ],
        speakers: [
            { name: "Rahul Desai", role: "Angel Investor" },
            { name: "Tanvi Kapoor", role: "Startup Mentor" }
        ],
        organizerDetails: { name: "LaunchPad Mumbai", email: "pitch@launchpadmumbai.in", phone: "+91 98200 11006" }
    },
    {
        bookingId: "BK-1007",
        image: "https://picsum.photos/seed/event7/600/400",
        name: "Founders Connect Mixer",
        organizer: "Venture Circle",
        category: "Startup",
        date: "2026-11-14",
        time: "06:00 PM",
        venue: "The Leela Ambience, Gurugram",
        availableSeats: 90,
        ticketPrice: 1299,
        description: "An invite-style evening where founders, operators and investors meet, share lessons and find collaborators.",
        schedule: [
            { time: "06:00 PM", activity: "Welcome Drinks" },
            { time: "07:00 PM", activity: "Fireside Chat" },
            { time: "08:00 PM", activity: "Speed Networking" }
        ],
        speakers: [
            { name: "Aarav Singh", role: "Serial Entrepreneur" },
            { name: "Ishita Bansal", role: "VC Partner" }
        ],
        organizerDetails: { name: "Venture Circle", email: "connect@venturecircle.in", phone: "+91 98200 11007" }
    },
    {
        bookingId: "BK-1008",
        image: "https://picsum.photos/seed/event8/600/400",
        name: "Investor Demo Day",
        organizer: "SeedStage Capital",
        category: "Startup",
        date: "2026-11-21",
        time: "10:30 AM",
        venue: "T-Hub, Hyderabad",
        availableSeats: 160,
        ticketPrice: 999,
        description: "Ten shortlisted startups demo their products live to investors and industry partners.",
        schedule: [
            { time: "10:30 AM", activity: "Opening Remarks" },
            { time: "11:15 AM", activity: "Startup Demos" },
            { time: "03:00 PM", activity: "Investor Q&A" }
        ],
        speakers: [
            { name: "Nikhil Reddy", role: "Managing Partner" },
            { name: "Divya Menon", role: "Founder, FinEdge" }
        ],
        organizerDetails: { name: "SeedStage Capital", email: "demoday@seedstage.in", phone: "+91 98200 11008" }
    },
    {
        bookingId: "BK-1009",
        image: "https://picsum.photos/seed/event9/600/400",
        name: "Women in Startups Summit",
        organizer: "Rise Collective",
        category: "Startup",
        date: "2026-12-05",
        time: "09:30 AM",
        venue: "Taj Lands End, Mumbai",
        availableSeats: 280,
        ticketPrice: 1099,
        description: "Stories, panels and mentoring circles celebrating women founders and leaders in the startup ecosystem.",
        schedule: [
            { time: "09:30 AM", activity: "Registration and Breakfast" },
            { time: "10:30 AM", activity: "Keynote: Building Against the Odds" },
            { time: "01:30 PM", activity: "Mentoring Circles" }
        ],
        speakers: [
            { name: "Shreya Gupta", role: "Founder and CEO" },
            { name: "Lakshmi Narayan", role: "Investor" }
        ],
        organizerDetails: { name: "Rise Collective", email: "hello@risecollective.in", phone: "+91 98200 11009" }
    },
    {
        bookingId: "BK-1010",
        image: "https://picsum.photos/seed/event10/600/400",
        name: "Sunset Indie Music Fest",
        organizer: "BeatWave Entertainment",
        category: "Music",
        date: "2026-11-08",
        time: "04:00 PM",
        venue: "Jio Garden, Mumbai",
        availableSeats: 1500,
        ticketPrice: 1999,
        description: "An open-air festival featuring the best indie bands and singer-songwriters, with food stalls and art installations.",
        schedule: [
            { time: "04:00 PM", activity: "Gates Open" },
            { time: "05:30 PM", activity: "Opening Acts" },
            { time: "08:00 PM", activity: "Headliner Performance" }
        ],
        speakers: [
            { name: "The Local Train Co.", role: "Headliner Band" },
            { name: "Maya Sen", role: "Singer-Songwriter" }
        ],
        organizerDetails: { name: "BeatWave Entertainment", email: "tickets@beatwave.in", phone: "+91 98200 11010" }
    },
    {
        bookingId: "BK-1011",
        image: "https://picsum.photos/seed/event11/600/400",
        name: "Classical Raga Evenings",
        organizer: "Swarsangam Trust",
        category: "Music",
        date: "2026-11-15",
        time: "06:30 PM",
        venue: "Shanmukhananda Hall, Mumbai",
        availableSeats: 700,
        ticketPrice: 599,
        description: "An evening of Hindustani classical music with renowned vocalists and instrumentalists.",
        schedule: [
            { time: "06:30 PM", activity: "Opening Vocal Recital" },
            { time: "07:45 PM", activity: "Sitar and Tabla Jugalbandi" },
            { time: "09:00 PM", activity: "Closing Raga" }
        ],
        speakers: [
            { name: "Pt. Ramesh Joshi", role: "Hindustani Vocalist" },
            { name: "Ustad Farhan Khan", role: "Sitar Maestro" }
        ],
        organizerDetails: { name: "Swarsangam Trust", email: "info@swarsangam.org", phone: "+91 98200 11011" }
    },
    {
        bookingId: "BK-1012",
        image: "https://picsum.photos/seed/event12/600/400",
        name: "Electronic Night Live",
        organizer: "PulseBox Live",
        category: "Music",
        date: "2026-11-22",
        time: "08:00 PM",
        venue: "Mahalaxmi Racecourse, Mumbai",
        availableSeats: 2000,
        ticketPrice: 2499,
        description: "A high-energy night of electronic music with international and Indian DJs, lights and visuals.",
        schedule: [
            { time: "08:00 PM", activity: "Doors Open" },
            { time: "09:00 PM", activity: "Warm-Up DJ Sets" },
            { time: "11:00 PM", activity: "Main Stage Headliner" }
        ],
        speakers: [
            { name: "DJ Kairo", role: "Headliner" },
            { name: "Nova Beats", role: "Support DJ" }
        ],
        organizerDetails: { name: "PulseBox Live", email: "bookings@pulsebox.in", phone: "+91 98200 11012" }
    },
    {
        bookingId: "BK-1013",
        image: "https://picsum.photos/seed/event13/600/400",
        name: "Acoustic Jam Sessions",
        organizer: "The Open Mic Co.",
        category: "Music",
        date: "2026-12-06",
        time: "07:00 PM",
        venue: "Hard Rock Cafe, Pune",
        availableSeats: 140,
        ticketPrice: 399,
        description: "A relaxed evening of acoustic performances where artists and audience members jam together.",
        schedule: [
            { time: "07:00 PM", activity: "Open Mic Signups" },
            { time: "07:45 PM", activity: "Featured Artist Set" },
            { time: "09:00 PM", activity: "Group Jam" }
        ],
        speakers: [
            { name: "Arjun Patil", role: "Guitarist" },
            { name: "Riya Deshmukh", role: "Vocalist" }
        ],
        organizerDetails: { name: "The Open Mic Co.", email: "play@openmicco.in", phone: "+91 98200 11013" }
    },
    {
        bookingId: "BK-1014",
        image: "https://picsum.photos/seed/event14/600/400",
        name: "UI/UX Design Workshop",
        organizer: "PixelCraft Studio",
        category: "Workshop",
        date: "2026-11-09",
        time: "10:00 AM",
        venue: "Design Hub, Pune",
        availableSeats: 40,
        ticketPrice: 1499,
        description: "A hands-on workshop covering user research, wireframing and prototyping, ending with a mini design challenge.",
        schedule: [
            { time: "10:00 AM", activity: "Design Thinking Basics" },
            { time: "12:00 PM", activity: "Wireframing Exercise" },
            { time: "03:00 PM", activity: "Prototype and Review" }
        ],
        speakers: [
            { name: "Kavya Rao", role: "Lead Product Designer" },
            { name: "Sameer Naik", role: "UX Researcher" }
        ],
        organizerDetails: { name: "PixelCraft Studio", email: "learn@pixelcraft.in", phone: "+91 98200 11014" }
    },
    {
        bookingId: "BK-1015",
        image: "https://picsum.photos/seed/event15/600/400",
        name: "Public Speaking Masterclass",
        organizer: "SpeakUp Academy",
        category: "Workshop",
        date: "2026-11-16",
        time: "09:30 AM",
        venue: "Hotel Sahara Star, Mumbai",
        availableSeats: 60,
        ticketPrice: 1999,
        description: "Learn to structure talks, manage stage fright and deliver with confidence through live practice and feedback.",
        schedule: [
            { time: "09:30 AM", activity: "Storytelling Techniques" },
            { time: "12:00 PM", activity: "Voice and Body Language" },
            { time: "02:30 PM", activity: "Live Speaking Practice" }
        ],
        speakers: [
            { name: "Anil Kapoor Sharma", role: "Communication Coach" },
            { name: "Pooja Hegde", role: "TEDx Speaker" }
        ],
        organizerDetails: { name: "SpeakUp Academy", email: "enroll@speakupacademy.in", phone: "+91 98200 11015" }
    },
    {
        bookingId: "BK-1016",
        image: "https://picsum.photos/seed/event16/600/400",
        name: "Photography Basics Workshop",
        organizer: "Lens & Light",
        category: "Workshop",
        date: "2026-11-23",
        time: "08:00 AM",
        venue: "Kala Ghoda, Mumbai",
        availableSeats: 35,
        ticketPrice: 899,
        description: "A beginner-friendly outdoor workshop on composition, lighting and camera settings with a guided photo walk.",
        schedule: [
            { time: "08:00 AM", activity: "Camera Basics" },
            { time: "09:30 AM", activity: "Guided Photo Walk" },
            { time: "12:00 PM", activity: "Photo Review Session" }
        ],
        speakers: [
            { name: "Imran Sheikh", role: "Street Photographer" },
            { name: "Tara Bose", role: "Visual Storyteller" }
        ],
        organizerDetails: { name: "Lens & Light", email: "walks@lensandlight.in", phone: "+91 98200 11016" }
    },
    {
        bookingId: "BK-1017",
        image: "https://picsum.photos/seed/event17/600/400",
        name: "Data Analytics Hands-On Lab",
        organizer: "DataDojo",
        category: "Workshop",
        date: "2026-12-07",
        time: "10:00 AM",
        venue: "Symbiosis Hall, Pune",
        availableSeats: 50,
        ticketPrice: 1299,
        description: "Work with real datasets to clean, analyse and visualise data using Python and modern dashboards.",
        schedule: [
            { time: "10:00 AM", activity: "Data Cleaning with Python" },
            { time: "01:00 PM", activity: "Exploratory Analysis" },
            { time: "03:30 PM", activity: "Building a Dashboard" }
        ],
        speakers: [
            { name: "Harsh Vora", role: "Data Scientist" },
            { name: "Neha Chandra", role: "Analytics Lead" }
        ],
        organizerDetails: { name: "DataDojo", email: "lab@datadojo.in", phone: "+91 98200 11017" }
    },
    {
        bookingId: "BK-1018",
        image: "https://picsum.photos/seed/event18/600/400",
        name: "City Marathon 2026",
        organizer: "RunIndia Foundation",
        category: "Sports",
        date: "2026-11-29",
        time: "05:00 AM",
        venue: "Marine Drive, Mumbai",
        availableSeats: 5000,
        ticketPrice: 699,
        description: "Run the city's iconic seafront in 5K, 10K and half-marathon categories with medals for all finishers.",
        schedule: [
            { time: "05:00 AM", activity: "Half Marathon Flag-Off" },
            { time: "06:00 AM", activity: "10K Flag-Off" },
            { time: "07:00 AM", activity: "5K Fun Run" }
        ],
        speakers: [
            { name: "Milind Soman", role: "Guest of Honour" },
            { name: "Coach Rajiv Nair", role: "Race Director" }
        ],
        organizerDetails: { name: "RunIndia Foundation", email: "run@runindia.org", phone: "+91 98200 11018" }
    },
    {
        bookingId: "BK-1019",
        image: "https://picsum.photos/seed/event19/600/400",
        name: "Inter-College Football Cup",
        organizer: "Kickoff Sports League",
        category: "Sports",
        date: "2026-11-10",
        time: "03:00 PM",
        venue: "Cooperage Ground, Mumbai",
        availableSeats: 900,
        ticketPrice: 199,
        description: "Sixteen college teams compete in a knockout tournament, with the final held under floodlights.",
        schedule: [
            { time: "03:00 PM", activity: "Quarter Finals" },
            { time: "05:30 PM", activity: "Semi Finals" },
            { time: "07:30 PM", activity: "Final and Trophy Ceremony" }
        ],
        speakers: [
            { name: "Sunil Chhetri Jr.", role: "Chief Guest" },
            { name: "Rohan D'Souza", role: "Tournament Director" }
        ],
        organizerDetails: { name: "Kickoff Sports League", email: "league@kickoffsports.in", phone: "+91 98200 11019" }
    },
    {
        bookingId: "BK-1020",
        image: "https://picsum.photos/seed/event20/600/400",
        name: "Badminton Open Championship",
        organizer: "SmashPoint Academy",
        category: "Sports",
        date: "2026-11-17",
        time: "09:00 AM",
        venue: "Balewadi Stadium, Pune",
        availableSeats: 600,
        ticketPrice: 299,
        description: "A state-level open championship with singles and doubles categories for amateur and professional players.",
        schedule: [
            { time: "09:00 AM", activity: "Group Stage Matches" },
            { time: "01:00 PM", activity: "Quarter and Semi Finals" },
            { time: "05:00 PM", activity: "Finals" }
        ],
        speakers: [
            { name: "Pullela Anand", role: "Head Coach" },
            { name: "Sanjana Kulkarni", role: "Tournament Referee" }
        ],
        organizerDetails: { name: "SmashPoint Academy", email: "open@smashpoint.in", phone: "+91 98200 11020" }
    },
    {
        bookingId: "BK-1021",
        image: "https://picsum.photos/seed/event21/600/400",
        name: "Corporate Cricket Carnival",
        organizer: "Pitchside Events",
        category: "Sports",
        date: "2026-12-12",
        time: "08:30 AM",
        venue: "MIG Cricket Club, Mumbai",
        availableSeats: 400,
        ticketPrice: 1499,
        description: "A day of friendly T20 matches between corporate teams, with team-building games and a family zone.",
        schedule: [
            { time: "08:30 AM", activity: "Team Registration" },
            { time: "09:30 AM", activity: "League Matches" },
            { time: "04:00 PM", activity: "Final and Awards" }
        ],
        speakers: [
            { name: "Ajay Jadeja", role: "Guest Commentator" },
            { name: "Farah Contractor", role: "Event Host" }
        ],
        organizerDetails: { name: "Pitchside Events", email: "carnival@pitchside.in", phone: "+91 98200 11021" }
    },
    {
        bookingId: "BK-1022",
        image: "https://picsum.photos/seed/event22/600/400",
        name: "Higher Studies Abroad Fair",
        organizer: "GlobalEdge Counsellors",
        category: "Education",
        date: "2026-11-11",
        time: "10:00 AM",
        venue: "Taj Santacruz, Mumbai",
        availableSeats: 500,
        ticketPrice: 0,
        description: "Meet university representatives, learn about admissions, scholarships and visa processes, and get one-on-one counselling.",
        schedule: [
            { time: "10:00 AM", activity: "University Stalls Open" },
            { time: "12:00 PM", activity: "Seminar: Scholarships Explained" },
            { time: "03:00 PM", activity: "One-on-One Counselling" }
        ],
        speakers: [
            { name: "Dr. Meenal Joshi", role: "Admissions Consultant" },
            { name: "Peter Collins", role: "University Representative" }
        ],
        organizerDetails: { name: "GlobalEdge Counsellors", email: "fair@globaledge.in", phone: "+91 98200 11022" }
    },
    {
        bookingId: "BK-1023",
        image: "https://picsum.photos/seed/event23/600/400",
        name: "Career Guidance Expo",
        organizer: "PathFinder Education",
        category: "Education",
        date: "2026-11-18",
        time: "10:30 AM",
        venue: "Pragati Maidan, Delhi",
        availableSeats: 1200,
        ticketPrice: 149,
        description: "Explore career options across industries with talks from professionals, aptitude assessments and resume clinics.",
        schedule: [
            { time: "10:30 AM", activity: "Industry Talks" },
            { time: "01:00 PM", activity: "Aptitude Assessment" },
            { time: "03:00 PM", activity: "Resume Clinic" }
        ],
        speakers: [
            { name: "Sandeep Mathur", role: "Career Counsellor" },
            { name: "Alisha Kohli", role: "HR Director" }
        ],
        organizerDetails: { name: "PathFinder Education", email: "expo@pathfinderedu.in", phone: "+91 98200 11023" }
    },
    {
        bookingId: "BK-1024",
        image: "https://picsum.photos/seed/event24/600/400",
        name: "STEM Learning Carnival",
        organizer: "BrightMinds Foundation",
        category: "Education",
        date: "2026-11-25",
        time: "10:00 AM",
        venue: "Nehru Science Centre, Mumbai",
        availableSeats: 800,
        ticketPrice: 249,
        description: "A fun, hands-on carnival with science experiments, robotics demos and coding games for school students.",
        schedule: [
            { time: "10:00 AM", activity: "Science Experiment Zone" },
            { time: "12:00 PM", activity: "Robotics Demo" },
            { time: "02:30 PM", activity: "Coding Games" }
        ],
        speakers: [
            { name: "Dr. Vivek Athale", role: "Physicist" },
            { name: "Anjali Mehra", role: "Robotics Educator" }
        ],
        organizerDetails: { name: "BrightMinds Foundation", email: "stem@brightminds.org", phone: "+91 98200 11024" }
    },
    {
        bookingId: "BK-1025",
        image: "https://picsum.photos/seed/event25/600/400",
        name: "Competitive Exams Strategy Seminar",
        organizer: "TopRank Institute",
        category: "Education",
        date: "2026-12-09",
        time: "11:00 AM",
        venue: "Fergusson College Auditorium, Pune",
        availableSeats: 650,
        ticketPrice: 349,
        description: "Toppers and mentors share preparation strategies, time management tips and study plans for major competitive exams.",
        schedule: [
            { time: "11:00 AM", activity: "Topper Talks" },
            { time: "01:00 PM", activity: "Study Planning Session" },
            { time: "03:00 PM", activity: "Doubt Clearing Q&A" }
        ],
        speakers: [
            { name: "Aditi Sharma", role: "Exam Topper and Mentor" },
            { name: "Prof. Mohan Kelkar", role: "Senior Faculty" }
        ],
        organizerDetails: { name: "TopRank Institute", email: "seminar@toprank.in", phone: "+91 98200 11025" }
    }
];