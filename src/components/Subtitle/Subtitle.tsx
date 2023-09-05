interface SubtitleProps {
    children: string,
    color?: string,
    size?: string,
}

export default function Subtitle({children, color, size}: SubtitleProps) {
    return <>
        <h1 style={{
            color: color || '#FFFFFF',
            fontSize: size || '1rem',
            fontStyle: 'italic',
        }}>{ children }</h1>
    </>;
}