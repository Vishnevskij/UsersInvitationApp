import React from "react";
import { Skeleton } from "./Skeleton";
import { User } from "./User";

export const Users = ({ items, isLoading, onInputChange, searchValue, invite, onClickInvite, onButtonClickSendEmail}) => {
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          onChange={onInputChange}
          value={searchValue}
          type="text"
          placeholder="Find user..."
        />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {items
            .filter(
              (person) =>
                person.email
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()) ||
                person.first_name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()) ||
                person.last_name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
            )
            .map((user) => (
              <User
                key={user.id}
                id={user.id}
                email={user.email}
                avatar={user.avatar}
                first_name={user.first_name}
                last_name={user.last_name}
                isInvited={invite.includes(user.id)}
                onClickInvite={onClickInvite}
              />
            ))}
        </ul>
      )}
      {invite.length > 0 && <button onClick={onButtonClickSendEmail} className="send-invite-btn">Send invitation</button>}
    </>
  );
};
