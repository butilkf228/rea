import css from './ColorPicker.module.scss'
import PropTypes from 'prop-types';

export const ColorPicker = ({options})=>{
    return <>
    <ul className={css.list}>
        {options.map((option)=>{
        return <li style={{backgroundColor: option.color}}>
            {option.label}
        </li>
    })

    }
    </ul>
    </>
}

ColorPicker.propTypes = {
    options: PropTypes.array
}