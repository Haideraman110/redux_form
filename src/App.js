import DisplayData from "./component/DisplayData";
import Forms from "./component/Forms";
import SectionForm from "./component/SectionForm";


function App() {
  return (
    <>
      <SectionForm id='container_main'>
        <Forms />
      </SectionForm>
      <section>
        <DisplayData/>
      </section>


    </>
  );
}

export default App;
