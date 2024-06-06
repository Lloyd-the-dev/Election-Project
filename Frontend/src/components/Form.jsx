import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export function Form() {
    return (
       <Card color="transparent" shadow={false} className="form-box">
        <Typography variant="h4" color="blue-gray">
          Upload Eligible Voter's info
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter the details below.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Student's Firstname
            </Typography>
            <Input
              size="lg"
              placeholder="firstname"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
      
          <Button className="mt-6" fullWidth>
            Upload
          </Button>
        </form>
      </Card>
    );
  }