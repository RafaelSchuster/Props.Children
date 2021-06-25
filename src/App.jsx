import './App.css';
import ChildComp from './ChildComp';
import ChildComp2 from './ChildComp2';
import ParentComponent from './ParentComponent';

const Each1 = ({ name }) => <li>{name}</li>;
Each1.displayName = "Chield1"

const Each2 = ({ name }) => <li>{name}</li>;
Each2.displayName = "Chield2"

function App() {
  return (
    <div>
      <ParentComponent>
        <ChildComp />
        <ChildComp2 />
        <Each1 name="Nice" />
        <Each2 name="Cool" />
      </ParentComponent>
    </div>
  );
}

export default App;
