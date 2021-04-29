import React from 'react'
import Meta from './Meta'
import SygefexTheme from './utils/SygefexTheme'
import LayoutDrawer from './layout/PermanentDrawer'
import { makeStyles, MuiThemeProvider, createStyles, Theme } from '@material-ui/core/styles'



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // root: {
    //   display: 'grid',
    //   background: '#abbffa',
    //   margin: "0 auto",
    //   placeItems: "center",
    // },

    // allControls: {
    //   background: '#c3fa',
    //   display: 'grid',
    //   placeItems: "center",
    // },
    centered: {
      margin: 'auto',
      display: 'grid',
      placeItems: "center",
    },

    mains: {

      gridArea: 'mains',
      paddingLeft: 'auto',
      display: 'grid',
      placeItems: "center",
      // background: '#caa',
      // gridTemplateRows: 'auto 1fr',
      // paddingTop: '1rem',
      paddingRight: 'auto',
    },
    // footers: {
    //   gridArea: 'Footers',
    //   display: 'grid',
    //   gridTemplateColumns: '1fr 4fr',
    //   alignItems: 'right',
    //   position: 'fixed',
    //   height: '1rem',
    //   zIndex: 10,
    //   borderBottom: '0.2rem solid  0.1rem 0.05rem 0.5rem rgba(0, 0, 0.8, 0.5)',
    // },
    toolbarMargin: {
      ...theme.mixins.toolbar,
     
    },
  }))

const Page: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <MuiThemeProvider theme={SygefexTheme}>
      <LayoutDrawer>
        <Meta />
        <div className={classes.toolbarMargin} />
        <div className={classes.centered}>{children}</div>
      </LayoutDrawer>
    </MuiThemeProvider>
  )
}

export default Page

// <toolbar/>
