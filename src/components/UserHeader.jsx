import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectToken } from "../redux/utils/selectors"
import { sendEditedUserNames } from "../redux/features/sendUser";
import { fetchOrUpdateUser } from "../redux/features/getUser";

const UserHeader = ({ firstNameUser, lastNameUser }) => {
  const [edit, setEdit] = useState(false);
  const [editedFirstName, seteditedFirstName] = useState("");
  const [editedLastName, seteditedLastName] = useState("");
  const editedUserNames = { firstName: editedFirstName, lastName: editedLastName };
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const RefreshPage = () => {
    dispatch(fetchOrUpdateUser(token))
  }

  const handleSubmit = () => {
    dispatch(sendEditedUserNames(token, editedUserNames));
    setTimeout(RefreshPage, 50);
    setEdit(false);
  };
  return (
    <div className="header">
      <div className={edit ? "dispair-class" : "displayedheader"}>
        <h1>
          Welcome back
          <br />
          {firstNameUser} {lastNameUser}!
        </h1>
        <button className="edit-button" onClick={() => setEdit(true)}>
          Edit Name
        </button>
      </div>
      <div className={edit ? "header-modifier" : "dispair-class"}>
        <h1>Welcome back</h1>
        <div className="modifier-container">
          <input type="text" placeholder={firstNameUser} onChange={(e) => seteditedFirstName(e.target.value)} />
          <input type="text" placeholder={lastNameUser} onChange={(e) => seteditedLastName(e.target.value)} />

          <button className="edit-button" onClick={() => handleSubmit()}>
              Save
          </button>
          <button className="edit-button" onClick={() => setEdit(false)}>
              Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;