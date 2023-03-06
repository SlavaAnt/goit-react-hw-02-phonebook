import { nanoid } from 'nanoid';
import css from './Contacts.module.css';

export const Contacts = ({ title, contacts, onDeleteContact }) => {
  console.log(title);
  console.log(contacts);

  return (
    <div>
      <h3 className={css.title}>{title}</h3>
      <ul className={css.contactsBox}>
        {contacts.map(({ id, name, phone }) => {
          return (
            <ul key={nanoid()} className={css.contactBox}>
              <li>
                {name}: {phone}
              </li>
              <button onClick={() => onDeleteContact(id)} className={css.btn}>
                Delete
              </button>
            </ul>
          );
        })}
      </ul>
    </div>
  );
};
