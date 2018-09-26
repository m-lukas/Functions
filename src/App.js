import React, { Component } from "react";
import fire from "./config/Fire";
import Login from "./Login";
import SignUp from "./SignUp";
import CreateAnEvent from "./CreateAnEvent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }
  render() {
    return <div className="App">{<Login />}</div>;
  }
}

export default App;

// import React, { Component } from "react";
// import "./App.css";
// import logo from "./logo.svg";
// import * as ReactBootstrap from "react-bootstrap";
// import fire from "./config/Fire";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: {}
//     };
//   }

//   componentDidMount() {
//     this.authListener();
//   }

//   authListener() {
//     fire.auth().onAuthStateChanged(user => {
//       //console.log(user);
//       if (user) {
//         this.setState({ user });
//         //localStorage.setItem('user', user.uid);
//       } else {
//         this.setState({ user: null });
//         //localStorage.removeItem('user');
//       }
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <div>
//           <button
//             type="button"
//             className="btn btn-primary btn-lg"
//             data-toggle="modal"
//             data-target="#myModal"
//           >
//             Log in
//           </button>

//           <div
//             className="modal fade"
//             id="myModal"
//             tabindex="-1"
//             role="dialog"
//             aria-labelledby="myModalLabel"
//             aria-hidden="true"
//           >
//             <div className="modal-dialog">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <h4 className="modal-title" id="myModalLabel">
//                     Log in
//                   </h4>

//                   <button type="button" className="close" data-dismiss="modal">
//                     <span aria-hidden="true">&times;</span>
//                     <span className="sr-only">Close</span>
//                   </button>
//                 </div>

//                 <div className="modal-body" />
//                 <form>
//                   <img
//                     src=""
//                     className="img-circle"
//                     alt=""
//                     width="150"
//                     height="150"
//                   />
//                   <div className="form-group">
//                     <label for="email"> Email:</label>
//                     <input type="email" class="form-control" required />
//                   </div>
//                   <div className="form-group">
//                     <label for="password"> Password:</label>
//                     <input type="password" class="form-control" required />
//                   </div>
//                 </form>
//                 <div className="modal-footer">
//                   <button
//                     type="button"
//                     className="btn btn-default"
//                     data-dismiss="modal"
//                   >
//                     Close
//                   </button>
//                   <button type="button" className="btn btn-warning">
//                     Log in
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div>
//             <button
//               type="button"
//               className="btn btn-primary btn-lg"
//               data-toggle="modal"
//               data-target="#myModal1"
//             >
//               Sign up
//             </button>

//             <div
//               className="modal fade"
//               id="myModal1"
//               tabindex="-1"
//               role="dialog"
//               aria-labelledby="myModalLabel"
//               aria-hidden="true"
//             >
//               <div className="modal-dialog">
//                 <div className="modal-content">
//                   <div className="modal-header">
//                     <h4 className="modal-title" id="myModalLabel">
//                       Sign up
//                     </h4>

//                     <button
//                       type="button"
//                       className="close"
//                       data-dismiss="modal"
//                     >
//                       <span aria-hidden="true">&times;</span>
//                       <span className="sr-only">Close</span>
//                     </button>
//                   </div>

//                   <div className="modal-body" />
//                   <form>
//                     <img
//                       src=""
//                       className="img-circle"
//                       alt=""
//                       width="150"
//                       height="150"
//                     />
//                     <div className="form-group">
//                       <label for="email"> Email:</label>
//                       <input type="email" class="form-control" required />
//                     </div>
//                     <div className="form-group">
//                       <label for="firstName"> First Name:</label>
//                       <input type="text" class="form-control" required />
//                     </div>
//                     <div className="form-group">
//                       <label for="surname"> Surname:</label>
//                       <input type="text" class="form-control" required />
//                     </div>
//                     <div className="form-group">
//                       <label for="dateOfBirth"> Date of Birth:</label>
//                       <input type="date" class="form-control" required />
//                     </div>
//                   </form>

//                   <div className="modal-footer">
//                     <button
//                       type="button"
//                       className="btn btn-default"
//                       data-dismiss="modal"
//                     >
//                       Close
//                     </button>
//                     <button type="button" className="btn btn-warning">
//                       Sign up
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
