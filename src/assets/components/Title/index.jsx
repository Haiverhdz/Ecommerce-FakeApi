import '../Title/index.css';

const Title = ({heading='h1', text, className}) => {
    const Tag = heading;
    return <Tag className={className}>{text}</Tag>
};

export default Title;