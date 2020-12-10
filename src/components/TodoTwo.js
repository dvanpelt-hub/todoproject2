import React from 'react';
import './Todo.css';

function TodoTwo(props) {

  let mappedListTwo = props.listTwo.map(item => {
    return(
      <>
      <li>
        {item} -
        <input
          type="checkbox"
          name={item}
          value={item}
          />
      </li>
      </>
    )
  })

    return(
      <div className="todo">
        <div className="todoTwo">
          <ul>
            {mappedListTwo}
          </ul>
        </div>
      </div>
    )
}

export default TodoTwo;