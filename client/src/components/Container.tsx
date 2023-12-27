import { Container as ReactStrapContainer } from "reactstrap";

type containerProps = {
  children: React.ReactNode;
}

const Container = ({ children }: containerProps) => {
  return (
    <ReactStrapContainer>
      {children}
    </ReactStrapContainer>
  )
}

export default Container;