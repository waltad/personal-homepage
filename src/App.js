import Section from './common/section';
import myPhoto from './images/myPhoto.jpg'

function App() {
  return (
    <>
      <Section
        photo={myPhoto}
        title="Tadeusz Waluga"
      />
    </>
  );
}

export default App;
