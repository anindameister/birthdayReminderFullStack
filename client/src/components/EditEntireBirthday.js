import React,{Fragment, useState} from 'react'


const EditEntireBirthday = ({birthdays}) => {
  // console.log(tickets)
    const [name, setName] = useState(birthdays.name);

    const [id, setId] = useState(birthdays.id); 
   
    const [age, setAge] = useState(birthdays.age);

  
    //edit description function
    const updateBirthday=async e=>{
      e.preventDefault()
      try {
        const body = { id,name,age };
        const response=await fetch(`http://localhost:5000/birthdayReminder/${birthdays.birthdayremindertable_id}`,{
          method:"PUT",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(body)
        })

        console.log(response)
        window.location="/"
        
      } catch (error) {
        console.error(error.message)
        
      }

    }

    
    return (
        <Fragment>
                 
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${birthdays.birthdayremindertable_id}`}>
        Edit
        </button>

        <div className="modal" id={`id${birthdays.birthdayremindertable_id}`} 
        // {/*below is creating problem*/}
        // onClick={()=>{setDescription(tickets.description);setId(tickets.id);setPriority(tickets.priority);setStatus(tickets.status);setSubject(tickets.subject);setCreated_at(tickets.setCreated_at)}}
        >
        <div className="modal-dialog">
            <div className="modal-content">

           
            <div className="modal-header">
                <h4 className="modal-title">EditInfo</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

       
            <div className="modal-body">
                <input type="text" className="form-control" value={id} onChange={e=>setId(e.target.value)}></input>
                <input type="text" className="form-control" value={name} onChange={e=>setName(e.target.value)}></input>
                <input type="text" className="form-control" value={age} onChange={e=>setAge(e.target.value)}></input>
             

            </div>

            
            <div className="modal-footer">
                {/* <h6>PleaseUseTAB2Move2NextCell</h6> */}
            <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={e=>updateBirthday(e)}>EditInfo</button>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

            </div>
        </div>
        </div> 



        
        </Fragment>
    )
}

export default EditEntireBirthday
