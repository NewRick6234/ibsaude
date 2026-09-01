function Footer(){
    const ano = new Date().getFullYear()
    return(
        <><div  className='max-h-full w-full mx-auto px-4 sm:px-6 items-center justify- lg:px-8 py-6 flex flex-col gap-6 border'>
            <div className='text-blue-400 mb-8'>
                <p>©{ano}  ibsaude </p>
                <div>

                </div>
            </div>
        </div>
        </>
    )
}
export default Footer