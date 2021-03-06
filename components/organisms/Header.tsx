import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {createStyles, fade, makeStyles, Theme} from '@material-ui/core/styles';
import {LargeText} from "../atom/StyledTexts";
import styled from "styled-components";
import {redirect} from "../../service/redirectService";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);

const TitleWrapper = styled.div`
  cursor: pointer;
`

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <TitleWrapper onClick={() => redirect("/")}>
            <LargeText className={classes.title} variant="h6" noWrap>
              Flight Simulator
            </LargeText>
          </TitleWrapper>
          {/*<IconButton*/}
          {/*  edge="start"*/}
          {/*  className={classes.menuButton}*/}
          {/*  color="inherit"*/}
          {/*  aria-label="open drawer"*/}
          {/*>*/}
          {/*  <MenuIcon/>*/}
          {/*</IconButton>*/}

        </Toolbar>
      </AppBar>
    </div>
  );
}