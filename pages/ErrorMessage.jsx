
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { onError } from "apollo-link-error";


const useStyles = makeStyles({
  ErrorStyles: {
    padding: "0.5rem",
    // background: "black",
    margin: "0.1rem",
    borderRadius: "0.5rem",
    border: "0.04rem solid rgba(0, 0, 0, 0.05)",
    borderLeft: "0.05rem solid red",
  },
  p: {
    margin: "0.01rem",
    fontSize: ".6rem",
    fontWeight: "normal",
  },
  strong: {
    fontSize: "0.7rem",
    fontWeight: "normal",
    marginSLight: "0.15rem",
  },
});

const DisplayError = onError(({ graphQLErrors, networkError }:ErrorResponse) => {
  const classes = useStyles();
  
  if (!graphQLErrors || !networkError) return null;

if(graphQLErrors )
 graphQLErrors.map(({ message, locations, path }) =>{
   return ( 
       <div className={classes.ErrorStyles} key={message}>
        <p className={classes.p}>
          <strong className={classes.strong}>Erreure graphql!</strong>
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        </p>
      </div>
  ) } );
 if(networkError)
   return (
    <div className={classes.ErrorStyles}>
      <p className={classes.p}>
        <strong className={classes.strong}>Erreure réseaux!</strong>
      `[Network error]: ${networkError}`;
      </p>
    </div>
  );
});


export default DisplayError;


// const link = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors)
//     graphQLErrors.map(({ message, locations, path }) =>
//       console.log(
//         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
//       ),
//     );

//   if (networkError) console.log(`[Network error]: ${networkError}`);
// });