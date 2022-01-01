import React from 'react';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import { Button, Card, Box, } from '@mui/material';
import RecipeModel from './RecipeModel';
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useDispatch } from 'react-redux';
import { type } from 'os';
import { addRecipe } from './RecipeSlice';



export const RecipeForm = (props:{handleClose: Function }) => {

    const dispatch = useAppDispatch();

    const selector = useAppSelector(state => state.recipe.recipelist);

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            ingredients: '',
            instructions: '',
            imageUrl: '',
        }, onSubmit: values => {
            const recipe: RecipeModel = { ...values, favorite: false, id: uuidv4() };
            dispatch(addRecipe(recipe));
            console.log(selector);
            props.handleClose();
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