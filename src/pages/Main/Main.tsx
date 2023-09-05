import Title from 'components/Title/Title';
import styles from './Main.module.scss';
import Subtitle from '../../components/Subtitle/Subtitle';

export default function Main() {
    return <>
        <main className={styles.main}>
            <div className={styles.center}>
                <Title size='4.5rem'>Product Name</Title>
                <Subtitle size='1.5rem' color='#D6D6D6'>product description</Subtitle>
            </div>
        </main>
    </>;
}