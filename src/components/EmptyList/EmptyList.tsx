import styles from './EmptyList.module.css'
import {BrushCleaning} from "lucide-react";

export default function EmptyList(){
    return(
      <div className={styles.emptyList}>
          <BrushCleaning/>
          List is empty
          <BrushCleaning/>
      </div>
    );
}