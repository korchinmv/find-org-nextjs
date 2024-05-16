import { Organization } from "@/types/Organization";
import { v4 as uuidv4 } from "uuid";
import OrganizationCard from "../OrganizationCard/OrganizationCard";
import "./List.scss";

interface ListProps {
  data: Organization[];
}

const List = ({ data }: ListProps) => {
  return (
    <ul className='list'>
      {data.map((item) => {
        return <OrganizationCard key={uuidv4()} org={item} />;
      })}
    </ul>
  );
};
export default List;
