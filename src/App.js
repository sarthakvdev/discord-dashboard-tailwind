import Sidebar from "./components/Sidebar";
import ChannelBar from "./components/ChannelBar";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <ChannelBar />
    </div>
  );
}

export default App;
