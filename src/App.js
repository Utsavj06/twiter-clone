import LeftSideContents from "./Contents/LeftSideContents";
import "./App.css";
import RightSideBar from "./Contents/RightSideBar";
import MainContainer from "./Main_ContentBar/MainContainer";

function App() {
  const getData = (enteredPost) => {
    const newPost = {
      name: enteredPost,
      id: Math.trunc(Math.random() * 10 + 1),
    };
   //props.onAddPost(newPost);
    return null;
  };

  

  return (
    <div className="sample">
      <LeftSideContents onAddPost={getData} />
      <MainContainer />
      <RightSideBar />
    </div>
  );
}

export default App;
