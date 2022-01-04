import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import { Button, IconButton, Stack } from '@mui/material';
import RecipeModel from './RecipeModel';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../../app/hooks';
import { addRecipe } from './RecipeSlice';
import { capitalizeFirstLetter } from '../../app/utils';
import ClearIcon from '@mui/icons-material/Clear';
import React, { useState } from 'react';

interface RecipeValues {
    title: string;
    description: string;
    totalTime: string;
    ingredients: string[];
    instructions: string[];
    imageUrl: string;
}

// The custom TextField component for the form
const RecipeTextField = (props: { formik: any, fieldName: string }) => {

    const { formik, fieldName } = props;
    return <TextField
        id={`recipe-${fieldName}`}
        defaultValue={formik.values[fieldName]}
        onChange={formik.handleChange}
        type={'text'}
        name={fieldName}
        label={capitalizeFirstLetter(fieldName)}
        variant={'outlined'}
        fullWidth
        margin={'normal'}
        error={formik.errors[fieldName] ? true : false}
        helperText={formik.errors[fieldName]}
    />;
}

// The custom ArrayTextField component for the recipe form
const RecipeArrayFormField = (props: { formik: any, fieldName: string }) => {
    const [fieldValue, setFieldValue] = useState('');

    const { formik, fieldName } = props;

    const fieldArrayList = formik.values[fieldName];

    const addItem = (value: string) => {
        if (value) {
            formik.setFieldValue(fieldName, [...fieldArrayList, value]);
            setFieldValue('');
        }
    }
    const removeItem = (index: number) => {
        formik.setFieldValue(fieldName, fieldArrayList.filter((item: string, i: number) => i !== index));
    }

    const updateItem = (index: number, value: string) => {
        const newFieldArrayList = [...fieldArrayList];
        newFieldArrayList[index] = value;
        formik.setFieldValue(fieldName, newFieldArrayList);
    }

    return (
        <div>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <TextField
                    id={"item-input"}
                    defaultValue={fieldValue}
                    onChange={(e) => setFieldValue(e.target.value)}
                    type={'text'}
                    name={fieldName}
                    label={capitalizeFirstLetter(fieldName)}
                    variant={'outlined'}
                    margin={'normal'}
                />
                <Button
                    variant={'contained'}
                    color={'primary'}
                    onClick={() => addItem(fieldValue)}
                >
                    Add {capitalizeFirstLetter(fieldName)}
                </Button>
            </Stack>
            {fieldArrayList.map((item: string, index: number) => (
                <Stack key={index}
                    direction={"row"}
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <TextField
                        id={`recipe-${fieldName}-${index}`}
                        defaultValue={item}
                        onChange={(e) => {
                            updateItem(index, e.target.value);
                        }}
                        type={'text'}
                        name={`${fieldName}[${index}]`}
                        label={`${capitalizeFirstLetter(fieldName)} ${index + 1}`}
                        variant={'outlined'}
                        margin={'normal'}
                        error={formik.errors[fieldName] ? true : false}
                        helperText={formik.errors[fieldName]}
                    />
                    <IconButton
                        onClick={() => removeItem(index)}
                    >
                        <ClearIcon />
                    </IconButton>
                </Stack>
            ))}
        </div>
    );
};


export const RecipeForm = (props: { handleClose: Function }) => {

    const dispatch = useAppDispatch();

    const validate = (values: any) => {
        const errors: any = {};
        if (!values.title) {
            errors.title = 'Required';
        }
        if (!values.description) {
            errors.description = 'Required';
        }
        if (!values.totalTime) {
            errors.totalTime = 'Required';
        }
        // if (values.ingredients.length === 0) {
        //     errors.ingredients = 'At least one ingredient is required';
        // }
        // if (values.instructions.length === 0) {
        //     errors.instructions = 'At least one instruction is required';
        // }
        if (!values.imageUrl) {
            errors.imageUrl = 'Required';
        } else if (/^(ht|f)tp(s?):\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-.?,'/\\+&amp;%$#_]*)?$^/.test(values.imageUrl)) {
            errors.imageUrl = 'Invalid URL';
        }
        console.log(errors);
        return errors;
    };

    const formik = useFormik<RecipeValues>({
        initialValues: {
            title: '',
            description: '',
            totalTime: '',
            ingredients: [] as string[],
            instructions: [] as string[],
            imageUrl: '',
        }, validate: validate,
        onSubmit: values => {
            console.log(values);
            const recipe: RecipeModel = { ...values, favorite: false, id: uuidv4() };
            dispatch(addRecipe(recipe));
            props.handleClose();
        },
    });

    return (
        <form className='recipe-form' onSubmit={formik.handleSubmit}>
            <h1>Add Recipe</h1>
            <RecipeTextField formik={formik} fieldName={"title"} />
            <RecipeTextField formik={formik} fieldName={"description"} />
            <RecipeTextField formik={formik} fieldName={"totalTime"} />
            <RecipeTextField formik={formik} fieldName={"imageUrl"} />
            <RecipeArrayFormField formik={formik} fieldName={"ingredients"} />
            <RecipeArrayFormField formik={formik} fieldName={"instructions"} />
            <Button
                type={'submit'}
                variant={'contained'}
                color={'primary'}
                fullWidth
            >
                Add Recipe
            </Button>
        </form>
    );
}