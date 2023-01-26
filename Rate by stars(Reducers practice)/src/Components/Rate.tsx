import React, { useReducer} from 'react'
import { ACTIONS, reducer, showStatus } from './ReducerFunction'
import styles from "./Rate.module.scss"


const Rate = () => {
  
  const initialState={
    stars:1, 
    showEmoji:showStatus[0]["face"],
    comment:showStatus[0]["comment"]
  }
  const[state,dispatch]=useReducer(reducer,initialState);

  console.log("in app",state,dispatch)
  return (
    <main className={styles.container}>
        <span className={styles.star}>{'⭐'.repeat(state.stars)}</span>

        <div className={styles.btnContainer}>
        <button className={styles.btn} 
                onClick={()=>dispatch({type:ACTIONS.ADD_STAR, payload:{payload:'Comment'}})}
                >Add stars</button>
        <button className={styles.btn} onClick={()=>dispatch({type:ACTIONS.REMOVE_STAR})}>Remove stars</button>
        <button className={styles.btn} onClick={()=>dispatch({type:ACTIONS.RESET})}>Reset</button> 
        </div>

        <div>
        <span className={styles.emojiFaces}>{state.showEmoji}</span>
        </div>

        <div>
          <span>{state.comment}</span>
        </div>
        
    </main>
  )
}

export default Rate;