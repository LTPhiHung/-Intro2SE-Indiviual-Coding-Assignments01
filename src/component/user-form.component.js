import React, { Component }  from "react";
export default class UserForm extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" />
                    <small className="text-danger">Name is aria-required.</small>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" />
                </div>

                <button type="submit" className="btn btn-block btn-danger">Create User</button>
            </form>
        );
    }
}