import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { globalContext } from "../../contexts/global";
import withAuth from "../../HOC/withAuth";
import Card from '../../Components/Common/Card/Card';
import TaskAdd from '../../Components/Task/TaskAdd/TaskAdd';
import TaskFilter from '../../Components/Task/TaskFilter/TaskFilter';
import TaskList from '../../Components/Task/TaskList/TaskList';
import styles from './HomePage.module.css';

function HomePage() {
  
  const [tasks, setTasks] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [filterKeyword, setFilterKeyword] = useState("");
  const [isShowOnlyActive, setIsShowOnlyActive] = useState(false);
  const {user,checkUserIsAvailable, signOut } = useContext(globalContext);
  const navigate = useNavigate();
  const currentUser = user ?? checkUserIsAvailable();

  useEffect(()=>{
    let json =localStorage.getItem(`${currentUser?.username}-todo-list`);
    if(json){
      setTasks(JSON.parse(json));
    }
  },[currentUser])
  const setTasksToStorage = (_tasks)=>{
    localStorage.setItem(`${currentUser?.username}-todo-list`, JSON.stringify(_tasks));
  }
  const addTask = (task) => {
    setTasks([...tasks, task]);
    setTasksToStorage([...tasks, task]);
  }
  const updateStateTask = (task) => {
    setTasks((pre) => {
      const index = pre.findIndex(item => item.id === task.id);
      if (index > -1) {
        pre.splice(index, 1, task);
        setTasksToStorage([...pre]);
        return [...pre];
      }
      setTasksToStorage([...pre, task]);
      return [...pre, task];
    })
  }
  const deleteTask = (id) => {
    setTasks((pre) => {
      const index = pre.findIndex(task => task.id === id);
      if (index > -1)
        pre.splice(index, 1);
      setTasksToStorage([...pre]);
      return [...pre];
    })

  }
  const filteredTasks = tasks.filter(task =>
    (selectedStatus === 'all' || task.status === selectedStatus)
    && (filterKeyword === '' || task.name.toLowerCase().indexOf(filterKeyword.toLowerCase()) > -1)
    && (!isShowOnlyActive || task.active));
  return (
    <div>
      <h1 className="title">Project 2: {currentUser?.name}</h1>
      <Card>
        <div className={styles.left}>
          <TaskAdd onAddTask={addTask} />
          <TaskFilter onFilterByStatus={setSelectedStatus} onFilterByActive={setIsShowOnlyActive} onFilterByKeyWord={setFilterKeyword} />
        </div>
        <div className={styles.right}>
          <TaskList items={filteredTasks} onUpdateState={updateStateTask} onDelete={deleteTask} />
          <button className={styles.button__logout}
            onClick={() => {
              signOut();
              navigate("/login");
            }}
          >
            Sign out
          </button>
        </div>
      </Card>
    </div>
  );
}

export default withAuth(HomePage);
