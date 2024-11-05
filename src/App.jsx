import { Members } from './components/Members';
import { NewMemberForm } from './components/NewMemberForm';
const App = () => {
  const members = [1, 2, 3];
  console.log(members);
  return (
    <div className="bg-slate-400">
      <Members />
      <NewMemberForm members={members} />
    </div>
  );
};

export default App;
