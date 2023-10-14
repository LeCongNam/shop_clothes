import { Link } from 'react-router-dom'

interface TextItemFooter {
    title: string
    items: items[]
}
type items = { text: string; link?: string }

function TextItemFooter({ title, items }: TextItemFooter) {
    return (
        <div className="flex flex-col gap-4">
            <h4 className="text-sm font-medium">{title}</h4>
            {items.map((textItem: items, index: number) =>
                textItem.link ? (
                    <Link
                        to={textItem.link}
                        className="text-sm font-normal opacity-60 capitalize"
                        key={index}
                    >
                        {textItem.text}
                    </Link>
                ) : (
                    <button
                        className="text-sm font-normal opacity-60 capitalize"
                        key={index}
                    >
                        {textItem.text}
                    </button>
                ),
            )}
        </div>
    )
}

export default TextItemFooter
