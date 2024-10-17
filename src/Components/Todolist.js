import React, { Component } from 'react'
import Todoitem from './Todoitem'

export default class Todolist extends Component {
  render() {
       const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">  
           <h3 className="text-capitalize text-center" >
              todo list
           </h3>

           {items.map(item => {
            return <Todoitem handleEdit={() => handleEdit(item.id)} 
                             handleDelete={() => handleDelete(item.id)}
                             key={item.id}  // Corrected this line
                             title={item.item}  // Corrected the prop name from 'Title' to 'title'
                             />
           })}
             <button type="button" 
             className="btn btn-sm btn-danger btn-block mt-5"
             onClick={clearList}
             >
               Clear List
             </button>
      </ul>
    )
  }
}




// import React, { Component } from 'react'

// import Todoitem from './Todoitem'

// export default class Todolist extends Component {
//   render() {
//        const {items, clearList, handleDelete} =this.props
//     return (
//       <ul className="list-group my-5">  
//            <h3 className="text-capitalize text-center" >
//               todo list
//            </h3>

//            {items.map(item => {
//             return <Todoitem  handleDelete={() => handleDelete(item.id)}
//                              key={items.id} 
//                              Title={item.item}w
                             
//                              />
//            })}
//              <button type="button" 
//              className="btn btn-sm btn-danger btn-block mt-5"
//              onClick={clearList}
//              >
//                Clear List
//              </button>
//       </ul>
//     )
//   }
// }



