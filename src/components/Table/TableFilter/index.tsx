import { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";

import Filter from "./Filter";
import { Column } from "./types";

import styles from "./styles.module.css";

interface ITableFilter {
  columns: Column[];
  data?: any[];
  filters?: Object;
  setFilters?: (filter: Object) => void;
  searchComponent?: React.ReactElement;
  showFilter?: boolean;
  setShowFilter?: (value: boolean) => void;
}

const TableFilter = ({
  columns,
  data,
  filters,
  setFilters,
  searchComponent,
  showFilter,
  setShowFilter,
}: ITableFilter) => {
  const [appliedFilters, setAppliedFilters] = useState<Object[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setShowFilter(false);
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClick: () => void = () => {
    setShowFilter(true);
    setAnchorEl(null);
  };

  const handleClose: () => void = () => {
    setAnchorEl(null);
  };

  const clearFilter: () => void = () => {
    setFilters({});
  };

  const handleFilterChange = (
    event: React.ChangeEvent<any>,
    column: Column | any,
  ) => {
    const newFilters = { ...filters };
    switch (column.filterType) {
      default: {
        newFilters[column] = event.target.value;
        setFilters(newFilters);
      }
    }
  };

  return (
    <>
      <div className={styles.toolbarContainer}>
        {appliedFilters.length ? (
          <Button className={styles.clearFilterBtn} onClick={clearFilter}>
            Clear
          </Button>
        ) : null}
        <div
          className={`${styles.toolbarAction} ${menuOpen && styles.filter}`}
          onClick={handleClick}
          style={{
            ...(appliedFilters.length && { border: "1px solid #0194B4" }),
          }}
        >
          <FilterListIcon />
          <span>Filter</span>
          {appliedFilters.length ? (
            <div className={styles.badge}>
              <span className={styles.badgeNum}>{appliedFilters.length}</span>
            </div>
          ) : null}
        </div>
        {searchComponent}
      </div>
      <Popper
        open={menuOpen}
        anchorEl={anchorEl}
        role={undefined}
        disablePortal
        placement="bottom-end"
        style={{ zIndex: 1 }}
      >
        <ClickAwayListener onClickAway={handleClose} mouseEvent="onMouseUp">
          <Paper
            classes={{
              root: styles.paperMenu,
            }}
            elevation={0}
          >
            <MenuList
              classes={{
                root: styles.menuContainer,
              }}
              autoFocusItem={menuOpen}
              id="menu-list-grow"
            >
              <Filter
                columns={columns}
                data={data}
                handleFilterChange={handleFilterChange}
                filters={filters}
              />
            </MenuList>
            <div className={styles.menuActions}>
              <Button className={styles.clearFilterBtn} onClick={clearFilter}>
                Clear
              </Button>
              <Button
                className={styles.applyFilterBtn}
                onClick={handleFilterClick}
              >
                Filter
              </Button>
            </div>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </>
  );
};

export default TableFilter;
