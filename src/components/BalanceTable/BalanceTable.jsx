import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport, gridClasses } from '@mui/x-data-grid';
import ReportTable from 'components/BalanceTable/ReportTable';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import InformationEditModal from 'components/Modal/InformationEditModal';
import style from './BalanceTable.module.scss';

function CustomToolbar() {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer}>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const BalanceTable = ({ data, reportData, category }) => {
  const [rows, setRows] = useState(data);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteTransAction = useCallback(
    id => () => {
      setTimeout(() => {
        setRows(prevRows => prevRows.filter(row => row.id !== id));
      });
    },
    [],
  );

  const updateTransAction = useCallback(
    params => () => {
      if (rows.find(row => row === params.row)) {
        alert('Изменения не обнаружены, либо ещё не готовы к сохранению');
        return;
      }

      setRows(prevRows => prevRows.map(row => (row.id === params.id ? { ...params.row } : row)));

      alert('Изменения сохранены');
    },
    [rows],
  );

  const columns = [
    { field: 'id', hide: true, headerAlign: 'center' },
    {
      field: 'date',
      headerName: 'Дата',
      minWidth: 150,
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
      minWidth: 150,
      editable: true,
      headerAlign: 'center',
      type: 'singleSelect',
      valueOptions: category,
    },
    {
      field: 'sum',
      headerName: 'Сумма',
      minWidth: 150,
      editable: true,
      headerAlign: 'center',
      type: 'number',
    },
    {
      field: 'delete',
      headerName: '',
      minWidth: 50,
      headerAlign: 'center',
      renderCell: params => (
        <strong>
          <DeleteIcon
            onClick={deleteTransAction(params.id)}
            titleAccess="удалить"
            className={style.button__delete}
          />
        </strong>
      ),
    },
    {
      field: 'actions',
      type: 'actions',
      width: 100,
      getActions: params => [
        <EditIcon
          titleAccess="редактировать"
          onClick={handleOpen}
          className={style.button__edit}
        />,
        <SaveIcon
          titleAccess="сохранит"
          onClick={updateTransAction(params)}
          className={style.button__save}
        />,
      ],
    },
  ];

  const infoMessageByEdit = () => {
    alert('Если вы внесли изминение, не забудьте сохранить их!');
    return;
  };

  return (
    <>
      {open && <InformationEditModal open={open} handleClose={handleClose} />}
      <div className={style.tables__thumb}>
        <div className={style.balancetable__thumb}>
          <DataGrid
            onCellEditCommit={infoMessageByEdit}
            rowsPerPageOptions={[5, 20, 100]}
            rows={rows}
            columns={columns}
            components={{
              Toolbar: CustomToolbar,
            }}
          />
        </div>
        <ReportTable data={reportData} />
      </div>
    </>
  );
};

BalanceTable.propTypes = {
  data: PropTypes.array.isRequired,
  reportData: PropTypes.array.isRequired,
  category: PropTypes.array.isRequired,
};

export default BalanceTable;
