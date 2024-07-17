import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { object, string } from 'yup';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';

function Salespeople(props) {

    const [open, setOpen] = React.useState(false);
    const [update, setupdate] = useState(null)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        formik.resetForm();
        setupdate(null)
    };
    const dispatch = useDispatch();

    let ContactSchema = object({
        sname: string().required(),
        city: string().required(),
        commition: string().required()
    });
    const formik = useFormik({
        initialValues: {
            sname: '',
            city: '',
            commition:''
        },
        validationSchema: ContactSchema,
        onSubmit: (values, { resetForm }) => {

            if (update) {
                // dispatch(editecategori(values))
            } else {
                // dispatch(handleAdd(values));
            }

            resetForm()
            handleClose();
        }
    });

    const columns = [
        { field: 'sname', headerName: 'Name', width: 130 },
        { field: 'city', headerName: 'CITY', width: 130 },
        { field: 'commition', headerName: 'COMM', width: 130 },
        {
            field: 'Action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => handleedit(params.row)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => handledeletee(params.row._id)}>
                        <DeleteIcon />
                    </IconButton>
                </>

            )
        },

    ];
    const { handleSubmit, handleBlur, handleChange, touched, errors, values, setValues } = formik;



    const handleedit = (data) => {
        setValues(data)
        setOpen(true);
        setupdate(data._id)

    }


    const handledeletee = async (_id) => {

        // dispatch(handledelete(_id))
    }
    return (
        <>

            <div style={{ textAlign: 'start', marginRight: '50px' }}>
                <React.Fragment>
                    <Button variant="outlined" onClick={handleClickOpen}>
                        Add Salespeople
                    </Button><br /><br />
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Add The Salespeople</DialogTitle>
                        <form onSubmit={handleSubmit}>
                            <DialogContent>
                                <TextField
                                    margin="dense"
                                    id="name"
                                    name="name"
                                    label="sname"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.sname}
                                    error={errors.sname && touched.sname ? true : false}
                                    helperText={errors.sname && errors.sname ? errors.sname : ''}
                                />

                                <TextField
                                    margin="dense"
                                    id="city"
                                    name="city"
                                    label="city"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.city}
                                    error={errors.city && touched.city ? true : false}
                                    helperText={errors.city && errors.city ? errors.city : ''}
                                />

                                <TextField
                                    margin="dense"
                                    id="commition"
                                    name="commition"
                                    label="commition"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.commition}
                                    error={errors.commition && touched.commition ? true : false}
                                    helperText={errors.commition && errors.commition ? errors.commition : ''}
                                />
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button type="submit">{update ? 'update' : 'Add'}</Button>

                                </DialogActions>
                            </DialogContent>
                        </form>
                    </Dialog>
                </React.Fragment>
            </div>
            <div style={{ height: 400, width: '100%' }}>
                {/* <DataGrid
            rows={categori.categori}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 }
              }
            }}
            getRowId={row => row._id}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          /> */}
            </div>
        </>
    );
}

export default Salespeople;
