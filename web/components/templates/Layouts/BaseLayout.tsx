import Grid from '@mui/material/Grid';

const BaseLayout = ({ children }: { children: any }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} md={4}>
        <div>hogehoge</div>
      </Grid>
      <Grid item xs={8} md={8}>
        <div>{children}</div>
      </Grid>
    </Grid>
  );
};

export default BaseLayout;
