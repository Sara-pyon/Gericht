import { ReactNode } from "react";

interface Props{
    children: ReactNode;
}

const Container = ({children}:Props) => {
  return (
    <div className="p-5">
        {children}
    </div>
  )
}

export default Container