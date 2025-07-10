import styles from './ListHeaderContainer.module.css';
import {BookText} from 'lucide-react';

interface ListHeaderContainerProps {
    title: string;
}

export default function ListHeaderContainer({ title }: ListHeaderContainerProps) {
    return (
        <div className={styles.header}>
            <BookText size={25} />
            <div className={styles.title}>
                {title}
            </div>
        </div>
    );
}
