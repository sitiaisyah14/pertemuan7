import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstStatus({ data }) {
    return (
        <Layout>
            <Head>
                <title>Polinema Status</title>
                <link rel="icon" href="/mortarboard.png" />
            </Head>

            <img src="/images/profile.webp" height={200} width={350} alt="polinema"></img>
            <h1>First Status at Malang State Polytechnic</h1>
            <Link href="/">Kembali Kehalaman Sebelumnya</Link>

            {data.map((dat) => {
                return (
                    <p>{dat.nama}</p>
                );
            })}

        </Layout>
    );
}

export async function getServerSideProps(){
    const res = await fetch(`https://my-json-server.typicode.com/sitiaisyah14/jsonkuis/mahasiswa`)
    const data = await res.json()

    return { props: {data}}
}