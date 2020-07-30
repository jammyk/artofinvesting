import React, { Component } from 'react'
import Form from 'antd/lib/form/Form';
import { Input, Button } from 'antd';

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const {
            email,
            password,
            password_confirmation
        } = this.state;
        console.log("form submitted");
        // axios.post(http://localhost:3001/registration, {
        //     user: {
        //         email: email,
        //         password: password,
        //         password_confirmation: password_confirmation
        //     }
        // },
        //     { withCredentials: true }).then(response => {
        //         console.log("Registration result", repsonse);
        //     }).catch(error => {
        //         console.log("registration error", error);
        //     });
        event.preventDefault();

    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <Input
                        type="password"
                        name="password_confirmation"
                        placeholder="password confirmation"
                        value={this.state.password_confirmation}
                        onChange={this.handleChange}
                        required
                    />
                    <Button htmlType="submit">Register</Button>
                </Form>
            </div>
        )
    }
}
