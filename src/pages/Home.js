import Socials from "../components/Socials";

const Home = () => {
  return (
    <div className="Home">
      <div className="div-two-column">
        <div className="left-column">
          <Socials></Socials>
        </div>
        <div className="right-column">
          <h2>Hello there,</h2>
          <p>
            Thanks for dropping by! I am an undergraduate student at IIIT Hyderabad.
            My thesis advisor is <a href="https://www.iiit.ac.in/people/faculty/Uttam/">Prof. Uttam Singh</a>,
            and I am currently exploring the field of quantum complexity theory as undergraduate researcher at 
            <a href="https://cqst.iiit.ac.in/">CQST</a>.
            

          <h4>--- Website WIP! ---</h4>
          </p>
        </div>
      </div>

    </div>
  );
};

export default Home;
