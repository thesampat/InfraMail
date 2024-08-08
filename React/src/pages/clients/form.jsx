import { BaseUrl } from '@/App';
import MainWrapper from '@/layouts/mainwrapper';
import { DivCard } from '@/layouts/wrappers';
import { ButtonLoading } from '@/widgets/inputs/buttons';
import { CustomInput } from '@/widgets/inputs/inputs';
import { Card, CardBody, Typography, Button } from '@material-tailwind/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

  const PostItem = async (path, data, setloading) => {
    try {
      let res = await axios.post(`${BaseUrl}${path}`, data);
      return res
    } catch (error) {
      console.log(error)
      return error;
    }
  };

const ClientForm = () => {
  const [formdata, setformdata] = useState({});
  const [loading, setloading] = useState(false);
  const navi = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    setloading(true)
    let res = await PostItem('client', formdata, setloading);
    if(res?.status==201){
      navi(-1)
    }
    else{
      window.alert(res?.response?.data?.message||"something went wrong")
    }
    setloading(false)
  };

  return (
    <MainWrapper>
      <Card className="shadow-unset p-2">
        <Typography variant="h4" color="gray" className="ps-4">
          Client Information
        </Typography>
        <CardBody className="w-full s-0 w-min-">
          <form onSubmit={handleSubmit}>
            <CardBody className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
              <CustomInput name="name" type="text" label="Name" value={formdata.name} onChange={handleChange} />
              <CustomInput name="title" type="text" label="Title" value={formdata.title} onChange={handleChange} />
              <CustomInput name="department" type="text" label="Department" value={formdata.department} onChange={handleChange} />
              <CustomInput name="area" type="text" label="Area" value={formdata.area} onChange={handleChange} />
              <CustomInput name="suburb" type="text" label="Suburb" value={formdata.suburb} onChange={handleChange} />
              <CustomInput name="phone" type="phone" label="Phone" value={formdata.phone} onChange={handleChange} />
              <CustomInput name="mobile" type="phone" label="Mobile" value={formdata.mobile} onChange={handleChange} />
              <CustomInput name="email" type="email" label="Email" value={formdata.email} onChange={handleChange} />
              <CustomInput name="item_id" type="text" label="Item ID" value={formdata.item_id} onChange={handleChange} />
            </CardBody>
            <ButtonLoading className="ms-5" loading={loading} label={'Submit'} />
          </form>
          
        </CardBody>
      </Card>
    </MainWrapper>
  );
};

export default ClientForm;
