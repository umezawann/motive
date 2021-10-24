import Week from '../Week/Week';
interface Prop {
  tasks: any[];
}

const Year = ({ tasks }: Prop) => {
  console.log('tasks', tasks)
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Array(54)
        .fill(0)
        .map((_, idx) => (
          <div key={idx} style={{ margin: 1 }}>
            <Week key={idx} />
          </div>
        ))}
    </div>
  );
};

export default Year;
