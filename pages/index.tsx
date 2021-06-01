import Head from 'next/head'
import IndexPage from "@/src/views/Index"

export default function Home() {
  return (
    <div>
        <Head>
            <title>Além das Telas</title>
        </Head>
        <IndexPage />
    </div>
  )
}
