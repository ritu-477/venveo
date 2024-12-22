const Description = ({ text, classStyle }) => {
    return (
        <p className={`text-custom-lg leading-5 font-maisonLight ${classStyle}`}>{text}</p>
    )
}

export default Description