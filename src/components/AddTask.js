import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
//import { DateRangePicker } from 'rsuite';



const AddTask = ({modal,toggle, save}) => {

    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState();
    const [status, setStatus] = useState("Pending");
    //const [submit, setSubmit] = useState();

    const handleChange =(event) =>{

        const {name, value} = event.target;

        if(name === 'taskName'){
            setTaskName(value)
        }else if(name === 'description'){
            setDescription(value)
        }else if(name === 'due'){
            setDate(value)
        }else{
            setStatus(value)
        }

    }   

    const handleSave =()=>{
        let taskObj ={};
        taskObj['TaskName'] = taskName;
        taskObj['Description'] = description;
        taskObj['Due'] = date;
        taskObj['Status'] = status;
        save(taskObj);
    }

//console.log(date)
  return (
    <>
      <div>
        <Modal centered  isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={function noRefCheck() {}}>
            Add a new task
          </ModalHeader>
          <ModalBody>
              <form>
                <div className="form-group row d-flex">
                    <div className="col-4">

                    <label> Task Name </label>
                    </div>
                    <div className="col-8">
                    <input type='text' className="form-control col-6" name='taskName' value={taskName} onChange={handleChange} />
                    </div>
                </div>

                <div className="form-group row d-flex mt-2">
                <div className="col-4">
                <label> Description </label>
                </div>
                <div className="col-8">
                    <input type='textarea' className="form-control" rows="5" name='description' value={description} onChange={handleChange}/>
                </div>
                </div>

                <div className="form-group row d-flex mt-2">
                    <div className="col-4">
                    <label>Due</label>
                    </div>
                    <div className="col-8">
                    <input type='date' className="form-control" name='due' value={date} onChange={handleChange} />
                  
                    </div>
                </div>

                <div className="form-group row d-flex mt-2">
                    <div className="col-4">
                    <label>Status</label>
                    </div>
                    <div className="col-8">
                    <select value={status} name='status' onChange={handleChange}>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                    </select>
                    </div>
                </div>
              </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleSave}>
            Save
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};

export default AddTask;
