import { projectsTableData } from "@/data";
import MainWrapper from "@/layouts/mainwrapper";
import { InputDefault } from "@/widgets/inputs/inputs";
import Table from "@/widgets/table";
import { Card, Typography } from "@material-tailwind/react";

const headers = {"companies":"companies", "members":"members", "budget":"budget", "completion":"completion"}


const MainVendor = () => {
  return (
    <MainWrapper>
        <Table headers={headers} tableData={projectsTableData}/>
    </MainWrapper>
  );
};

export default MainVendor;