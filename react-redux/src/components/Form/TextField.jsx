import classes from "./Form.module.css"

export const TextField = props => {
    return (
        <label className={classes.label}>
            <span className={classes.inputLabel}>{props.name}:</span>
            <div className={classes.inputBlock}>
                <input
                    className={classes.input}
                    placeholder={props.placeholder}
                    type={props.type}
                    {...props.register(props.formName, {
                        required: props.required,
                        minLength: {
                            value: props.minLegth,
                            message: `Minimal length is ${props.minLegth} symbols!`
                        }
                    })}
                />
            </div>
        </label>
    )
}