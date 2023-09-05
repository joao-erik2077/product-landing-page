interface TitleProps {
    children: string,
    color?: string,
    size?: string,
}

export default function Title({children, color, size}: TitleProps) {
    return <>
        <h1 style={{
            color: color || '#FFFFFF',
            fontSize: size || '3rem',
        }}>{ children }</h1>
    </>;
}