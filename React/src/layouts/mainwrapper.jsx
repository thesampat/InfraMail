import { Card } from "@material-tailwind/react";

const MainWrapper = ({ children }) => {
  return <Card className="cardsetter p-3 bg-unset shadow-[false]">{children}</Card>;
};

export default MainWrapper;