import React from 'react';

export class Task extends React.Component {
    
    render() {
        let removeTask = this.props.onClick;
        return (
            <div className="col-12 justify-content-center list">
                {this.props.tasks.map(
                    function(task, i) {
                        return (
                            <div className="row" key={i}>
                                <div className="col-3 text-right">
                                    <h3>Task {i}:</h3>
                                </div>
                                <div className="col-6 text-center">
                                    <h3>{task.task}</h3>
                                </div>
                                <div className="col-3 text-left">
                                    <h3 onClick={removeTask} class="btn btn-danger" id={i}>X</h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}