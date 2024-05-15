"use client";

import { useGetOrganisationMutation } from "@/redux/api/organization.api";
import styles from "./../../page.module.scss";
import SearchForm from "@/components/SearchForm/SearchForm";

interface OrganisationPageProps {
  params: { slug: "string" };
}

const OrganisationPage = ({ params: { slug } }: OrganisationPageProps) => {
  return (
    <main className={styles.main}>
      <SearchForm />
    </main>
  );
};

export default OrganisationPage;
