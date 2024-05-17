import { Organization } from "@/types/Organization";
import "./ConfirmPopup.scss";

interface ConfirmPopupProps {
  title: string;
  isOpen: boolean;
  buttonText: string;
  card: Organization | undefined;
  closePopup: () => void;
}

const ConfirmPopup = ({
  title,
  isOpen,
  buttonText,
  closePopup,
  card,
}: ConfirmPopupProps) => {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className='popup__container'>
        <h3 className='popup__title'>{title}</h3>
        <div className={`popup__inner`}>
          <button
            className='popup__close'
            aria-label='Закрыть'
            onClick={closePopup}
          >
            Остаться
          </button>

          <a
            className='popup__link'
            href={`https://yandex.ru/maps/?text=${card?.data.address.value}`}
            target='_blank'
            onClick={closePopup}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPopup;
