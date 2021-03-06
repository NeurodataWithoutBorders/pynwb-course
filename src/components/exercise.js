import React, { useRef, useCallback, useContext, useEffect } from 'react'
import classNames from 'classnames'

import { Button, CompleteButton } from './button'
import { ChapterContext } from '../context'
import IconSlides from '../../static/icon_slides.svg'
import classes from '../styles/exercise.module.sass'

const Exercise = ({ id, title, type, children }) => {
    const excRef = useRef()
    const excId = parseInt(id)
    const { activeExc, setActiveExc, completed, setCompleted } = useContext(ChapterContext)
    const isExpanded = activeExc === excId
    const isCompleted = completed.includes(excId)
    const handleClickOutside = ({ target }) => {
        if (isExpanded && type === 'slides' && excRef.current && !excRef.current.contains(target)) {
            setActiveExc(null)
        }
    }
    const handleEscapePress = (e) => {
        if (isExpanded && excRef.current && (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27)) {
            setActiveExc(null)
        }
    }
    const handleExpand = useCallback(() => setActiveExc(isExpanded ? null : excId), [isExpanded, excId])
    const handleNext = useCallback(() => setActiveExc(excId + 1))
    const handleSetCompleted = useCallback(() => {
        setTimeout(() => {
            const newCompleted = isCompleted
                ? completed.filter(v => v !== excId)
                : [...completed, excId]
            setCompleted(newCompleted)
        }, 20) // previously, when !isCompleted and the button was pressed, the modal would close
        // possibly because of simultaneous update of react DOM from button and exercise. timeout
        // helps prevent clash
    }, [isCompleted, completed, excId])
    useEffect(() => {
        if (isExpanded && excRef.current) {
            excRef.current.scrollIntoView()
            document.addEventListener('click', handleClickOutside, false)
            document.addEventListener('keydown', handleEscapePress, false)
        }
        return () => {
            document.removeEventListener('click', handleClickOutside, false)
            document.removeEventListener('keydown', handleEscapePress, false)
        }
    }, [isExpanded, handleClickOutside, handleEscapePress])
    const rootClassNames = classNames(classes.root, {
        [classes.expanded]: isExpanded,
        [classes.wide]: isExpanded && type === 'slides',
        [classes.completed]: !isExpanded && isCompleted,
    })
    const titleClassNames = classNames(classes.title, {
        [classes.titleExpanded]: isExpanded,
    })
    return (
        <section ref={excRef} id={id} className={rootClassNames}>
            <h2 className={titleClassNames} onClick={handleExpand}>
                <span>
                    <span
                        className={classNames(classes.id, { [classes.idCompleted]: isCompleted })}
                    >
                        {excId}
                    </span>
                    {title}
                </span>
                {type === 'slides' && <IconSlides className={classes.icon} />}
            </h2>
            {isExpanded && (
                <div>
                    {children}
                    <footer className={classes.footer}>
                        <CompleteButton
                            completed={isCompleted}
                            toggleComplete={handleSetCompleted}
                        />
                        <Button onClick={handleNext} variant="secondary" small>
                            Next
                        </Button>
                    </footer>
                </div>
            )}
        </section>
    )
}

export default Exercise
