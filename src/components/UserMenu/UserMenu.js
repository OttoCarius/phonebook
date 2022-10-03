import { UserContainer, UserName, ButtonLogOut } from './UserMenu.styled';

import { FaUserAlt } from 'react-icons/fa';

export const UserMenu = () => {
  return (
    <UserContainer>
      <FaUserAlt />
      <UserName>Welcome ....</UserName>
      <ButtonLogOut type="button">Logout</ButtonLogOut>
    </UserContainer>
  );
};
