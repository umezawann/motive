import Year from '../Year/Year';

interface Prop {
  histories: any[];
}

const todos = Array(140).fill(0);
const History = ({ histories }: Prop) => {
  return (
    <div>
      {histories.map((his, idx) => (
        <div key={idx}>{his.name}</div>
      ))}
      <Year />

    </div>
  );
};

export default History;
