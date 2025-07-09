import styles from './ListHeaderContainer.module.css';
import { ChevronDown } from 'lucide-react';

interface ListHeaderContainerProps {
    title: string;
}

export default function ListHeaderContainer({ title }: ListHeaderContainerProps) {
    return (
        <div className={styles.header}>
            <ChevronDown size={20} />
            <div className={styles.title}>
                {title}
            </div>
        </div>
    );
}
