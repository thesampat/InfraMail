import { Card } from "@material-tailwind/react"

const DivCard=({childrens})=>{
    return(
        <Card className="bg-white shadow-unset rounded px-8 pt-6 pb-8">{childrens}</Card>
    )
}

export {DivCard}