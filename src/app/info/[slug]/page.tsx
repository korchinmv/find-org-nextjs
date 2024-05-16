"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { organizationsSelector } from "@/redux/features/organizations/organizationsSelector";
import { useGetOrganizationMutation } from "@/redux/api/organization.api";
import { useEffect, useState } from "react";
import { organizations } from "@/redux/features/organizations/organizationsSlice";
import { MoonLoader } from "react-spinners";
import "./../../../app/globals.scss";
import SearchForm from "@/components/SearchForm/SearchForm";
import List from "@/components/List/List";

interface OrganisationPageProps {
  params: { slug: "string" };
}

const OrganisationPage = ({ params: { slug } }: OrganisationPageProps) => {
  const [getData, { isError, isLoading }] = useGetOrganizationMutation();
  const [errorData, setErrorData] = useState<boolean>(false);
  const organizationsList = useAppSelector(organizationsSelector);
  const dispatch = useAppDispatch();

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
    <main className='main'>
      <SearchForm errorSearchData={errorData} errorData={isError} />
      {isLoading ? (
        <MoonLoader color='#df4343' />
      ) : (
        <List data={organizationsList.suggestions} />
      )}
    </main>
  );
};

export default OrganisationPage;
