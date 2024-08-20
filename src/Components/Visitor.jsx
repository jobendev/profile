function Visitor(props) {
  return (
    <div className="visit-container fade-in">
      <div className="welcome">
        <span className="normal">Thanks for visiting! I'm Joben a</span>{" "}
        <span className="highlight">Scrum Master and</span>
        <span className="highlight">Full-stack Web Developer.</span>
        <div
          onClick={() => {
            props.isClicked();
          }}
          className="inputsubmit"
        >
          <button type="button">About Joben</button>
        </div>
      </div>

      <div className="imagecontainer">
        <img src="./assets/joben.png" alt="" />
      </div>
    </div>
  );
}

export default Visitor;
