import style from './Page.module.css'

function Page({ pageName }) {
    // console.log(pageName)
    return (
        <section className={style.page}>
            <div> This is {pageName} !</div>
        </section>
    )
}

export default Page