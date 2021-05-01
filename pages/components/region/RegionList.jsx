import React, { useEffect, useState } from 'react'
import MaterialTable, { MTableToolbar } from 'material-table'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useApolloClient, useMutation } from '@apollo/react-hooks'
import { getAllRegionsQuery } from '../queries&Mutations&Functions/Queries'
import tableIcons from '../utils/icons/tableIcons'
import AddPopup from '../utils/AddPopup'
import UpdatePopup from '../utils/UpdatePopup'
import ConfirmDialog from '../utils/ConfirmDialog'
import { deleteRegionMutation } from '../queries&Mutations&Functions/Mutations'
import Notification from '../utils/Notification'

import {
  Edit as EditIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons'

import NewRegionMui from './NewRegionMui'
import UpdateRegion from './UpdateRegion'

const useStyles = makeStyles({
  stickyActionsColumn: {
    '& table:first-child': {
      '& tr': {
        '& td:first-child, th:first-child': {
          backgroundColor: '#f5f5f5',
          position: 'sticky',
          left: 0,
          zIndex: 10,
        },
        '& th:first-child': {
          zIndex: 10,
        },
      },
    },
  },
  stickyHeader: {
    '& table:first-child': {
      '& tr': {
        '& th': {
          backgroundColor: '#5aa193',
          position: 'sticky',
          top: '4rem',
          zIndex: 10,
        },
        '& th': {
          zIndex: 10,
        },
      },
    },
  },
})

const RegionList = () => {
  const client = useApolloClient()
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false)
  const [updatePopupState, setUpdatePopupState] = useState({
    isOpen: false,
    id: '',
  })

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: '',
  })
  const [deleteConfirmDialog, setDeleteConfirmDialog] = useState({
    isOpen: false,
    id: '',
    title: '',
    subtitle: '',
  })

  const [state, setState] = useState({
    columns: [
      {
        field: 'regName',
        title: 'Region Name',
      },
      {
        field: 'regCode',
        title: 'Region Code',
      },
      { field: 'id', title: 'ID' },
    ],
    data: [],
  })

  const loadRegionData = async () => {
    const { error, data } = await client.query({
      query: getAllRegionsQuery,
    })
    {
      error && <Error error={error} />
    }
    const { regions } = { ...data }
    console.log(regions)
    console.log(regions)
    setState((prev) => ({ ...prev, data: regions }))
  }

  useEffect(() => {
    loadRegionData()
  }, [])

  const updateCache = (cache, payload) => {
    // manually update the cache so that the data are all the same
    // 1. read the cache for the data we want
    const data = cache && cache.readQuery({ query: getAllRegionsQuery })
    cache &&
      cache.writeQuery({
        query: getAllRegionsQuery,
        data: {
          regions: data.regions.filter(
            (item) => item.id !== payload.data.deleteRegion.id,
          ),
        },
      })
  }
  const handleAddPopupClose = () => {
    setIsAddPopupOpen(false)
  }

  const handleUpdatePopupClose = () => {
    setUpdatePopupState((prev) => ({
      ...prev,
      isOpen: false,
    }))
  }
  const handleDeleteConfirmDialog = () => {
    setDeleteConfirmDialog((prev) => ({
      ...prev,
      isOpen: false,
    }))
  }
  const [deleteRegion, { loading }] = useMutation(deleteRegionMutation, {
    variables: { id: deleteConfirmDialog.id },
    update: updateCache(),
  })

  const actions = [
    {
      icon: () => <AddIcon />,
      tooltip: 'Ajouter Nouvelle Région',
      isFreeAction: true,
      onClick: () => {
        setIsAddPopupOpen(true)
      },
    },
    {
      icon: () => <EditIcon />,
      tooltip: 'Modifier Région',
      onClick: (event, rowData) => {
        setUpdatePopupState({ isOpen: true, id: rowData.id })
      },
    },
    {
      icon: () => <DeleteIcon />,
      tooltip: 'Supprimer région',
      onClick: (event, rowData) =>
        setDeleteConfirmDialog({
          id: rowData.id,
          isOpen: true,
          title: 'Etes-vous sur de suprimer cette région?',
          subtitle:
            'Une fois supprimées, les informations seront perdues a jamais, Seules les régions sans département pourront etre suprimées',
          onConfirm: () => {
            rowData.id && deleteRegion(rowData.id)
            setNotify({
              isOpen: true,
              message: 'Région Supprimée avec succès',
              type: 'error',
            })
          },
        }),
    },
  ]

  return (
    <Paper style={{ marginTop: '2rem' }}>
      <MaterialTable
        components={{
          Toolbar: (props) => (
            <div
              style={{
                backgroundColor: '#829079',
                borderTopRightRadius: '0.5rem',
                borderTopLeftRadius: '0.5rem',
                color: '#ede6b9',
              }}
            >
              <MTableToolbar
                style={{
                  // textColor: "#000",
                  textColor: '#fff',
                }}
                {...props}
              />
            </div>
          ),
        }}
        icons={tableIcons}
        title="Liste de Régions"
        columns={state.columns}
        data={state.data}
        actions={actions}
        stickyHeader
        style={{ position: 'sticky', top: 0 }}
        icons={tableIcons}
        options={{
          actionsColumnIndex: -1,
          grouping: true,
          paging: true,
          pageSize: 50, // make initial page size
          emptyRowsWhenPaging: false, //to make page size fix in case of less data rows
          pageSizeOptions: [25, 50, 75, 100, 150], // rows selection options
          headerStyle: {
            color: '#ede6b9',
            // color: "#ff",
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            backgroundColor: '#b9925e',
            maxHeight: '0.5rem !important',
          },
          rowStyle: {
            color: '#000',
          },
        }}
      />
      <AddPopup
        title="Nouvelle Région"
        isOpen={isAddPopupOpen}
        onClose={handleAddPopupClose}
      >
        <NewRegionMui />
      </AddPopup>
      <ConfirmDialog
        title={deleteConfirmDialog.title}
        subtitle={deleteConfirmDialog.subtitle}
        isOpen={deleteConfirmDialog.isOpen}
        onClose={handleDeleteConfirmDialog}
        onConfirm={deleteConfirmDialog.onConfirm}
      />
      <Notification notify={notify} setNotify={setNotify} />

      <UpdatePopup
        // title={updatePopupState.id}
        isOpen={updatePopupState.isOpen}
        onClose={handleUpdatePopupClose}
      >
        <UpdateRegion id={updatePopupState.id} />
      </UpdatePopup>
    </Paper>
  )
}
export default RegionList
