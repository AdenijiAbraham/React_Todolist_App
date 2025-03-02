import React, { Component } from 'react'

export default class Todoitem extends Component {
  render() {
     const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex
                      justify-content-between my-2"
      >
         <h6>{title}</h6>
         <div className="todo-icon">
            <span className="mx-2 text-success" onClick={handleEdit}>
                 <i className="fas fa-pen"></i>
            </span>
            <span className="mx-2 text-danger" onClick={handleDelete}>
                 <i className="fas fa-trash"></i>
            </span>
         </div>
      </li>
    )
  }
}


// import React, { Component } from 'react'

// export default class Todoitem extends Component {
//   render() {
//      const { title, handleDelete } = this.props
//     return (
//       <li className="list-group-item text-capitalize d-flex
//                       justify-content-between my-2"
//       >
//          <h6 >{title}</h6>
//          <div className="todo-icon">
//             <span className="mx-2 text-success">
//                  <i className="fas fa-pen"></i>
//             </span>
//             <span className="mx-2 text-danger" onClick={handleDelete}>
//                  <i className="fas fa-trash"></i>
//             </span>
//          </div>
//       </li>
//     )
//   }
// }
