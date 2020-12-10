import React from 'react';
import './Todo.css';

function TodoOne(props) {

  let mappedListOne = props.listOne.map(item => {
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
        <div className="todoOne">
          <ul>
            {mappedListOne}
          </ul>
        </div>
      </div>
    )
}

export default TodoOne;