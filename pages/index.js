import Layout from './layout';

export default () => (
  <Layout>
    <div id="container">
      <div id="intro">
        <ul class="icons">
          <li title="HTML5"><i class="fab fa-html5"></i></li>
          <li title="CSS3"><i class="fab fa-css3-alt"></i></li>
          <li title="JavaScript"><i class="fab fa-js"></i></li>
          <li title="Node.js"><i class="fab fa-node"></i></li>
          <li title="React.js + Redux + Sagas"><i class="fab fa-react"></i></li>
          <li title="Sass"><i class="fab fa-sass"></i></li>
          <li title="Docker"><i class="fab fa-docker"></i></li>
          <li title="Solidity (Ethereum)"><i class="fab fa-ethereum"></i></li>
          <li title="GIT"><i class="fab fa-git"></i></li>
        </ul>
        <h1><span id="carlo">Carlo&nbsp;</span><span id="mallone">Mallone</span></h1>
        <h2>Full-Stack Web Developer</h2>
        <ul class="horizontal-list" id="contacts">
          <li><a href="https://www.linkedin.com/in/carlomallone/" target="_blank">linkedin.com/in/carlomallone/</a></li>
          <li>+39 349 8126923</li>
          <li><a href="mailto:carlo.mallone@gmail.com">carlo.mallone@gmail.com</a></li>
        </ul>
        <p>I am an Italian Senior Software Engineer with <strong>8 years</strong> of experience in both <strong>back-end</strong> and <strong>front-end</strong> web development. I am a team player and love to write good code that can make a difference. I aim to be a goal driven, detail oriented employee, always trying to put the <strong>users first</strong>. I like being involved in both the <strong>technical</strong> and <strong>business</strong> side of the projects I join, to better understand needs and opportunities, and deliver the best work possible.</p>
      </div>
      <div id="skills">
        <h3>Skills &amp; Expertise</h3>
        <div class="grid">
          <div class="col-1-2">
            <ul class="bullet-list">
              <li>Information Architecture</li>
              <li>User Experience</li>
              <li>Algorithms</li>
              <li>Test Driven Development</li>
            </ul>
          </div>
          <div class="col-1-2">
            <ul class="bullet-list">
              <li>User Interface Design</li>
              <li>Web Development</li>
              <li>Agile Methodologies</li>
              <li>Startups</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="tech">
        <h3>Technologies</h3>
        <div class="grid">
          <div class="col-1-2">
            <ul class="bullet-list">
              <li>React.js + Redux + Sagas</li>
              <li>HTML + CSS + JavaScript</li>
              <li>Truffle + Solidity (ETH Blockchain)</li>
              <li>Webpack, Grunt, Gulp</li>
            </ul>
          </div>
          <div class="col-1-2">
            <ul class="bullet-list">
              <li>Ruby on Rails</li>
              <li>Jest + Sinon + Chai</li>
              <li>MongoDB, Redis</li>
              <li>PostgreSQL, MySQL</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="experience">
        <h3>Professional Experience</h3>
        <h4>Paytouch Software, INC.<span>Remote</span></h4>
        <div>Front-End Development Team Lead (2016 &ndash; Present)</div>
        <p><a target="_blank" href="https://www.paytouch.com/">Paytouch</a> offers a Point of Sale software that gives you
        everything you need to sell, manage and grow your business. As the front-end lead engineer I was in charge of
        the <a target="_blank" href="https://dashboard.paytouch.io/">Merchant Dashboard</a> architecture design and
        software development, leading a team of three.<br />Our web application gives the merchant the tools to
        manage products catalog, inventory, stocks, purchase/receiving/transfer orders and returns, employees, time
        clock, gift cards and loyalty programs, plus giving her access to in-depth reports about sales, orders and
        customers behaviour.<br />We built this complex application following TDD and Agile principles, starting
        from a Ruby on Rails backbone app and then managing the actual front-end with React + Redux + Sagas.</p>
        <h4>Pick 1<span>Remote</span></h4>
        <div>Software Engineer (2013 &ndash; 2015)</div>
        <p><a target="_blank" href="https://www.pick1.com/">Pick1</a> is a real-time survey and social analytics platform,
        enabling companies to create seamless, highly engaging polls and complex surveys, and then giving actionable
        insights and tools to retarget them. <br />As the lead front-end developer I worked on the survey tool itself,
        developing a map-style editor for complex branching handling, plus the analytics dashboard and social data
        explorer.I was among the first professionals to integrate with IBM Watson API as they rolled out their beta
        service (Pick1 having a partnership with them), in order to show behavioural insights for our customers&rsquo;
        surveys respondents.</p>
        <h4>SEARCHEEZE / NEXTMAGS<span>Rome, IT</span></h4>
        <div>UI Lead Engineer (2011 &ndash; 2012)</div>
        <p>At <a target="_blank" href="https://www.youtube.com/watch?v=v9YsUyYexcE">NextMags</a> we built a content
        curation platform to let the users find, collect and organize information in beautiful digital magazines.Our
        web application acted as an hybrid between Evernote and Flipboard, and I developed both the cross-vendor browser
        extension / bookmarklet clipper (used for gathering media and text from web pages) and the digital magazines
        website itself.</p>
        <h4>Frontman<span>Rome, IT</span></h4>
        <div>Co-Founder, CTO (2016 &ndash; Present)</div>
        <p><a target="_blank" href="https://frontmanlife.com/">Frontman</a> is an Italian startup, founded in 2016,
        producing luxury accessories with roots in rock aesthetics. The brand combines technology with two of Made in
        Italy&apos;s excellences: goldsmithing and craftsmanship.<br /> For us being in step with
        technological trends and style is a must. As CTO and co-founder I lead both the strategy and development
        side of the business, starting from product design and vision, to the website and related services and our
        social media presence.</p>
        <h4>SELF-EMPLOYED<span>Rome, IT + Remote</span></h4>
        <div>Freelance Web Developer (2011 &ndash; Present)</div>
      </div>
      <div id="education">
        <h3>Education</h3>
        <h4>MEng Software Engineering<span>UNIVERSITY OF ROME &ldquo;LA SAPIENZA&rdquo;</span></h4>
        <h4>BEng Computer Science<span>UNIVERSITY OF ROME &ldquo;LA SAPIENZA&rdquo;</span></h4>
      </div>
      <div id="footer">
        <ul class="icons">
          <li><a href="https://www.linkedin.com/in/carlomallone/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
          <li><a href="https://angel.co/carlomallone" target="_blank"><i class="fab fa-angellist"></i></a></li>
          <li><a href="https://github.com/shelkem" target="_blank"><i class="fab fa-github"></i></a></li>
          <li><a href="https://stackoverflow.com/users/795975/carlo-mallone" target="_blank"><i
            class="fab fa-stack-overflow"></i></a></li>
        </ul>
      </div>
    </div>
  </Layout>
);
