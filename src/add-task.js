import React from 'react';

export class AddTask extends React.Component {
    render() {
        return (
            <div className="col-12">
                <div className="row">
                    <div className="input-group mb-3 justify-content-center">
                        <input type="text" className="form-control" id="newTask" placeholder="Add new task..." aria-label="Add new task..." required/>
                        <button className="btn btn-primary" type="button" onClick={this.props.onClick} >Add Task</button>
                    </div>
                </div>
            </div>
        )
    }
}

