import theme from '@styles/theme'
import { CSSProperties } from 'react'

type Position = 'horizontal' | 'vertical'

interface Props {
    position?: Position
    size: string
    color?: CSSProperties['color']
}

export default function Divider({ position = 'horizontal', size, color = theme.colors.black }: Props) {
    const width = position === 'horizontal' ? '' : size
    const height = position === 'horizontal' ? size : ''

    return <div css={{ width, height, backgroundColor: color }} />
}
