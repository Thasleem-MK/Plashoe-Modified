// import React from "react";
// import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// function LoginProtection({ children }) {
//     const Navigate=useNavigate();
//   return (
//     <div className="col-12 vh-100">
//       <div
//         className="col-md-5 col-9 bg-secondary mx-auto mt-5 rounded"
//         style={{
//           height: "50%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-evenly",
//           flexDirection:"column"
//         }}
//       >
//         <h1 className="display-1 text-black">Login</h1>
//         <div className="d-flex flex-column">
//           <Button size="lg" className="bg-white text-black mb-3" onClick={()=>Navigate("/")}>
//             User Login
//           </Button>
//           <Button size="lg" className="bg-white text-black" onClick={()=>Navigate("/register")}>Admin Login</Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginProtection;
