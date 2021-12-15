import TypeWriter from "react-typewriter";

function Home({ data = { name: "Forntoh Thomas" } }) {
  return (
    <div className="section container">
      <div className="space-y-6">
        <p>Hi, welcome to my world;</p>
        <h1>
          <TypeWriter typing={0.75}>{`I'm ${data?.name}.`}</TypeWriter>
        </h1>

        <p className="max-w-2xl">
          {`I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at NgC GmbH.`}
        </p>
      </div>
    </div>
  );
}

export default Home;
