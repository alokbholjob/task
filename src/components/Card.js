import React, {useState} from 'react';

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);


    const toggle = () => {
        setModal(!modal);
    }

    return (
        <div className="card-wrapper mr-5">
              <div className="card-top" style={{}}></div>
              <div className="task-holder">
                <span className="card-header" style={{}}></span>
                    <div>
                        <input type='checkbox' name='taskName'>
                            <span> <p className="mt-3">{taskObj.taskName}</p></span>
                            </input>
                    </div>
                {/* <p className="mt-3">{obj.Description}</p> */}
              </div>
            </div>
    );
};

export default Card;