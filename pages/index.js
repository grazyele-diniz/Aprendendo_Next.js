import axios from 'axios'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {

    const result = await axios.get('https://backendtalentos.herokuapp.com/listuser')

    const data = result.data.Sucess

    return {
        props: { 
            data: data }
    }
}

export default function Users({ data }) {
    return (
        <>

        <h1 className={styles.title}>Usuários do banco de talentos</h1>
            <div>
                   <table border='1' className={styles.table}>
                       <thead>
                           <th>ID Usuário</th>
                           <th>Username</th>
                           <th>E-mail</th>
                           <th>Tenant</th>
                       </thead>
                       <tbody>
                        {Object.values(data).map((data) => (
                        <tr>
                            <td key={data.id}>{data.id}</td>
                            <td key={data.id}>{data.user}</td>
                            <td key={data.id}>{data.email}</td>
                            <td key={data.id}>{data.tenant}</td>
                        </tr>
                        ))}
                        </tbody>
                        </table>
               </div>
        </>
    )
}