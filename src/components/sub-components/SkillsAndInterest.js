import React from 'react';
import './SkillsAndInterest.css';

function SkillsAndInterest() {
  return (
    <div className="main-content">
      <div className="left-content">
        <p><span><i className="fab fa-vuejs"></i></span>Vue.JS</p>
        <p><span><i className="fab fa-js"></i></span> JavaScript</p>
        <p><span><i className="fab fa-html5"></i></span> HTML</p>
        <p><span><i className="fab fa-java"></i></span> Java Programming</p>
        <p><span><i className="fab fa-cuttlefish"></i></span> C and C++ Programming</p>
        <p><span><i className="fab fa-aws"></i></span>AWS</p>
      </div>
      <div className="right-content">
        <p><span><i className="fab fa-css3"></i></span> CSS</p>
        <p><span><i className="fab fa-php"></i></span> PHP</p>
        <p><span><i className="fab fa-laravel"></i></span> Laravel</p>
        <p><span><i className="fab fa-react"></i></span> React.JS</p>
        <p><span><i className="fab fa-android"></i></span> Android Studio</p>
        <p><span><i className="fab fa-digital-ocean"></i></span>Digital Ocean</p>
      </div>
    </div>
  );
}

export default SkillsAndInterest;