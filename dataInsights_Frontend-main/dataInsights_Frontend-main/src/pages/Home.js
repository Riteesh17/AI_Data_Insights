import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 10 } }}>
        <Box sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto', px: { xs: 2, md: 0 } }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Turn Your Data Into Insights
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
            Upload your dataset and explore interactive summaries and visualizations in seconds.
          </Typography>
          <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => navigate('/insights')}
              >
                Get Started
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={() => navigate('/login')}
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={3} sx={{ mt: { xs: 6, md: 10 } }}>
          <Grid item xs={12} md={4}>
            <Card elevation={2} sx={{ height: '100%' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Upload</Typography>
                <Typography variant="body1" color="text.secondary">
                  Bring CSV or Excel files. We handle the parsing and prepare your data for analysis.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation={2} sx={{ height: '100%' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Explore</Typography>
                <Typography variant="body1" color="text.secondary">
                  Discover key metrics, distributions, and trends with intuitive visuals.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation={2} sx={{ height: '100%' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Share</Typography>
                <Typography variant="body1" color="text.secondary">
                  Export charts or share dashboards with your team effortlessly.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;