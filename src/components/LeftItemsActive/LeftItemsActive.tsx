import styles from './LeftItemsActive.module.css'
import {Flame} from "lucide-react";

interface LeftItemsActiveProps {
    leftItemsNumber: number | string;
}

export default function LeftItemsActive({leftItemsNumber}: LeftItemsActiveProps) {

    return (
        <div className={styles.leftItems}>
            <Flame className={styles.flameIcon}/>
            {leftItemsNumber} active items left
        </div>
    );
}
