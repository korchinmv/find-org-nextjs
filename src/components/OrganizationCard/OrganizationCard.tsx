import { Organization } from "@/types/Organization";
import "./OrganizationCard.scss";

interface OrganizationCardProps {
  org: Organization;
}

const OrganizationCard = ({ org }: OrganizationCardProps) => {
  console.log(org);

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
              Адрес:
              <a className='organization-card__link' href='#'>
                {` ${org.data.address.value}`}
              </a>
            </li>
          )}
        </ul>
      </article>
    </li>
  );
};

export default OrganizationCard;
