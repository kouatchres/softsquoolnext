// import Layout from '../components/Layout';
import GetAllUsers from "../components/GetAllUsers"
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles"

const useStyles= makeStyles({
root:{
  display:"grid",
  placeItems:"center",
  maxWidth:"50%",
  minWidth:"40%",
  padding:"1rem",
  margin:"auto",
}

})

const AllUsers = () => {
const classes = useStyles()
return(
  // <Layout title="Home | Next.js + TypeScript Example">
    <div>

    <CssBaseline/>
   <Paper  className={classes.root} >
    <h1> 👋</h1>
   
    <GetAllUsers />
    </Paper>
    </div>
  // </Layout>
)
};

export default AllUsers;
