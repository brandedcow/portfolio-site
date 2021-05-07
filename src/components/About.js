import "./About.css";

function About({ style }) {
  const email = "chris.v.kang@gmail.com";
  const textStyle = {
    color: "white",
    fontSize: "1.3rem",
  };

  const containerStyles = {
    height: "100%",
    padding: "3rem",
    overflowY: "scroll",
    ...style,
  };

  const isFirefox = typeof InstallTrigger !== "undefined";

  return (
    <div className="aboutScroller" style={containerStyles}>
      <h1 style={{ ...textStyle, fontSize: "3rem" }}>About Me</h1>
      <p style={textStyle}>
        I grew up spending a good chunk of my free time on the computer,
        browsing websites and connecting with random people. This ability to
        reach so many different people is what drew me into the web, and what
        makes me want to build upon it. I really enjoy building on ideas and
        seeing them come to fruition. Web development allows me to share these
        ideas with as many people as possible.
      </p>
      <p style={textStyle}>
        For my first job, I was thrust into React and web development, which
        gave me a newfound respect for developers of the past, and the lengths
        they had to go to make things work. I really enjoyed the fact that I
        could use one language, Javascript, and be able to build backends,
        webapps, cross-platform desktop and mobile apps. Web dev keeps evolving,
        and helps me continue learning and evolving as well.
      </p>
      <p style={textStyle}>
        I've built fullstack apps with React, Express + NodeJS, and MongoDB, but
        have a long ways to go before I'd consider myself a fullstack developer.
        I want to continue learning all aspects of web development, not limited
        to ui / ux design, dev ops, and new innovative technologies that bring
        new things to the web.
      </p>
      <p style={textStyle}>
        My background in computer science has let me dip my toes into alot of
        different programming languages (such as Java, C, C++, MySQL) and
        philosophies (such as functional and OOP). This helps me break down
        problems and view things from different angles. In addition, it builds
        on my innate desire to make things more efficient or optimized.
      </p>
      <p style={textStyle}>
        I am a result oriented person, and know there is always a way to make
        things happen. Currently based in the Bay Area, and always looking for
        new projects.
      </p>
      <p style={textStyle}>
        Check out my{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href={`${process.env.PUBLIC_URL}/chris.v.kang@gmail.com_resume.png`}
        >
          resume
        </a>{" "}
        and email me at{" "}
        <a rel="noreferrer" target="_blank" href={`mailto:${email}`}>
          chris.v.kang@gmail.com
        </a>
        {isFirefox && (
          <div
            style={{
              height: "3rem",
            }}
          ></div>
        )}
      </p>
    </div>
  );
}

export default About;
