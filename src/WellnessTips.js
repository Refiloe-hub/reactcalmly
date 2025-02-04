import React from 'react';

const WellnessTips = () => {
  return (
    <div className="wellness-tips-page">
    

      {/* Main Content */}
      <main className="wellness-main">
        <section className="wellness-tips-section">
          <h2>Top 5 Wellness Tips</h2>
          <ul>
            <li>
              <h3>1. Practice Mindfulness</h3>
              <p>Mindfulness helps you stay present in the moment, reducing stress and anxiety.</p>
            </li>
            <li>
              <h3>2. Exercise Regularly</h3>
              <p>Physical activity boosts your mood and helps release built-in tension.</p>
            </li>
            <li>
              <h3>3. Stay Hydrated</h3>
              <p>Drink plenty of water throughout the day to maintain mental clarity.</p>
            </li>
            <li>
              <h3>4. Get Enough Sleep</h3>
              <p>A good night's sleep is essential for your emotional and physical well-being.</p>
            </li>
            <li>
              <h3>5. Talk to Someone</h3>
              <p>Don't hesitate to reach out for support from friends, family, or a mental health professional.</p>
            </li>
          </ul>
        </section>
        
        {/* Resources Section */}
        <section className="resources-section">
          <h2>Additional Resources</h2>
          <p>If you're looking for more information on mental health and wellness, here are some resources:</p>
          <ul>
            <li><a href="https://www.mentalhealth.gov/" target="_blank" rel="noopener noreferrer">Mental Health.gov</a></li>
            <li><a href="https://www.psychologytoday.com/us/topics/mental-health" target="_blank" rel="noopener noreferrer">Psychology Today</a></li>
            <li><a href="https://www.nami.org/Home" target="_blank" rel="noopener noreferrer">National Alliance on Mental Illness</a></li>
          </ul>
        </section>
      </main>
      
     

      {/* Inline Styles */}
      <style>
        {`
          .wellness-tips-page {
            font-family: Arial, sans-serif;
            color: #333;
            padding: 20px;
          }

          

          .header-container {
            display: flex;
            justify-content: center;
          }

          .logo img {
            width: 150px;
            height: auto;
          }

          .wellness-main {
            padding: 30px 20px;
            background-color: #f5f5f5;
          }

          .wellness-tips-section {
            margin-bottom: 40px;
          }

          .wellness-tips-section h2 {
            font-size: 2rem;
            color: #333;
            margin-bottom: 20px;
          }

          .wellness-tips-section ul {
            list-style-type: none;
            padding: 0;
          }

          .wellness-tips-section li {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
            padding: 20px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .wellness-tips-section li:hover {
            transform: translateY(-10px);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
          }

          .wellness-tips-section h3 {
            font-size: 1.5rem;
            color: #40ADA8;
            margin-bottom: 10px;
          }

          .wellness-tips-section p {
            font-size: 1rem;
            color: #555;
          }

          .resources-section {
            margin-top: 40px;
          }

          .resources-section h2 {
            font-size: 2rem;
            color: #333;
            margin-bottom: 20px;
          }

          .resources-section ul {
            list-style-type: none;
            padding: 0;
          }

          .resources-section li {
            margin-bottom: 10px;
          }

          .resources-section a {
            text-decoration: none;
            color: #40ADA8;
            font-weight: bold;
          }

          .resources-section a:hover {
            text-decoration: underline;
          }
            /* Responsive Design */
@media (max-width: 768px) {
  .wellness-tips-page {
    padding: 15px;
  }

  .logo img {
    width: 120px;
  }

  .wellness-main {
    padding: 20px;
  }

  .wellness-tips-section h2, 
  .resources-section h2 {
    font-size: 1.8rem;
  }

  .wellness-tips-section li {
    padding: 15px;
  }

  .wellness-tips-section h3 {
    font-size: 1.3rem;
  }

  .wellness-tips-section p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .logo img {
    width: 100px;
  }

  .wellness-tips-page {
    padding: 10px;
  }

  .wellness-main {
    padding: 15px;
  }

  .wellness-tips-section h2, 
  .resources-section h2 {
    font-size: 1.5rem;
  }

  .wellness-tips-section h3 {
    font-size: 1.2rem;
  }

  .wellness-tips-section p {
    font-size: 0.85rem;
  }

  .resources-section a {
    font-size: 0.9rem;
  }
}

        `}
      </style>
    </div>
  );
};

export default WellnessTips;