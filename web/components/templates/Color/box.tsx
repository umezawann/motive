const Box = ({ children }) => {
  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "2px",
        
        margin: "2.5px",
      }}
    >
      {children}
    </div>
  );
};

export default Box;
