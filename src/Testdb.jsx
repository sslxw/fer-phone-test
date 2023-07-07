import { useEffect, useState } from 'react'
import './App.css'
import db from './firebase.js';
import { collection, getDocs, where, query, onSnapshot, addDoc } from 'firebase/firestore';

function Testdb() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState([]);
  const [inputText, setInputText] = useState("");
  const [createInput, setCreateInput] = useState("");
  const uniRef = collection(db, "University");

  function handleInput(event) {
    setInputText(event.target.value);
  }

  function handleCreateInput(event) {
    setCreateInput(event.target.value);
  }

  useEffect(() => {
    const getCourses = async () => {
      const data = await getDocs(uniRef);
      setCourses(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getCourses()
  }, [])

  const getCourse= (e)=>{
    e.preventDefault();
    
    const collectionref=collection(db , "Courses");
        const q = query(collectionref , where("courseName" , ">=" , `${inputText}`));      
        const unsub= onSnapshot(q,(snapshot)=>
          setCourse(snapshot.docs.map(doc=>({...doc.data(),id:doc.id})))
        );
        return(unsub);
        }
  
  const createCourse = (e) => {
    e.preventDefault();

      addDoc(collection(db, "Courses"), {
      courseName: `${createInput}`,
    });
  }

  return (
    <div>
        {courses.map((course) => {
          return (
          // eslint-disable-next-line react/jsx-key
          <div>
            <h1>{course.name}</h1>
          </div>
          )
        })}
        <form onSubmit={getCourse}>
          <input 
          onChange={handleInput}
          type='text'
          value={inputText}></input>
          <button>Search</button>
        </form>
        <form onSubmit={createCourse}>
          <input 
          onChange={handleCreateInput}
          type='text'
          value={createInput}></input>
          <button>Create Course</button>
        </form>
        {course.map((course) => {
          return (
          // eslint-disable-next-line react/jsx-key
          <div>
            <h1>name {course.courseName}</h1>
          </div>
          )
        })}
    </div>
  
  )
}

export default Testdb
