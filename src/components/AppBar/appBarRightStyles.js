const styles = theme => ({
  container: {},
  input: {
    margin: theme.spacing.unit,
    border: '2px solid #dbdbdb',
    borderRadius: '25px',
    height: 30,
    maxWidth: 100,
    [theme.breakpoints.up('md')]: {
      minWidth: 200,
    },
  },
  icon: {
    color: 'black',
    margin: 10,
  },
  avatar: {
    fontSize: 14,
    width: 34,
    height: 34,
    margin: 10,
  },
  magnify: {
    fontSize: 18,
    marginLeft: 8,
  },
});

export default styles;
