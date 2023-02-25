import { useParams } from 'react-router-dom';

const Page = () => {
    const params = useParams()
    
    return (
        <div style={{
            fontSize: '32px',
            fontWeight: '900',
            paddingTop: '40px',
            width: '100%',
            textAlign: 'center'
        }}>
            {params.column} 입니다.
        </div>
    )
}

export default Page;