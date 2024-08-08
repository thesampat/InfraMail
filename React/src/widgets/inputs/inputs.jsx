import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { Input, Typography } from "@material-tailwind/react";


const CustomInput = ({name, type, label, value, onChange, error=false}) => {
    return (
      <div className="w-72">
        <Input name={name} onChange={onChange} color="indigo" type={type} label={label} value={value} error=''/>
        {error && 
        <Typography
        variant="small"
        color="red"
        className="mt-1 flex items-center gap-1 font-normal ps-3"
      >
        {error}
      </Typography>}
      </div>
    );
}


export {CustomInput}