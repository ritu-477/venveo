const Description = ({ text, classStyle }) => {
    return (
        <p className={`text-white font-light text-center sm:text-2xl text-custom-lg leading-7 sm:leading-custom-md font-maisonNeue ${classStyle}`}>{text}</p>
    )
}

export default Description