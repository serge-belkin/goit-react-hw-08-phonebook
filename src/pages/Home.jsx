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

    </div>
  );
};

export default HomePage;
