import { Organization } from "@/types/Organization";
import { v4 as uuidv4 } from "uuid";
import OrganizationCard from "../OrganizationCard/OrganizationCard";
import "./List.scss";

interface ListProps {
  data: Organization[];
  setPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const List = ({ data, setPopupOpen, onCardClick }: ListProps) => {
  return (
    <ul className='list'>
      {data.map((item) => {
        return (
          <OrganizationCard
            key={uuidv4()}
            org={item}
            setPopupOpen={setPopupOpen}
            onCardClick={onCardClick}
          />
        );
      })}
    </ul>
  );
};
export default List;
