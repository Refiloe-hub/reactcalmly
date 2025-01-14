import React from "react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="logo">Calmly</div>
       
      </header>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="how-it-works-heading">
          <h2>How It Works</h2>
          <p>Discover how Calmly empowers your mental well-being in 3 simple steps.</p>
        </div>

        <div className="steps-grid">
          {/* Step 1 */}
          <div className="step-card">
            <div className="step-icon">📋</div>
            <h3>Step 1: Sign Up</h3>
            <p>Create a personalized profile to get tailored recommendations.</p>
          </div>

          {/* Step 2 */}
          <div className="step-card">
            <div className="step-icon">🤖</div>
            <h3>Step 2: Chat with AI</h3>
            <p>Interact with our AI chatbot for stress relief and mindfulness tips.</p>
          </div>

          {/* Step 3 */}
          <div className="step-card">
            <div className="step-icon">📈</div>
            <h3>Step 3: Track Progress</h3>
            <p>Monitor your mental health journey with our easy-to-use tools.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Ready to start your mental wellness journey?</h2>
        <button className="cta-button">Get Started</button>
      </section>

     

      {/* Inline Styles or External CSS */}
      <style>
        {`
          /* How It Works Section */
          .how-it-works {
            padding: 50px 20px;
            text-align: center;
            background-color: #f5f5f5;
          }

          .how-it-works-heading h2 {
            font-size: 2rem;
            margin-bottom: 10px;
          }

          .how-it-works-heading p {
            font-size: 1.2rem;
            color: gray;
            margin-bottom: 30px;
          }

          .steps-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
          }

          .step-card {
            background-color: #40ADA8;
            color: white;
            border-radius: 10px;
            padding: 20px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .step-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
          }

          .step-icon {
            font-size: 3rem;
            margin-bottom: 10px;
          }

          .step-card h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
          }

          .step-card p {
            font-size: 1rem;
          }

          /* CTA Section */
          .cta-section {
            padding: 50px 20px;
            text-align: center;
            background-color: #40ADA8;
            color: white;
          }

          .cta-section h2 {
            font-size: 2rem;
            margin-bottom: 20px;
          }

          .cta-button {
            background-color: white;
            color: #40ADA8;
            padding: 15px 30px;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            transition: background-color 0.3s ease;
          }

          .cta-button:hover {
            background-color: #f5f5f5;
          }
        `}
      </style>
    </div>
  );
};

export default HowItWorks;