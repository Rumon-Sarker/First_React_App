import Content from "./Component/Content";
import Footer from "./Component/Footer";
import Header from "./Component/Header";

const App = () => {

  return (
    <div>
      <Header title="This is My First React App" />
      <Content />
      <Footer />
    </div>
  );
};

export default App;