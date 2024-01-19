import { ReactNode } from "react";

interface Props{
    children: ReactNode;
}

const Container = ({children}:Props) => {
  return (
    <div className="p-5 mw-1200px" >
        {children}
    </div>
  )
}

export default Container