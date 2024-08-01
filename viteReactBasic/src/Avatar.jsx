function Avatar({src, width, height, children}){

    return (
        <>
            <img src={src} width={width} height={height} />
            <img src={src} width={width} height={height} />
            <img src={src} width={width} height={height} />
            
        </>

    )
}
export default Avatar;