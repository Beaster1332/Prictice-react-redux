import React from "react"
import classes from "./Form.module.css"

export const TextField = ({ name, placeholder, register, fieldName, required, minLength, type }) => {
    return (
        <label className={classes.label}>
            <span className={classes.inputLabel}>{`${name}:`}</span>
            <div className={classes.inputBlock}>
                <input
                    className={classes.input}
                    type={type}
                    placeholder={placeholder}
                    {...register(fieldName, {
                        required: required,
                        minLength: {
                            value: minLength,
                            message: `Minimal length is ${minLength} symbols!`
                        }
                    })}
                />
            </div>
        </label>
    )
}