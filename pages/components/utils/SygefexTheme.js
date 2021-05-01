import { createMuiTheme, useTheme, Theme } from '@material-ui/core/styles';
import { red, orange } from '@material-ui/core/colors';

const sygefexBlue = '#044562';
const sygefexGreen = '#829079';
const sygefexWhite = '#fff';
const arcAppBar = '#b9925e';
// const sygefexBackground = '#CCCC7C';
const sygefexBackground = '#ede6b9';
const tableRow = '#e6f4dd';
const sideBarSecond = '#19857b';
const SquoolGreay = '#CCCC7F';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const sygefexError = '#Ff0000';

// Create a theme instance.
const SygefexTheme = createMuiTheme({
  palette: {
    common: {
      green: `${arcAppBar}`,
      // blue: `${arcBlue}`,
      orange: `${arcOrange}`,
      syWhite: `${sygefexWhite}`,
      syGreen: `${sygefexGreen}`,
      brown: `${sygefexBackground}`
    },
    primary: {
      main: `${sygefexGreen}`
    },
    secondary: {
      // main: `${arcOrange}`,
      main: `${arcAppBar}`
    },

    // background:{root:`${sygefexError}`},
    background: {
      default: `${sygefexBackground}`,
      error: {
        main: `${sygefexError}`
      }
    },

    typography: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      body2: {
        fontFamily: 'Roboto',
        fontSize: '1rem'
      },
      body1: {
        fontFamily: 'Roboto',
        fontSize: '1rem'
      },

      h6: {
        fontFamily: 'Roboto',
        fontSize: '1.1rem'
      },
      h5: {
        fontFamily: 'Roboto',
        fontSize: '1.2rem',
        fontWeight: 400
      }
    },
    shape: {
      borderRadius: '0.4rem'
    },
    spacing: 2
  },
  overrides: {
    MuiMenuItem: {
      root: {
        fontSize: '0.6rem',
        minHeight: '25px'
      }
    },

    MuiInputLabel: {
      root: {
        color: `${arcAppBar}`,
        fontSize: '0.6rem',
        fontWeight: 900,
        fontFamily: 'Comic Sans MS'
      },

      formControl: {
        top: '-0.1rem',
        left: '0.3rem'
      }
    },

    MuiToolbar: {
      regular: {
        minHeight: '0.9rem',
        maxHeight: '1.2rem'
      }
    },

    PrivateSwitchBase: {
      input: {
        width: '70%'
        // maxHeight: '1.9rem',
      }
    },
    MuiSelect: {
      root: {
        paddingBottom: '0.3rem',
        paddingTop: '0.3rem',
        height: '1.5rem'
      },
      icon: {
        width: '1rem',
        fontWeight: 500,
        fontSize: '1.5rem',
        fill: `${arcAppBar}`
      }
    },

    MuiOutlinedInput: {
      input: {
        height: '0.8rem',
        fontSize: '0.7rem',
        fontWeight: 500,
        paddingBottom: '0.6rem',
        paddingTop: '0.3rem',
        color: `${sygefexGreen}`
      }
    },
    //
    MuiTableRow: {
      root: {
        // borderBottom: "0.113rem solid #fff",
        '&:nth-child(2n)': {
          backgroundColor: tableRow
        },
        // "&:nth-child(2n+1)": {
        //   background: "#e4ebf8",
        // },

        '&:hover': {
          backgroundColor: '#829079',
          color: '#ede6b9'
        }
      }
    },
    MuiTableHead: {
      root: {
        position: 'sticky',
        top: 0,
        paddingTop: '1rem',
        paddingBottom: '1rem',
        fontSize: '1.2rem'
      }
    },

    MuiFormLabel: {
      root: {
        color: `${arcAppBar}`,
        fontSize: '0.9rem',
        fontWeight: 400,
        fontFamily: 'Comic Sans MS'
      }
    },
    MuiFormGroup: {
      root: {
        // color: `${arcAppBar}`,
        fontSize: '1.5rem',
        fontWeight: 400,
        marginBottom: 0,
        fontFamily: 'Comic Sans MS'
      },
      row: {
        marginBottom: 0
      }
    },
    MuiFormControlLabel: {
      root: {
        color: `${sygefexGreen}`,
        fontSize: '0.8rem',
        fontWeight: 400,
        fontFamily: 'Comic Sans MS'
      },
      label: {
        fontSize: '0.7rem',
        fontWeight: 500
      }
    },
    MuiIconButton: {
      root: {
        padding: 0,
        fontSize: '0.9rem'
      }
    },

    MuiTableCell: {
      root: {
        paddingTop: '0.01rem',
        paddingBottom: '0.01rem',
        fontSize: '0.6rem'
      },
      head: {
        fontSize: '0.9rem',
        fontWeight: 400,
        color: `${sygefexGreen}`,
        borderColor: `${sygefexGreen}`
      },
      body: {}
    },

    MuiFormControl: {
      root: {
        alignItems: 'center',
        color: '#044562',
        fontSize: '1.5rem'
      },
      marginNormal: {
        // margin: '0.5rem',
        marginTop: '0.05rem',
        marginBottom: '0.3rem'
      }
    },

    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: `${sygefexGreen}`,
        color: `${arcAppBar}`
      }
    },

    MuiTypography: {
      alignCenter: {
        fontSize: '1.1rem'
      }
    },
    MuiPickersCalendarHeader: {
      transitionContainer: {
        height: '2.5rem'
      },
      iconButton: {
        height: '2rem'
      },
      daysHeader: {
        fontSize: '1.3rem'
      }
    },

    MuiPickersToolbarText: {
      toolbarTxt: {
        fontSize: '1.3rem',
        padding: '0.5rem'
      }
    },
    MuiPickersDatePickerRoot: {
      toolbar: {
        flexDirection: 'row',
        alignItems: 'center'
      }
    },
    MuiGrid: {
      root: {
        marginBottom: '0.2rem'
      }
      // container: {
      //   alignItems: 'center',
      //   justifyItems: 'center'
      // }
    },

    MuiPaper: {
      rounded: {
        elevation: 5,
        borderRadius: '0.4rem',
        margin: 'auto'
      }
    },
    MuiRadio: {
      root: {
        size: 'medium'
        //  fontSize:"0.3rem",
      }
    },

    MuiSvgIcon: {
      root: {
        width: '0.9rem',
        fontSize: '1.5rem'
        // backgroundColor:"#ede6b9",
        // borderRadius:"0.2rem",
      }
    },

    MTableToolbar: {
      actions: {
        color: '#000',
        fontSize: '2rem',
        backgroundColor: '#fff',
        borderRadius: '0.3rem'
      },
      title: {
        width: '40%',
        overflow: 'none'
      },
      searchField: {
        maxWidth: '15rem'
      }
    },

    /// ended here
    MuiButton: {
      root: {
        color: `${sygefexBackground}`,
        backgroundColor: `${sygefexGreen}`,
        textTransform: 'none',
        marginBottom: '0.5rem',
        // marginTop: '0.5rem',
        fontSize: '0.8rem',
        fontWeight: 300,
        padding: '.2rem',
        borderRadius: '0.3rem',
        fontFamily: 'Comic Sans MS',
        variant: 'outlined',
        '&:hover': {
          color: `${sygefexWhite}`,
          backgroundColor: `${arcAppBar}`
        }
      }
    },
    MuiFormHelperText: {
      root: {
        color: orange[900],
        '&$error': {
          '&.MuiFormHelperText-root.Mui-error': {
            color: '#e65100'
          }
        }
      }
    }
  },

  props: {
    MuiTextField: {
      type: 'text',
      variant: 'outlined',
      color: 'primary'
    }
  }
});

export default SygefexTheme;
