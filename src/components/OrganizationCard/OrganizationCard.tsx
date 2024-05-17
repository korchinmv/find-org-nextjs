import { Organization } from "@/types/Organization";
import { getСoordinates } from "@/utils/getCoordinates";
import "./OrganizationCard.scss";
import { useState } from "react";

interface OrganizationCardProps {
  org: Organization;
  setPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrganizationCard = ({ org, setPopupOpen }: OrganizationCardProps) => {
  const [coordinates, setCoordinates] = useState<string | undefined>("");
  const handleClick = () => {
    setPopupOpen(true);
  };

  getСoordinates({
    adress: org.data.address?.value,
    setCoordinates: setCoordinates,
  });

  return (
    <li className='list__item'>
      <article className='organization-card'>
        <h2 className='organization-card__title'>{org.value}</h2>
        <ul className='organization-card__list'>
          {org.data.management?.name && (
            <li className='organization-card__item'>
              Основатель: {org.data.management.name}
            </li>
          )}

          {org.data.management?.post && (
            <li className='organization-card__item'>
              Должность: {org.data.management.post}
            </li>
          )}

          {org.data.address?.value && (
            <li className='organization-card__item'>
              {"Адрес: "}
              <button
                className='organization-card__button'
                onClick={handleClick}
              >
                {` ${org.data.address.value}`}
              </button>
            </li>
          )}
        </ul>
      </article>
    </li>
  );
};

export default OrganizationCard;
