const styles = theme => ({
  appBar: {
    backgroundColor: 'transparent',
    width: `calc(100% - 250px)`,
    marginLeft: '270px',
    boxShadow: 'none',
    paddingRight: '5%',
    [theme.breakpoints.down('750')]: {
      width: `100%`,
      margin: '0 5% 0 5%',
      paddingRight: '5%',
    },
  },
  title: {
    fontSize: 20,
  },
  menu: {
    color: 'black',
  },
});

export default styles;
