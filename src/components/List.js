import { useState} from 'react'
import '../asset/components/List.scss'
import { toast } from 'react-toastify';
const TodoList = ({jobs,setJobs}) => {
  const [job,setJob] = useState("");
  const deleteItem = (i,array) =>{
    const newList = array.filter((item,index)=>{
      return index !==i;
    })
    setJobs(newList);
    toast.success("Successful deleted")
  }
  const [check,setCheck] = useState(-1);
  const update = (i)=>{
    setJob(jobs[i]);
    setCheck(i);
  }
  const updated= (i)=> {
    jobs[i] = job;
    setCheck(-1);
  }
  return(
    <ul className='todo-list'>
      {jobs.map((j,i,array)=>{
        return(
          <li className='cv' key ={i}> 
              {check === i ? 
              <>
              <input
                className='input edit-save'
                type="text"
                value = {job}
                onChange={e => setJob(e.target.value)}
              />
              <input className='btn-update' type='button' value='Update' onClick={()=>updated(i)}/>
              </>
              
              : <h3>{j}</h3> }
         
             <i
              onClick= {()=> deleteItem(i,array)} 
              className="fa-sharp fa-solid fa-trash"></i>
             <i 
             onClick={()=>update(i)}
             className="fa-solid fa-pen-to-square"></i>
          </li>
        )
      })}
    </ul>
  )
} 
const List = () =>{
    const [job,setJob] = useState("")
    const [jobs,setJobs] = useState([]);
    const handleSubmit = ()=>{
      if(!job){
        return ;
      }
      setJobs(prev => [...prev,job]);
      setJob('');
      toast.success("Success Notification !");
      console.log('Successfully added123!')
    }
    return (
    <div className='bg'>
      <div className='container'>
        <h1 className='head'>
            What's the plan for today?
        </h1>
        <br/>
        <input value ={job} onChange={e => setJob(e.target.value)} type='text' />
        <button type='button' onClick={ () => handleSubmit()}>Add</button>
        <div className='list-job'>
          <TodoList jobs={jobs} setJobs={setJobs} job={job} setJob={setJob}/>
        </div>
      </div>
    </div>
    );
}
export default List;