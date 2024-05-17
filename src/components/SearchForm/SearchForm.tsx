"use client";
import { useGetOrganizationMutation } from "@/redux/api/organization.api";
import { useAppDispatch } from "@/redux/hooks";
import { organizations } from "@/redux/features/organizations/organizationsSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./SearchForm.scss";
import iconSearch from "./../../../public/icon-search.svg";
import Image from "next/image";
import Error from "../Error/Error";

interface SearchFormProps {
  errorSearchData?: boolean;
  errorData?: boolean;
}

const SearchForm = ({ errorData, errorSearchData }: SearchFormProps) => {
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
          name='form-input'
        />

        <button className='form__button' aria-label='Начать поиск'>
          <Image src={iconSearch} width={30} height={30} alt='Иконка поиска' />
        </button>
      </form>
      {errorForm || errorSearchData ? (
        <Error text='Организаций с таким ИНН нет' />
      ) : null}
      {isError || errorData ? <Error text='Возникла ошибка' /> : null}
    </>
  );
};

export default SearchForm;
