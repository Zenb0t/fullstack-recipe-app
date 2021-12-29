import React from 'react';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import { Button, Card, Box, } from '@mui/material';

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

    return (
        <form className='recipe-form' onSubmit={formik.handleSubmit}>
            <h1>Add Recipe</h1>
            <TextField
                id="recipe-title"
                defaultValue={formik.values.title}
                onChange={formik.handleChange}
                type={'text'}
                name={'title'}
                label={'Title'}
                variant={'outlined'}
                fullWidth
                margin={'normal'}
            />
            <br></br>
            <TextField
                id="recipe-ingredients"
                defaultValue={formik.values.ingredients}
                onChange={formik.handleChange}
                type={'text'}
                name={'Ingredients'}
                label={'Ingredients'}
                variant={'outlined'}
                fullWidth
                margin={'normal'}
            />
            <TextField
                id="recipe-instructions"
                defaultValue={formik.values.instructions}
                onChange={formik.handleChange}
                type={'text'}
                name={'Instructions'}
                label={'Instructions'}
                variant={'outlined'}
                fullWidth
                margin={'normal'}
            />
            <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
            >
                Submit
            </Button>
        </form>
    );
}