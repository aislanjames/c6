import React from 'react';
import { Typography, Grid, Avatar } from '@mui/material';
import { deepOrange, green } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';

const PostGrid = () => {
    return (
        <section>
            <Typography variant="h4" component="h3">
                Destaques
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(3)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
                            N
                        </Avatar>
                        <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                            <AssignmentIcon />
                        </Avatar>
                    </Grid>
                ))}
            </Grid>
        </section>
    );
};

export default PostGrid;
