import styles from "./Home.module.css";

function Home() {
  const headerStyles = {
    fontSize: "2em",
  };

  const textStyle = {
    fontSize: "14px",
    margin: "1rem",
  };

  return (
    <>
      <section>
        <h1 style={{ fontSize: "2em", textAlign: "center", margin: "1rem" }}>
          Space Travel: Expanding Horizons Beyond Earth
        </h1>
      </section>
      <br />
      <section>
        <h2 style={headerStyles}>🌌 Journey into the Future</h2>
        <p style={textStyle}>
          In a world where the impossible has become reality, where the stars
          are no longer out of reach, welcome to the future of humanity's
          survival and exploration. Witness the evolution of technology as it
          transforms barren planets into thriving havens, all made possible by
          the wonders of innovation and human determination.
        </p>
      </section>
      <br />
      <section>
        <h2 style={headerStyles}>🌍 From Neglect to Innovation</h2>
        <p style={textStyle}>
          Once the cradle of civilization, Earth now stands as a solemn reminder
          of the consequences of neglect and environmental decline. But fear
          not, for the ingenuity of mankind has soared to new heights. With our
          relentless pursuit of advancement, we have not only healed our scars
          but extended our reach across the cosmos.
        </p>
      </section>
      <br />
      <section>
        <h2 style={headerStyles}>
          🚀 Enter Space Travel: Where Dreams Take Flight
        </h2>
        <p style={textStyle}>
          Embark on an extraordinary journey with our groundbreaking web
          application, aptly named "Space Travel." As a commander engineer, the
          fate of humanity's exodus rests in your capable hands. Prepare to face
          the ultimate challenge: evacuating humankind from their birthplace and
          guiding them towards a future among the stars.
        </p>
      </section>
      <br />
      <section>
        <h2 style={headerStyles}>🔧 Engineer, Explorer, Leader</h2>
        <p style={textStyle}>
          Space Travel empowers you to engineer, design, and even dismantle
          spacecraft. Craft vessels that defy the boundaries of imagination,
          envisioning a future where life flourishes beyond the stars. But
          remember, your role extends beyond construction – you are a leader, an
          explorer, a commander steering humanity's destiny.
        </p>
      </section>
      <br />
      <section>
        <h2 style={headerStyles}>🌠 A Universe of Possibilities Awaits</h2>
        <p style={textStyle}>
          Immerse yourself in the thrill of exploration as you chart
          interplanetary courses within our solar system. Seamlessly navigate
          your fleet of spacecraft, hurtling through the cosmic void from one
          celestial body to another. The universe becomes your playground, and
          every planet a potential new home.
        </p>
      </section>
    </>
  );
}

export default Home;
