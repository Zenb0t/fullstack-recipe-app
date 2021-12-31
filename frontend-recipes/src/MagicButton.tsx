

import { Button } from "@mui/material";
import { store } from "./app/store";

export const MagicButton = () => {

    const action = () => console.log(store.getState().recipe.recipelist);
    return (
        <Button onClick={action}        >
            Magic!
        </Button>);
}