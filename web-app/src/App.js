import React, { Component } from 'react';
import { Container } from '@mui/material';
import { TextField } from '@mui/material';

class ControlledFormComponent extends Component {  
    render() {  
      return (
        <Container>
            <div>

                <TextField
                required
                id="standard-required"
                label="Логин"
                variant="standard"
                />
                <TextField
                required
                id="standard-password-input"
                label="Пароль"
                type="password"
                autoComplete="current-password"
                variant="standard"
                />
            </div>
        </Container> 
      );  
    }  
  }  
    
export default ControlledFormComponent;