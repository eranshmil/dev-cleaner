import React, { Component, ChangeEvent } from 'react';

import { remote } from 'electron';

import { TextField, TextFieldIcon } from '@rmwc/textfield';
import { Button } from '@rmwc/button';
import { Grid, GridCell } from '@rmwc/grid';
import { Checkbox } from '@rmwc/checkbox';

import styles from './SearchBar.scss';

class SearchBarState {
  recursive: boolean = false;
}

export class SearchBar extends Component<{}, SearchBarState> {
  private _userHomePath = remote.app.getPath('home');

  constructor(props: {}) {
    super(props);

    this.state = {
      recursive: true,
    };
  }

  handleRecursive(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      recursive: event.target.checked,
    });
  }

  render() {
    return (
      <Grid className={styles.wrapper}>
        <GridCell span={12}>
          <TextField
            label="Path"
            defaultValue={this._userHomePath}
            className={styles.folder}
            // onChange={(e: ChangeEvent) => console.log(e)}
            withTrailingIcon={
              <TextFieldIcon
                tabIndex={0}
                icon="folder"
                onClick={() => console.log('Clear')}
              />
            }
          />
        </GridCell>

        <GridCell span={12}>
          <Checkbox
            color="secondary"
            checked={this.state.recursive}
            onChange={this.handleRecursive.bind(this)}>
            Recursive
          </Checkbox>
        </GridCell>

        <GridCell span={12}>
          <Button className={styles.searchButton} raised>
            Search
          </Button>
        </GridCell>
      </Grid>
    );
  }
}
