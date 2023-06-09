import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss"
import React from "react";

type HTMLInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
}

export const Input = React.memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = "text",
        placeholder,
        autoFocus,
        ...otherProps
    } = props


    const [isFocused, setIsFocused] = React.useState(false)
    const [caretPosition, setCaretPosition] = React.useState(0)

    const ref = React.useRef<HTMLInputElement>(null)

    React.useEffect(() => {
        if (autoFocus) {
            setIsFocused(true)
            ref.current?.focus()
        }
    }, [autoFocus])
    const onBlur = () => {
        setIsFocused(false)
    }
    const onFocus = () => {
        setIsFocused(true)
    }
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        setCaretPosition(e.target.value.length)
    }
    const onSelect = (e: React.SyntheticEvent<HTMLInputElement, Event>) => {
        setCaretPosition(e?.currentTarget?.selectionStart || 0)
    }

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && <div className={cls.placeholder}>
                {`${placeholder}> `}
            </div>
            }
            <div className={cls.caretWrapper}>
                <input ref={ref}
                       type={type}
                       className={cls.input}
                       value={value}
                       onChange={onChangeHandler}
                       onFocus={onFocus}
                       onBlur={onBlur}
                       onSelect={onSelect}
                       {...otherProps}
                />
                {isFocused &&
                    <span className={cls.caret}
                          style={{left: `${caretPosition * 8.8}px`}}
                    />}
            </div>
        </div>
    )
})
