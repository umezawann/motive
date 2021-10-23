import Week from '../Week/Week';

const Year = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Array(20)
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
