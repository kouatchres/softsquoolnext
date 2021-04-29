import GetAllRegions from "../components/GetAllRegions"
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles"

const useStyles= makeStyles({
root:{
  display:"grid",
  placeItems:"center",
  maxWidth:"60%",
  minWidth:"40%",
  padding:"1rem",
  margin:"0 auto",
}

})

const AllRegions = () => {
const classes = useStyles()
return(
    <div>

    <CssBaseline/>
   <Paper  className={classes.root} >
    <h1>Hello Next.js 👋</h1>
   
    <GetAllRegions />
    </Paper>
    </div>
)
};

export default AllRegions;
