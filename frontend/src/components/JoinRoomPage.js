import React, { Component } from "react";
import {Button, Grid, Typography, TextField, FormHelperText, 
    FormControl, Radio, RadioGroup, FormControlLabel} from "@material-ui/core";
import { Link } from "react-router-dom";

export default class JoinRoomPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomCode: "",
            error: "",
        }
    }
    
    render(){
        return (
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h4" component="h4">
                        Join A Room
                    </Typography>
                </Grid>
                <TextField 
                    error="error" 
                    label="Code" 
                    placeholder="Enter a Room Code" 
                    value={ }
                    helperText={ }
                    variant="outlined"
                />
            </Grid>
        );
    }
}