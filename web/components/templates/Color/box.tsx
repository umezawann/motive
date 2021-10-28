const Box = ({ children, ...props }: { children?: any; props?: any }) => {
  console.log('box props', props);
  const { style } = props;
  return (
    <div
      style={{
        width: '20px',
        height: '20px',
        borderRadius: '2px',
        margin: '2.5px',
        ...style,
      }}
    >
      <div>hogehogeho</div>
      {children}
    </div>
  );
};

export default Box;
