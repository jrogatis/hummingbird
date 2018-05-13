const styles = theme => ({
  root: {
    margin: 0,
    padding: 0,
  },
  container: {
    width: `calc(100% - 250px)`,
    marginLeft: '250px',
    padding: '2% 2% 0 0',
    [theme.breakpoints.down('750')]: {
      width: `100%`,
      marginLeft: 0,
    },
  },
  buttonContainer: {
    minWidth: 200,
    maxHeight: 32,
  },
  button: {
    textTransform: 'none',
    width: 200,
    maxHeight: 32,
    backgroundColor: '#0070e0',
    label: {
      whiteSpace: 'nowrap',
    },
  },
});

export default styles;
