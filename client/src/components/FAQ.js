import React from 'react';

// FAQ page set up, can add more Q/As

const FAQ = () => {
  return (
    <div className="faq-content">
      <h2>About Us</h2>
      <p>Welcome to our dedicated women’s healthcare platform, where we focus on empowering women to take charge of their health. Our mission is to provide a safe space for women to access essential health information, engage with community groups, and find support through self-assessments, threads, and discussions.</p>
      
      <p>Whether you're seeking advice, looking to connect with others, or simply want to stay informed, our platform offers the tools you need to stay healthy, informed, and supported.</p>

      <h3>How can I check if my symptoms are serious?</h3>
      <p>You can easily take one of our self-assessments to check your symptoms. Visit our <a href="/assessments" className="faq-link">Assessments Page</a> to get started. It’s quick, easy, and confidential.</p>
      
      <h3>Where can I find post-maternity advice from other moms?</h3>
      <p>If you're a new mom looking for advice and support, we have a dedicated <a href="/groups" className="faq-link">New Moms Community Group</a> where you can share experiences, ask questions, and find the support you need from other moms just like you.</p>
      
      <h3>What if I have a specific question that isn't covered on the site?</h3>
      <p>If you have a question that hasn’t been addressed, feel free to post it in our <a href="/threads" className="faq-link">Discussion Threads</a>. Our active community is here to help, and you can get personalized advice from others who’ve been in your shoes.</p>
      
      <h3>What types of self-assessments do you offer?</h3>
      <p>We offer a range of self-assessments, from physical health check-ins to mental health and specific conditions such as postpartum depression. Visit our <a href="/assessments" className="faq-link">Self-Assessments Page</a> to explore options that are tailored to your needs.</p>
      
      <h3>I'm having trouble navigating the site. Is there any assistance available?</h3>
      <p>If you’re feeling stuck, don’t worry! Our AI-powered <a href="/chat" className="faq-link">Chatbot</a> is always available on the homepage to guide you and answer any questions you may have.</p>
    </div>
  );
};

export default FAQ;

