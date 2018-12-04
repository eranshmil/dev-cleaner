import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import { Button } from '@rmwc/button';
import { TextField, TextFieldIcon } from '@rmwc/textfield';
import { FormField } from '@rmwc/formfield';
import { Grid, GridCell } from '@rmwc/grid';

class App extends Component {
  state = {
    path: '',
  }
  
  handleChange(e) {
    this.setState({
      path: e.target.value,
    });
  }

  handleClearInput() {
    this.setState({
      path: '',
    });
  }

  handleFolderSearch(e) {
    console.log(e.target.files[0].name);
  }

  handleSearch() {}

  render() {
    return (
      <Grid>
        <GridCell span={1}>
          <FormField>
            <label htmlFor="input">
              <TextFieldIcon icon="search" />
              <input
                id="input"
                type="file"
                onChange={e => this.handleFolderSearch(e)}
                style={{ display: 'none' }}
              />
            </label>
          </FormField>
        </GridCell>
        <GridCell span={7}>
          <TextField
            fullwidth
            label="path to projects folder"
            value={this.state.path}
            onChange={e => this.handleChange(e)}
          />
        </GridCell>
        <GridCell span={2}>
          <Button onClick={() => this.handleClearInput()}>
            <TextFieldIcon icon="close" />
          </Button>
        </GridCell>
        <GridCell span={2}>
          <Button onClick={() => this.handleSearch()}>search</Button>
        </GridCell>
      </Grid>
    );
  }
}

export default hot(module)(App);
