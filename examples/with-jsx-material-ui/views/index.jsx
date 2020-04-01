import React from 'react';
import {
  makeStyles,
  createStyles,
} from '@material-ui/core/styles';
import {
  Typography,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing(4),
    },
    logo: {
      width: 240,
      margin: theme.spacing(2),
    },
  })
);

const IndexPage = (props) => {
  const classes = useStyles({});
  const [message, setMessage] = React.useState(props.user.name);

  const onClick = () => setMessage('@react-ssr-with-less/express');

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Material UI
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        with @react-ssr-with-less/express
      </Typography>
      <img
        className={classes.logo}
        src="/images/logo.svg"
      />
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={onClick}
      >
        CLICK ME
      </Button>
      <br />
      <br />
      <Typography gutterBottom>
        Hello {message}!
      </Typography>
    </div>
  );
};

export default IndexPage;
