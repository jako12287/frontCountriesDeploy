import React from "react";
import styles from '../elements_CSS/Modal.module.css'
import { ModalCreate } from "../../Countries_store/actions";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";

export const Modal = ()=>{
    
    let dispatch = useDispatch()

    let add = (e)=>{
        e.preventDefault()
        dispatch(ModalCreate(false))

    }
    let handleReset = (e)=>{
        dispatch(ModalCreate(false))

    }

    return(
        <div className={styles.container}>

           <div className={styles.modal}>
            <h4>!!Activity created successfully!!</h4>
            <h5>what do you want to do now?</h5>
            <button className={styles.add} onClick={add}>{` ➕ ADD MORE`}</button>
            <Link to='/home' className={styles.link}><button className={styles.home} onClick={handleReset}>{`🏠 HOME`}</button></Link>
           </div>

        </div>
    )
}