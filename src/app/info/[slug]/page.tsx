"use client";
import { useAppSelector } from "@/redux/hooks";
import { organizationsSelector } from "@/redux/features/organizations/organizationsSelector";
import "./../../../app/globals.scss";
import SearchForm from "@/components/SearchForm/SearchForm";
import List from "@/components/List/List";

interface OrganisationPageProps {
  params: { slug: "string" };
}

const OrganisationPage = ({ params: { slug } }: OrganisationPageProps) => {
  const organizationsList = useAppSelector(organizationsSelector);

  return (
    <main className='main'>
      <SearchForm />
      <List data={organizationsList.suggestions} />
    </main>
  );
};

export default OrganisationPage;
