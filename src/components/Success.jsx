import React from 'react';

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Success!</h3>
      <p>All {count} users have got their invitations.</p>
      <a href="/"><button className="send-invite-btn">Back</button></a>
    </div>
  );
};
