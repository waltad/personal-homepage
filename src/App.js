import Section from './common/section';
import myPhoto from './images/myPhoto.jpg'

function App() {
  return (
    <>
      <p>Tadeusz Waluga</p>
      <Section
        photo={myPhoto}
        title="Tadeusz Waluga"
      />
    </>
  );
}

export default App;
