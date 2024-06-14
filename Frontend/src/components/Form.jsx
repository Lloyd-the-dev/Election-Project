import React, { Component } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";

class VoterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        firstName: "",
        lastName: "",
        email: "",
        department: "",
        createdAt: "",
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ activeItem: { ...this.state.activeItem, [name]: value } });
    

  };

  handleSubmit = (e) => {
    e.preventDefault();
    const item = this.state.activeItem;
    
    axios
    .post("http://localhost:8000/api/Voters/", item)
      .then((res) => {
        console.log(res.data)
        console.log("Data successfully sent to the server:", res.data);
        // Clear form after successful submission
        this.setState({
          activeItem: {
            firstName: "",
            lastName: "",
            email: "",
            department: "",
            createdAt: "",
          },
        });
      })
      .catch((err) => {
        console.error("Error sending data to the server:", err);
      });
  };

  render() {
    return (
      <Card color="transparent" shadow={false} className="form-box">
        <Typography variant="h4" color="blue-gray">
          Upload Eligible Voter's info
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter the details below.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={this.handleSubmit}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Student's Firstname
            </Typography>
            <Input
              size="lg"
              placeholder="firstname"
              name="firstName"
              value={this.state.activeItem.firstName}
              onChange={this.handleChange}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Student's Lastname
            </Typography>
            <Input
              size="lg"
              placeholder="lastname"
              name="lastName"
              value={this.state.activeItem.lastName}
              onChange={this.handleChange}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Student's Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              name="email"
              value={this.state.activeItem.email}
              onChange={this.handleChange}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Student's Department
            </Typography>
            <Input
              size="lg"
              placeholder="department"
              name="department"
              value={this.state.activeItem.department}
              onChange={this.handleChange}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Created At
            </Typography>
            <Input
              type="date"
              size="lg"
              name="createdAt"
              value={this.state.activeItem.createdAt}
              onChange={this.handleChange}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button className="mt-6" fullWidth type="submit">
            Upload
          </Button>
        </form>
      </Card>
    );
  }
}

export default VoterForm;
