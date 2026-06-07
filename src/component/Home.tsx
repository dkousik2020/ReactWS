export default function Home() {
    return (<div style={styles.container}>
        <label htmlFor="password" style={styles.label}>Home Screen</label>
    </div>);
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f3f4f6',
        fontFamily: 'system-ui, sans-serif'
    },
    label: {
        display: 'block',
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '500',
        color: '#4b5563'
    }
}