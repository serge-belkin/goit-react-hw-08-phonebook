const HomePage = () => {
  const css = {
    container: {
      height: '450px',
    },
    title: {
      with: '100%',
      textAlign: 'center',
    },
  };
  return (
    <div style={css.container}>
      <h1 style={css.title}>Welcome page for Phone Book</h1>
      <iframe
        title="Dino"
        src="https://serge-belkin.github.io/goit-react-hw-08-phonebook/"
        frameBorder="0"
        scrolling="no"
        width="100%"
        height="100%"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default HomePage;
