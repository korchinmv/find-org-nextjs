"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetOrganizationMutation } from "@/redux/api/organization.api";
import { organizationsSelector } from "@/redux/features/organizations/organizationsSelector";
import { useEffect, useState } from "react";
import { organizations } from "@/redux/features/organizations/organizationsSlice";
import { Organization } from "@/types/Organization";
import { MoonLoader } from "react-spinners";
import ConfirmPopup from "@/components/ConfirmPopup/ConfirmPopup";
import SearchForm from "@/components/SearchForm/SearchForm";
import List from "@/components/List/List";

interface OrganisationPageProps {
  params: { slug: "string" };
}

const OrganisationPage = ({ params: { slug } }: OrganisationPageProps) => {
  const [getData, { isError, isLoading }] = useGetOrganizationMutation();
  const [selectedCard, setSelectedCard] = useState<Organization>();
  const [errorData, setErrorData] = useState<boolean>(false);
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const organizationsList = useAppSelector(organizationsSelector);
  const dispatch = useAppDispatch();

  const handleCardClick = (card: Organization) => {
    setSelectedCard(card);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    if (slug) {
      getData({ query: slug }).then((result) => {
        if (result.data.suggestions.length === 0) {
          setErrorData(true);
          dispatch(organizations(result.data.suggestions));
        } else {
          setErrorData(false);
          dispatch(organizations(result.data.suggestions));
        }

        dispatch(organizations(result.data.suggestions));
      });
    }
  }, [slug, getData, dispatch]);

  return (
    <>
      <main className='main'>
        <SearchForm errorSearchData={errorData} errorData={isError} />
        {isLoading ? (
          <MoonLoader color='#df4343' />
        ) : (
          <List
            data={organizationsList.suggestions}
            onCardClick={handleCardClick}
            setPopupOpen={setPopupOpen}
          />
        )}
      </main>
      <ConfirmPopup
        title='Перейти на внешний ресурс?'
        buttonText='Перейти'
        closePopup={closePopup}
        isOpen={popupOpen}
        card={selectedCard}
      />
    </>
  );
};

export default OrganisationPage;
