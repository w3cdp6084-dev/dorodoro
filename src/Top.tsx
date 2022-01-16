import * as React from 'react';
import { GridItem, Grid, Box } from '@chakra-ui/react';
import './Layout.scss';
class Top extends React.Component {

    render() {                          
        return (
            <div className='Container'>
                <Box>
                    <Grid
                        h='400px'
                        templateRows='repeat(2, 1fr)'
                        templateColumns='repeat(5, 1fr)'
                        gap={4}
                        >

                        <GridItem rowSpan={2} colSpan={4} bg='tomato' />
                        <GridItem rowSpan={2} bg='tomato' />
                    </Grid>
                </Box>
            </div>
        );
    }
}

export default Top; 