const Home = () => {
  const css = {
    container: {
      height: '450px',
    },
    title: {
      with: '100%',
      textAlign: 'center',
      color: '#1B263B',
    },
  };
  return (
    <div style={css.container}>
      <h1 style={css.title}>Welcome to your PhoneBook</h1>

    </div>
  );
};

export default Home;
