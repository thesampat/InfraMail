import { projectsTableData } from "@/data";
import MainWrapper from "@/layouts/mainwrapper";
import { SimpleButton } from "@/widgets/inputs/buttons";
import { InputDefault } from "@/widgets/inputs/inputs";
import Table from "@/widgets/table";
import { Card, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const headers = {"companies":"companies", "members":"members", "budget":"budget", "completion":"completion"}


const MainClient = () => {
  const navigate = useNavigate()
  return (
    <MainWrapper>
        <div className="w-100"><SimpleButton onClick={e=>navigate('add')} text={"Add Client"} width={10}/></div>
        <Table headers={headers} tableData={projectsTableData}/>
    </MainWrapper>
  );
};

export default MainClient;