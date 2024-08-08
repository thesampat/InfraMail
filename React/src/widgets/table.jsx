import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
    Spinner,
  } from "@material-tailwind/react";
  import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
  
const Table = ({headers, tableData}) => {
    return (
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
  <table className="w-full min-w-[640px] table-auto">
    <thead>
      <tr>
        {Object.keys(headers || {}).map((header, index) => (
          <th key={index} className="border-b border-blue-gray-50 py-3 px-5 text-left bg-blue-400 ">
            <Typography
              variant="small"
              className="text-[16px] font-bold uppercase text-white"
            >
              {headers[header]}
            </Typography>
          </th>
        ))}
      </tr>
    </thead>
    {tableData !== null ? (
      <tbody>
        {tableData?.map((rowData, rowIndex) => {
           const className = `py-3 px-5 ${
            rowIndex === tableData.length - 1
              ? ""
              : "border-b border-blue-gray-50"
          }`;
          return(
          <tr key={rowIndex}>
            {Object.keys(headers).map((header, colIndex) => (
              <td key={colIndex} className={className}>
                <div className="flex items-center gap-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold"
                  >
                    {rowData[header]||'-'}
                  </Typography>
                </div>
              </td>
            ))}
          </tr>
        )})}
      </tbody>
    ):(
      <tbody>
        <tr>
          <td colSpan={Object.keys(headers)?.length}>
      <div className="mx-auto w-fit "><Spinner className="h-[50vh] w-10"/></div>
      </td>
      </tr>

      </tbody>
    )}
  </table>
</CardBody>
        </Card>
      </div>
    );
  }
  
  export default Table;
  