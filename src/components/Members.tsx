import { FC } from 'react';
interface MembersProps {
  members: string[];
}
export const Members: FC<MembersProps> = ({ members }) => {
  console.log(members);

  return <div>members</div>;
};
