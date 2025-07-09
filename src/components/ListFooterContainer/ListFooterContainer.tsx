import styles from './ListFooterContainer.module.css';

interface ListFooterContainerProps {
    leftItemsNumber: number;
}

export default function ListFooterContainer({leftItemsNumber}: ListFooterContainerProps) {
    return (
        <div className={styles.footer}>
            <div className={styles.leftItems}>{leftItemsNumber} items left</div>
        </div>
    );
}
