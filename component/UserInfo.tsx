// component/UserInfo.tsx

interface UserProps {
  name: string;
}

const UserInfo = ({ name }: UserProps) => {
  return <h3>사용자: {name}</h3>;
};

export default UserInfo;