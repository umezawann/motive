import Cell from '../Cell/Cell'

const Week = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 84, justifyContent: 'space-between'}}>
      {Array(7).fill(0).map((_, idx) => (
        <Cell key={idx} />
      ))}
    </div>
  );
};

export default Week;
