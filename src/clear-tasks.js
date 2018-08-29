import React from 'react';

export class ClearTasks extends React.Component {
    render() {
        return (
            <div className="col-12">
                <div className="row justify-content-center">
                    <button className="btn btn-primary" onClick={this.props.onClick} >Clear Tasks</button>
                </div>
            </div>
        )
    }
}