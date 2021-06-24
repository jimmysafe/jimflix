
type TitleProps = {
    text: string
}

const Title = ({ text }: TitleProps) => {
    return (
        <h3 className="text-2xl text-white mb-4 px-4">{text}</h3>
    )
}

export default Title
