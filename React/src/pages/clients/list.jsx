import { BaseUrl } from "@/App";
import { projectsTableData } from "@/data";
import MainWrapper from "@/layouts/mainwrapper";
import { SimpleButton } from "@/widgets/inputs/buttons";
import Table from "@/widgets/table";
import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const headers = {"name":"name", "department":"department", "phone":"phone", "title":"title"}

const GetList = async (path) => {
  try {
    let res = await axios.get(`${BaseUrl}${path}`);
    return res
  } catch (error) {
    console.log(error)
    return error;
  }
};

const MainClient = () => {
  const navigate = useNavigate()
  const [listdata, setlistdata] = useState(null)

  useEffect(()=>{
      GetList('client').then(r=>{
        console.log(r?.data)
        setlistdata(r?.data)
      })
  }, [])

  console.log(listdata, 'list data')

  return (
    <MainWrapper>
        <div className="w-100"><SimpleButton onClick={e=>navigate('add')} text={"Add Client"} width={10}/></div>
        <Table headers={headers} tableData={listdata}/>
    </MainWrapper>
  );
};

export default MainClient;