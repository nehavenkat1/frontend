import React from 'react'

import { useForm } from '../../shared/hooks/form-hook'
import './PlaceForm.css'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'

const NewPlace = () => {
    const [formState, inputHandler] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        },
        address: {
            value: '',
            isValid: false
        }
    }, false)

    const placeSubmitHandler = event => {
        event.preventDefault()
        console.log(formState.inputs)
    }

    return (
        <form className="place-form" onSubmit={placeSubmitHandler}>
            <Input
                id="title" 
                element="input" 
                type="text" 
                label="Title" 
                errorText="Please enter a valid title"
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
            />
            <Input 
                id="description"
                element="textarea" 
                label="Description" 
                errorText="Please enter a valid address (min.length 5)."
                validators={[VALIDATOR_MINLENGTH(5)]}
                onInput={inputHandler}
            />
            <Input
                id="address" 
                element="input" 
                type="text" 
                label="Address" 
                errorText="Please enter a valid addrss (min. length 5)"
                validators={[VALIDATOR_MINLENGTH(5)]}
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
        </form>
    )
}

export default NewPlace