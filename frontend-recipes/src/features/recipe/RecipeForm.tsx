import React from 'react';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import { Button, Grid, } from '@mui/material';

export const RecipeForm = () => {

    const formik = useFormik({
        initialValues: {
            title: '',
            ingredients: '',
            instructions: '',
        }, onSubmit: values => {
            console.log(values); //Replace with logic
        },
    });

    const style = {
        margin: '8px',
        minWidth: '200px',
    };

    return (
        <form className='recipe-form' onSubmit={formik.handleSubmit}>
            <Grid container
                justifyContent="flex-start"
                spacing={2}>
                <Grid item xs sm={12}>
                    <TextField
                        sx={style}
                        id="recipe-title"
                        defaultValue={formik.values.title}
                        onChange={formik.handleChange}
                        type={'text'}
                        name={'title'}
                        label={'Title'}
                        variant={'outlined'}
                    />
                </Grid>
                <Grid item xs sm={12}>
                    <TextField
                        sx={style}
                        id="recipe-ingredients"
                        defaultValue={formik.values.ingredients}
                        onChange={formik.handleChange}
                        type={'text'}
                        name={'Ingredients'}
                        label={'Ingredients'}
                        variant={'outlined'}
                    />
                </Grid>
                <Grid item xs sm={12}>
                    <TextField
                        sx={style}
                        id="recipe-instructions"
                        defaultValue={formik.values.instructions}
                        onChange={formik.handleChange}
                        type={'text'}
                        name={'Instructions'}
                        label={'Instructions'}
                        variant={'outlined'}
                    />
                </Grid>
                <Grid item xs={12} >
                    <Button sx={style} type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Grid>

            </Grid>
        </form>
    );
}