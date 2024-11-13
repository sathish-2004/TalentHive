import React, { useEffect } from 'react';
import '../styles/landing.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../images/landing-bg.jpg';



const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("usertype") === 'freelancer') {
      navigate("/freelancer");
    } else if (localStorage.getItem("usertype") === 'client') {
      navigate("/client");
    } else if (localStorage.getItem("usertype") === 'admin') {
      navigate("/admin");
    }
  }, [navigate]);

  const scrollToAboutUs = () => {
    document.getElementById("about-us").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="landing-page">
      <div className="landing-hero">
      <div className='landing-nav'>
  <h3>TalentHive</h3>
  <div className="auth-buttons">
    <button onClick={() => navigate('/authenticate')}>Sign In</button>
    <button onClick={() => navigate('/authenticate')}>Register</button>
  </div>
</div>


        <div id='img'>
          <img src={img1} width={800} height={500} alt="Landing Background" />
        </div>

        <div className="landing-hero-text">
          <h1>Elevate your Journey, Build your Success</h1>
          <h2 className="hero-subtitle">Dynamic and Supportive Freelancing Ecosystem.</h2>
          <p>TalentHive is where the right talent meets the right projects. Connect, collaborate, and create meaningful work with ease and trust.</p>
          <button onClick={() => navigate('/authenticate')} id='one-button'>Get Started</button>
          <br />
        </div>

        

        <div className="about-us-section" id="about-us">
          <center>
            <h3>About Us</h3>
            <p>Welcome to TalentHive, the ultimate platform where talent and opportunity come together! TalentHive connects clients with skilled freelancers, creating a thriving community for seamless project collaboration. Clients can post their project needs, while freelancers from various fields bid to bring their expertise to the table. With an efficient process that promotes quality and timely completion, TalentHive is dedicated to helping both clients and freelancers reach their full potential through successful partnerships.</p>
          </center>
          <div className="role-section">
            <h2>Role of Clients</h2>
            <p>At TalentHive, clients play a crucial role by posting project details and requirements, enabling them to attract competitive bids. Clients review proposals, select the best freelancer for the job, and approve the project upon successful completion.</p>
          </div>
          <div className="role-section">
            <h2>Role of Freelancers</h2>
            <p>Freelancers on TalentHive have the opportunity to bid on projects that align with their skills, presenting proposals that showcase their abilities. Once selected, they work diligently to complete the project to the client’s satisfaction, growing their portfolio and reputation on the platform.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
