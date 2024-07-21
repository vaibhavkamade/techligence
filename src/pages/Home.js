import React, { useState ,useEffect , useRef} from "react";
import Typed from 'typed.js';
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboard,
  faAngleRight,
  faLocationDot,
  faGem,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const images = [
  "https://bootstrapmade.com/demo/templates/OnePage/assets/img/clients/client-1.png",
  "https://bootstrapmade.com/demo/templates/OnePage/assets/img/clients/client-2.png",
  "https://bootstrapmade.com/demo/templates/OnePage/assets/img/clients/client-5.png",
  "https://bootstrapmade.com/demo/templates/OnePage/assets/img/clients/client-4.png",
  "https://bootstrapmade.com/demo/templates/OnePage/assets/img/clients/client-6.png",
];

const iconArray = [faChalkboard, faGem, faLocationDot, faGraduationCap];

const testimonials = [
  {
    quote:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    name: "Matt Brandon",
    title: "Freelancer",
    image:
      "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1720656000&semt=ais_user",
  },
  {
    quote:
      "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    name: "John Larson",
    title: "Entrepreneur",
    image:
      "https://imgs.search.brave.com/sjqUjZcq4hqU39YJBPj56ntcsR0pf0xGh53CiJ05uXw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NDI1NzAxMDYtYzNk/NGFlYjVjMTljP2Zt/PWpwZyZ3PTMwMDAm/YXV0bz1mb3JtYXQm/Zml0PWNyb3AmcT02/MCZpeGxpYj1yYi00/LjAuMyZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1U/RjhmR1poWTJWOFpX/NThNSHg4TUh4OGZE/QT0",
  },
  {
    quote:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    name: "Saul Goodman",
    title: "CEO & Founder",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAgmx-1nKlOeEobj5K_3yuGDcH2Stw8noNgA&s",
  },
];

const stats = [
  {
    number: 100,
    title: "clients",
  },
  {
    number: 252,
    title: "projects",
  },
  {
    number: 1203,
    title: "hours of work",
  },
  {
    number: 32,
    title: "workers",
  },
];

const faqData = [
  {
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question: "Feugiat scelerisque varius morbi enim nunc faucibus?",
    answer:
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
  },
  {
    question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, dolorum?",
  },
  {
    question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, cupiditate!",
  },
];

const Home = () => {

  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'We are a  Educational Organization',
        'We are a Ecommerce Organization',
        'We are Building Better India',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <div className="container">
      <motion.div
      className="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Welcome to our Website</h1>
        <h3><span ref={typedElement}></span></h3>
        
      
      <a href="#about" className="btn">
        Get Started
      </a>
    </motion.div>

        <motion.div
          className="icon-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {iconArray.map((item, idx) => (
            <div key={idx} className="icon-box">
              <div className="icon">
                <FontAwesomeIcon icon={item} />
              </div>
              <h4 className="title">
                <a href="#">Lorem Ipsum</a>
              </h4>
              <p className="description">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          ))}
        </motion.div>

        <motion.section
          id="about"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h1>About Us</h1>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </motion.section>

        <motion.div
          className="info-section"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div class="left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              amet, doloribus quis ratione non dignissimos.
            </p>
            <ul>
              <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
              <li>Ullamco laboris nisi ut aliquip ex ea commodo</li>
            </ul>
          </div>
          <div className="right">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <a href="#" className="btn">
              Read More →
            </a>
          </div>
        </motion.div>

        <motion.section
          className="stats-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {stats.map((item, idx) => (
            <div key={idx} className="stat-box" style={{ color: "#2487CE" }}>
              <h2>{item.number}</h2>
              <p>{item.title}</p>
            </div>
          ))}
        </motion.section>

        <motion.div
          className="highlight-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="left">
            <img
              src="https://imgs.search.brave.com/fuczXBB7JpyuYAvnkYuJ1xWcoKQ-AMfIIthzoV02FB4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/MDQ0Nzg2NC9waG90/by9hcHBsZS1pcGhv/bmUtMTEtcHJvLWdy/YXktc21hcnRwaG9u/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ekVUTEplZ3VM/b1RFRkJOS1BsMXZq/UFkxbHZQVzF1TTZH/UHB5aU1TdnNDMD0"
              alt="Placeholder"
            />
          </div>
          <div className="right">
            <h3>
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
              <li>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
                storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident
            </p>
            <div className='btn'>
            <Link to='/shopping' style={{textDecoration:'none' , color:'white'}}>
                  Read More →
            </Link>
            </div>
            
           
          </div>
        </motion.div>

        <motion.section
          id="clients"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 style={{textAlign:'center'}}>Our Clients</h1>
          <div className="client-logos">
            
            {images.map((image, idx) => (
              <motion.div
                key={idx}
                className="client-logo"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={image} alt="Client Logo" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.div
          className="testimonial-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="testimonial-title">Testimonials</h2>
          <p className="testimonial-subtitle">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
          <div className="testimonial-container">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-image"
                    style={{ objectFit: "cover" }}
                  />
                  <div>
                    <h3 className="author-name">{testimonial.name}</h3>
                    <p className="author-title">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.section
          className="team-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="section-title">TEAM</h2>
          <p className="section-subtitle">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
          <div className="team-container">
            {testimonials.map((member, index) => (
              <motion.div
                key={index}
                className="team-member"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={member.image}
                  alt={`${member.name}`}
                  className="team-member-img"
                />
                <div className="team-member-info">
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-position">{member.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.div
          className="faq-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
          <div className="faq-container">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="faq-question">
                  {faq.question}
                  <span className="arrow">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <hr />

        <Footer />
      </div>
    </>
  );
};

export default Home;
