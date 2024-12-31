const Heading = ({ classStyle, spanText, text, spanTwo }) => {
    return (
        <h2 className={`${classStyle} xl:text-custom-4xl xl:leading-custom-10xl font-testSöhneSchmal font-bold text-6xl leading-custom-9xl`}><span className="font-bold">{spanText}</span> {text} <span className="font-bold">{spanTwo}</span></h2>
    )
}

export default Heading