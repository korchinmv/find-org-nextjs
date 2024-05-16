interface ConfirmPopupProps {
  title: string;
  isOpen: boolean;
  coordinates: string;
  buttonText: string;
}

const ConfirmPopup = ({
  title,
  isOpen,
  coordinates,
  buttonText,
}: ConfirmPopupProps) => {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <h3 className='popup__title'>{title}</h3>
      <div className={`popup__inner`}>
        <button
          className='popup__close'
          aria-label='Закрыть'
          // onClick={closePopup}
        />

        <a
          className='popup__link'
          href={`https://yandex.ru/maps/?whatshere[point]=${coordinates}&whatshere[zoom]=17`}
          target='_blank'
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default ConfirmPopup;
