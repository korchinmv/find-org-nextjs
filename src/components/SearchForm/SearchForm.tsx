"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGetOrganizationMutation } from "@/redux/api/organization.api";
import { useAppDispatch } from "@/redux/hooks";
import "./SearchForm.scss";
import Image from "next/image";
import iconSearch from "./../../../public/icon-search.svg";
import Error from "../Error/Error";
import { organizations } from "@/redux/features/organizations/organizationsSlice";

const SearchForm = () => {
  const [inputSearchForm, setInputSearchForm] = useState<string>("");
  const [errorForm, setErrorForm] = useState<boolean>(false);
  const [getData, { isError }] = useGetOrganizationMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setInputSearchForm(event.target.value.replace(/\D/g, ""));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    getData({ query: inputSearchForm }).then((result) => {
      if (result.data.suggestions.length === 0) {
        setErrorForm(true);
        setInputSearchForm("");
        dispatch(organizations(result.data.suggestions));
      } else {
        setErrorForm(false);
        dispatch(organizations(result.data.suggestions));
        router.push(`/info/${inputSearchForm}`);
      }
    });
  };

  return (
    <>
      <form className='form' action='#' onSubmit={handleSubmit}>
        <input
          className='form__input'
          placeholder='Укажите ИНН'
          value={inputSearchForm}
          onChange={handleInputChange}
          maxLength={12}
          minLength={10}
          pattern='[0-9]*'
          title='Допускаются только числа'
          type='search'
          required
        />

        <button className='form__button' aria-label='Начать поиск'>
          <Image src={iconSearch} width={30} height={30} alt='Иконка поиска' />
        </button>
      </form>
      {errorForm && <Error text='Организаций с таким ИНН нет' />}
      {isError && <Error text='Возникла ошибка' />}
    </>
  );
};

export default SearchForm;
