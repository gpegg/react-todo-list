import React from 'react';
import ReactDOM from 'react-dom';
import { Task } from './task';
import { AddTask } from './add-task';
import { ClearTasks } from './clear-tasks';
import './index.css';
import './bootstrap.min.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        let taskList = [{id: 0, task: "Add a Task"}];
        this.state = {
            tasks: taskList,
            newTask: {id: 0, task: ""},
        }

        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.clearTasks = this.clearTasks.bind(this);
    }

    addTask() {
        let newTask = document.getElementById('newTask').value;
        if (newTask !== '') {
            let taskList = this.state.tasks;
            let length = this.state.tasks.length;
            let lastId, newId;
            if (this.state.tasks[length-1] === undefined) {
                lastId = 1;
                newId = lastId;
            } else {
                lastId = this.state.tasks[length - 1].id;
                newId = lastId + 1;
            }
            taskList.push({id: newId, task: newTask});
            this.setState({
                tasks: taskList,
            })
        } else {
            alert("You must type something to add a new task")
        }
    }

    removeTask(e) {
        let id = e.target.id;
        let taskList = this.state.tasks;
        console.log("removing task " + id);
        delete taskList[id];
        this.setState({
            tasks: taskList,
        });
    }

    clearTasks() {
        let taskList = this.state.tasks;
        for (let i = 0; i < taskList.length; i++) {
            delete taskList[i];
        }
        this.setState({
            tasks: taskList,
        })
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <h1>React To-Do App</h1>
                    </div>
                    <div className="row justify-content-center">
                        <h2>Simple, yet effective</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center"><h2>To-Do:</h2></div>
                    <div className="row list-body">
                        <AddTask onClick={this.addTask} />
                        <div className="col-12 justify-content-center list-heads">
                            <div className="row">
                                <div className="col-3 text-right">
                                    <h3>#</h3>
                                </div>
                                <div className="col-6 text-center">
                                    <h3>Task</h3>
                                </div>
                                <div className="col-3 text-left">
                                    <h3>X</h3>
                                </div>
                            </div>
                        </div>
                        <Task tasks={this.state.tasks} onClick={this.removeTask} />
                        <ClearTasks tasks={this.state.tasks} onClick={this.clearTasks} />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));