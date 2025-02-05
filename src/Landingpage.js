import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { auth, provider, signInWithGoogle } from "./firebase";




// Import additional pages
import HowItWorks from './HowItWorks'; 
import WellnessTips from './WellnessTips'; 
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

const Index = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      console.log("User Info:", result.user);
  
      if (result.user) {
        alert(`Welcome, ${result.user.displayName}!`);
        setModalOpen(false);
      }
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
      alert("Failed to sign in. Please try again.");
    }
  };

  return (
    <Router>
      <div className="landing-page">
        {/* Header Section */}
        <header className="landing-header">
          <div className="header-container">
            {/* Logo */}
            <div className="logo">
              <img src="/calm.png" alt="Logo" />
            </div>

            {/* Navigation Links */}
          
           {/* Navigation Links */}
           <nav className="navigation">
              <Link to="/">Home</Link>
              <Link to="/how-it-works">How It Works</Link>
              <Link to="/About-us">AboutUs</Link>
              <Link to="/wellness-tips">Wellness Tips</Link>
              <Link to="/Contact-us">Contact Us</Link>
            </nav>
          </div>
        </header>
        {/* Define Routes */}
        <Routes>
        <Route
            path="/"
            element={
        <main className="landing-main">
          <section className="hero">
            <div className="text-content">
              <h2>No 1 for Mental Health</h2>
              <h1>Discover the Serenity with AI Support</h1>
              <p>
                Enhance your mental well-being with personalized advice from Calmly.
              </p>
              <button className="cta-button" onClick={toggleModal}>Sign up today</button>
            </div>
            <div className="image-content">
              <img
                src="/mentalpic.png"
                alt="Mental Health Illustration"
              />
            </div>
          </section>

          <section className="cta-banner">
            <p>
              The no 1 Chatbot for instant stress relief. As recognized by mental
              health experts and wellness platforms.
            </p>
          </section>

          {/* Features Section */}
          <section className="features-section">
            <div className="features-heading">
              <h2>Discover our features</h2>
              <p>
                Unlock holistic mental wellbeing solutions with our advanced
                chatbot
              </p>
            </div>

            <div className="features-grid">
              {[
                {
                  title: "Stress Relief",
                  description: "Effective stress relief techniques for a clearer mind",
                },
                {
                  title: "Guided Meditations",
                  description: "Engage in daily guided meditations",
                },
                {
                  title: "Process Tracking",
                  description:
                    "Track your process towards treating your mental wellness",
                },
                {
                  title: "Mindfulness Tips",
                  description:
                    "Daily mindfulness tips to your mental well-being",
                },
                {
                  title: "Mood Tracker",
                  description:
                    "Monitor your mental health with daily mood inputs",
                },
                {
                  title: "Calm Exercises",
                  description:
                    "Guided breathing to help you regain calm and focus",
                },
                {
                  title: "Personal Journal",
                  description:
                    "Secure and private journal to capture your thoughts",
                },
                {
                  title: "Daily Check-Ins",
                  description:
                    "Daily reflections to track mood and progress",
                },
              ].map((feature, index) => (
                <div key={index} className="feature-card">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <a href="/WellnessTips">Learn more</a>
                </div>
              ))}
            </div>
          </section>

          {/* Mental Health Features Section */}
          <section className="mental-health-features">
            <h2>Transform your mental well-being with AI</h2>
            <p>Empower your mind with personalized stress management and mindful practices</p>

            <div className="mental-health-feature-cards">
              <div className="mental-feature-card">
                <img src="/mental 1.png" alt="Emotional Support" />
                <h3>Emotional Support</h3>
                <p>Provide compassionate support and uplifting conversations to help manage emotional well-being.</p>
                <button className="learn-more">Learn more</button>
              </div>

              <div className="mental-feature-card">
                <img src="/brain 2.png" alt="Stress Relief" />
                <h3>Stress Relief</h3>
                <p>Offer real-time stress relief techniques tailored to your needs and situations.</p>
                <button className="learn-more">Learn more</button>
              </div>

              <div className="mental-feature-card">
                <img src="/broken-heart.png" alt="Mindful Practices" />
                <h3>Mindful Practices</h3>
                <p>Tailored exercises to relax and enhance mental clarity every day.</p>
                <button className="learn-more">Learn more</button>
              </div>
            </div>
          </section>

          <section className="user-testimonials">
            <h2>User Testimonials</h2>
            <p>Real stories from users who found solace and support</p>

            <div className="testimonial-card">
              <img src="/ai white woman.jpg" alt="User photo" className="testimonial-image" />
              <div className="testimonial-text">
                <p>
                  "Using this mental wellbeing chatbot has transformed my life. Its guided mindfulness
                  exercises and stress management tips have created a calm and balanced environment
                  for me. I never realized how pivotal mental health support could be in reclaiming
                  my productivity and happiness until now."  - Dr Winburg
                </p>
              </div>
            </div>
          </section>

          <section className="wellness-journey">
            <h2>Join our wellness journey</h2>
            <p>Never miss an update from our mental well-being community</p>

            <div className="subscription-form">
              <input
                type="email"
                placeholder="yourname@wellness.com"
                className="email-input"
              />
              <button className="subscribe-button">Sign up</button>
            </div>
          </section>
        </main>
        }
        />

     
        {/* How It Works Page */}
        <Route path="/how-it-works" element={<HowItWorks />} />
        {/*About us page*/}

        <Route path="About-us" element={<AboutUs />} />

        {/* Wellness Tips Page */}
        <Route path="/wellness-tips" element={<WellnessTips />} />
        {/*Contact Us page*/}
        <Route path="Contact-us" element={<ContactUs />} />
      </Routes>  
         {/* Footer Section */}
         <footer className="footer">
          <p>© 2024 Calmly. All rights reserved.</p>
        </footer>

        {/* Signup Modal */}
        {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside modal
          >
            <div className="modal-header">
              <h2>Sign Up here!!</h2>
              <button className="close-button" onClick={toggleModal}>
                ×
              </button>
            </div>
            <p>Choose a method to sign up:</p>
            <button className="social-button google" onClick={handleGoogleSignIn}>
  Sign Up with Google
</button>
            <button className="social-button facebook">Sign Up with Facebook</button>
            <button className="social-button x">Sign Up with X</button>
          </div>
        </div>
      )}
      </div>
    

      {/* CSS at the bottom of the page */}
      <style>
        {`
          .landing-page {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background-color: #e6f7f7;
           
          }

          .landing-header {
            background-color: #40ADA8;
            display: flex;
            justify-content: center;
            align-items: center; /* Ensures all header elements are vertically aligned */
            height: 75px; /* Set consistent height */
          }

          .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 90%;
            max-width: 1200px;
          }

          .logo {
            display: flex;
            gap: 10px;
            margin-left: -65px;
          }

          .logo img {
            height: 75px; /* Ensures the logo has the same height as navigation links */
            width: 85px;
          
          }

          .navigation {
            display: flex;
            gap: 20px;
          }

          .navigation a {
            color: white;
            text-decoration: none;
            font-size: 16px;
            display: flex;
            align-items: center; /* Vertically centers the text */
            height: 80px; /* Matches the header height */
            transition: color 0.3s ease;
          }

          .navigation a:hover {
            color: #black;
          }
                      .hero {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 40px 20px;
            background-color: #e6f7f7; /* Light teal background */
          }

          .text-content h1 {
            font-size: 36px;
            color: #40ADA8; /* Blue text for the main heading */
          }

          .text-content h2 {
            font-size: 24px;
            color: #333;
            margin-bottom: 10px;
          }

          .text-content p {
            font-size: 16px;
            margin: 20px 0;
          }

          .cta-button {
            background-color: #40ADA8;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-size: 16px;
          }

          .cta-button:hover {
            background-color: #0056b3;
          }

          .image-content img {
            max-width: 100%;
            height: auto;
            
          }

          .cta-banner {
            background-color: #40ADA8; /* Blue banner background */
            color: white;
            text-align: center;
            padding: 20px;
            font-size: 20px;
          }
          
          .image-content img {
            max-width: 500px; /* Adjust the maximum width */
            max-height: 500px; /* Adjust the maximum height */
            object-fit: contain; /* Ensures the image maintains its aspect ratio */
          
          }
              /* Features Section */
          .features-section {
            text-align: center;
            padding: 50px 20px;
            background-color: #e6f7f7;
            color: black;
          }

          .features-heading h2 {
            font-size: 2rem;
            margin-bottom: 10px;
          }

          .features-heading p {
            font-size: 1.2rem;
            color: gray;
            margin-bottom: 30px;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
          }

          .feature-card {
            background-color: #40ADA8;
            color: white;
            border-radius: 10px;
            padding: 20px;
            text-align: left;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
          }

          .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
          }

          .feature-card p {
            font-size: 1rem;
            margin-bottom: 15px;
          }

          .feature-card a {
            text-decoration: none;
            color: white;
            font-weight: bold;
            border-bottom: 2px solid white;
          }

          .feature-card a:hover {
            color: #F5F5F5;
          }

          /* Footer */
          .footer {
            background-color: #40ADA8;
            color: white;
            text-align: center;
            padding: 10px 0;
          }
             .mental-health-features {
            text-align: center;
            padding: 40px 20px;
             background-color: #e6f7f7;
            color: black;
            margin-bottom: 40px; /* Adds spacing below to separate from the next section */
          }

          .mental-health-features h2 {
            font-size: 2rem;
            margin-bottom: 10px;

          }

          .mental-health-features p {
            font-size: 1.2rem;
            color: gray;
            margin-bottom: 30px;
          }

          .mental-health-feature-cards {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
          }

          .mental-feature-card {
            background-color: #fff;
            color: black;
            border-radius: 10px;
            padding: 20px;
            width: 300px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .mental-feature-card img {
            width: 100px;
            height: 100px;
            margin-bottom: 15px;
          }

          .mental-feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
          }

          .mental-feature-card p {
            font-size: 1rem;
            margin-bottom: 15px;
          }

          .learn-more {
            background-color: #40ADA8;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-size: 16px;
          }

          .learn-more:hover {
            background-color: #0056b3;
          }

          /* Add margin-top to features-section to prevent overlap */
          .features-section {
            text-align: center;
            padding: 50px 20px;
            background-color: #e6f7f7;
            color: black;
            margin-top: 40px; /* Ensures separation from the previous section */
          }
             .user-testimonials {
      text-align: center;
      padding: 50px 20px;
      background-color: #e6f7f7;
      color: black;
    }

    .user-testimonials h2 {
      font-size: 2rem;
      margin-bottom: 10px;
    }

    .user-testimonials p {
      font-size: 1.2rem;
      color: gray;
      margin-bottom: 30px;
    }

    .testimonial-card {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .testimonial-image {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
    }

    .testimonial-text p {
      font-size: 1rem;
      color: #333;
      text-align: left;
    }
       .wellness-journey {
      background-color: #e6f7f7; /* Adjust color as per design */
      padding: 40px 20px;
      text-align: center;
      color: black;
    }

    .wellness-journey h2 {
      font-size: 1.8rem;
      margin-bottom: 10px;
    }

    .wellness-journey p {
      font-size: 1rem;
      margin-bottom: 30px;
    }

    .subscription-form {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

    .email-input {
      padding: 10px;
      border: none;
      border-radius: 50px;
      width: 250px;
      font-size: 1rem;
      background-color: white;
    }

    .subscribe-button {
      background-color: white;
      color: #38b2ac;
      border: none;
      padding: 10px 20px;
      border-radius: 50px;
      font-size: 1rem;
      cursor: pointer;
      font-weight: bold;
    }

    .subscribe-button:hover {
      background-color: #e2e8f0; /* Light gray on hover */
    }
      /* Pop-Up Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent dark overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: opacity 0.3s ease;
}

/* Pop-Up Container */
.modal-content {
  background-color: #e6f7f7; /* Light teal to match the page */
  border-radius: 10px;
  padding: 20px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  text-align: center;
  animation: fadeIn 0.3s ease-out; /* Smooth entry animation */
}

/* Close Button */
 .close-button {
            background-color: #40ADA8;
            color: white;
            border: none;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            font-size: 1.2rem;
            display: flex;
            justify-content: left;
            align-items: left;
            cursor: pointer;
            transition: background-color 0.3s ease;
            position: absolute;
            top: 200px;
          
          }

          .close-button:hover {
            background-color: #0056b3;
          }


/* Social Buttons */
.social-button {
  background-color: #40ADA8;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  margin: 10px 0;
  border: none;
  border-radius: 50px;
  width: 80%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.social-button:hover {
  background-color: #0056b3;
}

.social-button.google {
  background-color: #db4437; /* Google Red */
}

.social-button.facebook {
  background-color: #3b5998; /* Facebook Blue */
}

.social-button.x {
  background-color: #1da1f2; /* X (formerly Twitter) Blue */
}

.social-button.google:hover {
  background-color: #a53428; /* Darker Google Red */
}

.social-button.facebook:hover {
  background-color: #2d4373; /* Darker Facebook Blue */
}

.social-button.x:hover {
  background-color: #1176bb; /* Darker Twitter Blue */
}

/* Fade-in Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
  /* Responsive Styles */
@media (max-width: 1024px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }

  .navigation {
    gap: 10px;
  }
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    align-items: center;
  }

  .logo {
    margin-left: 0;
  }

  .navigation {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .hero {
    padding: 20px;
  }

  .text-content h1 {
    font-size: 28px;
  }

  .text-content h2 {
    font-size: 20px;
  }

  .cta-button {
    font-size: 14px;
    padding: 8px 16px;
  }

  .image-content img {
    max-width: 100%;
    height: auto;
  }
}

@media (max-width: 480px) {
  .landing-header {
    height: 60px;
  }

  .navigation a {
    font-size: 14px;
    height: 60px;
  }

  .text-content h1 {
    font-size: 24px;
  }

  .text-content h2 {
    font-size: 18px;
  }

  .cta-button {
    font-size: 12px;
    padding: 6px 12px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}


         
        `}
      </style>
    </Router>
  );
};

export default Index;