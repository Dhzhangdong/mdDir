import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'umi';
import mermaid from 'mermaid';
import katex from 'katex'
import { CodeProps } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism'
import 'katex/dist/katex.css'



function RenderInline({ children = [] }: Omit<CodeProps, 'inline'>) {
    const txt = children[0] || ''
    if (typeof txt === 'string' && /^\$\$(.*)\$\$/.test(txt)) {
        const html = katex.renderToString(txt.replace(/^\$\$(.*)\$\$/, '$1'), { throwOnError: false })
        return (
            <code
                style={{ backgroundColor: 'rgb(227, 234, 242)', padding: '0.2rem', borderRadius: '0.2rem' }}
                dangerouslySetInnerHTML={{ __html: html }}
            />
        )
    }
    return <code>{txt}</code>
}

function RenderBlock({ children = [], className, ...props }: Omit<CodeProps, 'inline'>) {
    const markId = useRef(`mark${randomId()}`)
    const code = getCode(children)

    const [transformCode, setTransformCode] = useState('')

    const codeType = useMemo(() => {
        if (typeof code !== "string" || typeof className !== "string") return

        if (/^language-mermaid/.test(className.toLocaleLowerCase())) {
            return 'mermaid'
        } else if (/^language-katex/.test(className.toLocaleLowerCase())) {
            return 'katex'
        }
    }, [code, className])

    const renderMermaid = useCallback(async (code: string) => {
        const { svg } = await mermaid.render(markId.current, code)

        setTransformCode(svg)
    }, [])

    const renderKatex = useCallback(async (code: string) => {
        const strCode = katex.renderToString(code, { throwOnError: false })

        setTransformCode(strCode)
    }, [])

    useEffect(() => {
        if (codeType === 'mermaid') {
            renderMermaid(code)
        } else if (codeType === 'katex') {
            renderKatex(code)
        }
    }, [code, codeType])

    if (codeType === 'mermaid') {
        return (
            <div className='code-block' style={{ textAlign: 'center' }}>
                <code dangerouslySetInnerHTML={{ __html: transformCode }} />
            </div>
        )
    } else if (codeType === 'katex') {
        return (
            <code
                className='code-block'
                dangerouslySetInnerHTML={{ __html: transformCode }}
            />
        )
    }

    const match = /language-(\w+)/.exec(className || '')
    return <SyntaxHighlighter
        language={match?.[1]}
        showLineNumbers={true}
        style={coldarkCold as any}
        PreTag='div'
        className='syntax-hight-wrapper'
        {...props}
    >
        {children as string[]}
    </SyntaxHighlighter>
}

function randomId() {
    return parseInt(String(Math.random() * 1e15), 10).toString(36)
}

function getCode(arr: React.ReactNode[] = []): string {
    return arr.map((_dt) => {
        const dt = _dt as any

        if (typeof dt === "string") {
            return dt
        }
        if (dt.props && dt.props.children) {
            return getCode(dt.props.children)
        }
        return false
    }).filter(Boolean).join("")
}

export default function SpecialCode({ inline, ...extra }: CodeProps) {
    if (inline) return <RenderInline {...extra} />

    return <RenderBlock {...extra} />
}
