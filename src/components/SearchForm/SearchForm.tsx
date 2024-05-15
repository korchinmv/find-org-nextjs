"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGetOrganisationMutation } from "@/redux/api/organization.api";
import styles from "./SearchForm.module.scss";
import Image from "next/image";
import iconSearch from "./../../../public/icon-search.svg";

const SearchForm = () => {
  const [inputSearchForm, setInputSearchForm] = useState<string>("");
  const [getData] = useGetOrganisationMutation();
  const router = useRouter();

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setInputSearchForm(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    getData({ query: inputSearchForm }).then((result) => console.log(result));
    router.push(`/info/${inputSearchForm}`);
  };

  return (
    <form className={styles.form} action='#' onSubmit={handleSubmit}>
      <input
        className={styles.input}
        placeholder='Укажите ИНН'
        value={inputSearchForm}
        onChange={handleInputChange}
        maxLength={10}
        type='search'
      />

      <button className={styles.button} aria-label='Начать поиск'>
        <Image src={iconSearch} width={30} height={30} alt='Иконка поиска' />
      </button>
    </form>
  );
};

export default SearchForm;
