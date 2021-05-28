import React from 'react';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Block from '@material-ui/icons/Block';

export default () => {

    return (
        <div>
            <center className="pt-5">
                <Avatar style={{ backgroundColor: 'red' }}>
                    <Block />
                </Avatar>
                <Typography component="h1" variant="h5">Page Not Found</Typography>
            </center >
        </div>
    );
}