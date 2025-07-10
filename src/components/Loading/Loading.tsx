import styles from './Loading.module.css'
import {LoaderIcon} from "lucide-react";

export default function Loading(){
    return(
      <div className={styles.loading}>
          <LoaderIcon/>
          Loading
          <LoaderIcon/>
      </div>
    );
}