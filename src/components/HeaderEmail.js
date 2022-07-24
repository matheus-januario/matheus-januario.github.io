import React from "react";
import Badge from 'react-bootstrap/Badge';

function HeaderEmail() {
  const email = JSON.parse(localStorage.getItem('user'));
  return (
    <div data-testid="user-email" className="header-email">
      <Badge pill bg="dark">
        Usuário: {email ? email.email : '________'}
      </Badge>
    </div>
  );
};

export default HeaderEmail;
