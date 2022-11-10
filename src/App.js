import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserForm from './component/user-form.component';

function App() {
    return (
        <div className="container">
            <div class="row d-flex justify-content-center">
                <div class="col-sm-4">
                    <div class="card shadow">
                        <h4 class="card-header">
                            Registration Form
                        </h4>
                        <div class="card-body">
                            <UserForm />
                        </div>
                        <div class="card-footer text-muted text-center">
                            Thank you for using Register Form
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;