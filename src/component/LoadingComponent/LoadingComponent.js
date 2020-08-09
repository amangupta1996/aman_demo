import React from 'react';
import { Grid } from 'semantic-ui-react';
const LoadingComponent = () => {
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column verticalAlign="middle">Loading...</Grid.Column>
            </Grid.Row>
        </Grid>
    );
};
export default LoadingComponent;
