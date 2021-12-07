import PropTypes from 'prop-types';
import { DataGrid, GridToolbarContainer, GridToolbarExport, gridClasses } from '@mui/x-data-grid';
import ReportTable from 'components/BalanceTable/ReportTable';
import style from './BalanceTable.module.scss';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Close';

function CustomToolbar() {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer}>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const BalanceTable = ({ data, reportData }) => {
  const handleDelete = () => console.info('You clicked the delete icon.');

  const handleEdit = e => {
    console.log('You clicked the edit icon.', e);
  };

  const columns = [
    { field: 'id', hide: true, headerAlign: 'center' },
    {
      field: 'date',
      headerName: 'Дата',
      minWidth: 110,
      type: 'date',
      editable: true,
      headerAlign: 'center',
    },
    {
      field: 'description',
      headerName: 'Описание',
      minWidth: 200,
      editable: true,
      headerAlign: 'center',
    },
    {
      field: 'category',
      headerName: 'Категория',
      minWidth: 200,
      editable: true,
      headerAlign: 'center',
    },
    { field: 'sum', headerName: 'Сумма', minWidth: 100, editable: true, headerAlign: 'center' },
    {
      field: 'delete',
      headerName: '',
      minWidth: 100,
      headerAlign: 'center',
      renderCell: params => (
        <strong>
          <DeleteIcon
            onClick={handleDelete}
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16, cursor: 'pointer', color: '000' }}
          >
            delete
          </DeleteIcon>
        </strong>
      ),
    },
    {
      field: 'edit',
      headerName: '',
      minWidth: 100,
      headerAlign: 'center',
      renderCell: params => (
        <strong>
          <EditIcon
            type="button"
            onClick={handleEdit}
            variant="contained"
            size="small"
            style={{ marginLeft: 16, cursor: 'pointer', color: '000' }}
          >
            edit
          </EditIcon>
        </strong>
      ),
    },
  ];

  const rows = data;

  // const click = () => {
  //   console.log('onRowEditStart');
  // };

  const show = e => {
    console.log('Я тут');
    console.log(e.value);
    console.log(e);
  };

  return (
    <div className={style.tables__thumb}>
      <div className={style.balancetable__thumb}>
        <DataGrid
          onCellEditCommit={show}
          rows={rows}
          columns={columns}
          // onCellEditStop={show}
          // rowHeight={50}
          // onRowClick={click}
          // editMode="row"
          // onRowEditStart={click}
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      </div>
      <ReportTable data={reportData} />
    </div>
  );
};

BalanceTable.propTypes = {
  data: PropTypes.array.isRequired,
  reportData: PropTypes.array.isRequired,
};

export default BalanceTable;
