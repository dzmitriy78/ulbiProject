import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss"
import React, {MutableRefObject} from "react";
import {Portal} from "shared/ui/Portal/Portal";

interface ModalProps {
    className?: string
    children?: React.ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy
    } = props

    const [isClosing, setIsClosing] = React.useState(false)
    const [isMounted, setIsMounted] = React.useState(false)

    const ANIMATION_DELAY = 300
    const timerRef = React.useRef() as MutableRefObject<ReturnType<typeof setTimeout>>
    const closeHandler = () => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            closeHandler()
        }
    }
    const onContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    React.useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown)
        }
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [isOpen])

    React.useEffect(() => {
        if (isOpen) {
            setIsMounted(isOpen)
        }
        return () => setIsMounted(false);
    }, [isOpen])

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }

    if (lazy && !isMounted)
        return null

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay}
                     onClick={closeHandler}>
                    <div className={cls.content}
                         onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}

/* Второй вариант без setTimeout

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose
    } = props

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            onClose()
        }
    }
    const onContentClick = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()

    React.useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown)
        }
        return () => window.removeEventListener("keydown", onKeyDown)
    }, [isOpen])

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.closed]: !isOpen
    }

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay}
                 onClick={() => onClose()}>
                <div className={cls.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </div>
    )
}*/
