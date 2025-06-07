// // import Card from "./comp/Card";
// // import Navbar from "./comp/Navbar";
// // import Counter from "./day41/Counter";
// // import Hooks from "./day41/Hooks";

// import Form from "./day42/Form";
// import FormSecond from "./day42/FormSecond";

// function App() {
//   let userName = "Devanshu Sir";
//   let loginInfo = "Kal ho na ho";

//   const cardData = [
//     {
//       userName: "Devanshu sir",
//     },
//     {
//       userName: "Manny sir",
//     },
//     {
//       userName: "Swastik sir",
//     },
//     {
//       userName: "Aman sir",
//     },
//     {
//       userName: "Devanshu sir",
//     },
//     {
//       userName: "Manny sir",
//     },
//     {
//       userName: "Swastik sir",
//     },
//     {
//       userName: "Aman sir",
//     },
//   ];

//   return (
//     <>
//       {/* <Navbar login={loginInfo} user={userName} />

//       {cardData.map((value) => (
//         <Card userValue={value} />
//       ))} */}

//       {/* <Hooks />
//       <Counter /> */}
//       {/* <Form /> */}
//       {/* <FormSecond /> */}
//     </>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import React from "react";
// import HomePage from "./day47/HomePage";
// import About from "./day47/About";
// import Contact from "./day47/Contact";
// import Navbar from "./day47/Navbar";
// import Footer from "./day47/Footer";
// import Login from "./day47/Login";
// import Appbar from "./day53/Appbar";

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Appbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact/:id" element={<Contact />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import ChildA from "./Day51/ChildA";

// const App = () => {
//   let firstName = "Devanshu Sir 🥰";

//   return (
//     <div>
//       <h1 className="text-5xl">App Comp 😍</h1>
//       <ChildA childa={firstName} />
//     </div>
//   );
// };

// export default App;

// import React, { createContext } from "react";
// import ChildOne from "./day51New/ChildOne";

// Context Api
// Craete Provide Consumer / useContext

// const data = createContext();

// const App = () => {
//   // let firstName = "Devanshu Sir ❤️";

//   const obj = {
//     userName: "devanshu",
//   };

//   return (
//     <div>
//       <h1 className="text-5xl font-bold">App Comp - Devanshu Sir ❤️</h1>
//       <data.Provider value={obj}>
//         <ChildOne />
//       </data.Provider>
//     </div>
//   );
// };

// export default App;
// export { data };

import React, { useCallback, useMemo } from "react";
import Memo from "./day53/Memo";
import { useState } from "react";
import { Button } from "@mui/material";

const App = () => {
  const [num, setNum] = useState(50);
  const [newNum, setNewNum] = useState(1);

  function handleDecrement() {
    setNum(num - 1);
  }

  function handleUpdate() {
    setNewNum(newNum + 1);
  }

  const memoriesValue = useMemo(
    function multi() {
      console.log("Multi Funnction render....");
      return newNum * 10;
    },
    [newNum]
  );

  const myFun = useCallback(() => {
    //task
  }, [newNum]);

  return (
    <div className="text-5xl font-bold">
      {num}🌎
      <Button variant="contained" onClick={handleDecrement}>
        Decrement
      </Button>
      {newNum}😍
      <Button variant="contained" onClick={handleUpdate}>
        Update +{" "}
      </Button>
      My Multi Value :- {memoriesValue}
      <Memo task={myFun} />
    </div>
  );
};

export default App;
