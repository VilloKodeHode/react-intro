export const AboutPage = () => {
    const paragraph = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
    explicabo perferendis laudantium blanditiis earum, dolor qui cum
    inventore quibusdam, alias soluta minus eaque molestiae ipsam maxime
    voluptates. Dolor, consequuntur repellendus.`
  return (
    <main>
      <section className="hero">
        <h1>This is the about page</h1>
        <p>Info about me is coming here:</p>
        <p>
      {paragraph}
        </p>
      </section>
    </main>
  );
};
