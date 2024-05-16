import "./Error.scss";

interface ErrorProps {
  text: string;
}

const Error = ({ text }: ErrorProps) => {
  return <span className='error'>{text}</span>;
};

export default Error;
