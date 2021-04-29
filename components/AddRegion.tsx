import React, { FC } from "react"
import NewRegion from "./region/NewRegion"
import { RegionCreateInput } from "../generated/graphql"


const AddRegion: FC<RegionCreateInput> = () => {
  return (
    <div className="App">
      <NewRegion />
    </div>
  )

}
  export deafult AddRegion;
