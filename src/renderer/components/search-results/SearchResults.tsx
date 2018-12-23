import React, { PureComponent } from 'react';

import {
  List as VirtualizedList,
  AutoSizer,
  CellMeasurerCache,
  CellMeasurer,
  ListRowProps,
} from 'react-virtualized';

import {
  List,
  ListItem,
  ListItemGraphic,
  ListItemPrimaryText,
  ListItemSecondaryText,
  ListItemText,
} from '@rmwc/list';
import { Checkbox } from '@rmwc/checkbox';

import styles from './SearchResults.scss';

interface SearchResultsProps {}

interface SearchResultsState {
  overscanRowCount: number;
  rowCount: number;
}

// TODO: move to other folder
interface SearchResultItem {
  path: string;
  size: number;
}

// TODO: remove
let list: SearchResultItem[] = Array.from(new Array(100), () => ({
  path: '/path/to/folder',
  size: +(Math.random() * 994 + 5).toFixed(2),
}));

export class SearchResults extends PureComponent<
  SearchResultsProps,
  SearchResultsState
> {
  cache: CellMeasurerCache;

  constructor(props = {}) {
    super(props);

    this.state = {
      overscanRowCount: 10,
      rowCount: list.length,
    };

    this.cache = new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 72,
    });

    this.noRowsRenderer = this.noRowsRenderer.bind(this);
    this.rowRenderer = this.rowRenderer.bind(this);
  }

  noRowsRenderer(): JSX.Element {
    return <div className={styles.noRows}>No results in the selected path</div>;
  }

  rowRenderer({ key, index, style, parent }: ListRowProps): JSX.Element {
    return (
      <CellMeasurer
        key={key}
        cache={this.cache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}>
        <ListItem style={style}>
          <ListItemGraphic icon={<Checkbox />} />

          <ListItemText>
            <ListItemPrimaryText>{list[index].path}</ListItemPrimaryText>
            <ListItemSecondaryText>
              {list[index].size} mb.
            </ListItemSecondaryText>
          </ListItemText>
        </ListItem>
      </CellMeasurer>
    );
  }

  render(): JSX.Element {
    const { overscanRowCount, rowCount } = this.state;

    return (
      <List twoLine>
        <AutoSizer>
          {({ width, height }) => (
            <VirtualizedList
              ref="List"
              width={width}
              height={height}
              overscanRowCount={overscanRowCount}
              noRowsRenderer={this.noRowsRenderer}
              rowCount={rowCount}
              deferredMeasurementCache={this.cache}
              rowHeight={this.cache.rowHeight}
              rowRenderer={this.rowRenderer}
            />
          )}
        </AutoSizer>
      </List>
    );
  }
}
