import { borderRight } from '@mui/system';
import Box from './box';

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
      {children}
    </div>
  );
};
const Color = () => {

  
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <div style={{ lineHeight: '20px' }}>Less</div>
      {/* こんな感じで渡せる */}
      <Box style={{ background: 'yellow' }} />

      {/* TODO: ここをループ（map）で簡潔に書きたい */}
      {/* <Box>
        <div style={{ opacity: "0.1", backgroundColor: "green" }} />
      </Box>
      <Box>
        <div style={{ opacity: "0.3" }} />
      </Box>
      <Box>
        <div style={{ opacity: "0.6" }} />
      </Box>
      <Box>
        <div style={{ opacity: "0.8" }} />
      </Box>
      <Box>
        <div style={{ opacity: "1.0", backgroundColor: "green" }} />
      </Box> */}

      <div>More</div>
    </div>
  );
};

export default Color;
