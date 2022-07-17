import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greetings";
import Func from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Greetings2 from "./components/Greetings2";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import Eventbind from "./components/Eventbind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import ParentComp from "./components/PureComponent/ParentComp";
import Refs from "./components/Refs";
import FRParentInput from "./components/RefForwarding/FRParentInput";
import ClickCounter from "./components/HigherOrderComponents/ClickCounter";
import HoverCounter from "./components/HigherOrderComponents/HoverCounter";
function App() {
  return (
    <div className="App">
      {/* <Greet /> */}
      {/* <Func /> */}

      {/*Props */}
      {/* <Hello name='Matt'></Hello> */}
      {/* <Hello name='Frank'></Hello> */}
      {/* <Hello name='Karen'></Hello> */}

      {/*10 State */}
      {/*<Message></Message>*/}

      {/*11 setState*/}
      {/*<Counter></Counter>*/}

      {/*12.Destructuring Props and state*/}
      {/* <Greetings2 name='Ned Stark' title='Hand'></Greetings2>
        <Greetings2 name='Jon Snow' title='King in the North'></Greetings2>
        <Greetings2 name='Jaime' title='Kingslayer'></Greetings2> */}

      {/*13 Event Handling*/}
      {/*<FunctionClick></FunctionClick>
        <ClassClick></ClassClick>*/}

      {/*14 sEvent Binding*/}
      {/*<Eventbind></Eventbind>*/}

      {/*15.Methods as Props */}
      {/*<ParentComponent></ParentComponent>*/}

      {/*<UserGreeting></UserGreeting>*/}

      {/*<NameList></NameList>*/}

      {/*<ParentComp></ParentComp>*/}

      {/*28 Refs */}
      {/*<Refs></Refs>*/}

      {/*30 Forwarding Refs*/ }
      {/*<FRParentInput></FRParentInput>*/}

      {/*34 Higher Order Components */}
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;
